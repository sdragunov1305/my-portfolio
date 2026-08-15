import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import type { VlogItem } from "@/data/content";

const jsonPath = path.join(process.cwd(), "data", "posted-vlogs.json");
const uploadsDir = path.join(process.cwd(), "public", "uploads");

export type PostedVlog = Pick<VlogItem, "id" | "title" | "date" | "excerpt" | "image" | "fullText">;

export async function listPostedVlogs(): Promise<PostedVlog[]> {
  try {
    const raw = await readFile(jsonPath, "utf8");
    const parsed = JSON.parse(raw) as PostedVlog[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function savePostedVlogs(items: PostedVlog[]) {
  await mkdir(path.dirname(jsonPath), { recursive: true });
  await writeFile(jsonPath, `${JSON.stringify(items, null, 2)}\n`, "utf8");
}

export async function saveUpload(file: File): Promise<string> {
  const ext = path.extname(file.name).toLowerCase() || ".jpg";
  const safeExt = [".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(ext) ? ext : ".jpg";
  const name = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${safeExt}`;
  const bytes = Buffer.from(await file.arrayBuffer());
  await mkdir(uploadsDir, { recursive: true });
  await writeFile(path.join(uploadsDir, name), bytes);
  return `/uploads/${name}`;
}

export function slugId(title: string) {
  const base = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);
  return `post-${base || "vlog"}-${Date.now().toString(36)}`;
}
