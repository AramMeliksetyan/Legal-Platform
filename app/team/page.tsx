"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { publicImage, SITE_IMAGES } from "@/lib/site-images";

export default function TeamPage() {
  const { locale } = useLanguage();
  const t = translations[locale];
  const team = [
    {
      id: "member-1",
      name: "Անդրանիկ Սարգսյան",
      role: "Գլխավոր փաստաբան",
      image: SITE_IMAGES.professionalism,
      bio: "Ունի բազմամյա փորձ քաղաքացիական և վարչական վեճերով դատական ներկայացուցչության ոլորտում։ Մասնագիտանում է բարդ իրավական գործերի ռազմավարական պլանավորման մեջ։",
    },
    {
      id: "member-2",
      name: "Մարիամ Հակոբյան",
      role: "Ավագ իրավաբան",
      image: SITE_IMAGES.family,
      bio: "Ներգրավված է ընտանեկան և աշխատանքային իրավունքի գործերում։ Առանձնանում է հաճախորդի հետ արդյունավետ հաղորդակցությամբ և յուրաքանչյուր հարցի մանրակրկիտ ուսումնասիրությամբ։",
    },
    {
      id: "member-3",
      name: "Աննա Մկրտչյան",
      role: "Կորպորատիվ իրավաբան",
      image: SITE_IMAGES.corporate,
      bio: "Ղեկավարում է իրավաբանական անձանց գրանցման, վերակազմակերպման և կորպորատիվ փաստաթղթերի մշակման գործընթացները։ Ապահովում է բիզնեսների իրավական կայուն աշխատանքը։",
    },
    {
      id: "member-4",
      name: "Գևորգ Պետրոսյան",
      role: "Դատական ներկայացուցիչ",
      image: SITE_IMAGES.court,
      bio: "Ներկայացնում է հաճախորդների շահերը մինչդատական և դատական փուլերում՝ ներառյալ բողոքարկումները բոլոր ատյաններում։ Կենտրոնանում է փաստարկված և արդյունքամետ պաշտպանության վրա։",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-[#10233f]">{t.pages.team}</h1>
      <p className="mt-3 text-gray-600">
        Անունների վրա սեղմելով կարող եք տեսնել թիմի անդամների կարճ կենսագրությունները։
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {team.map((m) => (
          <a key={m.id} href={`#${m.id}`} className="rounded-xl border border-[#d8deea] bg-white p-5 shadow-sm">
            <div className="relative mb-3 h-36 overflow-hidden rounded-lg">
              <Image
                src={publicImage(m.image)}
                alt={m.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h2 className="text-lg font-semibold text-[#173862]">{m.name}</h2>
            <p className="text-sm text-gray-500">{m.role}</p>
          </a>
        ))}
      </div>
      <div className="mt-10 space-y-4">
        {team.map((m) => (
          <section id={m.id} key={m.id} className="rounded-xl border border-[#d8deea] bg-white p-5 shadow-sm">
            <h3 className="text-xl font-semibold text-[#10233f]">{m.name}</h3>
            <p className="text-sm text-gray-500">{m.role}</p>
            <p className="mt-2 text-gray-700">{m.bio}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
