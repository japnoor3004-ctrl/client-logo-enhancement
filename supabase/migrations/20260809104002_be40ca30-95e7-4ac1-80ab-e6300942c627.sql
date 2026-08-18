DO $$
DECLARE t text;
BEGIN
  FOREACH t IN ARRAY ARRAY['projects','news','jobs','products','certificates','gallery_albums','gallery_items','downloads','client_logos','site_stats']
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS "%s public read" ON public.%I;', t, t);
    EXECUTE format('CREATE POLICY "%s anon read published" ON public.%I FOR SELECT TO anon USING (published = true);', t, t);
    EXECUTE format('CREATE POLICY "%s auth read" ON public.%I FOR SELECT TO authenticated USING (published = true OR public.is_staff(auth.uid()));', t, t);
  END LOOP;
END $$;

DROP POLICY IF EXISTS "seo_settings public read" ON public.seo_settings;
CREATE POLICY "seo_settings anon read" ON public.seo_settings FOR SELECT TO anon USING (true);
CREATE POLICY "seo_settings auth read" ON public.seo_settings FOR SELECT TO authenticated USING (true);

REVOKE EXECUTE ON FUNCTION public.is_staff(uuid) FROM anon;