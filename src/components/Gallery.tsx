"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { drivePhoto } from "@/data/documentation";
import { DrivePhoto } from "./DrivePhoto";

type Props = { photos: string[]; title: string; posterIds?: string[] };

export function Gallery({ photos, title, posterIds = [] }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const show = (i: number) => {
    setOpen(i);
    dialog.current?.showModal();
  };
  const close = useCallback(() => {
    dialog.current?.close();
    setOpen(null);
  }, []);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  return (
    <>
      <ul className="columns-2 gap-3 sm:columns-3 lg:columns-4 [&>li]:mb-3">
        {photos.map((id, i) => (
          <li key={id + i} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => show(i)}
              className="block w-full overflow-hidden rounded-md border-[3px] border-ink bg-warm"
              aria-label={`Perbesar foto ${i + 1} dari ${photos.length}`}
            >
              <DrivePhoto
                id={id}
                alt={`${title}, foto ${i + 1}`}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className={`block w-full ${posterIds.includes(id) ? "h-auto" : "aspect-[4/3] object-cover"} transition-transform duration-300 hover:scale-[1.03]`}
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === dialog.current && close()}
        className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-ink/90"
        aria-label={`Galeri ${title}`}
      >
        {open !== null && (
          <figure className="flex h-[100dvh] w-screen flex-col items-center justify-center gap-3 p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={drivePhoto(photos[open], 2000)}
              alt={`${title}, foto ${open + 1}`}
              referrerPolicy="no-referrer"
              className="max-h-[80dvh] max-w-full rounded-md border-[3px] border-paper object-contain"
            />
            <figcaption className="flex items-center gap-3 text-paper">
              <button type="button" className="btn bg-paper text-ink" onClick={() => step(-1)}>Sebelumnya</button>
              <span className="min-w-20 text-center font-display text-2xl">{open + 1}/{photos.length}</span>
              <button type="button" className="btn bg-paper text-ink" onClick={() => step(1)}>Berikutnya</button>
              <button type="button" className="btn bg-sun text-ink" onClick={close}>Tutup</button>
            </figcaption>
          </figure>
        )}
      </dialog>
    </>
  );
}
