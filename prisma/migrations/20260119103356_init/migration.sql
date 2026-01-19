/*
  Warnings:

  - A unique constraint covering the columns `[brand,model,year]` on the table `vehicle_catalog` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `media` to the `station_reviews` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "station_reviews" ADD COLUMN     "media" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "vehicle_catalog_brand_model_year_key" ON "vehicle_catalog"("brand", "model", "year");
