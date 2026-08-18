CREATE TABLE public.companies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  code text NOT NULL UNIQUE,
  name_en text NOT NULL,
  name_ar text,
  tag_en text,
  tag_ar text,
  description_en text,
  description_ar text,
  logo_url text,
  hero_image text,
  gallery text[] NOT NULL DEFAULT '{}',
  overview_en text,
  overview_ar text,
  vision_en text,
  vision_ar text,
  mission_en text,
  mission_ar text,
  technology_en text,
  technology_ar text,
  products_en text[] NOT NULL DEFAULT '{}',
  products_ar text[] NOT NULL DEFAULT '{}',
  applications_en text[] NOT NULL DEFAULT '{}',
  applications_ar text[] NOT NULL DEFAULT '{}',
  leadership_en text,
  leadership_ar text,
  contact_email text,
  contact_phone text,
  contact_address_en text,
  contact_address_ar text,
  cta_en text,
  cta_ar text,
  seo_title text,
  seo_description text,
  og_image text,
  keywords text,
  featured boolean NOT NULL DEFAULT false,
  published boolean NOT NULL DEFAULT true,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.companies TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.companies TO authenticated;
GRANT ALL ON public.companies TO service_role;
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
CREATE POLICY "companies anon read published" ON public.companies FOR SELECT TO anon USING (published = true);
CREATE POLICY "companies auth read" ON public.companies FOR SELECT TO authenticated USING (published = true OR public.is_staff(auth.uid()));
CREATE POLICY "companies staff write" ON public.companies FOR ALL TO authenticated USING (public.is_staff(auth.uid())) WITH CHECK (public.is_staff(auth.uid()));
CREATE TRIGGER touch_companies BEFORE UPDATE ON public.companies FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
CREATE INDEX idx_companies_published ON public.companies(published, sort_order);

ALTER TABLE public.projects ADD COLUMN company_code text;
CREATE INDEX idx_projects_company ON public.projects(company_code);

GRANT EXECUTE ON FUNCTION public.is_staff(uuid) TO anon;