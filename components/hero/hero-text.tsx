"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { siteConfig } from "@/lib/site-config";
import { useAppReady } from "@/components/loading/loading-provider";
import { useAnchorScroll } from "@/lib/hooks";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { HeroSystem } from "./hero-system";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const line: Variants = {
  hidden: { y: "105%" },
  visible: { y: "0%", transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

const nameLines = siteConfig.name.split(" ");

export function HeroText() {
  const appReady = useAppReady();
  const shouldReduceMotion = usePrefersReducedMotion();
  const scrollTo = useAnchorScroll();
  const animate = appReady || shouldReduceMotion ? "visible" : "hidden";

  return (
    <motion.div
      initial="hidden"
      animate={animate}
      variants={container}
      className="relative z-10 mx-auto flex min-h-svh w-full max-w-7xl flex-col justify-end gap-12 px-6 pb-16 pt-32 sm:px-10 lg:pb-20"
    >
      <motion.div variants={item} className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-accent" />
        <p className="eyebrow">{siteConfig.role}</p>
      </motion.div>

      <div className="flex items-end justify-between gap-12">
        <h1 className="display min-w-0 text-[clamp(2.5rem,14vw,7rem)] text-foreground lg:text-[clamp(5.5rem,9.5vw,9.5rem)]">
          {nameLines.map((text) => (
            <span key={text} className="block overflow-hidden pb-[0.06em]">
              <motion.span variants={line} className="block">
                {text}
              </motion.span>
            </span>
          ))}
        </h1>
        <HeroSystem />
      </div>

      <div className="grid gap-10 border-t border-border pt-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <motion.p
            variants={item}
            className="max-w-xl text-xl leading-snug tracking-tight text-foreground sm:text-2xl"
          >
            {siteConfig.statement}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <MagneticButton>
              <Link
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("#work");
                }}
                className="group inline-flex h-12 items-center gap-3 rounded-full bg-foreground px-6 font-mono text-xs uppercase tracking-[0.2em] text-background transition-colors hover:bg-accent hover:text-white"
              >
                View selected work
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </MagneticButton>
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
              }}
              className="group inline-flex min-h-11 items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground/90 transition-colors hover:text-accent"
            >
              <span className="border-b border-border-strong pb-1 transition-colors group-hover:border-accent">
                Get in touch
              </span>
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="flex flex-col gap-2 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground lg:items-end lg:text-right"
        >
          <p className="text-foreground/90">{siteConfig.location}</p>
          <p>Laravel · PHP · React</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
