import { useLang } from "@/contexts/language";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { listNews } from "@/lib/cms/public.functions";
import { PageHero } from "@/components/site/PageHero";
import { MediaTabs } from "@/components/site/MediaTabs";
import LettersSection from "@/components/site/LettersSection";

import { Newspaper, Calendar, ArrowRight, Search } from "lucide-react";

const PER_PAGE = 9;

export const Route = createFileRoute("/media/")({
  head: () => ({
    meta: [
      { title: "News & Media | Towell Engineering Group" },
      {
        name: "description",
        content:
          "Announcements, project milestones and press updates from Towell Engineering Group across Oman, the GCC and India.",
      },
      { property: "og:title", content: "News & Media | Towell Engineering Group" },
      {
        property: "og:description",
        content: "The latest news, milestones and press updates from Towell Engineering Group.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/media" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/media" }],
  }),
  component: MediaPage,
});

function formatDate(iso?: string | null) {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function MediaPage() {
  const { isArabic } = useLang();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const news = useQuery({
    queryKey: ["news", page],
    queryFn: () => listNews({ data: { page, perPage: PER_PAGE } }),
    placeholderData: { items: [], count: 0 },
    staleTime: 60_000,
  });
  const items = useMemo(() => news.data?.items ?? [], [news.data]);
  const categories = useMemo(() => {
    const set = new Set<string>();
    items.forEach((a) => a.category && set.add(a.category));
    return Array.from(set).sort();
  }, [items]);
  const filtered = useMemo(
    () =>
      items.filter((a) => {
        if (category !== "all" && a.category !== category) return false;
        if (search && !a.title.toLowerCase().includes(search.toLowerCase())) return false;
        return true;
      }),
    [items, category, search],
  );
  const [featured, ...rest] = filtered;
  const total = news.data?.count ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));

  return (
    <>
      <PageHero
        eyebrow={isArabic ? "الأخبار والإعلام" : "News & Media"}
        title={isArabic ? "أخبار وإنجازات وصحافة" : "News, milestones & press"}
        description={
          isArabic
            ? "إعلانات وإنجازات المشاريع والتحديثات الصحفية من مجموعة تويل للهندسة."
            : "Announcements, project milestones and press updates from Towell Engineering Group."
        }
      />
      <MediaTabs />

      <section className="mx-auto max-w-[1600px] px-5 py-14 md:py-20">
        {items.length > 0 && (
        <div className="grid gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft md:grid-cols-[1fr_220px]">
          <label className="relative">
            <span className="sr-only">{isArabic ? "ابحث في الأخبار" : "Search news"}</span>
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={
                isArabic ? "ابحث في الأخبار والإعلانات" : "Search news and announcements"
              }
              className="h-11 w-full rounded-lg border border-border bg-background pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none"
            />
          </label>
          <label>
            <span className="sr-only">{isArabic ? "تصفية حسب الفئة" : "Filter by category"}</span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm"
            >
              <option value="all">{isArabic ? "جميع الفئات" : "All categories"}</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
        </div>
        )}

        {filtered.length === 0 && items.length > 0 && (
          <div className="mt-10 rounded-2xl border border-dashed border-border bg-card p-14 text-center shadow-soft">
            <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent/15 text-accent-strong">
              <Newspaper className="size-6" />
            </span>
            <h2 className="mt-5 font-display text-xl font-bold text-primary">
              {isArabic ? "لا توجد مقالات مطابقة" : "No matching articles"}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              {isArabic ? "جرب مصطلح بحث أو فئة مختلفة." : "Try a different search term or category."}
            </p>
          </div>
        )}


        {filtered.length > 0 && (
          <>
            {featured && (
              <Link
                to="/media/$slug"
                params={{ slug: featured.slug }}
                className="group mt-10 grid overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lift md:grid-cols-2"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-auto">
                  {featured.cover_image ? (
                    <img
                      src={featured.cover_image}
                      alt=""
                      loading="eager"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="size-full bg-[image:var(--gradient-primary)]" />
                  )}
                  <span className="absolute top-4 left-4 rounded-full bg-accent px-3 py-1 text-[11px] font-bold tracking-wider text-accent-foreground uppercase shadow-soft">
                    {isArabic ? "مميز" : "Featured"}
                  </span>
                </div>
                <div className="flex flex-col justify-center gap-4 p-7 md:p-10">
                  <p className="eyebrow text-accent-strong">
                    {featured.category ?? (isArabic ? "أخبار" : "News")}
                  </p>
                  <h2 className="font-display text-2xl leading-tight font-bold text-primary md:text-3xl">
                    {featured.title}
                  </h2>
                  {featured.excerpt && (
                    <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {featured.excerpt}
                    </p>
                  )}
                  <div className="mt-2 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="size-3.5" />
                      {formatDate(featured.published_at) ?? (isArabic ? "حديث" : "Recent")}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-accent-strong">
                      {isArabic ? "اقرأ القصة" : "Read story"}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            )}
            {rest.length > 0 && (
              <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((article) => (
                  <li key={article.id}>
                    <Link
                      to="/media/$slug"
                      params={{ slug: article.slug }}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lift"
                    >
                      <div className="aspect-[16/10] w-full overflow-hidden bg-secondary">
                        {article.cover_image ? (
                          <img
                            src={article.cover_image}
                            alt=""
                            loading="lazy"
                            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="size-full bg-[image:var(--gradient-primary)]" />
                        )}
                      </div>
                      <div className="flex flex-1 flex-col gap-3 p-5">
                        <p className="eyebrow text-accent-strong">
                          {article.category ?? (isArabic ? "أخبار" : "News")}
                        </p>
                        <h3 className="font-display text-lg leading-snug font-bold text-primary">
                          {article.title}
                        </h3>
                        {article.excerpt && (
                          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                            {article.excerpt}
                          </p>
                        )}
                        <div className="mt-auto flex items-center justify-between pt-2">
                          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Calendar className="size-3.5" />
                            {formatDate(article.published_at) ?? (isArabic ? "حديث" : "Recent")}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-accent-strong">
                            {isArabic ? "قراءة" : "Read"}
                            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}

        {total > PER_PAGE && (
          <div className="mt-12 flex items-center justify-center gap-3 text-sm">
            <button
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="rounded-lg border border-border bg-card px-4 py-2 font-medium shadow-soft transition-colors hover:border-accent disabled:opacity-40"
            >
              {isArabic ? "السابق" : "Previous"}
            </button>
            <span className="text-muted-foreground">
              {isArabic ? "صفحة" : "Page"} {page} {isArabic ? "من" : "of"} {totalPages}
            </span>
            <button
              disabled={page >= totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="rounded-lg border border-border bg-card px-4 py-2 font-medium shadow-soft transition-colors hover:border-accent disabled:opacity-40"
            >
              {isArabic ? "التالي" : "Next"}
            </button>
          </div>
        )}
      </section>

      <LettersSection />
    </>
  );
}

