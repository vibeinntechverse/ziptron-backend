import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { clerkMiddleware } from '@clerk/express';
import { getEnv } from './config/env.config';
import PostgresConfig from './config/postgres.config';
import MongoConfig from './config/mongo.config';
import webhookRoutes from './routes/webhook.routes';
import vehicleCatalogRoutes from './routes/vehicleCatalog.routes';

import { logger } from './utils/logger.util';
import { morganStream } from './utils/morganLogger.util';

const app = express();

/* ======================================================
   TRUST PROXY
====================================================== */
app.set('trust proxy', 1);

/* ======================================================
   CORS
====================================================== */
app.use(
  cors({
    origin: getEnv.CLIENT_URL ,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Cookie',
      'ngrok-skip-browser-warning',
    ],
  })
);

// Fast OPTIONS
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

/* ======================================================
   WEBHOOKS (RAW BODY)
====================================================== */
app.use(
  '/api/v1/webhooks',
  express.raw({ type: 'application/json' }),
  webhookRoutes
);

/* ======================================================
   SECURITY & LOGGING
====================================================== */
app.use(helmet());
app.use(morgan('dev', { stream: morganStream }));

/* ======================================================
   BODY PARSERS & AUTH
====================================================== */
app.use(express.json());
app.use(clerkMiddleware());

/* ======================================================
   ROUTES
====================================================== */
app.get('/', (_req, res) => {
  res.status(200).json({
    service: 'Ziptron Backend',
    version: '1.0.0',
    status: 'Running',
  });
});

app.use('/api/v1/vehicleCatalog', vehicleCatalogRoutes);

/* ======================================================
   HEALTH CHECK
====================================================== */
app.get('/health', async (_req, res) => {
  try {
    const [pgHealthy, mongoHealthy] = await Promise.all([
      PostgresConfig.healthCheck(),
      MongoConfig.healthCheck(),
    ]);

    const healthy = pgHealthy && mongoHealthy;

    res.status(healthy ? 200 : 503).json({
      status: healthy ? 'healthy' : 'unhealthy',
      timestamp: new Date().toISOString(),
      service: 'Ziptron Backend',
      environment: process.env.NODE_ENV || 'development',
      uptime: process.uptime(),
      databases: {
        postgres: { healthy: pgHealthy },
        mongo: { healthy: mongoHealthy },
      },
    });
  } catch (error: any) {
    logger.error('Health check failed', { error });
    res.status(503).json({
      status: 'unhealthy',
      error: error.message,
      uptime: process.uptime(),
    });
  }
});

/* ======================================================
   SERVER STARTUP
====================================================== */
const PORT = Number(process.env.PORT) || 5000;

const startServer = async () => {
  try {
    logger.info('Connecting to databases');

    await Promise.all([
      PostgresConfig.connect(),
      MongoConfig.connect(),
    ]);

    const server = app.listen(PORT, () => {
      logger.info('Ziptron Backend Started', {
        port: PORT,
        env: process.env.NODE_ENV || 'development',
      });
    });

    /* ======================================================
       GRACEFUL SHUTDOWN
    ====================================================== */
    const gracefulShutdown = async (signal: string) => {
      logger.warn('Shutdown signal received', { signal });

      server.close(async () => {
        logger.info('HTTP server closed');

        try {
          await Promise.all([
            PostgresConfig.disconnect(),
            MongoConfig.disconnect(),
          ]);

          logger.info('Databases disconnected');
          process.exit(0);
        } catch (error) {
          logger.error('Error during shutdown', { error });
          process.exit(1);
        }
      });

      setTimeout(() => {
        logger.error('Forced shutdown after timeout');
        process.exit(1);
      }, 10000);
    };

    process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
    process.on('SIGINT', () => gracefulShutdown('SIGINT'));

    process.on('uncaughtException', async (error) => {
      logger.error('Uncaught Exception', { error });
      await Promise.all([
        PostgresConfig.disconnect(),
        MongoConfig.disconnect(),
      ]);
      process.exit(1);
    });

    process.on('unhandledRejection', async (reason) => {
      logger.error('Unhandled Rejection', { reason });
      await Promise.all([
        PostgresConfig.disconnect(),
        MongoConfig.disconnect(),
      ]);
      process.exit(1);
    });
  } catch (error) {
    logger.error('Failed to start Ziptron server', { error });
    process.exit(1);
  }
};

startServer();
