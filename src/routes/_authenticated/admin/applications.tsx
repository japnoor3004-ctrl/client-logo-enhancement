import { createFileRoute } from "@tanstack/react-router";
import { ResourceManager } from "@/components/admin/ResourceManager";
import { applicationsConfig } from "@/lib/admin/resources";

export const Route = createFileRoute("/_authenticated/admin/applications")({
  component: () => <ResourceManager config={applicationsConfig} />,
});
