"use client";

import { motion, useReducedMotion } from "motion/react";
import { useAppReady } from "@/components/loading/loading-provider";

// The hero copy is now a single left-aligned column, so the entire left
// ~60% of the viewport is a no-go zone top to bottom. Every badge lives on
// the right, over the 3D scene, where translucent pills read fine against
// architecture panels instead of bleeding through text letter-gaps.
const badges = [
  { label: "Laravel", className: "right-[6%] top-[8%]" },
  { label: "React", className: "right-[16%] top-[20%] hidden sm:block" },
  { label: "Node.js", className: "right-[4%] top-[34%]" },
  { label: "PostgreSQL", className: "right-[18%] top-[48%] hidden sm:block" },
  { label: "Python", className: "right-[6%] top-[62%] hidden lg:block" },
  { label: "AI Models", className: "right-[3%] top-[80%] hidden lg:block" },
];

export function FloatingTechBadges() {
  const appReady = useAppReady();
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden>
      {badges.map((badge, i) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, y: 16 }}
          animate={
            appReady
              ? { opacity: 1, y: [0, -10, 0] }
              : { opacity: 0, y: 16 }
          }
          transition={
            appReady
              ? {
                  opacity: { duration: 0.7, delay: 0.6 + i * 0.08 },
                  y: {
                    duration: 5 + i * 0.6,
                    delay: 0.6 + i * 0.08,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }
              : { duration: 0.3 }
          }
          className={`glass absolute rounded-full border border-border-strong px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/80 ${badge.className}`}
        >
          {badge.label}
        </motion.div>
      ))}
    </div>
  );
}
