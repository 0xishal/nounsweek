import { notFound } from "next/navigation";

// Semua URL yang tidak dikenal diarahkan ke not-found milik [lang] (dengan header & footer).
export default function CatchAll() {
  notFound();
}
