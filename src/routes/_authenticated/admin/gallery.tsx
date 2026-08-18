import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { ResourceManager, type ResourceConfig } from "@/components/admin/ResourceManager";
import { galleryAlbumsConfig } from "@/lib/admin/resources";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/admin/gallery")({
  component: GalleryAdmin,
});

function GalleryAdmin() {
  const [tab, setTab] = useState<"albums" | "items">("albums");

  const albums = useQuery({
    queryKey: ["admin", "gallery_albums", "options"],
    queryFn: async () => {
      const { data } = await supabase
        .from("gallery_albums")
        .select("id,title")
        .order("sort_order", { ascending: true });
      return data ?? [];
    },
  });

  const itemsConfig = useMemo<ResourceConfig>(
    () => ({
      table: "gallery_items",
      title: "Gallery media",
      singular: "Media item",
      ordering: true,
      searchColumns: ["caption"],
      orderBy: [{ column: "sort_order", ascending: true }],
      fields: [
        { name: "url", label: "Image", type: "image", folder: "gallery", required: true },
        { name: "caption", label: "Caption", type: "text", inTable: true },
        {
          name: "media_type",
          label: "Media type",
          type: "select",
          options: ["image", "video"],
          inTable: true,
        },
        {
          name: "album_id",
          label: "Album",
          type: "select",
          options: (albums.data ?? []).map((a) => a.id),
          help: (albums.data ?? []).map((a) => `${a.title} → ${a.id.slice(0, 8)}`).join(" | "),
          inTable: true,
        },
        { name: "published", label: "Published", type: "boolean", inTable: true },
        { name: "sort_order", label: "Sort order", type: "number" },
      ],
    }),
    [albums.data],
  );

  return (
    <div className="space-y-5">
      <div className="inline-flex rounded-md border border-border bg-card p-1">
        {(["albums", "items"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              "rounded px-4 py-1.5 text-sm font-medium capitalize",
              tab === t ? "bg-primary text-primary-foreground" : "text-muted-foreground",
            )}
          >
            {t === "albums" ? "Albums" : "Media"}
          </button>
        ))}
      </div>
      <ResourceManager config={tab === "albums" ? galleryAlbumsConfig : itemsConfig} />
    </div>
  );
}
