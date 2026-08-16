export function slugId(title: string) {
  const base = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);
  return `post-${base || "vlog"}-${Date.now().toString(36)}`;
}
