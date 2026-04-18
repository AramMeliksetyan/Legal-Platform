"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { publicImage, SITE_IMAGES } from "@/lib/site-images";

const NEWS_IMAGES = [
  SITE_IMAGES.tax,
  SITE_IMAGES.business,
  SITE_IMAGES.court,
] as const;

export default function NewsPage() {
  const { locale } = useLanguage();
  const t = translations[locale];
  const updates = [
    {
      title: "Օրենսդրական փոփոխություններ",
      text: "Ներկայացվում են ընթացիկ իրավական փոփոխությունները և դրանց ազդեցությունը բիզնեսի ու ֆիզիկական անձանց վրա։",
    },
    {
      title: "Մեր ձեռքբերումները",
      text: "Կիսվում ենք հաջողված գործերով, կարևոր հաղթանակներով և թիմային արդյունքներով։",
    },
    {
      title: "Վիդեո և մեդիա նյութեր",
      text: "Էջում կարելի է տեղադրել վիդեոռոլիկներ, նկարներ և վերլուծական տեքստեր՝ հաճախորդների իրազեկվածությունը բարձրացնելու համար։",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="text-3xl font-semibold text-[#10233f] md:text-4xl">
        {t.pages.news}
      </h1>
      <p className="mt-3 max-w-2xl text-gray-600">
        Այս էջը նախատեսված է ընթացիկ հաջողություններով կիսվելու և օրենսդրական նոր փոփոխությունները ներկայացնելու համար։
      </p>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {updates.map((item, i) => (
          <article
            key={item.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-[#d8deea] bg-white shadow-sm transition hover:shadow-lg"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={publicImage(NEWS_IMAGES[i])}
                alt=""
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0f2747]/55 to-transparent"
                aria-hidden
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h2 className="text-lg font-semibold text-[#173862]">{item.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-700">
                {item.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
