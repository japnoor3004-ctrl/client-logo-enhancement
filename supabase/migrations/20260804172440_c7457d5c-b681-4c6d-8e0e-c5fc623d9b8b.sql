CREATE POLICY "public read media" ON storage.objects FOR SELECT USING (bucket_id IN ('media','documents'));
CREATE POLICY "staff write media" ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id IN ('media','documents') AND public.is_staff(auth.uid()));
CREATE POLICY "staff update media" ON storage.objects FOR UPDATE TO authenticated
  USING (bucket_id IN ('media','documents') AND public.is_staff(auth.uid()));
CREATE POLICY "staff delete media" ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id IN ('media','documents') AND public.is_staff(auth.uid()));
CREATE POLICY "anyone upload cv" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'applications');
CREATE POLICY "staff read cv" ON storage.objects FOR SELECT TO authenticated
  USING (bucket_id = 'applications' AND public.is_staff(auth.uid()));
CREATE POLICY "staff delete cv" ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'applications' AND public.is_staff(auth.uid()));