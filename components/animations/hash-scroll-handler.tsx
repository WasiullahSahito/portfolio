"use client";

import { useEffect, useRef } from "react";
import { useAnchorScroll } from "@/lib/hooks";

const STABLE_FRAMES_REQUIRED = 4;
const MAX_WAIT_MS = 8000;

/**
 * Scrolls to the section named by the URL hash once the homepage has
 * actually finished laying out — handles arriving at "/#about" etc. from
 * another route. A client-side route transition doesn't swap the new
 * page's DOM in instantly (the previous route's content, and its height,
 * can still be present for a beat), so this polls until the target
 * element exists and the document height has held steady for a few
 * consecutive frames, rather than scrolling once on a fixed timer and
 * risking a target computed against a page that hasn't settled yet.
 */
export function HashScrollHandler() {
  const scrollTo = useAnchorScroll();
  const scrollToRef = useRef(scrollTo);

  useEffect(() => {
    scrollToRef.current = scrollTo;
  }, [scrollTo]);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    let cancelled = false;
    let lastHeight = -1;
    let stableFrames = 0;
    const startedAt = performance.now();

    const tick = () => {
      if (cancelled) return;

      const el = document.querySelector(hash);
      const height = document.documentElement.scrollHeight;
      const heightUnchanged = height === lastHeight;
      lastHeight = height;
      stableFrames = el && heightUnchanged ? stableFrames + 1 : 0;

      if (el && stableFrames >= STABLE_FRAMES_REQUIRED) {
        scrollToRef.current(hash);
        return;
      }

      if (performance.now() - startedAt > MAX_WAIT_MS) {
        if (el) scrollToRef.current(hash);
        return;
      }

      requestAnimationFrame(tick);
    };

    const frame = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
