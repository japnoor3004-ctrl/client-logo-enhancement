import { useLang } from "@/contexts/language";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Award, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { listCertificates } from "@/lib/cms/public.functions";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certifications & Accreditations | Towell Engineering Group" },
      {
        name: "description",
        content:
          "ISO certifications, accreditations and third-party approvals held by Towell Engineering Group companies.",
      },
      { property: "og:title", content: "Certifications | Towell Engineering Group" },
      {
        property: "og:description",
        content: "Quality, safety and environmental certifications held across the group.",
      },
    ],
  }),
  component: CertificatesPage,
});

function CertificatesPage() {
  const { isArabic } = useLang();
  const [category, setCategory] = useState("");
  const query = useQuery({
    queryKey: ["certificates"],
    queryFn: () => listCertificates(),
    placeholderData: [],
    staleTime: 60_000,
  });
  const items = (query.data ?? []).filter((c) => !category || c.category === category);
  const categories = Array.from(
    new Set((query.data ?? []).map((c) => c.category).filter(Boolean)),
  ) as string[];

  return (
    <>
      <PageHero
        eyebrow={isArabic ? "الشهادات" : "Certificates"}
        title={isArabic ? "معتمد وفق المعايير الدولية" : "Accredited to international standards"}
        description={
          isArabic
            ? "شهاداتنا تدعم التزامات الجودة والسلامة والبيئة التي نقدمها لكل عميل."
            : "Our certifications underpin the quality, safety and environmental commitments we make to every client."
        }
      />
      <section className="mx-auto max-w-[1600px] px-5 py-16 md:py-20">
        {categories.length > 1 && (
          <div className="mb-8 flex flex-wrap gap-2">
            <button
              onClick={() => setCategory("")}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium ${!category ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"}`}
            >
              {isArabic ? "الكل" : "All"}
            </button>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium ${category === c ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"}`}
              >
                {c}
              </button>
            ))}
          </div>
        )}
        {query.isLoading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-64 animate-pulse rounded-xl bg-secondary" />
            ))}
          </div>
        ) : items.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            {isArabic
              ? "سيتم نشر الشهادات هنا قريباً."
              : "Certificates will be published here soon."}
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((c) => (
              <article
                key={c.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift"
              >
                {c.preview_image ? (
                  <img
                    src={c.preview_image}
                    alt={c.name}
                    loading="lazy"
                    className="h-56 w-full bg-secondary object-contain p-4"
                  />
                ) : (
                  <div className="flex h-56 items-center justify-center bg-secondary">
                    <Award className="size-10 text-primary" />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-7">
                  <span className="w-fit rounded-full bg-accent/15 px-3 py-1 text-[11px] font-bold tracking-wide text-primary uppercase">
                    {c.category ?? (isArabic ? "شهادة" : "Certification")}
                  </span>
                  <h2 className="mt-3 text-base font-bold text-primary">{c.name}</h2>
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    {[
                      c.issue_date && `${isArabic ? "صدر" : "Issued"} ${c.issue_date}`,
                      c.expiry_date && `${isArabic ? "صالح حتى" : "Valid to"} ${c.expiry_date}`,
                    ]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                  {c.pdf_url && (
                    <a
                      href={c.pdf_url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-primary transition-colors hover:text-accent"
                    >
                      {isArabic ? "عرض الشهادة" : "View certificate"}{" "}
                      <ExternalLink className="size-3.5" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
