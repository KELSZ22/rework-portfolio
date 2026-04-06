import type { Metadata } from "next";
import { siteTitleBrand } from "@/lib/site";

export const metadata: Metadata = {
  title: "Arts",
  description:
    "Digital art and creative work by Michael Z. Sabino — illustration, design, and visual experiments.",
  alternates: { canonical: "/arts" },
  openGraph: {
    url: "/arts",
    title: `Arts | ${siteTitleBrand}`,
    description:
      "Portfolio of digital artwork, creative design, and visual storytelling.",
  },
};

export default function ArtsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
