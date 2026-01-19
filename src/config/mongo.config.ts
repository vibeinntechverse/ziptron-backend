import { PrismaClient } from '../../generated/mongo';
import { getEnv } from './env.config';

/**
 * Global Mongo Prisma reference (DEV only)
 */
const globalForMongo = global as unknown as {
  prismaMongo?: PrismaClient;
};

class MongoDatabaseConfig {
  private static instance: PrismaClient | null = null;
  private static isConnected = false;

  private constructor() {}

  /**
   * Create or reuse Prisma Mongo instance
   */
  public static getInstance(): PrismaClient {
    if (MongoDatabaseConfig.instance) {
      return MongoDatabaseConfig.instance;
    }

    // ♻️ Hot reload safe (DEV)
    if (getEnv.isDevelopment() && globalForMongo.prismaMongo) {
      MongoDatabaseConfig.instance = globalForMongo.prismaMongo;
      return MongoDatabaseConfig.instance;
    }

    // ✅ MongoDB Prisma Client (NO adapter, NO datasourceUrl)
    const prisma = new PrismaClient({
      log: getEnv.isDevelopment()
        ? ['warn', 'error']
        : ['error'],
      errorFormat: 'pretty',
    });

    if (getEnv.isDevelopment()) {
      globalForMongo.prismaMongo = prisma;
    }

    MongoDatabaseConfig.instance = prisma;
    return prisma;
  }

  /**
   * Explicit connect
   */
  public static async connect(): Promise<void> {
    if (MongoDatabaseConfig.isConnected) return;

    const prisma = MongoDatabaseConfig.getInstance();
    await prisma.$connect();
    MongoDatabaseConfig.isConnected = true;

    console.log('✅ MongoDB connected (Prisma 7)');
  }

  /**
   * Graceful disconnect
   */
  public static async disconnect(): Promise<void> {
    if (!MongoDatabaseConfig.instance || !MongoDatabaseConfig.isConnected) {
      return;
    }

    await MongoDatabaseConfig.instance.$disconnect();
    MongoDatabaseConfig.isConnected = false;

    if (getEnv.isDevelopment()) {
      globalForMongo.prismaMongo = undefined;
    }

    MongoDatabaseConfig.instance = null;
    console.log('🔌 MongoDB disconnected');
  }

  /**
   * Health check
   */
  public static async healthCheck(): Promise<boolean> {
    try {
      const prisma = MongoDatabaseConfig.getInstance();
      await prisma.$runCommandRaw({ ping: 1 });
      return true;
    } catch (error) {
      console.error('❌ MongoDB health check failed', error);
      return false;
    }
  }

  /**
   * Force cleanup
   */
  public static async forceCleanup(): Promise<void> {
    if (!MongoDatabaseConfig.instance) return;

    await MongoDatabaseConfig.instance.$disconnect();
    MongoDatabaseConfig.instance = null;
    MongoDatabaseConfig.isConnected = false;

    if (getEnv.isDevelopment()) {
      globalForMongo.prismaMongo = undefined;
    }

    console.log('🧹 Mongo Prisma instance force cleaned');
  }

  public static getConnectionStatus(): boolean {
    return MongoDatabaseConfig.isConnected;
  }
}

export const mongo = MongoDatabaseConfig.getInstance();
export default MongoDatabaseConfig;
