import React from "react";
import { ArrowUpRight } from "lucide-react";

export function LiveProjectButton({ href = "#" }: { href?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-[#F3EDE0] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#F3EDE0] transition-colors hover:bg-[#F3EDE0]/10 sm:px-10 sm:py-3.5 sm:text-base"
    >
      Live Project
      <ArrowUpRight size={18} />
    </a>
  );
}
