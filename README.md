# Plaza Retail — Multi-branch operations demo

Generic **multi-branch inventory, sales, and staff** demo for pitching to shops with 2+ branches — hardware, pharmacy, uniforms, feed, appliances, groceries, bakeries, flower shops, and similar.  
This repo is separate from any client production deployment. Sample SKUs are placeholders; the catalog is configured per prospect.

Landing/marketing pages are out of scope for now — this is the live back office only.

## What this demo includes

- **Orders** — calendar + list, pickup/delivery/walk-in, photos, downpayment/balance, status workflow
- **Inventory** — per-branch stock, admin adjust, inter-branch transfers, packing slips, movement history
- **Products** — catalog types + variants, plus supplies
- **Payments** — cash, GCash, Maya Terminal, branch-specific banks; explicit balance collection
- **Expenses** — staff expenses (cash/GCash) + admin supplier costs
- **Daily count** — staff submit actuals; reports stay locked until submitted
- **Reports** — daily/monthly sales, COGS (owner-only), cash on hand, printable sales reports
- **Supplies** — hub-branch supply vouchers + branch liability tracking
- **Team** — admin / co-admin / staff roles + onboarding
- **Print** — thermal order slips + transfer packing slips

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
| Admin | `admin@demo.plazaretail.app` | `admin1234` |
| Co-admin | `coadmin@demo.plazaretail.app` | `coadmin1234` |
| Staff (North) | `staff1@demo.plazaretail.app` | `staff1234` |
| Staff (Midtown) | `staff2@demo.plazaretail.app` | `staff1234` |

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

1. Log in as Admin — this is the **engine**, not a flower app. Catalog SKUs are stand-ins.
2. Orders — create order with downpayment + balance due; mark balance paid with an explicit mode.
3. Inventory — stock by branch + transfer request + packing slip.
4. Daily count — submit actuals (reports stay locked until this is done).
5. Reports — sales by payment + cash on hand; mention co-admin cannot see COGS/net.
6. “Tell me your catalog — we configure SKUs, branches, and payment modes for your shop.”

## Repo relationship

- **This repo:** generic demo / sales pitch (`flowershop-demo`)
- **Client repo:** separate production instance with client branding and data

Do not mix client-specific branding, product lists, or production credentials into this demo repo.
