"use client";

import React from "react";
import { FadeIn } from "./FadeIn";

const SERVICES = [
  {
    number: "01",
    name: "Frontend Development",
    description:
      "Building fast, accessible interfaces in React and Next.js with attention to state, performance, and pixel-level detail.",
  },
  {
    number: "02",
    name: "Backend Development",
    description:
      "APIs and data layers with Node.js, Express, MongoDB and PostgreSQL — authentication, workflows, and everything in between.",
  },
  {
    number: "03",
    name: "UI/UX Design",
    description:
      "Designing in Figma and shipping it faithfully in code, from wireframes to a cohesive, memorable product experience.",
  },
  {
    number: "04",
    name: "Interactive Web",
    description:
      "Motion, scroll-driven storytelling, and Three.js scenes that turn an ordinary page into something people remember.",
  },
  {
    number: "05",
    name: "Full-Stack Delivery",
    description:
      "End-to-end ownership: architecture, build, and deploy — a working product shipped rather than a handoff document.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-0 rounded-t-[40px] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Services
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, i) => (
          <FadeIn
            key={service.number}
            delay={i * 0.1}
            y={30}
            className="flex items-start gap-5 py-8 sm:gap-8 sm:py-10 md:gap-12 md:py-12"
            style={{
              borderTop: i === 0 ? "1px solid rgba(12, 12, 12, 0.15)" : undefined,
              borderBottom: "1px solid rgba(12, 12, 12, 0.15)",
            }}
          >
            <span
              className="shrink-0 font-black leading-none text-[#0C0C0C]"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {service.number}
            </span>

            <div className="flex flex-col gap-3 pt-1 sm:gap-4">
              <h3
                className="font-medium uppercase leading-tight text-[#0C0C0C]"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {service.name}
              </h3>
              <p
                className="max-w-2xl font-light leading-relaxed text-[#0C0C0C]"
                style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)", opacity: 0.6 }}
              >
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
