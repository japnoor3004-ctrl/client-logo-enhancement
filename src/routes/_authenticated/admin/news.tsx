import { createFileRoute } from "@tanstack/react-router";
import { ResourceManager } from "@/components/admin/ResourceManager";
import { newsConfig } from "@/lib/admin/resources";

export const Route = createFileRoute("/_authenticated/admin/news")({
  component: () => <ResourceManager config={newsConfig} />,
});
