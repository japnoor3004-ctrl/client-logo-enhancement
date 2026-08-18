import { createServerFn } from "@tanstack/react-start";
import { publicClient, resolveMedia } from "./media.server";

export type CompanyRow = {
  id: string;
  slug: string;
  code: string;
  name_en: string;
  name_ar: string | null;
  tag_en: string | null;
  tag_ar: string | null;
  description_en: string | null;
  description_ar: string | null;
  logo_url: string | null;
  hero_image: string | null;
  gallery: string[];
  overview_en: string | null;
  overview_ar: string | null;
  vision_en: string | null;
  vision_ar: string | null;
  mission_en: string | null;
  mission_ar: string | null;
  technology_en: string | null;
  technology_ar: string | null;
  products_en: string[];
  products_ar: string[];
  applications_en: string[];
  applications_ar: string[];
  leadership_en: string | null;
  leadership_ar: string | null;
  contact_email: string | null;
  contact_phone: string | null;
  contact_address_en: string | null;
  contact_address_ar: string | null;
  cta_en: string | null;
  cta_ar: string | null;
  seo_title: string | null;
  seo_description: string | null;
  og_image: string | null;
  keywords: string | null;
  featured: boolean;
  published: boolean;
  sort_order: number;
  updated_at: string;
};

export type CompanyProject = {
  id: string;
  slug: string;
  name: string;
  client: string | null;
  location: string | null;
  industry: string | null;
  year: number | null;
  status: string | null;
  description: string | null;
  cover_image: string | null;
};

const MEDIA_FIELDS = ["logo_url", "hero_image", "og_image"] as const;

/** Every published company, ordered for navigation and listing pages. */
export const listCompanies = createServerFn({ method: "GET" }).handler(async () => {
  const { data } = await publicClient()
    .from("companies")
    .select("*")
    .eq("published", true)
    .order("sort_order", { ascending: true });
  const rows = (data ?? []) as unknown as CompanyRow[];
  return resolveMedia(rows, [...MEDIA_FIELDS], ["gallery"]);
});

/** One company plus the projects linked to it through `company_code`. */
export const getCompany = createServerFn({ method: "GET" })
  .validator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    const supabase = publicClient();
    const { data } = await supabase
      .from("companies")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .maybeSingle();
    if (!data) return null;
    const [company] = await resolveMedia(
      [data as unknown as CompanyRow],
      [...MEDIA_FIELDS],
      ["gallery"],
    );

    const { data: projectRows } = await supabase
      .from("projects")
      .select("id,slug,name,client,location,industry,year,status,description,cover_image")
      .eq("published", true)
      .eq("company_code", company.code)
      .order("featured", { ascending: false })
      .order("year", { ascending: false, nullsFirst: false })
      .limit(12);
    const projects = await resolveMedia((projectRows ?? []) as unknown as CompanyProject[], [
      "cover_image",
    ]);

    return { company, projects };
  });
