-- Plaza Retail demo — flower stems, fillers, wrappers, and gift items

insert into public.flower_products (id, name, color, unit_cost, is_active, flower_type, product_kind) values
  ('sku-rose-red', 'Local Rose', 'Red', 45, true, 'Local Rose', 'flower'),
  ('sku-rose-pink', 'Local Rose', 'Pink', 45, true, 'Local Rose', 'flower'),
  ('sku-rose-white', 'Local Rose', 'White', 48, true, 'Local Rose', 'flower'),
  ('sku-lily-white', 'Lily', 'White', 55, true, 'Lily', 'flower'),
  ('sku-lily-pink', 'Lily', 'Pink', 55, true, 'Lily', 'flower'),
  ('sku-mum-yellow', 'Chrysanthemum', 'Yellow', 22, true, 'Chrysanthemum', 'flower'),
  ('sku-mum-white', 'Chrysanthemum', 'White', 22, true, 'Chrysanthemum', 'flower'),
  ('sku-carnation-red', 'Carnation', 'Red', 18, true, 'Carnation', 'flower'),
  ('sku-carnation-pink', 'Carnation', 'Pink', 18, true, 'Carnation', 'flower'),
  ('sku-gypsophila-white', 'Baby''s Breath', 'White', 25, true, 'Baby''s Breath', 'flower'),
  ('sku-statice-purple', 'Statice', 'Purple', 15, true, 'Statice', 'flower'),
  ('sku-wrapper-kraft', 'Kraft Wrapper', 'Kraft', 12, true, 'Wrappers', 'misc'),
  ('sku-wrapper-korean', 'Korean Wrapper', 'Pink', 18, true, 'Wrappers', 'misc'),
  ('sku-ribbon-red', 'Satin Ribbon', 'Red', 8, true, 'Wrappers', 'misc'),
  ('sku-tissue-white', 'Tissue', 'White', 5, true, 'Wrappers', 'misc'),
  ('sku-choc-ferrero', 'Ferrero', 'Mixed', 35, true, 'Gift items', 'misc')
on conflict (id) do update set
  name = excluded.name,
  color = excluded.color,
  unit_cost = excluded.unit_cost,
  is_active = excluded.is_active,
  flower_type = excluded.flower_type,
  product_kind = excluded.product_kind;

-- North Plaza (hub)
insert into public.flower_inventory_stock (branch_id, product_id, on_hand, updated_at) values
  ('branch-north', 'sku-rose-red', 120, now()),
  ('branch-north', 'sku-rose-pink', 80, now()),
  ('branch-north', 'sku-rose-white', 70, now()),
  ('branch-north', 'sku-lily-white', 50, now()),
  ('branch-north', 'sku-lily-pink', 40, now()),
  ('branch-north', 'sku-mum-yellow', 160, now()),
  ('branch-north', 'sku-mum-white', 140, now()),
  ('branch-north', 'sku-carnation-red', 100, now()),
  ('branch-north', 'sku-carnation-pink', 90, now()),
  ('branch-north', 'sku-gypsophila-white', 90, now()),
  ('branch-north', 'sku-statice-purple', 70, now()),
  ('branch-north', 'sku-wrapper-kraft', 80, now()),
  ('branch-north', 'sku-wrapper-korean', 45, now()),
  ('branch-north', 'sku-ribbon-red', 60, now()),
  ('branch-north', 'sku-tissue-white', 120, now()),
  ('branch-north', 'sku-choc-ferrero', 36, now())
on conflict (branch_id, product_id) do update set on_hand = excluded.on_hand, updated_at = excluded.updated_at;

-- Midtown
insert into public.flower_inventory_stock (branch_id, product_id, on_hand, updated_at) values
  ('branch-midtown', 'sku-rose-red', 90, now()),
  ('branch-midtown', 'sku-rose-pink', 70, now()),
  ('branch-midtown', 'sku-rose-white', 45, now()),
  ('branch-midtown', 'sku-lily-white', 40, now()),
  ('branch-midtown', 'sku-lily-pink', 35, now()),
  ('branch-midtown', 'sku-mum-yellow', 110, now()),
  ('branch-midtown', 'sku-mum-white', 95, now()),
  ('branch-midtown', 'sku-carnation-red', 80, now()),
  ('branch-midtown', 'sku-carnation-pink', 75, now()),
  ('branch-midtown', 'sku-gypsophila-white', 75, now()),
  ('branch-midtown', 'sku-statice-purple', 60, now()),
  ('branch-midtown', 'sku-wrapper-kraft', 55, now()),
  ('branch-midtown', 'sku-wrapper-korean', 30, now()),
  ('branch-midtown', 'sku-ribbon-red', 40, now()),
  ('branch-midtown', 'sku-tissue-white', 80, now()),
  ('branch-midtown', 'sku-choc-ferrero', 24, now())
on conflict (branch_id, product_id) do update set on_hand = excluded.on_hand, updated_at = excluded.updated_at;

-- South Market
insert into public.flower_inventory_stock (branch_id, product_id, on_hand, updated_at) values
  ('branch-south', 'sku-rose-red', 100, now()),
  ('branch-south', 'sku-rose-pink', 65, now()),
  ('branch-south', 'sku-rose-white', 50, now()),
  ('branch-south', 'sku-lily-white', 35, now()),
  ('branch-south', 'sku-lily-pink', 30, now()),
  ('branch-south', 'sku-mum-yellow', 150, now()),
  ('branch-south', 'sku-mum-white', 130, now()),
  ('branch-south', 'sku-carnation-red', 85, now()),
  ('branch-south', 'sku-carnation-pink', 70, now()),
  ('branch-south', 'sku-gypsophila-white', 80, now()),
  ('branch-south', 'sku-statice-purple', 55, now()),
  ('branch-south', 'sku-wrapper-kraft', 50, now()),
  ('branch-south', 'sku-wrapper-korean', 25, now()),
  ('branch-south', 'sku-ribbon-red', 35, now()),
  ('branch-south', 'sku-tissue-white', 90, now()),
  ('branch-south', 'sku-choc-ferrero', 18, now())
on conflict (branch_id, product_id) do update set on_hand = excluded.on_hand, updated_at = excluded.updated_at;
