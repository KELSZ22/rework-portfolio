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

export const defaultDescription =
  "Full stack developer portfolio — projects, services, blog, and creative work by Michael Z. Sabino.";
