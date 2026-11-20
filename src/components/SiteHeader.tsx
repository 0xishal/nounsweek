"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SiteLogo } from "./SiteLogo";
import { InstagramIcon, SOCIALS, XIcon } from "./SocialIcons";

const NAV = [
  { href: "/belajar", label: "Belajar" },
  { href: "/kegiatan", label: "Kegiatan" },
  { href: "/kamus", label: "Kamus" },
];

export function SiteHeader() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b-[3px] border-ink bg-cool/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" aria-label="Nounsweek, ke beranda" onClick={() => setOpen(false)}>
          <SiteLogo />
        </Link>

        <div className="hidden items-center gap-6 sm:flex">
          <nav aria-label="Navigasi utama" className="flex items-center gap-1">
            {NAV.map((n) => {
              const active = path.startsWith(n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-md px-3 py-1.5 font-display text-xl ${active ? "bg-ink text-cool" : "hover:bg-warm"}`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2 border-l-[3px] border-ink pl-5">
            <a href={SOCIALS.instagram.href} target="_blank" rel="noreferrer" aria-label={SOCIALS.instagram.label} className="rounded-md p-1.5 hover:bg-warm">
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a href={SOCIALS.x.href} target="_blank" rel="noreferrer" aria-label={SOCIALS.x.label} className="rounded-md p-1.5 hover:bg-warm">
              <XIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <button
          type="button"
          className="rounded-md border-[3px] border-ink px-3 py-1 font-display text-lg sm:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Tutup" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="menu-mobile" aria-label="Navigasi mobile" className="border-t-[3px] border-ink sm:hidden">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b-2 border-ink/20 px-5 py-3 font-display text-2xl">
              {n.label}
            </Link>
          ))}
          <div className="flex gap-3 px-5 py-4">
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
