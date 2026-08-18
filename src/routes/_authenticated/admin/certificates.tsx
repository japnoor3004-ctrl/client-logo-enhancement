import { createFileRoute } from "@tanstack/react-router";
import { ResourceManager } from "@/components/admin/ResourceManager";
import { certificatesConfig } from "@/lib/admin/resources";

export const Route = createFileRoute("/_authenticated/admin/certificates")({
  component: () => <ResourceManager config={certificatesConfig} />,
});
