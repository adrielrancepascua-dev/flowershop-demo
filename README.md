# Bloom & Branch — Multi-Branch Flower Shop Demo

Generic **flowershop back office** demo for pitching to multi-branch flower shops.  
This repo is separate from any client production deployment.

## What this demo includes

- **Orders** — calendar + list, pickup/delivery/walk-in, photos, downpayment/balance, status workflow
- **Inventory** — per-branch stock, admin adjust, inter-branch transfers, movement history
- **Products** — flower catalog (type/color) + misc items (wrappers, supplies)
- **Payments** — cash, GCash, branch-specific banks; balance collection with explicit mode selection
- **Expenses** — staff expenses (cash/GCash) + admin supplier costs
- **Reports** — daily/monthly sales, COGS, cash on hand, printable sales reports
- **Supplies** — hub-branch supply vouchers + branch liability tracking
- **Team** — admin staff creation + onboarding (Supabase path)
- **Print** — thermal order slips + 4×6 coupon presets

## Demo branches (fictional)

| Branch | ID |
|--------|-----|
| North Plaza (hub) | `branch-north` |
| Midtown | `branch-midtown` |
| South Market | `branch-south` |

## Quick start (no Supabase)

```bash
npm install
npm run dev
```

Set `VITE_APP_MODE=flower_demo` in `.env` (see `.env.example`).

### One-tap demo login

| Role | Email | Password |
|------|-------|----------|
| Admin | `admin@demo.bloombranch.app` | `admin1234` |
| Staff (North) | `staff1@demo.bloombranch.app` | `staff1234` |
| Staff (Midtown) | `staff2@demo.bloombranch.app` | `staff1234` |

Data is stored in browser `localStorage` (prefix `bloom_branch_demo_*`).

## White-label branding

Override via environment variables:

- `VITE_BRAND_NAME`
- `VITE_BRAND_TAGLINE`
- `VITE_BRAND_LOGO_SRC`
- `VITE_CONTACT_PHONE`
- `VITE_HUB_BRANCH_ID`
- `VITE_STAFF_EMAIL_DOMAIN`

Defaults live in `src/modules/flowers/shared/config/brand.ts`.

## Production path (optional)

Connect your own Supabase project:

1. Run SQL in `supabase/` (start with `schema_flowers_v2.sql`, then migrations).
2. Use `supabase/seed_demo_branches.sql` and `seed_flowers_products_and_stock.sql`.
3. Set `VITE_APP_MODE=cafe`, `VITE_FLOWER_STORAGE_MODE=supabase`, and Supabase keys.

## Deploy (Vercel)

- Framework: Vite
- Build: `npm run build`
- Output: `dist`
- Env: `VITE_APP_MODE=flower_demo` for pitch deploys

## Pitch script (5 minutes)

1. Log in as Admin → show home dashboard.
2. Orders → create order with downpayment + balance due.
3. Mark balance paid → must choose payment mode explicitly.
4. Inventory → show branch stock + transfer request.
5. Reports → show sales by payment + cash on hand.
6. Mention: same UI runs on demo storage or Supabase for production.

## Repo relationship

- **This repo:** generic demo / sales pitch (`flowershop-demo`)
- **Client repo:** separate production instance with client branding and data

Do not mix client-specific branding or production credentials into this demo repo.
