import type { Metadata } from "next";
import { EventTimeline } from "@/components/EventTimeline";

export const metadata: Metadata = {
  title: "Kegiatan 2023–2026",
  description: "Jejak kegiatan Nounsweek: workshop, kelas kampus, meetup, dan hackathon sejak 2023.",
};

export default function KegiatanPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <h1 className="text-6xl sm:text-7xl">Kegiatan kami</h1>
      <p className="mt-5 max-w-2xl text-lg text-ink/85">
        Sejak 2023 kami belajar bareng ribuan anak muda di kampus, sekolah, dan ruang komunitas. Pilih jenis kegiatan untuk menyaring daftarnya.
      </p>
      <div className="mt-10">
        <EventTimeline />
      </div>
    </div>
  );
}
