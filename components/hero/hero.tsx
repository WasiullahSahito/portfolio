"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArchitectureVisual } from "./architecture-visual";
import { HeroText } from "./hero-text";
import { ScrollIndicator } from "./scroll-indicator";
import { FloatingTechBadges } from "./floating-tech-badges";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section ref={sectionRef} id="home" className="relative min-h-[100svh] overflow-hidden">
      <motion.div
        style={{ y: glowY, opacity: glowOpacity }}
        className="pointer-events-none absolute inset-0 cinematic-glow"
      />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.07]" />
      <div className="absolute inset-0" aria-hidden="true">
        <ArchitectureVisual />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(6,8,16,0.7) 0%, rgba(6,8,16,0.55) 38%, transparent 62%)",
        }}
        aria-hidden="true"
      />
      <FloatingTechBadges />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/0 via-transparent to-background" />

      <HeroText />
      <ScrollIndicator />
    </section>
  );
}
