import { Link } from "@tanstack/react-router";
import { useLang } from "@/contexts/language";

const tabs = [
  { to: "/media", en: "News & press", ar: "الأخبار والصحافة", exact: true },
  { to: "/media/gallery", en: "Gallery", ar: "معرض الصور", exact: false },
] as const;

export function MediaTabs() {
  const { isArabic } = useLang();
  return (
    <div className="mx-auto flex max-w-[1600px] flex-wrap gap-2 px-5 pt-10">
      {tabs.map((t) => (
        <Link
          key={t.to}
          to={t.to}
          activeOptions={{ exact: t.exact ?? false }}
          activeProps={{ className: "border-primary bg-primary/10 text-primary" }}
          className="rounded-full border border-border px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          {isArabic ? t.ar : t.en}
        </Link>
      ))}
    </div>
  );
}
