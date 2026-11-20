import { drivePhoto } from "@/data/documentation";

type Props = {
  id: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

// Foto dari Google Drive publik. Google sendiri yang mengubah ukuran (=w400, =w800, …),
// jadi browser hanya mengunduh ukuran yang dibutuhkan.
export function DrivePhoto({ id, alt, className, sizes = "(min-width: 1024px) 33vw, 100vw", priority }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={drivePhoto(id, 1200)}
      srcSet={[400, 800, 1200, 1800].map((w) => `${drivePhoto(id, w)} ${w}w`).join(", ")}
      sizes={sizes}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      referrerPolicy="no-referrer"
      className={className}
    />
  );
}
