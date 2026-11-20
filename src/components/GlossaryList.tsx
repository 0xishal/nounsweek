"use client";

import { useState } from "react";
import { glossary } from "@/data/glossary";

export function GlossaryList() {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();
  const list = glossary.filter(
    (t) => !query || t.term.toLowerCase().includes(query) || t.meaning.toLowerCase().includes(query),
  );

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
      <p className="mt-3 text-sm text-ink/60" aria-live="polite">{list.length} istilah</p>

      {list.length === 0 ? (
        <p className="mt-8 rounded-md border-[3px] border-dashed border-ink p-6">
          Istilah &ldquo;{q}&rdquo; belum ada di kamus. Coba kata lain, atau tanyakan di kegiatan Nounsweek berikutnya.
        </p>
      ) : (
        <dl className="mt-8 divide-y-2 divide-ink/15 rounded-md border-[3px] border-ink bg-paper">
          {list.map((t) => (
            <div key={t.term} className="grid gap-1 px-5 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6">
              <dt className="font-display text-2xl">{t.term}</dt>
              <dd className="text-ink/85">{t.meaning}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
