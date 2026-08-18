import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/contexts/language";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import {
  MapPin,
  Briefcase,
  Search,
  Users,
  HeartHandshake,
  GraduationCap,
  ShieldCheck,
  Globe2,
  Sparkles,
  ArrowRight,
  AlertTriangle,
  Mail,
} from "lucide-react";
import { listJobs } from "@/lib/cms/public.functions";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/careers/")({
  head: () => ({
    meta: [
      { title: "Careers | Towell Engineering Group" },
      {
        name: "description",
        content:
          "Build your engineering career with Towell Engineering Group across Oman, the GCC and India.",
      },
      { property: "og:title", content: "Careers | Towell Engineering Group" },
      {
        property: "og:description",
        content:
          "Join eleven specialised engineering companies delivering quality projects on time.",
      },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const disciplines = [
  { en: "Civil & Structural Engineering", ar: "الهندسة المدنية والإنشائية" },
  { en: "Mechanical & Piping", ar: "الميكانيكا والأنابيب" },
  { en: "Electrical & Instrumentation", ar: "الكهرباء والأجهزة" },
  { en: "Process & Oil and Gas", ar: "المعالجة والنفط والغاز" },
  { en: "QA/QC & HSE", ar: "ضمان الجودة والسلامة" },
  { en: "Planning, Contracts & Procurement", ar: "التخطيط والعقود والمشتريات" },
];

const benefits = [
  {
    icon: GraduationCap,
    title_en: "Learning & development",
    title_ar: "التعلم والتطوير",
    text_en: "Structured training, mentoring, and international project exposure.",
    text_ar: "تدريب منظم وإرشاد وتعرض للمشاريع الدولية.",
  },
  {
    icon: ShieldCheck,
    title_en: "Safety-first culture",
    title_ar: "ثقافة السلامة أولاً",
    text_en: "ISO 45001 systems, PPE, and a zero-harm site environment.",
    text_ar: "أنظمة ISO 45001 ومعدات الوقاية وبيئة خالية من الضرر.",
  },
  {
    icon: Users,
    title_en: "Great teams",
    title_ar: "فرق ممتازة",
    text_en: "1,000+ engineers and technicians from 20+ nationalities.",
    text_ar: "أكثر من 1,000 مهندس وفني من أكثر من 20 جنسية.",
  },
  {
    icon: HeartHandshake,
    title_en: "People-first policies",
    title_ar: "سياسات تركز على الناس",
    text_en: "Health cover, family support and fair-recruitment commitment.",
    text_ar: "تغطية صحية ودعم عائلي والتزام بالتوظيف العادل.",
  },
  {
    icon: Globe2,
    title_en: "Regional mobility",
    title_ar: "التنقل الإقليمي",
    text_en: "Opportunities across Oman, GCC and India.",
    text_ar: "فرص في عمان والخليج والهند.",
  },
  {
    icon: Sparkles,
    title_en: "Real impact",
    title_ar: "تأثير حقيقي",
    text_en: "Deliver assets that power industry and improve daily life.",
    text_ar: "تقديم أصول تدعم الصناعة وتحسن الحياة اليومية.",
  },
];

const steps = [
  {
    step: "01",
    title_en: "Apply",
    title_ar: "تقديم الطلب",
    text_en: "Submit your CV via our HR email or the job page.",
    text_ar: "أرسل سيرتك الذاتية عبر البريد الإلكتروني للموارد البشرية.",
  },
  {
    step: "02",
    title_en: "Screening",
    title_ar: "الفرز",
    text_en: "Our HR team reviews your profile against the role.",
    text_ar: "يقوم فريق الموارد البشرية بمراجعة ملفك مقابل الدور.",
  },
  {
    step: "03",
    title_en: "Interviews",
    title_ar: "المقابلات",
    text_en: "Technical and HR interviews (in-person or remote).",
    text_ar: "مقابلات فنية وموارد بشرية (شخصية أو عن بعد).",
  },
  {
    step: "04",
    title_en: "Offer & onboarding",
    title_ar: "العرض والتأهيل",
    text_en: "Site induction, HSE training and welcome to the group.",
    text_ar: "التعريف بالموقع والتدريب على السلامة والترحيب بالمجموعة.",
  },
];

function CareersPage() {
  const { isArabic } = useLang();
  const jobs = useQuery({
    queryKey: ["jobs"],
    queryFn: () => listJobs({ data: {} }),
    placeholderData: [],
    staleTime: 60_000,
  });
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("all");
  const [loc, setLoc] = useState("all");
  const departments = useMemo(() => {
    const s = new Set<string>();
    (jobs.data ?? []).forEach((j) => j.department && s.add(j.department));
    return Array.from(s).sort();
  }, [jobs.data]);
  const locations = useMemo(() => {
    const s = new Set<string>();
    (jobs.data ?? []).forEach((j) => j.location && s.add(j.location));
    return Array.from(s).sort();
  }, [jobs.data]);
  const filtered = useMemo(
    () =>
      (jobs.data ?? []).filter((j) => {
        if (dept !== "all" && j.department !== dept) return false;
        if (loc !== "all" && j.location !== loc) return false;
        if (search && !j.position.toLowerCase().includes(search.toLowerCase())) return false;
        return true;
      }),
    [jobs.data, search, dept, loc],
  );

  return (
    <>
      <PageHero
        eyebrow={isArabic ? "الوظائف" : "Careers"}
        title={isArabic ? "انمو مع مجموعة هندسية رائدة" : "Grow with an engineering conglomerate"}
        description={
          isArabic
            ? "تويل للهندسة مثال رائع على المبادرة والعمل الجماعي والاحترافية. إذا كنت تشاركنا التزامنا بالسلامة والجودة والبيئة الخضراء، يسعدنا التواصل معك."
            : "Towell Engineering is an outstanding example of enterprise, teamwork and professionalism. If you share our commitment to safety, quality and a green environment, we would love to hear from you."
        }
      />

      <section className="mx-auto max-w-[1600px] px-5 py-16 md:py-20">
        <p className="eyebrow">{isArabic ? "لماذا تنضم إلينا" : "Why join us"}</p>
        <h2 className="mt-3 text-3xl md:text-4xl">
          {isArabic ? "مهنة تفخر ببنائها" : "A career you'll be proud to build"}
        </h2>
        <span className="mt-5 block h-1 w-16 rounded-full bg-[image:var(--gradient-leaf)]" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <li
                key={b.title_en}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-soft transition-shadow hover:shadow-lift"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent-strong">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-primary">
                    {isArabic ? b.title_ar : b.title_en}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {isArabic ? b.text_ar : b.text_en}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="border-y border-border bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-[1600px] px-5">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">{isArabic ? "الوظائف الشاغرة" : "Current openings"}</p>
              <h2 className="mt-3 text-3xl md:text-4xl">
                {isArabic ? "ابحث عن دورك" : "Find your role"}
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              {jobs.isLoading
                ? isArabic
                  ? "جاري تحميل الوظائف…"
                  : "Loading roles…"
                : `${filtered.length} ${isArabic ? "من" : "of"} ${jobs.data?.length ?? 0} ${isArabic ? "وظيفة شاغرة" : "openings"}`}
            </p>
          </div>
          <div className="mt-8 grid gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft md:grid-cols-[1fr_200px_200px]">
            <label className="relative">
              <span className="sr-only">{isArabic ? "ابحث عن وظائف" : "Search openings"}</span>
              <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={
                  isArabic
                    ? "ابحث حسب المسمى (مثل مهندس أنابيب)"
                    : "Search by role (e.g. Piping Engineer)"
                }
                className="h-11 w-full rounded-lg border border-border bg-background pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none"
              />
            </label>
            <label>
              <span className="sr-only">
                {isArabic ? "تصفية حسب القسم" : "Filter by department"}
              </span>
              <select
                value={dept}
                onChange={(e) => setDept(e.target.value)}
                className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm"
              >
                <option value="all">{isArabic ? "جميع الأقسام" : "All departments"}</option>
                {departments.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span className="sr-only">
                {isArabic ? "تصفية حسب الموقع" : "Filter by location"}
              </span>
              <select
                value={loc}
                onChange={(e) => setLoc(e.target.value)}
                className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm"
              >
                <option value="all">{isArabic ? "جميع المواقع" : "All locations"}</option>
                {locations.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {jobs.isLoading ? (
            <div className="mt-6 space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-24 animate-pulse rounded-xl bg-card" />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="mt-8 rounded-xl border border-dashed border-border bg-card p-10 text-center">
              <p className="font-display text-base font-bold text-primary">
                {isArabic ? "لا توجد وظائف شاغرة حالياً" : "No matching openings right now"}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {isArabic
                  ? "أرسل طلب توظيف مفتوح لفريق الموارد البشرية لدينا — نحن دائماً حريصون على التواصل مع المهندسين المتميزين."
                  : "Send an open application to our HR team — we're always keen to hear from strong engineers."}
              </p>
              <a
                href="mailto:teg-recruitments@towellengineering.com"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                <Mail className="size-4" />
                {isArabic ? "أرسل طلب توظيف" : "Send open application"}
              </a>
            </div>
          ) : (
            <ul className="mt-6 grid gap-3">
              {filtered.map((job) => (
                <li key={job.id}>
                  <Link
                    to="/careers/$slug"
                    params={{ slug: job.slug }}
                    className="group flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-card px-6 py-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lift"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-base font-bold text-primary transition-colors group-hover:text-accent-strong">
                        {job.position}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                        {job.department && (
                          <span className="inline-flex items-center gap-1.5">
                            <Briefcase className="size-3.5" /> {job.department}
                          </span>
                        )}
                        {job.location && (
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="size-3.5" /> {job.location}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-accent-strong">
                      {isArabic ? "عرض وتقديم" : "View & apply"}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">
              {isArabic ? "التخصصات التي نوظف لها" : "Disciplines we hire for"}
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl">
              {isArabic ? "أين يمكنك النمو" : "Where you can grow"}
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {disciplines.map((d) => (
                <li
                  key={d.en}
                  className="rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium"
                >
                  {isArabic ? d.ar : d.en}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">{isArabic ? "عملية التوظيف" : "Hiring process"}</p>
            <h2 className="mt-3 text-2xl md:text-3xl">
              {isArabic ? "أربع خطوات شفافة" : "Four honest steps"}
            </h2>
            <ol className="mt-6 space-y-4">
              {steps.map((s) => (
                <li
                  key={s.step}
                  className="flex gap-4 rounded-xl border border-border bg-card p-4 shadow-soft"
                >
                  <span className="font-display text-2xl font-bold text-accent-strong">
                    {s.step}
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-primary">
                      {isArabic ? s.title_ar : s.title_en}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {isArabic ? s.text_ar : s.text_en}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
            <h2 className="font-display text-xl font-bold text-primary">
              {isArabic ? "كيفية التقديم" : "How to apply"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {isArabic
                ? "أرسل سيرتك الذاتية مع ذكر المسمى الوظيفي إلى قسم الموارد البشرية على"
                : "Send your CV, stating the position applied for, to our HR department at"}{" "}
              <a
                className="font-bold text-accent-strong underline underline-offset-4"
                href="mailto:teg-recruitments@towellengineering.com"
              >
                teg-recruitments@towellengineering.com
              </a>
              .
              {isArabic
                ? " يتم التوظيف فقط من خلال قسم الموارد البشرية لدينا ووكالات التوظيف المهنية التي لا تتقاضى أي رسوم أو عمولات من المرشحين."
                : " Our recruitment is conducted only through our own HR department and through professional recruitment agencies that do not charge any fee, commission or monetary consideration from candidates."}
            </p>
          </div>
          <div className="rounded-2xl border border-accent/40 bg-accent/10 p-7 shadow-soft">
            <div className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-strong/20 text-accent-strong">
                <AlertTriangle className="size-5" aria-hidden />
              </span>
              <div>
                <h2 className="font-display text-xl font-bold text-primary">
                  {isArabic
                    ? "احذر من عروض التوظيف الاحتيالية"
                    : "Beware of fraud recruitment offers"}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {isArabic
                    ? "يتم تداول عروض عمل وهمية نيابة عنا من قبل أشخاص غير أخلاقيين يطلبون من المرشحين إيداع رسوم في حسابات بنكية، ويستخدمون اسمنا وعلامتنا التجارية دون إذن. يرجى التحقق من أي مقابلة مع قسم الموارد البشرية لدينا قبل المتابعة."
                    : "Fake job offers are being circulated on our behalf by unscrupulous persons who solicit applications requiring candidates to deposit fees in bank accounts, and who use our name, trademark, domain and logo without authorisation. Please verify any interview call with our HR department before proceeding."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
