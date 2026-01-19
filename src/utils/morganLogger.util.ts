
import { logger } from './logger.util';

export const morganStream = {
  write: (message: string) => {
    const msg = message.trim();
    if (!msg) return; // 🚫 prevent undefined logs
    logger.http(msg);
  },
};
