import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import SmoothScroll from "@/components/site/SmoothScroll";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

const SITE_DESCRIPTION =
  "An AI-native product studio that builds SaaS and AI products — from RAG, agents, and LLM features to platform modernization — for founders and CTOs.";
const SITE_TITLE = "Devaxl — We design, build, and scale SaaS & AI products";

export const metadata: Metadata = {
  metadataBase: new URL("https://devaxl.com"),
  title: {
    default: SITE_TITLE,
    template: "%s — Devaxl",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Devaxl",
  keywords: [
    "AI product studio",
    "AI SaaS development",
    "product engineering",
    "SaaS MVP",
    "RAG",
    "AI agents",
    "LLM features",
    "platform modernization",
    "software studio",
    "founders",
    "CTO",
  ],
  authors: [{ name: "Devaxl" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Devaxl",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <SmoothScroll />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
