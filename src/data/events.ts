// Daftar kegiatan Nounsweek 2023–2026.
// PENTING: entri di bawah masih DATA CONTOH (sample: true).
// Ganti judul, tanggal, kota, dan deskripsi dengan kegiatan asli,
// lalu hapus `sample: true` supaya label "data contoh" hilang.
// Foto: taruh di /public/kegiatan/ lalu isi `photo: "/kegiatan/nama-file.jpg"`.

export type EventType = "Workshop" | "Meetup" | "Kampus" | "Hackathon" | "Festival";

export type NounsEvent = {
  id: string;
  year: 2023 | 2024 | 2025 | 2026;
  date: string; // contoh: "12 Agu 2023"
  title: string;
  city: string;
  venue?: string;
  type: EventType;
  attendees?: number;
  description: string;
  photo?: string;
  link?: string;
  sample?: boolean;
};

export const events: NounsEvent[] = [
  {
    id: "2023-kickoff",
    year: 2023,
    date: "Agu 2023",
    title: "Nounsweek pertama: kenalan dengan Web3",
    city: "Jakarta",
    type: "Meetup",
    attendees: 60,
    description: "Pertemuan perdana komunitas. Ngobrol santai soal apa itu blockchain, wallet, dan kenapa noggles ada di mana-mana.",
    sample: true,
  },
  {
    id: "2023-kampus",
    year: 2023,
    date: "Nov 2023",
    title: "Web3 Goes to Campus",
    city: "Bandung",
    type: "Kampus",
    attendees: 120,
    description: "Sesi kelas tamu untuk mahasiswa: dasar blockchain dan praktik membuat wallet pertama dengan aman.",
    sample: true,
  },
  {
    id: "2024-workshop-wallet",
    year: 2024,
    date: "Mar 2024",
    title: "Workshop: wallet pertamaku",
    city: "Yogyakarta",
    type: "Workshop",
    attendees: 80,
    description: "Praktik langsung membuat wallet, mengamankan seed phrase, dan klaim POAP pertama.",
    sample: true,
  },
  {
    id: "2024-hackathon",
    year: 2024,
    date: "Agu 2024",
    title: "Nounish Mini Hackathon",
    city: "Jakarta",
    type: "Hackathon",
    attendees: 90,
    description: "48 jam membangun proyek bertema Nouns. Tim mahasiswa membuat game, filter kamera noggles, dan dApp sederhana.",
    sample: true,
  },
  {
    id: "2025-sekolah",
    year: 2025,
    date: "Feb 2025",
    title: "Kelas Aman di Internet untuk SMA",
    city: "Surabaya",
    type: "Workshop",
    attendees: 150,
    description: "Mengenali penipuan online dan crypto: phishing, airdrop palsu, dan janji investasi 'pasti untung'.",
    sample: true,
  },
  {
    id: "2025-festival",
    year: 2025,
    date: "Okt 2025",
    title: "Nounsweek Fest",
    city: "Bali",
    type: "Festival",
    attendees: 300,
    description: "Pameran karya CC0, lomba desain noggles, dan panggung diskusi kreator muda.",
    sample: true,
  },
  {
    id: "2026-tour",
    year: 2026,
    date: "Mei 2026",
    title: "Campus Tour 5 kota",
    city: "Medan, Makassar, Malang, Semarang, Jakarta",
    type: "Kampus",
    attendees: 500,
    description: "Roadshow ke lima kampus dengan kurikulum dasar Web3 dan sesi tanya jawab bareng builder lokal.",
    sample: true,
  },
  {
    id: "2026-builder",
    year: 2026,
    date: "Okt 2026",
    title: "Builder Day: dari ide ke proposal DAO",
    city: "Jakarta",
    type: "Workshop",
    attendees: 100,
    description: "Belajar menulis proposal, mempresentasikan ide, dan memahami cara komunitas mendanai proyek.",
    sample: true,
  },
];

export const years = [2023, 2024, 2025, 2026] as const;
