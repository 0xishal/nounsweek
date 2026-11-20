"use client";

import { useState } from "react";
import { glossary } from "@/data/glossary";

const letterOf = (term: string) => term[0].toUpperCase();

export function GlossaryList() {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();
  const list = glossary.filter(
    (t) => !query || t.term.toLowerCase().includes(query) || t.meaning.toLowerCase().includes(query),
  );

  const groups = new Map<string, typeof list>();
  for (const t of list) {
    const l = letterOf(t.term);
    groups.set(l, [...(groups.get(l) ?? []), t]);
  }
  const allLetters = [...new Set(glossary.map((t) => letterOf(t.term)))];

  return (
    <div>
      <label htmlFor="cari" className="font-display text-2xl">Cari istilah</label>
      <input
        id="cari"
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="contoh: gas fee"
        className="mt-2 block w-full rounded-md border-[3px] border-ink bg-paper px-4 py-3 text-lg shadow-[var(--shadow-chip)]"
      />

      <nav aria-label="Lompat ke huruf" className="mt-5 flex flex-wrap gap-1.5">
        {allLetters.map((l) =>
          groups.has(l) ? (
            <a key={l} href={`#huruf-${l}`} className="flex h-9 w-9 items-center justify-center rounded-md border-2 border-ink bg-paper font-display text-xl hover:bg-sun">
              {l}
            </a>
          ) : (
            <span key={l} aria-hidden className="flex h-9 w-9 items-center justify-center rounded-md border-2 border-ink/20 font-display text-xl text-ink/25">
              {l}
            </span>
          ),
        )}
      </nav>
      <p className="mt-4 text-sm text-ink/60" aria-live="polite">
        {query ? `${list.length} dari ${glossary.length} istilah` : `${glossary.length} istilah`}
      </p>

      {list.length === 0 ? (
        <p className="mt-8 rounded-md border-[3px] border-dashed border-ink p-6">
          Istilah &ldquo;{q}&rdquo; belum ada di kamus. Coba kata lain, atau tanyakan di kegiatan Nounsweek berikutnya.
        </p>
      ) : (
        <div className="mt-6 space-y-8">
          {[...groups].map(([letter, terms]) => (
            <section key={letter} id={`huruf-${letter}`} className="scroll-mt-24">
              <h2 className="font-display text-5xl text-noggle">{letter}</h2>
              <dl className="mt-3 divide-y-2 divide-ink/15 rounded-md border-[3px] border-ink bg-paper">
                {terms.map((t) => (
                  <div key={t.term} className="grid gap-1 px-5 py-4 sm:grid-cols-[13rem_1fr] sm:gap-6">
                    <dt className="font-display text-2xl">{t.term}</dt>
                    <dd className="text-ink/85">{t.meaning}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
