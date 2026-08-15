import type { FlowerProduct } from '../types/flower-product';
import type { FlowerBranchOption } from '../types/flower-inventory';
import type { FlowerOrder } from '../types/flower-order';
import type { FlowerUser } from '../types/auth';
import { DEMO_BRANCHES, STAFF_EMAIL_DOMAIN } from '../config/brand';
import { buildFlowerOrdersPitchSeed } from './flowers-pitch-seed';

export type FlowerStemCatalogItem = FlowerProduct;

const NOW = new Date().toISOString();

export const FLOWER_BRANCHES_MOCK: FlowerBranchOption[] = DEMO_BRANCHES.map((branch) => ({
  id: branch.id,
  name: branch.name,
  is_active: true,
}));

/** Placeholder SKUs — swap names/types per prospect; the engine does not care what they sell. */
export const FLOWER_STEMS_MOCK: FlowerStemCatalogItem[] = [
  { id: 'sku-staple-red', name: 'Staple', flower_type: 'Staple', product_kind: 'flower', color: 'Red', unit_cost: 45, is_active: true, created_at: NOW },
  { id: 'sku-staple-blue', name: 'Staple', flower_type: 'Staple', product_kind: 'flower', color: 'Blue', unit_cost: 45, is_active: true, created_at: NOW },
  { id: 'sku-core-mixed', name: 'Core', flower_type: 'Core', product_kind: 'flower', color: 'Mixed', unit_cost: 55, is_active: true, created_at: NOW },
  { id: 'sku-core-std', name: 'Core', flower_type: 'Core', product_kind: 'flower', color: 'Standard', unit_cost: 40, is_active: true, created_at: NOW },
  { id: 'sku-pack-small', name: 'Pack', flower_type: 'Pack', product_kind: 'flower', color: 'Small', unit_cost: 35, is_active: true, created_at: NOW },
  { id: 'sku-pack-large', name: 'Pack', flower_type: 'Pack', product_kind: 'flower', color: 'Large', unit_cost: 60, is_active: true, created_at: NOW },
  { id: 'sku-addon-white', name: 'Add-on', flower_type: 'Add-on', product_kind: 'flower', color: 'White', unit_cost: 25, is_active: true, created_at: NOW },
  { id: 'sku-addon-clear', name: 'Add-on', flower_type: 'Add-on', product_kind: 'flower', color: 'Clear', unit_cost: 30, is_active: true, created_at: NOW },
  { id: 'sku-premium-black', name: 'Premium', flower_type: 'Premium', product_kind: 'flower', color: 'Black', unit_cost: 75, is_active: true, created_at: NOW },
  { id: 'sku-premium-gold', name: 'Premium', flower_type: 'Premium', product_kind: 'flower', color: 'Gold', unit_cost: 38, is_active: true, created_at: NOW },
];

export const FLOWER_INVENTORY_SEED: Record<string, Record<string, number>> = {
  'branch-north': {
    'sku-staple-red': 120,
    'sku-staple-blue': 80,
    'sku-core-mixed': 60,
    'sku-core-std': 40,
    'sku-pack-small': 100,
    'sku-pack-large': 50,
    'sku-addon-white': 90,
    'sku-addon-clear': 70,
    'sku-premium-black': 30,
    'sku-premium-gold': 55,
  },
  'branch-midtown': {
    'sku-staple-red': 90,
    'sku-staple-blue': 70,
    'sku-core-mixed': 45,
    'sku-core-std': 35,
    'sku-pack-small': 80,
    'sku-pack-large': 40,
    'sku-addon-white': 75,
    'sku-addon-clear': 60,
    'sku-premium-black': 25,
    'sku-premium-gold': 45,
  },
  'branch-south': {
    'sku-staple-red': 100,
    'sku-staple-blue': 65,
    'sku-core-mixed': 50,
    'sku-core-std': 30,
    'sku-pack-small': 85,
    'sku-pack-large': 35,
    'sku-addon-white': 80,
    'sku-addon-clear': 55,
    'sku-premium-black': 20,
    'sku-premium-gold': 40,
  },
};

export const FLOWER_DEMO_USERS: Array<
  FlowerUser & { password: string; branch_name?: string | null }
> = [
  {
    id: 'user-admin',
    email: `admin@${STAFF_EMAIL_DOMAIN}`,
    display_name: 'Demo Admin',
    role: 'admin',
    branch_id: null,
    branch_name: null,
    onboarding_completed: true,
    is_active: true,
    password: 'admin1234',
  },
  {
    id: 'user-co-admin',
    email: `coadmin@${STAFF_EMAIL_DOMAIN}`,
    display_name: 'Demo Co-admin',
    role: 'co_admin',
    branch_id: null,
    branch_name: null,
    onboarding_completed: true,
    is_active: true,
    password: 'coadmin1234',
  },
  {
    id: 'user-staff-1',
    email: `staff1@${STAFF_EMAIL_DOMAIN}`,
    display_name: 'Staff North',
    role: 'staff',
    branch_id: 'branch-north',
    branch_name: 'North Plaza',
    onboarding_completed: true,
    is_active: true,
    password: 'staff1234',
  },
  {
    id: 'user-staff-2',
    email: `staff2@${STAFF_EMAIL_DOMAIN}`,
    display_name: 'Staff Midtown',
    role: 'staff',
    branch_id: 'branch-midtown',
    branch_name: 'Midtown',
    onboarding_completed: true,
    is_active: true,
    password: 'staff1234',
  },
];

/** Built at seed time with relative Manila dates so the pitch always looks current. */
export function getFlowerOrdersSeed(): FlowerOrder[] {
  return buildFlowerOrdersPitchSeed();
}

/** @deprecated Prefer getFlowerOrdersSeed() — kept for SSR/static imports. */
export const FLOWER_ORDERS_SEED: FlowerOrder[] = [];

/** @deprecated use FLOWER_STEMS_MOCK */
export type FlowerPosCatalogItem = FlowerStemCatalogItem & {
  category?: string;
  description?: string;
  image?: string;
  base_price?: number;
};

/** @deprecated use FLOWER_STEMS_MOCK */
export const FLOWER_PRODUCTS_CATALOG_MOCK = FLOWER_STEMS_MOCK.map((stem) => ({
  ...stem,
  base_price: stem.unit_cost,
  category: 'Stems',
}));
