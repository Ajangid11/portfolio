"use client";

import React, { useState } from "react";
import { Mail } from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
import { FadeIn } from "./FadeIn";

const EMAIL = "anjijangid8@gmail.com";
const GITHUB_URL = "https://github.com/Ajangid11";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactSection() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!(values.name && values.email && values.message)) return;
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: "New message from portfolio contact form",
          ...values,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Failed to send");
      setStatus("sent");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "rounded-xl border border-[#E9EDF5]/25 bg-transparent px-4 py-3 text-sm text-[#E9EDF5] outline-none placeholder:text-[#E9EDF5]/40 focus:border-[#E9EDF5]/60";

  return (
    <section
      id="contact"
      className="section-glow relative z-20 px-5 py-20 sm:px-8 md:px-10 md:py-28"
      style={{ backgroundColor: "#05070D" }}
    >
      {/* Layout change: centered single column -> two columns.
          Left: heading, pitch and direct contact links. Right: the form
          inside a bordered card. */}
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <FadeIn>
            <p
              className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em]"
              style={{ color: "#00C2FF" }}
            >
              Contact
            </p>
            <h2
              className="hero-heading font-black uppercase leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
            >
              Let&apos;s
              <br />
              Talk
            </h2>
          </FadeIn>

          <FadeIn
            as="p"
            delay={0.1}
            y={20}
            className="mt-6 max-w-md font-light leading-relaxed text-[#E9EDF5]"
            style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.15rem)" }}
          >
            Got a project, a role, or just want to say hi? My inbox is open —
            I usually reply within a day.
          </FadeIn>

          <FadeIn delay={0.2} y={20} className="mt-8 flex flex-col gap-3 text-sm text-[#E9EDF5]/80">
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 transition-colors hover:text-[#E9EDF5]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E9EDF5]/30">
                <Mail size={16} />
              </span>
              {EMAIL}
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-[#E9EDF5]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E9EDF5]/30">
                <GithubIcon size={16} />
              </span>
              github.com/Ajangid11
            </a>
            <p className="mt-2 flex items-center gap-2 text-[#E9EDF5]/60">
              <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: "#00C2FF" }} />
              Open to freelance, contract or full-time
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} y={20} className="rounded-3xl border border-[#E9EDF5]/20 bg-white/[0.03] p-6 sm:p-8">
          {status === "sent" ? (
            <p className="py-10 text-lg font-medium text-[#E9EDF5]">
              Message sent — I&apos;ll get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  required
                  placeholder="Your name"
                  value={values.name}
                  onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                  className={inputClass}
                />
                <input
                  required
                  type="email"
                  placeholder="Your email"
                  value={values.email}
                  onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                  className={inputClass}
                />
              </div>
              <textarea
                required
                placeholder="Your message"
                rows={5}
                value={values.message}
                onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                className={`resize-none ${inputClass}`}
              />
              {status === "error" && (
                <p className="text-sm text-red-300">Message failed to send — try again.</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 inline-flex items-center justify-center self-start whitespace-nowrap rounded-full px-12 py-4 text-sm font-medium uppercase tracking-widest text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{
                  background:
                    "linear-gradient(120deg, #7C5CFF 0%, #00C2FF 55%, #00E5A0 110%)",
                  boxShadow: "0px 8px 24px rgba(0, 194, 255, 0.35), 4px 4px 12px rgba(124, 92, 255, 0.45) inset",
                  outline: "2px solid #E9EDF5",
                  outlineOffset: "-3px",
                }}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
