import { createFileRoute } from "@tanstack/react-router";
import { ResourceManager } from "@/components/admin/ResourceManager";
import { companiesConfig } from "@/lib/admin/resources";

export const Route = createFileRoute("/_authenticated/admin/companies")({
  component: () => <ResourceManager config={companiesConfig} />,
});
