// English version of the learning modules. Keep the same order, slugs and colors as modules.ts.
import type { LearningModule } from "./modules";

export const modulesEn: LearningModule[] = [
  {
    slug: "apa-itu-web3",
    title: "What is Web3?",
    short: "From an internet you can only read, to an internet you can own.",
    minutes: 6,
    color: "noggle",
    sections: [
      {
        heading: "The internet has three chapters",
        body: [
          "Web1 (roughly 1990–2004) was the read-only internet. Websites were static, like digital brochures. You came, you read, you left.",
          "Web2 (2004–today) is the read-and-write internet. You can upload photos, make videos and comment. But your account, data and followers are stored by the platform. If your account gets banned, it all disappears.",
          "Web3 adds one thing: ownership. Digital assets, identity and your voice in a community can be recorded on a blockchain, so the person holding the keys is you, not a company.",
        ],
      },
      {
        heading: "Why does this matter for young people?",
        body: [
          "Creators can sell their work directly to fans without big platform cuts. Communities can manage shared funds in the open. And you can carry your digital reputation from one app to another.",
          "Web3 is also young and full of experiments. There are opportunities, but also many risks and scams. That is why learning the basics first matters.",
        ],
      },
    ],
    analogy:
      "Web2 is like renting a room in a boarding house: comfortable, but the landlord holds the rules and the keys. Web3 is like owning your own house: you hold the keys, but you are also responsible for keeping them safe.",
    takeaways: [
      "Web1 = read, Web2 = read + write, Web3 = read + write + own.",
      "In Web3, the keys to your account are in your own hands.",
      "More freedom also means more responsibility for your own security.",
    ],
    quiz: [
      {
        q: "What mainly sets Web3 apart from Web2?",
        options: ["More videos", "Users own their assets and data", "Faster internet", "More colorful websites"],
        answer: 1,
        explain: "Web3 adds a layer of ownership: you hold the keys to your digital assets and identity.",
      },
      {
        q: "In Web2, who usually stores your account data?",
        options: ["You", "A blockchain network", "The platform company", "Nobody"],
        answer: 2,
        explain: "Platforms such as social media store data on their own servers, so they control it.",
      },
      {
        q: "Web1 is best described as…",
        options: ["An internet for reading", "An internet for games", "An internet for trading NFTs", "An internet with no websites"],
        answer: 0,
        explain: "Web1 was made of static pages that you could mostly only read.",
      },
    ],
  },
  {
    slug: "blockchain",
    title: "Blockchain, step by step",
    short: "A shared notebook that nobody can secretly erase.",
    minutes: 8,
    color: "sun",
    sections: [
      {
        heading: "A ledger copied thousands of times",
        body: [
          "A blockchain is a record of transactions stored at the same time by many computers (called nodes) around the world. Every node has the same copy.",
          "Transactions are grouped into blocks. Each block stores the fingerprint (hash) of the block before it, so they link together like a chain. Changing an old block would break every fingerprint after it, and other nodes would reject it immediately.",
        ],
      },
      {
        heading: "Who decides on the next block?",
        body: [
          "The network needs a way to agree. This is called a consensus mechanism. Bitcoin uses Proof of Work: computers race to solve a math puzzle. Ethereum uses Proof of Stake: validators lock up ETH as collateral and can lose it if they cheat.",
          "As a result, no single party can change the record alone. That is what decentralized means.",
        ],
      },
      {
        heading: "Public, but not your name in lights",
        body: [
          "On a public blockchain, anyone can see transactions using a block explorer such as Etherscan. What they see is a wallet address (a string like 0x12ab…), not your real name. But if your address is ever linked to your identity, its history can be traced.",
        ],
      },
    ],
    analogy:
      "Imagine a class cash book photocopied for every student. If the treasurer secretly changes a number in their copy, the 30 other copies prove them wrong.",
    takeaways: [
      "Blockchain = a shared record copied by many computers.",
      "Blocks are linked by hashes, which makes them hard to change.",
      "Consensus (PoW or PoS) decides who may add the next block.",
    ],
    quiz: [
      {
        q: "Why is old data on a blockchain hard to change?",
        options: ["It is locked with an admin password", "Each block stores the hash of the previous block", "It is stored on one super-secure server", "The government encrypts it"],
        answer: 1,
        explain: "Changing a block changes its hash and breaks the chain, so other nodes reject it.",
      },
      {
        q: "Ethereum currently uses which consensus mechanism?",
        options: ["Proof of Work", "Proof of Stake", "Proof of Like", "No consensus"],
        answer: 1,
        explain: "Since 2022 (The Merge), Ethereum has used Proof of Stake.",
      },
      {
        q: "What is usually visible to the public on a block explorer?",
        options: ["Your full name and ID card", "Wallet addresses and their transactions", "Wallet passwords", "Private chats"],
        answer: 1,
        explain: "Public blockchains show addresses and transactions, not personal data such as names.",
      },
    ],
  },
  {
    slug: "crypto-dan-token",
    title: "Crypto and tokens",
    short: "Coins, tokens, stablecoins, and why prices swing so much.",
    minutes: 7,
    color: "sky",
    sections: [
      {
        heading: "Coins vs tokens",
        body: [
          "A coin is the native asset of a blockchain, such as BTC on Bitcoin and ETH on Ethereum. Coins pay for transaction costs (gas fees).",
          "A token is created on top of an existing blockchain using a smart contract, for example USDC on Ethereum. Making a token is easy, so there are a huge number of tokens with no real value.",
        ],
      },
      {
        heading: "Stablecoins",
        body: [
          "A stablecoin is a token whose value is pegged to another asset, usually the US dollar. 1 USDC is designed to be worth about 1 dollar. Stablecoins are often used for transfers and payments because their price does not swing wildly.",
        ],
      },
      {
        heading: "Volatility: prices can rise and fall sharply",
        body: [
          "Crypto prices are set by supply and demand, and often move tens of percent within days. Never use your pocket money, tuition money or borrowed money to buy crypto.",
          "In Indonesia, crypto asset trading is supervised by the OJK (Financial Services Authority). If one day you are old enough and want to try it, use a platform that is officially registered.",
        ],
      },
    ],
    analogy:
      "A coin is like a country's official currency. A token is like a voucher or loyalty points issued by a shop in that country: it can be useful, or it can be worth nothing.",
    takeaways: [
      "Coin = native asset of a blockchain. Token = built on top of a blockchain.",
      "Stablecoins are pegged to another asset to keep their price stable.",
      "Crypto is highly volatile. Learn first, do not rush to buy.",
    ],
    quiz: [
      {
        q: "ETH is an example of…",
        options: ["A token on Bitcoin", "The native coin of the Ethereum network", "A stablecoin", "An NFT"],
        answer: 1,
        explain: "ETH is the native asset of Ethereum and is used to pay gas fees.",
      },
      {
        q: "The main purpose of a stablecoin is…",
        options: ["To rise in price quickly", "To keep a stable value against a reference asset", "To replace NFTs", "To mine Bitcoin"],
        answer: 1,
        explain: "Stablecoins are designed to stay close to a reference asset, for example 1 US dollar.",
      },
      {
        q: "Which money should you least use to buy crypto?",
        options: ["Tuition money", "Money you can truly afford to lose", "Prize money you have set aside", "It makes no difference"],
        answer: 0,
        explain: "Because prices are volatile, never use money you need for essentials such as tuition.",
      },
    ],
  },
  {
    slug: "wallet",
    title: "Wallets and seed phrases",
    short: "Your digital wallet, and the 12 words nobody else should ever know.",
    minutes: 7,
    color: "leaf",
    sections: [
      {
        heading: "A wallet does not store your money",
        body: [
          "Crypto assets always live on the blockchain. A wallet stores the private key that proves you own an address and lets you send assets from it.",
          "Examples: MetaMask, Rainbow and Coinbase Wallet (apps), or hardware wallets such as Ledger (physical devices).",
        ],
      },
      {
        heading: "Seed phrase = the master key",
        body: [
          "When you create a wallet, you get 12 or 24 random words. This is your seed phrase. Anyone who knows these words can take all your assets from any device.",
          "Write it on paper and store it somewhere safe. Do not photograph it, do not save it in your phone notes, and never type it into any website. Real support teams will never ask for it.",
        ],
      },
      {
        heading: "Custodial vs non-custodial",
        body: [
          "A wallet on an exchange (custodial) is managed by a company, much like a bank account. A wallet like MetaMask (non-custodial) is managed by you. It gives you more freedom, but if you lose the seed phrase there is no 'forgot password' button.",
        ],
      },
    ],
    analogy:
      "A wallet address is like a bank account number: you can share it so people can send you money. A seed phrase is your PIN, signature and safe key all at once: never share it with anyone.",
    takeaways: [
      "A wallet stores keys, not assets.",
      "You can share your address. Never share your seed phrase.",
      "No admin can recover a lost seed phrase.",
    ],
    quiz: [
      {
        q: "Someone claiming to be an admin asks for your seed phrase to 'verify' you. What do you do?",
        options: ["Send it, they are an admin", "Send half of it", "Refuse and report it, it is a scam", "Send it by DM to be safe"],
        answer: 2,
        explain: "No legitimate service ever asks for your seed phrase. Requests like this are always scams.",
      },
      {
        q: "What can you share so a friend can send you tokens?",
        options: ["Your seed phrase", "Your private key", "Your wallet address", "A screenshot of your seed phrase"],
        answer: 2,
        explain: "Your wallet address is public, like a bank account number.",
      },
      {
        q: "A wallet actually stores…",
        options: ["Physical coins", "The keys to an address on the blockchain", "A bank balance", "NFT files"],
        answer: 1,
        explain: "Assets are recorded on the blockchain. The wallet stores the keys to access them.",
      },
    ],
  },
  {
    slug: "nft",
    title: "NFTs and digital ownership",
    short: "Not just expensive pictures. An NFT is a certificate of ownership.",
    minutes: 6,
    color: "grape",
    sections: [
      {
        heading: "Non-fungible means not interchangeable",
        body: [
          "A 10,000 rupiah note can be swapped for any other 10,000 rupiah note; they are worth the same (fungible). A concert ticket for a specific seat cannot simply be swapped, because each one is unique (non-fungible).",
          "An NFT is a unique token on a blockchain that records who owns a digital item: artwork, an event ticket, a certificate, a game item or a community membership.",
        ],
      },
      {
        heading: "More than just pictures",
        body: [
          "Many Web3 events use NFTs as proof of attendance (for example POAPs). Universities can use NFTs as certificates that are easy to verify. Musicians can give special access to holders of their NFTs.",
          "Remember: buying an NFT does not always mean you own the copyright to the artwork. Check the license. For example, Nouns artwork is licensed CC0, which means anyone is free to use it.",
        ],
      },
    ],
    analogy:
      "An NFT is like the serial number and certificate attached to a painting. Everyone can copy a photo of it, but there is only one record of who the real owner is.",
    takeaways: [
      "Fungible = interchangeable. Non-fungible = unique.",
      "An NFT records ownership, not automatically copyright.",
      "NFTs are also used for tickets, certificates and proof of attendance.",
    ],
    quiz: [
      {
        q: "Which of these is best described as non-fungible?",
        options: ["A 10,000 rupiah note", "A concert ticket with a seat number", "1 liter of fuel", "1 USDC"],
        answer: 1,
        explain: "A ticket with a seat number is unique, so it cannot be swapped one-for-one.",
      },
      {
        q: "A POAP is usually used as…",
        options: ["Proof that you attended an event", "A stablecoin", "A wallet password", "A gas fee"],
        answer: 0,
        explain: "A POAP (Proof of Attendance Protocol) is an NFT that proves you attended.",
      },
      {
        q: "The CC0 license on Nouns artwork means…",
        options: ["Nobody may use it", "Only NFT owners may use it", "Anyone is free to use it", "You must pay royalties"],
        answer: 2,
        explain: "CC0 releases the work into the public domain, so anyone can use and build on it.",
      },
    ],
  },
  {
    slug: "dao-dan-nouns",
    title: "DAOs and Nouns",
    short: "Communities that make decisions by voting on the blockchain.",
    minutes: 7,
    color: "noggle",
    sections: [
      {
        heading: "An organization without a head office",
        body: [
          "A DAO (Decentralized Autonomous Organization) is a community whose rules are written in smart contracts. Members submit proposals and vote. If a proposal passes, money from the shared treasury can be released automatically.",
          "Every proposal and vote is recorded publicly, so anyone can check where the community's money goes.",
        ],
      },
      {
        heading: "Meet Nouns",
        body: [
          "Nouns DAO started in 2021. Every day, one Noun character is generated and auctioned. Auction proceeds go into the DAO treasury, and every Noun holder gets one vote on how that money is spent.",
          "The square glasses that Nouns are known for are called noggles ⌐◨-◨. Because all Nouns artwork is CC0, communities around the world are free to make merch, films, games and events themed around Nouns. Nounsweek is one of them.",
        ],
      },
    ],
    analogy:
      "Picture a student council whose treasury and rules are locked inside a transparent app. Every expense must go through a vote, and every student can see the result.",
    takeaways: [
      "DAO = community + smart contracts + voting.",
      "Nouns DAO auctions one Noun every day to fund a shared treasury.",
      "Noggles ⌐◨-◨ and all Nouns artwork are free to use (CC0).",
    ],
    quiz: [
      {
        q: "In a DAO, decisions are usually made through…",
        options: ["The CEO's orders", "Members voting on proposals", "A random draw", "A bank's decision"],
        answer: 1,
        explain: "DAO members submit and vote on proposals, and smart contracts carry out the result.",
      },
      {
        q: "How often does Nouns DAO auction a new Noun?",
        options: ["Every day", "Every year", "Only once", "Whenever there is a proposal"],
        answer: 0,
        explain: "One Noun is generated and auctioned every day.",
      },
      {
        q: "What are the Nouns glasses called?",
        options: ["Goggles", "Noggles", "Specs", "Lenses"],
        answer: 1,
        explain: "The square glasses of Nouns are called noggles ⌐◨-◨.",
      },
    ],
  },
  {
    slug: "aman-di-web3",
    title: "Staying safe in Web3",
    short: "Learn the most common scams before you become a victim.",
    minutes: 6,
    color: "sun",
    sections: [
      {
        heading: "The most common scams",
        body: [
          "Phishing: fake websites that look like the real thing and ask you to connect your wallet or type your seed phrase. Always check the URL and bookmark official websites.",
          "Fake airdrops: a mysterious token or NFT suddenly appears in your wallet and points you to a website to 'claim your prize'. Ignore it.",
          "'Guaranteed profit' investments: anyone promising fixed or multiplied returns in a short time is almost certainly a scammer. This is also a sign of a Ponzi scheme.",
          "Rug pull: the creators of a project run off with the money after many people have bought their token.",
        ],
      },
      {
        heading: "Safe habits",
        body: [
          "Keep separate wallets: one for experimenting (with a small amount) and one for saving. Read what you are signing before you click 'Confirm'. Turn on 2FA on exchanges. When in doubt, ask the community before you act.",
        ],
      },
    ],
    analogy:
      "In Web3 there is no bank that can reverse a transaction. So treat every 'Confirm' click like handing over cash: once it is gone, it is very hard to get back.",
    takeaways: [
      "Check the URL, and do not click links from DMs.",
      "Ignore mysterious airdrops and 'guaranteed profit' offers.",
      "Use a separate wallet for experiments.",
    ],
    quiz: [
      {
        q: "An unknown NFT appears in your wallet with a 'claim your prize' link. What is the best move?",
        options: ["Click the link quickly", "Ignore it and do not interact", "Connect your main wallet", "Share it with friends"],
        answer: 1,
        explain: "Mysterious airdrops are often phishing bait. Just ignore them.",
      },
      {
        q: "An offer of 'deposit 1 million, guaranteed 3 million next week' is…",
        options: ["A golden opportunity", "A sign of a scam", "A government program", "A blockchain feature"],
        answer: 1,
        explain: "Promises of guaranteed, multiplied returns are a classic red flag.",
      },
      {
        q: "What is a safe habit when trying a new dApp?",
        options: ["Use your main wallet with all your assets", "Use a separate wallet with a small amount", "Share your seed phrase with the developer", "Turn off all notifications"],
        answer: 1,
        explain: "A separate wallet limits your losses if the dApp turns out to be harmful.",
      },
    ],
  },
];
