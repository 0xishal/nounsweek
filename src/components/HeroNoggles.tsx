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

// Noggles interaktif: pupil melirik ke arah kursor, klik untuk ganti warna.
export function HeroNoggles({ className = "" }: { className?: string }) {
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
    <button
      ref={ref}
      type="button"
      onClick={() => setI((v) => (v + 1) % COLORS.length)}
      aria-label={`Ganti warna noggles ke ${next.name}`}
      title="Klik untuk ganti warna"
      className={`cursor-pointer rounded-md ${className}`}
    >
      <Noggles color={COLORS[i].value} look={look} className="w-full drop-shadow-[6px_6px_0_var(--color-ink)]" />
    </button>
  );
}
