import Link from "next/link";
import { DrivePhoto } from "@/components/DrivePhoto";
import { HeroNoggles } from "@/components/HeroNoggles";
import { LearningPath } from "@/components/LearningPath";
import { InstagramIcon, SOCIALS, XIcon } from "@/components/SocialIcons";
import { VideoCard } from "@/components/VideoCard";
import { docFolders, getDocFolder } from "@/data/documentation";
import { glossary } from "@/data/glossary";
import { modules } from "@/data/modules";

export default function Home() {
  const bali = getDocFolder("bali-nounsweek-2024")!;
  const menyapa = getDocFolder("nounsweek-menyapa")!;
  const craft = getDocFolder("nounscraft")!;
  const funded = docFolders.filter((d) => d.category === "Proyek didanai");
  const activities = docFolders.filter((d) => d.category !== "Konsep").length;
  const media = docFolders.reduce((s, d) => s + d.photos.length + (d.videos?.length ?? 0), 0);
  const videos = docFolders.flatMap((d) => (d.videos ?? []).map((v) => ({ ...v, from: d.title })));
  const featuredIds = [
    "1oJg9IOSrP-bkr-KUZQy78VHQdbZ3vAQF", // Bali: "Seru banget, jadi tau apa itu Nouns"
    "182k9TE040IuPYNAZUqb0J9JHl2ZivREU", // Minggunouns edisi ketiga
    "14-F0xQjJOF8-isrKOXfwbpukgEKZtIKW", // Wawancara Nounscraft
  ];
  const featured = featuredIds.map((id) => videos.find((v) => v.id === id)!);
  const rest = videos.filter((v) => !featuredIds.includes(v.id));
  const highlightTerms = glossary.filter((t) => ["Seed phrase", "Gas fee", "DAO", "Rug pull"].includes(t.term));

  return (
    <>
      {/* HERO */}
      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-12 lg:grid-cols-[1.05fr_1fr] lg:pt-16">
          <div>
            <h1 className="text-[3.3rem] sm:text-7xl lg:text-[5.4rem]">
              Web3 itu bisa dipelajari. Mulai dari nol, bareng teman.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink/85">
              Nounsweek adalah komunitas edukasi untuk mahasiswa dan remaja Indonesia. Kami menjelaskan blockchain, crypto, wallet, dan DAO tanpa istilah yang bikin pusing, lalu mengajak kamu ikut berkarya di acara kami.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/belajar" className="btn bg-noggle text-paper">Mulai belajar</Link>
              <Link href="/kegiatan" className="btn bg-paper">Lihat kegiatan kami</Link>
            </div>
          </div>

          {/* Kolase foto dokumentasi asli + noggles interaktif */}
          <div className="relative mx-auto aspect-[5/4] w-full max-w-xl">
            <Link href={`/kegiatan/${bali.slug}`} className="absolute left-0 top-0 w-[68%] -rotate-2 overflow-hidden rounded-md border-[3px] border-ink bg-warm shadow-[var(--shadow-block)]">
              <DrivePhoto id={bali.cover} alt="Bali Nounsweek 2024" priority sizes="(min-width: 1024px) 380px, 68vw" className="aspect-[4/3] w-full object-cover" />
              <span className="block border-t-[3px] border-ink bg-paper px-3 py-1.5 font-display text-xl">Bali Nounsweek 2024</span>
            </Link>
            <Link href={`/kegiatan/${menyapa.slug}`} className="absolute bottom-0 right-0 w-[56%] rotate-3 overflow-hidden rounded-md border-[3px] border-ink bg-warm shadow-[var(--shadow-block)]">
              <DrivePhoto id={menyapa.cover} alt="Minggunouns di Makassar" priority sizes="(min-width: 1024px) 320px, 56vw" className="aspect-[4/3] w-full object-cover" />
              <span className="block border-t-[3px] border-ink bg-sun px-3 py-1.5 font-display text-xl">Minggunouns, Makassar</span>
            </Link>
            <HeroNoggles className="absolute -bottom-3 left-2 w-[34%] sm:left-4" />
          </div>
        </div>
      </section>

      {/* FAKTA SINGKAT — dihitung dari data asli */}
      <section className="border-y-[3px] border-ink bg-sun">
        <dl className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:grid-cols-3">
          <div>
            <dt className="text-ink/75">Modul belajar gratis</dt>
            <dd className="font-display text-5xl">{modules.length} langkah</dd>
          </div>
          <div>
            <dt className="text-ink/75">Kegiatan & proyek sejak 2024</dt>
            <dd className="font-display text-5xl">{activities} acara & proyek</dd>
          </div>
          <div>
            <dt className="text-ink/75">Foto & video dokumentasi</dt>
            <dd className="font-display text-5xl">{media}+</dd>
          </div>
        </dl>
      </section>

      {/* JEJAK KEGIATAN */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-5xl sm:text-6xl">Bukan cuma online</h2>
            <p className="mt-4 max-w-xl text-ink/85">Dari kumpul mingguan di Makassar sampai festival di Bali, ini jejak Nounsweek bareng komunitas.</p>
          </div>
          <Link href="/kegiatan" className="btn bg-ink text-cool">Semua dokumentasi</Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <Link href={`/kegiatan/${bali.slug}`} className="group relative isolate flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-md border-[3px] border-ink p-6 text-paper shadow-[var(--shadow-block)]">
            <DrivePhoto id={bali.photos[4]} alt="" sizes="(min-width: 1024px) 60vw, 100vw" className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
            <span aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
            <span className="font-display text-2xl text-sun">{bali.when}, {bali.place}</span>
            <span className="mt-1 font-display text-5xl sm:text-6xl">{bali.title}</span>
            <span className="mt-2 max-w-lg text-paper/90">{bali.photos.length} foto dan {bali.videos?.length} video dari acara utama kami.</span>
          </Link>
          <div className="grid gap-6">
            {[menyapa, craft].map((d) => (
              <Link key={d.slug} href={`/kegiatan/${d.slug}`} className="group grid grid-cols-[40%_1fr] overflow-hidden rounded-md border-[3px] border-ink bg-paper hover:shadow-[var(--shadow-chip)]">
                <DrivePhoto id={d.cover} alt="" sizes="200px" className="h-full min-h-40 w-full border-r-[3px] border-ink object-cover" />
                <span className="flex flex-col justify-center p-4">
                  <span className="text-sm text-ink/60">{d.when}</span>
                  <span className="font-display text-3xl leading-none">{d.title}</span>
                  <span className="mt-2 text-sm font-bold">{d.photos.length} foto{d.videos?.length ? `, ${d.videos.length} video` : ""}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>

        <h3 className="mt-16 text-4xl">Proyek yang didanai Nounsweek</h3>
        <ul className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {funded.map((d) => (
            <li key={d.slug}>
              <Link href={`/kegiatan/${d.slug}`} className="group block overflow-hidden rounded-md border-[3px] border-ink bg-paper">
                <DrivePhoto id={d.cover} alt="" sizes="(min-width: 1024px) 25vw, 50vw" className="aspect-square w-full border-b-[3px] border-ink object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                <span className="block px-3 py-2 font-display text-2xl">{d.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* VIDEO */}
      <section className="border-t-[3px] border-ink bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-5xl sm:text-6xl">Tonton keseruannya</h2>
          <p className="mt-4 max-w-xl text-paper/80">
            {videos.length} video dari kegiatan Nounsweek. Klik untuk memutar langsung di sini.
          </p>
          <div className="mt-10 grid gap-6 text-ink lg:grid-cols-[1.6fr_1fr]">
            <VideoCard id={featured[0].id} title={featured[0].title} subtitle={featured[0].from} fill className="shadow-[6px_6px_0_0_var(--color-sun)]" />
            <div className="grid gap-6">
              {featured.slice(1).map((v) => (
                <VideoCard key={v.id} id={v.id} title={v.title} subtitle={v.from} />
              ))}
            </div>
          </div>
          <ul className="mt-6 grid grid-cols-1 gap-6 text-ink sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((v) => (
              <li key={v.id}>
                <VideoCard id={v.id} title={v.title} subtitle={v.from} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* JALUR BELAJAR */}
      <section className="border-y-[3px] border-ink bg-warm">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-5xl sm:text-6xl">Satu jalur, tujuh langkah</h2>
            <p className="mt-5 max-w-md text-ink/85">
              Setiap modul bisa dibaca sekitar 7 menit: penjelasan, perumpamaan sehari-hari, ringkasan, lalu kuis kecil untuk mengecek pemahamanmu. Urutannya disusun dari yang paling dasar.
            </p>
            <Link href="/belajar/apa-itu-web3" className="btn mt-7 bg-sky text-paper">Buka modul pertama</Link>
          </div>
          <LearningPath />
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

      {/* SOSIAL + KOLABORASI */}
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1.3fr_1fr]">
          <div className="rounded-md border-[3px] border-ink bg-noggle p-8 text-paper shadow-[var(--shadow-block)] sm:p-10">
            <h2 className="text-5xl">Kabar acara berikutnya ada di sini</h2>
            <p className="mt-3 max-w-md text-paper/90">Jadwal Minggunouns, pendaftaran acara, dan cerita komunitas kami bagikan lebih dulu di media sosial.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={SOCIALS.instagram.href} target="_blank" rel="noreferrer" className="btn bg-paper text-ink">
                <InstagramIcon className="h-6 w-6" /> Ikuti di Instagram
              </a>
              <a href={SOCIALS.x.href} target="_blank" rel="noreferrer" className="btn bg-ink text-paper">
                <XIcon className="h-5 w-5" /> Ikuti di X
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-md border-[3px] border-ink bg-paper p-8 sm:p-10">
            <div>
              <h2 className="text-4xl">Mau Nounsweek datang ke kampus atau sekolahmu?</h2>
              <p className="mt-3 text-ink/80">Kami terbuka untuk kelas tamu, workshop, dan acara komunitas.</p>
            </div>
            <a href={SOCIALS.instagram.href} target="_blank" rel="noreferrer" className="btn mt-6 self-start bg-sun">Kirim DM untuk kolaborasi</a>
          </div>
        </div>
      </section>
    </>
  );
}
