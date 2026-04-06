import type { Metadata } from "next";
import { siteTitleBrand } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Frontend development, UI/UX, and full stack services — React, Next.js, TypeScript, and tailored technical consulting.",
  alternates: { canonical: "/services" },
  openGraph: {
    url: "/services",
    title: `Services | ${siteTitleBrand}`,
    description:
      "Professional web development services including React, Next.js, responsive design, and performance optimization.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
