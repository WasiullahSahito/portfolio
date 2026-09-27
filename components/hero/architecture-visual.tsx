"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { usePrefersReducedMotion } from "@/lib/hooks";

const LAYERS = [
  { color: "#a855f7" },
  { color: "#9333ea" },
  { color: "#7c6cf0" },
  { color: "#6d5ef0" },
  { color: "#5b9dff" },
];

const NODES = [
  { color: "#ff6b6b", top: "4%", left: "-16%" },
  { color: "#61dafb", top: "18%", left: "94%" },
  { color: "#8bc34a", top: "40%", left: "-12%" },
  { color: "#ffd54f", top: "58%", left: "98%" },
  { color: "#4f9ddb", top: "78%", left: "-10%" },
  { color: "#c084fc", top: "92%", left: "90%" },
];

function Connector({ color, delay }: { color: string; delay: number }) {
  return (
    <div className="relative mx-auto h-7 w-px overflow-hidden bg-white/10">
      <motion.div
        className="absolute inset-x-0 h-2 rounded-full"
        style={{ background: color, boxShadow: `0 0 8px ${color}` }}
        animate={{ top: ["-15%", "115%"] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay }}
      />
    </div>
  );
}

/**
 * Same visual language as the old R3F scene (stacked glass layers, traveling
 * data-stream pulses, floating tech nodes) rebuilt in CSS + Framer Motion —
 * no WebGL context, no per-frame render loop, ~300KB lighter shipped JS.
 */
export function ArchitectureVisual() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 120, damping: 22 });
  const springY = useSpring(rotateY, { stiffness: 120, damping: 22 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMove = (e: PointerEvent) => {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        rotateY.set(x * 10);
        rotateX.set(-y * 8);
      });
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handleMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [prefersReducedMotion, rotateX, rotateY]);

  return (
    <div className="pointer-events-none absolute inset-0 hidden items-center justify-end pr-[4%] md:flex">
      <motion.div
        style={{
          rotateX: prefersReducedMotion ? 0 : springX,
          rotateY: prefersReducedMotion ? 0 : springY,
          transformPerspective: 1000,
        }}
        className="relative w-[260px] lg:w-[310px]"
      >
        {LAYERS.map((layer, i) => (
          <div key={i}>
            <motion.div
              animate={
                prefersReducedMotion ? undefined : { y: [0, i % 2 === 0 ? -6 : 6, 0] }
              }
              transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
              className="glass overflow-hidden rounded-xl border border-white/10"
              style={{ height: 52, boxShadow: `inset 0 0 0 1px ${layer.color}22` }}
            >
              <div
                className="h-full w-full opacity-40"
                style={{ background: `linear-gradient(120deg, ${layer.color}40, transparent)` }}
              />
            </motion.div>
            {i < LAYERS.length - 1 ? <Connector color={layer.color} delay={i * 0.3} /> : null}
          </div>
        ))}

        {!prefersReducedMotion
          ? NODES.map((node, i) => (
              <motion.div
                key={i}
                className="absolute h-2.5 w-2.5 rounded-full"
                style={{
                  top: node.top,
                  left: node.left,
                  background: node.color,
                  boxShadow: `0 0 10px ${node.color}`,
                }}
                animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
                transition={{
                  duration: 5 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            ))
          : null}
      </motion.div>
    </div>
  );
}
