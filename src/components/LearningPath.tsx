import Link from "next/link";
import { modules } from "@/data/modules";
import { moduleBg } from "@/lib/colors";

// Jalur belajar berurutan: angka level di sini memang menandai urutan.
export function LearningPath({ compact = false }: { compact?: boolean }) {
  return (
    <ol className="relative grid gap-5">
      <span aria-hidden className="absolute bottom-6 left-[1.9rem] top-6 w-[3px] bg-ink" />
      {modules.map((m, idx) => (
        <li key={m.slug} className="relative">
          <Link
            href={`/belajar/${m.slug}`}
            className="group flex items-stretch gap-4"
          >
            <span
              className={`relative z-10 flex h-[3.9rem] w-[3.9rem] shrink-0 items-center justify-center rounded-md border-[3px] border-ink font-display text-3xl shadow-[3px_3px_0_0_var(--color-ink)] ${moduleBg[m.color]}`}
            >
              {idx + 1}
            </span>
            <span className="flex flex-1 flex-col justify-center rounded-md border-[3px] border-ink bg-paper px-5 py-3 transition-transform group-hover:-translate-y-0.5 group-hover:shadow-[var(--shadow-chip)]">
              <span className="flex flex-wrap items-baseline justify-between gap-x-4">
                <span className="font-display text-2xl sm:text-3xl">{m.title}</span>
                <span className="text-sm text-ink/60">{m.minutes} menit baca</span>
              </span>
              {!compact && <span className="mt-1 text-ink/80">{m.short}</span>}
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
