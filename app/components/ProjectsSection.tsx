"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { LiveProjectButton } from "./LiveProjectButton";

interface Project {
  number: string;
  name: string;
  category: string;
  url: string;
  /** Up to 3 shots. Fewer than 3 falls back to the first for the empty slots. */
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
    // Add "/axon-mission.png" and "/axon-workforce.png" here once those
    // section screenshots are saved into public/ — the card uses up to 3.
    images: ["/axon-ai.png"],
  },
];

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  // Projects with a single screenshot reuse it for the empty slots.
  const [shotA, shotB, shotC] = [0, 1, 2].map(
    (i) => project.images[i] ?? project.images[0]
  );

  return (
    <div className="sticky top-20 flex h-[70vh] items-center justify-center sm:h-[85vh] md:top-32">
      <motion.div
        style={{ scale, top: `${index * 28}px`, backgroundColor: "#0C0C0C" }}
        className="relative flex w-full flex-col gap-4 rounded-3xl border-2 border-[#D7E2EA] p-4 sm:gap-6 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span
              className="font-black leading-none text-[#D7E2EA]"
              style={{ fontSize: "clamp(2.5rem, 7vw, 100px)" }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span
                className="font-light uppercase tracking-widest text-[#D7E2EA] opacity-60"
                style={{ fontSize: "clamp(0.7rem, 1.1vw, 0.95rem)" }}
              >
                {project.category}
              </span>
              <h3
                className="font-medium uppercase leading-tight text-[#D7E2EA]"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2rem)" }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton href={project.url} />
        </div>

        <div className="flex gap-3 sm:gap-4 md:gap-5">
          <div className="flex w-[40%] flex-col gap-3 sm:gap-4 md:gap-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={shotB}
              alt={project.name}
              loading="lazy"
              className="w-full rounded-2xl object-cover object-top sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={shotC}
              alt={project.name}
              loading="lazy"
              className="w-full rounded-2xl object-cover object-bottom sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>

          <div className="w-[60%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={shotA}
              alt={project.name}
              loading="lazy"
              className="h-full w-full rounded-2xl object-cover sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Project
      </FadeIn>

      <div ref={containerRef} className="mx-auto max-w-6xl">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            total={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
