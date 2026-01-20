/*
  Warnings:

  - A unique constraint covering the columns `[serialNumber]` on the table `chargers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `model` to the `chargers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serialNumber` to the `chargers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vendor` to the `chargers` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ChargerProtocol" AS ENUM ('HTTP', 'OCPP_1_6', 'OCPP_2_0_1');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ChargingGunStatus" ADD VALUE 'CHARGING';
ALTER TYPE "ChargingGunStatus" ADD VALUE 'FAULT';

-- DropIndex
DROP INDEX "chargers_powerKW_idx";

-- AlterTable
ALTER TABLE "chargers" ADD COLUMN     "model" TEXT NOT NULL,
ADD COLUMN     "protocol" "ChargerProtocol" NOT NULL DEFAULT 'OCPP_1_6',
ADD COLUMN     "serialNumber" TEXT NOT NULL,
ADD COLUMN     "vendor" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "station_reviews" ALTER COLUMN "media" DROP NOT NULL;

-- CreateTable
CREATE TABLE "ocpp_transactions" (
    "id" UUID NOT NULL,
    "ocppTxnId" INTEGER NOT NULL,
    "chargerId" UUID NOT NULL,
    "gunId" UUID NOT NULL,
    "sessionId" UUID NOT NULL,
    "startedAt" TIMESTAMPTZ(3) NOT NULL,
    "endedAt" TIMESTAMP(3),

    CONSTRAINT "ocpp_transactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ocpp_transactions_sessionId_idx" ON "ocpp_transactions"("sessionId");

-- CreateIndex
CREATE UNIQUE INDEX "ocpp_transactions_chargerId_ocppTxnId_key" ON "ocpp_transactions"("chargerId", "ocppTxnId");

-- CreateIndex
CREATE UNIQUE INDEX "chargers_serialNumber_key" ON "chargers"("serialNumber");
