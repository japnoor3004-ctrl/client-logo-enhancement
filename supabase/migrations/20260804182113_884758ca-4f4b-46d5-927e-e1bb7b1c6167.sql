DO $$
DECLARE t text;
BEGIN
  FOREACH t IN ARRAY ARRAY['companies','projects','news','jobs','products','certificates','gallery','downloads','client_logos','site_stats','seo_settings'] LOOP
    IF to_regclass('public.'||t) IS NOT NULL THEN
      EXECUTE format('GRANT SELECT ON public.%I TO anon', t);
      EXECUTE format('GRANT SELECT, INSERT, UPDATE, DELETE ON public.%I TO authenticated', t);
      EXECUTE format('GRANT ALL ON public.%I TO service_role', t);
    END IF;
  END LOOP;

  IF to_regclass('public.contact_enquiries') IS NOT NULL THEN
    GRANT INSERT ON public.contact_enquiries TO anon;
    GRANT SELECT, INSERT, UPDATE, DELETE ON public.contact_enquiries TO authenticated;
    GRANT ALL ON public.contact_enquiries TO service_role;
  END IF;

  IF to_regclass('public.profiles') IS NOT NULL THEN
    GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
    GRANT ALL ON public.profiles TO service_role;
  END IF;

  IF to_regclass('public.user_roles') IS NOT NULL THEN
    GRANT SELECT ON public.user_roles TO authenticated;
    GRANT ALL ON public.user_roles TO service_role;
  END IF;
END $$;