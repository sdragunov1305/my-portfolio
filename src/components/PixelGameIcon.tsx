import type { ReactNode } from "react";

type PixelPreset = "falcon" | "driver" | "arena" | "district";

const PRESETS: Record<PixelPreset, string[]> = {
  falcon: [
    "0011100",
    "0111110",
    "1111111",
    "1011101",
    "0111110",
    "0011100",
    "0001000",
  ],
  driver: [
    "0011100",
    "0111110",
    "1111111",
    "1110111",
    "0111110",
    "0011100",
    "0110110",
  ],
  arena: [
    "1111111",
    "1000001",
    "1011101",
    "1011101",
    "1011101",
    "1000001",
    "1111111",
  ],
  district: [
    "0001000",
    "0011100",
    "0111110",
    "1111111",
    "1111111",
    "0111110",
    "0101010",
  ],
};

type PixelGameIconProps = {
  preset: PixelPreset;
  accent?: string;
  className?: string;
};

export default function PixelGameIcon({
  preset,
  accent = "#7dd3fc",
  className = "",
}: PixelGameIconProps) {
  const rows = PRESETS[preset];
  const w = rows[0].length;
  const h = rows.length;
  const pixels: ReactNode[] = [];
  rows.forEach((row, y) => {
    row.split("").forEach((cell, x) => {
      if (cell === "0") return;
      const fill =
        preset === "falcon" && y < 2 ? accent : "#1e1b2e";
      pixels.push(
        <rect key={`${x}-${y}`} x={x} y={y} width={0.92} height={0.92} fill={fill} />,
      );
    });
  });
  return (
    <svg
      width={22}
      height={22}
      viewBox={`0 0 ${w} ${h}`}
      className={`shrink-0 ${className}`}
      aria-hidden
    >
      {pixels}
    </svg>
  );
}
