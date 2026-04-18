"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function CorporateClientsPage() {
  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-2xl font-semibold text-gray-900">
        {t.pages.corporateClients}
      </h1>
      <p className="mt-6 text-gray-700 leading-relaxed">
        {locale === "hy" &&
          "Ընկերությունների անունները կտրամադրվեն։"}
        {locale === "ru" &&
          "Названия компаний будут предоставлены."}
        {locale === "en" &&
          "Company names will be provided."}
      </p>
    </main>
  );
}
