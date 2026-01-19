// src/services/auth.service.ts
import { prisma } from '../config/postgres.config';
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from '../utils/jwt.util';
import { UserRole } from '../../generated/postgres/client';
import { logger } from '../utils/logger.util';

export class AuthService {

  /* =========================================================
     SYNC CLERK USER → ZIPTRON USER
     ========================================================= */
  static async syncClerkUser(clerkUser: any) {
    return prisma.$transaction(async (tx) => {
      logger.debug('Syncing Clerk user', {
        clerkUserId: clerkUser?.id,
      });

      const existing = await tx.user.findUnique({
        where: { clerkId: clerkUser.id },
      });

      if (existing) {
        logger.info('Clerk user already synced', {
          clerkUserId: clerkUser.id,
          userId: existing.id,
        });
        return existing;
      }

      const email =
        clerkUser.email_addresses?.[0]?.email_address ??
        clerkUser.emailAddresses?.[0]?.emailAddress;

      if (!email) {
        logger.error('Clerk user missing email', {
          clerkUserId: clerkUser.id,
        });
        throw new Error('Email not available from Clerk');
      }

      const phone =
        clerkUser.phone_numbers?.[0]?.phone_number ??
        clerkUser.phoneNumbers?.[0]?.phoneNumber ??
        null;

      const user = await tx.user.create({
        data: {
          clerkId: clerkUser.id,
          email: email.toLowerCase(),
          phone,
          role: UserRole.USER, // 🔒 ALWAYS USER
        },
      });

      logger.info('Clerk user synced to Ziptron', {
        clerkUserId: clerkUser.id,
        userId: user.id,
        email: user.email,
      });

      return user;
    });
  }

  /* =========================================================
     EXCHANGE CLERK USER → ZIPTRON JWT
     ========================================================= */
  static async exchangeClerkForJWT(clerkUserId: string) {
    logger.debug('Exchanging Clerk user for JWT', {
      clerkUserId,
    });

    const user = await prisma.user.findUnique({
      where: { clerkId: clerkUserId },
    });

    if (!user) {
      logger.warn('JWT exchange failed: user not provisioned', {
        clerkUserId,
      });
      throw new Error('User not provisioned');
    }

    if (!user.isActive) {
      logger.warn('JWT exchange failed: user disabled', {
        userId: user.id,
      });
      throw new Error('User account is disabled');
    }

    const accessToken = generateAccessToken({
      id: user.id,
      role: user.role,
    });

    const refreshToken = generateRefreshToken({
      id: user.id,
    });

    logger.info('JWT issued successfully', {
      userId: user.id,
      role: user.role,
    });

    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        email: user.email,
        phone: user.phone,
        role: user.role,
        walletBalance: user.walletBalance,
      },
    };
  }

  /* =========================================================
     REFRESH ACCESS TOKEN
     ========================================================= */
  static async refreshAccessToken(refreshToken: string) {
    logger.debug('Refreshing access token');

    const decoded = verifyRefreshToken(refreshToken);

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
    });

    if (!user || !user.isActive) {
      logger.warn('Refresh token invalid or user inactive', {
        userId: decoded.id,
      });
      throw new Error('Invalid refresh token');
    }

    const accessToken = generateAccessToken({
      id: user.id,
      role: user.role,
    });

    logger.info('Access token refreshed', {
      userId: user.id,
    });

    return { accessToken };
  }

  /* =========================================================
     CURRENT USER
     ========================================================= */
  static async getMe(userId: string) {
    logger.debug('Fetching current user', { userId });

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      logger.warn('GetMe failed: user not found', { userId });
      throw new Error('User not found');
    }

    return {
      id: user.id,
      email: user.email,
      phone: user.phone,
      role: user.role,
      walletBalance: user.walletBalance,
      createdAt: user.createdAt,
    };
  }
}
