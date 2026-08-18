import { useLang } from "@/contexts/language";
import { Linkedin, Mail } from "lucide-react";
import SplitText from "./SplitText";

type Leader = {
  name: string;
  name_ar?: string;
  role: string;
  role_ar?: string;
  image?: string;
  initials: string;
  bio: string;
  bio_ar?: string;
  linkedin?: string;
  email?: string;
  isPlaceholder?: boolean;
};

const leaders: Leader[] = [
  {
    name: "Mr. Balaji Srinivasan",
    name_ar: "السيد بالاجي سرينيفاسان",
    role: "Founder · Group CEO & Managing Director",
    role_ar: "المؤسس · الرئيس التنفيذي للمجموعة والمدير العام",
    image: undefined,
    initials: "BS",
    bio: "Founded Towell Engineering in 1999 and grew it from a one-room operation in Muscat into a group of eleven specialised engineering, construction and energy companies and regional operations across the GCC and India.",
    bio_ar:
      "أسس تويل للهندسة في عام 1999 ونمّاها من عملية غرفة واحدة في مسقط إلى مجموعة من إحدى عشر شركة هندسية وإنشائية وطاقة وعمليات إقليمية في الخليج والهند.",
  },
  {
    name: "Chief Operating Officer",
    name_ar: "كبير مسؤولي التشغيل",
    role: "Group Operations",
    role_ar: "عمليات المجموعة",
    isPlaceholder: true,
    initials: "CO",
    bio: "Executive profile coming soon.",
    bio_ar: "الملف التنفيذي قريباً.",
  },
  {
    name: "Chief Financial Officer",
    name_ar: "المدير المالي",
    role: "Finance & Strategy",
    role_ar: "المالية والاستراتيجية",
    isPlaceholder: true,
    initials: "CF",
    bio: "Executive profile coming soon.",
    bio_ar: "الملف التنفيذي قريباً.",
  },
  {
    name: "Group Head — Engineering",
    name_ar: "رئيس المجموعة — الهندسة",
    role: "Engineering & Technology",
    role_ar: "الهندسة والتكنولوجيا",
    isPlaceholder: true,
    initials: "GE",
    bio: "Executive profile coming soon.",
    bio_ar: "الملف التنفيذي قريباً.",
  },
  {
    name: "Group Head — HSE & Quality",
    name_ar: "رئيس المجموعة — الصحة والسلامة والجودة",
    role: "Health, Safety, Environment & Quality",
    role_ar: "الصحة والسلامة والبيئة والجودة",
    isPlaceholder: true,
    initials: "HQ",
    bio: "Executive profile coming soon.",
    bio_ar: "الملف التنفيذي قريباً.",
  },
  {
    name: "Group Head — Human Resources",
    name_ar: "رئيس المجموعة — الموارد البشرية",
    role: "People & Culture",
    role_ar: "المواهب والثقافة",
    isPlaceholder: true,
    initials: "HR",
    bio: "Executive profile coming soon.",
    bio_ar: "الملف التنفيذي قريباً.",
  },
];

export function LeadershipSection() {
  const { isArabic } = useLang();

  return (
    <section id="leadership" aria-labelledby="leadership-heading" className="mx-auto max-w-[1600px] px-5 py-20 md:py-24 scroll-mt-28">
      <div className="max-w-2xl">
        <p className="eyebrow">{isArabic ? "القيادة" : "Leadership"}</p>
        <SplitText
          tag="h2"
          text={isArabic ? "الأشخاص الذين يقودون المجموعة" : "The people steering the group"}
          id="leadership-heading"
          className="mt-3 text-3xl md:text-5xl"
          textAlign="left"
          delay={35}
          duration={0.85}
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
        />
        <span className="mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
          {isArabic
            ? "فريق قيادة يجمع عقوداً من الخبرة الهندسية والتشغيلية والتجارية في عمان والخليج والأسواق الدولية."
            : "A leadership team combining decades of engineering, operational and commercial experience across Oman, the GCC and international markets."}
        </p>
      </div>

      <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {leaders.map((l) => (
          <li
            key={l.name}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
              {l.image ? (
                <img
                  src={l.image}
                  alt={`Portrait of ${l.name}, ${l.role}`}
                  loading="lazy"
                  className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div
                  aria-hidden
                  className="flex size-full items-center justify-center bg-[image:var(--gradient-primary)] font-display text-6xl font-bold text-primary-foreground/90"
                >
                  {l.initials}
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <SplitText
                tag="h3"
                text={isArabic && l.name_ar ? l.name_ar : l.name}
                className="font-display text-lg font-bold text-primary"
                textAlign="left"
                delay={15}
                duration={0.5}
                from={{ opacity: 0, y: 15 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.15}
              />
              <p className="mt-1 text-[11px] font-bold tracking-[0.16em] text-accent-strong uppercase">
                {isArabic && l.role_ar ? l.role_ar : l.role}
              </p>
              {l.isPlaceholder ? (
                <p className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-dashed border-accent/60 bg-accent/10 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-accent-strong uppercase">
                  {isArabic ? "الملف التنفيذي قريباً" : "Executive profile coming soon"}
                </p>
              ) : (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {isArabic && l.bio_ar ? l.bio_ar : l.bio}
                </p>
              )}
              {(l.linkedin || l.email) && (
                <div className="mt-5 flex items-center gap-2 border-t border-border pt-4">
                  {l.linkedin && (
                    <a
                      href={l.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={isArabic ? `${l.name_ar ?? l.name} على لينكدإن` : `${l.name} on LinkedIn`}
                      className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent-strong"
                    >
                      <Linkedin className="size-4" />
                    </a>
                  )}
                  {l.email && (
                    <a
                      href={`mailto:${l.email}`}
                      aria-label={isArabic ? `مراسلة ${l.name_ar ?? l.name}` : `Email ${l.name}`}
                      className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent-strong"
                    >
                      <Mail className="size-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
