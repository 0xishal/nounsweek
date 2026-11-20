// Logo resmi Nounsweek (public/logo-nounsweek.png, rasio 480x98).
export function SiteLogo({ className = "h-9 sm:h-10" }: { className?: string; variant?: "dark" | "light" }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/logo-nounsweek.png" alt="Nounsweek" width={480} height={98} className={`w-auto ${className}`} />
  );
}
