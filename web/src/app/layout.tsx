import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import SmoothScroll from "@/components/site/SmoothScroll";

export const metadata: Metadata = {
  title: "DevAXL — We design, build, and scale SaaS products",
  description:
    "A premium product engineering studio. Launching a v1 or modernizing a platform serving thousands of users — we embed a senior product team and ship.",
  metadataBase: new URL("https://devaxl.com"),
  openGraph: {
    title: "DevAXL — We design, build, and scale SaaS products",
    description:
      "A premium product engineering studio for founders and CTOs.",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
