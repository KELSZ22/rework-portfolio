import type { Metadata } from "next";
import { siteTitleBrand } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Web applications, mobile apps, and technical work by Michael Z. Sabino — portfolio projects and case studies.",
  alternates: { canonical: "/projects" },
  openGraph: {
    url: "/projects",
    title: `Projects | ${siteTitleBrand}`,
    description:
      "Explore web applications, mobile apps, and solutions showcasing full stack development and creative problem-solving.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
