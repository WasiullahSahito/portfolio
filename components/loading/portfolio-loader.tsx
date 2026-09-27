"use client";

import { useEffect } from "react";
import { motion, type Variants } from "motion/react";
import { siteConfig } from "@/lib/site-config";
import { LoadingProgress } from "./loading-progress";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export function PortfolioLoader({
  progress,
  onExitComplete,
}: {
  progress: number;
  onExitComplete: () => void;
}) {
  const isDone = progress >= 100;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      role="status"
      aria-label="Loading portfolio"
      animate={isDone ? { opacity: 0, scale: 1.04 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: isDone ? 0.2 : 0, ease: [0.4, 0, 0.2, 1] }}
      onAnimationComplete={() => {
        if (isDone) onExitComplete();
      }}
      className="fixed inset-0 z-200 flex flex-col items-center justify-center bg-background"
    >
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-40" />
      <div className="cinematic-glow pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-15 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <motion.div initial="hidden" animate="visible" variants={container} className="contents">
        <motion.div variants={item} className="font-mono text-sm tracking-[0.5em] text-glow-purple">
          WS
        </motion.div>

        <motion.div variants={item} className="mt-8 px-6 text-center">
          <p className="text-3xl font-semibold uppercase tracking-tight text-foreground sm:text-5xl">
            {siteConfig.name}
          </p>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.4em] text-muted-foreground sm:text-xs">
            {siteConfig.role}
          </p>
        </motion.div>

        <motion.div variants={item} className="mt-14 flex flex-col items-center gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
            Initializing Experience
          </p>
          <LoadingProgress progress={progress} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
