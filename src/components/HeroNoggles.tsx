"use client";

import { useEffect, useRef, useState } from "react";
import { Noggles } from "./Noggles";

const COLORS = [
  { name: "merah", value: "#d22209" },
  { name: "biru", value: "#2b83f6" },
  { name: "kuning", value: "#fec22f" },
  { name: "hijau", value: "#4bb543" },
  { name: "ungu", value: "#9c5bd6" },
  { name: "hitam", value: "#1f1d29" },
];

// Noggles besar di hero: pupilnya melirik ke arah kursor, klik untuk ganti warna.
export function HeroNoggles() {
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

  const next = COLORS[(i + 1) % COLORS.length];

  return (
    <div className="flex flex-col items-start gap-3">
      <button
        ref={ref}
        type="button"
        onClick={() => setI((v) => (v + 1) % COLORS.length)}
        aria-label={`Ganti warna noggles ke ${next.name}`}
        className="w-full cursor-pointer rounded-md"
      >
        <Noggles color={COLORS[i].value} look={look} className="w-full drop-shadow-[8px_8px_0_var(--color-ink)]" />
      </button>
      <p className="text-sm text-ink/70">Klik noggles untuk ganti warna. Semua karya Nouns bebas dipakai (CC0).</p>
    </div>
  );
}
