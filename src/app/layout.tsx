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
    canonical: "/",
  },
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/banner.png",
        alt: "AINIMATE - Create Comics with AI",
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
