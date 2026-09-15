"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { siteConfig } from "@/lib/site-config";
import { LoadingProgress } from "./loading-progress";

export function PortfolioLoader({
  progress,
  onExitComplete,
}: {
  progress: number;
  onExitComplete: () => void;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const hasExited = useRef(false);
  const onExitCompleteRef = useRef(onExitComplete);

  useEffect(() => {
    onExitCompleteRef.current = onExitComplete;
  }, [onExitComplete]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(markRef.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" })
        .fromTo(
          nameRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.2"
        )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
          "-=0.35"
        )
        .fromTo(
          statusRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
          "-=0.3"
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (progress < 100 || hasExited.current) return;
    hasExited.current = true;

    const ctx = gsap.context(() => {
      gsap.to(rootRef.current, {
        opacity: 0,
        scale: 1.04,
        duration: 0.6,
        delay: 0.2,
        ease: "power2.inOut",
        onComplete: () => {
          document.body.style.overflow = "";
          onExitCompleteRef.current();
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, [progress]);

  return (
    <div
      ref={rootRef}
      role="status"
      aria-label="Loading portfolio"
      className="fixed inset-0 z-200 flex flex-col items-center justify-center bg-background"
    >
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-40" />
      <div className="cinematic-glow pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-15 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div ref={markRef} className="font-mono text-sm tracking-[0.5em] text-glow-purple">
        WS
      </div>

      <div className="mt-8 px-6 text-center">
        <p
          ref={nameRef}
          className="text-3xl font-semibold uppercase tracking-tight text-foreground sm:text-5xl"
        >
          {siteConfig.name}
        </p>
        <p
          ref={titleRef}
          className="mt-3 font-mono text-[11px] uppercase tracking-[0.4em] text-muted-foreground sm:text-xs"
        >
          {siteConfig.role}
        </p>
      </div>

      <div ref={statusRef} className="mt-14 flex flex-col items-center gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
          Initializing Experience
        </p>
        <LoadingProgress progress={progress} />
      </div>
    </div>
  );
}
