// src/services/auth.service.ts
import { prisma } from '../config/postgres.config';
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from '../utils/jwt.util';
import { UserRole } from '../../generated/postgres/client';

export class AuthService {

  /* =========================================================
     SYNC CLERK USER → ZIPTRON USER
     ========================================================= */
  static async syncClerkUser(clerkUser: any) {
    return prisma.$transaction(async (tx) => {
      const existing = await tx.user.findUnique({
        where: { clerkId: clerkUser.id },
      });

      if (existing) return existing;

      const email =
        clerkUser.email_addresses?.[0]?.email_address ??
        clerkUser.emailAddresses?.[0]?.emailAddress;

      if (!email) {
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

      return user;
    });
  }

  /* =========================================================
     EXCHANGE CLERK USER → ZIPTRON JWT
     ========================================================= */
  static async exchangeClerkForJWT(clerkUserId: string) {
    const user = await prisma.user.findUnique({
      where: { clerkId: clerkUserId },
    });

    if (!user) {
      throw new Error('User not provisioned');
    }

    if (!user.isActive) {
      throw new Error('User account is disabled');
    }

    const accessToken = generateAccessToken({
      id: user.id,
      role: user.role,
    });

    const refreshToken = generateRefreshToken({
      id: user.id,
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
    const decoded = verifyRefreshToken(refreshToken);

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
    });

    if (!user || !user.isActive) {
      throw new Error('Invalid refresh token');
    }

    const accessToken = generateAccessToken({
      id: user.id,
      role: user.role,
    });

    return { accessToken };
  }

  /* =========================================================
     CURRENT USER
     ========================================================= */
  static async getMe(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) throw new Error('User not found');

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
