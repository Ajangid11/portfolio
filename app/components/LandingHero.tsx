"use client";

import React, { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260725_114042_d2ed2a89-f2fa-449b-9609-da456344257b.mp4";

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

const SERVICES = [
  "Frontend Development (React / Next.js)",
  "Backend Development (Node.js / Python)",
  "UI/UX Design (Figma)",
  "Databases & APIs (MongoDB / PostgreSQL)",
  "Full-Stack Web Applications",
  "Interactive Web (Three.js)",
];

const STATS = [
  { name: "2+", count: "YRS EXP", nameClass: "font-bold text-lg sm:text-xl" },
  { name: "10+", count: "PROJECTS", nameClass: "font-bold text-lg sm:text-xl" },
  {
    name: "REACT · NODE",
    count: "STACK",
    nameClass: "font-bold text-[10px] sm:text-xs tracking-tight",
  },
];

function Logo() {
  return (
    <span
      aria-hidden="true"
      className="font-inter flex h-7 w-7 items-center justify-center text-sm font-black tracking-tight"
    >
      AJ
    </span>
  );
}

export function LandingHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    /* min-h-screen, not h-screen: on phones the meta grid + headline + stats
       stack taller than the viewport, and h-screen + overflow-hidden clipped
       the footer off with no way to reach it. */
    <section className="font-inter relative min-h-screen w-full overflow-hidden bg-black text-white">
      <video
        src={VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover lg:scale-[1.2]"
      />

      <div className="relative z-10 flex min-h-screen flex-col px-5 sm:px-6 md:px-10 lg:px-14">
        {/* NAVBAR */}
        <nav className="flex items-center justify-between py-6">
          <Logo />

          <div className="hidden gap-8 text-sm tracking-wide md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-opacity hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="p-2 transition-opacity hover:opacity-70 md:hidden"
          >
            <Menu size={24} />
          </button>
        </nav>

        {/* FOUR-COLUMN META GRID */}
        <div className="mt-4 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          <div>
            <h2 className="text-lg leading-tight tracking-wide md:text-xl">
              <span className="font-normal">ANJALI</span>
              <br />
              <span className="font-pixel text-2xl md:text-3xl">JANGID</span>
            </h2>
            <p className="mt-3 text-[10px] text-white/50">*</p>
            <p className="font-pixel mt-1 text-xs leading-relaxed text-white/60">
              Full-stack developer
              <br />
              based in India, building
              <br />
              products end-to-end —
              <br />
              from UI to deployment
            </p>
          </div>

          <div className="text-right lg:text-left">
            <h2 className="text-lg leading-tight tracking-wide md:text-xl">
              <span className="font-normal">DESIGN &amp;</span>
              <br />
              <span className="font-pixel text-2xl md:text-3xl">ENGINEERING</span>
            </h2>
          </div>

          <div>
            <p className="font-pixel mb-1.5 text-[10px] uppercase tracking-widest text-white/50 sm:mb-3 sm:text-base">
              What I Do
            </p>
            <p className="max-w-[220px] text-[11px] leading-relaxed text-white/90 sm:text-sm">
              I build fast, reliable web products — from first line of code to production
            </p>
          </div>

          <div className="text-right lg:text-left">
            <p className="font-pixel mb-1.5 text-[10px] uppercase tracking-widest text-white/50 sm:mb-3 sm:text-base">
              Services
            </p>
            <ul className="space-y-0.5 text-[11px] leading-relaxed text-white/90 sm:text-sm">
              {SERVICES.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex-1" />

        {/* BOTTOM SECTION — mt on small screens because the 0.72 line-height
            lets the headline glyphs bleed up out of their line box. */}
        <div className="mt-10 pb-4 sm:mt-0">
          <div className="grid grid-cols-1 items-end gap-4 sm:gap-6 lg:grid-cols-2">
            <h1
              className="text-3xl font-normal uppercase tracking-wide sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem]"
              style={{ lineHeight: 0.72 }}
            >
              I BUILD
              <br />
              <span className="font-pixel inline-block align-baseline text-[1.25em] font-normal leading-none">
                RELIABLE
              </span>{" "}
              WEB
              <br />
              PRODUCTS THAT
              <br />
              <span className="font-pixel inline-block align-baseline text-[1.25em] font-normal leading-none">
                PERFORM
              </span>
            </h1>

            <div className="flex flex-col justify-end gap-4 sm:gap-6">
              <a
                href="#projects"
                className="flex items-center gap-3 self-start border border-white/30 bg-white/5 px-6 py-3 backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <ArrowUpRight size={14} />
                <span className="text-sm tracking-wider">VIEW PROJECTS</span>
              </a>

              <div className="flex flex-wrap items-stretch gap-2 self-start text-sm text-white/80 sm:gap-3 lg:self-end">
                {STATS.map((stat) => (
                  <div
                    key={stat.name}
                    className="flex items-center gap-2 bg-[#0B0B0B] px-3 py-2 sm:px-4"
                  >
                    <span className={stat.nameClass}>{stat.name}</span>
                    <span className="text-xs text-white/50">{stat.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-2 pt-4 sm:mt-5 sm:grid-cols-2 sm:gap-4">
            <p className="text-xs text-white/60">
              Open to freelance, contract or full-time.{" "}
              <a
                href="mailto:anjijangid8@gmail.com"
                className="text-red-500 transition-colors hover:text-red-400"
              >
                Schedule a call
              </a>
            </p>
            <p className="text-xs text-white/60 sm:text-right">
              5 shipped projects &bull; React · Next.js · Node.js · MongoDB
            </p>
          </div>
        </div>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <Logo />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="p-2 transition-opacity hover:opacity-70"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-2xl tracking-widest transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: menuOpen ? `${100 + i * 60}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
