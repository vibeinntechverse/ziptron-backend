import 'dotenv/config';
import { PrismaClient, VehicleType, ConnectorType } from "../../generated/postgres/client";
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

/* ======================================================
   LOAD JSON SAFELY (no TS JSON import issues)
====================================================== */
const vehicleCatalog: Record<string, any[]> = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../cars.json'),
    'utf-8'
  )
);

/* ======================================================
   CONNECTOR NORMALIZATION MAP (OPTION 1)
====================================================== */
const CONNECTOR_MAP: Record<string, ConnectorType> = {
  CCS2: ConnectorType.CCS2,
  TYPE2: ConnectorType.TYPE2,
  GB_T: ConnectorType.GB_T,

  // Normalized aliases
  IEC60309: ConnectorType.TYPE2,
  CCS: ConnectorType.CCS2,
  CCS_2: ConnectorType.CCS2,
};

/* ======================================================
   SEED FUNCTION
====================================================== */
async function seedVehicleCatalog() {
  for (const [brand, vehicles] of Object.entries(vehicleCatalog)) {
    for (const vehicle of vehicles) {

      // 1️⃣ Upsert vehicle catalog entry
      const catalog = await prisma.vehicleCatalog.upsert({
        where: {
          unique_vehicle_per_year: {
            brand,
            model: vehicle.model,
            year: vehicle.year,
          },
        },
        update: {
          batteryCapacity: vehicle.battery_capacity,
          vehicleType: vehicle.type as VehicleType,
          isActive: true,
        },
        create: {
          brand,
          model: vehicle.model,
          year: vehicle.year,
          batteryCapacity: vehicle.battery_capacity,
          vehicleType: vehicle.type as VehicleType,
          isActive: true,
        },
      });

      // 2️⃣ Upsert connector support (normalized)
      for (const rawConnector of vehicle.connectors) {
        const normalizedConnector = CONNECTOR_MAP[rawConnector];

        if (!normalizedConnector) {
          console.warn(
            `⚠️ Skipping unknown connector "${rawConnector}" for ${brand} ${vehicle.model}`
          );
          continue;
        }

        await prisma.vehicleConnectorSupport.upsert({
          where: {
            catalogId_connectorType: {
              catalogId: catalog.id,
              connectorType: normalizedConnector,
            },
          },
          update: {},
          create: {
            catalogId: catalog.id,
            connectorType: normalizedConnector,
          },
        });
      }
    }
  }
}

/* ======================================================
   EXECUTION
====================================================== */
seedVehicleCatalog()
  .then(() => {
    console.log('✅ Vehicle catalog seeded successfully');
  })
  .catch((error) => {
    console.error('❌ Vehicle catalog seeding failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
