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

/** Demo catalog: stems plus wrappers, ribbon, tissue, and gift items. */
export const FLOWER_STEMS_MOCK: FlowerStemCatalogItem[] = [
  { id: 'sku-rose-red', name: 'Local Rose', flower_type: 'Local Rose', product_kind: 'flower', color: 'Red', unit_cost: 45, is_active: true, created_at: NOW },
  { id: 'sku-rose-pink', name: 'Local Rose', flower_type: 'Local Rose', product_kind: 'flower', color: 'Pink', unit_cost: 45, is_active: true, created_at: NOW },
  { id: 'sku-rose-white', name: 'Local Rose', flower_type: 'Local Rose', product_kind: 'flower', color: 'White', unit_cost: 48, is_active: true, created_at: NOW },
  { id: 'sku-lily-white', name: 'Lily', flower_type: 'Lily', product_kind: 'flower', color: 'White', unit_cost: 55, is_active: true, created_at: NOW },
  { id: 'sku-lily-pink', name: 'Lily', flower_type: 'Lily', product_kind: 'flower', color: 'Pink', unit_cost: 55, is_active: true, created_at: NOW },
  { id: 'sku-mum-yellow', name: 'Chrysanthemum', flower_type: 'Chrysanthemum', product_kind: 'flower', color: 'Yellow', unit_cost: 22, is_active: true, created_at: NOW },
  { id: 'sku-mum-white', name: 'Chrysanthemum', flower_type: 'Chrysanthemum', product_kind: 'flower', color: 'White', unit_cost: 22, is_active: true, created_at: NOW },
  { id: 'sku-carnation-red', name: 'Carnation', flower_type: 'Carnation', product_kind: 'flower', color: 'Red', unit_cost: 18, is_active: true, created_at: NOW },
  { id: 'sku-carnation-pink', name: 'Carnation', flower_type: 'Carnation', product_kind: 'flower', color: 'Pink', unit_cost: 18, is_active: true, created_at: NOW },
  { id: 'sku-gypsophila-white', name: "Baby's Breath", flower_type: "Baby's Breath", product_kind: 'flower', color: 'White', unit_cost: 25, is_active: true, created_at: NOW },
  { id: 'sku-statice-purple', name: 'Statice', flower_type: 'Statice', product_kind: 'flower', color: 'Purple', unit_cost: 15, is_active: true, created_at: NOW },
  { id: 'sku-wrapper-kraft', name: 'Kraft Wrapper', flower_type: 'Wrappers', product_kind: 'misc', color: 'Kraft', unit_cost: 12, is_active: true, created_at: NOW },
  { id: 'sku-wrapper-korean', name: 'Korean Wrapper', flower_type: 'Wrappers', product_kind: 'misc', color: 'Pink', unit_cost: 18, is_active: true, created_at: NOW },
  { id: 'sku-ribbon-red', name: 'Satin Ribbon', flower_type: 'Wrappers', product_kind: 'misc', color: 'Red', unit_cost: 8, is_active: true, created_at: NOW },
  { id: 'sku-tissue-white', name: 'Tissue', flower_type: 'Wrappers', product_kind: 'misc', color: 'White', unit_cost: 5, is_active: true, created_at: NOW },
  { id: 'sku-choc-ferrero', name: 'Ferrero', flower_type: 'Gift items', product_kind: 'misc', color: 'Mixed', unit_cost: 35, is_active: true, created_at: NOW },
];

export const FLOWER_INVENTORY_SEED: Record<string, Record<string, number>> = {
  'branch-north': {
    'sku-rose-red': 120,
    'sku-rose-pink': 80,
    'sku-rose-white': 70,
    'sku-lily-white': 50,
    'sku-lily-pink': 40,
    'sku-mum-yellow': 160,
    'sku-mum-white': 140,
    'sku-carnation-red': 100,
    'sku-carnation-pink': 90,
    'sku-gypsophila-white': 90,
    'sku-statice-purple': 70,
    'sku-wrapper-kraft': 80,
    'sku-wrapper-korean': 45,
    'sku-ribbon-red': 60,
    'sku-tissue-white': 120,
    'sku-choc-ferrero': 36,
  },
  'branch-midtown': {
    'sku-rose-red': 90,
    'sku-rose-pink': 70,
    'sku-rose-white': 45,
    'sku-lily-white': 40,
    'sku-lily-pink': 35,
    'sku-mum-yellow': 110,
    'sku-mum-white': 95,
    'sku-carnation-red': 80,
    'sku-carnation-pink': 75,
    'sku-gypsophila-white': 75,
    'sku-statice-purple': 60,
    'sku-wrapper-kraft': 55,
    'sku-wrapper-korean': 30,
    'sku-ribbon-red': 40,
    'sku-tissue-white': 80,
    'sku-choc-ferrero': 24,
  },
  'branch-south': {
    'sku-rose-red': 100,
    'sku-rose-pink': 65,
    'sku-rose-white': 50,
    'sku-lily-white': 35,
    'sku-lily-pink': 30,
    'sku-mum-yellow': 150,
    'sku-mum-white': 130,
    'sku-carnation-red': 85,
    'sku-carnation-pink': 70,
    'sku-gypsophila-white': 80,
    'sku-statice-purple': 55,
    'sku-wrapper-kraft': 50,
    'sku-wrapper-korean': 25,
    'sku-ribbon-red': 35,
    'sku-tissue-white': 90,
    'sku-choc-ferrero': 18,
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
  category: stem.product_kind === 'misc' ? 'Materials' : 'Stems',
}));
