import { createFileRoute } from "@tanstack/react-router";
import { ResourceManager } from "@/components/admin/ResourceManager";
import { projectsConfig } from "@/lib/admin/resources";

export const Route = createFileRoute("/_authenticated/admin/projects")({
  component: () => <ResourceManager config={projectsConfig} />,
});
