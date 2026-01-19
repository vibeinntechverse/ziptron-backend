-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'STATION_OWNER', 'ADMIN', 'SUPPORT');

-- CreateEnum
CREATE TYPE "VehicleType" AS ENUM ('SEDAN', 'HATCHBACK', 'SUV', 'CROSSOVER', 'COUPE');

-- CreateEnum
CREATE TYPE "ChargingSessionStatus" AS ENUM ('ONGOING', 'COMPLETED', 'FAILED');

-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('CREDIT', 'DEBIT');

-- CreateEnum
CREATE TYPE "TransactionStatus" AS ENUM ('PENDING', 'COMPLETED', 'FAILED');

-- CreateEnum
CREATE TYPE "ConnectorType" AS ENUM ('CCS2', 'TYPE2', 'CHADEMO', 'GB_T');

-- CreateEnum
CREATE TYPE "ChargingGunStatus" AS ENUM ('AVAILABLE', 'OCCUPIED', 'MAINTENANCE', 'OFFLINE');

-- CreateEnum
CREATE TYPE "TicketStatus" AS ENUM ('OPEN', 'IN_PROGRESS', 'RESOLVED', 'CLOSED');

-- CreateEnum
CREATE TYPE "TicketPriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'URGENT');

-- CreateEnum
CREATE TYPE "SessionStopReason" AS ENUM ('USER_STOP', 'COMPLETED', 'ERROR', 'POWER_LOSS', 'VEHICLE_DISCONNECTED');

-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('RESERVED', 'ACTIVE', 'CANCELLED', 'EXPIRED', 'NO_SHOW');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('WALLET', 'CARD', 'UPI');

-- CreateEnum
CREATE TYPE "StationAccessType" AS ENUM ('PUBLIC', 'PRIVATE');

-- CreateEnum
CREATE TYPE "PricingType" AS ENUM ('PER_KWH', 'PER_MINUTE', 'IDLE_FEE');

-- CreateEnum
CREATE TYPE "SessionAuthMethod" AS ENUM ('APP_QR', 'RFID', 'NFC', 'FLEET');

-- CreateEnum
CREATE TYPE "WalletHoldStatus" AS ENUM ('ACTIVE', 'CONSUMED', 'RELEASED');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "clerkId" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "walletBalance" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehicle_catalog" (
    "id" SERIAL NOT NULL,
    "brand" VARCHAR(100) NOT NULL,
    "model" VARCHAR(100) NOT NULL,
    "year" SMALLINT NOT NULL,
    "batteryCapacity" REAL NOT NULL,
    "vehicleType" "VehicleType" NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "vehicle_catalog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehicle_connector_support" (
    "catalogId" INTEGER NOT NULL,
    "connectorType" "ConnectorType" NOT NULL,

    CONSTRAINT "vehicle_connector_support_pkey" PRIMARY KEY ("catalogId","connectorType")
);

-- CreateTable
CREATE TABLE "user_vehicles" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "catalogId" INTEGER NOT NULL,
    "vehicleNo" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "user_vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "charging_stations" (
    "id" UUID NOT NULL,
    "ownerId" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "address" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "accessType" "StationAccessType" NOT NULL DEFAULT 'PUBLIC',
    "isOperational" BOOLEAN NOT NULL DEFAULT true,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),

    CONSTRAINT "charging_stations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "station_amenities" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "station_amenities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "charging_station_amenities" (
    "stationId" UUID NOT NULL,
    "amenityId" INTEGER NOT NULL,

    CONSTRAINT "charging_station_amenities_pkey" PRIMARY KEY ("stationId","amenityId")
);

-- CreateTable
CREATE TABLE "station_media" (
    "id" UUID NOT NULL,
    "stationId" UUID NOT NULL,
    "url" VARCHAR(500) NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "station_media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chargers" (
    "id" UUID NOT NULL,
    "stationId" UUID NOT NULL,
    "powerKW" REAL NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "chargers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "charging_guns" (
    "id" UUID NOT NULL,
    "chargerId" UUID NOT NULL,
    "connectorType" "ConnectorType" NOT NULL,
    "status" "ChargingGunStatus" NOT NULL DEFAULT 'AVAILABLE',
    "lastHeartbeat" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "charging_guns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "charging_bookings" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "gunId" UUID NOT NULL,
    "vehicleId" UUID NOT NULL,
    "startTime" TIMESTAMPTZ(3) NOT NULL,
    "endTime" TIMESTAMPTZ(3) NOT NULL,
    "status" "BookingStatus" NOT NULL DEFAULT 'RESERVED',
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "charging_bookings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "charging_sessions" (
    "id" UUID NOT NULL,
    "bookingId" UUID,
    "userVehicleId" UUID NOT NULL,
    "gunId" UUID NOT NULL,
    "startMeter" REAL NOT NULL,
    "endMeter" REAL,
    "startSoc" SMALLINT,
    "endSoc" SMALLINT,
    "energyUsed" REAL,
    "totalCost" DECIMAL(12,2),
    "idleFee" DECIMAL(12,2),
    "status" "ChargingSessionStatus" NOT NULL DEFAULT 'ONGOING',
    "authMethod" "SessionAuthMethod" NOT NULL,
    "stopReason" "SessionStopReason",
    "startTime" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endTime" TIMESTAMPTZ(3),
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "charging_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pricing_rules" (
    "id" UUID NOT NULL,
    "gunId" UUID NOT NULL,
    "type" "PricingType" NOT NULL,
    "rate" DECIMAL(12,4) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "pricing_rules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wallet_holds" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "sessionId" UUID,
    "amount" DECIMAL(12,2) NOT NULL,
    "status" "WalletHoldStatus" NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "releasedAt" TIMESTAMP(3),

    CONSTRAINT "wallet_holds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wallet_ledger" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "sessionId" UUID,
    "amount" DECIMAL(12,2) NOT NULL,
    "type" "TransactionType" NOT NULL,
    "balanceAfter" DECIMAL(12,2) NOT NULL,
    "description" VARCHAR(500),
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "wallet_ledger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL,
    "type" "TransactionType" NOT NULL,
    "status" "TransactionStatus" NOT NULL DEFAULT 'PENDING',
    "reference" VARCHAR(255),
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "sessionId" UUID,
    "amount" DECIMAL(12,2) NOT NULL,
    "method" "PaymentMethod" NOT NULL,
    "status" "TransactionStatus" NOT NULL DEFAULT 'PENDING',
    "gatewayRef" VARCHAR(255),
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rfid_cards" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "uid" VARCHAR(100) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "rfid_cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscription_plans" (
    "id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "monthlyFee" DECIMAL(12,2) NOT NULL,
    "discountPct" SMALLINT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "subscription_plans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_subscriptions" (
    "userId" UUID NOT NULL,
    "planId" UUID NOT NULL,
    "start" TIMESTAMPTZ(3) NOT NULL,
    "end" TIMESTAMPTZ(3),
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "user_subscriptions_pkey" PRIMARY KEY ("userId","planId")
);

-- CreateTable
CREATE TABLE "station_reviews" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "stationId" UUID NOT NULL,
    "rating" SMALLINT NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "station_reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tickets" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "stationId" UUID,
    "subject" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "status" "TicketStatus" NOT NULL DEFAULT 'OPEN',
    "priority" "TicketPriority" NOT NULL DEFAULT 'MEDIUM',
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "resolvedAt" TIMESTAMPTZ(3),

    CONSTRAINT "tickets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chat_sessions" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "chat_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_clerkId_key" ON "users"("clerkId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_email_isActive_idx" ON "users"("email", "isActive");

-- CreateIndex
CREATE INDEX "users_role_isActive_idx" ON "users"("role", "isActive");

-- CreateIndex
CREATE INDEX "users_createdAt_idx" ON "users"("createdAt");

-- CreateIndex
CREATE INDEX "users_phone_idx" ON "users"("phone");

-- CreateIndex
CREATE INDEX "vehicle_catalog_brand_model_year_idx" ON "vehicle_catalog"("brand", "model", "year");

-- CreateIndex
CREATE INDEX "vehicle_catalog_vehicleType_isActive_idx" ON "vehicle_catalog"("vehicleType", "isActive");

-- CreateIndex
CREATE INDEX "vehicle_catalog_isActive_idx" ON "vehicle_catalog"("isActive");

-- CreateIndex
CREATE INDEX "vehicle_connector_support_connectorType_idx" ON "vehicle_connector_support"("connectorType");

-- CreateIndex
CREATE UNIQUE INDEX "user_vehicles_vehicleNo_key" ON "user_vehicles"("vehicleNo");

-- CreateIndex
CREATE INDEX "user_vehicles_userId_catalogId_idx" ON "user_vehicles"("userId", "catalogId");

-- CreateIndex
CREATE INDEX "user_vehicles_catalogId_idx" ON "user_vehicles"("catalogId");

-- CreateIndex
CREATE INDEX "user_vehicles_createdAt_idx" ON "user_vehicles"("createdAt");

-- CreateIndex
CREATE INDEX "charging_stations_latitude_longitude_idx" ON "charging_stations"("latitude", "longitude");

-- CreateIndex
CREATE INDEX "charging_stations_ownerId_isActive_idx" ON "charging_stations"("ownerId", "isActive");

-- CreateIndex
CREATE INDEX "charging_stations_isActive_deletedAt_idx" ON "charging_stations"("isActive", "deletedAt");

-- CreateIndex
CREATE INDEX "charging_stations_name_idx" ON "charging_stations"("name");

-- CreateIndex
CREATE INDEX "charging_stations_deletedAt_idx" ON "charging_stations"("deletedAt");

-- CreateIndex
CREATE UNIQUE INDEX "station_amenities_name_key" ON "station_amenities"("name");

-- CreateIndex
CREATE INDEX "charging_station_amenities_amenityId_idx" ON "charging_station_amenities"("amenityId");

-- CreateIndex
CREATE INDEX "station_media_stationId_idx" ON "station_media"("stationId");

-- CreateIndex
CREATE INDEX "chargers_stationId_isActive_idx" ON "chargers"("stationId", "isActive");

-- CreateIndex
CREATE INDEX "chargers_powerKW_idx" ON "chargers"("powerKW");

-- CreateIndex
CREATE INDEX "charging_guns_chargerId_status_idx" ON "charging_guns"("chargerId", "status");

-- CreateIndex
CREATE INDEX "charging_guns_status_connectorType_idx" ON "charging_guns"("status", "connectorType");

-- CreateIndex
CREATE INDEX "charging_guns_connectorType_idx" ON "charging_guns"("connectorType");

-- CreateIndex
CREATE INDEX "charging_guns_lastHeartbeat_idx" ON "charging_guns"("lastHeartbeat");

-- CreateIndex
CREATE INDEX "charging_bookings_userId_status_idx" ON "charging_bookings"("userId", "status");

-- CreateIndex
CREATE INDEX "charging_bookings_gunId_startTime_idx" ON "charging_bookings"("gunId", "startTime");

-- CreateIndex
CREATE INDEX "charging_bookings_vehicleId_idx" ON "charging_bookings"("vehicleId");

-- CreateIndex
CREATE INDEX "charging_bookings_status_startTime_idx" ON "charging_bookings"("status", "startTime");

-- CreateIndex
CREATE INDEX "charging_bookings_createdAt_idx" ON "charging_bookings"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "charging_sessions_bookingId_key" ON "charging_sessions"("bookingId");

-- CreateIndex
CREATE INDEX "charging_sessions_userVehicleId_status_idx" ON "charging_sessions"("userVehicleId", "status");

-- CreateIndex
CREATE INDEX "charging_sessions_gunId_status_idx" ON "charging_sessions"("gunId", "status");

-- CreateIndex
CREATE INDEX "charging_sessions_status_startTime_idx" ON "charging_sessions"("status", "startTime");

-- CreateIndex
CREATE INDEX "charging_sessions_startTime_endTime_idx" ON "charging_sessions"("startTime", "endTime");

-- CreateIndex
CREATE INDEX "charging_sessions_createdAt_idx" ON "charging_sessions"("createdAt");

-- CreateIndex
CREATE INDEX "charging_sessions_bookingId_idx" ON "charging_sessions"("bookingId");

-- CreateIndex
CREATE INDEX "pricing_rules_gunId_isActive_idx" ON "pricing_rules"("gunId", "isActive");

-- CreateIndex
CREATE INDEX "pricing_rules_type_isActive_idx" ON "pricing_rules"("type", "isActive");

-- CreateIndex
CREATE INDEX "wallet_holds_userId_status_idx" ON "wallet_holds"("userId", "status");

-- CreateIndex
CREATE INDEX "wallet_holds_sessionId_idx" ON "wallet_holds"("sessionId");

-- CreateIndex
CREATE INDEX "wallet_ledger_userId_createdAt_idx" ON "wallet_ledger"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "wallet_ledger_sessionId_idx" ON "wallet_ledger"("sessionId");

-- CreateIndex
CREATE INDEX "wallet_ledger_createdAt_idx" ON "wallet_ledger"("createdAt");

-- CreateIndex
CREATE INDEX "transactions_userId_createdAt_idx" ON "transactions"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "transactions_status_createdAt_idx" ON "transactions"("status", "createdAt");

-- CreateIndex
CREATE INDEX "transactions_createdAt_idx" ON "transactions"("createdAt");

-- CreateIndex
CREATE INDEX "transactions_reference_idx" ON "transactions"("reference");

-- CreateIndex
CREATE INDEX "payments_userId_createdAt_idx" ON "payments"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "payments_sessionId_idx" ON "payments"("sessionId");

-- CreateIndex
CREATE INDEX "payments_status_idx" ON "payments"("status");

-- CreateIndex
CREATE INDEX "payments_gatewayRef_idx" ON "payments"("gatewayRef");

-- CreateIndex
CREATE UNIQUE INDEX "rfid_cards_uid_key" ON "rfid_cards"("uid");

-- CreateIndex
CREATE INDEX "rfid_cards_userId_idx" ON "rfid_cards"("userId");

-- CreateIndex
CREATE INDEX "rfid_cards_isActive_idx" ON "rfid_cards"("isActive");

-- CreateIndex
CREATE INDEX "subscription_plans_isActive_idx" ON "subscription_plans"("isActive");

-- CreateIndex
CREATE INDEX "user_subscriptions_userId_end_idx" ON "user_subscriptions"("userId", "end");

-- CreateIndex
CREATE INDEX "user_subscriptions_planId_idx" ON "user_subscriptions"("planId");

-- CreateIndex
CREATE INDEX "station_reviews_stationId_rating_idx" ON "station_reviews"("stationId", "rating");

-- CreateIndex
CREATE INDEX "station_reviews_createdAt_idx" ON "station_reviews"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "station_reviews_userId_stationId_key" ON "station_reviews"("userId", "stationId");

-- CreateIndex
CREATE INDEX "tickets_userId_status_idx" ON "tickets"("userId", "status");

-- CreateIndex
CREATE INDEX "tickets_stationId_status_idx" ON "tickets"("stationId", "status");

-- CreateIndex
CREATE INDEX "tickets_status_priority_createdAt_idx" ON "tickets"("status", "priority", "createdAt");

-- CreateIndex
CREATE INDEX "tickets_createdAt_idx" ON "tickets"("createdAt");

-- CreateIndex
CREATE INDEX "chat_sessions_userId_isActive_idx" ON "chat_sessions"("userId", "isActive");

-- CreateIndex
CREATE INDEX "chat_sessions_createdAt_idx" ON "chat_sessions"("createdAt");

-- AddForeignKey
ALTER TABLE "vehicle_connector_support" ADD CONSTRAINT "vehicle_connector_support_catalogId_fkey" FOREIGN KEY ("catalogId") REFERENCES "vehicle_catalog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_vehicles" ADD CONSTRAINT "user_vehicles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_vehicles" ADD CONSTRAINT "user_vehicles_catalogId_fkey" FOREIGN KEY ("catalogId") REFERENCES "vehicle_catalog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "charging_stations" ADD CONSTRAINT "charging_stations_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "charging_station_amenities" ADD CONSTRAINT "charging_station_amenities_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "charging_stations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "charging_station_amenities" ADD CONSTRAINT "charging_station_amenities_amenityId_fkey" FOREIGN KEY ("amenityId") REFERENCES "station_amenities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "station_media" ADD CONSTRAINT "station_media_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "charging_stations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chargers" ADD CONSTRAINT "chargers_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "charging_stations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "charging_guns" ADD CONSTRAINT "charging_guns_chargerId_fkey" FOREIGN KEY ("chargerId") REFERENCES "chargers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "charging_bookings" ADD CONSTRAINT "charging_bookings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "charging_bookings" ADD CONSTRAINT "charging_bookings_gunId_fkey" FOREIGN KEY ("gunId") REFERENCES "charging_guns"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "charging_bookings" ADD CONSTRAINT "charging_bookings_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "user_vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "charging_sessions" ADD CONSTRAINT "charging_sessions_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "charging_bookings"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "charging_sessions" ADD CONSTRAINT "charging_sessions_gunId_fkey" FOREIGN KEY ("gunId") REFERENCES "charging_guns"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "charging_sessions" ADD CONSTRAINT "charging_sessions_userVehicleId_fkey" FOREIGN KEY ("userVehicleId") REFERENCES "user_vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pricing_rules" ADD CONSTRAINT "pricing_rules_gunId_fkey" FOREIGN KEY ("gunId") REFERENCES "charging_guns"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wallet_holds" ADD CONSTRAINT "wallet_holds_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wallet_ledger" ADD CONSTRAINT "wallet_ledger_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "charging_sessions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rfid_cards" ADD CONSTRAINT "rfid_cards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_subscriptions" ADD CONSTRAINT "user_subscriptions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_subscriptions" ADD CONSTRAINT "user_subscriptions_planId_fkey" FOREIGN KEY ("planId") REFERENCES "subscription_plans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "station_reviews" ADD CONSTRAINT "station_reviews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "station_reviews" ADD CONSTRAINT "station_reviews_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "charging_stations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "charging_stations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_sessions" ADD CONSTRAINT "chat_sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
