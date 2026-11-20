import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LearningPath } from "@/components/LearningPath";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { alternates } from "@/i18n/metadata";

export async function generateMetadata({ params }: PageProps<"/[lang]/belajar">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang).learn;
  return { title: t.metaTitle, description: t.metaDescription, alternates: alternates("/belajar", lang) };
}

export default async function BelajarPage({ params }: PageProps<"/[lang]/belajar">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang).learn;

  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <h1 className="text-6xl sm:text-7xl">{t.title}</h1>
      <p className="mt-5 max-w-2xl text-lg text-ink/85">{t.intro}</p>
      <div className="mt-12">
        <LearningPath lang={lang} />
      </div>
    </div>
  );
}
