import { isFlowerDemoMode } from '../../app/app-mode';
import { getFlowerStorageMode, shouldUseFlowerSupabase } from './storage-mode';

/**
 * Eagerly touch every local demo store so pitch sample data is written on first visit,
 * even before the user opens Orders / Expenses / Inventory.
 */
export async function ensureFlowerDemoPitchSeedLocal(): Promise<void> {
  if (typeof window === 'undefined') {
    return;
  }

  if (!isFlowerDemoMode()) {
    return;
  }

  if (shouldUseFlowerSupabase(getFlowerStorageMode())) {
    return;
  }

  const [
    { listFlowerOrdersLocal },
    { listFlowerStaffExpensesLocal, listFlowerSupplierCostsLocal },
    {
      listFlowerInventoryMovementsLocal,
      listFlowerTransferRequestsLocal,
      listFlowerInventoryStockLocal,
    },
    { listDailyInventoryCountsLocal },
    { listFlowerSupplyTransfersLocal },
    { listFlowerStemsLocal },
  ] = await Promise.all([
    import('./orders/flowers-orders.local'),
    import('./expenses/flowers-expenses.local'),
    import('./inventory/flowers-inventory.local'),
    import('./inventory/flowers-daily-inventory.local'),
    import('./supplies/flowers-supply-transfers.local'),
    import('./products/flowers-products.local'),
  ]);

  await Promise.all([
    listFlowerStemsLocal(),
    listFlowerInventoryStockLocal(),
    listFlowerOrdersLocal(),
    listFlowerStaffExpensesLocal(),
    listFlowerSupplierCostsLocal(),
    listFlowerInventoryMovementsLocal({ limit: 50 }),
    listFlowerTransferRequestsLocal({ includeBilling: true }),
    listDailyInventoryCountsLocal(),
    listFlowerSupplyTransfersLocal(),
  ]);
}
