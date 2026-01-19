import { Router } from 'express';
import { VehicleCatalogController } from '../controllers/vehicleCatalog.controller';

const router = Router();

// ============================================
// UTILITY & HEALTH ROUTES
// ============================================
router.get('/health', VehicleCatalogController.healthCheck);
router.get('/statistics', VehicleCatalogController.getStatistics);
router.get('/export', VehicleCatalogController.export);

// ============================================
// BRAND ROUTES
// ============================================
router.get('/brands', VehicleCatalogController.getBrands);
router.get('/brand/:brand', VehicleCatalogController.getByBrand);
router.get('/brand/:brand/model/:model', VehicleCatalogController.getByBrandAndModel);

// ============================================
// SEARCH & FILTER ROUTES
// ============================================
router.get('/search', VehicleCatalogController.search);
router.post('/advanced-search', VehicleCatalogController.advancedSearch);
router.get('/filter/battery', VehicleCatalogController.filterByBatteryCapacity);
router.get('/recent', VehicleCatalogController.getRecentVehicles);

// ============================================
// TYPE & COMPATIBILITY ROUTES
// ============================================
router.get('/type/:type', VehicleCatalogController.getByType);
router.get('/compatible/:connectorType', VehicleCatalogController.findCompatibleVehicles);

// ============================================
// COMPARISON & ANALYSIS ROUTES
// ============================================
router.post('/compare', VehicleCatalogController.compareVehicles);

// ============================================
// BULK OPERATIONS
// ============================================
router.post('/bulk', VehicleCatalogController.bulkCreate);

// ============================================
// VEHICLE SPECIFIC ROUTES (with ID)
// Must come after specific routes to avoid conflicts
// ============================================
router.get('/:id/charging-capability', VehicleCatalogController.getChargingCapability);
router.get('/:id/compatibility', VehicleCatalogController.getCompatibility);
router.post('/:id/restore', VehicleCatalogController.restore);
router.delete('/:id/permanent', VehicleCatalogController.hardDelete);
router.get('/:id', VehicleCatalogController.getById);
router.patch('/:id', VehicleCatalogController.update);
router.delete('/:id', VehicleCatalogController.softDelete);

// ============================================
// CRUD ROUTES
// ============================================
router.get('/', VehicleCatalogController.list);
router.post('/', VehicleCatalogController.create);

export default router;