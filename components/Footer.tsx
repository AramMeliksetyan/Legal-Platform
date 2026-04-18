import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const PHONE = "095441420";
const EMAIL = "info@legalplatform.am";
const ADDRESS = "Թումանյան 23, Վան բիզնես շենք, Երևան";

export function Footer() {
  const { locale } = useLanguage();
  const tNav = translations[locale].nav;
  const tPages = translations[locale].pages;
  const tContact = translations[locale].contact;

  const brand =
    locale === "hy"
      ? "Լեգալ Պլատֆորմ"
      : "Legal Platform";

  return (
    <footer className="mt-16 border-t border-[#1f3f67] bg-[#10233f] text-sm text-blue-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2 md:max-w-xs">
          <div className="text-base font-semibold text-white">
            {brand}
          </div>
          <p className="text-xs text-blue-200">
            © {new Date().getFullYear()} {brand}. Բոլոր իրավունքները պաշտպանված են։
          </p>
        </div>

        <div className="grid flex-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-2">
        
            <nav className="flex flex-col gap-1">
              <Link href="/about" className="hover:text-white">
                {tPages.about}
              </Link>
              <Link href="/values" className="hover:text-white">
                {tPages.values}
              </Link>
              <Link href="/team" className="hover:text-white">
                {tPages.team}
              </Link>
            </nav>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wide text-blue-200">
              {tNav.services}
            </div>
            <nav className="flex flex-col gap-1">
              <Link href="/services" className="hover:text-white">
                {tPages.services}
              </Link>
              <Link href="/news" className="hover:text-white">
                {tPages.news}
              </Link>
              <Link href="/corporate-clients" className="hover:text-white">
                {tPages.corporateClients}
              </Link>
            </nav>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wide text-blue-200">
              {tNav.contact}
            </div>
            <dl className="space-y-1 text-sm">
              <div>
                <dt className="sr-only">{tContact.phone}</dt>
                <dd>{PHONE}</dd>
              </div>
              <div>
                <dt className="sr-only">{tContact.email}</dt>
                <dd>
                  <a href={`mailto:${EMAIL}`} className="hover:underline">
                    {EMAIL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">{tContact.address}</dt>
                <dd>{ADDRESS}</dd>
              </div>
              <div>
                <dt className="sr-only">{tContact.hours}</dt>
                <dd>{tContact.hoursValue}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </footer>
  );
}

