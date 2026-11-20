import { path, type Lang } from "./config";

/** canonical + hreflang untuk setiap halaman (dipakai di generateMetadata). */
export function alternates(p: string, lang: Lang) {
  return {
    canonical: path(p, lang),
    languages: { id: path(p, "id"), en: path(p, "en"), "x-default": path(p, "id") },
  };
}
