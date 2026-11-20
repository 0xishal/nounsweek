"use client";

import { useState } from "react";
import { drivePhoto, driveVideoEmbed } from "@/data/documentation";
import { Noggles } from "./Noggles";

type Props = { id: string; title: string; subtitle?: string; className?: string; fill?: boolean };

// Video dari Drive. Awalnya hanya thumbnail (ringan); pemutar dimuat saat diklik.
export function VideoCard({ id, title, subtitle, className = "", fill = false }: Props) {
  const [playing, setPlaying] = useState(false);
  const [thumbFailed, setThumbFailed] = useState(false);

  return (
    <figure className={`overflow-hidden rounded-md border-[3px] border-ink bg-ink ${fill ? "flex h-full flex-col" : ""} ${className}`}>
      <div className={`relative ${fill ? "aspect-video lg:aspect-auto lg:min-h-0 lg:flex-1" : "aspect-video"}`}>
        {playing ? (
          <iframe
            src={driveVideoEmbed(id)}
            title={title}
            allow="autoplay; fullscreen"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button type="button" onClick={() => setPlaying(true)} className="group absolute inset-0 block w-full" aria-label={`Putar video: ${title}`}>
            {thumbFailed ? (
              <span className="absolute inset-0 flex items-center justify-center bg-grape">
                <Noggles className="w-1/3" />
              </span>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={drivePhoto(id, 960)}
                alt=""
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={() => setThumbFailed(true)}
                className="absolute inset-0 h-full w-full object-cover opacity-85 transition-opacity group-hover:opacity-100"
              />
            )}
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-ink bg-sun shadow-[var(--shadow-chip)] transition-transform group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" aria-hidden>
                <path d="M7 4.5v15l12-7.5-12-7.5Z" fill="currentColor" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <figcaption className="border-t-[3px] border-ink bg-paper px-4 py-2.5">
        <span className="block font-bold">{title}</span>
        {subtitle && <span className="block text-sm text-ink/65">{subtitle}</span>}
      </figcaption>
    </figure>
  );
}
