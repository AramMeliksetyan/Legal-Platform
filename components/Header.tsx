"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import type { Locale } from "@/lib/translations";

/** Matches section `id`s on `/services`. */
const SERVICE_NAV_SUB = [
  { key: "serviceCorporateLaw" as const, hash: "corporate-law" },
  { key: "serviceCivilLaw" as const, hash: "civil-law" },
  { key: "serviceTaxLaw" as const, hash: "tax-law" },
  { key: "serviceFamilyLaw" as const, hash: "family-law" },
  { key: "serviceAdministrativeLaw" as const, hash: "administrative-law" },
  { key: "serviceBusinessLaw" as const, hash: "business-support" },
  { key: "serviceCourtRepresentation" as const, hash: "court-representation" },
] as const;

const NAV = [
  { key: "aboutUs" as const, href: "/about", sub: null },
  { key: "ourValues" as const, href: "/values", sub: null },
  { key: "ourTeam" as const, href: "/team", sub: null },
  {
    key: "services" as const,
    href: "/services",
    sub: SERVICE_NAV_SUB.map((s) => ({
      key: s.key,
      href: `/services#${s.hash}`,
    })),
  },
  { key: "news" as const, href: "/news", sub: null },
  { key: "contact" as const, href: "/contact", sub: null },
] as const;

function linkIsActive(pathname: string, routeHash: string, href: string): boolean {
  const hashIdx = href.indexOf("#");
  if (hashIdx === -1) return pathname === href;
  const path = href.slice(0, hashIdx);
  const fragment = href.slice(hashIdx);
  return pathname === path && routeHash === fragment;
}

function navLinkClass(active: boolean) {
  return active
    ? "font-medium text-gray-900 underline underline-offset-2"
    : "text-gray-600 hover:text-gray-900";
}

function NavContent({
  t,
  pathname,
  routeHash,
  onLinkClick,
  isMobile,
}: {
  t: (typeof translations)[Locale]["nav"];
  pathname: string;
  routeHash: string;
  onLinkClick?: () => void;
  isMobile?: boolean;
}) {
  return (
    <>
      {NAV.map((item) => {
        if (item.sub) {
          if (!item.href) return null;
          const parentHref = item.href;
          const parentActive = pathname === parentHref.split("#")[0];

          const parentEl = (
            <Link
              href={parentHref}
              onClick={onLinkClick}
              className={`text-sm ${navLinkClass(parentActive)}`}
            >
              {t[item.key]}
            </Link>
          );

          return (
            <div
              key={item.key}
              className={isMobile ? "flex flex-col gap-2" : "group relative py-1"}
            >
              {parentEl}
              {isMobile ? (
                <div className="flex flex-col gap-1.5 border-l border-gray-200 pl-3">
                  {item.sub.map((s) => {
                    const active = linkIsActive(pathname, routeHash, s.href);
                    return (
                      <Link
                        key={s.key}
                        href={s.href}
                        onClick={onLinkClick}
                        className={`text-sm ${navLinkClass(active)}`}
                      >
                        {t[s.key]}
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div
                  className="invisible absolute left-0 top-full z-50 mt-0 flex min-w-[min(100vw-2rem,18rem)] max-w-[20rem] flex-col rounded-lg border border-gray-200 bg-white py-2 shadow-lg opacity-0 transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
                  role="menu"
                >
                  {item.sub.map((s) => {
                    const active = linkIsActive(pathname, routeHash, s.href);
                    return (
                      <Link
                        key={s.key}
                        href={s.href}
                        onClick={onLinkClick}
                        className={`block px-4 py-2 text-sm ${active ? "bg-blue-50 font-medium text-gray-900" : "text-gray-700 hover:bg-gray-50"}`}
                      >
                        {t[s.key]}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        }
        if (!item.href) return null;
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.key}
            href={item.href}
            onClick={onLinkClick}
            className={navLinkClass(isActive)}
          >
            {t[item.key]}
          </Link>
        );
      })}
    </>
  );
}

export function Header() {
  const pathname = usePathname();
  const { locale } = useLanguage();
  const t = translations[locale].nav;
  const [menuOpen, setMenuOpen] = useState(false);
  const [routeHash, setRouteHash] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const readHash = () => {
      if (typeof window === "undefined") return;
      setRouteHash(window.location.hash);
    };
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("click", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  return (
    <header className="border-b border-[#d8deea] bg-white/95 backdrop-blur" ref={menuRef}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <Link
          href="/"
          className="text-xl font-semibold text-[#10233f] hover:text-[#173862]"
        >
          {locale === "hy" ? "Լեգալ Պլատֆորմ" : "Legal Platform"}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          <NavContent
            t={t}
            pathname={pathname}
            routeHash={routeHash}
          />
        </nav>

        {/* Burger button */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="flex h-10 w-10 flex-shrink-0 flex-col items-center justify-center gap-1.5 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 lg:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Փակել մենյու" : "Բացել մենյու"}
        >
          <span
            className={`h-0.5 w-5 bg-current transition-all ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-current transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-current transition-all ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu overlay + panel */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          menuOpen ? "visible" : "invisible"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Փակել"
        />
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm overflow-y-auto border-l border-gray-200 bg-white shadow-xl transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col gap-6 p-6 pt-20">
            <NavContent
              t={t}
              pathname={pathname}
              routeHash={routeHash}
              onLinkClick={() => setMenuOpen(false)}
              isMobile
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
