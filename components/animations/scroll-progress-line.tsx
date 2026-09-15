"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/lib/hooks";

export function ScrollProgressLine({ targetSelector }: { targetSelector: string }) {
  const lineRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !lineRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const target = document.querySelector(targetSelector);
    if (!target) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: target,
            start: "top 75%",
            end: "bottom 75%",
            scrub: 0.6,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [targetSelector, prefersReducedMotion]);

  return (
    <div
      ref={lineRef}
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 h-full w-px origin-top bg-accent"
      style={prefersReducedMotion ? undefined : { transform: "scaleY(0)" }}
    />
  );
}
