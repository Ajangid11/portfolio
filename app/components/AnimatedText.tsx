"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import React, { useRef } from "react";

function Char({
  children,
  range,
  progress,
}: {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="invisible">{children}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {children}
      </motion.span>
    </span>
  );
}

/** Splits text into words, each tagged with the character offset it starts at. */
function splitIntoWords(text: string) {
  let offset = 0;
  return text.split(" ").map((word) => {
    const start = offset;
    offset += word.length + 1; // +1 for the space that followed it
    return { word, start };
  });
}

export function AnimatedText({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = splitIntoWords(text);
  const total = text.length;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map(({ word, start }, wi) => (
        <React.Fragment key={wi}>
          <span className="inline-block whitespace-nowrap">
            {Array.from(word).map((char, ci) => (
              <Char
                key={ci}
                range={[(start + ci) / total, (start + ci + 1) / total]}
                progress={scrollYProgress}
              >
                {char}
              </Char>
            ))}
          </span>
          {/* Space must live OUTSIDE the inline-block span — a trailing space
              inside one is collapsed away, gluing the words together. */}
          {wi < words.length - 1 && " "}
        </React.Fragment>
      ))}
    </p>
  );
}
