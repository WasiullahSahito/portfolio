"use client";

import type { ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import { usePrefersReducedMotion } from "@/lib/hooks";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.1, wheelMultiplier: 1 }}>
      {children}
    </ReactLenis>
  );
}
