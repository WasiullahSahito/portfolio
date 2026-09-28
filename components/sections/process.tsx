"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { processSteps } from "@/data/process";
import { cn } from "@/lib/utils";

export function Process() {
  const [open, setOpen] = useState(0);

  return (
    <section id="process" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <p className="eyebrow">04 — Engineering</p>
        <h2 className="display mt-6 text-[clamp(2.5rem,8vw,6.5rem)] text-foreground">
          How I
          <br />
          build
        </h2>

        <ul className="mt-16 border-t border-border sm:mt-24">
          {processSteps.map((step, i) => {
            const isOpen = open === i;
            return (
              <li key={step.title} className="border-b border-border">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`process-panel-${i}`}
                    id={`process-trigger-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="group flex w-full items-baseline gap-5 py-6 text-left sm:gap-10 sm:py-8"
                  >
                    <span
                      className={cn(
                        "font-mono text-xs tracking-[0.3em] transition-colors sm:w-10",
                        isOpen ? "text-accent" : "text-muted"
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "flex-1 text-[clamp(1.75rem,5vw,3.75rem)] font-semibold uppercase leading-none tracking-[-0.04em] transition-colors duration-300",
                        isOpen ? "text-foreground" : "text-foreground/40 group-hover:text-foreground/80"
                      )}
                    >
                      {step.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "font-mono text-lg text-muted-foreground transition-transform duration-300",
                        isOpen && "rotate-45 text-accent"
                      )}
                    >
                      +
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`process-panel-${i}`}
                      role="region"
                      aria-labelledby={`process-trigger-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-5 pb-9 sm:grid-cols-[2.5rem_1fr_1fr] sm:gap-10">
                        <span className="hidden sm:block" />
                        <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
                          {step.description}
                        </p>
                        <p className="font-mono text-[11px] leading-relaxed tracking-wide text-muted sm:text-right">
                          {step.evidence}
                        </p>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

      </div>
    </section>
  );
}
