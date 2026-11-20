import Link from "next/link";
import { path, type Lang } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { SiteLogo } from "./SiteLogo";
import { InstagramIcon, SOCIALS, XIcon } from "./SocialIcons";

export function SiteFooter({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).footer;
  return (
    <footer className="mt-auto bg-ink text-cool">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <SiteLogo className="h-12" />
          <p className="mt-4 max-w-sm text-cool/80">{t.blurb}</p>
        </div>
        <div>
          <h2 className="font-display text-2xl">{t.explore}</h2>
          <ul className="mt-3 space-y-1.5">
            <li><Link className="hover:text-sun" href={path("/belajar", lang)}>{t.learningPath}</Link></li>
            <li><Link className="hover:text-sun" href={path("/kegiatan", lang)}>{t.activities}</Link></li>
            <li><Link className="hover:text-sun" href={path("/kamus", lang)}>{t.glossary}</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl">{t.follow}</h2>
          <ul className="mt-3 space-y-2">
            <li>
              <a className="flex items-center gap-2 hover:text-sun" href={SOCIALS.instagram.href} target="_blank" rel="noreferrer">
                <InstagramIcon className="h-5 w-5" /> {t.onInstagram}
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 hover:text-sun" href={SOCIALS.x.href} target="_blank" rel="noreferrer">
                <XIcon className="h-4 w-5" /> {t.onX}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cool/20">
        <p className="mx-auto max-w-6xl px-5 py-5 text-sm text-cool/60">{t.disclaimer} ⌐◨-◨</p>
      </div>
    </footer>
  );
}
