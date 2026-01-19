import { PrismaClient } from '../../generated/postgres/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { getEnv } from './env.config';
import { logger } from '../utils/logger.util';

/**
 * Global prisma reference (DEV only)
 */
const globalForPrisma = global as unknown as {
  prismaPg?: PrismaClient;
};

class DatabaseConfig {
  private static instance: PrismaClient | null = null;
  private static isConnected = false;

  private constructor() {}

  /**
   * Create or reuse Prisma instance
   */
  public static getInstance(): PrismaClient {
    if (DatabaseConfig.instance) {
      return DatabaseConfig.instance;
    }

    // ♻️ Hot reload safe (DEV)
    if (getEnv.isDevelopment() && globalForPrisma.prismaPg) {
      logger.debug('Reusing global Prisma PostgreSQL instance (DEV)');
      DatabaseConfig.instance = globalForPrisma.prismaPg;
      return DatabaseConfig.instance;
    }

    logger.info('Creating PostgreSQL pool');

    const pool = new Pool({
      connectionString: process.env.DATABASE_URL_POSTGRES,
      max: 10,
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 10_000,
    });

    const adapter = new PrismaPg(pool);

    const prisma = new PrismaClient({
      adapter,
      log: [
        { level: 'warn', emit: 'event' },
        { level: 'error', emit: 'event' },
      ],
      errorFormat: 'pretty',
    });

    prisma.$on('warn', (e) => {
      logger.warn('Prisma warning', { message: e.message });
    });

    prisma.$on('error', (e) => {
      logger.error('Prisma error', {
        message: e.message,
        target: e.target,
      });
    });

    if (getEnv.isDevelopment()) {
      globalForPrisma.prismaPg = prisma;
    }

    DatabaseConfig.instance = prisma;
    return prisma;
  }

  /**
   * Explicit DB connect
   */
  public static async connect(): Promise<void> {
    if (DatabaseConfig.isConnected) {
      logger.debug('PostgreSQL already connected');
      return;
    }

    const prisma = DatabaseConfig.getInstance();
    await prisma.$connect();

    DatabaseConfig.isConnected = true;
    logger.info('PostgreSQL connected (Prisma 7)');
  }

  /**
   * Graceful disconnect
   */
  public static async disconnect(): Promise<void> {
    if (!DatabaseConfig.instance || !DatabaseConfig.isConnected) {
      logger.debug('PostgreSQL disconnect skipped (not connected)');
      return;
    }

    await DatabaseConfig.instance.$disconnect();
    DatabaseConfig.isConnected = false;

    if (getEnv.isDevelopment()) {
      globalForPrisma.prismaPg = undefined;
    }

    DatabaseConfig.instance = null;
    logger.info('PostgreSQL disconnected');
  }

  /**
   * Health check
   */
  public static async healthCheck(): Promise<boolean> {
    try {
      const prisma = DatabaseConfig.getInstance();
      await prisma.$queryRaw`SELECT 1`;
      return true;
    } catch (error) {
      logger.error('PostgreSQL health check failed', { error });
      return false;
    }
  }

  /**
   * Force cleanup (tests / emergency)
   */
  public static async forceCleanup(): Promise<void> {
    if (!DatabaseConfig.instance) return;

    await DatabaseConfig.instance.$disconnect();
    DatabaseConfig.instance = null;
    DatabaseConfig.isConnected = false;

    if (getEnv.isDevelopment()) {
      globalForPrisma.prismaPg = undefined;
    }

    logger.warn('Prisma PostgreSQL instance force cleaned');
  }
}

/**
 * Export singleton
 */
export const prisma = DatabaseConfig.getInstance();
export default DatabaseConfig;
