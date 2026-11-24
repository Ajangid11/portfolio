"use client";

import React, { useState } from "react";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260725_114042_d2ed2a89-f2fa-449b-9609-da456344257b.mp4";

const NAV_LINKS = [
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "#services" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

const INFO_BAR = [
  {
    title: "What I Do",
    body: "I build fast, reliable web products — from first line of code to production.",
  },
  {
    title: "Services",
    body: "Frontend · Backend · UI/UX · Databases & APIs · Full-Stack Apps · Interactive Web",
  },
  {
    title: "Track Record",
    body: "2+ years experience · 10+ projects · 5 shipped products",
  },
  {
    title: "Availability",
    body: "Open to freelance, contract or full-time roles.",
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
    <section className="font-inter relative flex min-h-screen w-full flex-col overflow-hidden bg-black text-white">
      <video
        src={VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover lg:scale-[1.2]"
      />

      {/* Warm espresso tint — ties the video into the redesign palette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,7,13,0.66) 0%, rgba(5,7,13,0.15) 42%, rgba(5,7,13,0.82) 100%)",
        }}
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

        {/* CENTERED HEADLINE — layout change: the old bottom-left headline
            and 4-column meta grid are replaced by a centered statement
            with the details moved into the bottom info bar. */}
        <div className="flex flex-1 flex-col items-center justify-center py-16 text-center">
          <p className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-white/70 sm:text-xs">
            <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: "#00C2FF" }} />
            Anjali Jangid — Full-Stack Developer, India
          </p>

          <h1
            className="max-w-5xl font-normal uppercase leading-[0.95] tracking-wide"
            style={{ fontSize: "clamp(2.2rem, 6.5vw, 5.2rem)" }}
          >
            I build{" "}
            <span className="font-pixel aurora-text inline-block align-baseline text-[1.15em] leading-none">
              reliable
            </span>
            <br />
            web products that{" "}
            <span className="font-pixel aurora-text inline-block align-baseline text-[1.15em] leading-none">
              perform
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
            Design &amp; engineering in one pair of hands — striking interfaces,
            dependable backends, shipped end-to-end.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium uppercase tracking-widest text-white transition-opacity hover:opacity-90"
              style={{
                background:
                  "linear-gradient(120deg, #7C5CFF 0%, #00C2FF 55%, #00E5A0 110%)",
                boxShadow:
                  "0px 8px 24px rgba(0, 194, 255, 0.35), 4px 4px 12px rgba(124, 92, 255, 0.45) inset",
                outline: "2px solid #E9EDF5",
                outlineOffset: "-3px",
              }}
            >
              View Projects
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-8 py-3.5 text-sm font-medium uppercase tracking-widest text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* BOTTOM INFO BAR */}
        <div className="border-t border-white/20">
          <div className="grid grid-cols-2 gap-x-6 gap-y-5 py-6 lg:grid-cols-4">
            {INFO_BAR.map((item) => (
              <div key={item.title}>
                <p className="font-pixel mb-1.5 text-[10px] uppercase tracking-widest text-white/50 sm:text-xs">
                  {item.title}
                </p>
                <p className="text-[11px] leading-relaxed text-white/85 sm:text-[13px]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between pb-5 text-[11px] text-white/50">
            <p>
              <a href="mailto:anjijangid8@gmail.com" className="text-cyan-300 transition-colors hover:text-cyan-200">
                Schedule a call
              </a>{" "}
              — anjijangid8@gmail.com
            </p>
            <p className="hidden items-center gap-1.5 sm:flex">
              Scroll
              <ArrowDown size={12} className="animate-bounce" />
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
