import Link from "next/link";
import { Noggles } from "@/components/Noggles";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-start px-5 py-24">
      <Noggles className="w-48" look={-1} />
      <h1 className="mt-8 text-6xl">Halaman ini tidak ada</h1>
      <p className="mt-4 text-lg text-ink/85">Mungkin link-nya salah ketik atau halamannya sudah dipindah. Coba mulai dari jalur belajar.</p>
      <Link href="/belajar" className="btn mt-8 bg-noggle text-paper">Buka jalur belajar</Link>
    </div>
  );
}
