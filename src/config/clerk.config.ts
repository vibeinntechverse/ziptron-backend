// ============================================
// src/config/clerk.config.ts
// Clerk authentication configuration
// ============================================
import { createClerkClient } from '@clerk/express';
import { getEnv } from './env.config';
import { logger } from '../utils/logger.util';

class ClerkConfig {
  private static instance: ReturnType<typeof createClerkClient>;
  private static isInitialized = false;

  private constructor() {}

  /**
   * Get Clerk client instance (singleton)
   */
  public static getInstance(): ReturnType<typeof createClerkClient> {
    if (!ClerkConfig.instance) {
      const secretKey = getEnv.CLERK_SECRET_KEY;

      if (!secretKey) {
        logger.error('CLERK_SECRET_KEY is not configured');
        throw new Error('CLERK_SECRET_KEY is not configured');
      }

      ClerkConfig.instance = createClerkClient({ secretKey });
      ClerkConfig.isInitialized = true;

      logger.info('Clerk initialized successfully');
    }

    return ClerkConfig.instance;
  }

  /**
   * Check if Clerk is ready
   */
  public static isReady(): boolean {
    return ClerkConfig.isInitialized;
  }

  /**
   * Get user by Clerk ID
   */
  public static async getUserById(clerkUserId: string) {
    try {
      const clerk = ClerkConfig.getInstance();
      const user = await clerk.users.getUser(clerkUserId);

      logger.info('Retrieved user from Clerk', { clerkUserId });
      return user;
    } catch (error: any) {
      logger.error('Error fetching user from Clerk', {
        clerkUserId,
        error,
      });
      throw new Error(`Failed to fetch user from Clerk`);
    }
  }

  /**
   * Get user by email
   */
  public static async getUserByEmail(email: string) {
    try {
      const clerk = ClerkConfig.getInstance();
      const response = await clerk.users.getUserList({
        emailAddress: [email],
      });

      if (response.data?.length) {
        logger.info('Retrieved user from Clerk by email', { email });
        return response.data[0];
      }

      return null;
    } catch (error: any) {
      logger.error('Error fetching user by email from Clerk', {
        email,
        error,
      });
      throw new Error('Failed to fetch user by email');
    }
  }

  /**
   * Verify Clerk webhook signature using Svix
   */
  public static async verifyWebhook(
    payload: string | Buffer,
    headers: Record<string, string | string[] | undefined>
  ) {
    try {
      const webhookSecret = getEnv.CLERK_WEBHOOK_SECRET;

      if (!webhookSecret) {
        logger.error('CLERK_WEBHOOK_SECRET is not configured');
        throw new Error('CLERK_WEBHOOK_SECRET is not configured');
      }

      const svixId = Array.isArray(headers['svix-id'])
        ? headers['svix-id'][0]
        : headers['svix-id'];
      const svixTimestamp = Array.isArray(headers['svix-timestamp'])
        ? headers['svix-timestamp'][0]
        : headers['svix-timestamp'];
      const svixSignature = Array.isArray(headers['svix-signature'])
        ? headers['svix-signature'][0]
        : headers['svix-signature'];

      if (!svixId || !svixTimestamp || !svixSignature) {
        logger.warn('Missing Svix webhook headers');
        throw new Error('Missing required Svix webhook headers');
      }

      const { Webhook } = await import('svix');
      const wh = new Webhook(webhookSecret);

      const payloadString =
        typeof payload === 'string' ? payload : payload.toString();

      const evt = wh.verify(payloadString, {
        'svix-id': svixId,
        'svix-timestamp': svixTimestamp,
        'svix-signature': svixSignature,
      });

      logger.info('Clerk webhook signature verified');
      return evt;
    } catch (error: any) {
      logger.warn('Clerk webhook verification failed', {
        error: error.message,
      });
      throw error;
    }
  }

  /**
   * Update user metadata in Clerk
   */
  public static async updateUserMetadata(
    clerkUserId: string,
    metadata: Record<string, any>
  ) {
    try {
      const clerk = ClerkConfig.getInstance();
      const user = await clerk.users.updateUserMetadata(clerkUserId, {
        publicMetadata: metadata,
      });

      logger.info('Updated Clerk user metadata', { clerkUserId });
      return user;
    } catch (error: any) {
      logger.error('Error updating Clerk user metadata', {
        clerkUserId,
        error,
      });
      throw error;
    }
  }

  /**
   * Delete user from Clerk
   */
  public static async deleteUser(clerkUserId: string) {
    try {
      const clerk = ClerkConfig.getInstance();
      await clerk.users.deleteUser(clerkUserId);

      logger.info('Deleted user from Clerk', { clerkUserId });
    } catch (error: any) {
      logger.error('Error deleting user from Clerk', {
        clerkUserId,
        error,
      });
      throw error;
    }
  }
}

export default ClerkConfig;
export const clerkClient = ClerkConfig.getInstance();
