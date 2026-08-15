import type { VlogBodyBlock } from "@/data/vlog-types";
import { batWhiteRetrospectiveBlocks } from "@/data/bat-white-retrospective-blocks";
import { deliverymanPostmortem2Blocks } from "@/data/deliveryman-postmortem-2-blocks";
import { mediumEducationInnovationBlocks } from "@/data/medium-education-innovation-blocks";
import postedVlogsJson from "../../data/posted-vlogs.json";

/**
 * Весь контент сайта в одном файле:
 * `siteMeta` — title/description, `siteUi` — подписи UI, `hero` — баннер + видео,
 * `gamesLogoPath` — PNG логотипа игр (`public/`), `profile`, `socialLinks`, `games`, `vlogs`, `podcasts`.
 */
export type VideoItem = {
  id: string;
  title: string;
  youtubeId: string;
  cover: string;
  date: string;
  description: string;
};

export const profile = {
  name: "Sergei Dragunov",
  role: "Game Designer and Storyteller",
  bio: "Building worlds, recording devlogs, and sharing behind-the-scenes production notes.",
  avatar: "/profile-sergeyi.png",
};

export type HeroConfig = {
  welcomeLabel: string;
  tagline: string;
  /** Файл из `public/videos/`, например `/videos/GAMES.mp4` */
  backgroundVideo: string;
  /** Опционально: постер до загрузки видео */
  backgroundVideoPoster?: string;
};

/**
 * Видео для фона: файл `GAMES.mp4` в `cursor-site/public/videos/`.
 */
export const hero: HeroConfig = {
  welcomeLabel: "Welcome to",
  tagline: "Webpage",
  backgroundVideo: "/videos/GAMES.mp4",
};

/**
 * Баннер «My current game» (между hero и подкастами).
 * Медиа: положи файл в `public/` — `video` (mp4/gif-loop) или `photo`.
 */
export const featuredGame = {
  eyebrow: "My current game.",
  title: "Ritual Cleaner",
  devlogHref: "https://www.tiktok.com/@sergey.dragunov8?_r=1&_t=ZN-95IJrGPYIMw",
  devlogLabel: "Devlog",
  photo: "",
  video: "/videos/featured-ritual-cleaner.mp4",
} as const;

/** Заголовок вкладки и SEO — правь здесь */
export const siteMeta = {
  title: "Sergei Dragunov — games, devlogs, podcasts",
  description:
    "Game designer portfolio: Fat Snail Games on itch.io & Steam, Gamedevpedia podcasts, dev notes.",
} as const;

/**
 * Все подписи интерфейса — одно место вместо разброса по Desktop.tsx.
 */
export const siteUi = {
  heroAriaLabel: "Main banner",
  connectLabel: "Connect",
  games: {
    title: "My Games",
    intro:
      "Creating games has been my passion since the early 2000s. I spend my time outside of work bringing my own ideas to life, some of which have become defining milestones in my journey. Whether I built them alone or led a team to help realize the vision, every project is a product of my own design.",
    itchLineBefore: "Some titles run in the browser here; full pages and downloads are on ",
    itchLineLink: "itch.io",
    itchLineBetween: " and ",
    steamLinkText: "Steam",
    steamStoreUrl: "https://store.steampowered.com/",
    itchCatalogUrl: "https://fat-snail-games.itch.io/",
  },
  gameCta: {
    playInBrowser: "Play in browser",
    openOnItch: "Open on itch.io",
    buyOnSteamDefault: "Buy on Steam",
  },
  podcasts: {
    windowTitle: "Podcasts",
    intro:
      "I am the creator and host of Gamedev Pedia, a podcast fueled by my passion for the industry. I sit down with game development professionals from across the globe to explore their journeys and insights. Through these international interviews, I aim to bridge the gap between experts and the community, sharing the knowledge that drives our craft forward.",
    prevAria: "Previous podcasts",
    nextAria: "Next podcasts",
  },
  vlogs: {
    eyebrow: "Vlogs",
    title: "Latest Updates",
    readOnMedium: "Read on Medium",
    readOnLinkedIn: "Read on LinkedIn",
    prevAria: "Previous posts",
    nextAria: "Next posts",
  },
  itchModal: {
    openOnItch: "Open on itch.io",
    closeGame: "Close game",
    footer:
      "itch.io widget. If the game does not start on its own, click Play / Run game inside the window (same as on the game page).",
  },
} as const;

/** PNG с прозрачным фоном: `public/fat-snail-games-logo.png` */
export const gamesLogoPath = "/fat-snail-games-logo.png";

export type GameEntry = {
  name: string;
  href: string;
  /** Cover from itch.io (og:image) */
  image: string;
  description: string;
  genre: string;
  priceLabel?: string;
  platforms?: ("web" | "windows" | "android" | "macos")[];
  /** Прямой URL виджета itch: https://itch.io/embed/<id>?… (не страница …/game/embed) */
  itchEmbedUrl?: string;
  /** Подпись на кнопке (по умолчанию — itch / браузер) */
  ctaLabel?: string;
  /** Внешний вид кнопки: itch (фиолетовая) или steam */
  ctaStyle?: "itch" | "steam";
};

/** Каталог [Fat Snail Games на itch.io](https://fat-snail-games.itch.io/) + совместная разработка */
export const games: GameEntry[] = [
  {
    name: "Adventures of Deliveryman",
    href: "https://store.steampowered.com/app/1997940/Adventures_of_Deliveryman/",
    image: "https://img.itch.zone/aW1nLzE5MDM1MzYxLnBuZw==/original/dt%2BK0e.png",
    description:
      "Action game about a bike courier — tricks, upgrades, and deliveries in a lively open city.",
    genre: "Action",
    priceLabel: "$3.99",
    platforms: ["windows", "macos"],
    ctaLabel: "Buy on Steam",
    ctaStyle: "steam",
  },
  {
    name: "Trash Biz",
    href: "https://fat-snail-games.itch.io/trash-biz",
    image: "https://img.itch.zone/aW1nLzI1ODIyMTIwLnBuZw==/original/AEeZlm.png",
    description:
      "A relaxing physics-based recycling game with upgrades and progression.",
    genre: "Simulation",
    platforms: ["web", "windows"],
    itchEmbedUrl: "https://itch.io/embed/4254918?border_width=0",
  },
  {
    name: "Boris - Vampire Slayer",
    href: "https://fat-snail-games.itch.io/boris-vampire-slayer",
    image: "https://img.itch.zone/aW1nLzI0OTcxMTE4LmpwZw==/original/zSB3M%2B.jpg",
    description:
      "Bounty hunter Boris faces vampires in a cursed temple. Will he survive the night? It's up to you!",
    genre: "Action",
    platforms: ["web", "windows"],
    itchEmbedUrl: "https://itch.io/embed/3703483?border_width=0",
  },
  {
    name: "Bat in White",
    href: "https://fat-snail-games.itch.io/bat-in-white",
    image: "https://img.itch.zone/aW1nLzI1ODczMTUzLmpwZw==/original/B8i90R.jpg",
    description: "Puzzle — play in your browser.",
    genre: "Puzzle",
    platforms: ["web"],
    itchEmbedUrl: "https://itch.io/embed/3432076?border_width=0",
  },
  {
    name: "Ghosting",
    href: "https://fat-snail-games.itch.io/ghosting",
    image: "https://img.itch.zone/aW1nLzE1OTk3MDIzLnBuZw==/original/HnFbc7.png",
    description: "Downloadable Windows demo — Sokoban-style puzzles with Hat Man.",
    genre: "Puzzle",
    platforms: ["windows"],
  },
  {
    name: "Pixel Punch",
    href: "https://fat-snail-games.itch.io/pixel-punch",
    image: "https://img.itch.zone/aW1nLzE3MjI5MjY3LnBuZw==/original/3OvC0V.png",
    description: "Action title from Fat Snail Games — downloadable on itch.io.",
    genre: "Action",
    platforms: ["windows"],
  },
];

export const blogPosts = [
  "Bat in White: A Retrospective",
  "Adventures of Deliveryman: Postmortem Part 2 — Lessons from the Journey",
  "A Design System is more than just UI. It's your project's DNA.",
  "Innovation in education: is it possible?",
  'The "Ugly Efficiency" Manifesto: Why CEOs Must End the Gold Rush of Easy Rewards and Restore the Cycle of "Sacrifice for Reward."',
];

export type { VlogBodyBlock } from "@/data/vlog-types";

export type VlogItem = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  /** Текст без медиа; если заданы bodyBlocks, в модалке показываются они */
  fullText: string;
  bodyBlocks?: VlogBodyBlock[];
  /** Оригинал на Medium и т.п. */
  sourceUrl?: string;
  sourceLabel?: string;
};

/** Посты из data/posted-vlogs.json — на GitHub Pages API нет, они вшиваются при сборке. */
export const postedVlogsFromFile: VlogItem[] = Array.isArray(postedVlogsJson)
  ? (postedVlogsJson as VlogItem[])
  : [];

const MEDIUM_UGLY_EFFICIENCY =
  "https://medium.com/@sergei.dragunov/the-ugly-efficiency-manifesto-why-ceos-must-end-the-gold-rush-of-easy-rewards-and-restore-the-93676777ff56";

const MEDIUM_EDUCATION_INNOVATION =
  "https://medium.com/@sergei.dragunov/innovation-in-education-is-it-possible-3653b77c7f2b";

const LINKEDIN_BAT_RETRO =
  "https://www.linkedin.com/pulse/bat-white-retrospective-sergei-dragunov-3dnnf/";

const LINKEDIN_DELIVERYMAN_POSTMORTEM_2 =
  "https://www.linkedin.com/pulse/adventures-deliveryman-postmortem-part-2-lessons-from-ne2kf/";

/** Влоги / новости для секции Latest Updates (портал-стиль) */
export const vlogs: VlogItem[] = [
  {
    id: "design-system-dna",
    title: "A Design System is more than just UI. It's your project's DNA. 🧬",
    date: "2026-01-04",
    excerpt:
      "Design Systems are discipline, scalability, and team synergy — from Figma layers to Unity folders. The LEGO analogy: chaos → inventory → structure → a scalable product.",
    image: "/design-system-dna-cover.png",
    fullText: `Most people think Design Systems are only about colors and buttons. In reality, they are about discipline, scalability, and team synergy.

It doesn't matter if we are talking about layers in Figma or the folder structure in Unity3d, the principle remains the same.

If you don't name your files correctly, define where they live, or establish a clear hierarchy, your project will turn into a "digital junkyard" within a week.

As shown in this LEGO analogy:
• Chaos: Raw assets without a plan.
• Inventory: Sorting by type (better, but not functional yet).
• Structure: Creating patterns and logic.
• The Result: A scalable, beautiful product.

The golden rule: Spend time organizing your files and system together with your team. It might feel like a slow start, but I promise you will never regret the time invested when the project starts to grow.

Without a system, you aren't building — you're just searching for the right brick in a pile of mess. 🧱`,
  },
  {
    id: "medium-education-innovation",
    title: "Innovation in education: is it possible?",
    date: "2025-12-17",
    excerpt:
      "Estonian language in schools, EdTech Hack 2025, gamification vs. teacher buy-in — photos & GIFs from Medium, plus the Lovable prototype (Estonian UI).",
    image:
      "https://miro.medium.com/v2/resize:fit:1200/1*YgpA59KnhjV_dCHQZu4jwA.png",
    sourceUrl: MEDIUM_EDUCATION_INNOVATION,
    fullText: "",
    bodyBlocks: mediumEducationInnovationBlocks,
  },
  {
    id: "medium-ugly-efficiency",
    title:
      'The "Ugly Efficiency" Manifesto: Why CEOs Must End the Gold Rush of Easy Rewards and Restore the Cycle of "Sacrifice for Reward."',
    date: "2025-12-06",
    excerpt:
      "Casino lessons, engagement curves, and why easy rewards devalue the player — from 15 years building worlds in games and product.",
    image: "/medium-ugly-efficiency-cover.png",
    sourceUrl: MEDIUM_UGLY_EFFICIENCY,
    fullText: `I won't hide the fact that my gamification story started with a casino where I worked back in 2015. I was making "ugly" mini-games (Wheel of Fortune, for example). These were various pop-ups layered over the screen that could give you something. We didn't spend a minute on aesthetics… But those "ugly" games showed insanely high engagement.

I realized the main universal principle that the corporate world stubbornly ignores: successful engagement does not depend on pretty graphics; it is directly proportional to the strength of psychological reward and the precision of applying it at the moment of user pain.

Ten years have passed. I've achieved a lot in my career; now I produce and design game gameplay. I play a lot, and I often come across very cool and addictive games, but I wouldn't say they're all beautiful and fancy. Most often they are built on reflecting the right aesthetic through UX.

Trap of illusion

When we build our funnel based on a hypothesis, we take into account all friction points of the player from the moment they first launch the game to the moment they become active and loyal.

If you give too many goodies to keep the player, they will sense it and quickly get bored. If you give too many challenges, the player will always be tense, and you will most likely lose them as well. The main point here is maintaining the balance of the engagement curve and player challenges — sacrificing oneself in the name of reward.

When I led the art department in a large project, we launched a system of daily bonuses and light rewards to quickly boost Retention metrics. Players came, collected the prizes, and left. The problem wasn't in the design, but in devaluation. When a reward is given without effort, it stops being a reward.

My mistakes in gamedev are literal reflections of the mistakes that 99% of SaaS companies make today when trying to drive engagement.

When you as a designer iteratively fight engagement problems — how to make the user take the next step and not leave the game — it turns into a game where your own metrics become the opponent. And you fall into the trap of your own illusions. I remember how pleasant it was to see that Retention Day 1 metrics were changing, and you literally felt like a king of manipulating human behavior. But how sad it was to discover that you were only treating symptoms, not the disease itself. You can shower the user with new chests of rewards and improve the animation so that stars shoot straight into their eyes, but the user will still leave, because they are not looking for entertainment, but for meaning, progress, and an opportunity to invest in their own development.

Manifesto

The modern user doesn't want to be forced to play. They want to voluntarily invest their time and effort into a system that provides a sense of mastery, autonomy, and belonging to a community. These are the deep psychological needs that distinguish a game from addictive manipulation. And these are the principles I will try to anchor in my manifesto.

I have spent 15 years creating worlds. My experience has led me to a single conclusion: Business devalues the user's effort by arranging a "golden rain" of easy rewards to create an illusion of activity. The corporate world spends billions chasing clicks and Retention metrics, but treats symptoms while forgetting the disease. We, engineers from gamedev, must put an end to this.

We must restore the cycle of "Sacrifice for the Sake of Reward." I will not give out rewards; I will create a dynamic balance of challenge and effort. The reward must be earned.

The iterative struggle with metrics has led us into the trap of our own illusions. We manipulate the user for a click instead of giving them meaning.

We must stop engaging users for the sake of a click and start engaging for the sake of purpose. The modern user wants to voluntarily invest in a system that provides a sense of Mastery, Autonomy, and Belonging.`,
  },
  {
    id: "bat-white-retrospective",
    title: "Bat in White: A Retrospective",
    date: "2025-04-01",
    excerpt:
      "1st place at TalTech GameCamp jam — light & shadow mechanics, Lilith, interactive title screen, and seven game-jam-only tips. Photos & GIFs from the original devlog.",
    image: "https://img.itch.zone/aW1nLzI1ODczMTUzLmpwZw==/original/B8i90R.jpg",
    fullText: "",
    bodyBlocks: batWhiteRetrospectiveBlocks,
    sourceUrl: LINKEDIN_BAT_RETRO,
  },
  {
    id: "linkedin-deliveryman-postmortem-2",
    title: "Adventures of Deliveryman: Postmortem Part 2 — Lessons from the Journey",
    date: "2025-01-22",
    excerpt:
      "Physics on the bike, Rigidbody vs rails, prefabs, pitch deck & self-publishing on Steam — full text plus embedded LinkedIn videos and art.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D12AQERc5QYllSKeA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1737559987301?e=2147483647&v=beta&t=2N5ierm_j5aSCC1mFSpHpmTJ9mz0m6sYR3Fd3Kqw400",
    fullText: "",
    bodyBlocks: deliverymanPostmortem2Blocks,
    sourceUrl: LINKEDIN_DELIVERYMAN_POSTMORTEM_2,
  },
];

/** Видео с канала https://www.youtube.com/@gamedevpedia1960/videos (порядок как на странице «Видео»). */
const GAMEDEVPEDIA_VIDEOS: readonly { youtubeId: string; title: string }[] = [
  {
    youtubeId: "rNnbWkbS1Bc",
    title: "#22 Внешний Гейм Дизайнер - Катерина Тумас",
  },
  {
    youtubeId: "QQ4J9p5_ajc",
    title: "#23 Продюсирование игр: с чего начать разработку? | Savior Syndrome | Gamedevpedia",
  },
  {
    youtubeId: "aDDO1Hm9CQo",
    title: "#24 Как остаться Арт Директором и не сойти с ума",
  },
  {
    youtubeId: "SFdBZiaFXv8",
    title: "#23 Разработка игры в маленькой инди студии",
  },
  {
    youtubeId: "9A-aM6F8tJ8",
    title: "#22 Игровой журнализм и маркетинг в геймдеве",
  },
  {
    youtubeId: "VKQzOAXYibw",
    title: "#21 Локализация в играх и кто ее делает",
  },
  {
    youtubeId: "RI0_f6LPsvw",
    title: "#20 Art Direction в студии Massive Interactive - Ubisoft",
  },
  {
    youtubeId: "cCk33yAQ7Rs",
    title: "#19 Чем занимается - Narrative designer в игровой студии.",
  },
  {
    youtubeId: "XYvTZ5QyrLI",
    title: "#18 gamedev pedia - Как работает - Narwal accelerator",
  },
  {
    youtubeId: "e3cWKlkCbck",
    title: "#17 Чем занимается - Project Manager в игровой студии.",
  },
  {
    youtubeId: "Dudem5FtZc4",
    title: "#16 Чем занимается -  Community Coordinator на конференциях",
  },
  {
    youtubeId: "TVJSBHnVwSg",
    title: "#15 Чем занимается - Game Dev Recruiter",
  },
  {
    youtubeId: "xRFkMgoh21I",
    title: '#14 gamedev pedia - Роль "Character artist" и "Environment artist" в геймдеве',
  },
  {
    youtubeId: "g2ul5xcmA8s",
    title: "#13 gamedev pedia - Роль QA Engineer игровой студии",
  },
  {
    youtubeId: "AWMwdtZ8c0U",
    title: "#12 gamedev pedia - development discipline in gamedev studio",
  },
  {
    youtubeId: "u56nT1Baw8w",
    title: "#11 gamedev pedia - Head of game studio",
  },
  {
    youtubeId: "uKWc-572rLc",
    title: "#10 gamedev pedia - Audio Production in gamedev",
  },
  {
    youtubeId: "I55xSDMDO7s",
    title: "#9 gamedev pedia - что делает COO (Chief operating officer) - операционный директор",
  },
  {
    youtubeId: "DX2txcmgQ-c",
    title: "#8 gamedev pedia - Artist VS Art Director",
  },
  {
    youtubeId: "ekYNXgvsCtI",
    title: "#7 gamedev pedia - technical artist in gamedev",
  },
  {
    youtubeId: "fDzyarleqcA",
    title: "#6 gamedev pedia - Gamedev education",
  },
  {
    youtubeId: "CgcnxquMnBw",
    title: "#5 gamedev pedia - business development",
  },
  {
    youtubeId: "syXrhyqMevY",
    title: "#4 gamedev pedia - who are our players",
  },
  {
    youtubeId: "IXBrioY3wSk",
    title: "#3 gamedev pedia - producer",
  },
  {
    youtubeId: "8n8bCqzthPw",
    title: "#2 Podcast gamedevpedia - gamedesign",
  },
  {
    youtubeId: "YgnNns3MYMs",
    title: "#1 Podcast gamedevpedia - 3d production for AAA games",
  },
];

function podcastDateIso(index: number, startYear: number, startMonth: number, startDay: number): string {
  const d = new Date(Date.UTC(startYear, startMonth - 1, startDay));
  d.setUTCDate(d.getUTCDate() - index * 4);
  return d.toISOString().slice(0, 10);
}

export const podcasts: VideoItem[] = GAMEDEVPEDIA_VIDEOS.map((v, i) => ({
  id: `pod-${v.youtubeId}`,
  youtubeId: v.youtubeId,
  title: v.title,
  cover: `https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`,
  date: podcastDateIso(i, 2026, 4, 2),
  description: `Gamedevpedia episode on YouTube — ${v.title}`,
}));

/** Соцсети: добавь свои URL (X, Telegram, GitHub и т.д.) */
export const socialLinks = [
  { label: "YouTube", href: "https://www.youtube.com/@gamedevpedia1960" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sergei-dragunov-18252636/" },
  { label: "Instagram", href: "https://www.instagram.com/sergei_dragunoff/" },
  { label: "itch.io", href: "https://fat-snail-games.itch.io/" },
] as const;
