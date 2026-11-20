// Dokumentasi Nounsweek, diambil dari Google Drive publik:
// https://drive.google.com/drive/folders/19kzTvtKPRZ46N-miEji5SrOpoW8j5yD9
//
// Setiap entri = satu folder di Drive. `photos` dan `videos` berisi ID file Drive.
// Foto ditampilkan lewat CDN Google (lh3.googleusercontent.com) dan dioptimasi oleh Vercel,
// jadi file di Drive HARUS tetap "Siapa saja yang memiliki link dapat melihat".
// Untuk menambah foto: buka file di Drive, salin ID dari URL (/file/d/<ID>/view) ke array.
// Teks versi Inggris ada di documentation.en.ts.

import { docTranslationsEn } from "./documentation.en";
import type { Lang } from "@/i18n/config";

export type DocCategory = "Kegiatan" | "Proyek didanai" | "Konsep";

export type DocFolder = {
  slug: string;
  title: string;
  category: DocCategory;
  /** dipakai untuk mengurutkan dan menampilkan di timeline */
  year: number;
  when: string;
  place?: string;
  summary: string;
  driveFolderId: string;
  cover: string;
  photos: string[];
  videos?: { id: string; title: string }[];
  /** foto vertikal / poster: tampilkan utuh, tidak dipotong */
  posterIds?: string[];
};

export const DRIVE_ROOT = "19kzTvtKPRZ46N-miEji5SrOpoW8j5yD9";

export const driveFolderUrl = (id: string) => `https://drive.google.com/drive/folders/${id}`;
export const drivePhoto = (id: string, w = 1600) => `https://lh3.googleusercontent.com/d/${id}=w${w}`;
export const driveVideoEmbed = (id: string) => `https://drive.google.com/file/d/${id}/preview`;

export const docFolders: DocFolder[] = [
  {
    slug: "nounsweek-menyapa",
    title: "Nounsweek Menyapa: Minggunouns",
    category: "Kegiatan",
    year: 2024,
    when: "Januari–Februari 2024",
    place: "Makassar",
    summary:
      "Seri kumpul mingguan Minggunouns menjelang Bali Nounsweek 2024. Edisi #02 pada 4 Februari 2024 di Upnormal Perintis, Makassar, membahas pengenalan industri Web3, NFT, dan event Bali Nounsweek 2024. Gratis, dengan e-certificate, merchandise, dan giveaway untuk peserta.",
    driveFolderId: "1_DAmUEIVRL0IKn-hwBFYvkgsyqkvRyVO",
    cover: "1QFKhK_o9o2KzuX6YzPAS_kcJkoqpKmBT",
    posterIds: ["1ZB0sjowiFYokAnOMmfizFtbXy0e8AOCe"],
    photos: [
      "1ZB0sjowiFYokAnOMmfizFtbXy0e8AOCe",
      "1QFKhK_o9o2KzuX6YzPAS_kcJkoqpKmBT",
      "10mw-G0HMXJsdoZRFBDjpC6LWQWIQlkh_",
      "1Vm6oMkkHlKCWLjqHAGRHZSdjc3P4_cDP",
      "1hgyuzMR-dsg6Hf-I7VyJDogIjjTXFGo5",
      "1sw60p6OkHs8lDiJzmCR8vYVA_uDr6H0H",
      "1AmWVmsxRMustsy_swUVBChaXDgzr55Mf",
      "18-uXbDpzdPE2eLjZdPgdtktK8YD7SYfY",
      "1-KCk1V24NxnDSIRf5EPDJxR_Jw8qe020",
      "1P-kPWbVJYrnSGhx1JkBDbJBdzjE6Gm5O",
      "10E30tiuyiVKVWZDkBFEdL9L8BIA20FMk",
      "1OS6u7pIGLVhO0CJ_IRGUui4TSiiCpMUI",
      "1GQhlYCFp74o72nY8Y3-AYe5lG7ErdvNe",
      "1bgVbidN92Uyh2BgutHrnj15Xh05011ah",
      "1mgqeQ9sLQX73k-T3AfFyVGbw1zr_Sdxj",
      "1vAYu7ZqhmSgodoAx5ZCpmle73C87V8uR",
      "1yUZZBihPI1bx8gtJrl_3zav7UGLwD6GN",
      "1aaZDDrPkxZYZsXwigPgrTu0leT2lpCfx",
    ],
    videos: [
      { id: "182k9TE040IuPYNAZUqb0J9JHl2ZivREU", title: "Minggunouns edisi ketiga" },
      { id: "1_qHxJDSKmDtPgeyYp-esAPm75V0ap8g9", title: "Cuplikan kegiatan 1" },
      { id: "1y8xUaRdci1jhafRBHUyOyt2iY7a5IY-7", title: "Cuplikan kegiatan 2" },
      { id: "1VrFXMGsDd73g1ArzujN5-Ky6FSDyFurF", title: "Cuplikan kegiatan 3" },
    ],
  },
  {
    slug: "bali-nounsweek-2024",
    title: "Bali Nounsweek 2024",
    category: "Kegiatan",
    year: 2024,
    when: "Maret 2024",
    place: "Bali",
    summary:
      "Acara utama Nounsweek 2024 di Bali: pameran merchandise dan karya seni bertema Nouns, sesi diskusi dan workshop, serta perkenalan Nouns dan Web3 untuk pengunjung. Banyak yang pulang dengan kesan “seru banget, jadi tau apa itu Nouns”.",
    driveFolderId: "1yg81P7DjssX9wYIJXLCGGENci1v2mDjv",
    cover: "1XgPLiMBh5SZAoOBjv-W3AImSELhXVPkD",
    photos: [
      "1R_Dv295wH0YIXtekQVQ2KDzfZhk1y1-x",
      "1eVqyOUz4CT5WScDH-H0WE1nKmax09zHw",
      "1yhIzEloLbB27KZqyLc3tNHRygiXRWZqZ",
      "1XgPLiMBh5SZAoOBjv-W3AImSELhXVPkD",
      "1Q_QstQTF-112mUUhn9G71SLLVuf4B37V",
      "1ktuO4ZKrrqAW98NYcH0pGu3nWrX9PTu8",
      "1fcw1wgTDPA18J8XsQKzg08XETVfFvqEw",
      "1XKuMdLmonHIW-UDIFHpLQbpFoum7IoKr",
      "1woCwsu7F5zPRlf0o1XP22fqp4QRUxp5q",
      "1d9OkurhPJCMeLHG3fdJ7OGFXlUZLcS2H",
      "1GOV5c1C27SX_HIrEhk1hOxqg_XOKDgDa",
      "1td2gZvPeY9W9CnYz2JlpcK2U-f427n1h",
      "1vjj0cYVUHtnPk2dPwO_Rgv488Vi2rtlM",
      "1GnB-MUpWIF0vqmL8JaRbtijeBVfHwgiB",
      "1DQ0cjRH9DUWQyrtREG5uylPXKvhkAvwe",
      "16w-xW-5zGAFadusLB1HqrrBaNf5PArkY",
      "1fyu0kH9wX7eC5Z9jHhDqtFteNxo5_MyX",
      "1LiIz3SpVNkWXil8dgrckpyrfwwPxhB6l",
      "1xb3FC2-41MxlqqLEf2iMwe9MFv0AR_ua",
      "1uSejdCFcCM2uX8gya6UZRA6hHm8vgPPX",
      "1wPaq5DX1ZIBrwDxivYpubYqKOuEvI3Ty",
      "15Hkc6nB3gC9vZkFNFSS4HoEm0B_ZyYVH",
      "12CA6hqJlnZcd4sihEOEo_1ZV7D8v13ki",
      "1DvUccY0TlqXGNjSPSZFsCo3dcCLxcJxE",
      "1AjiOrXSndzc_EP12LHxa32G7SC98Yrag",
      "1G1AGqHQhCCYBH3Fxmk9uEqOKPDvaVZ0a",
      "1UhkeoBnV0KhoFfM1E9_HNYdR6f9f8a56",
      "1ud-oaAPwdypBiYqT3CGaSl1eF5_7mlbE",
      "15FkU71M1oxODS7UZvVHhrzYQK3CtepFk",
      "1O9R8edAmLHvoqZSIsVUt03O-6OhBhW6y",
      "1n9YWUUc2xGAHgT7HMjhHcWqz34y2ft3I",
      "1FT2QZuh-i4PKJmBhhkSLNi9BaIF4aYbg",
      "1YnFwW-PqQSNog0Yvo2fiZjaEj5wDkFHi",
      "1bx1pmWmxTPH0a4IOcGGnuy5Gq-Ha3ONh",
      "1MmUA1teNxiacZvNrdokkIg-1dtXyU_cV",
      "1zdOo-d4sutUHWdrJa8-MRZG6bLY0UnFh",
      "1vBzDHIPV5dPbE6EmdXZtfoid7-_azBAp",
    ],
    videos: [
      { id: "1oJg9IOSrP-bkr-KUZQy78VHQdbZ3vAQF", title: "Seru banget, jadi tau apa itu Nouns" },
      { id: "1mMBZP7Lpp2Eo0V49e6f1zFxQxnCldwT-", title: "Cuplikan acara 1" },
      { id: "1HBoKOMREDvpXXZ91HkQuGOxaKtllMuGP", title: "Cuplikan acara 2" },
      { id: "1ZFhrgktJIY2gIpTfvsX_FujiDTbgWXMm", title: "Cuplikan acara 3" },
    ],
  },
  {
    slug: "nouns-batik",
    title: "Nouns Batik",
    category: "Proyek didanai",
    year: 2024,
    when: "Maret–April 2024",
    summary:
      "Kemeja batik bermotif Nouns yang dibuat bersama pengrajin batik. Proyek ini memadukan kerajinan Indonesia dengan karya CC0 Nouns, dan produknya dijual secara online.",
    driveFolderId: "1uVts-Nh6HLln8UklCK-EKOYT467W4CUd",
    cover: "1VAEW_0HQWklu7-x7zB0GWh3NtxiWS9Vm",
    posterIds: ["1H9M_m0hvgTukBcwMR_qbXm7fP2vyhk-c", "1_As7NBR27Nmz0XHJuy2xg9HgORFXDPtQ"],
    photos: [
      "1VAEW_0HQWklu7-x7zB0GWh3NtxiWS9Vm",
      "1otC69WTSMPb3BLVTFOwvzp7rZWduAFlk",
      "1pgwHRWDXGqLKRO3cSW_7xG-BoDwoOB7v",
      "1H9M_m0hvgTukBcwMR_qbXm7fP2vyhk-c",
      "1_As7NBR27Nmz0XHJuy2xg9HgORFXDPtQ",
    ],
  },
  {
    slug: "nouns-chocolate",
    title: "Nouns Chocolate",
    category: "Proyek didanai",
    year: 2024,
    when: "April 2024",
    summary: "Cokelat berbungkus emas dengan stiker noggles, dijual dalam toples. Cara manis membawa Nouns ke produk sehari-hari.",
    driveFolderId: "1DiYZyCnJx4N-8DwuQy-ezVt7P57Y8QLE",
    cover: "1gF5v-Xl2oFRLQeX9JGUxXMtOeSmPUNvu",
    photos: ["1gF5v-Xl2oFRLQeX9JGUxXMtOeSmPUNvu", "1QSkHp-j5kAhY0437UPf1CRVbszyerC12", "1EHWMk--UDMxgZkTEPGj8AUAfCSlnSw7i"],
  },
  {
    slug: "nouns-donasi-panti-asuhan",
    title: "Nouns Donate to an Orphanage",
    category: "Proyek didanai",
    year: 2024,
    when: "Mei 2024",
    summary: "Santunan anak yatim: tas sekolah bergambar Nouns dibagikan langsung ke anak-anak panti asuhan dari dana komunitas.",
    driveFolderId: "1QqSmGKCoEvCqmNEVw8ujP3s4DkJsoGhc",
    cover: "1JaQEVIJYEijNgJ1VXwhYYDij2TWEyrR1",
    photos: [
      "1JaQEVIJYEijNgJ1VXwhYYDij2TWEyrR1",
      "1enWn4O-_3xWx9nEb6_NHU3HLGhjrMTgl",
      "1cechCYJkRtsDt2TKmcbdQt6Wsa9NKogx",
      "1XISs7uK1K3QfljPa5iVF79mxYd2-qLiZ",
    ],
  },
  {
    slug: "nouns-trash",
    title: "Nouns Trash",
    category: "Proyek didanai",
    year: 2024,
    when: "Maret–April 2024",
    summary: "Tempat sampah berbentuk noggles yang dibuat dan dipasang di ruang publik, mengajak warga membuang sampah pada tempatnya.",
    driveFolderId: "1st2lQo3GNjZoD3H3qro8X16OhxTP4p-s",
    cover: "1TNySeXSB--8IXzugTH1U72e9xrTTpeAN",
    photos: [
      "1TNySeXSB--8IXzugTH1U72e9xrTTpeAN",
      "15YeTaN05bxno--lM61mEavp2qMN8QDN5",
      "14OgGxApsyNNCsjfN6-f6vOBuksavxfNb",
      "1Zue1S2g3OqsrLCdEdvoCvho2uzMfJoJy",
      "1Qpq7GpLVMp6vLloL4U_Hir5cqfgk8Rfe",
      "18k2cmFlTAa8co8fjkr3fInx1MPGYxYcR",
      "1UfZMzQJLgaOQmQr-Hs-LV0pmJbcYHj8g",
    ],
  },
  {
    slug: "nounscraft",
    title: "Nounscraft",
    category: "Kegiatan",
    year: 2025,
    when: "Desember 2024–Mei 2025",
    summary:
      "Nounscraft mengajak anak-anak dan keluarga berkarya: mewarnai dan membuat kerajinan bertema Nouns, booth keliling, dan figur noggles. Lengkap dengan video wawancara tim.",
    driveFolderId: "1KFIm5cnz3wdLl2nOKux1DrJnWkO6gDAj",
    cover: "1WxLx4RJ4U1jPk5IT3Ik8035tmkXFfstz",
    posterIds: ["1T-V1KAgQIZqAljhrnkZDsyb-Iz7vgWDr"],
    photos: [
      "1T-V1KAgQIZqAljhrnkZDsyb-Iz7vgWDr",
      "1WxLx4RJ4U1jPk5IT3Ik8035tmkXFfstz",
      "1HpDns6f9zKlEFelMgc2U_4xeUTawzRuJ",
      "1Bdsw5BEuyIoitY2mRj3rf2dNxlW89et-",
      "1-hz5ei-AtwVJedoCyUt8tUd9I8BwLSdi",
      "1mUqwzRGNQ7M5X5kQBQZHui3oXYdOzBcR",
      "1jHGtnkWr3_Dsc6vRYt0xNGBPC50WvXO6",
      "1YlYkn_w421jlrKpL71i7Jm6g8Qul7xd0",
      "18D-zTYbLtlCalAPw4LjaaQz4P9lCbDuK",
      "1CsCYJ9GfIsGpn4jDxEtbtg84l0bl-DEP",
      "16hC_RrwQePFv1L5wnuQfcqLodK_IcMIN",
      "1JpAsot8kY9QMnoOZiIxG7GDvDq-iaZ6j",
      "15GA63p8D6nxaatlH_L9-D7XcdpQSSH2n",
      "1yPXZ-gG1DTE6YVrn6QEZFn7FQFNFFHP8",
      "1shyqJlntobnP0OLlfswFn-jqOyW2nxfB",
      "1FkZd0bKrgVp8hnOblgLg7Pr9jnsdNS5l",
      "1haH1K7vSJof7uirNKbgCfkrt-qvrzt8o",
      "16dFdCFdWd6THwL17x0JyXK_J7XoEO8zn",
      "1h3VZXAU7y0iI69B7bfM1VMwhkRYdC6Cf",
      "1Ijl6lJzgPKWzJXwOOosaFbDJlB6xB39W",
      "1e47qouaDcgW-QF6zUxT53F5j1v-unsut",
      "16yxhi-P_7rOr94o2Yzy6_-VHx2i-YnlF",
      "1eSqcIzOJ_h7g8s5THvc3ckou0JQMNZ0K",
      "1spcYxdi9RM42OfbT_SzOQ4wd1mh4ak8X",
      "1AJgpaIZIAiZN6cjkGhtwv8xq9hOgBith",
      "16WqmDECScF6gU3Ca_aoj6C37BWMhWiGL",
      "1F9ZxLyqzFORoRHypV8uY6EQf3mV8Wh-E",
      "1scLQmcqDXLfTFW__ne6t5NBWbWfKcGAc",
      "12Z9FWDjEDtNwl0HeQ8HeIIRp9Yq9xa8m",
      "13VX0RqLsGUnrqKLOll4_6B6WnE576kfZ",
      "12JFX6hv4aOaNAHOXuW72Z4w_vhKKZm5p",
      "1Q8W4T-pODij31zj0yC81bpAxIfVwi3XE",
      "1ybD--41_BGzymkoVcJbc174-nNjykW3S",
      "1NDBvjjASZLb2DGkIKXnihSk3qLD7bHVM",
      "1f_JqmV2rNHzZCovwKw1n02mKmqiFXLB-",
      "1O_6TKk45BHXX1FIB9wfEjG2jAQ7EHHZj",
      "1YxWizKE7I83refNIDjBcMvPgosSR_eJy",
      "1vMw18nXT_WZK3X6XO_EerEIcaDSK7Q-D",
      "1DN9XL82mUY6rAIE82jIYDSvKBQBLySh4",
      "1YBEe2Bh9VqVXKKbdgAkdwcdmuGOll1Re",
      "114hNEr8CiNRTyZY7rshK3kBnk_XZq7pK",
      "1NWsJrp2eQxDg4OWq376RnOyu1hQ4iMdh",
      "11HX9EfithrsG6_tQliChRFGO4FBwTNaW",
      "1MSa8bKXJv-97ft8MdevKdpOxhH48bKRz",
      "17C11zJD8RthtNkbSrgg7ojiCuTSyQftw",
      "13irDd-lljoZNBqvH5ATujtVRmTCHv8l8",
    ],
    videos: [
      { id: "14-F0xQjJOF8-isrKOXfwbpukgEKZtIKW", title: "Wawancara tim Nounscraft" },
      { id: "1gSwWlm7Aqw9ogAeFmcJ87XZpYgGQi3DY", title: "Cuplikan Nounscraft 1" },
      { id: "1ssrKtg3LOkszm0Ygm9B7SxFPfo20rXYH", title: "Cuplikan Nounscraft 2" },
      { id: "1PiYYFqBBJtUIGvFnBb0PMsF0x4xCbue-", title: "Cuplikan Nounscraft 3" },
    ],
  },
  {
    slug: "nouns-gaming-lounge",
    title: "Nouns Gaming Lounge",
    category: "Konsep",
    year: 2024,
    when: "Konsep desain",
    summary:
      "Rancangan ruang gaming bertema Nouns: area PC reguler dan turnamen, ruang PlayStation VIP, sudut board game, ruang rapat, dan resepsionis di tiap lantai.",
    driveFolderId: "1LAOIHaWKPu0CiwUOq1a6ST7mCzRuNGH6",
    cover: "1j-ob2w_XAXT_JNOO7J0KoMYzXHaLPARJ",
    posterIds: ["1rkT0OFYMmCT5VHWRzplXFzChyDqBPtSp"],
    photos: [
      "1j-ob2w_XAXT_JNOO7J0KoMYzXHaLPARJ",
      "1rkT0OFYMmCT5VHWRzplXFzChyDqBPtSp",
      "1npbNbCPVWYyBTD5Gcncx6CI2K8DvSo2s",
      "11aoK2juJ4f_sf1o3zz3hoinU1EfTocgs",
      "1VCKbmgI1PnFeWZeq4DpnNQLQZCO5pHrR",
      "18p0JjQW9Z6Tj1hgseIoj5fetKeabYotR",
      "19J4lP-7CZtUpMS2YCq6YO6kJWykJzQYJ",
      "1_GKpl85jzM9BIH-kUj0C7QK_kmguuA8Q",
      "1fYva5HX2aq4iaOdQPmFkUH3HbNdIT1Kx",
      "13nOXhrCDq4Y8lcITSx9K9P6vyLjSMDgj",
      "17Y4Sb0Dv3M_zgakvBuT3hnwUGdwFv4HQ",
      "1uING3FMbR1Vy1YsisHfSfviC7oIZJYe3",
      "1VneCQt4vAiW8Jbuw_5GSKR-vNCag4kVD",
      "1uA-7oKKukQY7YwXet0dBkAAlL3oEJXet",
      "1dBq51TUjYtkIBQO85ABrgAzCMlSEyxMW",
      "1EVr45c2CvypGYhVqybrtBj1IcULiOvkp",
      "1XmNfGeZee7jgxypZD7jaOO41Poad3d4O",
      "13zCBxN1g7DuRq4oI1HS3dRUkxanhmCW0",
      "1BLUA_2Z1uop0TnyHIOk1sl-rI8zGnHt0",
      "1F17ZNBfJQzjLS6RpDLaW24-ZNr6JXyCG",
    ],
  },
  {
    slug: "nouns-home-design",
    title: "Nouns Home Design",
    category: "Konsep",
    year: 2024,
    when: "Konsep desain",
    summary: "Eksplorasi desain furnitur bertema Nouns, seperti bangku dan meja dengan bentuk terinspirasi noggles, lengkap dengan render suasana ruangnya.",
    driveFolderId: "1hlSA2AWkzIeM_qxEJDVP23o84iPfFqh0",
    cover: "1akGmcT02Hn_zSg3IqR7C625vsTuR_wg0",
    photos: [
      "1rX8eaOjhHq6tu79bLl1zUmppK6NI42l4",
      "1MAfYObzl02g2OQjDxtD_RSWGZSG0QqDM",
      "1NleQIKOXRzwImZPmxKQ9Kl3ksAcrzjjL",
      "1ds8xBLVLEc71EnO2_IBCsj5NOiMkAMY3",
      "1WJpXyFw3GdafBuUT6NkSxcQiCH_IrVdz",
      "1ZuXWrUW9n_QhS03LlyMbZeBhrgIs6xOU",
      "1akGmcT02Hn_zSg3IqR7C625vsTuR_wg0",
      "1AryafqNK7R1otFaaGo8VOjfv3ItUM2o_",
    ],
  },
  {
    slug: "nouns-kost",
    title: "Nouns Kost",
    category: "Konsep",
    year: 2024,
    when: "April 2024",
    summary: "Konsep kamar kos bertema Nouns untuk mahasiswa, dengan karya seni Nouns di dinding. Lengkap dengan render 3D dan video walkthrough.",
    driveFolderId: "1u12am_9vo4YWhsMG9a-fSDBLrCexaGWI",
    cover: "1z1hCNyDtnX4vozgogOw9ImLulvS_Gimd",
    photos: ["1z1hCNyDtnX4vozgogOw9ImLulvS_Gimd", "1FQLuBJdegCcy0892Yc3p_v6fS6E5iTwi", "1TBA1PMeBmG1BcWF3le0fSX834jZUjKbr"],
    videos: [{ id: "1zExGfhtr84qMjUfkistjEV-_nhyKKRro", title: "Walkthrough 3D Nouns Kost" }],
  },
];

/** Data dokumentasi sesuai bahasa (teks Inggris dari documentation.en.ts). */
export function getDocFolders(lang: Lang): DocFolder[] {
  if (lang === "id") return docFolders;
  return docFolders.map((d) => {
    const t = docTranslationsEn[d.slug];
    if (!t) return d;
    return {
      ...d,
      title: t.title ?? d.title,
      when: t.when,
      place: t.place ?? d.place,
      summary: t.summary,
      videos: d.videos?.map((v, i) => ({ ...v, title: t.videoTitles?.[i] ?? v.title })),
    };
  });
}

export function getDocFolder(slug: string, lang: Lang = "id") {
  return getDocFolders(lang).find((d) => d.slug === slug);
}

export const docCategoryKeys: DocCategory[] = ["Kegiatan", "Proyek didanai", "Konsep"];
