import { NextResponse } from "next/server";
import { isAdminAuthorized } from "@/lib/admin-auth";
import { listPostedVlogs, savePostedVlogs, saveUpload, slugId } from "@/lib/posted-vlogs";

export const dynamic = "force-dynamic";

export async function GET() {
  const vlogs = await listPostedVlogs();
  return NextResponse.json({ vlogs });
}

export async function POST(request: Request) {
  if (!isAdminAuthorized(request)) {
    return NextResponse.json({ error: "Wrong password" }, { status: 401 });
  }

  const form = await request.formData();
  const title = String(form.get("title") ?? "").trim();
  const excerpt = String(form.get("excerpt") ?? "").trim();
  const fullText = String(form.get("fullText") ?? "").trim();
  const date = String(form.get("date") ?? "").trim() || new Date().toISOString().slice(0, 10);
  const photo = form.get("photo");

  if (!title || !fullText) {
    return NextResponse.json({ error: "Title and text are required" }, { status: 400 });
  }

  let image = "";
  if (photo instanceof File && photo.size > 0) {
    if (photo.size > 6 * 1024 * 1024) {
      return NextResponse.json({ error: "Photo must be under 6 MB" }, { status: 400 });
    }
    image = await saveUpload(photo);
  }

  const item = {
    id: slugId(title),
    title,
    date,
    excerpt: excerpt || fullText.slice(0, 180),
    image,
    fullText,
  };

  const existing = await listPostedVlogs();
  await savePostedVlogs([item, ...existing]);
  return NextResponse.json({ ok: true, vlog: item });
}

export async function DELETE(request: Request) {
  if (!isAdminAuthorized(request)) {
    return NextResponse.json({ error: "Wrong password" }, { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
  const existing = await listPostedVlogs();
  await savePostedVlogs(existing.filter((v) => v.id !== id));
  return NextResponse.json({ ok: true });
}
