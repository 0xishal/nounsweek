# Nounsweek

Website edukasi dasar Web3, crypto, dan blockchain untuk mahasiswa dan remaja Indonesia, plus arsip kegiatan Nounsweek 2023–2026.

Dibangun dengan Next.js 16 + Tailwind CSS 4. Gaya visual mengikuti dunia Nouns (noggles ⌐◨-◨, font Londrina Solid, latar "cool/warm" khas Nouns). Karya Nouns berlisensi CC0.

## Halaman

| Rute | Isi |
| --- | --- |
| `/` | Beranda: hero noggles interaktif, jalur belajar, sorotan kegiatan, istilah populer |
| `/belajar` | Jalur 7 modul |
| `/belajar/[slug]` | Materi modul + perumpamaan + ringkasan + kuis 3 soal |
| `/kegiatan` | Dokumentasi per folder Drive: kegiatan, proyek yang didanai, konsep desain |
| `/kegiatan/[slug]` | Galeri foto (dengan lightbox), video, dan link ke folder Drive |
| `/kamus` | Kamus istilah Web3 dengan pencarian |

## Mengubah konten (tanpa menyentuh desain)

- **Materi belajar**: `src/data/modules.ts`
- **Kegiatan & dokumentasi**: `src/data/documentation.ts`. Satu entri = satu folder di [Google Drive Nounsweek](https://drive.google.com/drive/folders/19kzTvtKPRZ46N-miEji5SrOpoW8j5yD9). Foto & video diambil langsung dari Drive lewat ID file, jadi file harus tetap dibagikan "Siapa saja yang memiliki link". Tambah foto: salin ID dari URL file Drive (`/file/d/<ID>/view`) ke array `photos`.
- **Logo**: `public/logo-nounsweek.png` (ganti file ini untuk memperbarui logo).
- **Kamus**: `src/data/glossary.ts`
- **Link sosial media**: `src/components/SocialIcons.tsx`

## Menjalankan lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Deploy

Repo ini terhubung ke Vercel. Setiap push ke `main` otomatis ter-deploy.
