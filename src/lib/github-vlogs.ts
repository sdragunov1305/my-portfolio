export type PostedVlog = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  fullText: string;
};

const REPO = process.env.NEXT_PUBLIC_GITHUB_REPO ?? "sdragunov1305/my-portfolio";
const BRANCH = process.env.NEXT_PUBLIC_GITHUB_BRANCH ?? "master";
const JSON_PATH = "data/posted-vlogs.json";

export function isLocalDevHost() {
  if (typeof window === "undefined") return true;
  const host = window.location.hostname;
  return host === "localhost" || host === "127.0.0.1";
}

function utf8ToBase64(text: string) {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  return btoa(binary);
}

function base64ToUtf8(b64: string) {
  const binary = atob(b64);
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

async function fileToBase64(file: File) {
  const buf = await file.arrayBuffer();
  const bytes = new Uint8Array(buf);
  let binary = "";
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  return btoa(binary);
}

async function githubJson(path: string, token: string, init?: RequestInit) {
  const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${path}`, {
    ...init,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      ...(init?.headers ?? {}),
    },
  });
  return res;
}

export async function listPostedVlogsFromGithub(): Promise<PostedVlog[]> {
  const res = await fetch(
    `https://raw.githubusercontent.com/${REPO}/${BRANCH}/${JSON_PATH}?t=${Date.now()}`,
  );
  if (!res.ok) return [];
  const parsed = (await res.json()) as PostedVlog[];
  return Array.isArray(parsed) ? parsed : [];
}

async function readJsonFile(token: string): Promise<{ items: PostedVlog[]; sha?: string }> {
  const res = await githubJson(`${JSON_PATH}?ref=${BRANCH}`, token);
  if (res.status === 404) return { items: [] };
  if (!res.ok) {
    const body = (await res.json().catch(() => ({}))) as { message?: string };
    throw new Error(body.message || `GitHub error ${res.status}`);
  }
  const data = (await res.json()) as { content?: string; sha?: string; encoding?: string };
  const raw = data.content ? base64ToUtf8(data.content.replace(/\n/g, "")) : "[]";
  let items: PostedVlog[] = [];
  try {
    const parsed = JSON.parse(raw) as PostedVlog[];
    if (Array.isArray(parsed)) items = parsed;
  } catch {
    items = [];
  }
  return { items, sha: data.sha };
}

async function putFile(token: string, path: string, contentBase64: string, message: string, sha?: string) {
  const res = await githubJson(path, token, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message,
      content: contentBase64,
      branch: BRANCH,
      ...(sha ? { sha } : {}),
    }),
  });
  if (!res.ok) {
    const body = (await res.json().catch(() => ({}))) as { message?: string };
    throw new Error(body.message || `GitHub error ${res.status}`);
  }
}

function uploadName(file: File) {
  const ext = (file.name.match(/\.[a-z0-9]+$/i)?.[0] || ".jpg").toLowerCase();
  const safeExt = [".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(ext) ? ext : ".jpg";
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${safeExt}`;
}

export async function publishVlogToGithub(opts: {
  token: string;
  item: PostedVlog;
  photo?: File | null;
}) {
  const token = opts.token.trim();
  if (!token) throw new Error("Paste a GitHub token to publish on this site.");

  let image = opts.item.image;
  if (opts.photo && opts.photo.size > 0) {
    if (opts.photo.size > 6 * 1024 * 1024) {
      throw new Error("Photo must be under 6 MB");
    }
    const name = uploadName(opts.photo);
    await putFile(
      token,
      `public/uploads/${name}`,
      await fileToBase64(opts.photo),
      `Add vlog photo ${name}`,
    );
    image = `/uploads/${name}`;
  }

  const { items, sha } = await readJsonFile(token);
  const next = [{ ...opts.item, image }, ...items];
  await putFile(
    token,
    JSON_PATH,
    utf8ToBase64(`${JSON.stringify(next, null, 2)}\n`),
    `Add vlog: ${opts.item.title}`,
    sha,
  );
  return next;
}

export async function deleteVlogOnGithub(token: string, id: string) {
  const trimmed = token.trim();
  if (!trimmed) throw new Error("Paste a GitHub token to delete a post.");
  const { items, sha } = await readJsonFile(trimmed);
  const next = items.filter((v) => v.id !== id);
  await putFile(
    trimmed,
    JSON_PATH,
    utf8ToBase64(`${JSON.stringify(next, null, 2)}\n`),
    `Delete vlog ${id}`,
    sha,
  );
  return next;
}
