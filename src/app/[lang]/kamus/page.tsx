import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GlossaryList } from "@/components/GlossaryList";
import { getGlossary } from "@/data/glossary";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { alternates } from "@/i18n/metadata";

export async function generateMetadata({ params }: PageProps<"/[lang]/kamus">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang).glossary;
  return { title: t.metaTitle, description: t.metaDescription, alternates: alternates("/kamus", lang) };
}

export default async function KamusPage({ params }: PageProps<"/[lang]/kamus">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang).glossary;

  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <h1 className="text-6xl sm:text-7xl">{t.title}</h1>
      <p className="mt-5 max-w-2xl text-lg text-ink/85">{t.intro(getGlossary(lang).length)}</p>
      <div className="mt-10">
        <GlossaryList lang={lang} />
      </div>
    </div>
  );
}
