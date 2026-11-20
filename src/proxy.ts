import { NextResponse, type NextRequest } from "next/server";

// Bahasa Indonesia tidak memakai awalan di URL (/belajar), Inggris memakai /en (/en/belajar).
// Secara internal semua halaman ada di app/[lang]/..., jadi URL tanpa awalan di-rewrite ke /id/...
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/en" || pathname.startsWith("/en/")) return;

  // /id/... tidak dipakai sebagai URL publik: arahkan ke versi tanpa awalan.
  if (pathname === "/id" || pathname.startsWith("/id/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/id${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/|.*\\.[a-zA-Z0-9]+$).*)"],
};
