import { createFileRoute } from "@tanstack/react-router";
import { ResourceManager } from "@/components/admin/ResourceManager";
import { seoConfig } from "@/lib/admin/resources";

export const Route = createFileRoute("/_authenticated/admin/seo")({
  component: () => <ResourceManager config={seoConfig} />,
});
