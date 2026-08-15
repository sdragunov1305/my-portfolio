"use client";

import { useState } from "react";
import Window from "@/components/Window";

type VideoPlayerWindowProps = {
  title: string;
  youtubeId: string;
  isActive: boolean;
  isMaximized: boolean;
  onFocus: () => void;
};

export default function VideoPlayerWindow({
  title,
  youtubeId,
  isActive,
  isMaximized,
  onFocus,
}: VideoPlayerWindowProps) {
  const [autoplay, setAutoplay] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const auto = autoplay ? "1" : "0";
  const embedSrc = `https://www.youtube.com/embed/${youtubeId}?autoplay=${auto}&rel=0`;

  return (
    <Window
      title={title}
      icon="📼"
      isActive={isActive}
      onFocus={onFocus}
      className={isMaximized ? "h-full" : ""}
    >
      <div className="space-y-3">
        <div className="win-inset bg-black p-2">
          <div className="aspect-video w-full bg-black">
            <iframe
              key={resetKey}
              className="h-full w-full"
              src={embedSrc}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="win-outset bg-[var(--win-surface)] p-2">
          <div className="mb-2 flex gap-2">
            <button
              type="button"
              onClick={() => setAutoplay(true)}
              className="win-outset bg-[var(--win-surface-soft)] px-3 py-1 text-xs"
            >
              Play
            </button>
            <button
              type="button"
              onClick={() => setAutoplay(false)}
              className="win-outset bg-[var(--win-surface-soft)] px-3 py-1 text-xs"
            >
              Pause
            </button>
            <button
              type="button"
              onClick={() => {
                setAutoplay(false);
                setResetKey((key) => key + 1);
              }}
              className="win-outset bg-[var(--win-surface-soft)] px-3 py-1 text-xs"
            >
              Stop
            </button>
          </div>
          <div className="win-inset h-3 bg-gradient-to-r from-[#9d9d9d] via-[#d0d0d0] to-[#8a8a8a]" />
        </div>
      </div>
    </Window>
  );
}
