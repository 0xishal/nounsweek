import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Quiz } from "@/components/Quiz";
import { getModule, modules } from "@/data/modules";
import { moduleBg } from "@/lib/colors";

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps<"/belajar/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const m = getModule(slug);
  return m ? { title: m.title, description: m.short } : {};
}

export default async function ModulePage({ params }: PageProps<"/belajar/[slug]">) {
  const { slug } = await params;
  const m = getModule(slug);
  if (!m) notFound();

  const idx = modules.findIndex((x) => x.slug === m.slug);
  const prev = modules[idx - 1];
  const next = modules[idx + 1];

  return (
    <article>
      <header className={`border-b-[3px] border-ink ${moduleBg[m.color]}`}>
        <div className="mx-auto max-w-3xl px-5 py-14">
          <Link href="/belajar" className="underline underline-offset-4">Jalur belajar</Link>
          <p className="mt-6 font-display text-2xl">Langkah {idx + 1} dari {modules.length}</p>
          <h1 className="mt-1 text-6xl sm:text-7xl">{m.title}</h1>
          <p className="mt-4 max-w-xl text-lg opacity-90">{m.short}</p>
          <p className="mt-2 text-sm opacity-75">{m.minutes} menit baca</p>
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
          <h2 className="text-3xl">Gampangnya begini</h2>
          <p className="mt-2">{m.analogy}</p>
        </aside>

        <section className="mb-14">
          <h2 className="text-4xl">Yang perlu kamu ingat</h2>
          <ul className="mt-4 space-y-2">
            {m.takeaways.map((t) => (
              <li key={t} className="flex gap-3">
                <span aria-hidden className="mt-2 h-3 w-3 shrink-0 bg-noggle" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-md border-[3px] border-ink bg-paper p-6 sm:p-8">
          <h2 className="text-4xl">Cek pemahaman</h2>
          <p className="mt-2 mb-6 text-ink/70">Tiga pertanyaan. Pilih satu jawaban, penjelasannya langsung muncul.</p>
          <Quiz items={m.quiz} />
        </section>

        <nav aria-label="Modul lain" className="mt-14 grid gap-4 sm:grid-cols-2">
          {prev ? (
            <Link href={`/belajar/${prev.slug}`} className="rounded-md border-[3px] border-ink bg-paper p-4 hover:bg-warm">
              <span className="text-sm text-ink/60">Sebelumnya</span>
              <span className="block font-display text-2xl">{prev.title}</span>
            </Link>
          ) : <span />}
          {next ? (
            <Link href={`/belajar/${next.slug}`} className="rounded-md border-[3px] border-ink bg-ink p-4 text-cool sm:text-right">
              <span className="text-sm text-cool/70">Lanjut ke langkah {idx + 2}</span>
              <span className="block font-display text-2xl">{next.title}</span>
            </Link>
          ) : (
            <Link href="/kegiatan" className="rounded-md border-[3px] border-ink bg-ink p-4 text-cool sm:text-right">
              <span className="text-sm text-cool/70">Kamu sudah menyelesaikan semua modul</span>
              <span className="block font-display text-2xl">Ikut kegiatan Nounsweek</span>
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
