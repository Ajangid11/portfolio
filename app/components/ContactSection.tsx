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
    "rounded-xl border border-[#D7E2EA]/25 bg-transparent px-4 py-3 text-sm text-[#D7E2EA] outline-none placeholder:text-[#D7E2EA]/40 focus:border-[#D7E2EA]/60";

  return (
    <section
      id="contact"
      className="relative z-20 px-5 py-20 sm:px-8 md:px-10 md:py-28"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      {/* Heading lives outside the max-w-3xl column — at 160px it needs the full width. */}
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading text-center font-black uppercase leading-none tracking-tight"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Let&apos;s Talk
      </FadeIn>

      <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-10 text-center sm:mt-14 sm:gap-14">
        <FadeIn
          as="p"
          delay={0.1}
          y={20}
          className="max-w-md font-light text-[#D7E2EA]"
          style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.15rem)" }}
        >
          Got a project, a role, or just want to say hi? My inbox is open.
        </FadeIn>

        <FadeIn delay={0.2} y={20} className="w-full">
          {status === "sent" ? (
            <p className="py-10 text-lg font-medium text-[#D7E2EA]">
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
                <p className="text-sm text-red-400">Message failed to send — try again.</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 inline-flex items-center justify-center self-center whitespace-nowrap rounded-full px-12 py-4 text-sm font-medium uppercase tracking-widest text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{
                  background:
                    "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
                  boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
                  outline: "2px solid white",
                  outlineOffset: "-3px",
                }}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </FadeIn>

        <FadeIn delay={0.3} y={20} className="flex items-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
