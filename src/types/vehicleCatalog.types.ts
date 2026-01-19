import { z } from 'zod';
import { VehicleType, ConnectorType } from '../../generated/postgres/client';

export const createVehicleSchema = z.object({
  brand: z.string().min(1).max(100),
  model: z.string().min(1).max(100),
  year: z.number().int().min(2000).max(2100),
  batteryCapacity: z.number().positive(),
  vehicleType: z.nativeEnum(VehicleType),
  imageUrl: z.string().url().optional(),
  connectors: z.array(z.nativeEnum(ConnectorType)).min(1),
});

export const updateVehicleSchema = z.object({
  batteryCapacity: z.number().positive().optional(),
  vehicleType: z.nativeEnum(VehicleType).optional(),
  imageUrl: z.string().url().nullable().optional(),
  isActive: z.boolean().optional(),
  connectors: z.array(z.nativeEnum(ConnectorType)).min(1).optional(),
});

export const listVehicleSchema = z.object({
  brand: z.string().optional(),
  vehicleType: z.nativeEnum(VehicleType).optional(),
  connectorType: z.nativeEnum(ConnectorType).optional(),
  isActive: z.boolean().optional(),

    // ✅ ADD THESE
  skip: z.number().int().min(0).optional(),
  limit: z.number().int().min(1).max(100).optional(),
});
