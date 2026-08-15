/**
 * GitHub Pages отдаёт сайт с пути /my-portfolio, а не с корня.
 * next/image учитывает basePath сам; обычные <img> и <video> — нет.
 */
export function withBasePath(path: string | undefined): string {
  if (!path) return "";
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("//")
  ) {
    return path;
  }
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
