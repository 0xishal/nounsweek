"use client";

import { useState } from "react";
import { events, years, type EventType } from "@/data/events";
import { eventColor } from "@/lib/colors";

const TYPES: EventType[] = ["Workshop", "Meetup", "Kampus", "Hackathon", "Festival"];

export function EventTimeline() {
  const [type, setType] = useState<EventType | "Semua">("Semua");
  const shown = events.filter((e) => type === "Semua" || e.type === type);

  return (
    <div>
      <div role="group" aria-label="Filter jenis kegiatan" className="flex flex-wrap gap-2">
        {(["Semua", ...TYPES] as const).map((t) => (
          <button
            key={t}
            type="button"
            aria-pressed={type === t}
            onClick={() => setType(t)}
            className={`rounded-md border-[3px] border-ink px-3 py-1 font-display text-xl ${
              type === t ? "bg-ink text-cool" : "bg-paper hover:bg-warm"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-14 space-y-16">
        {years.map((y) => {
          const list = shown.filter((e) => e.year === y);
          return (
            <section key={y} id={`tahun-${y}`} className="grid scroll-mt-28 gap-6 md:grid-cols-[10rem_1fr]">
              <h2 className="font-display text-7xl md:sticky md:top-28 md:self-start">{y}</h2>
              {list.length === 0 ? (
                <p className="self-center text-ink/60">Belum ada kegiatan {type.toLowerCase()} di tahun ini.</p>
              ) : (
                <ol className="space-y-5 border-l-[3px] border-ink pl-6">
                  {list.map((e) => (
                    <li key={e.id} className="relative">
                      <span aria-hidden className={`absolute -left-[2.15rem] top-5 h-4 w-4 border-[3px] border-ink ${eventColor[e.type]}`} />
                      <article className="rounded-md border-[3px] border-ink bg-paper p-5">
                        {e.photo && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={e.photo} alt={e.title} className="mb-4 aspect-video w-full rounded border-2 border-ink object-cover" />
                        )}
                        <div className="flex flex-wrap items-center gap-2 text-sm">
                          <span className={`rounded px-2 py-0.5 font-bold ${eventColor[e.type]}`}>{e.type}</span>
                          <span className="text-ink/70">{e.date}</span>
                          <span className="text-ink/70">{e.city}</span>
                          {e.sample && (
                            <span className="rounded border border-dashed border-ink/50 px-2 py-0.5 text-ink/60">data contoh</span>
                          )}
                        </div>
                        <h3 className="mt-3 text-3xl">{e.title}</h3>
                        <p className="mt-2 max-w-prose text-ink/85">{e.description}</p>
                        {e.attendees && <p className="mt-3 text-sm font-bold">{e.attendees.toLocaleString("id-ID")} peserta</p>}
                        {e.link && (
                          <a href={e.link} target="_blank" rel="noreferrer" className="mt-3 inline-block underline underline-offset-4">
                            Lihat dokumentasi
                          </a>
                        )}
                      </article>
                    </li>
                  ))}
                </ol>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
