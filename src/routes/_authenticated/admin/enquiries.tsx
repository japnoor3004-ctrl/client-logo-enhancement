import { createFileRoute } from "@tanstack/react-router";
import { ResourceManager } from "@/components/admin/ResourceManager";
import { enquiriesConfig } from "@/lib/admin/resources";

export const Route = createFileRoute("/_authenticated/admin/enquiries")({
  component: () => <ResourceManager config={enquiriesConfig} />,
});
