"use client";

import { motion } from "framer-motion";
import React from "react";

/**
 * Motion components must be created outside render — creating them during
 * render remounts the element (and resets its animation) on every pass.
 */
const MOTION_TAGS = {
  div: motion.div,
  nav: motion.nav,
  section: motion.section,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
  a: motion.a,
  li: motion.li,
} as const;

type MotionTagName = keyof typeof MOTION_TAGS;

type FadeInProps = {
  children?: React.ReactNode;
  as?: MotionTagName;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
};

export function FadeIn({
  children,
  as = "div",
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
}: FadeInProps) {
  const MotionTag = MOTION_TAGS[as] ?? MOTION_TAGS.div;

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionTag>
  );
}
