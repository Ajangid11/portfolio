"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const NAME = "ANJALI JANGID";
const DURATION_MS = 1600;

/**
 * Full-screen preloader shown once on first load (the root layout stays
 * mounted across client-side navigation, so it does not replay per page).
 * Counts 0 → 100 with the site's gradient bar, then slides up and away.
 */
export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION_MS, 1);
      // ease-out so the counter rushes early and settles into 100
      setProgress(Math.round((1 - Math.pow(1 - t, 3)) * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 300);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center px-6"
          style={{ backgroundColor: "#05070D" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-[#E9EDF5]/50 sm:text-xs">
            Portfolio — Design &amp; Engineering
          </p>

          <div className="flex overflow-hidden" role="presentation">
            {NAME.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 + i * 0.04, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="hero-heading font-black uppercase leading-none tracking-tight"
                style={{ fontSize: "clamp(2rem, 8vw, 5.5rem)" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          <div className="mt-10 w-56 max-w-[70vw] sm:w-72">
            <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background:
                    "linear-gradient(120deg, #7C5CFF 0%, #00C2FF 55%, #00E5A0 110%)",
                }}
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] font-medium uppercase tracking-widest text-[#E9EDF5]/50">
              <span>Loading</span>
              <span className="text-[#E9EDF5]">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
