import Link from "next/link";
import { DrivePhoto } from "@/components/DrivePhoto";
import { HeroNoggles } from "@/components/HeroNoggles";
import { LearningPath } from "@/components/LearningPath";
import { InstagramIcon, SOCIALS, XIcon } from "@/components/SocialIcons";
import { VideoCard } from "@/components/VideoCard";
import { getDocFolders } from "@/data/documentation";
import { getGlossary } from "@/data/glossary";
import { getModules } from "@/data/modules";
import { hasLocale, path } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { notFound } from "next/navigation";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang).home;
  const c = getDictionary(lang).counts;
  const docFolders = getDocFolders(lang);
  const modules = getModules(lang);
  const find = (slug: string) => docFolders.find((d) => d.slug === slug)!;
  const bali = find("bali-nounsweek-2024");
  const menyapa = find("nounsweek-menyapa");
  const craft = find("nounscraft");
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
  const highlightTerms = getGlossary(lang).filter((g) => t.glossaryTerms.includes(g.term));

  return (
    <>
      {/* HERO */}
      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-12 lg:grid-cols-[1.05fr_1fr] lg:pt-16">
          <div>
            <h1 className="text-[3.3rem] sm:text-7xl lg:text-[5.4rem]">
              {t.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink/85">
              {t.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={path("/belajar", lang)} className="btn bg-noggle text-paper">{t.ctaLearn}</Link>
              <Link href={path("/kegiatan", lang)} className="btn bg-paper">{t.ctaActivities}</Link>
            </div>
          </div>

          {/* Kolase foto dokumentasi asli + noggles interaktif */}
          <div className="relative mx-auto aspect-[5/4] w-full max-w-xl">
            <Link href={path(`/kegiatan/${bali.slug}`, lang)} className="absolute left-0 top-0 w-[68%] -rotate-2 overflow-hidden rounded-md border-[3px] border-ink bg-warm shadow-[var(--shadow-block)]">
              <DrivePhoto id={bali.cover} alt={t.heroBali} priority sizes="(min-width: 1024px) 380px, 68vw" className="aspect-[4/3] w-full object-cover" />
              <span className="block border-t-[3px] border-ink bg-paper px-3 py-1.5 font-display text-xl">{t.heroBali}</span>
            </Link>
            <Link href={path(`/kegiatan/${menyapa.slug}`, lang)} className="absolute bottom-0 right-0 w-[56%] rotate-3 overflow-hidden rounded-md border-[3px] border-ink bg-warm shadow-[var(--shadow-block)]">
              <DrivePhoto id={menyapa.cover} alt={t.heroMenyapa} priority sizes="(min-width: 1024px) 320px, 56vw" className="aspect-[4/3] w-full object-cover" />
              <span className="block border-t-[3px] border-ink bg-sun px-3 py-1.5 font-display text-xl">{t.heroMenyapa}</span>
            </Link>
            <HeroNoggles lang={lang} className="absolute -bottom-3 left-2 w-[34%] sm:left-4" />
          </div>
        </div>
      </section>

      {/* FAKTA SINGKAT — dihitung dari data asli */}
      <section className="border-y-[3px] border-ink bg-sun">
        <dl className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:grid-cols-3">
          <div>
            <dt className="text-ink/75">{t.statModules}</dt>
            <dd className="font-display text-5xl">{t.statModulesValue(modules.length)}</dd>
          </div>
          <div>
            <dt className="text-ink/75">{t.statActivities}</dt>
            <dd className="font-display text-5xl">{t.statActivitiesValue(activities)}</dd>
          </div>
          <div>
            <dt className="text-ink/75">{t.statMedia}</dt>
            <dd className="font-display text-5xl">{media}+</dd>
          </div>
        </dl>
      </section>

      {/* JEJAK KEGIATAN */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-5xl sm:text-6xl">{t.trailTitle}</h2>
            <p className="mt-4 max-w-xl text-ink/85">{t.trailIntro}</p>
          </div>
          <Link href={path("/kegiatan", lang)} className="btn bg-ink text-cool">{t.allDocs}</Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <Link href={path(`/kegiatan/${bali.slug}`, lang)} className="group relative isolate flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-md border-[3px] border-ink p-6 text-paper shadow-[var(--shadow-block)]">
            <DrivePhoto id={bali.photos[4]} alt="" sizes="(min-width: 1024px) 60vw, 100vw" className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
            <span aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
            <span className="font-display text-2xl text-sun">{bali.when}, {bali.place}</span>
            <span className="mt-1 font-display text-5xl sm:text-6xl">{bali.title}</span>
            <span className="mt-2 max-w-lg text-paper/90">{t.baliCaption(bali.photos.length, bali.videos?.length ?? 0)}</span>
          </Link>
          <div className="grid gap-6">
            {[menyapa, craft].map((d) => (
              <Link key={d.slug} href={path(`/kegiatan/${d.slug}`, lang)} className="group grid grid-cols-[40%_1fr] overflow-hidden rounded-md border-[3px] border-ink bg-paper hover:shadow-[var(--shadow-chip)]">
                <DrivePhoto id={d.cover} alt="" sizes="200px" className="h-full min-h-40 w-full border-r-[3px] border-ink object-cover" />
                <span className="flex flex-col justify-center p-4">
                  <span className="text-sm text-ink/60">{d.when}</span>
                  <span className="font-display text-3xl leading-none">{d.title}</span>
                  <span className="mt-2 text-sm font-bold">{c.photosAndVideos(d.photos.length, d.videos?.length ?? 0)}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>

        <h3 className="mt-16 text-4xl">{t.fundedTitle}</h3>
        <ul className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {funded.map((d) => (
            <li key={d.slug}>
              <Link href={path(`/kegiatan/${d.slug}`, lang)} className="group block overflow-hidden rounded-md border-[3px] border-ink bg-paper">
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
          <h2 className="text-5xl sm:text-6xl">{t.videoTitle}</h2>
          <p className="mt-4 max-w-xl text-paper/80">
            {t.videoIntro(videos.length)}
          </p>
          <div className="mt-10 grid gap-6 text-ink lg:grid-cols-[1.6fr_1fr]">
            <VideoCard lang={lang} id={featured[0].id} title={featured[0].title} subtitle={featured[0].from} fill className="shadow-[6px_6px_0_0_var(--color-sun)]" />
            <div className="grid gap-6">
              {featured.slice(1).map((v) => (
                <VideoCard lang={lang} key={v.id} id={v.id} title={v.title} subtitle={v.from} />
              ))}
            </div>
          </div>
          <ul className="mt-6 grid grid-cols-1 gap-6 text-ink sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((v) => (
              <li key={v.id}>
                <VideoCard lang={lang} id={v.id} title={v.title} subtitle={v.from} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* JALUR BELAJAR */}
      <section className="border-y-[3px] border-ink bg-warm">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-5xl sm:text-6xl">{t.pathTitle}</h2>
            <p className="mt-5 max-w-md text-ink/85">
              {t.pathIntro}
            </p>
            <Link href={path("/belajar/apa-itu-web3", lang)} className="btn mt-7 bg-sky text-paper">{t.pathCta}</Link>
          </div>
          <LearningPath lang={lang} />
        </div>
      </section>

      {/* KAMUS */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-5xl sm:text-6xl">{t.glossaryTitle}</h2>
        <p className="mt-4 max-w-xl text-ink/85">{t.glossaryIntro}</p>
        <dl className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {highlightTerms.map((g) => (
            <div key={g.term} className="border-l-[6px] border-noggle pl-5">
              <dt className="font-display text-3xl">{g.term}</dt>
              <dd className="mt-1 max-w-prose text-ink/85">{g.meaning}</dd>
            </div>
          ))}
        </dl>
        <Link href={path("/kamus", lang)} className="btn mt-10 bg-paper">{t.glossaryCta}</Link>
      </section>

      {/* SOSIAL + KOLABORASI */}
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1.3fr_1fr]">
          <div className="rounded-md border-[3px] border-ink bg-noggle p-8 text-paper shadow-[var(--shadow-block)] sm:p-10">
            <h2 className="text-5xl">{t.socialTitle}</h2>
            <p className="mt-3 max-w-md text-paper/90">{t.socialIntro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={SOCIALS.instagram.href} target="_blank" rel="noreferrer" className="btn bg-paper text-ink">
                <InstagramIcon className="h-6 w-6" /> {t.followIg}
              </a>
              <a href={SOCIALS.x.href} target="_blank" rel="noreferrer" className="btn bg-ink text-paper">
                <XIcon className="h-5 w-5" /> {t.followX}
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-md border-[3px] border-ink bg-paper p-8 sm:p-10">
            <div>
              <h2 className="text-4xl">{t.collabTitle}</h2>
              <p className="mt-3 text-ink/80">{t.collabIntro}</p>
            </div>
            <a href={SOCIALS.instagram.href} target="_blank" rel="noreferrer" className="btn mt-6 self-start bg-sun">{t.collabCta}</a>
          </div>
        </div>
      </section>
    </>
  );
}
