import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export type AppRole = "admin" | "editor";

export type StaffSession = {
  userId: string | null;
  email: string | null;
  fullName: string | null;
  roles: AppRole[];
};

export const staffQueryOptions = {
  queryKey: ["staff-session"],
  queryFn: async (): Promise<StaffSession> => {
    const { data } = await supabase.auth.getUser();
    const user = data.user;
    if (!user) return { userId: null, email: null, fullName: null, roles: [] };
    const { data: roles } = await supabase.from("user_roles").select("role").eq("user_id", user.id);
    return {
      userId: user.id,
      email: user.email ?? null,
      fullName: (user.user_metadata?.full_name as string) ?? null,
      roles: (roles ?? []).map((r) => r.role as AppRole),
    };
  },
  staleTime: 30_000,
};

export function useStaff() {
  const query = useQuery(staffQueryOptions);
  const roles = query.data?.roles ?? [];
  return {
    ...query,
    session: query.data,
    isStaff: roles.length > 0,
    isAdmin: roles.includes("admin"),
    isEditor: roles.includes("editor"),
  };
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}
