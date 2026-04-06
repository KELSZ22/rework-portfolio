import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/nav-bar";
import { ToastProvider } from "@/components/ui/toast";
import {
  defaultDescription,
  getSiteUrl,
  siteDomain,
  siteName,
  siteTitleBrand,
} from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: siteName,
      alternateName: siteDomain,
      url: siteUrl.origin,
      description: defaultDescription,
    },
    {
      "@type": "Person",
      name: siteName,
      alternateName: siteTitleBrand,
      url: siteUrl.origin,
      jobTitle: "Full Stack Developer",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${siteTitleBrand} | Portfolio`,
    template: `%s | ${siteTitleBrand}`,
  },
  description: defaultDescription,
  keywords: [
    "Michael Z. Sabino",
    "Michael Sabino",
    siteDomain,
    "kelsz",
    "full stack developer",
    "portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "web development",
  ],
  authors: [{ name: siteName, url: siteUrl.origin }],
  creator: siteName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl.origin,
    siteName: siteDomain,
    title: `${siteTitleBrand} | Portfolio`,
    description: defaultDescription,
  },
  twitter: {
    card: "summary",
    title: `${siteTitleBrand} | Portfolio`,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ToastProvider>
          <Navbar />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
