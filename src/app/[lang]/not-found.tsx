"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Noggles } from "@/components/Noggles";
import { path } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

// not-found tidak menerima params, jadi bahasa dibaca dari URL.
export default function NotFound() {
  const lang = /^\/en(\/|$)/.test(usePathname() ?? "") ? "en" : "id";
  const t = getDictionary(lang).notFound;
  return (
    <div className="mx-auto flex max-w-xl flex-col items-start px-5 py-24">
      <Noggles className="w-48" look={-1} />
      <h1 className="mt-8 text-6xl">{t.title}</h1>
      <p className="mt-4 text-lg text-ink/85">{t.body}</p>
      <Link href={path("/belajar", lang)} className="btn mt-8 bg-noggle text-paper">{t.cta}</Link>
    </div>
  );
}
