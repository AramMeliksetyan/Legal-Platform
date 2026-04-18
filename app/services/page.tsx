"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { publicImage, SITE_IMAGES } from "@/lib/site-images";

export default function ServicesPage() {
  const { locale } = useLanguage();
  const t = translations[locale];
  const services = [
    {
      id: "corporate-law",
      title: "Կորպորատիվ իրավունք",
      image: SITE_IMAGES.corporate,
      items: [
        "Առևտրային և ոչ առևտրային իրավաբանական անձանց գրանցում",
        "Փոփոխությունների գրանցում, օտարում, վերակազմակերպում և լուծարման գործընթացի իրավական ուղեկցում",
        "Բաժնետերերի իրավունքների իրացման հարցերով խորհրդատվություն",
        "Կորպորատիվ իրավաբանական փաստաթղթերի կազմում",
      ],
    },
    {
      id: "civil-law",
      title: "Քաղաքացիական իրավունք",
      image: SITE_IMAGES.civil,
      items: [
        "Պայմանագրերի կազմում և մշակում",
        "Գույքային վեճեր",
        "Պարտավորական իրավահարաբերություններից բխող վեճեր",
        "Դատարանում ներկայացուցչություն",
      ],
    },
    {
      id: "tax-law",
      title: "Հարկային իրավունք",
      image: SITE_IMAGES.tax,
      items: [
        "Հարկային ռիսկերի բացահայտում և գնահատում",
        "Հարկային մարմինների հետ իրավահարաբերություններում ներկայացուցչություն",
        "Վարչական ակտերի բողոքարկում և վիճարկում վարչական ու դատական կարգով",
        "Հարկային մարմինների հայցերով շահերի պաշտպանություն դատարանում",
      ],
    },
    {
      id: "family-law",
      title: "Ընտանեկան իրավունք",
      image: SITE_IMAGES.family,
      items: [
        "Ամուսնալուծություն",
        "Ալիմենտի որոշում և վերանայում",
        "Երեխայի խնամքի և տեսակցության խնդիրներ",
        "Ամուսնական պայմանագրերի կազմում",
      ],
    },
    {
      id: "administrative-law",
      title: "Վարչական իրավունք",
      image: SITE_IMAGES.trustworthiness,
      items: [
        "Վարչական ակտերի բողոքարկում",
        "Տուգանքների վիճարկում",
        "Պետական մարմինների հետ վեճեր",
        "Վարչական վարույթում ներկայացուցչություն",
      ],
    },
    {
      id: "business-support",
      title: "Գործարար իրավունք / Բիզնեսների իրավաբանական սպասարկում",
      image: SITE_IMAGES.business,
      items: [
        "Ընկերությունների գրանցում",
        "Պայմանագրերի կազմում և դիտարկում",
        "Մշտական իրավաբանական սպասարկում",
        "Բիզնես գործընթացների իրավական ուղեկցում",
      ],
    },
    {
      id: "court-representation",
      title: "Դատական ներկայացուցչություն",
      image: SITE_IMAGES.court,
      items: [
        "Մինչդատական կարգավորում",
        "Քաղաքացիական, տնտեսական և վարչական վեճերի լուծում",
        "Բողոքարկումներ դատական բոլոր ատյաններում",
        "Կատարողական վարույթի ընթացքում անհրաժեշտ գործողությունների իրականացում",
      ],
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-[#10233f]">{t.pages.services}</h1>
      <p className="mt-3 text-gray-600">
        Քարտերի վրա սեղմելով կարող եք տեսնել յուրաքանչյուր ծառայության մանրամասները։
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <a
            key={service.id}
            href={`#${service.id}`}
            className="rounded-xl border border-[#d8deea] bg-white p-5 text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative mb-3 h-28 overflow-hidden rounded-lg">
              <Image
                src={publicImage(service.image)}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h2 className="text-lg font-semibold text-[#173862]">{service.title}</h2>
            <p className="mt-2 text-sm text-gray-600">Տեսնել ծառայության ամբողջական նկարագրությունը</p>
          </a>
        ))}
      </div>
      <div className="mt-10 space-y-10">
        {services.map((service, index) => (
          <section
            id={service.id}
            key={service.id}
            className="overflow-hidden rounded-2xl border border-[#d8deea] bg-white shadow-sm"
          >
            <div className="grid gap-0 md:grid-cols-2">
              <div
                className={`relative aspect-[16/11] min-h-[220px] md:aspect-auto md:min-h-[280px] ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={publicImage(service.image)}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-[#0f2747]/45 to-transparent md:bg-gradient-to-t"
                  aria-hidden
                />
              </div>
              <div
                className={`flex flex-col justify-center p-6 md:p-8 lg:p-10 ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <h3 className="text-xl font-semibold text-[#10233f] md:text-2xl">
                  {service.title}
                </h3>
                <ul className="mt-4 space-y-2.5 text-gray-700">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed md:text-base">
                      <span
                        className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1d3d67]"
                        aria-hidden
                      />
                      <span>{item}</span>
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
