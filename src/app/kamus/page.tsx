import type { Metadata } from "next";
import { GlossaryList } from "@/components/GlossaryList";

export const metadata: Metadata = {
  title: "Kamus Web3",
  description: "Arti istilah Web3, crypto, dan blockchain dalam bahasa Indonesia yang sederhana.",
};

export default function KamusPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <h1 className="text-6xl sm:text-7xl">Kamus Web3</h1>
      <p className="mt-5 max-w-2xl text-lg text-ink/85">
        Lebih dari 70 istilah Web3, crypto, dan blockchain, masing-masing dijelaskan dalam satu atau dua kalimat. Simpan halaman ini untuk dibuka lagi kapan saja.
      </p>
      <div className="mt-10">
        <GlossaryList />
      </div>
    </div>
  );
}
