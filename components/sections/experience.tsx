"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { experience, formatPeriod } from "@/data/experience";
import { Reveal } from "@/components/animations/reveal";
import { ScrollProgressLine } from "@/components/animations/scroll-progress-line";

export function Experience() {
  const timelineRef = useRef<HTMLOListElement>(null);

  return (
    <section id="experience" className="relative overflow-hidden py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">06 — Experience</p>
            <h2 className="display mt-6 text-[clamp(2.5rem,8vw,6.5rem)] text-foreground">
              Experience
            </h2>
          </div>
          <Link
            href="/experience"
            className="group inline-flex min-h-11 items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:text-accent"
          >
            <span className="border-b border-border-strong pb-1 transition-colors group-hover:border-accent">
              Full experience
            </span>
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <ol
          ref={timelineRef}
          className="relative mt-16 space-y-14 border-l border-border pl-8 sm:mt-24 sm:pl-12"
        >
          <ScrollProgressLine containerRef={timelineRef} />
          {experience.map((entry, i) => (
            <Reveal key={entry.id} as="li" delay={i * 0.05}>
              <span className="absolute -left-1.75 mt-3 h-3 w-3 rounded-full border-2 border-accent bg-background" />
              <div className="grid gap-x-12 gap-y-4 lg:grid-cols-[1fr_1.4fr]">
                <div>
                  <time className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
                    {formatPeriod(entry.start, entry.end)}
                  </time>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    {entry.company}
                  </h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    {entry.role}
                  </p>
                </div>
                <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:pt-9">
                  {entry.summary}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
