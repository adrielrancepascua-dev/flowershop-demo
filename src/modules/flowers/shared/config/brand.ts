/** Generic demo branding — override via Vite env for white-label pitches. */
export const BRAND_NAME = import.meta.env.VITE_BRAND_NAME || 'Plaza Retail';
export const BRAND_TAGLINE =
  import.meta.env.VITE_BRAND_TAGLINE || 'Multi-branch inventory, sales, and staff operations';
export const LOGO_SRC = import.meta.env.VITE_BRAND_LOGO_SRC || '/demo-logo.svg';
export const CONTACT_PHONE = import.meta.env.VITE_CONTACT_PHONE || '(555) 010-0200';

/** Main hub branch that pays suppliers and records branch liability. */
export const HUB_BRANCH_ID = import.meta.env.VITE_HUB_BRANCH_ID || 'branch-north';

export const DEMO_BRANCHES = [
  { id: 'branch-north', name: 'North Plaza' },
  { id: 'branch-midtown', name: 'Midtown' },
  { id: 'branch-south', name: 'South Market' },
] as const;

/** Domain used when admins create staff login emails (no @ symbol). */
export const STAFF_EMAIL_DOMAIN =
  import.meta.env.VITE_STAFF_EMAIL_DOMAIN || 'demo.plazaretail.app';

export function formatStaffEmailExample(localPart = 'maria.santos'): string {
  return `${localPart}@${STAFF_EMAIL_DOMAIN}`;
}

export function formatBranchListLabel(): string {
  return DEMO_BRANCHES.map((branch) => branch.name).join(', ');
}
