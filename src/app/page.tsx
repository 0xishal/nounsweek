import Link from "next/link";
import { HeroNoggles } from "@/components/HeroNoggles";
import { LearningPath } from "@/components/LearningPath";
import { events, years } from "@/data/events";
import { glossary } from "@/data/glossary";
import { eventColor } from "@/lib/colors";

export default function Home() {
  const latest = [...events].reverse().slice(0, 3);
  const totalAttendees = events.reduce((s, e) => s + (e.attendees ?? 0), 0);
  const cities = new Set(events.flatMap((e) => e.city.split(",").map((c) => c.trim()))).size;
  const highlightTerms = glossary.filter((t) => ["Seed phrase", "Gas fee", "DAO", "Rug pull"].includes(t.term));

  return (
    <>
      {/* HERO */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 md:grid-cols-[1.15fr_1fr] md:pt-20">
        <div>
          <h1 className="text-[3.4rem] sm:text-7xl lg:text-[5.5rem]">
            Web3 itu bisa dipelajari. Mulai dari nol, bareng teman.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/85">
            Nounsweek adalah komunitas edukasi untuk mahasiswa dan remaja Indonesia. Kami menjelaskan blockchain, crypto, wallet, dan DAO tanpa istilah yang bikin pusing, dan tanpa janji cepat kaya.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/belajar" className="btn bg-noggle text-paper">Mulai belajar</Link>
            <Link href="/kegiatan" className="btn bg-paper">Lihat kegiatan kami</Link>
          </div>
        </div>
        <HeroNoggles />
      </section>

      {/* FAKTA SINGKAT */}
      <section className="border-y-[3px] border-ink bg-sun">
        <dl className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:grid-cols-3">
          <div>
            <dt className="text-ink/75">Modul belajar gratis</dt>
            <dd className="font-display text-5xl">7 langkah</dd>
          </div>
          <div>
            <dt className="text-ink/75">Kegiatan sejak 2023</dt>
            <dd className="font-display text-5xl">{events.length} acara, {cities} kota</dd>
          </div>
          <div>
            <dt className="text-ink/75">Peserta yang sudah ikut</dt>
            <dd className="font-display text-5xl">{totalAttendees.toLocaleString("id-ID")}+</dd>
          </div>
        </dl>
      </section>

      {/* JALUR BELAJAR */}
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1.4fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-5xl sm:text-6xl">Satu jalur, tujuh langkah</h2>
          <p className="mt-5 max-w-md text-ink/85">
            Setiap modul bisa dibaca sekitar 7 menit: penjelasan, perumpamaan sehari-hari, ringkasan, lalu kuis kecil untuk mengecek pemahamanmu. Urutannya disusun dari yang paling dasar.
          </p>
          <Link href="/belajar/apa-itu-web3" className="btn mt-7 bg-sky text-paper">Buka modul pertama</Link>
        </div>
        <LearningPath />
      </section>

      {/* KEGIATAN */}
      <section className="border-y-[3px] border-ink bg-warm">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-5xl sm:text-6xl">Bukan cuma online</h2>
              <p className="mt-4 max-w-xl text-ink/85">
                Dari kelas kampus sampai hackathon, kami turun langsung ke banyak kota sejak 2023.
              </p>
            </div>
            <nav aria-label="Kegiatan per tahun" className="flex flex-wrap gap-2">
              {years.map((y) => (
                <Link key={y} href={`/kegiatan#tahun-${y}`} className="rounded-md border-[3px] border-ink bg-paper px-3 py-1 font-display text-2xl hover:bg-sun">
                  {y}
                </Link>
              ))}
            </nav>
          </div>

          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {latest.map((e, i) => (
              <li
                key={e.id}
                className={`flex flex-col overflow-hidden rounded-md border-[3px] border-ink bg-paper ${i === 0 ? "shadow-[var(--shadow-block)] md:col-span-1" : ""}`}
              >
                <div className={`flex h-36 items-end justify-between border-b-[3px] border-ink p-4 ${eventColor[e.type]}`}>
                  <span className="font-display text-6xl leading-none">{e.year}</span>
                  <span className="rounded bg-paper px-2 py-0.5 text-sm font-bold">{e.type}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm text-ink/60">{e.date}, {e.city}</p>
                  <h3 className="mt-2 text-3xl">{e.title}</h3>
                  <p className="mt-2 text-ink/80">{e.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link href="/kegiatan" className="btn mt-10 bg-ink text-cool">Semua kegiatan 2023–2026</Link>
        </div>
      </section>

      {/* KAMUS */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-5xl sm:text-6xl">Bingung istilah?</h2>
        <p className="mt-4 max-w-xl text-ink/85">Beberapa kata yang paling sering bikin orang baru bingung. Lengkapnya ada di kamus.</p>
        <dl className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {highlightTerms.map((t) => (
            <div key={t.term} className="border-l-[6px] border-noggle pl-5">
              <dt className="font-display text-3xl">{t.term}</dt>
              <dd className="mt-1 max-w-prose text-ink/85">{t.meaning}</dd>
            </div>
          ))}
        </dl>
        <Link href="/kamus" className="btn mt-10 bg-paper">Buka kamus Web3</Link>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 rounded-md border-[3px] border-ink bg-noggle p-8 text-paper shadow-[var(--shadow-block)] sm:p-12 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-5xl">Mau Nounsweek datang ke kampus atau sekolahmu?</h2>
            <p className="mt-3 max-w-xl text-paper/90">Kami terbuka untuk kolaborasi kelas tamu, workshop, dan acara komunitas.</p>
          </div>
          <a href="mailto:halo@nounsweek.xyz" className="btn shrink-0 bg-sun text-ink">Ajak kolaborasi</a>
        </div>
      </section>
    </>
  );
}
