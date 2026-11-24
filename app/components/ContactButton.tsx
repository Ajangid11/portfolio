import React from "react";

export function ContactButton({ href = "#contact" }: { href?: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center whitespace-nowrap rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
      style={{
        background:
          "linear-gradient(120deg, #7C5CFF 0%, #00C2FF 55%, #00E5A0 110%)",
        boxShadow: "0px 8px 24px rgba(0, 194, 255, 0.35), 4px 4px 12px rgba(124, 92, 255, 0.45) inset",
        outline: "2px solid #E9EDF5",
        outlineOffset: "-3px",
      }}
    >
      Contact Me
    </a>
  );
}
