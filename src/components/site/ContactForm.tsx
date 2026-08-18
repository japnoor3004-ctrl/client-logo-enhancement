import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { submitContact } from "@/lib/cms/forms.functions";
import { useLang } from "@/contexts/language";

const SUBJECTS = [
  { en: "General Enquiry", ar: "استفسار عام" },
  { en: "Project Collaboration", ar: "التعاون في المشاريع" },
  { en: "Partnership Opportunity", ar: "فرصة شراكة" },
  { en: "Procurement & Supply", ar: "المشتريات والتوريد" },
  { en: "Careers & Recruitment", ar: "الوظائف والتوظيف" },
  { en: "HSE & Certifications", ar: "الصحة والسلامة والشهادات" },
  { en: "Media & Communications", ar: "الإعلام والاتصالات" },
  { en: "Other", ar: "أخرى" },
] as const;

const FIELDS = [
  { key: "name", en: "Name", ar: "الاسم", type: "text", required: true },
  { key: "company", en: "Company", ar: "الشركة", type: "text" },
  { key: "email", en: "Email", ar: "البريد الإلكتروني", type: "email", required: true },
  { key: "phone", en: "Phone", ar: "الهاتف", type: "tel" },
] as const;

const t = {
  heading: { en: "Send us a message", ar: "أرسل لنا رسالة" },
  subheading: {
    en: "Fill in the form below and our team will get back to you promptly.",
    ar: "املأ النموذج أدناه وسيتواصل معك فريقنا في أقرب وقت.",
  },
  namePlaceholder: { en: "Your full name", ar: "اسمك الكامل" },
  companyPlaceholder: { en: "Company name", ar: "اسم الشركة" },
  emailPlaceholder: { en: "you@company.com", ar: "you@company.com" },
  phonePlaceholder: { en: "+968 XXXX XXXX", ar: "+968 XXXX XXXX" },
  subject: { en: "Subject", ar: "الموضوع" },
  selectSubject: { en: "Select a subject…", ar: "اختر موضوعاً…" },
  message: { en: "Message", ar: "الرسالة" },
  messagePlaceholder: { en: "Tell us about your enquiry…", ar: "أخبرنا عن استفسارك…" },
  sending: { en: "Sending…", ar: "جارٍ الإرسال…" },
  send: { en: "Send message", ar: "إرسال الرسالة" },
  success: {
    en: "Thank you — our team will be in touch shortly.",
    ar: "شكراً لك — سيتواصل معك فريقنا قريباً.",
  },
  errorGeneric: {
    en: "Please check your details and try again.",
    ar: "يرجى التحقق من بياناتك والمحاولة مرة أخرى.",
  },
};

const inputClass =
  "mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30";

export function ContactForm({ source = "contact" }: { source?: string }) {
  const { isArabic } = useLang();
  const [values, setValues] = useState<Record<string, string>>({});

  const mutation = useMutation({
    mutationFn: async () =>
      submitContact({
        data: {
          name: values.name ?? "",
          email: values.email ?? "",
          phone: values.phone ?? "",
          company: values.company ?? "",
          subject: values.subject ?? "",
          message: values.message ?? "",
          source,
        },
      }),
    onSuccess: () => {
      toast.success(isArabic ? t.success.ar : t.success.en);
      setValues({});
    },
    onError: (error: Error) =>
      toast.error(
        error.message.includes("Too many") ? error.message : isArabic ? t.errorGeneric.ar : t.errorGeneric.en,
      ),
  });

  return (
    <form
      className="rounded-xl border border-border bg-card p-7 shadow-soft"
      onSubmit={(e) => {
        e.preventDefault();
        mutation.mutate();
      }}
    >
      <h2 className="text-xl font-bold text-primary">{isArabic ? t.heading.ar : t.heading.en}</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        {isArabic ? t.subheading.ar : t.subheading.en}
      </p>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {FIELDS.map((field) => (
          <label key={field.key} className="block text-sm font-medium">
            {isArabic ? field.ar : field.en}
            <input
              type={field.type}
              required={"required" in field && field.required}
              maxLength={255}
              placeholder={
                field.key === "name"
                  ? isArabic
                    ? t.namePlaceholder.ar
                    : t.namePlaceholder.en
                  : field.key === "company"
                    ? isArabic
                      ? t.companyPlaceholder.ar
                      : t.companyPlaceholder.en
                    : field.key === "email"
                      ? isArabic
                        ? t.emailPlaceholder.ar
                        : t.emailPlaceholder.en
                      : isArabic
                        ? t.phonePlaceholder.ar
                        : t.phonePlaceholder.en
              }
              value={values[field.key] ?? ""}
              onChange={(e) => setValues((p) => ({ ...p, [field.key]: e.target.value }))}
              className={inputClass}
            />
          </label>
        ))}
      </div>
      <label className="mt-5 block text-sm font-medium">
        {isArabic ? t.subject.ar : t.subject.en}
        <select
          value={values.subject ?? ""}
          onChange={(e) => setValues((p) => ({ ...p, subject: e.target.value }))}
          className={inputClass}
        >
          <option value="">{isArabic ? t.selectSubject.ar : t.selectSubject.en}</option>
          {SUBJECTS.map((s) => (
            <option key={s.en} value={s.en}>
              {isArabic ? s.ar : s.en}
            </option>
          ))}
        </select>
      </label>
      <label className="mt-5 block text-sm font-medium">
        {isArabic ? t.message.ar : t.message.en} <span className="text-destructive">*</span>
        <textarea
          rows={6}
          required
          minLength={10}
          maxLength={4000}
          placeholder={isArabic ? t.messagePlaceholder.ar : t.messagePlaceholder.en}
          value={values.message ?? ""}
          onChange={(e) => setValues((p) => ({ ...p, message: e.target.value }))}
          className={inputClass}
        />
      </label>
      <button
        type="submit"
        disabled={mutation.isPending}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-250 hover:bg-accent-strong disabled:opacity-60 md:w-auto"
      >
        {mutation.isPending && <Loader2 className="size-4 animate-spin" />}
        {mutation.isPending ? (isArabic ? t.sending.ar : t.sending.en) : isArabic ? t.send.ar : t.send.en}
      </button>
    </form>
  );
}
