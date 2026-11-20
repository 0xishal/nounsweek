// Bahasa yang didukung. Bahasa Indonesia = default (URL tanpa awalan),
// Inggris memakai awalan /en (contoh: /en/belajar).
export const locales = ["id", "en"] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = "id";

export const hasLocale = (l: string): l is Lang => (locales as readonly string[]).includes(l);

/** Buat URL internal sesuai bahasa: path("/belajar", "en") -> "/en/belajar" */
export function path(p: string, lang: Lang) {
  if (lang === defaultLang) return p;
  return p === "/" ? `/${lang}` : `/${lang}${p}`;
}

/** Ubah pathname yang sedang dibuka ke bahasa lain (untuk tombol ganti bahasa). */
export function switchPath(pathname: string, to: Lang) {
  return path(stripLang(pathname), to);
}

/** Hapus awalan bahasa dari pathname. Di Vercel, usePathname bisa berisi /id hasil rewrite. */
export function stripLang(pathname: string) {
  return pathname.replace(/^\/(id|en)(?=\/|$)/, "") || "/";
}
