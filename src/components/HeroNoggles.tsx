"use client";

import { useEffect, useRef, useState } from "react";
import type { Lang } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { Noggles } from "./Noggles";

const COLORS = ["#d22209", "#2b83f6", "#fec22f", "#4bb543", "#9c5bd6", "#1f1d29"];

// Noggles interaktif: pupil melirik ke arah kursor, klik untuk ganti warna.
export function HeroNoggles({ lang, className = "" }: { lang: Lang; className?: string }) {
  const t = getDictionary(lang).noggles;
  const ref = useRef<HTMLButtonElement>(null);
  const [look, setLook] = useState<-1 | 1>(1);
  const [i, setI] = useState(0);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setLook(e.clientX < r.left + r.width / 2 ? -1 : 1);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const nextName = t.colors[(i + 1) % COLORS.length];

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => setI((v) => (v + 1) % COLORS.length)}
      aria-label={t.change(nextName)}
      title={t.hint}
      className={`cursor-pointer rounded-md ${className}`}
    >
      <Noggles color={COLORS[i]} look={look} className="w-full drop-shadow-[6px_6px_0_var(--color-ink)]" />
    </button>
  );
}
