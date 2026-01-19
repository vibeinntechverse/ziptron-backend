import { PrismaClient } from "../../generated/postgres/client";
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { getEnv } from './env.config';

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

    // ♻️ Reuse Prisma instance in development (Hot Reload safe)
    if (getEnv.isDevelopment() && globalForPrisma.prismaPg) {
      DatabaseConfig.instance = globalForPrisma.prismaPg;
      return DatabaseConfig.instance;
    }

    // 🔌 Create PostgreSQL pool
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL_POSTGRES,
      max: 10,
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 10_000,
    });

    // 🔗 Prisma PG Adapter (Prisma 7 pattern)
    const adapter = new PrismaPg(pool);

    const prisma = new PrismaClient({
      adapter,
      log: getEnv.isDevelopment()
        ? ['query', 'warn', 'error']
        : ['error'],
      errorFormat: 'pretty',
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
      return;
    }

    const prisma = DatabaseConfig.getInstance();
    await prisma.$connect();
    DatabaseConfig.isConnected = true;

    console.log('✅ PostgreSQL connected (Prisma 7)');
  }

  /**
   * Graceful disconnect
   */
  public static async disconnect(): Promise<void> {
    if (!DatabaseConfig.instance || !DatabaseConfig.isConnected) {
      return;
    }

    await DatabaseConfig.instance.$disconnect();
    DatabaseConfig.isConnected = false;

    if (getEnv.isDevelopment()) {
      globalForPrisma.prismaPg = undefined;
    }

    DatabaseConfig.instance = null;
    console.log('🔌 PostgreSQL disconnected');
  }

  /**
   * Health check
   */
  public static async healthCheck(): Promise<boolean> {
    try {
      const prisma = DatabaseConfig.getInstance();
      await prisma.$queryRaw`SELECT 1`;
      return true;
    } catch (err) {
      console.error('❌ DB health check failed', err);
      return false;
    }
  }

  /**
   * Raw SQL (debug / admin only)
   */
  public static async executeRaw<T = unknown>(
    query: string,
  ): Promise<T> {
    const prisma = DatabaseConfig.getInstance();
    return prisma.$queryRawUnsafe<T>(query);
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

    console.log('🧹 Prisma PostgreSQL instance force cleaned');
  }
}

/**
 * Export singleton
 */
export const prisma = DatabaseConfig.getInstance();
export default DatabaseConfig;
