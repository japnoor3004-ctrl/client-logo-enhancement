import { createFileRoute } from "@tanstack/react-router";
import { ResourceManager } from "@/components/admin/ResourceManager";
import { clientLogosConfig } from "@/lib/admin/resources";

export const Route = createFileRoute("/_authenticated/admin/clients")({
  component: () => <ResourceManager config={clientLogosConfig} />,
});
