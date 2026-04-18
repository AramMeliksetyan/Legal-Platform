"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { publicImage, SITE_IMAGES } from "@/lib/site-images";

export default function AboutPage() {
  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <main className="bg-[#f0f3f9]">
      <section className="relative h-[min(52vh,420px)] overflow-hidden">
        <Image
          src={publicImage(SITE_IMAGES.civil)}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0f2747]/92 to-[#1d3d67]/55"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-4 pb-10 md:items-center md:pb-0">
          <h1 className="text-3xl font-semibold text-white md:text-4xl">
            {t.pages.about}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <div className="overflow-hidden rounded-2xl border border-[#d8deea] bg-white shadow-sm">
          <div className="grid gap-0 md:grid-cols-5">
            <div className="relative aspect-[4/3] min-h-[240px] md:col-span-2 md:aspect-auto md:min-h-0">
              <Image
                src={publicImage(SITE_IMAGES.trustworthiness)}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <div className="space-y-6 p-6 text-gray-700 md:col-span-3 md:p-10">
              <p className="leading-relaxed">
                Լեգալ Պլատֆորմի նպատակն է՝ ստեղծել հուսալի իրավաբանական միջավայր,
                որտեղ յուրաքանչյուր հաճախորդ ստանում է բարձրակարգ մասնագիտական
                աջակցություն։
              </p>
              <p className="leading-relaxed">
                Մեր գործունեության ընթացքում մենք հասցրել ենք ձևավորել վստահելի անուն
                և ձեռք բերել հաջողություններ բազմաթիվ ոլորտներում՝ քաղաքացիական,
                ընտանեկան, վարչական, աշխատանքային, կորպորատիվ, քրեական իրավունքի
                շրջանակներում։
              </p>
              <p className="leading-relaxed">
                Մեր թիմում ընդգրկված են փաստաբաններ, ովքեր ունեն խոր գիտելիքներ և
                փորձ, որը և ներդնում են ամենատարբեր իրավական խնդիրների լուծումներ
                գտնելիս։ Մեր իրավաբաններն առանձնանում են յուրաքանչյուր գործին արագ
                արձագանքելու ունակությամբ, կարգապահությամբ և մանրակրկիտ աշխատանքով։
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
