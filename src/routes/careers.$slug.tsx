import { useLang } from "@/contexts/language";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { ArrowLeft, Loader2, MapPin, Briefcase, Clock } from "lucide-react";
import { toast } from "sonner";
import { getJob } from "@/lib/cms/public.functions";
import { submitApplication } from "@/lib/cms/forms.functions";
import { uploadFile } from "@/lib/cms/media";

export const Route = createFileRoute("/careers/$slug")({
  loader: async ({ params }) => {
    const job = await getJob({ data: params.slug });
    if (!job) throw notFound();
    return { job };
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return {
        meta: [
          { title: "Vacancy unavailable | Towell Engineering Group" },
          { name: "robots", content: "noindex" },
        ],
      };
    const { job } = loaderData;
    return {
      meta: [
        { title: `${job.position} | Careers at Towell Engineering Group` },
        {
          name: "description",
          content: job.description?.slice(0, 155) ?? `Apply for the ${job.position} role.`,
        },
        { property: "og:title", content: `${job.position} | Careers at Towell Engineering Group` },
        {
          property: "og:description",
          content: job.description?.slice(0, 155) ?? `Apply for the ${job.position} role.`,
        },
      ],
    };
  },
  component: JobDetail,
  errorComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="text-xl font-bold">This vacancy could not be loaded</h1>
      <Link to="/careers" className="mt-4 inline-block text-sm text-primary underline">
        Back to careers
      </Link>
    </div>
  ),
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="text-xl font-bold">Vacancy not found</h1>
      <Link to="/careers" className="mt-4 inline-block text-sm text-primary underline">
        Back to careers
      </Link>
    </div>
  ),
});

function JobDetail() {
  const { isArabic } = useLang();
  const { job } = Route.useLoaderData();
  const [values, setValues] = useState<Record<string, string>>({});
  const [cv, setCv] = useState<File | null>(null);
  const apply = useMutation({
    mutationFn: async () => {
      let cvPath = "";
      if (cv) cvPath = await uploadFile("applications", `cv/${job.id}`, cv);
      return submitApplication({
        data: {
          job_id: job.id,
          full_name: values.full_name ?? "",
          email: values.email ?? "",
          phone: values.phone ?? "",
          message: values.message ?? "",
          cv_url: cvPath,
        },
      });
    },
    onSuccess: () => {
      toast.success(
        isArabic
          ? "تم استلام الطلب. سيتواصل فريق الموارد البشرية معك."
          : "Application received. Our HR team will be in touch.",
      );
      setValues({});
      setCv(null);
    },
    onError: (e: Error) =>
      toast.error(
        e.message || (isArabic ? "تعذر إرسال الطلب." : "Could not submit your application."),
      ),
  });

  return (
    <article className="mx-auto max-w-4xl px-5 py-16 md:py-20">
      <Link
        to="/careers"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="size-4" /> {isArabic ? "جميع الوظائف" : "All vacancies"}
      </Link>
      <p className="eyebrow mt-6 text-primary">
        {job.department ?? (isArabic ? "الوظائف" : "Careers")}
      </p>
      <h1 className="mt-3 text-3xl leading-tight font-bold md:text-4xl">{job.position}</h1>
      <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
        {job.location && (
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-4" /> {job.location}
          </span>
        )}
        {job.employment_type && (
          <span className="inline-flex items-center gap-1.5">
            <Briefcase className="size-4" /> {job.employment_type}
          </span>
        )}
        {job.closing_date && (
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-4" />{" "}
            {isArabic ? `ينتهي ${job.closing_date}` : `Closes ${job.closing_date}`}
          </span>
        )}
      </div>
      {[
        { heading_en: "About the role", heading_ar: "عن الوظيفة", body: job.description },
        { heading_en: "Responsibilities", heading_ar: "المسؤوليات", body: job.responsibilities },
        { heading_en: "Requirements", heading_ar: "المتطلبات", body: job.requirements },
      ].map(({ heading_en, heading_ar, body }) =>
        body ? (
          <section key={heading_en} className="mt-8">
            <h2 className="text-sm font-bold tracking-[0.18em] uppercase">
              {isArabic ? heading_ar : heading_en}
            </h2>
            <p className="mt-3 text-sm leading-relaxed whitespace-pre-line text-muted-foreground">
              {body}
            </p>
          </section>
        ) : null,
      )}

      <form
        className="mt-12 rounded-xl border border-border bg-card p-7 shadow-soft"
        onSubmit={(e) => {
          e.preventDefault();
          apply.mutate();
        }}
      >
        <h2 className="text-xl">{isArabic ? "تقدم لهذه الوظيفة" : "Apply for this position"}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <label className="block text-sm font-medium">
            {isArabic ? "الاسم الكامل" : "Full name"}
            <input
              required
              value={values.full_name ?? ""}
              onChange={(e) => setValues((p) => ({ ...p, full_name: e.target.value }))}
              className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
            />
          </label>
          <label className="block text-sm font-medium">
            {isArabic ? "البريد الإلكتروني" : "Email"}
            <input
              type="email"
              required
              value={values.email ?? ""}
              onChange={(e) => setValues((p) => ({ ...p, email: e.target.value }))}
              className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
            />
          </label>
          <label className="block text-sm font-medium">
            {isArabic ? "رقم الهاتف" : "Phone"}
            <input
              value={values.phone ?? ""}
              onChange={(e) => setValues((p) => ({ ...p, phone: e.target.value }))}
              className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
            />
          </label>
          <label className="block text-sm font-medium">
            {isArabic ? "السيرة الذاتية (PDF أو Word)" : "CV (PDF or Word)"}
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setCv(e.target.files?.[0] ?? null)}
              className="mt-2 w-full text-sm"
            />
          </label>
        </div>
        <label className="mt-5 block text-sm font-medium">
          {isArabic ? "رسالة تغطية" : "Covering note"}
          <textarea
            rows={5}
            maxLength={3000}
            value={values.message ?? ""}
            onChange={(e) => setValues((p) => ({ ...p, message: e.target.value }))}
            className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
          />
        </label>
        <button
          type="submit"
          disabled={apply.isPending}
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-60"
        >
          {apply.isPending && <Loader2 className="size-4 animate-spin" />}
          {isArabic ? "إرسال الطلب" : "Submit application"}
        </button>
      </form>
    </article>
  );
}
