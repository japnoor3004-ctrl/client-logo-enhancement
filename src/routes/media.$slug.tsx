import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { getNewsItem } from "@/lib/cms/public.functions";
import { useLang } from "@/contexts/language";

export const Route = createFileRoute("/media/$slug")({
  loader: async ({ params }) => {
    const article = await getNewsItem({ data: params.slug });
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article unavailable | Towell Engineering Group" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { article } = loaderData;
    const title = `${article.title} | Towell Engineering Group`;
    const description =
      article.excerpt?.slice(0, 155) ?? `News from Towell Engineering Group: ${article.title}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        ...(article.cover_image?.startsWith("https://")
          ? [
              { property: "og:image", content: article.cover_image },
              { name: "twitter:image", content: article.cover_image },
            ]
          : []),
      ],
    };
  },
  component: ArticleDetail,
  errorComponent: ArticleError,
  notFoundComponent: ArticleNotFound,
});

function ArticleError() {
  const { isArabic } = useLang();
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="text-xl font-bold">
        {isArabic ? "تعذر تحميل هذا المقال" : "This article could not be loaded"}
      </h1>
      <Link to="/media" className="mt-4 inline-block text-sm text-primary underline">
        {isArabic ? "العودة إلى الأخبار" : "Back to news"}
      </Link>
    </div>
  );
}

function ArticleNotFound() {
  const { isArabic } = useLang();
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="text-xl font-bold">{isArabic ? "المقال غير موجود" : "Article not found"}</h1>
      <Link to="/media" className="mt-4 inline-block text-sm text-primary underline">
        {isArabic ? "العودة إلى الأخبار" : "Back to news"}
      </Link>
    </div>
  );
}

const t = {
  allNews: { en: "All news", ar: "جميع الأخبار" },
  news: { en: "News", ar: "أخبار" },
};

function ArticleDetail() {
  const { article } = Route.useLoaderData();
  const { isArabic } = useLang();

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 md:py-20">
      <Link
        to="/media"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="size-4" /> {isArabic ? t.allNews.ar : t.allNews.en}
      </Link>

      <p className="eyebrow mt-6 text-primary">
        {article.category ?? (isArabic ? t.news.ar : t.news.en)}
      </p>
      <h1 className="mt-3 text-3xl leading-tight font-bold md:text-4xl">{article.title}</h1>
      {article.published_at && (
        <p className="mt-2 text-sm text-muted-foreground">{article.published_at}</p>
      )}

      {article.cover_image && (
        <img
          src={article.cover_image}
          alt={article.title}
          className="mt-8 w-full rounded-xl object-cover shadow-soft"
        />
      )}

      {article.excerpt && <p className="mt-8 text-lg leading-relaxed">{article.excerpt}</p>}
      {article.body && (
        <div className="mt-6 text-base leading-relaxed whitespace-pre-line text-muted-foreground">
          {article.body}
        </div>
      )}
    </article>
  );
}
