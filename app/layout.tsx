import type { Metadata } from "next";
import "./globals.css";
import { Preloader } from "./components/Preloader";

/*
 * Fonts are loaded with plain <link> tags (below), NOT next/font/google.
 * next/font/google downloads its font files from Google at BUILD time —
 * on deployment builders where that download fails, the build dies with
 * "module-not-found" inside the generated inter/kanit font CSS.
 * Link-loaded fonts are fetched by the visitor's browser at runtime
 * instead, so the build never depends on Google Fonts being reachable.
 * The --font-kanit / --font-inter variables are defined in globals.css.
 */

export const metadata: Metadata = {
  title: "Anjali Jangid — Design & Engineering",
  description:
    "Full-stack developer driven by crafting striking and unforgettable projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Kanit + Inter — runtime-loaded (see note at the top of this file) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- app router: a font link in the root layout loads on every page */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Kanit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* basis33 — the pixel/bitmap face behind .font-pixel */}
        <link
          href="https://db.onlinewebfonts.com/c/d08bafd725a4cfc309efb5a88e0b63a5?family=basis33"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full" style={{ backgroundColor: "#0C0C0C" }}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
