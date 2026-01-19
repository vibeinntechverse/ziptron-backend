import { PrismaClient, VehicleType, ConnectorType, Prisma } from '../../generated/postgres/client';
import { logger } from '../utils/logger.util';
import {
  createVehicleSchema,
  updateVehicleSchema,
  listVehicleSchema,
} from "../types/vehicleCatalog.types";

const prisma = new PrismaClient();

// Custom error classes
class VehicleNotFoundError extends Error {
  constructor(id: number) {
    super(`Vehicle with id ${id} not found`);
    this.name = 'VehicleNotFoundError';
  }
}

class InvalidVehicleIdError extends Error {
  constructor(id: any) {
    super(`Invalid vehicle id: ${id}`);
    this.name = 'InvalidVehicleIdError';
  }
}

// Types
interface ChargingCapability {
  supportsAC: boolean;
  supportsDC: boolean;
  maxRecommendedKw: number;
  chargingProfiles: {
    ac: { available: boolean; maxKw: number; estimatedTime?: string } | null;
    dc: { available: boolean; maxKw: number; estimatedTime?: string } | null;
  };
  connectorDetails: Array<{
    type: ConnectorType;
    category: 'AC' | 'DC';
    typicalPower: string;
  }>;
}

interface VehicleCompatibility {
  vehicleId: number;
  vehicleInfo: {
    brand: string;
    model: string;
    year: number;
    batteryCapacity: number;
  };
  supportedConnectors: ConnectorType[];
  connectorCategories: {
    ac: ConnectorType[];
    dc: ConnectorType[];
  };
  recommendedChargers: string[];
}

interface VehicleStatistics {
  totalVehicles: number;
  activeVehicles: number;
  vehiclesByBrand: Record<string, number>;
  vehiclesByType: Record<string, number>;
  averageBatteryCapacity: number;
  batteryCapacityRange: { min: number; max: number };
  connectorDistribution: Record<string, number>;
}

interface BulkCreateResult {
  created: number;
  skipped: number;
  errors: Array<{ data: any; error: string }>;
}

export const VehicleCatalogService = {
  /* ==============================
     LIST VEHICLES (Enhanced)
  ============================== */
  async list(rawQuery: unknown) {
    const query = listVehicleSchema.parse(rawQuery);

    const where: Prisma.VehicleCatalogWhereInput = {
      brand: query.brand,
      vehicleType: query.vehicleType,
      isActive: query.isActive ?? true,
      connectors: query.connectorType
        ? { some: { connectorType: query.connectorType } }
        : undefined,
    };

    const [vehicles, total] = await Promise.all([
      prisma.vehicleCatalog.findMany({
        where,
        include: { connectors: true },
        orderBy: [{ brand: 'asc' }, { model: 'asc' }],
        skip: query.skip,
        take: query.limit,
      }),
      prisma.vehicleCatalog.count({ where }),
    ]);

    return {
      data: vehicles,
      pagination: {
        total,
        skip: query.skip || 0,
        limit: query.limit || vehicles.length,
      },
    };
  },

  /* ==============================
     SEARCH VEHICLES (New)
  ============================== */
  async search(searchTerm: string, options?: {
    includeInactive?: boolean;
    limit?: number;
  }) {
    return prisma.vehicleCatalog.findMany({
      where: {
        isActive: options?.includeInactive ? undefined : true,
        OR: [
          { brand: { contains: searchTerm, mode: 'insensitive' } },
          { model: { contains: searchTerm, mode: 'insensitive' } },
        ],
      },
      include: { connectors: true },
      orderBy: [{ brand: 'asc' }, { model: 'asc' }],
      take: options?.limit || 50,
    });
  },

  /* ==============================
     GET BY ID (Enhanced with caching option)
  ============================== */
  async getById(id: number, options?: { includeInactive?: boolean }) {
    if (!Number.isInteger(id) || id <= 0) {
      throw new InvalidVehicleIdError(id);
    }

    const vehicle = await prisma.vehicleCatalog.findUnique({
      where: { id },
      include: { connectors: true },
    });

    if (!vehicle) {
      throw new VehicleNotFoundError(id);
    }

    if (!options?.includeInactive && !vehicle.isActive) {
      throw new VehicleNotFoundError(id);
    }

    return vehicle;
  },

  /* ==============================
     GET BY BRAND AND MODEL (New)
  ============================== */
  async getByBrandAndModel(brand: string, model: string) {
    return prisma.vehicleCatalog.findFirst({
      where: {
        brand: { equals: brand, mode: 'insensitive' },
        model: { equals: model, mode: 'insensitive' },
        isActive: true,
      },
      include: { connectors: true },
    });
  },

  /* ==============================
     CREATE VEHICLE (Enhanced)
  ============================== */
  async create(rawData: unknown) {
  const data = createVehicleSchema.parse(rawData);

  const existing = await prisma.vehicleCatalog.findFirst({
    where: {
      brand: data.brand,
      model: data.model,
      year: data.year,
    },
  });

  if (existing) {
    logger.warn('Vehicle already exists', {
      brand: data.brand,
      model: data.model,
      year: data.year,
    });
    throw new Error(
      `Vehicle ${data.brand} ${data.model} (${data.year}) already exists`
    );
  }

  const vehicle = await prisma.vehicleCatalog.create({
    data: {
      brand: data.brand,
      model: data.model,
      year: data.year,
      batteryCapacity: data.batteryCapacity,
      vehicleType: data.vehicleType,
      imageUrl: data.imageUrl,
      connectors: {
        create: data.connectors.map((c) => ({
          connectorType: c,
        })),
      },
    },
    include: { connectors: true },
  });

  logger.info('Vehicle created', {
    vehicleId: vehicle.id,
    brand: vehicle.brand,
    model: vehicle.model,
    year: vehicle.year,
  });

  return vehicle;
},


  /* ==============================
     BULK CREATE (New)
  ============================== */
  async bulkCreate(vehiclesData: unknown[]): Promise<BulkCreateResult> {
  const result: BulkCreateResult = {
    created: 0,
    skipped: 0,
    errors: [],
  };

  for (const rawData of vehiclesData) {
    try {
      await this.create(rawData);
      result.created++;
    } catch (error) {
      result.skipped++;
      result.errors.push({
        data: rawData,
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }

  logger.info('Bulk vehicle import completed', {
    created: result.created,
    skipped: result.skipped,
    errors: result.errors.length,
  });

  return result;
},

  /* ==============================
     UPDATE VEHICLE (Enhanced)
  ============================== */
  async update(id: number, rawData: unknown) {
  if (!Number.isInteger(id) || id <= 0) {
    logger.warn('Invalid vehicle id for update', { id });
    throw new InvalidVehicleIdError(id);
  }

  await this.getById(id);

  const data = updateVehicleSchema.parse(rawData);

  const updated = await prisma.$transaction(async (tx) => {
    if (data.connectors) {
      await tx.vehicleConnectorSupport.deleteMany({
        where: { catalogId: id },
      });
    }

    return tx.vehicleCatalog.update({
      where: { id },
      data: {
        batteryCapacity: data.batteryCapacity,
        vehicleType: data.vehicleType,
        imageUrl: data.imageUrl,
        isActive: data.isActive,
        connectors: data.connectors
          ? {
              create: data.connectors.map((c) => ({
                connectorType: c,
              })),
            }
          : undefined,
      },
      include: { connectors: true },
    });
  });

  logger.info('Vehicle updated', {
    vehicleId: id,
    updatedFields: Object.keys(data),
  });

  return updated;
},

  /* ==============================
     SOFT DELETE (Enhanced)
  ============================== */
  async softDelete(id: number) {
  if (!Number.isInteger(id) || id <= 0) {
    logger.warn('Invalid vehicle id for soft delete', { id });
    throw new InvalidVehicleIdError(id);
  }

  await this.getById(id);

  const vehicle = await prisma.vehicleCatalog.update({
    where: { id },
    data: { isActive: false, updatedAt: new Date() },
  });

  logger.info('Vehicle soft deleted', { vehicleId: id });

  return vehicle;
},

  /* ==============================
     RESTORE (New)
  ============================== */
  async restore(id: number) {
  const vehicle = await this.getById(id, { includeInactive: true });

  if (vehicle.isActive) {
    logger.warn('Restore skipped, vehicle already active', { id });
    throw new Error('Vehicle is already active');
  }

  const restored = await prisma.vehicleCatalog.update({
    where: { id },
    data: { isActive: true, updatedAt: new Date() },
  });

  logger.info('Vehicle restored', { vehicleId: id });

  return restored;
},

  /* ==============================
     HARD DELETE (New)
  ============================== */
  async hardDelete(id: number) {
  await this.getById(id, { includeInactive: true });

  await prisma.$transaction(async (tx) => {
    await tx.vehicleConnectorSupport.deleteMany({
      where: { catalogId: id },
    });

    await tx.vehicleCatalog.delete({ where: { id } });
  });

  logger.warn('Vehicle permanently deleted', { vehicleId: id });
},

  /* ==============================
     CHARGING CAPABILITY (Enhanced)
  ============================== */
  async getChargingCapability(id: number): Promise<ChargingCapability> {
  if (!Number.isInteger(id) || id <= 0) {
    throw new InvalidVehicleIdError(id);
  }

  const vehicle = await this.getById(id);
  const connectorTypes = vehicle.connectors.map(c => c.connectorType);

  // ✅ Explicit connector groups (TYPE-SAFE)
  const AC_CONNECTORS: ConnectorType[] = ["TYPE2"];
  const DC_CONNECTORS: ConnectorType[] = ["CCS2", "GB_T", "CHADEMO"];

  const acConnectors = connectorTypes.filter(c =>
    AC_CONNECTORS.includes(c)
  );
  const dcConnectors = connectorTypes.filter(c =>
    DC_CONNECTORS.includes(c)
  );

  const supportsAC = acConnectors.length > 0;
  const supportsDC = dcConnectors.length > 0;

  // Advanced power recommendations
  const getDCPower = (capacity: number): number => {
    if (capacity <= 25) return 30;
    if (capacity <= 40) return 50;
    if (capacity <= 60) return 75;
    if (capacity <= 80) return 100;
    return 150;
  };

  const getACPower = (): number => {
    return supportsAC ? 11 : 7.4;
  };

  const maxDCKw = supportsDC ? getDCPower(vehicle.batteryCapacity) : 0;
  const maxACKw = supportsAC ? getACPower() : 0;
  const maxRecommendedKw = Math.max(maxDCKw, maxACKw);

  // Estimate charging times
  const estimateChargingTime = (powerKw: number, capacity: number): string => {
    const hours = (capacity * 0.8) / powerKw;
    if (hours < 1) return `${Math.round(hours * 60)} min`;
    return `${hours.toFixed(1)} hrs`;
  };

  // Connector details (NO invalid comparisons)
  const connectorDetails: ChargingCapability["connectorDetails"] =
  connectorTypes.map(type => ({
    type,
    category: AC_CONNECTORS.includes(type) ? "AC" as const : "DC" as const,
    typicalPower:
      type === "CCS2" ? "50–150 kW" :
      type === "GB_T" ? "30–60 kW" :
      type === "CHADEMO" ? "50 kW" :
      type === "TYPE2" ? "7–11 kW" :
      "Unknown",
  }));


  return {
    supportsAC,
    supportsDC,
    maxRecommendedKw,
    chargingProfiles: {
      ac: supportsAC
        ? {
            available: true,
            maxKw: maxACKw,
            estimatedTime: estimateChargingTime(
              maxACKw,
              vehicle.batteryCapacity
            ),
          }
        : null,
      dc: supportsDC
        ? {
            available: true,
            maxKw: maxDCKw,
            estimatedTime: estimateChargingTime(
              maxDCKw,
              vehicle.batteryCapacity
            ),
          }
        : null,
    },
    connectorDetails,
  };
},


  /* ==============================
     COMPATIBILITY (Enhanced)
  ============================== */
  async getCompatibility(id: number): Promise<VehicleCompatibility> {
    if (!Number.isInteger(id) || id <= 0) {
      throw new InvalidVehicleIdError(id);
    }

    const vehicle = await this.getById(id);
    const connectorTypes = vehicle.connectors.map(c => c.connectorType);

    // Categorize connectors
    const acConnectors = connectorTypes.filter(c => 
      c === 'TYPE2'
    );
    const dcConnectors = connectorTypes.filter(c => 
      c === 'CCS2' || c === 'GB_T' || c === 'CHADEMO'
    );

    // Recommend charger types
    const recommendedChargers: string[] = [];
    if (acConnectors.includes('TYPE2')) {
      recommendedChargers.push('Type 2 AC Charger (7-11 kW)');
    }
    if (dcConnectors.includes('CCS2')) {
      recommendedChargers.push('CCS2 DC Fast Charger (50-150 kW)');
    }
    if (dcConnectors.includes('GB_T')) {
      recommendedChargers.push('GB/T DC Charger (30-60 kW)');
    }
    if (dcConnectors.includes('CHADEMO')) {
      recommendedChargers.push('CHAdeMO DC Charger (50 kW)');
    }

    return {
      vehicleId: vehicle.id,
      vehicleInfo: {
        brand: vehicle.brand,
        model: vehicle.model,
        year: vehicle.year,
        batteryCapacity: vehicle.batteryCapacity,
      },
      supportedConnectors: connectorTypes,
      connectorCategories: {
        ac: acConnectors,
        dc: dcConnectors,
      },
      recommendedChargers,
    };
  },

  /* ==============================
     FIND COMPATIBLE VEHICLES (New)
  ============================== */
  async findCompatibleVehicles(connectorType: ConnectorType) {
    return prisma.vehicleCatalog.findMany({
      where: {
        isActive: true,
        connectors: {
          some: { connectorType },
        },
      },
      include: { connectors: true },
      orderBy: [{ brand: 'asc' }, { model: 'asc' }],
    });
  },

  /* ==============================
     GET STATISTICS (New)
  ============================== */
  async getStatistics(): Promise<VehicleStatistics> {
    const [vehicles, activeCount] = await Promise.all([
      prisma.vehicleCatalog.findMany({
        include: { connectors: true },
      }),
      prisma.vehicleCatalog.count({ where: { isActive: true } }),
    ]);

    // Calculate statistics
    const vehiclesByBrand = vehicles.reduce((acc, v) => {
      acc[v.brand] = (acc[v.brand] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const vehiclesByType = vehicles.reduce((acc, v) => {
      acc[v.vehicleType] = (acc[v.vehicleType] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const capacities = vehicles.map(v => v.batteryCapacity);
    const avgCapacity = capacities.reduce((sum, c) => sum + c, 0) / capacities.length;

    const connectorDistribution: Record<string, number> = {};
    vehicles.forEach(v => {
      v.connectors.forEach(c => {
        connectorDistribution[c.connectorType] = 
          (connectorDistribution[c.connectorType] || 0) + 1;
      });
    });

    return {
      totalVehicles: vehicles.length,
      activeVehicles: activeCount,
      vehiclesByBrand,
      vehiclesByType,
      averageBatteryCapacity: Math.round(avgCapacity * 10) / 10,
      batteryCapacityRange: {
        min: Math.min(...capacities),
        max: Math.max(...capacities),
      },
      connectorDistribution,
    };
  },

  /* ==============================
     GET BRANDS (New)
  ============================== */
  async getBrands() {
    const brands = await prisma.vehicleCatalog.groupBy({
      by: ['brand'],
      where: { isActive: true },
      _count: { brand: true },
      orderBy: { brand: 'asc' },
    });

    return brands.map(b => ({
      brand: b.brand,
      vehicleCount: b._count.brand,
    }));
  },

  /* ==============================
     FILTER BY BATTERY RANGE (New)
  ============================== */
  async filterByBatteryCapacity(minCapacity: number, maxCapacity: number) {
    return prisma.vehicleCatalog.findMany({
      where: {
        isActive: true,
        batteryCapacity: {
          gte: minCapacity,
          lte: maxCapacity,
        },
      },
      include: { connectors: true },
      orderBy: { batteryCapacity: 'asc' },
    });
  },

  /* ==============================
     GET RECENT VEHICLES (New)
  ============================== */
  async getRecentVehicles(limit: number = 10) {
    return prisma.vehicleCatalog.findMany({
      where: { isActive: true },
      include: { connectors: true },
      orderBy: { year: 'desc' },
      take: limit,
    });
  },

  /* ==============================
     COMPARE VEHICLES (New)
  ============================== */
  async compareVehicles(ids: number[]) {
    const vehicles = await Promise.all(
      ids.map(id => this.getById(id))
    );

    return vehicles.map(v => ({
      id: v.id,
      brand: v.brand,
      model: v.model,
      year: v.year,
      batteryCapacity: v.batteryCapacity,
      vehicleType: v.vehicleType,
      connectors: v.connectors.map(c => c.connectorType),
    }));
  },
};