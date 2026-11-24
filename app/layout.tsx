import type { Metadata } from "next";
import { Kanit, Inter } from "next/font/google";
import "./globals.css";
import { Preloader } from "./components/Preloader";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

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
    <html lang="en" className={`${kanit.variable} ${inter.variable} h-full antialiased`}>
      <head>
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
