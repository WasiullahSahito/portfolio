"use client";

import { motion, useReducedMotion } from "motion/react";

const orbs = [
  { size: 200, color: "#a855f7", top: "8%", left: "6%", duration: 9 },
  { size: 150, color: "#d946a8", top: "62%", left: "84%", duration: 11 },
  { size: 120, color: "#5b9dff", top: "78%", left: "10%", duration: 8 },
];

export function FloatingOrbs() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            background: orb.color,
            opacity: 0.16,
          }}
          animate={{ y: [0, -20, 0], x: [0, 14, 0] }}
          transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
