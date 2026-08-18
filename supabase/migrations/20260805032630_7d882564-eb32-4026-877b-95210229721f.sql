CREATE TABLE public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text,
  email text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role);
$$;

CREATE OR REPLACE FUNCTION public.is_staff(_user_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id);
$$;

CREATE POLICY "profiles readable by staff" ON public.profiles FOR SELECT TO authenticated
  USING (id = auth.uid() OR public.is_staff(auth.uid()));
CREATE POLICY "profiles self update" ON public.profiles FOR UPDATE TO authenticated
  USING (id = auth.uid()) WITH CHECK (id = auth.uid());
CREATE POLICY "profiles self insert" ON public.profiles FOR INSERT TO authenticated
  WITH CHECK (id = auth.uid());
CREATE POLICY "roles readable by owner or staff" ON public.user_roles FOR SELECT TO authenticated
  USING (user_id = auth.uid() OR public.is_staff(auth.uid()));
CREATE POLICY "admins manage roles" ON public.user_roles FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name', NEW.email)
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END; $$;
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.is_staff(uuid) FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM anon, authenticated, public;
GRANT EXECUTE ON FUNCTION public.is_staff(uuid) TO sandbox_exec;

DROP POLICY IF EXISTS "public read media" ON storage.objects;
CREATE POLICY "public read media" ON storage.objects FOR SELECT USING (bucket_id IN ('media','documents'));
DROP POLICY IF EXISTS "staff write media" ON storage.objects;
CREATE POLICY "staff write media" ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id IN ('media','documents') AND public.is_staff(auth.uid()));
DROP POLICY IF EXISTS "staff update media" ON storage.objects;
CREATE POLICY "staff update media" ON storage.objects FOR UPDATE TO authenticated
  USING (bucket_id IN ('media','documents') AND public.is_staff(auth.uid()));
DROP POLICY IF EXISTS "staff delete media" ON storage.objects;
CREATE POLICY "staff delete media" ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id IN ('media','documents') AND public.is_staff(auth.uid()));
DROP POLICY IF EXISTS "anyone upload cv" ON storage.objects;
CREATE POLICY "anyone upload cv" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'applications');
DROP POLICY IF EXISTS "staff read cv" ON storage.objects;
CREATE POLICY "staff read cv" ON storage.objects FOR SELECT TO authenticated
  USING (bucket_id = 'applications' AND public.is_staff(auth.uid()));
DROP POLICY IF EXISTS "staff delete cv" ON storage.objects;
CREATE POLICY "staff delete cv" ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'applications' AND public.is_staff(auth.uid()));