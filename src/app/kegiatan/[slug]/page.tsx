import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DrivePhoto } from "@/components/DrivePhoto";
import { Gallery } from "@/components/Gallery";
import { docFolders, driveFolderUrl, driveVideoEmbed, drivePhoto, getDocFolder } from "@/data/documentation";

export function generateStaticParams() {
  return docFolders.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps<"/kegiatan/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const d = getDocFolder(slug);
  if (!d) return {};
  return { title: d.title, description: d.summary, openGraph: { images: [drivePhoto(d.cover, 1200)] } };
}

export default async function DocPage({ params }: PageProps<"/kegiatan/[slug]">) {
  const { slug } = await params;
  const d = getDocFolder(slug);
  if (!d) notFound();

  const idx = docFolders.findIndex((x) => x.slug === d.slug);
  const next = docFolders[(idx + 1) % docFolders.length];

  return (
    <article>
      <header className="relative isolate overflow-hidden border-b-[3px] border-ink bg-ink text-paper">
        <DrivePhoto id={d.cover} alt="" priority sizes="100vw" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45" />
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-24 sm:pt-36">
          <Link href="/kegiatan" className="underline underline-offset-4">Semua kegiatan</Link>
          <p className="mt-6 inline-block rounded bg-sun px-2 py-0.5 font-bold text-ink">{d.category}</p>
          <h1 className="mt-3 max-w-4xl text-6xl sm:text-8xl">{d.title}</h1>
          <p className="mt-4 font-display text-2xl">{d.when}{d.place ? `, ${d.place}` : ""}</p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-start">
          <p className="max-w-prose text-lg">{d.summary}</p>
          <div className="rounded-md border-[3px] border-ink bg-paper p-5">
            <p><strong>{d.photos.length}</strong> foto{d.videos?.length ? <>, <strong>{d.videos.length}</strong> video</> : null}</p>
            <a href={driveFolderUrl(d.driveFolderId)} target="_blank" rel="noreferrer" className="btn mt-4 bg-paper">
              Buka folder di Google Drive
            </a>
          </div>
        </div>

        {d.videos && d.videos.length > 0 && (
          <section className="mt-14">
            <h2 className="text-4xl">Video</h2>
            <ul className="mt-6 grid gap-6 md:grid-cols-2">
              {d.videos.map((v) => (
                <li key={v.id} className="overflow-hidden rounded-md border-[3px] border-ink bg-ink">
                  <iframe
                    src={driveVideoEmbed(v.id)}
                    title={v.title}
                    loading="lazy"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="aspect-video w-full"
                  />
                  <p className="bg-paper px-4 py-2 font-bold">{v.title}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-14">
          <h2 className="text-4xl">Foto</h2>
          <p className="mt-2 mb-6 text-ink/70">Klik foto untuk memperbesar. Gunakan tombol panah di keyboard untuk berpindah foto.</p>
          <Gallery photos={d.photos} title={d.title} posterIds={d.posterIds} />
        </section>

        <Link href={`/kegiatan/${next.slug}`} className="mt-16 flex items-center justify-between gap-4 rounded-md border-[3px] border-ink bg-sun p-5 hover:shadow-[var(--shadow-chip)]">
          <span>
            <span className="text-sm">Dokumentasi berikutnya</span>
            <span className="block font-display text-3xl">{next.title}</span>
          </span>
          <DrivePhoto id={next.cover} alt="" sizes="160px" className="hidden h-20 w-32 rounded border-2 border-ink object-cover sm:block" />
        </Link>
      </div>
    </article>
  );
}
