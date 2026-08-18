import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Lang = "en" | "ar";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  isArabic: boolean;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("teg-lang") as Lang) || "en";
    }
    return "en";
  });

  const dir: "ltr" | "rtl" = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    localStorage.setItem("teg-lang", lang);
    // Arabic is a right-to-left script: mirror the layout so headings,
    // lists and punctuation read correctly instead of appearing reversed.
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [lang, dir]);

  const setLang = (l: Lang) => setLangState(l);
  const toggleLang = () => setLangState((p) => (p === "en" ? "ar" : "en"));

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        isArabic: lang === "ar",
        dir,
      }}
    >

      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider");
  return ctx;
}

/* ─── Translation helpers ─── */

export type TranslationSet = { en: string; ar: string };

export function t(translations: TranslationSet, lang: Lang): string {
  return translations[lang] || translations.en;
}
