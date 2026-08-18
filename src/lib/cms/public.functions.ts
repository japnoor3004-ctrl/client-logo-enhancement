import { createServerFn } from "@tanstack/react-start";
import { publicClient, resolveMedia } from "./media.server";

const PAGE = 12;

export type ListArgs = {
  page?: number;
  perPage?: number;
  search?: string;
  industry?: string;
  location?: string;
  category?: string;
  status?: string;
  kind?: string;
  company?: string;
  year?: string | number;
};

function range(page = 1, perPage = PAGE) {
  const from = (page - 1) * perPage;
  return { from, to: from + perPage - 1 };
}

/* ----------------------------- Projects ----------------------------- */

export const listProjects = createServerFn({ method: "GET" })
  .validator((input: ListArgs = {}) => input ?? {})
  .handler(async ({ data }) => {
    const { from, to } = range(data.page, data.perPage);
    let q = publicClient()
      .from("projects")
      .select("*", { count: "exact" })
      .eq("published", true)
      .order("featured", { ascending: false })
      .order("sort_order", { ascending: true })
      .order("year", { ascending: false, nullsFirst: false });

    if (data.search) q = q.or(`name.ilike.%${data.search}%,client.ilike.%${data.search}%`);
    if (data.industry) q = q.eq("industry", data.industry);
    if (data.location) q = q.eq("location", data.location);
    if (data.status) q = q.eq("status", data.status);
    if (data.company) q = q.eq("company_code", data.company);
    const y = (data as ListArgs & { year?: string | number }).year;
    if (y !== undefined && y !== "") q = q.eq("year", Number(y));

    const { data: rows, count } = await q.range(from, to);
    const items = await resolveMedia(rows ?? [], ["cover_image"], ["images"]);
    return { items, count: count ?? 0 };
  });

export const getProjectFilters = createServerFn({ method: "GET" }).handler(async () => {
  const { data } = await publicClient()
    .from("projects")
    .select("industry, location, year, company_code")
    .eq("published", true);
  const rows = (data ?? []) as Array<{
    industry: string | null;
    location: string | null;
    year: number | null;
    company_code: string | null;
  }>;
  const uniqStr = (v: (string | null)[]) =>
    Array.from(new Set(v.filter((x): x is string => !!x))).sort();
  const uniqNum = (v: (number | null)[]) =>
    Array.from(new Set(v.filter((x): x is number => x !== null))).sort((a, b) => b - a);
  return {
    industries: uniqStr(rows.map((r) => r.industry)),
    locations: uniqStr(rows.map((r) => r.location)),
    companies: uniqStr(rows.map((r) => r.company_code)),
    years: uniqNum(rows.map((r) => r.year)),
  };
});

export const getProject = createServerFn({ method: "GET" })
  .validator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    const { data } = await publicClient()
      .from("projects")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .maybeSingle();
    if (!data) return null;
    const [row] = await resolveMedia([data], ["cover_image", "brochure_url"], ["images"]);
    return row;
  });

/* ------------------------------- News ------------------------------- */

export const listNews = createServerFn({ method: "GET" })
  .validator((input: ListArgs = {}) => input ?? {})
  .handler(async ({ data }) => {
    const { from, to } = range(data.page, data.perPage);
    let q = publicClient()
      .from("news")
      .select("*", { count: "exact" })
      .eq("published", true)
      .order("published_at", { ascending: false });
    if (data.search) q = q.ilike("title", `%${data.search}%`);
    if (data.category) q = q.eq("category", data.category);
    const { data: rows, count } = await q.range(from, to);
    return { items: await resolveMedia(rows ?? [], ["cover_image"]), count: count ?? 0 };
  });

export const getNewsItem = createServerFn({ method: "GET" })
  .validator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    const { data } = await publicClient()
      .from("news")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .maybeSingle();
    if (!data) return null;
    const [row] = await resolveMedia([data], ["cover_image"]);
    return row;
  });

/* ------------------------------- Jobs ------------------------------- */

export const listJobs = createServerFn({ method: "GET" })
  .validator((input: ListArgs = {}) => input ?? {})
  .handler(async ({ data }) => {
    let q = publicClient()
      .from("jobs")
      .select("*")
      .eq("published", true)
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false });
    if (data.search) q = q.ilike("position", `%${data.search}%`);
    if (data.category) q = q.eq("department", data.category);
    if (data.location) q = q.eq("location", data.location);
    const { data: rows } = await q;
    return rows ?? [];
  });

export const getJob = createServerFn({ method: "GET" })
  .validator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    const { data } = await publicClient()
      .from("jobs")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .maybeSingle();
    return data;
  });

/* -------------------------- Products / services --------------------- */

export const listProducts = createServerFn({ method: "GET" })
  .validator((input: ListArgs = {}) => input ?? {})
  .handler(async ({ data }) => {
    let q = publicClient()
      .from("products")
      .select("*")
      .eq("published", true)
      .order("featured", { ascending: false })
      .order("sort_order", { ascending: true });
    if (data.kind) q = q.eq("kind", data.kind);
    if (data.category) q = q.eq("category", data.category);
    if (data.search) q = q.ilike("name", `%${data.search}%`);
    const { data: rows } = await q;
    return resolveMedia(rows ?? [], ["cover_image", "datasheet_url", "brochure_url"], ["images"]);
  });

/* --------------------------- Certificates --------------------------- */

export const listCertificates = createServerFn({ method: "GET" }).handler(async () => {
  const { data } = await publicClient()
    .from("certificates")
    .select("*")
    .eq("published", true)
    .order("sort_order", { ascending: true })
    .order("issue_date", { ascending: false, nullsFirst: false });
  return resolveMedia(data ?? [], ["preview_image", "pdf_url"]);
});

/* ------------------------------ Gallery ----------------------------- */

export const listGallery = createServerFn({ method: "GET" }).handler(async () => {
  const supabase = publicClient();
  const [{ data: albums }, { data: items }] = await Promise.all([
    supabase
      .from("gallery_albums")
      .select("*")
      .eq("published", true)
      .order("sort_order", { ascending: true }),
    supabase
      .from("gallery_items")
      .select("*")
      .eq("published", true)
      .order("sort_order", { ascending: true }),
  ]);
  return {
    albums: await resolveMedia(albums ?? [], ["cover_image"]),
    items: await resolveMedia(items ?? [], ["url"]),
  };
});

/* ----------------------------- Downloads ---------------------------- */

export const listDownloads = createServerFn({ method: "GET" }).handler(async () => {
  const { data } = await publicClient()
    .from("downloads")
    .select("*")
    .eq("published", true)
    .order("category", { ascending: true })
    .order("sort_order", { ascending: true });
  return resolveMedia(data ?? [], ["file_url"]);
});

/* ------------------------------- Home ------------------------------- */

export const getHomeData = createServerFn({ method: "GET" }).handler(async () => {
  const supabase = publicClient();
  const [{ data: stats }, { data: logos }, { data: projects }] = await Promise.all([
    supabase
      .from("site_stats")
      .select("*")
      .eq("published", true)
      .order("sort_order", { ascending: true }),
    supabase
      .from("client_logos")
      .select("*")
      .eq("published", true)
      .order("sort_order", { ascending: true }),
    supabase
      .from("projects")
      .select("*")
      .eq("published", true)
      .eq("featured", true)
      .order("sort_order", { ascending: true })
      .limit(6),
  ]);
  return {
    stats: stats ?? [],
    logos: await resolveMedia(logos ?? [], ["logo_url"]),
    featuredProjects: await resolveMedia(projects ?? [], ["cover_image"]),
  };
});

/* ------------------------------ Search ------------------------------ */

export const globalSearch = createServerFn({ method: "GET" })
  .validator((term: string) => (term ?? "").slice(0, 80))
  .handler(async ({ data: term }) => {
    const q = term.trim();
    if (q.length < 2)
      return [] as {
        type: string;
        title: string;
        subtitle: string;
        to: string;
        code: string | null;
      }[];
    const supabase = publicClient();
    const like = `%${q}%`;
    const [projects, products, news, jobs, companies] = await Promise.all([
      supabase
        .from("projects")
        .select("slug,name,client")
        .eq("published", true)
        .ilike("name", like)
        .limit(5),
      supabase
        .from("products")
        .select("slug,name,category,kind")
        .eq("published", true)
        .ilike("name", like)
        .limit(5),
      supabase
        .from("news")
        .select("slug,title,category")
        .eq("published", true)
        .ilike("title", like)
        .limit(5),
      supabase
        .from("jobs")
        .select("slug,position,department")
        .eq("published", true)
        .ilike("position", like)
        .limit(5),
      supabase
        .from("companies")
        .select("slug,code,name_en,tag_en")
        .eq("published", true)
        .or(`name_en.ilike.${like},code.ilike.${like}`)
        .limit(5),
    ]);
    return [
      ...(projects.data ?? []).map((r) => ({
        type: "Project",
        title: r.name,
        subtitle: r.client ?? "",
        to: `/projects/${r.slug}`,
        code: null as string | null,
      })),
      ...(products.data ?? []).map((r) => ({
        type: r.kind === "service" ? "Service" : "Product",
        title: r.name,
        subtitle: r.category ?? "",
        to: `/products-services?q=${encodeURIComponent(r.name)}`,
        code: null as string | null,
      })),
      ...(news.data ?? []).map((r) => ({
        type: "News",
        title: r.title,
        subtitle: r.category ?? "",
        to: `/media/${r.slug}`,
        code: null as string | null,
      })),
      ...(companies.data ?? []).map((r) => ({
        type: "Company",
        title: r.name_en,
        subtitle: r.tag_en ?? "",
        to: `/${r.slug}`,
        code: (r.code ?? null) as string | null,
      })),
      ...(jobs.data ?? []).map((r) => ({
        type: "Career",
        title: r.position,
        subtitle: r.department ?? "",
        to: `/careers/${r.slug}`,
        code: null as string | null,
      })),
    ];
  });

/* -------------------------------- SEO ------------------------------- */

export const getSeo = createServerFn({ method: "GET" })
  .validator((route: string) => route)
  .handler(async ({ data: route }) => {
    const { data } = await publicClient()
      .from("seo_settings")
      .select("*")
      .eq("route", route)
      .maybeSingle();
    return data;
  });
