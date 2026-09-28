"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { metrics, type Metric } from "@/data/metrics";

function CountUp({ metric }: { metric: Metric }) {
  const { value, prefix, suffix } = metric;
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = usePrefersReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || shouldReduceMotion) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, shouldReduceMotion, value]);

  return (
    <span ref={ref} aria-label={`${prefix ?? ""}${value}${suffix ?? ""}`}>
      <span aria-hidden="true">
        {prefix}
        {shouldReduceMotion ? value : display}
        {suffix}
      </span>
    </span>
  );
}

export function Metrics() {
  return (
    <section id="metrics" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <p className="eyebrow">In numbers</p>
        <ul className="mt-12 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <li
              key={metric.label}
              className="flex flex-col gap-4 border-t border-border-strong pt-6"
            >
              <p className="text-[clamp(3rem,6vw,5rem)] font-semibold leading-none tracking-tighter text-foreground">
                <CountUp metric={metric} />
              </p>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/90">
                  {metric.label}
                </p>
                <p className="mt-2 font-mono text-[11px] tracking-wide text-muted">
                  {metric.source}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
