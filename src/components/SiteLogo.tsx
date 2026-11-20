import { Noggles } from "./Noggles";

// Logo Nounsweek.
// Untuk memakai logo resmi: simpan file logo (PNG transparan atau SVG) ke
// `public/logo-nounsweek.png`, lalu ubah LOGO_SRC di bawah menjadi "/logo-nounsweek.png".
// Selama LOGO_SRC null, situs memakai wordmark sementara (noggles + teks).
export const LOGO_SRC: string | null = null;

export function SiteLogo({ variant = "dark", className = "" }: { variant?: "dark" | "light"; className?: string }) {
  if (LOGO_SRC) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={LOGO_SRC} alt="Nounsweek" className={`h-10 w-auto ${className}`} />;
  }
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <Noggles className="h-6 w-auto" color={variant === "light" ? "#fec22f" : undefined} />
      <span className={`font-display text-3xl font-black leading-none ${variant === "light" ? "text-cool" : ""}`}>nounsweek</span>
    </span>
  );
}
