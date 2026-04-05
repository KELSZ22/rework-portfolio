import type { Metadata } from "next";
import { siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on Next.js, TypeScript, frontend development, and engineering notes from Michael Z. Sabino.",
  alternates: { canonical: "/blog" },
  openGraph: {
    url: "/blog",
    title: `Blog | ${siteName}`,
    description:
      "Technical writing on modern web development, frameworks, and frontend trends.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
