import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { MediaTabs } from "@/components/site/MediaTabs";
import { listGallery } from "@/lib/cms/public.functions";
import { useLang } from "@/contexts/language";

export const Route = createFileRoute("/media/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Towell Engineering Group" },
      {
        name: "description",
        content:
          "Photo gallery of Towell Engineering Group project sites, fabrication facilities, teams and milestone events.",
      },
      { property: "og:title", content: "Gallery | Towell Engineering Group" },
      {
        property: "og:description",
        content: "Project sites, facilities and milestones across the group.",
      },
    ],
  }),
  component: GalleryPage,
});

const t = {
  gallery: { en: "Gallery", ar: "معرض الصور" },
  title: { en: "Our work in pictures", ar: "أعمالنا بالصور" },
  desc: {
    en: "Sites, facilities, teams and milestones from across Towell Engineering Group.",
    ar: "مواقع، منشآت، فرق وإنجازات بارزة من جميع أنحاء مجموعة توال للهندسة.",
  },
  allAlbums: { en: "All albums", ar: "جميع الألبومات" },
  empty: { en: "Photos will be published here soon.", ar: "سيتم نشر الصور هنا قريباً." },
};

function GalleryPage() {
  const query = useQuery({
    queryKey: ["gallery"],
    queryFn: () => listGallery(),
    placeholderData: { albums: [], items: [] },
    staleTime: 60_000,
  });
  const [album, setAlbum] = useState<string>("");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const { isArabic } = useLang();

  const items = useMemo(() => {
    const all = query.data?.items ?? [];
    return album ? all.filter((i) => i.album_id === album) : all;
  }, [query.data, album]);

  return (
    <>
      <PageHero
        eyebrow={isArabic ? t.gallery.ar : t.gallery.en}
        title={isArabic ? t.title.ar : t.title.en}
        description={isArabic ? t.desc.ar : t.desc.en}
      />
      <MediaTabs />

      <section className="mx-auto max-w-[1600px] px-5 py-16 md:py-20">
        <div className="flex flex-wrap gap-2" dir="ltr">
          <button
            onClick={() => setAlbum("")}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium ${!album ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"}`}
          >
            {isArabic ? t.allAlbums.ar : t.allAlbums.en}
          </button>
          {(query.data?.albums ?? []).map((a) => (
            <button
              key={a.id}
              onClick={() => setAlbum(a.id)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium ${album === a.id ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"}`}
            >
              {a.title}
            </button>
          ))}
        </div>

        {query.isLoading ? (
          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-square animate-pulse rounded-lg bg-secondary" />
            ))}
          </div>
        ) : items.length === 0 ? (
          <p className="mt-10 text-sm text-muted-foreground">
            {isArabic ? t.empty.ar : t.empty.en}
          </p>
        ) : (
          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => setLightbox(item.url)}
                className="group relative aspect-square overflow-hidden rounded-lg bg-secondary"
              >
                <img
                  src={item.url}
                  alt={item.caption ?? (isArabic ? "صورة من المعرض" : "Gallery image")}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.caption && (
                  <span className="absolute inset-x-0 bottom-0 bg-foreground/60 px-2 py-1.5 text-left text-xs text-background">
                    {item.caption}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/85 p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Close"
            className="absolute top-5 right-5 rounded-full bg-background/90 p-2"
            onClick={() => setLightbox(null)}
          >
            <X className="size-5" />
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
          />
        </div>
      )}
    </>
  );
}
