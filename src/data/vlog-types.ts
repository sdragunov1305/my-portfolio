/** Блоки влога с медиа (картинки, GIF, MP4 с LinkedIn CDN и т.п.). */
export type VlogBodyBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "h2"; text: string }
  | { type: "figure"; src: string; alt: string; caption?: string }
  | { type: "video"; src: string; poster?: string; caption?: string }
  | { type: "ol"; items: string[] };
