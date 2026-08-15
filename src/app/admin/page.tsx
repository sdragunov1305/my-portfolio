"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { withBasePath } from "@/lib/asset";

type Posted = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [fullText, setFullText] = useState("");
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [photo, setPhoto] = useState<File | null>(null);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const [posts, setPosts] = useState<Posted[]>([]);

  const headers = () => ({ "x-admin-password": password });

  async function loadPosts() {
    const res = await fetch(withBasePath("/api/vlogs"), { cache: "no-store" });
    const data = (await res.json()) as { vlogs?: Posted[] };
    setPosts(data.vlogs ?? []);
  }

  useEffect(() => {
    const saved = sessionStorage.getItem("admin-password");
    if (saved) {
      setPassword(saved);
      setUnlocked(true);
    }
  }, []);

  useEffect(() => {
    if (unlocked) void loadPosts();
  }, [unlocked]);

  function unlock(e: FormEvent) {
    e.preventDefault();
    if (!password.trim()) return;
    sessionStorage.setItem("admin-password", password);
    setUnlocked(true);
    setStatus("");
  }

  async function publish(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setStatus("");
    const form = new FormData();
    form.set("title", title);
    form.set("excerpt", excerpt);
    form.set("fullText", fullText);
    form.set("date", date);
    if (photo) form.set("photo", photo);
    try {
      const res = await fetch(withBasePath("/api/vlogs"), { method: "POST", headers: headers(), body: form });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setStatus(data.error || "Could not publish");
        if (res.status === 401) {
          setUnlocked(false);
          sessionStorage.removeItem("admin-password");
        }
        return;
      }
      setTitle("");
      setExcerpt("");
      setFullText("");
      setPhoto(null);
      setStatus("Published — it is now in Latest Updates.");
      await loadPosts();
    } catch {
      setStatus("Network error");
    } finally {
      setBusy(false);
    }
  }

  async function remove(id: string) {
    if (!confirm("Delete this post?")) return;
    const res = await fetch(`${withBasePath("/api/vlogs")}?id=${encodeURIComponent(id)}`, {
      method: "DELETE",
      headers: headers(),
    });
    if (res.ok) await loadPosts();
  }

  return (
    <main className="min-h-screen bg-[#120b25] px-4 py-10 text-white">
      <div className="mx-auto w-full max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">Site owner</p>
        <h1 className="mt-2 text-3xl font-extrabold">Post a vlog</h1>
        <p className="mt-2 text-sm text-white/60">
          Write a title, add a photo, paste your text. It shows up in Latest Updates. No code.
          On GitHub Pages this form only works if you run the site locally (`npm run dev`) and then push the saved files.
        </p>

        {!unlocked ? (
          <form onSubmit={unlock} className="mt-8 space-y-4 rounded-2xl border border-white/15 bg-white/8 p-5">
            <label className="block text-sm text-white/80">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2.5 text-white outline-none focus:border-violet-400/60"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-xl border border-white/80 px-4 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-white/10"
            >
              Open
            </button>
          </form>
        ) : (
          <>
            <form onSubmit={publish} className="mt-8 space-y-4 rounded-2xl border border-white/15 bg-white/8 p-5">
              <label className="block text-sm text-white/80">
                Title
                <input
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2.5 outline-none focus:border-violet-400/60"
                />
              </label>
              <label className="block text-sm text-white/80">
                Short preview (optional)
                <input
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2.5 outline-none focus:border-violet-400/60"
                />
              </label>
              <label className="block text-sm text-white/80">
                Date
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2.5 outline-none focus:border-violet-400/60"
                />
              </label>
              <label className="block text-sm text-white/80">
                Photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setPhoto(e.target.files?.[0] ?? null)}
                  className="mt-1 w-full text-sm text-white/70 file:mr-3 file:rounded-lg file:border-0 file:bg-violet-600 file:px-3 file:py-1.5 file:text-white"
                />
              </label>
              <label className="block text-sm text-white/80">
                Text
                <textarea
                  required
                  rows={10}
                  value={fullText}
                  onChange={(e) => setFullText(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2.5 outline-none focus:border-violet-400/60"
                />
              </label>
              <button
                type="submit"
                disabled={busy}
                className="w-full rounded-xl bg-violet-600 px-4 py-3 text-sm font-bold uppercase tracking-wider hover:bg-violet-500 disabled:opacity-50"
              >
                {busy ? "Publishing…" : "Publish"}
              </button>
              {status ? <p className="text-sm text-cyan-200/90">{status}</p> : null}
            </form>

            {posts.length > 0 ? (
              <div className="mt-8 space-y-2">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-white/50">Your posts</h2>
                {posts.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/30 px-3 py-2.5"
                  >
                    <div className="min-w-0">
                      <p className="truncate font-semibold">{p.title}</p>
                      <p className="text-xs text-white/45">{p.date}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => void remove(p.id)}
                      className="shrink-0 text-xs text-red-300/80 hover:text-red-200"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            ) : null}
          </>
        )}

        <p className="mt-8 text-center text-xs text-white/35">
          <Link href="/" className="underline decoration-white/20 hover:text-white/70">
            Back to site
          </Link>
        </p>
      </div>
    </main>
  );
}
