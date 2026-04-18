"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { publicImage, SITE_IMAGES } from "@/lib/site-images";

const PHONE = "095441420";
const EMAIL = "info@legalplatform.am";
const ADDRESS = "Թումանյան 23, Վան բիզնես շենք, Երևան";

export default function ContactPage() {
  const { locale } = useLanguage();
  const t = translations[locale].contact;

  return (
    <main className="bg-[#f0f3f9]">
      <section className="relative h-[min(42vh,360px)] overflow-hidden">
        <Image
          src={publicImage(SITE_IMAGES.responsibility)}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0f2747]/90 to-[#1d3d67]/50"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-4 pb-8 md:items-center md:pb-0">
          <h1 className="text-3xl font-semibold text-white md:text-4xl">
            {t.title}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <dl className="overflow-hidden rounded-2xl border border-[#d8deea] bg-white shadow-sm">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="relative hidden min-h-[220px] md:block">
              <Image
                src={publicImage(SITE_IMAGES.personalApproach)}
                alt=""
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div className="space-y-5 p-6 md:p-8">
              <div>
                <dt className="text-sm font-medium text-gray-500">{t.phone}</dt>
                <dd className="mt-1 text-lg text-gray-900">{PHONE}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">{t.email}</dt>
                <dd className="mt-1 text-lg text-gray-900">
                  <a href={`mailto:${EMAIL}`} className="text-[#1d3d67] hover:underline">
                    {EMAIL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">{t.address}</dt>
                <dd className="mt-1 text-gray-900">{ADDRESS}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">{t.hours}</dt>
                <dd className="mt-1 text-gray-900">{t.hoursValue}</dd>
              </div>
            </div>
          </div>
        </dl>
      </div>
    </main>
  );
}
