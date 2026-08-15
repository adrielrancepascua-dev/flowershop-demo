-- Demo admin profile (create Auth user admin@demo.plazaretail.app first in Supabase Auth)

insert into public.flower_profiles (id, email, display_name, role)
select
  u.id,
  'admin@demo.plazaretail.app',
  'Demo Admin',
  'admin'
from auth.users u
where u.email = 'admin@demo.plazaretail.app'
on conflict (id) do update set
  email = excluded.email,
  display_name = excluded.display_name,
  role = excluded.role;
