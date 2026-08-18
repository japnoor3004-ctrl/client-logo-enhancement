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
CREATE POLICY "companies public read" ON public.companies FOR SELECT USING (published = true OR public.is_staff(auth.uid()));
CREATE POLICY "companies staff write" ON public.companies FOR ALL TO authenticated USING (public.is_staff(auth.uid())) WITH CHECK (public.is_staff(auth.uid()));
CREATE TRIGGER touch_companies BEFORE UPDATE ON public.companies FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
CREATE INDEX idx_companies_published ON public.companies(published, sort_order);

ALTER TABLE public.projects ADD COLUMN company_code text;
CREATE INDEX idx_projects_company ON public.projects(company_code);

INSERT INTO public.companies (slug, code, name_en, name_ar, tag_en, tag_ar, description_en, description_ar, sort_order, published) VALUES
('tipco','TIPCO','Towell Infrastructure Projects Co. L.L.C','شركة توال لمشاريع البنية التحتية ش.م.م','Excellent Grade EPC','هندسة ومشتريات وبناء من الدرجة الممتازة','Flagship EPC company delivering water, roads, reservoirs and infrastructure projects across the Sultanate of Oman.','الشركة الرائدة في مجال الهندسة والمشتريات والبناء، تقدم مشاريع المياه والطرق والخزانات والبنية التحتية في جميع أنحاء سلطنة عمان.',10,true),
('tesco','TESCO','Towell Engineering Services Co. L.L.C','شركة توال للخدمات الهندسية ش.م.م','Oil, Gas & Power','النفط والغاز والطاقة','EPC, construction and engineered products for oil & gas, refinery, petrochemical and power industries.','الهندسة والمشتريات والبناء والمنتجات الهندسية لصناعات النفط والغاز والتكرير والبتروكيماويات والطاقة.',20,true),
('unisco','UNISCO','United Industrial Services Co. L.L.C','شركة الخدمات الصناعية المتحدة ش.م.م','Steel Fabrication','تصنيع الصلب','The largest steel fabrication company in the Sultanate of Oman — structural steel, pipe spools and cladding.','أكبر شركة تصنيع صلب في سلطنة عمان — صلب إنشائي وأنابيب مجمعة وكساء.',30,true),
('telco','TELCO','Towell Electrical Projects Co. L.L.C','شركة توال للمشاريع الكهربائية ش.م.م','Electrical & Instrumentation','كهرباء وأجهزة','Electrical and instrumentation contracting for the electrical sector, oil & gas, government and industrial clients.','مقاولات الكهرباء والأجهزة لعملاء القطاع الكهربائي والنفط والغاز والحكومة والصناعة.',40,true),
('tcc','TCC','Towell Construction & Co. L.L.C','شركة توال للمقاولات ش.م.م','Civil & Electro-mechanical','أعمال مدنية وكهروميكانيكية','Excellent grade civil and electro-mechanical contractor for industrial buildings, warehouses and factories.','مقاولات مدنية وكهروميكانيكية من الدرجة الممتازة للمباني الصناعية والمستودعات والمصانع.',50,true),
('teil','TEIL','Towell Engineering International L.L.P','توال للهندسة الدولية','India Operations','العمليات في الهند','Indapur MIDC (Pune) fabrication facility serving steel, oil & gas and infrastructure clients across India.','منشأة التصنيع في إندابور MIDC (بونه) لخدمة عملاء الصلب والنفط والغاز والبنية التحتية في الهند.',60,true),
('tdos','TDOS','Towell Drilling & Oilfield Services Co. L.L.C','شركة توال للحفر والخدمات النفطية ش.م.م','Drilling & Oilfield','حفر وخدمات نفطية','Hydraulic top-drive rigs for top-hole and CBM drilling in Oman and India.','أجهزة حفر هيدروليكية ذات محرك علوي للحفر العلوي وغاز الميثان في عمان والهند.',70,true),
('two','TWO','Taylor Woodrow Oman','تايلور وودرو عمان','Large Civil & Building','أعمال مدنية وإنشائية كبرى','One of the oldest Excellent grade construction companies in Oman — part of the Towell Group since 1973.','واحدة من أقدم شركات المقاولات من الدرجة الممتازة في عمان — جزء من مجموعة توال منذ عام 1973.',80,true),
('teg-kuwait','KUWAIT','Towell Engineering Group — Kuwait','مجموعة توال للهندسة — الكويت','Regional Operation','عمل إقليمي','The group Kuwait operation, extending project delivery capability across the northern GCC.','مكتب المجموعة في الكويت، لتوسيع قدرة تسليم المشاريع عبر شمال دول مجلس التعاون الخليجي.',90,true),
('teg-qatar','QATAR','Towell Engineering Group — Qatar','مجموعة توال للهندسة — قطر','Regional Operation','عمل إقليمي','The group Qatar operation, supporting energy, industrial and infrastructure clients in the State of Qatar.','مكتب المجموعة في قطر، لدعم عملاء الطاقة والصناعة والبنية التحتية في دولة قطر.',100,true),
('teg-abu-dhabi','ABU DHABI','Towell Engineering Group — Abu Dhabi','مجموعة توال للهندسة — أبو ظبي','Regional Operation','عمل إقليمي','The group Abu Dhabi operation, serving oil & gas, industrial and infrastructure clients in the UAE.','مكتب المجموعة في أبو ظبي، لخدمة عملاء النفط والغاز والصناعة والبنية التحتية في الإمارات.',110,true);

INSERT INTO public.companies (
  slug, code, name_en, name_ar, tag_en, tag_ar, description_en, description_ar,
  overview_en, overview_ar, vision_en, vision_ar, mission_en, mission_ar,
  technology_en, technology_ar, products_en, products_ar, applications_en, applications_ar,
  leadership_en, leadership_ar, cta_en, cta_ar,
  seo_title, seo_description, keywords, featured, published, sort_order
) VALUES (
  'nxtlevvel-biochem','NXTLEVVEL BIOCHEM',
  'NXTLEVVEL BIOCHEM','نكست ليفل بيوكيم',
  'Biochemicals & Green Chemistry','الكيماويات الحيوية والكيمياء الخضراء',
  'The biochemicals arm of Towell Engineering Group — bio-based chemistry and sustainable process solutions for industry.',
  'الذراع الكيميائية الحيوية لمجموعة توال للهندسة — كيمياء قائمة على المصادر الحيوية وحلول عمليات مستدامة للصناعة.',
  'NXTLEVVEL BIOCHEM extends the Towell Engineering Group into bio-based chemistry, developing and supplying sustainable chemical solutions for energy, industrial and infrastructure clients. The company combines process engineering discipline from across the group with modern biochemical know-how.',
  'تعمل نكست ليفل بيوكيم على توسيع نشاط مجموعة توال للهندسة في مجال الكيمياء القائمة على المصادر الحيوية، من خلال تطوير وتوريد حلول كيميائية مستدامة لعملاء الطاقة والصناعة والبنية التحتية. وتجمع الشركة بين خبرة هندسة العمليات في المجموعة والمعرفة الحيوية الحديثة.',
  'To be the region''s reference partner for bio-based chemistry that replaces fossil-derived inputs without compromising performance.',
  'أن نكون الشريك المرجعي في المنطقة للكيمياء القائمة على المصادر الحيوية التي تحل محل المواد الأحفورية دون المساس بالأداء.',
  'To deliver safe, high-performance biochemical products and process solutions, engineered to the same quality, safety and delivery standards as every Towell Engineering Group company.',
  'تقديم منتجات وحلول كيميائية حيوية آمنة وعالية الأداء، مصممة وفق نفس معايير الجودة والسلامة والتسليم المتبعة في جميع شركات مجموعة توال للهندسة.',
  'Bio-based feedstock processing, catalysis and formulation, supported by laboratory testing, quality control and process scale-up expertise.',
  'معالجة المواد الأولية الحيوية والحفز والتركيب، مدعومة بالاختبارات المعملية ومراقبة الجودة وخبرة توسيع نطاق العمليات.',
  ARRAY['Bio-based solvents','Specialty biochemicals','Process and performance additives','Custom formulations'],
  ARRAY['مذيبات حيوية','كيماويات حيوية متخصصة','إضافات العمليات والأداء','تركيبات مخصصة'],
  ARRAY['Oil & gas','Water treatment','Industrial cleaning','Coatings and construction chemicals'],
  ARRAY['النفط والغاز','معالجة المياه','التنظيف الصناعي','الطلاءات وكيماويات البناء'],
  'To be confirmed | Leadership profiles [Client Content Required]',
  'سيتم التأكيد | نبذة عن القيادة [مطلوب محتوى من العميل]',
  'Talk to our biochemicals team about your process requirements.',
  'تحدث إلى فريق الكيماويات الحيوية لدينا حول متطلبات عملياتك.',
  'NXTLEVVEL BIOCHEM — Biochemicals | Towell Engineering Group',
  'NXTLEVVEL BIOCHEM is the biochemicals company of Towell Engineering Group, delivering bio-based chemistry and sustainable process solutions.',
  'NXTLEVVEL BIOCHEM, biochemicals Oman, bio-based chemicals, green chemistry, Towell Engineering Group',
  true, true, 120
);
