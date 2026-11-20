import Link from "next/link";
import { SiteLogo } from "./SiteLogo";
import { InstagramIcon, SOCIALS, XIcon } from "./SocialIcons";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-ink text-cool">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <SiteLogo className="h-12" />
          <p className="mt-4 max-w-sm text-cool/80">
            Nounsweek mengajak mahasiswa dan remaja Indonesia memahami Web3 dari dasar, dengan bahasa yang gampang dan cara yang aman.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl">Jelajahi</h2>
          <ul className="mt-3 space-y-1.5">
            <li><Link className="hover:text-sun" href="/belajar">Jalur belajar</Link></li>
            <li><Link className="hover:text-sun" href="/kegiatan">Kegiatan & dokumentasi</Link></li>
            <li><Link className="hover:text-sun" href="/kamus">Kamus Web3</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl">Ikuti kami</h2>
          <ul className="mt-3 space-y-2">
            <li>
              <a className="flex items-center gap-2 hover:text-sun" href={SOCIALS.instagram.href} target="_blank" rel="noreferrer">
                <InstagramIcon className="h-5 w-5" /> @nounsweek di Instagram
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 hover:text-sun" href={SOCIALS.x.href} target="_blank" rel="noreferrer">
                <XIcon className="h-4 w-5" /> @nounsweek di X
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cool/20">
        <p className="mx-auto max-w-6xl px-5 py-5 text-sm text-cool/60">
          Materi di situs ini untuk edukasi, bukan saran investasi. Karya seni Nouns berlisensi CC0. ⌐◨-◨
        </p>
      </div>
    </footer>
  );
}
