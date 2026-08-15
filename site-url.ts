/**
 * Канонический origin сайта: для SEO, sitemap и Open Graph.
 * На Vercel задайте NEXT_PUBLIC_SITE_URL после подключения своего домена.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/^https?:\/\//, "")}`;
  }
  return "http://localhost:3000";
}
