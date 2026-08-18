import { createFileRoute } from "@tanstack/react-router";
import { CompanyProfile } from "@/components/site/CompanyProfile";
import { companyQuery } from "@/lib/cms/companies";

const SLUG = "nxtlevvel-biochem";

export const Route = createFileRoute("/nxtlevvel-biochem")({
  loader: ({ context }) => context.queryClient.ensureQueryData(companyQuery(SLUG)),
  head: ({ loaderData }) => {
    const c = loaderData?.company;
    const title = c?.seo_title ?? "NXTLEVVEL BIOCHEM — Biochemicals | Towell Engineering Group";
    const description =
      c?.seo_description ??
      c?.description_en ??
      "NXTLEVVEL BIOCHEM is the biochemicals company of Towell Engineering Group.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        ...(c?.keywords ? [{ name: "keywords", content: c.keywords }] : []),
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/${SLUG}` },
        { name: "twitter:card", content: "summary_large_image" },
        ...(c?.og_image
          ? [
              { property: "og:image", content: c.og_image },
              { name: "twitter:image", content: c.og_image },
            ]
          : []),
      ],
      links: [{ rel: "canonical", href: `/${SLUG}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: c?.name_en ?? "NXTLEVVEL BIOCHEM",
            description,
            parentOrganization: {
              "@type": "Organization",
              name: "Towell Engineering Group",
            },
            ...(c?.contact_email ? { email: c.contact_email } : {}),
            ...(c?.contact_phone ? { telephone: c.contact_phone } : {}),
          }),
        },
      ],
    };
  },
  component: () => <CompanyProfile slug={SLUG} />,
});
