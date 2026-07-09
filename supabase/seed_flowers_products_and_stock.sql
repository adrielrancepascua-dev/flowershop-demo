-- Bloom & Branch — seed products + starting stock (run after schema_flowers_v2.sql)

insert into public.flower_products (id, name, color, unit_cost, is_active) values
  ('stem-rose-red', 'Red Rose', 'Red', 45, true),
  ('stem-rose-pink', 'Pink Rose', 'Pink', 45, true),
  ('stem-tulip', 'Tulip', 'Mixed', 55, true),
  ('stem-sunflower', 'Sunflower', 'Yellow', 40, true),
  ('stem-carnation', 'Carnation', 'Pink', 35, true),
  ('stem-lily', 'Lily', 'White', 60, true),
  ('stem-babys-breath', 'Baby''s Breath', 'White', 25, true),
  ('stem-eucalyptus', 'Eucalyptus', 'Green', 30, true),
  ('stem-hydrangea', 'Hydrangea', 'Blue', 75, true),
  ('stem-gerbera', 'Gerbera', 'Orange', 38, true)
on conflict (id) do update set
  name = excluded.name,
  color = excluded.color,
  unit_cost = excluded.unit_cost,
  is_active = excluded.is_active;

-- North Plaza (hub)
insert into public.flower_inventory_stock (branch_id, product_id, on_hand, updated_at) values
  ('branch-north', 'stem-rose-red', 120, now()),
  ('branch-north', 'stem-rose-pink', 80, now()),
  ('branch-north', 'stem-tulip', 60, now()),
  ('branch-north', 'stem-sunflower', 40, now()),
  ('branch-north', 'stem-carnation', 100, now()),
  ('branch-north', 'stem-lily', 50, now()),
  ('branch-north', 'stem-babys-breath', 90, now()),
  ('branch-north', 'stem-eucalyptus', 70, now()),
  ('branch-north', 'stem-hydrangea', 30, now()),
  ('branch-north', 'stem-gerbera', 55, now())
on conflict (branch_id, product_id) do update set on_hand = excluded.on_hand, updated_at = excluded.updated_at;

-- Midtown
insert into public.flower_inventory_stock (branch_id, product_id, on_hand, updated_at) values
  ('branch-midtown', 'stem-rose-red', 90, now()),
  ('branch-midtown', 'stem-rose-pink', 70, now()),
  ('branch-midtown', 'stem-tulip', 45, now()),
  ('branch-midtown', 'stem-sunflower', 35, now()),
  ('branch-midtown', 'stem-carnation', 80, now()),
  ('branch-midtown', 'stem-lily', 40, now()),
  ('branch-midtown', 'stem-babys-breath', 75, now()),
  ('branch-midtown', 'stem-eucalyptus', 60, now()),
  ('branch-midtown', 'stem-hydrangea', 25, now()),
  ('branch-midtown', 'stem-gerbera', 45, now())
on conflict (branch_id, product_id) do update set on_hand = excluded.on_hand, updated_at = excluded.updated_at;

-- South Market
insert into public.flower_inventory_stock (branch_id, product_id, on_hand, updated_at) values
  ('branch-south', 'stem-rose-red', 100, now()),
  ('branch-south', 'stem-rose-pink', 65, now()),
  ('branch-south', 'stem-tulip', 50, now()),
  ('branch-south', 'stem-sunflower', 30, now()),
  ('branch-south', 'stem-carnation', 85, now()),
  ('branch-south', 'stem-lily', 35, now()),
  ('branch-south', 'stem-babys-breath', 80, now()),
  ('branch-south', 'stem-eucalyptus', 55, now()),
  ('branch-south', 'stem-hydrangea', 20, now()),
  ('branch-south', 'stem-gerbera', 40, now())
on conflict (branch_id, product_id) do update set on_hand = excluded.on_hand, updated_at = excluded.updated_at;
