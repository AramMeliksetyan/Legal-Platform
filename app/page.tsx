"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations, type Locale } from "@/lib/translations";
import { publicImage, SITE_IMAGES } from "@/lib/site-images";

const SECTION_DEFS = [
  {
    href: "/about",
    image: SITE_IMAGES.professionalism,
  },
  {
    href: "/values",
    image: SITE_IMAGES.trustworthiness,
  },
  {
    href: "/team",
    image: SITE_IMAGES.personalApproach,
  },
  {
    href: "/services",
    image: SITE_IMAGES.corporate,
  },
  {
    href: "/news",
    image: SITE_IMAGES.business,
  },
  {
    href: "/contact",
    image: SITE_IMAGES.responsibility,
  },
] as const;

const SECTION_COPY: Record<
  Locale,
  { title: string; text: string; cta: string }[]
> = {
  hy: [
    {
      title: "Ընկերություն / Մեր մասին",
      text: "Վստահելի իրավաբանական միջավայր և բարձրակարգ մասնագիտական աջակցություն։",
      cta: "Տեսնել",
    },
    {
      title: "Մեր արժեքները",
      text: "Պրոֆեսիոնալիզմ, պատասխանատվություն, վստահելիություն և անհատական մոտեցում։",
      cta: "Տեսնել",
    },
    {
      title: "Մեր թիմը",
      text: "Փորձառու փաստաբաններ՝ կարգապահ և մանրակրկիտ աշխատանքով։",
      cta: "Տեսնել",
    },
    {
      title: "Ծառայություններ",
      text: "Կորպորատիվ, քաղաքացիական, հարկային, ընտանեկան և դատական ներկայացուցչություն։",
      cta: "Տեսնել",
    },
    {
      title: "Նորություններ",
      text: "Օրենսդրական թարմացումներ, հաջողություններ և մասնագիտական նյութեր։",
      cta: "Տեսնել",
    },
    {
      title: "Կապ",
      text: "Հասցե, հեռախոս և աշխատանքային ժամեր՝ արագ կապի համար։",
      cta: "Տեսնել",
    },
  ],
  ru: [
    {
      title: "Компания / О нас",
      text: "Надёжная юридическая среда и профессиональная поддержка.",
      cta: "Подробнее",
    },
    {
      title: "Ценности",
      text: "Профессионализм, ответственность, надёжность и индивидуальный подход.",
      cta: "Подробнее",
    },
    {
      title: "Команда",
      text: "Опытные юристы — дисциплинированная и внимательная работа.",
      cta: "Подробнее",
    },
    {
      title: "Услуги",
      text: "Корпоративное, гражданское, налоговое, семейное право и судебное представительство.",
      cta: "Подробнее",
    },
    {
      title: "Новости",
      text: "Законодательные обновления, успехи и экспертные материалы.",
      cta: "Подробнее",
    },
    {
      title: "Контакты",
      text: "Адрес, телефон и часы работы для быстрой связи.",
      cta: "Подробнее",
    },
  ],
  en: [
    {
      title: "Company / About",
      text: "A trusted legal environment and high-quality professional support.",
      cta: "View",
    },
    {
      title: "Our values",
      text: "Professionalism, responsibility, reliability and a personal approach.",
      cta: "View",
    },
    {
      title: "Our team",
      text: "Experienced lawyers — disciplined, thorough work on every matter.",
      cta: "View",
    },
    {
      title: "Services",
      text: "Corporate, civil, tax, family law and court representation.",
      cta: "View",
    },
    {
      title: "News",
      text: "Legislative updates, wins and professional insights.",
      cta: "View",
    },
    {
      title: "Contact",
      text: "Address, phone and office hours for a quick response.",
      cta: "View",
    },
  ],
};

const SERVICE_PREVIEW = [
  {
    id: "corporate-law" as const,
    image: SITE_IMAGES.corporate,
    titles: { hy: "Կորպորատիվ", ru: "Корпоративное", en: "Corporate" },
  },
  {
    id: "civil-law" as const,
    image: SITE_IMAGES.civil,
    titles: { hy: "Քաղաքացիական", ru: "Гражданское", en: "Civil" },
  },
  {
    id: "tax-law" as const,
    image: SITE_IMAGES.tax,
    titles: { hy: "Հարկային", ru: "Налоговое", en: "Tax" },
  },
  {
    id: "court-representation" as const,
    image: SITE_IMAGES.court,
    titles: { hy: "Դատական", ru: "Судебное", en: "Litigation" },
  },
];

export default function Home() {
  const { locale } = useLanguage();
  const { home } = translations[locale];
  const sections = SECTION_DEFS.map((def, i) => ({
    ...def,
    ...SECTION_COPY[locale][i],
  }));

  return (
    <div className="bg-[#f0f3f9]">
      <section className="relative min-h-[min(88vh,920px)] overflow-hidden">
        <Image
          src={publicImage(SITE_IMAGES.corporate)}
          alt={home.heroImageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#071525]/95 via-[#0f2747]/82 to-[#1d3d67]/35"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex min-h-[min(88vh,920px)] max-w-7xl flex-col justify-center px-4 py-24 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-200/95">
            {home.heroKicker}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.12] text-white md:text-5xl lg:text-[3.25rem]">
            {home.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-blue-100/95 md:text-xl">
            {home.heroSubtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#0f2747] shadow-lg transition hover:bg-blue-50"
            >
              {home.ctaContact}
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              {home.ctaServices}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d8deea] bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:py-16">
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1d3d67]">
              {home.statExpertise}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              {home.statExpertiseDesc}
            </p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1d3d67]">
              {home.statApproach}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              {home.statApproachDesc}
            </p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1d3d67]">
              {home.statResults}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              {home.statResultsDesc}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_24px_60px_-20px_rgba(15,39,71,0.35)] lg:aspect-[5/4]">
            <Image
              src={publicImage(SITE_IMAGES.professionalism)}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0f2747]/55 to-transparent"
              aria-hidden
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#10233f] md:text-3xl">
              {home.title}
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              {home.hero.map((paragraph, i) => (
                <p key={i} className="text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8deea] bg-white py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-[#10233f] md:text-3xl">
                {home.servicesPreviewTitle}
              </h2>
              <p className="mt-2 text-sm text-gray-600 md:text-base">
                {home.servicesPreviewHint}
              </p>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold text-[#1d3d67] underline-offset-4 hover:underline"
            >
              {home.ctaServices} →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_PREVIEW.map((item) => (
              <Link
                key={item.id}
                href={`/services#${item.id}`}
                className="group relative overflow-hidden rounded-2xl border border-[#e2e8f3] bg-[#f8fafc] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={publicImage(item.image)}
                    alt={item.titles[locale]}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-[#0a1628]/15 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-base font-semibold text-white drop-shadow">
                      {item.titles[locale]}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-[#10233f] md:text-3xl">
              {home.exploreTitle}
            </h2>
            <p className="mt-2 text-sm text-gray-600 md:text-base">
              {home.exploreHint}
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#d8deea] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={publicImage(section.image)}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2747]/75 via-transparent to-transparent opacity-90 transition group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-[#173862]">
                  {section.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {section.text}
                </p>
                <span className="mt-5 inline-flex items-center text-sm font-semibold text-[#1d3d67]">
                  {section.cta}
                  <span className="ml-1 transition group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0f2747] py-16 md:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #3b6fb8 0%, transparent 45%), radial-gradient(circle at 80% 60%, #1d3d67 0%, transparent 40%)",
          }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl text-2xl font-semibold text-white md:text-3xl">
            {home.ctaTitle}
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#0f2747] shadow-lg transition hover:bg-blue-50"
            >
              {home.ctaContact}
            </Link>
            <Link
              href="/services"
              className="inline-flex rounded-full border border-white/35 bg-transparent px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {home.ctaServices}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
