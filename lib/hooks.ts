"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { useLenis } from "lenis/react";

export function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (callback: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", callback);
      return () => mql.removeEventListener("change", callback);
    },
    [query]
  );
  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);
  const getServerSnapshot = useCallback(() => false, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function usePrefersReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

export function useIsTouchDevice() {
  return useMediaQuery("(pointer: coarse)");
}

export function useAnchorScroll() {
  const lenis = useLenis();

  return useCallback(
    (hash: string) => {
      const el = document.querySelector(hash);
      if (!el) return;
      if (lenis) {
        // A client-side route transition can swap in taller content
        // without firing a resize event, so Lenis's cached scroll limit
        // may still reflect the previous (shorter) page — recalculate
        // before scrolling or the target can get clamped short.
        lenis.resize();
        lenis.scrollTo(el as HTMLElement, { offset: -72 });
      } else {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [lenis]
  );
}

export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
