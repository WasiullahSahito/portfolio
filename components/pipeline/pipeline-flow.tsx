"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export function PipelineFlow({
  stages,
  size = "md",
  className,
}: {
  stages: string[];
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  const stageClasses =
    size === "sm"
      ? "px-3 py-2 text-xs"
      : size === "lg"
        ? "px-6 py-4 text-base sm:text-lg"
        : "px-4 py-3 text-sm";

  return (
    <div
      className={cn(
        "flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-0",
        className
      )}
    >
      {stages.map((stage, i) => (
        <div key={stage} className="flex flex-1 items-center gap-2 sm:gap-0">
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "glass relative flex-1 rounded-lg border border-border-strong font-mono uppercase tracking-widest text-foreground",
              stageClasses
            )}
          >
            <span
              className="absolute -top-2 left-3 rounded-full border border-border-strong bg-background px-1.5 font-mono text-[10px] text-accent"
              aria-hidden
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            {stage}
          </motion.div>
          {i < stages.length - 1 ? (
            <span className="flex shrink-0 items-center justify-center px-2 text-accent/70 sm:px-3" aria-hidden>
              <ArrowRight size={16} className="hidden sm:block" />
              <ArrowDown size={16} className="sm:hidden" />
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
