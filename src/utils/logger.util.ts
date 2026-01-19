import winston from 'winston';
import { getEnv } from '../config/env.config';

const { combine, timestamp, printf, colorize, errors } = winston.format;

const logFormat = printf(({ level, message, timestamp, stack, ...meta }) => {
  const content = stack || message;

  // 🚫 ABSOLUTE GUARD
  if (!content) return '';

  return `${timestamp} [${level}]: ${content}${
    Object.keys(meta).length ? ` ${JSON.stringify(meta)}` : ''
  }`;
});

const baseFormat = combine(
  errors({ stack: true }),
  timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  logFormat
);

export const logger = winston.createLogger({
  level: getEnv.isDevelopment() ? 'info' : 'debug',
  format: baseFormat, // 👈 applies to ALL transports
  transports: [
    new winston.transports.Console({
      format: combine(colorize(), baseFormat),
    }),
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
      format: baseFormat,
    }),
    new winston.transports.File({
      filename: 'logs/combined.log',
      format: baseFormat,
    }),
  ],
});
