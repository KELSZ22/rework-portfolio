import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const paths: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/projects", priority: 0.9, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/arts", priority: 0.8, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().origin;
  const lastModified = new Date();

  return paths.map(({ path, priority, changeFrequency }) => ({
    url: path === "" ? `${base}/` : `${base}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
