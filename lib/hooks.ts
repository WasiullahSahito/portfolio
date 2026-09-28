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

/** Returns the id of the section crossing the reading line, or "" when none does. */
export function useActiveSection(ids: string[], routeKey?: string) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    let frame = 0;

    // Sections are looked up on every frame rather than held by reference,
    // because React can replace those nodes after this hook first runs.
    const update = () => {
      frame = 0;
      const readingLine = window.innerHeight * 0.4;
      let current = "";
      for (const id of ids) {
        const rect = document.getElementById(id)?.getBoundingClientRect();
        if (rect && rect.top <= readingLine && rect.bottom > readingLine) {
          current = id;
          break;
        }
      }
      setActiveId(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [ids, routeKey]);

  return activeId;
}
