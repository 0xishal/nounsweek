import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Quiz } from "@/components/Quiz";
import { getModule, getModules, modules } from "@/data/modules";
import { hasLocale, path } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { alternates } from "@/i18n/metadata";
import { moduleBg } from "@/lib/colors";

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/belajar/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const m = getModule(slug, lang);
  return m ? { title: m.title, description: m.short, alternates: alternates(`/belajar/${slug}`, lang) } : {};
}

export default async function ModulePage({ params }: PageProps<"/[lang]/belajar/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const m = getModule(slug, lang);
  if (!m) notFound();
  const t = getDictionary(lang).learn;

  const list = getModules(lang);
  const idx = list.findIndex((x) => x.slug === m.slug);
  const prev = list[idx - 1];
  const next = list[idx + 1];

  return (
    <article>
      <header className={`border-b-[3px] border-ink ${moduleBg[m.color]}`}>
        <div className="mx-auto max-w-3xl px-5 py-14">
          <Link href={path("/belajar", lang)} className="underline underline-offset-4">{t.title}</Link>
          <p className="mt-6 font-display text-2xl">{t.step(idx + 1, list.length)}</p>
          <h1 className="mt-1 text-6xl sm:text-7xl">{m.title}</h1>
          <p className="mt-4 max-w-xl text-lg opacity-90">{m.short}</p>
          <p className="mt-2 text-sm opacity-75">{t.minutes(m.minutes)}</p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 py-14">
        {m.sections.map((s) => (
          <section key={s.heading} className="mb-12">
            <h2 className="text-4xl">{s.heading}</h2>
            <div className="prose-nw mt-4 text-ink/90">
              {s.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </section>
        ))}

        <aside className="mb-12 rounded-md border-[3px] border-ink bg-sun p-6 shadow-[var(--shadow-block)]">
          <h2 className="text-3xl">{t.analogy}</h2>
          <p className="mt-2">{m.analogy}</p>
        </aside>

        <section className="mb-14">
          <h2 className="text-4xl">{t.takeaways}</h2>
          <ul className="mt-4 space-y-2">
            {m.takeaways.map((k) => (
              <li key={k} className="flex gap-3">
                <span aria-hidden className="mt-2 h-3 w-3 shrink-0 bg-noggle" />
                <span>{k}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-md border-[3px] border-ink bg-paper p-6 sm:p-8">
          <h2 className="text-4xl">{t.quizTitle}</h2>
          <p className="mt-2 mb-6 text-ink/70">{t.quizIntro}</p>
          <Quiz lang={lang} items={m.quiz} />
        </section>

        <nav aria-label={t.otherModules} className="mt-14 grid gap-4 sm:grid-cols-2">
          {prev ? (
            <Link href={path(`/belajar/${prev.slug}`, lang)} className="rounded-md border-[3px] border-ink bg-paper p-4 hover:bg-warm">
              <span className="text-sm text-ink/60">{t.prev}</span>
              <span className="block font-display text-2xl">{prev.title}</span>
            </Link>
          ) : <span />}
          {next ? (
            <Link href={path(`/belajar/${next.slug}`, lang)} className="rounded-md border-[3px] border-ink bg-ink p-4 text-cool sm:text-right">
              <span className="text-sm text-cool/70">{t.nextStep(idx + 2)}</span>
              <span className="block font-display text-2xl">{next.title}</span>
            </Link>
          ) : (
            <Link href={path("/kegiatan", lang)} className="rounded-md border-[3px] border-ink bg-ink p-4 text-cool sm:text-right">
              <span className="text-sm text-cool/70">{t.finished}</span>
              <span className="block font-display text-2xl">{t.joinActivities}</span>
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
