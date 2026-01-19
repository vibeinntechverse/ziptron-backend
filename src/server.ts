import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { clerkMiddleware } from '@clerk/express'

import PostgresConfig from "./config/postgres.config";
import MongoConfig from "./config/mongo.config";
import webhookRoutes from "./routes/webhook.routes";


dotenv.config();

const app = express();

/* ======================================================
   TRUST PROXY (ngrok / reverse proxy)
====================================================== */
app.set("trust proxy", 1);

/* ======================================================
   🔥 HARD CORS GUARD (runs before EVERYTHING)
====================================================== */
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true,
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cookie",
      "ngrok-skip-browser-warning",
    ],
  })
);

// Fast OPTIONS handling
app.use((req, res, next) => {
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});


/* ======================================================
   WEBHOOKS (RAW BODY)
====================================================== */
app.use(
  "/api/v1/webhooks",
  express.raw({ type: "application/json" }),
  webhookRoutes
);


/* ======================================================
   SECURITY & LOGGING
====================================================== */
app.use(helmet());
app.use(morgan("dev"));


/* ======================================================
   BODY PARSERS
====================================================== */
app.use(express.json());
app.use(clerkMiddleware())

/* ======================================================
   ROUTES
====================================================== */
app.get("/", (_req, res) => {
  res.status(200).json({
    service: "Ziptron Backend",
    version: "1.0.0",
    status: "Running",
  });
});

/* ======================================================
   HEALTH CHECK (Postgres + Mongo)
====================================================== */
app.get("/health", async (_req, res) => {
  try {
    const [pgHealthy, mongoHealthy] = await Promise.all([
      PostgresConfig.healthCheck(),
      MongoConfig.healthCheck(),
    ]);

    const healthy = pgHealthy && mongoHealthy;

    res.status(healthy ? 200 : 503).json({
      status: healthy ? "healthy" : "unhealthy",
      timestamp: new Date().toISOString(),
      service: "Ziptron Backend",
      environment: process.env.NODE_ENV || "development",
      uptime: process.uptime(),
      databases: {
        postgres: {
          healthy: pgHealthy,
        },
        mongo: {
          healthy: mongoHealthy,
        },
      },
    });
  } catch (error: any) {
    res.status(503).json({
      status: "unhealthy",
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
    console.log("🔌 Connecting to databases...");

    await Promise.all([
      PostgresConfig.connect(),
      MongoConfig.connect(),
    ]);

    const server = app.listen(PORT, () => {
      console.log("⚡️ Ziptron Backend Started");
      console.log(`🚀 URL: http://localhost:${PORT}`);
      console.log(`📊 Health: http://localhost:${PORT}/health`);
    });

    /* ======================================================
       GRACEFUL SHUTDOWN
    ====================================================== */
    const gracefulShutdown = async (signal: string) => {
      console.log(`\n🛑 ${signal} received. Shutting down gracefully...`);

      server.close(async () => {
        console.log("🧯 HTTP server closed");

        try {
          await Promise.all([
            PostgresConfig.disconnect(),
            MongoConfig.disconnect(),
          ]);

          console.log("✅ Databases disconnected");
          process.exit(0);
        } catch (error) {
          console.error("❌ Shutdown error:", error);
          process.exit(1);
        }
      });

      // Force exit after 10s
      setTimeout(() => {
        console.error("⚠️ Forced shutdown");
        process.exit(1);
      }, 10000);
    };

    process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
    process.on("SIGINT", () => gracefulShutdown("SIGINT"));

    process.on("uncaughtException", async (error) => {
      console.error("❌ Uncaught Exception:", error);
      await Promise.all([
        PostgresConfig.disconnect(),
        MongoConfig.disconnect(),
      ]);
      process.exit(1);
    });

    process.on("unhandledRejection", async (reason) => {
      console.error("❌ Unhandled Rejection:", reason);
      await Promise.all([
        PostgresConfig.disconnect(),
        MongoConfig.disconnect(),
      ]);
      process.exit(1);
    });
  } catch (error) {
    console.error("❌ Failed to start Ziptron server:", error);
    process.exit(1);
  }
};

startServer();
