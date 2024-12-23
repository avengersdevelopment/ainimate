import { fonts } from "@/lib/fonts";
import "./globals.css";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/config";

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  icons: {
    icon: "/favicon.ico", // Path to favicon.ico
    shortcut: "/favicon/favicon-16x16.png", // Path to additional shortcut icon
    apple: "/favicon/favicon-32x32.png", // Path to Apple-specific favicon
  },
  alternates: {
    canonical: "https://www.ainimate.io/",
  },
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    images: [
      {
        url: "https://ainimate.io/banner.jpg",
        width: 1200,
        height: 630,
        alt: "AINIMATE - Create Comics with AI",
        type: "image/jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body
          className={`${fonts.monumentextended.variable} ${fonts.encodeSansExpanded.variable} ${fonts.sora.variable} ${fonts.extended.variable} font-encodeSans`}
        >
          {children}
        </body>
      </html>
    </>
  );
}
