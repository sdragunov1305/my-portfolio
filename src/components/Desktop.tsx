"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Window from "@/components/Window";
import {
  games,
  gamesLogoPath,
  hero,
  featuredGame,
  podcasts,
  postedVlogsFromFile,
  profile,
  siteUi,
  socialLinks,
  vlogs,
  type GameEntry,
  type VideoItem,
  type VlogBodyBlock,
  type VlogItem,
} from "@/data/content";
import { withBasePath } from "@/lib/asset";

function SocialIcon({ label, className }: { label: string; className?: string }) {
  const c = className ?? "h-4 w-4 shrink-0 text-white/85";
  switch (label) {
    case "YouTube":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M23.5 6.2s-.2-1.7-1-2.4c-.9-1-2-1-2.4-1.1C17 2.5 12 2.5 12 2.5h0s-5 0-8.1.2c-.4 0-1.5.1-2.4 1.1-.7.7-1 2.4-1 2.4S0 8.1 0 10v1.9c0 1.9.2 3.8.2 3.8s.2 1.7 1 2.4c.9 1 2.1.9 2.6 1 1.9.2 8.2.2 8.2.2s5 0 8.1-.2c.4 0 1.5-.1 2.4-1.1.7-.7 1-2.4 1-2.4s.2-1.9.2-3.8V10c0-1.9-.2-3.8-.2-3.8zM9.5 14.6V7.8l6.5 3.4-6.5 3.4z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4.25" />
          <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" stroke="none" />
        </svg>
      );
    case "X":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "Telegram":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      );
    case "GitHub":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.012 10.012 0 0022 11.969C22 6.463 17.522 2 12 2z"
          />
        </svg>
      );
    case "itch.io":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M3 12v7.5A1.5 1.5 0 004.5 21H9v-4.5a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0115 16.5V21h4.5a1.5 1.5 0 001.5-1.5V12H3zm0-1.5h18V4.5A1.5 1.5 0 0019.5 3h-15A1.5 1.5 0 003 4.5V10.5z" />
        </svg>
      );
    default:
      return (
        <span className="flex h-4 w-4 shrink-0 items-center justify-center text-[10px] text-white/70" aria-hidden>
          ↗
        </span>
      );
  }
}

/** Компактный логотип слева от «My Games». Обычный img — без обёртки next/image (без лишнего фона). */
function GamesSectionLogo({ logoSrc }: { logoSrc: string }) {
  return (
    <div className="games-brand-logo shrink-0 bg-transparent pt-0.5">
      <img
        src={withBasePath(logoSrc)}
        alt="Fat Snail games"
        width={560}
        height={400}
        decoding="async"
        loading="lazy"
        className="pointer-events-none h-14 w-auto max-w-[112px] select-none bg-transparent object-contain object-left sm:h-[4.25rem] sm:max-w-[132px] md:h-[5rem] md:max-w-[152px]"
      />
    </div>
  );
}

function GamePlatformGlyphs({ platforms }: { platforms?: GameEntry["platforms"] }) {
  const list: NonNullable<GameEntry["platforms"]> = platforms?.length ? platforms : ["web"];
  return (
    <div className="flex items-center gap-2 text-white/50" aria-hidden>
      {list.includes("web") ? (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <rect x="2" y="4.5" width="20" height="13" rx="2" />
          <path strokeLinecap="round" d="M7 21h10M12 17.5V21" />
        </svg>
      ) : null}
      {list.includes("windows") ? (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 5.5 10 4.45v6.55H3V5.5zm0 7.5h7V19.2L3 18.1v-5.1zm8.5-8.55L21 3v8.5h-9.5V4.45zm0 9.45H21V21l-9.5-1.35V13.9z" />
        </svg>
      ) : null}
      {list.includes("macos") ? (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ) : null}
      {list.includes("android") ? (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.51-.2.71 0 .2.2.2.51 0 .71l-1.48 1.48A9.91 9.91 0 0012 1a9.9 9.9 0 00-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A9.91 9.91 0 006 7h12a9.95 9.95 0 00-2.47-4.84zM9 5H8V4h1v1zm6 0h-1V4h1v1z" />
        </svg>
      ) : null}
    </div>
  );
}

function formatVlogDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function VlogArticleBody({ text }: { text: string }) {
  const paragraphs = text.split(/\n\n+/).filter(Boolean);
  return (
    <div className="space-y-4 text-base leading-relaxed text-white/88">
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

function VlogBodyBlocks({ blocks }: { blocks: VlogBodyBlock[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return (
              <p key={i} className="text-base leading-relaxed text-white/88">
                {b.text}
              </p>
            );
          case "h3":
            return (
              <h3 key={i} className="mt-6 text-lg font-bold tracking-tight text-white">
                {b.text}
              </h3>
            );
          case "h2":
            return (
              <h4 key={i} className="mt-8 text-xl font-bold leading-snug tracking-tight text-white">
                {b.text}
              </h4>
            );
          case "figure":
            return (
              <figure key={i} className="my-3 overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
                {/* eslint-disable-next-line @next/next/no-img-element -- GIF + произвольные пропорции с itch.io */}
                <img
                  src={withBasePath(b.src)}
                  alt={b.alt}
                  loading="lazy"
                  decoding="async"
                  className="mx-auto max-h-[min(70vh,560px)] w-full object-contain"
                />
                {b.caption ? (
                  <figcaption className="px-3 py-2.5 text-center text-sm text-white/55">{b.caption}</figcaption>
                ) : null}
              </figure>
            );
          case "video":
            return (
              <figure key={i} className="my-3 overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={b.poster ? withBasePath(b.poster) : undefined}
                  className="mx-auto max-h-[min(70vh,560px)] w-full bg-black object-contain"
                >
                  <source src={withBasePath(b.src)} type="video/mp4" />
                </video>
                {b.caption ? (
                  <figcaption className="px-3 py-2.5 text-center text-sm text-white/55">{b.caption}</figcaption>
                ) : null}
              </figure>
            );
          case "ol":
            return (
              <ol
                key={i}
                className="mt-2 list-decimal space-y-2 pl-5 text-base leading-relaxed text-white/88 marker:text-cyan-200/80"
              >
                {b.items.map((item, j) => (
                  <li key={j} className="pl-1">
                    {item}
                  </li>
                ))}
              </ol>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

/** Соответствует `gap-5` (1.25rem) в горизонтальных списках карточек */
const HORIZONTAL_CARD_SCROLL_GAP_PX = 20;

function HorizontalScrollArrows({
  scrollRef,
  prevAria,
  nextAria,
  className,
}: {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  prevAria: string;
  nextAria: string;
  className?: string;
}) {
  const [edges, setEdges] = useState({ canLeft: false, canRight: false });

  const sync = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = Math.max(0, scrollWidth - clientWidth);
    const eps = 4;
    setEdges({
      canLeft: scrollLeft > eps,
      canRight: scrollLeft < maxScroll - eps,
    });
  }, [scrollRef]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    sync();
    const onScroll = () => sync();
    el.addEventListener("scroll", onScroll, { passive: true });
    const ro = new ResizeObserver(() => sync());
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, [scrollRef, sync]);

  const scrollByOne = (dir: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector('[role="listitem"]') as HTMLElement | null;
    const step = (card?.offsetWidth ?? 280) + HORIZONTAL_CARD_SCROLL_GAP_PX;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const glassBtn =
    "flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/25 bg-gradient-to-b from-white/18 to-white/8 text-cyan-100/95 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_2px_12px_rgba(0,0,0,0.25)] transition duration-200 hover:border-cyan-300/45 hover:from-white/26 hover:to-white/12 hover:text-white hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_0_20px_rgba(34,211,238,0.2)] disabled:pointer-events-none disabled:opacity-35";

  return (
    <div
      className={className ?? "flex items-center gap-1.5"}
      onPointerDown={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        className={glassBtn}
        aria-label={prevAria}
        disabled={!edges.canLeft}
        onClick={() => scrollByOne(-1)}
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.25 19.5L7.75 12l7.5-7.5" />
        </svg>
      </button>
      <button
        type="button"
        className={glassBtn}
        aria-label={nextAria}
        disabled={!edges.canRight}
        onClick={() => scrollByOne(1)}
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.75 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}

function PodcastWindowIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-cyan-200/90"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
      />
    </svg>
  );
}

const gameCardShell =
  "group flex h-full min-h-0 flex-col rounded-3xl border border-white/12 bg-[rgba(8,6,18,0.72)] p-4 text-left shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-md transition duration-200 hover:border-violet-400/30 hover:bg-[rgba(12,9,26,0.82)] hover:shadow-[0_24px_56px_rgba(76,29,149,0.18)]";

const btnItchPlay =
  "inline-flex flex-1 items-center justify-center rounded-xl bg-gradient-to-b from-violet-500 to-violet-700 px-3 py-2.5 text-center text-xs font-semibold tracking-wide text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_6px_16px_rgba(91,33,182,0.35)] transition hover:from-violet-400 hover:to-violet-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 sm:flex-none sm:justify-center sm:px-4";

const btnSteam =
  "inline-flex flex-1 items-center justify-center rounded-xl bg-gradient-to-b from-[#3d556b] to-[#1b2838] px-3 py-2.5 text-center text-xs font-semibold tracking-wide text-[#b8d7ea] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_6px_16px_rgba(0,0,0,0.45)] transition hover:from-[#4a6882] hover:to-[#223547] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#66c0f4]/45 sm:flex-none sm:justify-center sm:px-4";

const btnItchPage =
  "inline-flex flex-1 items-center justify-center rounded-xl border border-white/18 bg-white/8 px-3 py-2.5 text-center text-xs font-semibold tracking-wide text-white/80 transition hover:border-white/28 hover:bg-white/12 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 sm:flex-none sm:justify-center sm:px-4";

export default function Desktop() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [selectedVlog, setSelectedVlog] = useState<VlogItem | null>(null);
  const [embeddedGame, setEmbeddedGame] = useState<GameEntry | null>(null);
  const [postedVlogs, setPostedVlogs] = useState<VlogItem[]>(postedVlogsFromFile);
  const podcastScrollRef = useRef<HTMLDivElement>(null);
  const vlogScrollRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const allVlogs = [...postedVlogs, ...vlogs];

  useEffect(() => {
    let cancelled = false;
    fetch(withBasePath("/api/vlogs"), { cache: "no-store" })
      .then((res) => res.json())
      .then((data: { vlogs?: VlogItem[] }) => {
        if (!cancelled && Array.isArray(data.vlogs)) setPostedVlogs(data.vlogs);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const v = heroVideoRef.current;
    if (!v) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (mq.matches) v.pause();
      else void v.play().catch(() => {});
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const locked = selectedVlog != null || selectedVideo != null || embeddedGame != null;
    if (locked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedVlog, selectedVideo, embeddedGame]);

  useEffect(() => {
    if (!selectedVlog && !selectedVideo && !embeddedGame) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedVlog(null);
        setSelectedVideo(null);
        setEmbeddedGame(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedVlog, selectedVideo, embeddedGame]);

  return (
    <main className="retro-desktop relative min-h-screen w-full px-4 py-8 pb-16 text-white">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-6 sm:gap-8">
          <section
            className="relative isolate min-h-[min(52vh,420px)] w-full overflow-hidden rounded-3xl border border-white/15 shadow-[0_28px_80px_rgba(8,4,24,0.55)] sm:min-h-[min(48vh,460px)] md:min-h-[380px]"
            aria-label={siteUi.heroAriaLabel}
          >
            <video
              ref={heroVideoRef}
              className="absolute inset-0 z-0 h-full w-full object-cover brightness-[1.12] contrast-[1.03]"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={hero.backgroundVideoPoster ? withBasePath(hero.backgroundVideoPoster) : undefined}
              aria-hidden
            >
              <source src={withBasePath(hero.backgroundVideo)} type="video/mp4" />
            </video>
            <div
              className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0a0618]/82 via-[#120a22]/64 to-[#1a0a28]/44"
              aria-hidden
            />
            <div className="relative z-10 flex min-h-[min(52vh,420px)] flex-col justify-center p-6 sm:p-8 md:min-h-[380px] md:p-10">
              <span className="inline-flex w-fit items-center bg-violet-600 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_4px_20px_rgba(124,58,237,0.35)]">
                {hero.welcomeLabel}
              </span>
              <h1 className="mt-4 text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl md:text-[2.75rem] lg:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-2 text-lg font-light text-white/85 sm:text-xl">{hero.tagline}</p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/65">{profile.bio}</p>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="mr-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                  {siteUi.connectLabel}
                </span>
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    title={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/22 bg-black/35 text-white/90 backdrop-blur-md transition duration-200 hover:border-violet-400/45 hover:bg-white/15 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/55"
                  >
                    <SocialIcon label={link.label} className="h-4 w-4 shrink-0 text-current" />
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section
            className="relative w-full overflow-hidden rounded-3xl border border-violet-400/35 bg-[#0c0818] shadow-[0_0_40px_rgba(124,58,237,0.28),0_28px_80px_rgba(8,4,24,0.55)]"
            aria-label="Current game"
          >
            <div className="flex min-h-[min(240px,50vw)] flex-col sm:min-h-[268px] sm:flex-row">
              <div className="relative z-10 flex flex-1 flex-col justify-center px-6 py-10 sm:px-10 sm:py-12">
                <p className="text-sm text-white/75">{featuredGame.eyebrow}</p>
                <h2 className="mt-2 text-[clamp(1.75rem,4.5vw,2.75rem)] font-extrabold tracking-tight text-white">
                  {featuredGame.title}
                </h2>
                <a
                  href={featuredGame.devlogHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex w-fit min-w-[160px] items-center justify-center border border-white/90 bg-transparent px-8 py-3 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  {featuredGame.devlogLabel}
                </a>
              </div>
              <div className="relative min-h-[220px] w-full shrink-0 overflow-hidden bg-black/40 sm:min-h-0 sm:w-[min(48%,520px)]">
                {featuredGame.video ? (
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-hidden
                  >
                    <source src={withBasePath(featuredGame.video)} type="video/mp4" />
                  </video>
                ) : featuredGame.photo ? (
                  <Image
                    src={featuredGame.photo}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 520px"
                  />
                ) : null}
              </div>
            </div>
          </section>

          <Window
            title={siteUi.podcasts.windowTitle}
            icon={<PodcastWindowIcon />}
            isActive
            flushBody
            headerEnd={
              <HorizontalScrollArrows
                scrollRef={podcastScrollRef}
                prevAria={siteUi.podcasts.prevAria}
                nextAria={siteUi.podcasts.nextAria}
              />
            }
            className="min-h-0 w-full lg:min-h-[380px]"
            contentClassName="flex min-h-0 flex-1 flex-col !overflow-hidden px-4 pb-4 pt-1"
          >
            <p className="mb-1 max-w-3xl shrink-0 text-sm leading-relaxed text-white/72 sm:mb-2 sm:text-base">
              {siteUi.podcasts.intro}
            </p>
            <div
              ref={podcastScrollRef}
              className="scrollbar-none flex min-h-0 flex-1 flex-row items-stretch gap-5 overflow-x-auto overflow-y-hidden overscroll-x-contain py-1 [-webkit-overflow-scrolling:touch] snap-x snap-mandatory"
              role="list"
            >
              {podcasts.map((episode) => (
                <div
                  key={episode.id}
                  role="listitem"
                  className="w-[min(280px,calc(100vw-2.5rem))] shrink-0 snap-center sm:w-[300px]"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedVideo(episode)}
                    aria-label={`Open podcast: ${episode.title}`}
                    className="glass-news-card flex h-full min-h-0 w-full cursor-pointer flex-col overflow-hidden text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  >
                    <div className="relative aspect-[16/10] w-full shrink-0 bg-black/40">
                      <Image
                        src={episode.cover}
                        alt={episode.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) min(280px, 100vw), 300px"
                      />
                    </div>
                    <div className="flex min-h-0 flex-1 flex-col p-4">
                      <time className="text-xs font-medium text-cyan-200/85" dateTime={episode.date}>
                        {formatVlogDate(episode.date)}
                      </time>
                      <h3 className="mt-2 text-lg font-bold leading-snug text-white">{episode.title}</h3>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </Window>

          <section className="glass-news-section w-full px-5 py-8 sm:px-8 sm:py-10">
            <header className="flex flex-row items-start gap-4 border-b border-white/10 pb-8 sm:gap-5 sm:pb-10 md:gap-6 md:pb-12">
              <GamesSectionLogo logoSrc={gamesLogoPath} />
              <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">{siteUi.games.title}</h2>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/72 sm:mt-4 sm:text-base">{siteUi.games.intro}</p>
                <p className="mt-3 max-w-3xl text-xs leading-relaxed text-white/55 sm:mt-4 sm:text-sm">
                  {siteUi.games.itchLineBefore}
                  <a
                    href={siteUi.games.itchCatalogUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-200/90 underline decoration-white/25 underline-offset-2 hover:decoration-cyan-200/80"
                  >
                    {siteUi.games.itchLineLink}
                  </a>
                  {siteUi.games.itchLineBetween}
                  <a
                    href={siteUi.games.steamStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-200/90 underline decoration-white/25 underline-offset-2 hover:decoration-cyan-200/80"
                  >
                    {siteUi.games.steamLinkText}
                  </a>
                  .
                </p>
              </div>
            </header>
            <div className="mt-10 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {games.map((game) => (
                <article key={game.name} className={gameCardShell}>
                  <a
                    href={game.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-0 flex-1 flex-col rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-violet-400/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06040f]"
                  >
                    <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-2xl bg-[#07050f] ring-1 ring-white/8">
                      <div
                        className="absolute inset-0 opacity-90 bg-[radial-gradient(ellipse_at_30%_20%,rgba(124,58,237,0.15),transparent_50%),radial-gradient(ellipse_at_70%_80%,rgba(34,211,238,0.08),transparent_45%)]"
                        aria-hidden
                      />
                      <div className="absolute inset-2 sm:inset-2.5">
                        <Image
                          src={game.image}
                          alt={game.name}
                          fill
                          className="object-contain transition duration-300 group-hover:scale-[1.03]"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                        />
                      </div>
                    </div>
                    <div className="mt-4 flex min-h-0 min-w-0 flex-1 flex-col">
                      <div className="flex min-w-0 flex-wrap items-start gap-x-2 gap-y-1">
                        <h3 className="min-w-0 flex-1 text-base font-bold leading-snug text-white sm:text-[1.05rem]">
                          {game.name}
                        </h3>
                        {game.priceLabel ? (
                          <span className="shrink-0 rounded-md border border-white/10 bg-white/8 px-2 py-0.5 text-[11px] font-medium text-white/60">
                            {game.priceLabel}
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/50">{game.description}</p>
                      <p className="mt-2 text-xs font-medium text-white/38">{game.genre}</p>
                      <div className="min-h-0 flex-1" aria-hidden />
                    </div>
                  </a>
                  <div className="mt-4 flex shrink-0 items-center justify-between gap-3">
                    {game.itchEmbedUrl ? (
                      <button type="button" className={btnItchPlay} onClick={() => setEmbeddedGame(game)}>
                        {siteUi.gameCta.playInBrowser}
                      </button>
                    ) : game.ctaStyle === "steam" ? (
                      <a
                        href={game.href}
                        target="_blank"
                        rel="noreferrer"
                        className={btnSteam}
                      >
                        {game.ctaLabel ?? siteUi.gameCta.buyOnSteamDefault}
                      </a>
                    ) : (
                      <a href={game.href} target="_blank" rel="noreferrer" className={btnItchPage}>
                        {siteUi.gameCta.openOnItch}
                      </a>
                    )}
                    <GamePlatformGlyphs platforms={game.platforms} />
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Latest Updates / Vlogs — одна строка, горизонтальный скролл как у подкастов */}
          <section
            id="devlogs"
            className="glass-news-section scroll-mt-8 w-full overflow-hidden px-5 py-8 sm:px-8 sm:py-10"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-300/90">{siteUi.vlogs.eyebrow}</p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                  {siteUi.vlogs.title}
                </h2>
              </div>
              <HorizontalScrollArrows
                scrollRef={vlogScrollRef}
                prevAria={siteUi.vlogs.prevAria}
                nextAria={siteUi.vlogs.nextAria}
                className="flex shrink-0 items-center gap-1.5 self-start sm:self-end sm:pb-1"
              />
            </div>
            <div
              ref={vlogScrollRef}
              className="scrollbar-none mt-7 flex min-h-0 w-full flex-row items-stretch gap-5 overflow-x-auto overflow-y-hidden overscroll-x-contain py-2 [-webkit-overflow-scrolling:touch] snap-x snap-mandatory"
              role="list"
            >
              {allVlogs.map((item) => (
                <div
                  key={item.id}
                  role="listitem"
                  className="w-[min(300px,calc(100vw-2.5rem))] shrink-0 snap-center sm:w-[340px]"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedVlog(item)}
                    aria-label={`Open article: ${item.title}`}
                    className="vlog-card flex h-full min-h-0 w-full cursor-pointer flex-col overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  >
                    <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-black/50">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="vlog-card-image object-cover"
                          sizes="(max-width: 640px) min(300px, 100vw), 340px"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-700/70 via-fuchsia-900/40 to-black" />
                      )}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                      <time
                        className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/45 px-2.5 py-1 text-[11px] font-medium tracking-wide text-white/90 backdrop-blur-md"
                        dateTime={item.date}
                      >
                        {formatVlogDate(item.date)}
                      </time>
                    </div>
                    <div className="flex min-h-0 flex-1 flex-col px-4 pb-4 pt-3.5">
                      <h3 className="line-clamp-2 text-lg font-bold leading-snug tracking-tight text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-white/62">{item.excerpt}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.14em] text-violet-200/85">
                        Read
                        <span aria-hidden>→</span>
                      </span>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {embeddedGame?.itchEmbedUrl && (
        <div
          role="presentation"
          className="vlog-modal-backdrop fixed inset-0 z-[70] flex items-center justify-center bg-black/55 p-3 backdrop-blur-2xl sm:p-5"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setEmbeddedGame(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="itch-embed-title"
            className="vlog-modal-panel flex max-h-[min(94vh,920px)] w-full max-w-5xl flex-col overflow-hidden rounded-[1.75rem] border border-white/25 bg-[rgba(10,8,22,0.92)] shadow-[0_32px_100px_rgba(10,6,35,0.65),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
              <h2 id="itch-embed-title" className="min-w-0 truncate text-base font-extrabold text-white sm:text-lg">
                {embeddedGame.name}
              </h2>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={embeddedGame.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden rounded-lg border border-white/18 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/85 transition hover:border-white/30 hover:bg-white/15 sm:inline-block"
                >
                  {siteUi.itchModal.openOnItch}
                </a>
                <button
                  type="button"
                  onClick={() => setEmbeddedGame(null)}
                  aria-label={siteUi.itchModal.closeGame}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/22 bg-white/12 text-white/90 backdrop-blur-md transition hover:border-white/40 hover:bg-white/20 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="min-h-0 flex-1 bg-black/50 p-1 sm:p-2">
              <iframe
                key={embeddedGame.itchEmbedUrl}
                title={embeddedGame.name}
                src={embeddedGame.itchEmbedUrl}
                className="h-[min(85vh,820px)] w-full rounded-xl border-0"
                allow="fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; gamepad; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="shrink-0 border-t border-white/10 px-4 py-2.5 text-center text-[11px] leading-relaxed text-white/45 sm:px-5">
              {siteUi.itchModal.footer}
            </p>
          </div>
        </div>
      )}

      {selectedVlog && (
        <div
          role="presentation"
          className="vlog-modal-backdrop fixed inset-0 z-[60] flex items-center justify-center bg-black/45 p-3 backdrop-blur-2xl sm:p-6"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setSelectedVlog(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="vlog-modal-title"
            className="vlog-modal-panel relative flex max-h-[min(92vh,920px)] w-full max-w-3xl flex-col overflow-hidden rounded-[1.85rem] border border-violet-300/20 bg-[rgba(10,8,22,0.94)] shadow-[0_40px_120px_rgba(10,6,35,0.75),0_0_80px_rgba(109,40,217,0.18),inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-2xl"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedVlog(null)}
              aria-label="Close article"
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-black/55 text-white/90 backdrop-blur-md transition hover:border-white/40 hover:bg-black/75 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain">
              <div className="relative aspect-[16/9] min-h-[180px] w-full shrink-0 bg-black/50 sm:min-h-[220px]">
                {selectedVlog.image ? (
                  <Image
                    src={selectedVlog.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 768px"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-700/70 via-fuchsia-900/40 to-black" />
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(10,8,22,1)] via-[rgba(10,8,22,0.35)] to-transparent" />
              </div>
              <div className="px-5 pb-9 pt-1 sm:px-8 sm:pb-11">
                <time
                  className="inline-flex rounded-full border border-violet-300/25 bg-violet-500/15 px-3 py-1 text-xs font-medium tracking-wide text-violet-100/90"
                  dateTime={selectedVlog.date}
                >
                  {formatVlogDate(selectedVlog.date)}
                </time>
                <h2
                  id="vlog-modal-title"
                  className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-[1.85rem]"
                >
                  {selectedVlog.title}
                </h2>
                <div className="mt-5">
                  {selectedVlog.bodyBlocks?.length ? (
                    <VlogBodyBlocks blocks={selectedVlog.bodyBlocks} />
                  ) : (
                    <VlogArticleBody text={selectedVlog.fullText} />
                  )}
                </div>
                {selectedVlog.sourceUrl ? (
                  <p className="mt-8 border-t border-white/10 pt-6">
                    <a
                      href={selectedVlog.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/20"
                    >
                      {selectedVlog.sourceLabel ??
                        (selectedVlog.sourceUrl.includes("linkedin.com")
                          ? siteUi.vlogs.readOnLinkedIn
                          : siteUi.vlogs.readOnMedium)}
                      <span aria-hidden className="text-base">
                        ↗
                      </span>
                    </a>
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedVideo && (
        <div
          role="presentation"
          className="vlog-modal-backdrop fixed inset-0 z-[60] flex items-center justify-center bg-black/45 p-3 backdrop-blur-2xl sm:p-6"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setSelectedVideo(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="podcast-modal-title"
            className="vlog-modal-panel relative flex max-h-[min(92vh,900px)] w-full max-w-4xl flex-col overflow-hidden rounded-[1.75rem] border border-white/25 bg-white/13 shadow-[0_32px_100px_rgba(10,6,35,0.65),inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-2xl"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close podcast"
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-white/22 bg-white/12 text-white/90 backdrop-blur-md transition hover:border-white/40 hover:bg-white/20 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain">
              <div className="px-4 pb-8 pt-14 sm:px-8 sm:pb-10 sm:pt-16">
                <div className="overflow-hidden rounded-2xl border border-white/20 bg-black shadow-[0_12px_48px_rgba(0,0,0,0.45)]">
                  <div className="aspect-video w-full">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?rel=0`}
                      title={selectedVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                <time className="mt-6 block text-sm font-medium text-cyan-200/90" dateTime={selectedVideo.date}>
                  {formatVlogDate(selectedVideo.date)}
                </time>
                <h2
                  id="podcast-modal-title"
                  className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl"
                >
                  {selectedVideo.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/88 sm:text-lg">{selectedVideo.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
