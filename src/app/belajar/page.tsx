import type { Metadata } from "next";
import { LearningPath } from "@/components/LearningPath";

export const metadata: Metadata = {
  title: "Belajar",
  description: "Tujuh modul dasar Web3, blockchain, dan crypto untuk pemula.",
};

export default function BelajarPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <h1 className="text-6xl sm:text-7xl">Jalur belajar</h1>
      <p className="mt-5 max-w-2xl text-lg text-ink/85">
        Mulai dari langkah 1 kalau kamu benar-benar baru. Sudah paham dasarnya? Lompat saja ke modul yang kamu butuhkan. Tidak perlu daftar, tidak perlu wallet.
      </p>
      <div className="mt-12">
        <LearningPath />
      </div>
    </div>
  );
}
