import { createFileRoute } from "@tanstack/react-router";
import { ResourceManager } from "@/components/admin/ResourceManager";
import { productsConfig } from "@/lib/admin/resources";

export const Route = createFileRoute("/_authenticated/admin/products")({
  component: () => <ResourceManager config={productsConfig} />,
});
