"use client";

import { motion, useReducedMotion, useScroll } from "motion/react";
import type { RefObject } from "react";

export function ScrollProgressLine({ containerRef }: { containerRef: RefObject<HTMLElement | null> }) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 75%"],
  });

  if (shouldReduceMotion) return null;

  return (
    <motion.div
      aria-hidden
      style={{ scaleY: scrollYProgress }}
      className="pointer-events-none absolute left-0 top-0 h-full w-px origin-top bg-accent"
    />
  );
}
