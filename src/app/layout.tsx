import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import { SITE } from "@/lib/content";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE.legalName} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.shortDescription,
  keywords: [
    "best software agency in Kashmir",
    "best digital marketing agency in Kashmir",
    "software development Kashmir",
    "digital marketing agency Kashmir USA",
    "top software company Kashmir",
    "web application development",
    "Shopify development",
    "SEO services Kashmir",
    "San Francisco software agency",
    "San Rafael digital marketing",
    "Altveen Technologies",
  ],
  authors: [{ name: SITE.legalName }],
  openGraph: {
    type: "website",
    siteName: SITE.legalName,
    title: `${SITE.legalName} | ${SITE.tagline}`,
    description: SITE.shortDescription,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.legalName} | ${SITE.tagline}`,
    description: SITE.shortDescription,
  },
  icons: { icon: "/images/logo1.png", apple: "/images/logo1.png" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
