export function getSiteUrl(): URL {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv) {
    return new URL(fromEnv.endsWith("/") ? fromEnv.slice(0, -1) : fromEnv);
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  return new URL("http://localhost:3000");
}

export const siteName = "Michael Z. Sabino";

// Shorter name for document title, Open Graph, and Twitter title tags
export const siteTitleBrand = "Michael Sabino";

/** Public site hostname (search + schema); keep in sync with production URL */
export const siteDomain = "kelsz.dev";

export const defaultDescription =
  `Full stack developer portfolio at ${siteDomain} — projects, services, blog, and creative work by Michael Z. Sabino.`;
