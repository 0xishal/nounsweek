"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { path, stripLang, switchPath, type Lang } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { SiteLogo } from "./SiteLogo";
import { InstagramIcon, SOCIALS, XIcon } from "./SocialIcons";

function LanguageSwitch({ lang, pathname, onNavigate }: { lang: Lang; pathname: string; onNavigate?: () => void }) {
  const t = getDictionary(lang);
  return (
    <div role="group" aria-label={t.nav.language} className="flex overflow-hidden rounded-md border-[3px] border-ink font-display text-lg leading-none">
      {(["id", "en"] as const).map((l) =>
        l === lang ? (
          <span key={l} aria-current="true" className="bg-ink px-2.5 py-1.5 text-cool">
            {l.toUpperCase()}
          </span>
        ) : (
          <Link
            key={l}
            href={switchPath(pathname, l)}
            hrefLang={l}
            lang={l}
            title={t.nav.switchTo}
            aria-label={t.nav.switchTo}
            onClick={onNavigate}
            className="bg-paper px-2.5 py-1.5 hover:bg-sun"
          >
            {l.toUpperCase()}
          </Link>
        ),
      )}
    </div>
  );
}

export function SiteHeader({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const t = getDictionary(lang);
  const bare = stripLang(pathname);

  const NAV = [
    { href: "/belajar", label: t.nav.learn },
    { href: "/kegiatan", label: t.nav.activities },
    { href: "/kamus", label: t.nav.glossary },
  ];

  return (
    <header className="sticky top-0 z-30 border-b-[3px] border-ink bg-cool/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href={path("/", lang)} aria-label={t.nav.home} onClick={() => setOpen(false)}>
          <SiteLogo className="h-10 sm:h-12" />
        </Link>

        <div className="hidden items-center gap-5 md:flex">
          <nav aria-label={t.nav.main} className="flex items-center gap-1">
            {NAV.map((n) => {
              const active = bare.startsWith(n.href);
              return (
                <Link
                  key={n.href}
                  href={path(n.href, lang)}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-md px-3 py-1.5 font-display text-xl ${active ? "bg-ink text-cool" : "hover:bg-warm"}`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-1 border-l-[3px] border-ink pl-4">
            <a href={SOCIALS.instagram.href} target="_blank" rel="noreferrer" aria-label={SOCIALS.instagram.label} className="rounded-md p-1.5 hover:bg-warm">
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a href={SOCIALS.x.href} target="_blank" rel="noreferrer" aria-label={SOCIALS.x.label} className="rounded-md p-1.5 hover:bg-warm">
              <XIcon className="h-5 w-5" />
            </a>
          </div>
          <LanguageSwitch lang={lang} pathname={pathname} />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitch lang={lang} pathname={pathname} onNavigate={() => setOpen(false)} />
          <button
            type="button"
            className="rounded-md border-[3px] border-ink px-3 py-1 font-display text-lg"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? t.nav.close : t.nav.menu}
          </button>
        </div>
      </div>
      {open && (
        <nav id="menu-mobile" aria-label={t.nav.mobile} className="border-t-[3px] border-ink md:hidden">
          {NAV.map((n) => (
            <Link key={n.href} href={path(n.href, lang)} onClick={() => setOpen(false)} className="block border-b-2 border-ink/20 px-5 py-3 font-display text-2xl">
              {n.label}
            </Link>
          ))}
          <div className="flex gap-5 px-5 py-4">
            <a href={SOCIALS.instagram.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-bold">
              <InstagramIcon className="h-6 w-6" /> Instagram
            </a>
            <a href={SOCIALS.x.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-bold">
              <XIcon className="h-5 w-5" /> X
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
