import React from "react";

export function ContactButton({ href = "#contact" }: { href?: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center whitespace-nowrap rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
      style={{
        background:
          "linear-gradient(123deg, #3D0C00 0%, #E8490F 38%, #F07D13 72%, #FFB03A 100%)",
        boxShadow: "0px 6px 16px rgba(232, 73, 15, 0.35), 4px 4px 12px rgba(120, 40, 0, 0.5) inset",
        outline: "2px solid #F3EDE0",
        outlineOffset: "-3px",
      }}
    >
      Contact Me
    </a>
  );
}
