# Nounsweek

Website edukasi dasar Web3, crypto, dan blockchain untuk mahasiswa dan remaja Indonesia, plus arsip kegiatan Nounsweek 2023–2026.

Dibangun dengan Next.js 16 + Tailwind CSS 4. Gaya visual mengikuti dunia Nouns (noggles ⌐◨-◨, font Londrina Solid, latar "cool/warm" khas Nouns). Karya Nouns berlisensi CC0.

## Halaman

| Rute | Isi |
| --- | --- |
| `/` | Beranda: hero noggles interaktif, jalur belajar, sorotan kegiatan, istilah populer |
| `/belajar` | Jalur 7 modul |
| `/belajar/[slug]` | Materi modul + perumpamaan + ringkasan + kuis 3 soal |
| `/kegiatan` | Timeline 2023–2026 dengan filter jenis kegiatan |
| `/kamus` | Kamus istilah Web3 dengan pencarian |

## Mengubah konten (tanpa menyentuh desain)

- **Materi belajar**: `src/data/modules.ts`
- **Kegiatan**: `src/data/events.ts` — data sekarang masih **contoh**. Ganti dengan kegiatan asli dan hapus `sample: true`. Foto taruh di `public/kegiatan/` lalu isi field `photo`.
- **Kamus**: `src/data/glossary.ts`
- **Link sosial media**: `src/components/SiteFooter.tsx`
- **Email kolaborasi**: `src/app/page.tsx` (cari `mailto:`)

## Menjalankan lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Deploy

Repo ini terhubung ke Vercel. Setiap push ke `main` otomatis ter-deploy.
