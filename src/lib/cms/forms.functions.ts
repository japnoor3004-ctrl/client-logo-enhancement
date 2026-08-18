import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { publicClient } from "./media.server";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  subject: z.string().trim().max(160).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(4000),
  source: z.string().trim().max(40).default("contact"),
});

export type ContactInput = z.input<typeof contactSchema>;

async function tooFrequent(table: "contact_enquiries" | "job_applications", email: string) {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const since = new Date(Date.now() - 60_000).toISOString();
  const { count } = await supabaseAdmin
    .from(table)
    .select("id", { count: "exact", head: true })
    .eq("email", email)
    .gte("created_at", since);
  return (count ?? 0) >= 3;
}

export const submitContact = createServerFn({ method: "POST" })
  .validator((input: ContactInput) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    if (await tooFrequent("contact_enquiries", data.email)) {
      throw new Error("Too many submissions. Please try again in a minute.");
    }
    const { error } = await publicClient()
      .from("contact_enquiries")
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        company: data.company || null,
        subject: data.subject || null,
        message: data.message,
        source: data.source || "contact",
      });
    if (error) throw new Error("We could not send your message. Please try again.");
    return { ok: true };
  });

const applicationSchema = z.object({
  job_id: z.string().uuid().nullable().optional(),
  full_name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(3000).optional().or(z.literal("")),
  cv_url: z.string().trim().max(400).optional().or(z.literal("")),
});

export type ApplicationInput = z.input<typeof applicationSchema>;

export const submitApplication = createServerFn({ method: "POST" })
  .validator((input: ApplicationInput) => applicationSchema.parse(input))
  .handler(async ({ data }) => {
    if (await tooFrequent("job_applications", data.email)) {
      throw new Error("Too many submissions. Please try again in a minute.");
    }
    const { error } = await publicClient()
      .from("job_applications")
      .insert({
        job_id: data.job_id ?? null,
        full_name: data.full_name,
        email: data.email,
        phone: data.phone || null,
        message: data.message || null,
        cv_url: data.cv_url || null,
      });
    if (error) throw new Error("We could not submit your application. Please try again.");
    return { ok: true };
  });
