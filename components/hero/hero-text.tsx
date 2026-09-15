"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { siteConfig } from "@/lib/site-config";
import { useAppReady } from "@/components/loading/loading-provider";
import { useAnchorScroll, usePrefersReducedMotion } from "@/lib/hooks";
import { MagneticButton } from "@/components/animations/magnetic-button";

export function HeroText() {
  const appReady = useAppReady();
  const prefersReducedMotion = usePrefersReducedMotion();
  const scrollTo = useAnchorScroll();
  const rootRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!appReady || hasAnimated.current || !rootRef.current) return;
    hasAnimated.current = true;

    const targets = rootRef.current.querySelectorAll("[data-reveal]");

    if (prefersReducedMotion) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 }
      );
    }, rootRef);

    return () => ctx.revert();
  }, [appReady, prefersReducedMotion]);

  return (
    <div
      ref={rootRef}
      className="pointer-events-none relative z-10 flex h-full min-h-svh w-full flex-col justify-between px-6 pb-24 pt-32 sm:px-10 lg:px-24 lg:pb-28"
    >
      <div className="flex flex-1 flex-col items-center justify-start gap-16 pt-2 text-center sm:gap-20 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:pt-0 lg:text-left">
        <div data-reveal className="opacity-0">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-glow-purple">
            Hello! I&apos;m
          </p>
          <h1 className="mt-4 text-5xl font-semibold uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
            Wasiullah
            <br />
            Sahito
          </h1>
        </div>

        <div data-reveal className="opacity-0 lg:text-right">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Available for work
          </p>
          <p className="mt-4 text-3xl font-semibold uppercase leading-[0.95] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Backend &
            <br />
            Full Stack
          </p>
        </div>
      </div>

      <div data-reveal className="flex flex-col items-center gap-6 opacity-0">
        <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-4">
          <MagneticButton>
            <Link
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#projects");
              }}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-glow-purple hover:text-white"
            >
              View Work
              <ArrowRight size={18} />
            </Link>
          </MagneticButton>
          <MagneticButton>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border-strong px-6 text-sm font-medium text-foreground transition-colors hover:border-glow-purple hover:text-glow-purple"
            >
              <SiGithub size={18} />
              GitHub
            </a>
          </MagneticButton>
        </div>
        <p className="font-mono text-xs text-muted-foreground">{siteConfig.location}</p>
      </div>
    </div>
  );
}
