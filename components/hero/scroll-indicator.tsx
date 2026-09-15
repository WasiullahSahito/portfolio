"use client";

import { motion, useReducedMotion } from "motion/react";

export function ScrollIndicator() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted">Scroll</span>
      <div className="h-10 w-px overflow-hidden bg-white/10">
        <motion.div
          className="h-full w-full bg-gradient-to-b from-glow-purple to-transparent"
          animate={shouldReduceMotion ? undefined : { y: ["-100%", "100%"] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
