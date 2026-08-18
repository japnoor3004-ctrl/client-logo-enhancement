import { useLang } from "@/contexts/language";
import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CompanyLogo } from "@/components/site/CompanyLogo";
import { globalSearch } from "@/lib/cms/public.functions";

export const Route = createFileRoute("/search")({
  validateSearch: (search: Record<string, unknown>) => ({
    q: typeof search.q === "string" ? search.q : "",
  }),
  head: () => ({
    meta: [
      { title: "Search | Towell Engineering Group" },
      {
        name: "description",
        content:
          "Search projects, products, services, news and career opportunities across Towell Engineering Group.",
      },
      { property: "og:title", content: "Search | Towell Engineering Group" },
      {
        property: "og:description",
        content: "Find projects, products, services, news and vacancies.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { isArabic } = useLang();
  const { q } = useSearch({ from: "/search" });
  const [term, setTerm] = useState(q);
  const results = useQuery({
    queryKey: ["search", term],
    queryFn: () => globalSearch({ data: term }),
    enabled: term.trim().length >= 2,
  });

  return (
    <>
      <PageHero
        eyebrow={isArabic ? "بحث" : "Search"}
        title={isArabic ? "ابحث عن ما تحتاج" : "Find what you need"}
        description={
          isArabic
            ? "ابحث في المشاريع والمنتجات والخدمات والأخبار والفرص الوظيفية."
            : "Search across projects, products and services, news and career opportunities."
        }
      />
      <section className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <div className="relative">
          <SearchIcon className="absolute top-3.5 left-4 size-4 text-muted-foreground" />
          <input
            autoFocus
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder={isArabic ? "ابحث في الموقع…" : "Search the website…"}
            className="w-full rounded-md border border-input bg-background py-3 pr-4 pl-11 text-sm outline-none focus:border-primary"
          />
        </div>
        {term.trim().length >= 2 && (
          <div className="mt-8">
            {results.isLoading && (
              <p className="text-sm text-muted-foreground">
                {isArabic ? "جارٍ البحث…" : "Searching…"}
              </p>
            )}
            {results.data?.length === 0 && (
              <p className="text-sm text-muted-foreground">
                {isArabic ? `لا توجد نتائج لـ "${term}".` : `No matches for "${term}".`}
              </p>
            )}
            <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card shadow-soft">
              {(results.data ?? []).map((r) => (
                <li key={`${r.type}-${r.to}-${r.title}`}>
                  <Link to={r.to} className="flex items-center gap-4 p-4 hover:bg-secondary/40">
                    {r.code ? (
                      <CompanyLogo code={r.code} size={36} rounded="rounded-lg" />
                    ) : (
                      <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                        {r.type}
                      </span>
                    )}
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-semibold">{r.title}</span>
                      {r.subtitle && (
                        <span className="block truncate text-sm text-muted-foreground">
                          {r.subtitle}
                        </span>
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
}
