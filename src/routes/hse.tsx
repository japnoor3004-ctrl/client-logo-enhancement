import { useLang } from "@/contexts/language";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import heroImg__ptr from "@/assets/construction.jpg.asset.json";
const heroImg = heroImg__ptr.url;
import DotField from "@/components/site/DotField";
import HseGallery from "@/components/site/HseGallery";

import {
  ShieldCheck,
  HeartPulse,
  Leaf,
  BookOpen,
  Users,
  ClipboardCheck,
  AlertTriangle,
  Recycle,
  BadgeCheck,
} from "lucide-react";

export const Route = createFileRoute("/hse")({
  head: () => ({
    meta: [
      { title: "Health, Safety & Environment (HSE) | Towell Engineering Group" },
      {
        name: "description",
        content:
          "Towell Engineering Group's HSE commitment — ISO 45001 and ISO 14001 aligned health, safety and environmental management across every project.",
      },
      { property: "og:title", content: "HSE at Towell Engineering Group" },
      {
        property: "og:description",
        content:
          "Zero-harm workplaces, environmental stewardship, and continuous training across every group company.",
      },
      { property: "og:url", content: "/hse" },
    ],
    links: [{ rel: "canonical", href: "/hse" }],
  }),
  component: HSEPage,
});

const pillars = [
  {
    icon: HeartPulse,
    title_en: "Health",
    title_ar: "الصحة",
    body_en:
      "Occupational health programs, medical screening and fatigue management protect every person on our sites.",
    body_ar: "برامج الصحة المهنية والفحص الطبي وإدارة الإرهاق تحمي كل شخص في مواقعنا.",
  },
  {
    icon: ShieldCheck,
    title_en: "Safety",
    title_ar: "السلامة",
    body_en:
      "Zero-harm culture built on hazard identification, permit-to-work discipline, and stop-work authority for every worker.",
    body_ar:
      "ثقافة عدم الضرر المبنية على تحديد المخاطر وانضباط تصاريح العمل وسلطة إيقاف العمل لكل عامل.",
  },
  {
    icon: Leaf,
    title_en: "Environment",
    title_ar: "البيئة",
    body_en:
      "Environmental stewardship on every project — waste minimisation, spill prevention, and responsible resource use.",
    body_ar: "الإشراف البيئي في كل مشروع — تقليل النفايات ومنع التسرب والاستخدام المسؤول للموارد.",
  },
];

const stats = [
  { value: "10M+", label_en: "Safe man-hours delivered", label_ar: "ساعات عمل آمنة" },
  { value: "ISO 45001", label_en: "Occupational H&S", label_ar: "الصحة والسلامة المهنية" },
  { value: "ISO 14001", label_en: "Environmental management", label_ar: "الإدارة البيئية" },
  { value: "24/7", label_en: "Site HSE supervision", label_ar: "إشراف على مدار الساعة" },
];

const programs = [
  {
    icon: ClipboardCheck,
    title_en: "Permit-to-Work & JSA",
    title_ar: "تصريح العمل وتحليل المخاطر",
    body_en:
      "Every critical task begins with a job safety analysis and a permit reviewed by the site HSE lead.",
    body_ar: "كل مهمة حرجة تبدأ بتحليل سلامة الوظيفة وتصريح يراجعه مسؤول السلامة.",
  },
  {
    icon: BookOpen,
    title_en: "Induction & Training",
    title_ar: "التعريف والتدريب",
    body_en:
      "All workers complete site induction, PPE briefing, and role-specific competency training before mobilisation.",
    body_ar: "جميع العاملين يكملون التعريف بالموقع وتدريبات معدات الوقاية والتدريب على الكفاءة.",
  },
  {
    icon: AlertTriangle,
    title_en: "Incident Reporting",
    title_ar: "الإبلاغ عن الحوادث",
    body_en:
      "Near-miss and incident reporting is mandatory and non-punitive — every report drives a corrective action.",
    body_ar: "الإبلاغ عن الحوادث والوقائع إلزامي وغير عقابي — كل تقرير يؤدي إلى إجراء تصحيحي.",
  },
  {
    icon: Users,
    title_en: "Toolbox Talks",
    title_ar: "محادثات الأدوات",
    body_en:
      "Daily pre-start briefings keep crews aligned on the day's hazards, controls and emergency procedures.",
    body_ar: "إحاطات يومية قبل البدء تبقي الفرق على اطلاع بمخاطر اليوم.",
  },
  {
    icon: Recycle,
    title_en: "Waste & Environment",
    title_ar: "النفايات والبيئة",
    body_en:
      "Segregated waste streams, spill kits, and environmental monitoring on every active site.",
    body_ar: "تيارات نفايات منفصلة ومجموعات تسرب ومراقبة بيئية في كل موقع.",
  },
  {
    icon: BadgeCheck,
    title_en: "Audits & Assurance",
    title_ar: "التدقيق والضمان",
    body_en:
      "Internal and third-party audits verify compliance with client HSE plans and international standards.",
    body_ar: "تدقيقات داخلية وخارجية تتحقق من الامتثال لخطط الصحة والسلامة والمعايير الدولية.",
  },
];

function HSEPage() {
  const { isArabic } = useLang();

  return (
    <>
      <PageHero
        eyebrow={isArabic ? "الصحة والسلامة والبيئة" : "Health, Safety & Environment"}
        title={isArabic ? "عدم الضرر. في كل موقع. كل يوم." : "Zero harm. On every site. Every day."}
        description={
          isArabic
            ? "الصحة والسلامة والبيئة ليست قسماً في تويل للهندسة — بل هي الطريقة التي نخطط ونجهز وننفذ بها كل مشروع."
            : "HSE is not a department at Towell Engineering — it is how we plan, mobilise and deliver every project across Oman, the GCC and India."
        }
      />

      <section className="mx-auto max-w-[1600px] px-5 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">{isArabic ? "ركائزنا الثلاث" : "Our three pillars"}</p>
          <h2 className="mt-3 text-3xl md:text-5xl">
            {isArabic
              ? "حماية الناس والمجتمعات والبيئة."
              : "Protecting people, communities and the environment."}
          </h2>
          <span className="mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title_en}
                className="group rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift"
              >
                <span className="flex size-14 items-center justify-center rounded-xl bg-[image:var(--gradient-forest)] text-forest-foreground shadow-soft">
                  <Icon className="size-7" />
                </span>
                <h3 className="mt-6 text-xl text-primary">{isArabic ? p.title_ar : p.title_en}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {isArabic ? p.body_ar : p.body_en}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0F1A2E]">
        <div className="absolute inset-0">
          <DotField
            dotRadius={1}
            dotSpacing={18}
            bulgeStrength={30}
            glowRadius={100}
            gradientFrom="rgba(15, 26, 46, 0.3)"
            gradientTo="rgba(26, 45, 74, 0.2)"
            glowColor="#97CB46"
            style={{ position: "absolute", inset: 0 }}
          />
        </div>
        <div className="relative mx-auto max-w-[1600px] px-5 py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label_en} className="text-center sm:text-left">
                <p className="font-display text-4xl font-extrabold tracking-tight text-accent-strong md:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm tracking-[0.14em] text-forest-foreground/75 uppercase">
                  {isArabic ? s.label_ar : s.label_en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-20 md:py-24">
        <div className="grid items-start gap-10 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow">{isArabic ? "سياسة الصحة والسلامة" : "HSE Policy"}</p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              {isArabic ? "التزامنا." : "Our commitment."}
            </h2>
            <span className="mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            {isArabic ? (
              <>
                <p>
                  مجموعة تويل للهندسة ملتزمة بحماية صحة وسلامة جميع الموظفين والمقاولين والزوار
                  والمجتمعات المتأثرة بعملياتنا، وتقليل الأثر البيئي لمشاريعنا.
                </p>
                <p>
                  نمتثل لجميع تشريعات الصحة والسلامة والبيئة العمانية والدولية، ونوائم أنظمتنا
                  الإدارية مع ISO 45001 و ISO 14001.
                </p>
                <p>
                  كل موظف — من عامل الموقع إلى الرئيس التنفيذي — لديه سلطة إيقاف العمل. لا توجد مهمة
                  عاجلة لدرجة لا يمكن القيام بها بأمان.
                </p>
              </>
            ) : (
              <>
                <p>
                  Towell Engineering Group is committed to protecting the health and safety of all
                  employees, contractors, visitors and communities affected by our operations, and
                  to minimising the environmental impact of our projects.
                </p>
                <p>
                  We comply with all applicable Omani and international HSE legislation, align our
                  management systems with ISO 45001 and ISO 14001, and integrate client HSE
                  requirements into every project plan from mobilisation to handover.
                </p>
                <p>
                  Every employee — from site worker to Group CEO — carries stop-work authority. No
                  task is so urgent that it cannot be done safely.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/40 py-20 md:py-24">
        <div className="mx-auto max-w-[1600px] px-5">
          <div className="max-w-2xl">
            <p className="eyebrow">{isArabic ? "البرامج التطبيقية" : "Programs in action"}</p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              {isArabic
                ? "كيف نطبق الصحة والسلامة والبيئة على الأرض."
                : "How we run HSE on the ground."}
            </h2>
            <span className="mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p) => {
              const Icon = p.icon;
              return (
                <li
                  key={p.title_en}
                  className="flex gap-5 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-lift"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[image:var(--gradient-leaf-soft)] text-accent-strong ring-1 ring-accent/30">
                    <Icon className="size-6" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base leading-tight text-primary">
                      {isArabic ? p.title_ar : p.title_en}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {isArabic ? p.body_ar : p.body_en}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <HseGallery />
    </>
  );
}

