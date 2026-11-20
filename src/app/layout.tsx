import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "Nounsweek — Belajar dasar Web3, crypto & blockchain",
    template: "%s · Nounsweek",
  },
  description:
    "Belajar dasar Web3, blockchain, dan crypto dengan bahasa yang gampang untuk mahasiswa dan remaja Indonesia. Plus cerita kegiatan Nounsweek 2023–2026.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <a href="#konten" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:p-2">
          Lompat ke konten
        </a>
        <SiteHeader />
        <main id="konten" className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
