import type { Metadata } from "next";
import { siteTitleBrand } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on Next.js, TypeScript, frontend development, and engineering notes from Michael Z. Sabino.",
  alternates: { canonical: "/blog" },
  openGraph: {
    url: "/blog",
    title: `Blog | ${siteTitleBrand}`,
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
