"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { siteConfig } from "@/lib/site-config";
import { useAppReady } from "@/components/loading/loading-provider";
import { useAnchorScroll } from "@/lib/hooks";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { ProofStrip } from "./proof-strip";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const word: Variants = {
  hidden: { opacity: 0, y: "70%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const headlineWords = siteConfig.heroHeadline.split(" ");

export function HeroText() {
  const appReady = useAppReady();
  const shouldReduceMotion = useReducedMotion();
  const scrollTo = useAnchorScroll();
  const animate = appReady || shouldReduceMotion ? "visible" : "hidden";

  return (
    <motion.div
      initial="hidden"
      animate={animate}
      variants={container}
      className="pointer-events-none relative z-10 mx-auto flex h-full min-h-svh w-full max-w-7xl flex-col justify-center gap-10 px-6 pb-24 pt-32 sm:px-10 lg:px-24 lg:pb-28"
    >
      <motion.div variants={item} className="flex items-center gap-3">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
          {siteConfig.name} — {siteConfig.role}
        </p>
      </motion.div>

      <div className="max-w-4xl">
        <h1 className="text-5xl font-semibold leading-[1.03] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
          {headlineWords.map((w, i) => (
            <span key={i} className="mr-[0.28em] inline-block overflow-hidden pb-1 align-bottom">
              <motion.span variants={word} className="inline-block">
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {siteConfig.heroSupport}
        </motion.p>
      </div>

      <motion.div variants={item} className="pointer-events-auto flex flex-wrap items-center gap-4">
        <MagneticButton>
          <Link
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#projects");
            }}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-white"
          >
            Explore Projects
            <ArrowRight size={18} />
          </Link>
        </MagneticButton>
        <MagneticButton>
          <Link
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#contact");
            }}
            className="inline-flex h-12 items-center gap-2 rounded-full border border-border-strong px-6 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Start a Project
          </Link>
        </MagneticButton>
      </motion.div>

      <motion.div variants={item} className="flex flex-col gap-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {siteConfig.availability}
        </p>
        <ProofStrip />
      </motion.div>
    </motion.div>
  );
}
