// Materi belajar Nounsweek. Edit teks di sini untuk mengubah isi modul.
// Urutan array = urutan jalur belajar.

export type QuizItem = {
  q: string;
  options: string[];
  answer: number; // index jawaban benar
  explain: string;
};

export type LearningModule = {
  slug: string;
  title: string;
  short: string;
  minutes: number;
  color: "noggle" | "sun" | "sky" | "leaf" | "grape";
  sections: { heading: string; body: string[] }[];
  analogy: string;
  takeaways: string[];
  quiz: QuizItem[];
};

export const modules: LearningModule[] = [
  {
    slug: "apa-itu-web3",
    title: "Apa itu Web3?",
    short: "Dari internet yang cuma bisa dibaca, ke internet yang bisa kamu miliki.",
    minutes: 6,
    color: "noggle",
    sections: [
      {
        heading: "Internet punya tiga babak",
        body: [
          "Web1 (sekitar 1990–2004) adalah internet untuk dibaca. Website isinya statis, mirip brosur digital. Kamu datang, membaca, lalu pergi.",
          "Web2 (2004–sekarang) adalah internet untuk dibaca dan ditulis. Kamu bisa upload foto, bikin video, dan berkomentar. Tapi akun, data, dan pengikutmu disimpan oleh platform. Kalau akunmu diblokir, semuanya hilang.",
          "Web3 menambahkan satu hal: kepemilikan. Aset digital, identitas, dan suara dalam komunitas bisa dicatat di blockchain, sehingga yang memegang kuncinya adalah kamu, bukan perusahaan.",
        ],
      },
      {
        heading: "Kenapa ini penting buat anak muda?",
        body: [
          "Kreator bisa menjual karya langsung ke penggemar tanpa potongan besar. Komunitas bisa mengelola dana bersama secara terbuka. Dan kamu bisa membawa reputasi digitalmu dari satu aplikasi ke aplikasi lain.",
          "Web3 juga masih muda dan penuh eksperimen. Ada peluang, tapi juga banyak risiko dan penipuan. Makanya belajar dasarnya dulu itu penting.",
        ],
      },
    ],
    analogy:
      "Web2 itu seperti tinggal di kos: nyaman, tapi aturan dan kuncinya dipegang ibu kos. Web3 seperti punya rumah sendiri: kamu pegang kuncinya, tapi kamu juga yang bertanggung jawab menjaganya.",
    takeaways: [
      "Web1 = baca, Web2 = baca + tulis, Web3 = baca + tulis + miliki.",
      "Di Web3, kunci akses ada di tanganmu sendiri.",
      "Kebebasan lebih besar berarti tanggung jawab keamanan juga lebih besar.",
    ],
    quiz: [
      {
        q: "Apa ciri utama yang membedakan Web3 dari Web2?",
        options: ["Lebih banyak video", "Kepemilikan aset dan data oleh pengguna", "Internet lebih cepat", "Website lebih berwarna"],
        answer: 1,
        explain: "Web3 menambahkan lapisan kepemilikan: kamu memegang kunci atas aset dan identitas digitalmu.",
      },
      {
        q: "Di Web2, siapa yang biasanya menyimpan data akunmu?",
        options: ["Kamu sendiri", "Jaringan blockchain", "Perusahaan platform", "Tidak ada"],
        answer: 2,
        explain: "Platform seperti media sosial menyimpan data di server mereka, jadi mereka yang mengontrolnya.",
      },
      {
        q: "Web1 paling cocok digambarkan sebagai…",
        options: ["Internet untuk dibaca", "Internet untuk game", "Internet untuk jual beli NFT", "Internet tanpa website"],
        answer: 0,
        explain: "Web1 berisi halaman statis yang kebanyakan hanya bisa dibaca.",
      },
    ],
  },
  {
    slug: "blockchain",
    title: "Blockchain, pelan-pelan",
    short: "Buku catatan bersama yang tidak bisa dihapus diam-diam.",
    minutes: 8,
    color: "sun",
    sections: [
      {
        heading: "Buku kas yang disalin ribuan kali",
        body: [
          "Blockchain adalah catatan transaksi yang disimpan bersamaan oleh banyak komputer (disebut node) di seluruh dunia. Setiap node punya salinan yang sama.",
          "Transaksi dikumpulkan dalam blok. Setiap blok menyimpan sidik jari (hash) dari blok sebelumnya, sehingga semuanya tersambung seperti rantai. Mengubah satu blok lama berarti merusak semua sidik jari setelahnya, dan node lain akan langsung menolaknya.",
        ],
      },
      {
        heading: "Siapa yang memutuskan blok baru?",
        body: [
          "Jaringan perlu cara untuk sepakat. Cara ini disebut mekanisme konsensus. Bitcoin memakai Proof of Work: komputer berlomba memecahkan teka-teki matematika. Ethereum memakai Proof of Stake: validator mengunci ETH sebagai jaminan dan bisa kehilangannya kalau curang.",
          "Hasilnya, tidak ada satu pihak pun yang bisa mengubah catatan sendirian. Itulah yang disebut terdesentralisasi.",
        ],
      },
      {
        heading: "Publik, tapi bukan berarti namamu terpampang",
        body: [
          "Di blockchain publik, semua orang bisa melihat transaksi lewat block explorer seperti Etherscan. Yang terlihat adalah alamat wallet (deretan huruf dan angka seperti 0x12ab…), bukan nama asli. Tapi kalau alamatmu pernah dikaitkan dengan identitasmu, riwayatnya bisa dilacak.",
        ],
      },
    ],
    analogy:
      "Bayangkan buku kas kelas yang difotokopi untuk setiap murid. Kalau bendahara diam-diam mengubah angka di bukunya, 30 salinan lain akan membuktikan dia salah.",
    takeaways: [
      "Blockchain = catatan bersama yang disalin banyak komputer.",
      "Blok saling terhubung lewat hash, jadi sulit diubah.",
      "Konsensus (PoW atau PoS) menentukan siapa yang boleh menambah blok.",
    ],
    quiz: [
      {
        q: "Kenapa data lama di blockchain sulit diubah?",
        options: ["Dikunci password admin", "Setiap blok menyimpan hash blok sebelumnya", "Disimpan di satu server super aman", "Karena dienkripsi oleh pemerintah"],
        answer: 1,
        explain: "Mengubah satu blok akan mengubah hash-nya dan memutus rantai, sehingga node lain menolaknya.",
      },
      {
        q: "Ethereum saat ini memakai mekanisme konsensus…",
        options: ["Proof of Work", "Proof of Stake", "Proof of Like", "Tanpa konsensus"],
        answer: 1,
        explain: "Sejak 2022 (The Merge), Ethereum memakai Proof of Stake.",
      },
      {
        q: "Apa yang biasanya terlihat publik di block explorer?",
        options: ["Nama lengkap dan KTP", "Alamat wallet dan transaksinya", "Password wallet", "Isi chat pribadi"],
        answer: 1,
        explain: "Blockchain publik menampilkan alamat dan transaksi, bukan data pribadi seperti nama.",
      },
    ],
  },
  {
    slug: "crypto-dan-token",
    title: "Crypto dan token",
    short: "Bedanya coin, token, stablecoin, dan kenapa harganya naik turun.",
    minutes: 7,
    color: "sky",
    sections: [
      {
        heading: "Coin vs token",
        body: [
          "Coin adalah aset asli sebuah blockchain, misalnya BTC di Bitcoin dan ETH di Ethereum. Coin dipakai untuk membayar biaya transaksi (gas fee).",
          "Token dibuat di atas blockchain yang sudah ada lewat smart contract. Contohnya USDC di Ethereum. Membuat token itu mudah, jadi banyak sekali token yang tidak punya nilai nyata.",
        ],
      },
      {
        heading: "Stablecoin",
        body: [
          "Stablecoin adalah token yang nilainya dipatok ke aset lain, biasanya dolar AS. 1 USDC dirancang bernilai sekitar 1 dolar. Stablecoin sering dipakai untuk transfer dan pembayaran karena harganya tidak naik turun liar.",
        ],
      },
      {
        heading: "Volatilitas: harga bisa naik dan turun tajam",
        body: [
          "Harga crypto ditentukan oleh penawaran dan permintaan, dan sering bergerak puluhan persen dalam hitungan hari. Jangan pernah memakai uang jajan, uang kuliah, atau uang pinjaman untuk membeli crypto.",
          "Di Indonesia, perdagangan aset kripto diawasi OJK. Kalau suatu saat kamu sudah cukup umur dan ingin mencoba, pakai platform yang terdaftar resmi.",
        ],
      },
    ],
    analogy:
      "Coin itu seperti mata uang resmi sebuah negara. Token itu seperti voucher atau poin yang diterbitkan toko di negara itu: bisa berguna, bisa juga tidak laku.",
    takeaways: [
      "Coin = aset asli blockchain. Token = dibuat di atas blockchain.",
      "Stablecoin dipatok ke aset lain supaya harganya stabil.",
      "Crypto sangat volatil. Belajar dulu, bukan buru-buru beli.",
    ],
    quiz: [
      {
        q: "ETH adalah contoh…",
        options: ["Token di atas Bitcoin", "Coin asli jaringan Ethereum", "Stablecoin", "NFT"],
        answer: 1,
        explain: "ETH adalah aset asli jaringan Ethereum dan dipakai untuk membayar gas fee.",
      },
      {
        q: "Tujuan utama stablecoin adalah…",
        options: ["Harga naik cepat", "Nilai stabil terhadap aset acuan", "Menggantikan NFT", "Menambang Bitcoin"],
        answer: 1,
        explain: "Stablecoin dirancang menjaga nilainya mendekati aset acuan, misalnya 1 dolar AS.",
      },
      {
        q: "Uang mana yang paling tidak layak dipakai membeli crypto?",
        options: ["Uang kuliah", "Uang yang memang siap hilang", "Hadiah lomba yang sudah kamu sisihkan", "Tidak ada bedanya"],
        answer: 0,
        explain: "Karena harganya volatil, jangan pakai uang kebutuhan penting seperti biaya kuliah.",
      },
    ],
  },
  {
    slug: "wallet",
    title: "Wallet dan seed phrase",
    short: "Dompet digitalmu, dan 12 kata yang tidak boleh diketahui siapa pun.",
    minutes: 7,
    color: "leaf",
    sections: [
      {
        heading: "Wallet tidak menyimpan uangmu",
        body: [
          "Aset crypto selalu tercatat di blockchain. Wallet menyimpan kunci privat (private key) yang membuktikan kamu pemilik sebuah alamat dan memberi izin untuk mengirim aset dari alamat itu.",
          "Contoh wallet: MetaMask, Rainbow, Coinbase Wallet (aplikasi), atau hardware wallet seperti Ledger (perangkat fisik).",
        ],
      },
      {
        heading: "Seed phrase = kunci utama",
        body: [
          "Saat membuat wallet, kamu akan diberi 12 atau 24 kata acak. Ini seed phrase. Siapa pun yang tahu kata-kata ini bisa mengambil seluruh asetmu dari perangkat mana saja.",
          "Tulis di kertas, simpan di tempat aman. Jangan difoto, jangan disimpan di catatan HP, dan jangan pernah diketik di website mana pun. Tim support asli tidak akan pernah memintanya.",
        ],
      },
      {
        heading: "Custodial vs non-custodial",
        body: [
          "Wallet di exchange (custodial) dikelola perusahaan, mirip rekening bank. Wallet seperti MetaMask (non-custodial) dikelola kamu sendiri. Lebih bebas, tapi kalau seed phrase hilang, tidak ada tombol lupa password.",
        ],
      },
    ],
    analogy:
      "Alamat wallet itu seperti nomor rekening: boleh dibagikan supaya orang bisa mengirim. Seed phrase itu seperti PIN, tanda tangan, dan kunci brankas sekaligus: tidak boleh dibagikan ke siapa pun.",
    takeaways: [
      "Wallet menyimpan kunci, bukan aset.",
      "Alamat boleh dibagikan. Seed phrase tidak pernah.",
      "Tidak ada admin yang bisa memulihkan seed phrase yang hilang.",
    ],
    quiz: [
      {
        q: "Seseorang mengaku admin dan meminta seed phrase untuk 'verifikasi'. Apa yang kamu lakukan?",
        options: ["Kirim saja, dia admin", "Kirim setengahnya", "Tolak dan laporkan, itu penipuan", "Kirim lewat DM supaya aman"],
        answer: 2,
        explain: "Tidak ada layanan resmi yang meminta seed phrase. Permintaan seperti ini selalu penipuan.",
      },
      {
        q: "Apa yang boleh kamu bagikan supaya teman bisa mengirim token?",
        options: ["Seed phrase", "Private key", "Alamat wallet", "Screenshot seed phrase"],
        answer: 2,
        explain: "Alamat wallet bersifat publik, seperti nomor rekening.",
      },
      {
        q: "Wallet sebenarnya menyimpan…",
        options: ["Koin fisik", "Kunci akses ke alamat di blockchain", "Saldo bank", "File NFT"],
        answer: 1,
        explain: "Aset tercatat di blockchain. Wallet menyimpan kunci untuk mengaksesnya.",
      },
    ],
  },
  {
    slug: "nft",
    title: "NFT dan kepemilikan digital",
    short: "Bukan sekadar gambar mahal. NFT adalah sertifikat kepemilikan.",
    minutes: 6,
    color: "grape",
    sections: [
      {
        heading: "Non-fungible artinya tidak bisa ditukar setara",
        body: [
          "Uang Rp10.000 bisa ditukar dengan Rp10.000 lain, nilainya sama (fungible). Tiket konser dengan nomor kursi tertentu tidak bisa ditukar begitu saja, karena masing-masing unik (non-fungible).",
          "NFT adalah token unik di blockchain yang mencatat siapa pemilik sebuah item digital: karya seni, tiket acara, sertifikat, item game, atau keanggotaan komunitas.",
        ],
      },
      {
        heading: "Lebih dari sekadar gambar",
        body: [
          "Banyak event Web3 memakai NFT sebagai bukti kehadiran (misalnya POAP). Kampus bisa memakai NFT sebagai sertifikat yang mudah diverifikasi. Musisi bisa memberi akses khusus ke pemegang NFT mereka.",
          "Ingat: membeli NFT tidak selalu berarti kamu punya hak cipta karyanya. Cek lisensinya. Contohnya, karya Nouns berlisensi CC0, artinya bebas dipakai siapa saja.",
        ],
      },
    ],
    analogy:
      "NFT itu seperti nomor seri dan sertifikat pada sebuah lukisan. Fotonya bisa disalin semua orang, tapi catatan siapa pemilik aslinya cuma satu.",
    takeaways: [
      "Fungible = bisa ditukar setara. Non-fungible = unik.",
      "NFT mencatat kepemilikan, bukan otomatis hak cipta.",
      "NFT juga dipakai untuk tiket, sertifikat, dan bukti kehadiran.",
    ],
    quiz: [
      {
        q: "Mana yang paling tepat disebut non-fungible?",
        options: ["Uang kertas Rp10.000", "Tiket konser dengan nomor kursi", "1 liter bensin", "1 USDC"],
        answer: 1,
        explain: "Tiket dengan nomor kursi bersifat unik, jadi tidak bisa ditukar setara.",
      },
      {
        q: "POAP biasanya dipakai sebagai…",
        options: ["Bukti kehadiran di sebuah acara", "Stablecoin", "Password wallet", "Biaya gas"],
        answer: 0,
        explain: "POAP (Proof of Attendance Protocol) adalah NFT bukti kehadiran.",
      },
      {
        q: "Lisensi CC0 pada karya Nouns berarti…",
        options: ["Tidak boleh dipakai siapa pun", "Hanya pemilik NFT yang boleh pakai", "Bebas dipakai siapa saja", "Harus bayar royalti"],
        answer: 2,
        explain: "CC0 melepaskan hak cipta ke domain publik, jadi siapa pun boleh memakai dan mengembangkannya.",
      },
    ],
  },
  {
    slug: "dao-dan-nouns",
    title: "DAO dan Nouns",
    short: "Komunitas yang mengambil keputusan lewat voting di blockchain.",
    minutes: 7,
    color: "noggle",
    sections: [
      {
        heading: "Organisasi tanpa kantor pusat",
        body: [
          "DAO (Decentralized Autonomous Organization) adalah komunitas yang aturannya ditulis di smart contract. Anggota mengajukan proposal dan memberi suara. Kalau proposal disetujui, dana dari kas bersama bisa dicairkan otomatis.",
          "Semua proposal dan hasil voting tercatat publik, jadi siapa saja bisa memeriksa ke mana dana komunitas mengalir.",
        ],
      },
      {
        heading: "Kenalan dengan Nouns",
        body: [
          "Nouns DAO dimulai pada 2021. Setiap hari, satu karakter Noun dibuat dan dilelang. Hasil lelang masuk ke kas DAO, dan setiap pemilik Noun punya satu suara untuk menentukan dana itu dipakai untuk apa.",
          "Kacamata kotak khas Nouns disebut noggles ⌐◨-◨. Karena seluruh karya Nouns berlisensi CC0, komunitas di seluruh dunia bebas membuat merch, film, game, dan acara bertema Nouns. Nounsweek adalah salah satunya.",
        ],
      },
    ],
    analogy:
      "Bayangkan OSIS yang kas dan aturannya dikunci di aplikasi transparan. Setiap pengeluaran harus lewat voting, dan semua murid bisa melihat hasilnya.",
    takeaways: [
      "DAO = komunitas + smart contract + voting.",
      "Nouns DAO melelang satu Noun setiap hari untuk mengisi kas bersama.",
      "Noggles ⌐◨-◨ dan seluruh karya Nouns bebas dipakai (CC0).",
    ],
    quiz: [
      {
        q: "Di sebuah DAO, keputusan biasanya diambil lewat…",
        options: ["Perintah CEO", "Voting anggota atas proposal", "Undian acak", "Keputusan bank"],
        answer: 1,
        explain: "Anggota DAO mengajukan dan memilih proposal, lalu hasilnya dijalankan smart contract.",
      },
      {
        q: "Seberapa sering Nouns DAO melelang Noun baru?",
        options: ["Setiap hari", "Setiap tahun", "Sekali saja", "Setiap ada proposal"],
        answer: 0,
        explain: "Satu Noun dibuat dan dilelang setiap hari.",
      },
      {
        q: "Apa nama kacamata khas Nouns?",
        options: ["Goggles", "Noggles", "Specs", "Lensa"],
        answer: 1,
        explain: "Kacamata kotak khas Nouns disebut noggles ⌐◨-◨.",
      },
    ],
  },
  {
    slug: "aman-di-web3",
    title: "Aman di Web3",
    short: "Kenali penipuan paling umum sebelum kamu jadi korbannya.",
    minutes: 6,
    color: "sun",
    sections: [
      {
        heading: "Penipuan yang paling sering terjadi",
        body: [
          "Phishing: website palsu yang mirip aslinya, meminta kamu connect wallet atau mengetik seed phrase. Selalu cek alamat URL dan simpan bookmark website resmi.",
          "Airdrop palsu: token atau NFT misterius tiba-tiba muncul di wallet-mu, lalu mengarahkan ke website untuk 'klaim hadiah'. Abaikan.",
          "Investasi 'pasti untung': siapa pun yang menjanjikan keuntungan tetap atau berlipat dalam waktu singkat hampir pasti penipu. Ini juga ciri skema ponzi.",
          "Rug pull: pembuat proyek kabur membawa dana setelah orang ramai membeli tokennya.",
        ],
      },
      {
        heading: "Kebiasaan aman",
        body: [
          "Pisahkan wallet: satu untuk coba-coba (isinya sedikit), satu untuk simpan. Baca dulu apa yang kamu tanda tangani sebelum klik 'Confirm'. Aktifkan 2FA di exchange. Kalau ragu, tanya di komunitas sebelum bertindak.",
        ],
      },
    ],
    analogy:
      "Di Web3 tidak ada bank yang bisa membatalkan transaksi. Jadi anggap setiap klik 'Confirm' seperti menyerahkan uang tunai: setelah lepas, sulit kembali.",
    takeaways: [
      "Cek URL, jangan klik link dari DM.",
      "Abaikan airdrop misterius dan janji 'pasti untung'.",
      "Pakai wallet terpisah untuk coba-coba.",
    ],
    quiz: [
      {
        q: "NFT tak dikenal muncul di wallet-mu dengan link 'klaim hadiah'. Langkah terbaik?",
        options: ["Klik linknya cepat-cepat", "Abaikan, jangan berinteraksi", "Connect wallet utama", "Bagikan ke teman"],
        answer: 1,
        explain: "Airdrop misterius sering jadi umpan phishing. Abaikan saja.",
      },
      {
        q: "Tawaran 'deposit 1 juta, pasti jadi 3 juta minggu depan' adalah…",
        options: ["Peluang emas", "Ciri penipuan", "Program pemerintah", "Fitur blockchain"],
        answer: 1,
        explain: "Janji keuntungan pasti dan berlipat adalah tanda bahaya klasik.",
      },
      {
        q: "Kebiasaan aman saat mencoba dApp baru?",
        options: ["Pakai wallet utama berisi semua aset", "Pakai wallet terpisah berisi sedikit aset", "Bagikan seed phrase ke dev", "Matikan semua notifikasi"],
        answer: 1,
        explain: "Wallet terpisah membatasi kerugian kalau dApp ternyata berbahaya.",
      },
    ],
  },
];

export function getModule(slug: string) {
  return modules.find((m) => m.slug === slug);
}
