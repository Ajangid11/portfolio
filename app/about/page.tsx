import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { AnimatedText } from "../components/AnimatedText";
import { ContactButton } from "../components/ContactButton";

export const metadata: Metadata = {
  title: "About — Anjali Jangid",
  description:
    "About Anjali Jangid, a full-stack developer & UI/UX enthusiast based in India, building web products end-to-end with React, Next.js, Node.js and MongoDB.",
};

const STATS = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "5", label: "Shipped Products" },
  { value: "10+", label: "Technologies" },
];

const STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "Figma",
  "Three.js",
  "Git",
];

const VALUES = [
  {
    number: "01",
    title: "Clean UI First",
    text: "Interfaces that are fast, accessible and pixel-considered — design and code held to the same standard.",
  },
  {
    number: "02",
    title: "Reliable Code",
    text: "Typed, structured and built to last — so the product keeps working long after launch day.",
  },
  {
    number: "03",
    title: "End-to-End Ownership",
    text: "Architecture, build and deploy under one roof. A working product shipped, not a handoff document.",
  },
  {
    number: "04",
    title: "Real Results",
    text: "From logistics platforms to healthcare apps — work measured by what it does for real users.",
  },
];

const PROCESS = [
  { step: "Discover", text: "Understand the problem, the users and what success actually looks like." },
  { step: "Design", text: "Wireframes to a cohesive, memorable experience — designed in Figma." },
  { step: "Build", text: "Frontend, backend and data layer shipped together, in React, Next.js and Node.js." },
  { step: "Deploy & Grow", text: "Live, monitored and iterated — motion and detail added where they earn their place." },
];

const PROJECTS = [
  {
    name: "FleetTrack — Logistics ERP",
    category: "Client · React · Node.js · MongoDB · Maps",
    text: "Fleet & logistics management with real-time GPS tracking, automated dispatching and booking workflows.",
    url: "https://fleet.maitriiinfotech.com/",
    image: "/fleet-logistics.png",
  },
  {
    name: "HireHub — Job Management",
    category: "Client · Next.js · PostgreSQL · Prisma",
    text: "Recruitment platform for job posting, candidate tracking and workflow automation.",
    url: "https://job-refferal-frontend.vercel.app/",
    image: "/job-portal.png",
  },
  {
    name: "Doctor-For — Healthcare",
    category: "Personal · React · Express · MongoDB · Auth",
    text: "Healthcare platform for finding specialists and booking online appointments.",
    url: "https://clinic.maitriiinfotech.com/login",
    image: "/doctor-for.png",
  },
  {
    name: "Maitrii Infotech — Agency",
    category: "Client · HTML · CSS · JS · SEO",
    text: "Corporate site for Maitrii Infotech's digital solutions and services.",
    url: "https://www.maitriiinfotech.com/",
    image: "/maitrii-web.png",
  },
  {
    name: "Axon — AI Workflow Agent",
    category: "Personal · React · Tailwind · Motion",
    text: "Landing site for an AI agent product that automates routine browser workflows.",
    url: "https://ai-workflow-agent-five.vercel.app/",
    image: "/axon-ai.png",
  },
];

const SERVICES_LIST = [
  { name: "Frontend Development", text: "Fast, accessible interfaces in React and Next.js, with attention to state, performance and pixel-level detail." },
  { name: "Backend Development", text: "APIs and data layers with Node.js, Express, MongoDB and PostgreSQL — authentication, workflows and everything in between." },
  { name: "UI/UX Design", text: "Designing in Figma and shipping it faithfully in code, from wireframes to a cohesive, memorable product experience." },
  { name: "Interactive Web", text: "Motion, scroll-driven storytelling and Three.js scenes that turn an ordinary page into something people remember." },
  { name: "Full-Stack Delivery", text: "End-to-end ownership: architecture, build and deploy — a working product shipped rather than a handoff document." },
];

const FAQS = [
  {
    q: "What kind of projects do you take on?",
    a: "Full-stack web products — business platforms, dashboards, booking systems, corporate sites and landing pages. If it runs in a browser, I can build it end-to-end.",
  },
  {
    q: "What is your main tech stack?",
    a: "React and Next.js on the frontend, Node.js and Python on the backend, with MongoDB, PostgreSQL, Tailwind CSS and Figma for design.",
  },
  {
    q: "Are you open to freelance or full-time work?",
    a: "Yes — I'm open to freelance, contract or full-time opportunities. The fastest way to reach me is the contact form or email.",
  },
  {
    q: "Do you handle deployment as well?",
    a: "Yes. I take products from the first line of code to production — build, deploy and iterate included, not just a handoff.",
  },
];

const STORY =
  "I'm Anjali Jangid, a full-stack developer with 2+ years of experience building web products end-to-end. Based in India, I work with React, Next.js, Node.js and MongoDB — shipping everything from logistics platforms to healthcare apps. I turn ideas into beautifully engineered digital experiences, one component at a time.";

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: "#17130B", overflowX: "clip" }}>
      {/* TOP BAR */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6 sm:px-8 md:px-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#F3EDE0] transition-opacity hover:opacity-70 sm:text-sm"
        >
          <ArrowLeft size={16} />
          Home
        </Link>
        <span className="text-sm font-black tracking-tight text-[#F3EDE0]">AJ</span>
        <Link
          href="/#contact"
          className="flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-[#F3EDE0] transition-opacity hover:opacity-70 sm:text-sm"
        >
          Contact
          <ArrowUpRight size={14} />
        </Link>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pb-16 pt-8 sm:px-8 sm:pt-12 md:px-10 md:pb-24">
        <FadeIn
          as="p"
          delay={0}
          y={20}
          className="mx-auto mb-4 w-full max-w-6xl text-left text-xs font-medium uppercase tracking-[0.3em] text-[#F3EDE0]/60 sm:text-sm"
        >
          Full-Stack Developer &amp; UI/UX Enthusiast — India
        </FadeIn>

        <FadeIn
          as="h1"
          delay={0.05}
          y={40}
          className="hero-heading mx-auto w-full max-w-6xl text-left font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          About Us
        </FadeIn>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 items-center gap-10 md:mt-16 md:grid-cols-2 md:gap-14">
          <FadeIn delay={0.1} y={30} className="relative">
            <div
              className="overflow-hidden rounded-3xl border-2 border-[#F3EDE0] sm:rounded-[40px]"
              style={{ boxShadow: "0 24px 60px rgba(232, 73, 15, 0.22)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.jpg"
                alt="Anjali Jangid"
                className="aspect-[4/5] w-full object-cover object-top sm:aspect-[5/5]"
              />
            </div>
            <div className="absolute -bottom-4 left-4 flex items-center gap-2 bg-[#221B10] px-4 py-2 text-sm text-white/80 sm:left-6">
              <span className="font-bold text-lg text-white">ANJALI JANGID</span>
              <span className="text-xs text-white/50">FULL-STACK DEV</span>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-8">
            <AnimatedText
              text={STORY}
              className="font-medium leading-relaxed text-[#F3EDE0]"
              style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)" }}
            />


            <FadeIn delay={0.3} y={20}>
              <ContactButton href="/#contact" />
            </FadeIn>
          </div>
        </div>

        {/* Stats strip — layout change: was a 2x2 grid beside the text */}
        <FadeIn delay={0.2} y={24}>
          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 border-y border-[#F3EDE0]/15 md:mt-20 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="border-[#F3EDE0]/15 px-5 py-6 odd:border-r lg:border-r lg:px-8 lg:last:border-r-0 [&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+2)]:border-b-0"
              >
                <p className="hero-heading font-black leading-none" style={{ fontSize: "clamp(1.9rem, 4vw, 3.2rem)" }}>
                  {stat.value}
                </p>
                <p className="mt-2 text-[11px] font-light uppercase tracking-widest text-[#F3EDE0]/60 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* MY JOURNEY */}
      <section className="px-5 pb-20 pt-4 sm:px-8 md:px-10 md:pb-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <FadeIn
            as="h2"
            delay={0}
            y={40}
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 7vw, 90px)" }}
          >
            My
            <br />
            Journey
          </FadeIn>

          <div className="flex flex-col gap-6">
            <FadeIn as="p" delay={0.1} y={20} className="font-light leading-relaxed text-[#F3EDE0]" style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)" }}>
              My work has taken me across very different kinds of products — and each one taught me something new.
              I built <strong className="font-semibold">FleetTrack</strong>, a logistics ERP where fleet managers track
              vehicles live on a map and dispatching runs itself. I built <strong className="font-semibold">HireHub</strong>,
              a recruitment platform that takes a candidate from job posting to hire without the spreadsheet chaos.
              And I built <strong className="font-semibold">Doctor-For</strong>, a healthcare platform where patients
              find the right specialist and book an appointment in a few taps.
            </FadeIn>
            <FadeIn as="p" delay={0.18} y={20} className="font-light leading-relaxed text-[#F3EDE0]/80" style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)" }}>
              Along the way I&apos;ve shipped the corporate site for <strong className="font-semibold text-[#F3EDE0]">Maitrii Infotech</strong> and{" "}
              <strong className="font-semibold text-[#F3EDE0]">Axon</strong>, a landing experience for an AI workflow agent.
              Different industries, same rule every time: clean UI, reliable code, real results. Design and engineering
              are not two separate jobs to me — a product only feels right when both are done by someone who cares
              about the other.
            </FadeIn>
            <FadeIn delay={0.25} y={20} className="flex flex-wrap gap-2 pt-2">
              {["Logistics", "Healthcare", "Recruitment", "Agency", "AI Products"].map((area) => (
                <span key={area} className="rounded-full bg-[#F3EDE0]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[#F3EDE0]">
                  {area}
                </span>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TECH STACK — white band, matching ServicesSection */}
      <section
        className="relative z-0 rounded-t-[40px] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10"
        style={{ backgroundColor: "#F3EDE0" }}
      >
        <FadeIn
          as="h2"
          delay={0}
          y={40}
          className="mx-auto mb-12 w-full max-w-6xl text-left font-black uppercase leading-none tracking-tight text-[#17130B] sm:mb-16"
          style={{ fontSize: "clamp(2.4rem, 9vw, 110px)" }}
        >
          Tech Stack
        </FadeIn>

        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-start gap-3 sm:gap-4">
          {STACK.map((tech, i) => (
            <FadeIn key={tech} delay={i * 0.05} y={16}>
              <span className="inline-block rounded-full border border-[#17130B]/20 px-5 py-2.5 text-sm font-medium uppercase tracking-wider text-[#17130B] transition-colors hover:bg-[#17130B] hover:text-white sm:text-base">
                {tech}
              </span>
            </FadeIn>
          ))}
        </div>

        {/* VALUES */}
        <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-x-10 gap-y-12 sm:mt-24 sm:grid-cols-2">
          {VALUES.map((value, i) => (
            <FadeIn
              key={value.number}
              delay={i * 0.08}
              y={30}
              className="flex items-start gap-5"
              style={{ borderTop: "1px solid rgba(23, 19, 11, 0.18)", paddingTop: "1.75rem" }}
            >
              <span className="shrink-0 font-black leading-none text-[#17130B]" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                {value.number}
              </span>
              <div className="flex flex-col gap-2 pt-1">
                <h3 className="text-lg font-medium uppercase leading-tight text-[#17130B] sm:text-xl">{value.title}</h3>
                <p className="font-light leading-relaxed text-[#17130B]" style={{ opacity: 0.6 }}>
                  {value.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* WHAT I DO */}
        <FadeIn
          as="h2"
          delay={0}
          y={40}
          className="mx-auto mb-12 mt-24 w-full max-w-6xl text-left font-black uppercase leading-none tracking-tight text-[#17130B] sm:mt-28 sm:mb-16"
          style={{ fontSize: "clamp(2.4rem, 9vw, 110px)" }}
        >
          What I Do
        </FadeIn>

        <div className="mx-auto max-w-6xl">
          {SERVICES_LIST.map((service, i) => (
            <FadeIn
              key={service.name}
              delay={i * 0.06}
              y={24}
              className="flex flex-col gap-2 py-7 sm:flex-row sm:items-baseline sm:gap-10 sm:py-9"
              style={{
                borderTop: i === 0 ? "1px solid rgba(23, 19, 11, 0.18)" : undefined,
                borderBottom: "1px solid rgba(23, 19, 11, 0.18)",
              }}
            >
              <span className="shrink-0 font-black leading-none text-[#17130B]" style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium uppercase leading-tight text-[#17130B] sm:text-2xl">{service.name}</h3>
                <p className="max-w-2xl font-light leading-relaxed text-[#17130B]" style={{ opacity: 0.6 }}>
                  {service.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="px-5 py-20 sm:px-8 md:px-10 md:py-24" style={{ backgroundColor: "#17130B" }}>
        <FadeIn
          as="h2"
          delay={0}
          y={40}
          className="hero-heading mx-auto mb-14 w-full max-w-6xl text-left font-black uppercase leading-none tracking-tight sm:mb-20"
          style={{ fontSize: "clamp(2.4rem, 9vw, 110px)" }}
        >
          Featured Work
        </FadeIn>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <FadeIn
              key={project.name}
              delay={(i % 3) * 0.08}
              y={30}
              className={`flex flex-col overflow-hidden rounded-3xl border-2 border-[#F3EDE0] sm:rounded-[32px] ${i === 0 ? "lg:col-span-2" : ""}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.image} alt={project.name} loading="lazy" className={`w-full object-cover object-top ${i === 0 ? "aspect-[16/10] lg:aspect-[21/9]" : "aspect-[16/10]"}`} />
              <div className="flex flex-1 flex-col gap-3 p-6">
                <p className="text-[11px] font-light uppercase tracking-widest text-[#F3EDE0]/60">{project.category}</p>
                <h3 className="text-lg font-medium uppercase leading-tight text-[#F3EDE0]">{project.name}</h3>
                <p className="flex-1 text-sm font-light leading-relaxed text-[#F3EDE0]/70">{project.text}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 self-start text-xs font-medium uppercase tracking-widest text-[#F3EDE0] transition-opacity hover:opacity-70"
                >
                  Live Project
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </FadeIn>
          ))}

          <FadeIn
            delay={0.16}
            y={30}
            className="flex flex-col items-center justify-center gap-5 rounded-3xl p-8 text-center sm:rounded-[32px]"
            style={{
              background: "linear-gradient(123deg, #3D0C00 0%, #E8490F 38%, #F07D13 72%, #FFB03A 100%)",
            }}
          >
            <p className="text-xl font-medium uppercase leading-tight text-white">Your project could be next</p>
            <p className="text-sm font-light leading-relaxed text-white/80">
              Have an idea? Let&apos;s turn it into a shipped product.
            </p>
            <ContactButton href="/#contact" />
          </FadeIn>
        </div>
      </section>

      {/* PROCESS + CTA — dark, matching ProjectsSection overlap */}
      <section
        className="relative z-10 -mt-10 rounded-t-[40px] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-28"
        style={{ backgroundColor: "#17130B" }}
      >
        <FadeIn
          as="h2"
          delay={0}
          y={40}
          className="hero-heading mx-auto mb-14 w-full max-w-6xl text-left font-black uppercase leading-none tracking-tight sm:mb-20"
          style={{ fontSize: "clamp(2.4rem, 9vw, 110px)" }}
        >
          How I Work
        </FadeIn>

        <div className="mx-auto max-w-6xl">
          {PROCESS.map((item, i) => (
            <FadeIn
              key={item.step}
              delay={i * 0.06}
              y={24}
              className="flex flex-col gap-2 border-b border-[#F3EDE0]/15 py-7 sm:flex-row sm:items-baseline sm:gap-10 sm:py-9"
              style={{ borderTop: i === 0 ? "1px solid rgba(243, 237, 224, 0.15)" : undefined }}
            >
              <span className="font-pixel shrink-0 text-sm tracking-widest" style={{ color: "#E8490F" }}>
                STEP {i + 1}
              </span>
              <h3 className="w-56 shrink-0 text-xl font-medium uppercase text-[#F3EDE0] sm:text-2xl">{item.step}</h3>
              <p className="max-w-2xl text-sm font-light leading-relaxed text-[#F3EDE0]/70 sm:text-base">{item.text}</p>
            </FadeIn>
          ))}
        </div>

        {/* FAQ */}
        <FadeIn
          as="h2"
          delay={0}
          y={40}
          className="hero-heading mx-auto mb-12 mt-24 w-full max-w-6xl text-left font-black uppercase leading-none tracking-tight sm:mt-28 sm:mb-16"
          style={{ fontSize: "clamp(2.4rem, 9vw, 110px)" }}
        >
          Questions
        </FadeIn>

        <div className="mx-auto max-w-6xl">
          {FAQS.map((faq, i) => (
            <FadeIn
              key={faq.q}
              delay={i * 0.06}
              y={20}
              className="max-w-3xl py-7"
              style={{
                borderTop: i === 0 ? "1px solid rgba(243, 237, 224, 0.22)" : undefined,
                borderBottom: "1px solid rgba(243, 237, 224, 0.22)",
              }}
            >
              <h3 className="text-base font-medium uppercase tracking-wide text-[#F3EDE0] sm:text-lg">{faq.q}</h3>
              <p className="mt-2 font-light leading-relaxed text-[#F3EDE0]/70">{faq.a}</p>
            </FadeIn>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-8 text-center sm:mt-24">
          <FadeIn
            as="p"
            delay={0.1}
            y={20}
            className="max-w-md font-light text-[#F3EDE0]"
            style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)" }}
          >
            Got a project, a role, or just want to say hi? Let&apos;s build something incredible together.
          </FadeIn>
          <FadeIn delay={0.2} y={20} className="flex flex-col items-center gap-5">
            <ContactButton href="/#contact" />
            <a
              href="mailto:anjijangid8@gmail.com"
              className="flex items-center gap-2 text-sm text-[#F3EDE0]/70 transition-colors hover:text-[#F3EDE0]"
            >
              <Mail size={16} />
              anjijangid8@gmail.com
            </a>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
