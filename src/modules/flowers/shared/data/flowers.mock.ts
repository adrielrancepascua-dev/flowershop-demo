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

export const FLOWER_STEMS_MOCK: FlowerStemCatalogItem[] = [
  { id: 'stem-rose-red', name: 'Local Rose', flower_type: 'Local Rose', product_kind: 'flower', color: 'Red', unit_cost: 45, is_active: true, created_at: NOW },
  { id: 'stem-rose-pink', name: 'Local Rose', flower_type: 'Local Rose', product_kind: 'flower', color: 'Pink', unit_cost: 45, is_active: true, created_at: NOW },
  { id: 'stem-tulip', name: 'Tulip', flower_type: 'Tulip', product_kind: 'flower', color: 'Mixed', unit_cost: 55, is_active: true, created_at: NOW },
  { id: 'stem-sunflower', name: 'Sunflower', flower_type: 'Sunflower', product_kind: 'flower', color: 'Yellow', unit_cost: 40, is_active: true, created_at: NOW },
  { id: 'stem-carnation', name: 'Carnation', flower_type: 'Carnation', product_kind: 'flower', color: 'Pink', unit_cost: 35, is_active: true, created_at: NOW },
  { id: 'stem-lily', name: 'Lily', flower_type: 'Lily', product_kind: 'flower', color: 'White', unit_cost: 60, is_active: true, created_at: NOW },
  { id: 'stem-babys-breath', name: "Baby's Breath", flower_type: "Baby's Breath", product_kind: 'flower', color: 'White', unit_cost: 25, is_active: true, created_at: NOW },
  { id: 'stem-eucalyptus', name: 'Eucalyptus', flower_type: 'Eucalyptus', product_kind: 'flower', color: 'Green', unit_cost: 30, is_active: true, created_at: NOW },
  { id: 'stem-hydrangea', name: 'Hydrangea', flower_type: 'Hydrangea', product_kind: 'flower', color: 'Blue', unit_cost: 75, is_active: true, created_at: NOW },
  { id: 'stem-gerbera', name: 'Gerbera', flower_type: 'Gerbera', product_kind: 'flower', color: 'Orange', unit_cost: 38, is_active: true, created_at: NOW },
];

export const FLOWER_INVENTORY_SEED: Record<string, Record<string, number>> = {
  'branch-north': {
    'stem-rose-red': 120,
    'stem-rose-pink': 80,
    'stem-tulip': 60,
    'stem-sunflower': 40,
    'stem-carnation': 100,
    'stem-lily': 50,
    'stem-babys-breath': 90,
    'stem-eucalyptus': 70,
    'stem-hydrangea': 30,
    'stem-gerbera': 55,
  },
  'branch-midtown': {
    'stem-rose-red': 90,
    'stem-rose-pink': 70,
    'stem-tulip': 45,
    'stem-sunflower': 35,
    'stem-carnation': 80,
    'stem-lily': 40,
    'stem-babys-breath': 75,
    'stem-eucalyptus': 60,
    'stem-hydrangea': 25,
    'stem-gerbera': 45,
  },
  'branch-south': {
    'stem-rose-red': 100,
    'stem-rose-pink': 65,
    'stem-tulip': 50,
    'stem-sunflower': 30,
    'stem-carnation': 85,
    'stem-lily': 35,
    'stem-babys-breath': 80,
    'stem-eucalyptus': 55,
    'stem-hydrangea': 20,
    'stem-gerbera': 40,
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
