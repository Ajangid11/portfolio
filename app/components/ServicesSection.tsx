"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

const SERVICES = [
  {
    title: "Frontend Development",
    desc: "Building fast, accessible interfaces in React and Next.js with attention to state, performance, and pixel-level detail.",
  },
  {
    title: "Backend Development",
    desc: "APIs and data layers with Node.js, Express, MongoDB and PostgreSQL — authentication, workflows, and everything in between.",
  },
  {
    title: "UI/UX Design",
    desc: "Designing in Figma and shipping it faithfully in code, from wireframes to a cohesive, memorable product experience.",
  },
  {
    title: "Interactive Web",
    desc: "Motion, scroll-driven storytelling, and Three.js scenes that turn an ordinary page into something people remember.",
  },
  {
    title: "End-to-End Products",
    desc: "One accountable partner from concept to launch — design, frontend, backend, deployment and iteration, all in-house.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="px-5 py-20 sm:px-6 sm:py-24 md:px-10 lg:px-14"
      style={{ backgroundColor: "#EDF1F7" }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Left-aligned header row — was a centered hero heading */}
        <FadeIn>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p
                className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em]"
                style={{ color: "#00C2FF" }}
              >
                What I Do
              </p>
              <h2
                className="text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl"
                style={{ color: "#05070D" }}
              >
                Services
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed" style={{ color: "rgba(5,7,13,0.6)" }}>
              Everything a product needs to go from idea to launch — under one roof.
            </p>
          </div>
        </FadeIn>

        {/* Layout change: full-width numbered rows -> two-column card grid,
            ending with a gradient "start a project" call-to-action card. */}
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.06} className="h-full">
              <article className="h-full rounded-3xl border border-[rgba(5,7,13,0.18)] bg-white/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/70 sm:p-9">
                <p className="font-pixel text-sm tracking-widest" style={{ color: "#00C2FF" }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3
                  className="mt-4 text-xl font-bold uppercase tracking-tight sm:text-2xl"
                  style={{ color: "#05070D" }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-3 max-w-md text-sm leading-relaxed sm:text-[15px]"
                  style={{ color: "rgba(5,7,13,0.66)" }}
                >
                  {s.desc}
                </p>
              </article>
            </FadeIn>
          ))}

          <FadeIn delay={SERVICES.length * 0.06} className="h-full">
            <a
              href="#contact"
              className="group flex h-full min-h-[190px] flex-col justify-between rounded-3xl p-7 text-white transition-transform duration-300 hover:-translate-y-1 sm:p-9"
              style={{
                background:
                  "linear-gradient(120deg, #7C5CFF 0%, #00C2FF 55%, #00E5A0 110%)",
              }}
            >
              <p className="font-pixel text-sm uppercase tracking-widest text-white/80">
                Your project here
              </p>
              <p className="mt-6 flex items-center gap-2 text-xl font-bold uppercase tracking-tight sm:text-2xl">
                Start a project
                <ArrowUpRight
                  size={22}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </p>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
