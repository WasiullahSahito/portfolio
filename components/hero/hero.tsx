"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { HeroText } from "./hero-text";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

  return (
    <section ref={sectionRef} id="home" className="relative min-h-svh overflow-hidden">
      <motion.div
        style={{ y: glowY, opacity: glowOpacity }}
        className="pointer-events-none absolute inset-0 cinematic-glow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06] mask-[linear-gradient(to_bottom,black_40%,transparent)]"
        aria-hidden="true"
      />
      <HeroText />
    </section>
  );
}
