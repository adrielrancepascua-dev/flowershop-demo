export const FLOWER_PAYMENT_MODE_LABELS = {
  cash: 'Cash',
  gcash: 'GCash',
  metrobank: 'Metrobank',
  metrobank_card: 'Maya Terminal',
  bpi: 'BPI',
  eastwest: 'Eastwest',
  /** @deprecated Legacy value from before branch-specific bank options. */
  bank: 'Bank',
} as const;

export type FlowerPaymentMode = keyof typeof FLOWER_PAYMENT_MODE_LABELS;

export const FLOWER_PAYMENT_MODES = Object.keys(
  FLOWER_PAYMENT_MODE_LABELS,
) as FlowerPaymentMode[];

const BRANCH_PAYMENT_MODES_BY_ID: Record<string, FlowerPaymentMode[]> = {
  'branch-north': ['cash', 'gcash', 'metrobank', 'metrobank_card', 'bpi'],
  'branch-midtown': ['cash', 'gcash', 'metrobank_card', 'eastwest'],
  'branch-south': ['cash', 'gcash', 'metrobank_card'],
};

export function getFlowerPaymentModesForBranch(
  branchId: string,
  _branchName?: string,
): FlowerPaymentMode[] {
  const branchKey = branchId.trim().toLowerCase();
  return BRANCH_PAYMENT_MODES_BY_ID[branchKey] ?? ['cash', 'gcash'];
}

export function isFlowerPaymentMode(value: string): value is FlowerPaymentMode {
  return value in FLOWER_PAYMENT_MODE_LABELS;
}

export function normalizeFlowerPaymentMode(
  value: string | null | undefined,
  branchId?: string,
  branchName?: string,
): FlowerPaymentMode {
  if (!value) {
    return 'cash';
  }

  if (value === 'bank') {
    const modes = branchId ? getFlowerPaymentModesForBranch(branchId, branchName) : [];
    const firstBankMode = modes.find((mode) => mode !== 'cash' && mode !== 'gcash');
    return firstBankMode ?? 'bank';
  }

  if (isFlowerPaymentMode(value)) {
    return value;
  }

  return 'cash';
}

export function formatFlowerPaymentModeLabel(value: string | null | undefined): string {
  if (!value) {
    return FLOWER_PAYMENT_MODE_LABELS.cash;
  }

  if (isFlowerPaymentMode(value)) {
    return FLOWER_PAYMENT_MODE_LABELS[value];
  }

  return value;
}

export function requiresFlowerPaymentReference(mode: FlowerPaymentMode | ''): boolean {
  return Boolean(mode) && mode !== 'cash';
}
