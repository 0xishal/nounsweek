import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DrivePhoto } from "@/components/DrivePhoto";
import { Gallery } from "@/components/Gallery";
import { VideoCard } from "@/components/VideoCard";
import { docFolders, drivePhoto, getDocFolder, getDocFolders } from "@/data/documentation";
import { hasLocale, path } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { alternates } from "@/i18n/metadata";

export function generateStaticParams() {
  return docFolders.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/kegiatan/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const d = getDocFolder(slug, lang);
  if (!d) return {};
  return {
    title: d.title,
    description: d.summary,
    openGraph: { images: [drivePhoto(d.cover, 1200)] },
    alternates: alternates(`/kegiatan/${slug}`, lang),
  };
}

export default async function DocPage({ params }: PageProps<"/[lang]/kegiatan/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const d = getDocFolder(slug, lang);
  if (!d) notFound();
  const t = getDictionary(lang).activities;
  const c = getDictionary(lang).counts;

  const list = getDocFolders(lang);
  const idx = list.findIndex((x) => x.slug === d.slug);
  const next = list[(idx + 1) % list.length];

  return (
    <article>
      <header className="relative isolate overflow-hidden border-b-[3px] border-ink bg-ink text-paper">
        <DrivePhoto id={d.cover} alt="" priority sizes="100vw" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45" />
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-24 sm:pt-36">
          <Link href={path("/kegiatan", lang)} className="block w-fit underline underline-offset-4">{t.back}</Link>
          <p className="mt-6 w-fit rounded bg-sun px-2 py-0.5 font-bold text-ink">{t.categories[d.category].title}</p>
          <h1 className="mt-3 max-w-4xl text-6xl sm:text-8xl">{d.title}</h1>
          <p className="mt-4 font-display text-2xl">{d.when}{d.place ? `, ${d.place}` : ""}</p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-start">
          <p className="max-w-prose text-lg">{d.summary}</p>
          <div className="rounded-md border-[3px] border-ink bg-paper p-5 font-bold">
            {c.photosAndVideos(d.photos.length, d.videos?.length ?? 0)}
          </div>
        </div>

        {d.videos && d.videos.length > 0 && (
          <section className="mt-14">
            <h2 className="text-4xl">{t.videoHeading}</h2>
            <ul className="mt-6 grid gap-6 md:grid-cols-2">
              {d.videos.map((v) => (
                <li key={v.id}>
                  <VideoCard lang={lang} id={v.id} title={v.title} />
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-14">
          <h2 className="text-4xl">{t.photoHeading}</h2>
          <p className="mt-2 mb-6 text-ink/70">{t.galleryHint}</p>
          <Gallery lang={lang} photos={d.photos} title={d.title} posterIds={d.posterIds} />
        </section>

        <Link href={path(`/kegiatan/${next.slug}`, lang)} className="mt-16 flex items-center justify-between gap-4 rounded-md border-[3px] border-ink bg-sun p-5 hover:shadow-[var(--shadow-chip)]">
          <span>
            <span className="text-sm">{t.nextDoc}</span>
            <span className="block font-display text-3xl">{next.title}</span>
          </span>
          <DrivePhoto id={next.cover} alt="" sizes="160px" className="hidden h-20 w-32 rounded border-2 border-ink object-cover sm:block" />
        </Link>
      </div>
    </article>
  );
}
