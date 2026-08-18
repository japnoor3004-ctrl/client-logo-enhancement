import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Download } from "lucide-react";
import { getProject } from "@/lib/cms/public.functions";
import { useLang } from "@/contexts/language";
import ProjectShowcase from "@/components/site/ProjectShowcase";
import { getShowcaseProject } from "@/lib/showcase";

export const Route = createFileRoute("/projects/$slug")({
  loader: async ({ params }) => {
    const showcase = getShowcaseProject(params.slug);
    if (showcase) return { showcaseSlug: showcase.slug, project: null };
    const project = await getProject({ data: params.slug });
    if (!project) throw notFound();
    return { showcaseSlug: null, project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project unavailable | Towell Engineering Group" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    if (loaderData.showcaseSlug) {
      const s = getShowcaseProject(loaderData.showcaseSlug)!;
      const title = `${s.title} | Towell Engineering Group`;
      return {
        meta: [
          { title },
          { name: "description", content: s.summary },
          { property: "og:title", content: title },
          { property: "og:description", content: s.summary },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ],
      };
    }
    const { project } = loaderData;
    if (!project) return { meta: [{ title: "Project | Towell Engineering Group" }] };
    const title = `${project.name} | Towell Engineering Group`;
    const description =
      project.description?.slice(0, 155) ??
      `Engineering project delivered by Towell Engineering Group${project.client ? ` for ${project.client}` : ""}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(project.cover_image?.startsWith("https://")
          ? [
              { property: "og:image", content: project.cover_image },
              { name: "twitter:image", content: project.cover_image },
            ]
          : []),
      ],
    };
  },
  component: ProjectDetail,
  errorComponent: ProjectError,
  notFoundComponent: ProjectNotFound,
});

function ProjectError() {
  const { isArabic } = useLang();
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="text-xl font-bold">
        {isArabic ? "تعذر تحميل هذا المشروع" : "This project could not be loaded"}
      </h1>
      <Link to="/projects" className="mt-4 inline-block text-sm text-primary underline">
        {isArabic ? "العودة إلى المشاريع" : "Back to projects"}
      </Link>
    </div>
  );
}

function ProjectNotFound() {
  const { isArabic } = useLang();
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="text-xl font-bold">{isArabic ? "المشروع غير موجود" : "Project not found"}</h1>
      <Link to="/projects" className="mt-4 inline-block text-sm text-primary underline">
        {isArabic ? "العودة إلى المشاريع" : "Back to projects"}
      </Link>
    </div>
  );
}

const t = {
  allProjects: { en: "All projects", ar: "جميع المشاريع" },
  client: { en: "Client", ar: "العميل" },
  location: { en: "Location", ar: "الموقع" },
  year: { en: "Year", ar: "السنة" },
  status: { en: "Status", ar: "الحالة" },
  scope: { en: "Scope of services", ar: "نطاق الخدمات" },
  download: { en: "Download project brochure", ar: "تحميل كتيب المشروع" },
};

function ProjectDetail() {
  const { project, showcaseSlug } = Route.useLoaderData();
  const { isArabic } = useLang();

  if (showcaseSlug) {
    return <ProjectShowcase project={getShowcaseProject(showcaseSlug)!} />;
  }
  if (!project) return null;

  return (
    <article className="mx-auto max-w-5xl px-5 py-16 md:py-20">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="size-4" /> {isArabic ? t.allProjects.ar : t.allProjects.en}
      </Link>

      <p className="eyebrow mt-6 text-primary">
        {project.industry ?? (isArabic ? "مشروع" : "Project")}
      </p>
      <h1 className="mt-3 text-3xl leading-tight font-bold md:text-4xl">{project.name}</h1>

      <dl className="mt-6 grid gap-4 rounded-xl border border-border bg-card p-6 text-sm shadow-soft sm:grid-cols-2 lg:grid-cols-4">
        {[
          [isArabic ? t.client.ar : t.client.en, project.client],
          [isArabic ? t.location.ar : t.location.en, project.location],
          [isArabic ? t.year.ar : t.year.en, project.year],
          [isArabic ? t.status.ar : t.status.en, project.status],
        ].map(([label, value]) =>
          value ? (
            <div key={String(label)}>
              <dt className="text-xs tracking-wide text-muted-foreground uppercase">{label}</dt>
              <dd className="mt-1 font-semibold">{String(value)}</dd>
            </div>
          ) : null,
        )}
      </dl>

      {project.cover_image && (
        <img
          src={project.cover_image}
          alt={project.name}
          className="mt-8 w-full rounded-xl object-cover shadow-soft"
        />
      )}

      {project.description && (
        <p className="mt-8 text-base leading-relaxed whitespace-pre-line text-muted-foreground">
          {project.description}
        </p>
      )}

      {(project.services?.length ?? 0) > 0 && (
        <div className="mt-8">
          <h2 className="text-sm font-bold tracking-wide uppercase">
            {isArabic ? t.scope.ar : t.scope.en}
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.services?.map((s: string) => (
              <li key={s} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}

      {(project.images?.length ?? 0) > 0 && (
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {project.images?.map((img: string) => (
            <img
              key={img}
              src={img}
              alt={`${project.name} ${isArabic ? "معرض الصور" : "gallery image"}`}
              loading="lazy"
              className="w-full rounded-lg object-cover"
            />
          ))}
        </div>
      )}

      {project.brochure_url && (
        <a
          href={project.brochure_url}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
        >
          <Download className="size-4" /> {isArabic ? t.download.ar : t.download.en}
        </a>
      )}
    </article>
  );
}
