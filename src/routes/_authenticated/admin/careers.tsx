import { createFileRoute } from "@tanstack/react-router";
import { ResourceManager } from "@/components/admin/ResourceManager";
import { jobsConfig } from "@/lib/admin/resources";

export const Route = createFileRoute("/_authenticated/admin/careers")({
  component: () => <ResourceManager config={jobsConfig} />,
});
