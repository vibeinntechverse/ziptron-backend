import { Request, Response, NextFunction } from 'express';
import { VehicleCatalogService } from '../services/vehicleCatalog.service';
import { ConnectorType } from '../../generated/postgres/client';

// Custom error handler wrapper
const asyncHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Response helper
class ApiResponse {
  static success(res: Response, data: any, message?: string, statusCode: number = 200) {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
      timestamp: new Date().toISOString(),
    });
  }

  static error(res: Response, message: string, statusCode: number = 400, errors?: any) {
    return res.status(statusCode).json({
      success: false,
      message,
      errors,
      timestamp: new Date().toISOString(),
    });
  }
}

export const VehicleCatalogController = {
  /* ==============================
     LIST VEHICLES
     GET /api/vehicles
     Query params: brand, vehicleType, connectorType, isActive, skip, limit
  ============================== */
  list: asyncHandler(async (req: Request, res: Response) => {
    const result = await VehicleCatalogService.list(req.query);
    
    ApiResponse.success(res, result, 'Vehicles retrieved successfully');
  }),

  /* ==============================
     SEARCH VEHICLES
     GET /api/vehicles/search
     Query params: q (search term), includeInactive, limit
  ============================== */
  search: asyncHandler(async (req: Request, res: Response) => {
    const { q, includeInactive, limit } = req.query;

    if (!q || typeof q !== 'string') {
      return ApiResponse.error(res, 'Search term (q) is required', 400);
    }

    const vehicles = await VehicleCatalogService.search(q, {
      includeInactive: includeInactive === 'true',
      limit: limit ? parseInt(limit as string) : undefined,
    });

    ApiResponse.success(
      res,
      { vehicles, count: vehicles.length },
      `Found ${vehicles.length} vehicles matching "${q}"`
    );
  }),

  /* ==============================
     GET VEHICLE BY ID
     GET /api/vehicles/:id
     Query params: includeInactive
  ============================== */
  getById: asyncHandler(async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const includeInactive = req.query.includeInactive === 'true';

    const vehicle = await VehicleCatalogService.getById(id, { includeInactive });

    ApiResponse.success(res, vehicle, 'Vehicle retrieved successfully');
  }),

  /* ==============================
     GET VEHICLE BY BRAND AND MODEL
     GET /api/vehicles/brand/:brand/model/:model
  ============================== */
  getByBrandAndModel: asyncHandler(async (req: Request, res: Response) => {
    const { brand, model } = req.params;

    const vehicle = await VehicleCatalogService.getByBrandAndModel(brand, model);

    if (!vehicle) {
      return ApiResponse.error(
        res,
        `Vehicle ${brand} ${model} not found`,
        404
      );
    }

    ApiResponse.success(res, vehicle, 'Vehicle retrieved successfully');
  }),

  /* ==============================
     CREATE VEHICLE
     POST /api/vehicles
     Body: { brand, model, year, batteryCapacity, vehicleType, connectors, imageUrl? }
  ============================== */
  create: asyncHandler(async (req: Request, res: Response) => {
    const vehicle = await VehicleCatalogService.create(req.body);

    ApiResponse.success(
      res,
      vehicle,
      `Vehicle ${vehicle.brand} ${vehicle.model} created successfully`,
      201
    );
  }),

  /* ==============================
     BULK CREATE VEHICLES
     POST /api/vehicles/bulk
     Body: [{ brand, model, year, ... }, ...]
  ============================== */
  bulkCreate: asyncHandler(async (req: Request, res: Response) => {
    if (!Array.isArray(req.body)) {
      return ApiResponse.error(res, 'Request body must be an array', 400);
    }

    const result = await VehicleCatalogService.bulkCreate(req.body);

    const statusCode = result.created > 0 ? 201 : 400;
    const message = `Bulk create completed: ${result.created} created, ${result.skipped} skipped`;

    ApiResponse.success(res, result, message, statusCode);
  }),

  /* ==============================
     UPDATE VEHICLE
     PATCH /api/vehicles/:id
     Body: { batteryCapacity?, vehicleType?, connectors?, imageUrl?, isActive? }
  ============================== */
  update: asyncHandler(async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const vehicle = await VehicleCatalogService.update(id, req.body);

    ApiResponse.success(
      res,
      vehicle,
      `Vehicle ${vehicle.brand} ${vehicle.model} updated successfully`
    );
  }),

  /* ==============================
     SOFT DELETE VEHICLE
     DELETE /api/vehicles/:id
  ============================== */
  softDelete: asyncHandler(async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const vehicle = await VehicleCatalogService.softDelete(id);

    ApiResponse.success(
      res,
      vehicle,
      `Vehicle ${vehicle.brand} ${vehicle.model} deleted successfully`
    );
  }),

  /* ==============================
     RESTORE VEHICLE
     POST /api/vehicles/:id/restore
  ============================== */
  restore: asyncHandler(async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const vehicle = await VehicleCatalogService.restore(id);

    ApiResponse.success(
      res,
      vehicle,
      `Vehicle ${vehicle.brand} ${vehicle.model} restored successfully`
    );
  }),

  /* ==============================
     HARD DELETE VEHICLE
     DELETE /api/vehicles/:id/permanent
  ============================== */
  hardDelete: asyncHandler(async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    await VehicleCatalogService.hardDelete(id);

    ApiResponse.success(
      res,
      { id },
      'Vehicle permanently deleted',
      200
    );
  }),

  /* ==============================
     GET CHARGING CAPABILITY
     GET /api/vehicles/:id/charging-capability
  ============================== */
  getChargingCapability: asyncHandler(async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const capability = await VehicleCatalogService.getChargingCapability(id);

    ApiResponse.success(
      res,
      capability,
      'Charging capability retrieved successfully'
    );
  }),

  /* ==============================
     GET COMPATIBILITY
     GET /api/vehicles/:id/compatibility
  ============================== */
  getCompatibility: asyncHandler(async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const compatibility = await VehicleCatalogService.getCompatibility(id);

    ApiResponse.success(
      res,
      compatibility,
      'Compatibility information retrieved successfully'
    );
  }),

  /* ==============================
     FIND COMPATIBLE VEHICLES
     GET /api/vehicles/compatible/:connectorType
  ============================== */
  findCompatibleVehicles: asyncHandler(async (req: Request, res: Response) => {
    const connectorType = req.params.connectorType.toUpperCase() as ConnectorType;

    // Validate connector type
    const validConnectors = ['TYPE2', 'CCS2', 'GB_T', 'CHADEMO', 'IEC60309'];
    if (!validConnectors.includes(connectorType)) {
      return ApiResponse.error(
        res,
        `Invalid connector type. Valid types: ${validConnectors.join(', ')}`,
        400
      );
    }

    const vehicles = await VehicleCatalogService.findCompatibleVehicles(connectorType);

    ApiResponse.success(
      res,
      { connectorType, vehicles, count: vehicles.length },
      `Found ${vehicles.length} vehicles compatible with ${connectorType}`
    );
  }),

  /* ==============================
     GET STATISTICS
     GET /api/vehicles/statistics
  ============================== */
  getStatistics: asyncHandler(async (req: Request, res: Response) => {
    const stats = await VehicleCatalogService.getStatistics();

    ApiResponse.success(res, stats, 'Statistics retrieved successfully');
  }),

  /* ==============================
     GET BRANDS
     GET /api/vehicles/brands
  ============================== */
  getBrands: asyncHandler(async (req: Request, res: Response) => {
    const brands = await VehicleCatalogService.getBrands();

    ApiResponse.success(
      res,
      { brands, count: brands.length },
      'Brands retrieved successfully'
    );
  }),

  /* ==============================
     FILTER BY BATTERY CAPACITY
     GET /api/vehicles/filter/battery
     Query params: min, max
  ============================== */
  filterByBatteryCapacity: asyncHandler(async (req: Request, res: Response) => {
    const { min, max } = req.query;

    if (!min || !max) {
      return ApiResponse.error(
        res,
        'Both min and max battery capacity are required',
        400
      );
    }

    const minCapacity = parseFloat(min as string);
    const maxCapacity = parseFloat(max as string);

    if (isNaN(minCapacity) || isNaN(maxCapacity)) {
      return ApiResponse.error(
        res,
        'Invalid battery capacity values',
        400
      );
    }

    if (minCapacity > maxCapacity) {
      return ApiResponse.error(
        res,
        'Minimum capacity cannot be greater than maximum',
        400
      );
    }

    const vehicles = await VehicleCatalogService.filterByBatteryCapacity(
      minCapacity,
      maxCapacity
    );

    ApiResponse.success(
      res,
      { vehicles, count: vehicles.length, range: { min: minCapacity, max: maxCapacity } },
      `Found ${vehicles.length} vehicles with battery capacity between ${minCapacity} and ${maxCapacity} kWh`
    );
  }),

  /* ==============================
     GET RECENT VEHICLES
     GET /api/vehicles/recent
     Query params: limit
  ============================== */
  getRecentVehicles: asyncHandler(async (req: Request, res: Response) => {
    const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;

    if (isNaN(limit) || limit < 1 || limit > 100) {
      return ApiResponse.error(
        res,
        'Limit must be between 1 and 100',
        400
      );
    }

    const vehicles = await VehicleCatalogService.getRecentVehicles(limit);

    ApiResponse.success(
      res,
      { vehicles, count: vehicles.length },
      `Retrieved ${vehicles.length} most recent vehicles`
    );
  }),

  /* ==============================
     COMPARE VEHICLES
     POST /api/vehicles/compare
     Body: { ids: [1, 2, 3] }
  ============================== */
  compareVehicles: asyncHandler(async (req: Request, res: Response) => {
    const { ids } = req.body;

    if (!Array.isArray(ids) || ids.length === 0) {
      return ApiResponse.error(
        res,
        'ids must be a non-empty array of vehicle IDs',
        400
      );
    }

    if (ids.length > 10) {
      return ApiResponse.error(
        res,
        'Cannot compare more than 10 vehicles at once',
        400
      );
    }

    // Validate all IDs are numbers
    const validIds = ids.every(id => Number.isInteger(id) && id > 0);
    if (!validIds) {
      return ApiResponse.error(
        res,
        'All IDs must be positive integers',
        400
      );
    }

    const comparison = await VehicleCatalogService.compareVehicles(ids);

    ApiResponse.success(
      res,
      { vehicles: comparison, count: comparison.length },
      `Comparing ${comparison.length} vehicles`
    );
  }),

  /* ==============================
     GET VEHICLES BY TYPE
     GET /api/vehicles/type/:type
  ============================== */
  getByType: asyncHandler(async (req: Request, res: Response) => {
    const vehicleType = req.params.type.toUpperCase();

    const result = await VehicleCatalogService.list({
      vehicleType,
      isActive: true,
    });

    ApiResponse.success(
      res,
      result,
      `Found ${result.pagination.total} ${vehicleType} vehicles`
    );
  }),

  /* ==============================
     GET VEHICLES BY BRAND
     GET /api/vehicles/brand/:brand
  ============================== */
  getByBrand: asyncHandler(async (req: Request, res: Response) => {
    const brand = req.params.brand;

    const result = await VehicleCatalogService.list({
      brand,
      isActive: true,
    });

    ApiResponse.success(
      res,
      result,
      `Found ${result.pagination.total} vehicles from ${brand}`
    );
  }),

  /* ==============================
     ADVANCED SEARCH
     POST /api/vehicles/advanced-search
     Body: { brands?, types?, minBattery?, maxBattery?, connectors?, year? }
  ============================== */
  advancedSearch: asyncHandler(async (req: Request, res: Response) => {
    const {
      brands,
      types,
      minBattery,
      maxBattery,
      connectors,
      minYear,
      maxYear,
    } = req.body;

    // Build complex query
    const vehicles = await VehicleCatalogService.list({
      isActive: true,
    });

    // Apply filters (this could be optimized with a dedicated service method)
    let filtered = vehicles.data;

    if (brands && Array.isArray(brands)) {
      filtered = filtered.filter(v => brands.includes(v.brand));
    }

    if (types && Array.isArray(types)) {
      filtered = filtered.filter(v => types.includes(v.vehicleType));
    }

    if (minBattery !== undefined) {
      filtered = filtered.filter(v => v.batteryCapacity >= minBattery);
    }

    if (maxBattery !== undefined) {
      filtered = filtered.filter(v => v.batteryCapacity <= maxBattery);
    }

    if (connectors && Array.isArray(connectors)) {
      filtered = filtered.filter(v =>
        v.connectors.some(c => connectors.includes(c.connectorType))
      );
    }

    if (minYear !== undefined) {
      filtered = filtered.filter(v => v.year >= minYear);
    }

    if (maxYear !== undefined) {
      filtered = filtered.filter(v => v.year <= maxYear);
    }

    ApiResponse.success(
      res,
      { vehicles: filtered, count: filtered.length },
      `Found ${filtered.length} vehicles matching criteria`
    );
  }),

  /* ==============================
     EXPORT VEHICLES
     GET /api/vehicles/export
     Query params: format (json/csv)
  ============================== */
  export: asyncHandler(async (req: Request, res: Response) => {
    const format = (req.query.format as string)?.toLowerCase() || 'json';

    const result = await VehicleCatalogService.list({ isActive: true });
    const vehicles = result.data;

    if (format === 'csv') {
      // Generate CSV
      const headers = [
        'ID',
        'Brand',
        'Model',
        'Year',
        'Battery Capacity (kWh)',
        'Type',
        'Connectors',
        'Active',
      ].join(',');

      const rows = vehicles.map(v =>
        [
          v.id,
          v.brand,
          v.model,
          v.year,
          v.batteryCapacity,
          v.vehicleType,
          v.connectors.map(c => c.connectorType).join(';'),
          v.isActive,
        ].join(',')
      );

      const csv = [headers, ...rows].join('\n');

      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename=vehicles.csv');
      return res.send(csv);
    }

    // Default: JSON format
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', 'attachment; filename=vehicles.json');
    return res.send(JSON.stringify(vehicles, null, 2));
  }),

  /* ==============================
     HEALTH CHECK
     GET /api/vehicles/health
  ============================== */
  healthCheck: asyncHandler(async (req: Request, res: Response) => {
    const stats = await VehicleCatalogService.getStatistics();

    ApiResponse.success(res, {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      database: 'connected',
      totalVehicles: stats.totalVehicles,
      activeVehicles: stats.activeVehicles,
    }, 'Service is healthy');
  }),
};