"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { publicImage, SITE_IMAGES } from "@/lib/site-images";

export default function ValuesPage() {
  const { locale } = useLanguage();
  const t = translations[locale];
  const values = [
    {
      id: "professionalism",
      title: "Պրոֆեսիոնալիզմ",
      short: "Պատասխանատու մոտեցում, բարձր որակ և էթիկական վարք։",
      image: SITE_IMAGES.professionalism,
      bullets: [
        "Գործող օրենսդրությանը տիրապետում և իրավական փոփոխությունների շարունակական հետևում",
        "Պատասխանատվություն և կարգապահություն",
        "Յուրաքանչյուր հանձնարարության կատարում սահմանված ժամկետներում՝ բարձր որակի պահպանմամբ",
        "Գաղտնիության ապահովում և հաճախորդի տվյալների պաշտպանություն",
        "Օբյեկտիվ և անկախ վերլուծություն՝ հիմնված փաստերի և օրենքի վրա",
        "Էթիկական բարձր չափանիշներ և պրոֆեսիոնալ հաղորդակցություն",
      ],
    },
    {
      id: "responsibility",
      title: "Պատասխանատվություն",
      short: "Ճշտապահ և վստահելի իրավական ուղեկցում յուրաքանչյուր փուլում։",
      image: SITE_IMAGES.responsibility,
      bullets: [
        "Մասնագիտական ճշտապահություն՝ օրենքի պահանջներին համապատասխան",
        "Վստահելիություն և լիարժեք գաղտնիություն",
        "Ժամանակին և որակյալ ծառայություն՝ անկախ գործի բարդությունից",
      ],
    },
    {
      id: "trust",
      title: "Վստահելիություն",
      short: "Ազնիվ ու երկարաժամկետ համագործակցություն հաճախորդների հետ։",
      image: SITE_IMAGES.trustworthiness,
      bullets: [
        "Կայունություն և հետևողականություն մեր գործողություններում",
        "Գաղտնիության բացարձակ պահպանում",
        "Բարձր պրոֆեսիոնալ ստանդարտների պահպանում՝ անկախ գործի բնույթից",
      ],
    },
    {
      id: "efficiency",
      title: "Արդյունավետություն",
      short: "Ճիշտ լուծումներ՝ նվազագույն ռիսկերով և չափելի արդյունքով։",
      image: SITE_IMAGES.business,
      bullets: [
        "Խնդրի խորքային վերլուծություն և ժամանակի խնայողություն",
        "Իրավական ճշգրիտ ռազմավարություն, որը բերում է չափելի արդյունքների",
        "Օպերատիվ արձագանք և հստակ կազմակերպված աշխատանքային գործընթաց",
      ],
    },
    {
      id: "personal",
      title: "Անհատական մոտեցում",
      short: "Յուրաքանչյուր հաճախորդի խնդրին՝ հատուկ ռազմավարություն։",
      image: SITE_IMAGES.personalApproach,
      bullets: [
        "Ուշադիր լսել, հասկանալ և գնահատել հաճախորդի իրական կարիքը",
        "Անհատականացված իրավական ռազմավարություն՝ ոչ թե պատրաստ ձևանմուշ",
        "Անհատական աջակցություն ամբողջ իրավական գործընթացում",
        "Ջերմ, հասանելի և վստահելի հաղորդակցություն",
      ],
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-[#10233f]">{t.pages.values}</h1>
      <p className="mt-3 text-gray-600">
        Յուրաքանչյուր արժեքի քարտի վրա սեղմելով կտեսնեք, թե ինչ է այն նշանակում մեզ համար։
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {values.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="rounded-xl border border-[#d8deea] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative mb-3 h-32 overflow-hidden rounded-lg">
              <Image
                src={publicImage(item.image)}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h2 className="text-lg font-semibold text-[#173862]">{item.title}</h2>
            <p className="mt-2 text-sm text-gray-600">{item.short}</p>
          </a>
        ))}
      </div>
      <div className="mt-10 space-y-10">
        {values.map((item, index) => (
          <section
            id={item.id}
            key={item.id}
            className="overflow-hidden rounded-2xl border border-[#d8deea] bg-white shadow-sm"
          >
            <div className="grid gap-0 md:grid-cols-2">
              <div
                className={`relative aspect-[16/11] min-h-[200px] md:min-h-[260px] ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={publicImage(item.image)}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0f2747]/50 to-transparent"
                  aria-hidden
                />
              </div>
              <div
                className={`flex flex-col justify-center p-6 md:p-8 ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <h3 className="text-xl font-semibold text-[#10233f] md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-700">
                  Ի՞նչ է նշանակում {item.title}ը մեզ համար՝
                </p>
                <ul className="mt-4 space-y-2.5 text-gray-700">
                  {item.bullets.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed md:text-base">
                      <span
                        className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1d3d67]"
                        aria-hidden
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
