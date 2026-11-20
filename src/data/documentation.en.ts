// English text for each documentation folder (keyed by slug in documentation.ts).
// Photos and videos are shared; only the text is translated here.
export type DocTranslation = {
  title?: string;
  when: string;
  place?: string;
  summary: string;
  /** same order as `videos` in documentation.ts */
  videoTitles?: string[];
};

export const docTranslationsEn: Record<string, DocTranslation> = {
  "nounsweek-menyapa": {
    title: "Nounsweek Says Hi: Minggunouns",
    when: "January–February 2024",
    place: "Makassar",
    summary:
      "A series of weekly Minggunouns meetups in the run-up to Bali Nounsweek 2024. Edition #02, on 4 February 2024 at Upnormal Perintis in Makassar, introduced the Web3 industry, NFTs and the Bali Nounsweek 2024 event. Free to attend, with e-certificates, merchandise and giveaways for participants.",
    videoTitles: ["Minggunouns, third edition", "Event highlights 1", "Event highlights 2", "Event highlights 3"],
  },
  "bali-nounsweek-2024": {
    when: "March 2024",
    place: "Bali",
    summary:
      "Nounsweek's main 2024 event in Bali: an exhibition of Nouns-themed merchandise and artwork, discussion sessions and workshops, and an introduction to Nouns and Web3 for visitors. Many left saying it was “so much fun, now I know what Nouns is”.",
    videoTitles: ["So much fun, now I know what Nouns is", "Event highlights 1", "Event highlights 2", "Event highlights 3"],
  },
  "nouns-batik": {
    when: "March–April 2024",
    summary:
      "Nouns-patterned batik shirts made together with batik artisans. The project blends Indonesian craft with CC0 Nouns art, and the products are sold online.",
  },
  "nouns-chocolate": {
    when: "April 2024",
    summary: "Gold-wrapped chocolates with noggles stickers, sold in jars. A sweet way to bring Nouns into everyday products.",
  },
  "nouns-donasi-panti-asuhan": {
    when: "May 2024",
    summary: "Support for orphaned children: school bags printed with Nouns art were handed directly to children at an orphanage, paid for by community funds.",
  },
  "nouns-trash": {
    when: "March–April 2024",
    summary: "Noggles-shaped trash bins built and installed in public spaces, encouraging people to put their rubbish in the right place.",
  },
  nounscraft: {
    when: "December 2024–May 2025",
    summary:
      "Nounscraft invites kids and families to get creative: coloring and making Nouns-themed crafts, a mobile booth and noggles figures. Includes an interview video with the team.",
    videoTitles: ["Nounscraft team interview", "Nounscraft highlights 1", "Nounscraft highlights 2", "Nounscraft highlights 3"],
  },
  "nouns-gaming-lounge": {
    when: "Design concept",
    summary:
      "A design for a Nouns-themed gaming venue: regular and tournament PC areas, VIP PlayStation rooms, a board game corner, meeting rooms and a reception desk on every floor.",
  },
  "nouns-home-design": {
    when: "Design concept",
    summary: "An exploration of Nouns-themed furniture, such as benches and tables shaped after noggles, with renders of the rooms around them.",
  },
  "nouns-kost": {
    title: "Nouns Kost (student housing)",
    when: "April 2024",
    summary: "A concept for Nouns-themed student boarding rooms, with Nouns artwork on the walls. Includes 3D renders and a video walkthrough.",
    videoTitles: ["Nouns Kost 3D walkthrough"],
  },
};
