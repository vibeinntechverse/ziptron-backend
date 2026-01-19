import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import ClerkConfig from '../config/clerk.config';
import { logger } from '../utils/logger.util';

export class WebhookController {
  /**
   * Handle Clerk webhook events (Ziptron)
   */
  static async handleClerkWebhook(req: Request, res: Response) {
    try {
      logger.info('Clerk webhook received');

      const payload = req.body;
      const headers = req.headers as Record<string, string>;

      // 🔐 Verify webhook signature
      const evt = await ClerkConfig.verifyWebhook(payload, headers);

      if (!evt) {
        logger.warn('Invalid Clerk webhook signature');
        return res.status(401).json({
          success: false,
          message: 'Invalid webhook signature',
        });
      }

      const { type, data } = evt as any;

      logger.info('Processing Clerk event', {
        eventType: type,
        clerkUserId: data?.id,
      });

      switch (type) {
        /**
         * User lifecycle
         */
        case 'user.created':
          await AuthService.syncClerkUser(data);
          logger.info('Clerk user synced successfully', {
            clerkUserId: data.id,
            email: data.email_addresses?.[0]?.email_address,
          });
          break;

        case 'user.updated':
          logger.info('Clerk user updated (ignored)', {
            clerkUserId: data.id,
          });
          break;

        case 'user.deleted':
          logger.info('Clerk user deleted (ignored)', {
            clerkUserId: data.id,
          });
          break;

        default:
          logger.warn('Unhandled Clerk webhook event', {
            eventType: type,
          });
      }

      return res.status(200).json({ success: true });
    } catch (error: any) {
      logger.error('Clerk webhook processing failed', {
        error,
        body: req.body,
      });

      return res.status(500).json({
        success: false,
        message: 'Webhook processing failed',
      });
    }
  }
}
