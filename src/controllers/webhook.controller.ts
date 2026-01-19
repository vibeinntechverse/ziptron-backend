import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import ClerkConfig from '../config/clerk.config';

export class WebhookController {
  /**
   * Handle Clerk webhook events (Ziptron)
   */
  static async handleClerkWebhook(req: Request, res: Response) {
    try {
      console.log('📥 Clerk webhook received');

      const payload = req.body;
      const headers = req.headers as Record<string, string>;

      // 🔐 Verify webhook signature
      const evt = await ClerkConfig.verifyWebhook(payload, headers);

      if (!evt) {
        return res.status(401).json({
          success: false,
          message: 'Invalid webhook signature',
        });
      }

      const { type, data } = evt as any;
      console.log('📋 Event:', type);

      switch (type) {
        /**
         * User lifecycle
         */
        case 'user.created':
          await AuthService.syncClerkUser(data);
          console.log('✅ User synced');
          break;

        case 'user.updated':
          // Optional: update email/phone later if needed
          console.log('ℹ️ User updated (ignored)');
          break;

        case 'user.deleted':
          // Optional soft-disable if needed
          console.log('ℹ️ User deleted (ignored)');
          break;

        default:
          console.log('ℹ️ Unhandled Clerk event:', type);
      }

      return res.status(200).json({
        success: true,
      });
    } catch (error: any) {
      console.error('❌ Clerk webhook error:', error);

      return res.status(500).json({
        success: false,
        message: 'Webhook processing failed',
      });
    }
  }
}
