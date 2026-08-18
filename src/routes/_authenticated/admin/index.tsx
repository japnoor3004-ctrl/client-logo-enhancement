import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Building2, Briefcase, Inbox, Mail, Newspaper, Package, Award } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/admin/")({
  component: AdminOverview,
});

const CARDS = [
  { table: "projects", label: "Projects", to: "/admin/projects", icon: Building2 },
  { table: "products", label: "Products & services", to: "/admin/products", icon: Package },
  { table: "news", label: "News articles", to: "/admin/news", icon: Newspaper },
  { table: "jobs", label: "Open vacancies", to: "/admin/careers", icon: Briefcase },
  { table: "job_applications", label: "Applications", to: "/admin/applications", icon: Inbox },
  { table: "contact_enquiries", label: "Enquiries", to: "/admin/enquiries", icon: Mail },
  { table: "certificates", label: "Certificates", to: "/admin/certificates", icon: Award },
] as const;

function AdminOverview() {
  const counts = useQuery({
    queryKey: ["admin", "overview"],
    queryFn: async () => {
      const entries = await Promise.all(
        CARDS.map(async (c) => {
          const { count } = await supabase
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .from(c.table as any)
            .select("id", { count: "exact", head: true });
          return [c.table, count ?? 0] as const;
        }),
      );
      return Object.fromEntries(entries) as Record<string, number>;
    },
  });

  const recent = useQuery({
    queryKey: ["admin", "overview", "recent"],
    queryFn: async () => {
      const [enquiries, applications] = await Promise.all([
        supabase
          .from("contact_enquiries")
          .select("id,name,subject,created_at")
          .order("created_at", { ascending: false })
          .limit(5),
        supabase
          .from("job_applications")
          .select("id,full_name,status,created_at")
          .order("created_at", { ascending: false })
          .limit(5),
      ]);
      return { enquiries: enquiries.data ?? [], applications: applications.data ?? [] };
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Workspace overview</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Everything published on towellengineering.com is managed from here.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {CARDS.map((c) => (
          <Link
            key={c.table}
            to={c.to}
            className="rounded-xl border border-border bg-card p-4 shadow-soft transition-colors hover:border-primary"
          >
            <c.icon className="size-5 text-primary" />
            <p className="mt-3 text-2xl font-bold">{counts.data?.[c.table] ?? "—"}</p>
            <p className="text-sm text-muted-foreground">{c.label}</p>
          </Link>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="rounded-xl border border-border bg-card p-5 shadow-soft">
          <h2 className="text-sm font-bold tracking-wide uppercase">Latest enquiries</h2>
          <ul className="mt-3 divide-y divide-border text-sm">
            {(recent.data?.enquiries ?? []).map((e) => (
              <li key={e.id} className="flex justify-between gap-3 py-2">
                <span className="truncate font-medium">{e.name}</span>
                <span className="truncate text-muted-foreground">{e.subject ?? "General"}</span>
              </li>
            ))}
            {recent.data && recent.data.enquiries.length === 0 && (
              <li className="py-2 text-muted-foreground">No enquiries yet.</li>
            )}
          </ul>
        </section>
        <section className="rounded-xl border border-border bg-card p-5 shadow-soft">
          <h2 className="text-sm font-bold tracking-wide uppercase">Latest applications</h2>
          <ul className="mt-3 divide-y divide-border text-sm">
            {(recent.data?.applications ?? []).map((a) => (
              <li key={a.id} className="flex justify-between gap-3 py-2">
                <span className="truncate font-medium">{a.full_name}</span>
                <span className="text-muted-foreground">{a.status}</span>
              </li>
            ))}
            {recent.data && recent.data.applications.length === 0 && (
              <li className="py-2 text-muted-foreground">No applications yet.</li>
            )}
          </ul>
        </section>
      </div>
    </div>
  );
}
