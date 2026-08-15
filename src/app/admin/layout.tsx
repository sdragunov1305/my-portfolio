import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post a vlog",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}
