REVOKE EXECUTE ON FUNCTION public.is_staff(uuid) FROM anon;

DROP POLICY "companies public read" ON public.companies;
CREATE POLICY "companies anon read published" ON public.companies FOR SELECT TO anon USING (published = true);
CREATE POLICY "companies auth read" ON public.companies FOR SELECT TO authenticated USING (published = true OR public.is_staff(auth.uid()));