"use client";

import React from "react";
import { FadeIn } from "./FadeIn";
import { AnimatedText } from "./AnimatedText";
import { ContactButton } from "./ContactButton";

const STATS = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "5", label: "Shipped Products" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-5 py-20 sm:px-6 sm:py-24 md:px-10 lg:px-14"
      style={{ backgroundColor: "#17130B" }}
    >
      {/* Layout change: two columns — sticky heading left, statement +
          stats right (was a single centered column with corner decor). */}
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <FadeIn>
            <p
              className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em]"
              style={{ color: "#E8490F" }}
            >
              About Me
            </p>
            <h2 className="hero-heading text-4xl font-bold uppercase leading-[1.02] tracking-tight sm:text-5xl">
              The developer
              <br />
              behind the
              <br />
              products
            </h2>
            <div className="mt-8 hidden lg:block">
              <ContactButton href="#contact" />
            </div>
          </FadeIn>
        </div>

        <div>
          <AnimatedText
            text="I'm Anjali Jangid, a full-stack developer with 2+ years of experience building web products end-to-end. Based in India, I work with React, Next.js, Node.js and MongoDB — shipping everything from logistics platforms to healthcare apps. I turn ideas into beautifully engineered digital experiences, one component at a time."
            className="text-xl font-medium leading-[1.45] sm:text-2xl lg:text-[28px]"
            style={{ color: "#F3EDE0" }}
          />

          <FadeIn delay={0.15}>
            <div className="mt-10 grid grid-cols-3 divide-x divide-[#F3EDE0]/15 border-y border-[#F3EDE0]/15 py-6">
              {STATS.map((s) => (
                <div key={s.label} className="px-4 first:pl-0 sm:px-6">
                  <p className="hero-heading text-3xl font-bold sm:text-4xl">{s.value}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#F3EDE0]/50 sm:text-[11px]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          <div className="mt-8 lg:hidden">
            <ContactButton href="#contact" />
          </div>
        </div>
      </div>
    </section>
  );
}
