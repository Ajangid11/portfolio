"use client";

import React from "react";
import { FadeIn } from "./FadeIn";
import { LiveProjectButton } from "./LiveProjectButton";

interface Project {
  number: string;
  name: string;
  category: string;
  url: string;
  images: string[];
}

const PROJECTS: Project[] = [
  {
    number: "01",
    name: "FleetTrack — Logistics ERP",
    category: "Client",
    url: "https://fleet.maitriiinfotech.com/",
    images: ["/fleet-logistics.png"],
  },
  {
    number: "02",
    name: "HireHub — Job Management",
    category: "Client",
    url: "https://job-refferal-frontend.vercel.app/",
    images: ["/job-portal.png"],
  },
  {
    number: "03",
    name: "Doctor-For — Healthcare",
    category: "Personal",
    url: "https://clinic.maitriiinfotech.com/login",
    images: ["/doctor-for.png"],
  },
  {
    number: "04",
    name: "Maitrii Infotech — Agency",
    category: "Client",
    url: "https://www.maitriiinfotech.com/",
    images: ["/maitrii-web.png"],
  },
  {
    number: "05",
    name: "Axon — AI Workflow Agent",
    category: "Personal",
    url: "https://ai-workflow-agent-five.vercel.app/",
    images: ["/axon-ai.png"],
  },
];

function ProjectCard({ project, wide }: { project: Project; wide?: boolean }) {
  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#F3EDE0]/25 bg-[#221B10]"
    >
      <div className="overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.images[0]}
          alt={project.name}
          loading="lazy"
          className={`w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] ${
            wide ? "aspect-[16/8]" : "aspect-[16/10]"
          }`}
        />
      </div>
      <div className="flex flex-1 flex-wrap items-center justify-between gap-4 p-5 sm:p-6">
        <div className="flex items-center gap-4">
          <span className="hero-heading text-3xl font-bold leading-none sm:text-4xl">
            {project.number}
          </span>
          <div>
            <p className="text-[10px] font-light uppercase tracking-widest text-[#F3EDE0]/50 sm:text-xs">
              {project.category}
            </p>
            <h3 className="text-base font-medium uppercase leading-tight text-[#F3EDE0] sm:text-lg">
              {project.name}
            </h3>
          </div>
        </div>
        <LiveProjectButton href={project.url} />
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
      style={{ backgroundColor: "#17130B" }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Layout change: sticky stacking cards -> editorial grid with the
            first project featured full-width. Header is left-aligned now. */}
        <FadeIn>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p
                className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em]"
                style={{ color: "#E8490F" }}
              >
                Selected Work
              </p>
              <h2 className="hero-heading text-5xl font-bold uppercase leading-none tracking-tight sm:text-6xl lg:text-7xl">
                Projects
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[#F3EDE0]/55">
              Real products, live in production — logistics, hiring, healthcare and AI.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <FadeIn
              key={project.number}
              delay={(i % 2) * 0.08}
              className={i === 0 ? "h-full md:col-span-2" : "h-full"}
            >
              <ProjectCard project={project} wide={i === 0} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
