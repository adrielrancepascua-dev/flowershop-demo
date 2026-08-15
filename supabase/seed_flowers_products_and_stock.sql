-- Plaza Retail — placeholder SKU seed + starting stock (run after schema_flowers_v2.sql)

insert into public.flower_products (id, name, color, unit_cost, is_active) values
  ('sku-staple-red', 'Staple', 'Red', 45, true),
  ('sku-staple-blue', 'Staple', 'Blue', 45, true),
  ('sku-core-mixed', 'Core', 'Mixed', 55, true),
  ('sku-core-std', 'Core', 'Standard', 40, true),
  ('sku-pack-small', 'Pack', 'Small', 35, true),
  ('sku-pack-large', 'Pack', 'Large', 60, true),
  ('sku-addon-white', 'Add-on', 'White', 25, true),
  ('sku-addon-clear', 'Add-on', 'Clear', 30, true),
  ('sku-premium-black', 'Premium', 'Black', 75, true),
  ('sku-premium-gold', 'Premium', 'Gold', 38, true)
on conflict (id) do update set
  name = excluded.name,
  color = excluded.color,
  unit_cost = excluded.unit_cost,
  is_active = excluded.is_active;

-- North Plaza (hub)
insert into public.flower_inventory_stock (branch_id, product_id, on_hand, updated_at) values
  ('branch-north', 'sku-staple-red', 120, now()),
  ('branch-north', 'sku-staple-blue', 80, now()),
  ('branch-north', 'sku-core-mixed', 60, now()),
  ('branch-north', 'sku-core-std', 40, now()),
  ('branch-north', 'sku-pack-small', 100, now()),
  ('branch-north', 'sku-pack-large', 50, now()),
  ('branch-north', 'sku-addon-white', 90, now()),
  ('branch-north', 'sku-addon-clear', 70, now()),
  ('branch-north', 'sku-premium-black', 30, now()),
  ('branch-north', 'sku-premium-gold', 55, now())
on conflict (branch_id, product_id) do update set on_hand = excluded.on_hand, updated_at = excluded.updated_at;

-- Midtown
insert into public.flower_inventory_stock (branch_id, product_id, on_hand, updated_at) values
  ('branch-midtown', 'sku-staple-red', 90, now()),
  ('branch-midtown', 'sku-staple-blue', 70, now()),
  ('branch-midtown', 'sku-core-mixed', 45, now()),
  ('branch-midtown', 'sku-core-std', 35, now()),
  ('branch-midtown', 'sku-pack-small', 80, now()),
  ('branch-midtown', 'sku-pack-large', 40, now()),
  ('branch-midtown', 'sku-addon-white', 75, now()),
  ('branch-midtown', 'sku-addon-clear', 60, now()),
  ('branch-midtown', 'sku-premium-black', 25, now()),
  ('branch-midtown', 'sku-premium-gold', 45, now())
on conflict (branch_id, product_id) do update set on_hand = excluded.on_hand, updated_at = excluded.updated_at;

-- South Market
insert into public.flower_inventory_stock (branch_id, product_id, on_hand, updated_at) values
  ('branch-south', 'sku-staple-red', 100, now()),
  ('branch-south', 'sku-staple-blue', 65, now()),
  ('branch-south', 'sku-core-mixed', 50, now()),
  ('branch-south', 'sku-core-std', 30, now()),
  ('branch-south', 'sku-pack-small', 85, now()),
  ('branch-south', 'sku-pack-large', 35, now()),
  ('branch-south', 'sku-addon-white', 80, now()),
  ('branch-south', 'sku-addon-clear', 55, now()),
  ('branch-south', 'sku-premium-black', 20, now()),
  ('branch-south', 'sku-premium-gold', 40, now())
on conflict (branch_id, product_id) do update set on_hand = excluded.on_hand, updated_at = excluded.updated_at;
