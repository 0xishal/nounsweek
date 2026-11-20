import type { Metadata } from "next";
import Link from "next/link";
import { DrivePhoto } from "@/components/DrivePhoto";
import { docCategories, docFolders } from "@/data/documentation";

export const metadata: Metadata = {
  title: "Kegiatan & dokumentasi",
  description: "Dokumentasi kegiatan Nounsweek: Minggunouns, Bali Nounsweek 2024, Nounscraft, proyek yang didanai, dan konsep desain.",
};

export default function KegiatanPage() {
  const totalPhotos = docFolders.reduce((s, d) => s + d.photos.length, 0);
  const totalVideos = docFolders.reduce((s, d) => s + (d.videos?.length ?? 0), 0);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="text-6xl sm:text-7xl">Kegiatan kami</h1>
      <p className="mt-5 max-w-2xl text-lg text-ink/85">
        Semua yang sudah Nounsweek kerjakan bareng komunitas, lengkap dengan foto dan video. Ada {totalPhotos} foto dan {totalVideos} video dari {docFolders.length} folder dokumentasi.
      </p>
      <nav aria-label="Kategori" className="mt-8 flex flex-wrap gap-2">
        {docCategories.map((c) => (
          <a key={c.key} href={`#${slugify(c.key)}`} className="rounded-md border-[3px] border-ink bg-paper px-3 py-1 font-display text-xl hover:bg-sun">
            {c.title}
          </a>
        ))}
      </nav>

      {docCategories.map((c) => {
        const list = docFolders.filter((d) => d.category === c.key);
        return (
          <section key={c.key} id={slugify(c.key)} className="mt-20 scroll-mt-28">
            <h2 className="text-5xl">{c.title}</h2>
            <p className="mt-2 text-ink/75">{c.blurb}</p>

            {c.key === "Kegiatan" ? (
              <ol className="mt-8 space-y-8">
                {list.map((d, i) => (
                  <li key={d.slug}>
                    <Link
                      href={`/kegiatan/${d.slug}`}
                      className={`group grid overflow-hidden rounded-md border-[3px] border-ink bg-paper shadow-[var(--shadow-block)] md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
                    >
                      <div className="overflow-hidden border-b-[3px] border-ink md:border-b-0">
                        <DrivePhoto id={d.cover} alt={d.title} sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                      </div>
                      <div className="flex flex-col justify-center p-6 sm:p-10">
                        <p className="font-display text-2xl text-noggle">{d.when}{d.place ? `, ${d.place}` : ""}</p>
                        <h3 className="mt-2 text-4xl sm:text-5xl">{d.title}</h3>
                        <p className="mt-4 text-ink/85">{d.summary}</p>
                        <p className="mt-6 font-bold underline decoration-[3px] underline-offset-4 group-hover:decoration-noggle">
                          Lihat {d.photos.length} foto{d.videos?.length ? ` dan ${d.videos.length} video` : ""}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ol>
            ) : (
              <ul className={`mt-8 grid gap-6 sm:grid-cols-2 ${c.key === "Konsep" ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
                {list.map((d) => (
                  <li key={d.slug}>
                    <Link href={`/kegiatan/${d.slug}`} className="group flex h-full flex-col overflow-hidden rounded-md border-[3px] border-ink bg-paper hover:shadow-[var(--shadow-chip)]">
                      <div className="overflow-hidden border-b-[3px] border-ink">
                        <DrivePhoto id={d.cover} alt={d.title} sizes="(min-width: 1024px) 25vw, 50vw" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <p className="text-sm text-ink/60">{d.when}</p>
                        <h3 className="mt-1 text-3xl">{d.title}</h3>
                        <p className="mt-2 flex-1 text-ink/80">{d.summary}</p>
                        <p className="mt-4 text-sm font-bold">{d.photos.length} foto{d.videos?.length ? `, ${d.videos.length} video` : ""}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>
        );
      })}
    </div>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/\s+/g, "-");
}
