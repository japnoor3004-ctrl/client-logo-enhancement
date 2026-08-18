import { createFileRoute, Link, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import {
  LayoutDashboard,
  Building2,
  Newspaper,
  Briefcase,
  Inbox,
  Package,
  Award,
  Images,
  Users,
  BarChart3,
  Mail,
  Search,
  LogOut,
  Menu,
  ShieldAlert,
  Factory,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useStaff } from "@/lib/admin/auth";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/admin")({
  component: AdminLayout,
});

const NAV = [
  { to: "/admin", label: "Overview", icon: LayoutDashboard, exact: true },
  { to: "/admin/companies", label: "Group companies", icon: Factory },
  { to: "/admin/projects", label: "Projects", icon: Building2 },
  { to: "/admin/products", label: "Products & services", icon: Package },
  { to: "/admin/news", label: "News & media", icon: Newspaper },
  { to: "/admin/careers", label: "Careers", icon: Briefcase },
  { to: "/admin/applications", label: "Applications", icon: Inbox },
  { to: "/admin/certificates", label: "Certificates", icon: Award },
  { to: "/admin/gallery", label: "Gallery (media)", icon: Images },
  { to: "/admin/clients", label: "Client logos", icon: Users },
  { to: "/admin/stats", label: "Statistics", icon: BarChart3 },
  { to: "/admin/enquiries", label: "Enquiries", icon: Mail },
  { to: "/admin/seo", label: "SEO", icon: Search },
] as const satisfies readonly {
  to: string;
  label: string;
  icon: typeof LayoutDashboard;
  exact?: boolean;
}[];

function AdminLayout() {
  const { isStaff, isLoading, session } = useStaff();
  const navigate = useNavigate();
  const qc = useQueryClient();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [openNav, setOpenNav] = useState(false);

  async function signOut() {
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", search: { redirect: "/admin" }, replace: true });
  }

  if (isLoading) {
    return <div className="p-10 text-sm text-muted-foreground">Loading workspace…</div>;
  }

  if (!isStaff) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-md rounded-xl border border-border bg-card p-8 text-center shadow-soft">
          <ShieldAlert className="mx-auto size-8 text-destructive" />
          <h1 className="mt-4 text-lg font-bold">No workspace access</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            This account ({session?.email}) has no content role assigned. Ask a group administrator
            to grant you access.
          </p>
          <button
            onClick={signOut}
            className="mt-5 rounded-md border border-input px-4 py-2 text-sm font-medium"
          >
            Sign out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/25">
      <div className="mx-auto flex max-w-[1500px] gap-6 px-4 py-6 lg:px-8">
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-40 w-64 shrink-0 overflow-y-auto border-r border-border bg-card p-4 transition-transform lg:static lg:z-auto lg:translate-x-0 lg:rounded-xl lg:border lg:shadow-soft",
            openNav ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="px-2 pb-4">
            <p className="eyebrow text-primary">Towell Engineering</p>
            <p className="text-sm font-bold">Content workspace</p>
          </div>
          <nav className="space-y-0.5">
            {NAV.map((item) => {
              const active =
                "exact" in item && item.exact ? pathname === item.to : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpenNav(false)}
                  className={cn(
                    "flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                  )}
                >
                  <item.icon className="size-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-6 border-t border-border pt-4">
            <p className="px-3 text-xs text-muted-foreground">{session?.email}</p>
            <button
              onClick={signOut}
              className="mt-2 flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              <LogOut className="size-4" /> Sign out
            </button>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <button
            onClick={() => setOpenNav((v) => !v)}
            className="mb-4 inline-flex items-center gap-2 rounded-md border border-input bg-card px-3 py-2 text-sm font-medium lg:hidden"
          >
            <Menu className="size-4" /> Menu
          </button>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
