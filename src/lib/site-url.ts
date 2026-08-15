/**
 * Канонический origin сайта: для SEO, sitemap и Open Graph.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }
  if (process.env.GITHUB_PAGES === "true" || process.env.GITHUB_ACTIONS === "true") {
    const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "my-portfolio";
    const owner = process.env.GITHUB_REPOSITORY?.split("/")[0] ?? "sdragunov1305";
    return `https://${owner}.github.io/${repo}`;
  }
  return "http://localhost:3000";
}
