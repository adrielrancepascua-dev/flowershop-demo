-- Demo admin profile (create Auth user admin@demo.bloombranch.app first in Supabase Auth)

insert into public.flower_profiles (id, email, display_name, role)
select
  u.id,
  'admin@demo.bloombranch.app',
  'Demo Admin',
  'admin'
from auth.users u
where u.email = 'admin@demo.bloombranch.app'
on conflict (id) do update set
  email = excluded.email,
  display_name = excluded.display_name,
  role = excluded.role;
