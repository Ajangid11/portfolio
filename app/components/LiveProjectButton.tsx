import React from "react";
import { ArrowUpRight } from "lucide-react";

export function LiveProjectButton({ href = "#" }: { href?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-[#E9EDF5] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#E9EDF5] transition-colors hover:bg-[#E9EDF5]/10 sm:px-10 sm:py-3.5 sm:text-base"
    >
      Live Project
      <ArrowUpRight size={18} />
    </a>
  );
}
