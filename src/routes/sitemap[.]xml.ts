import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { GROUP_COMPANIES } from "@/lib/companies";

const BASE_URL = "https://towellengineering.net";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about-us", changefreq: "monthly", priority: "0.9" },
          ...GROUP_COMPANIES.map((c) => ({
            path: c.slug,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          { path: "/products-services", changefreq: "monthly", priority: "0.9" },
          { path: "/careers", changefreq: "monthly", priority: "0.7" },
          { path: "/media", changefreq: "weekly", priority: "0.6" },
          { path: "/vendor-registration", changefreq: "monthly", priority: "0.6" },
          { path: "/projects", changefreq: "weekly", priority: "0.9" },
          { path: "/certificates", changefreq: "monthly", priority: "0.7" },
          { path: "/media/gallery", changefreq: "monthly", priority: "0.6" },
          { path: "/hse", changefreq: "monthly", priority: "0.7" },
          { path: "/contact-us", changefreq: "yearly", priority: "0.8" },
        ];

        // Dynamic, CMS-managed content
        try {
          const { publicClient } = await import("@/lib/cms/media.server");
          const supabase = publicClient();
          const [projects, news, jobs] = await Promise.all([
            supabase.from("projects").select("slug, updated_at").eq("published", true),
            supabase.from("news").select("slug, updated_at").eq("published", true),
            supabase.from("jobs").select("slug, updated_at").eq("published", true),
          ]);
          for (const row of projects.data ?? []) {
            entries.push({
              path: `/projects/${row.slug}`,
              lastmod: row.updated_at?.slice(0, 10),
              changefreq: "monthly",
              priority: "0.7",
            });
          }
          for (const row of news.data ?? []) {
            entries.push({
              path: `/media/${row.slug}`,
              lastmod: row.updated_at?.slice(0, 10),
              changefreq: "monthly",
              priority: "0.6",
            });
          }
          for (const row of jobs.data ?? []) {
            entries.push({
              path: `/careers/${row.slug}`,
              lastmod: row.updated_at?.slice(0, 10),
              changefreq: "weekly",
              priority: "0.6",
            });
          }
        } catch {
          // Sitemap must still render the static routes if the CMS is unreachable.
        }

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
