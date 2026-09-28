"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { useIsTouchDevice, usePrefersReducedMotion } from "@/lib/hooks";

type CursorState = "default" | "link" | "view" | "drag";

/**
 * Elements opt in with `data-cursor="view"` or `data-cursor="drag"`.
 * Links and buttons are detected automatically.
 */
function resolveState(target: HTMLElement | null): CursorState {
  if (!target) return "default";
  const tagged = target.closest<HTMLElement>("[data-cursor]")?.dataset.cursor;
  if (tagged === "view" || tagged === "drag") return tagged;
  if (target.closest("a, button, [role='button'], input, textarea, summary")) return "link";
  return "default";
}

const sizes: Record<CursorState, number> = { default: 14, link: 38, view: 92, drag: 76 };
const labels: Partial<Record<CursorState, string>> = {
  view: "View case study →",
  drag: "Drag",
};

export function CustomCursor() {
  const isTouch = useIsTouchDevice();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [state, setState] = useState<CursorState>("default");
  const [isVisible, setIsVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springConfig = { damping: 30, stiffness: 340, mass: 0.4 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    if (isTouch || prefersReducedMotion) return;

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setIsVisible(true);
      setState(resolveState(e.target as HTMLElement | null));
    };
    const handleLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [isTouch, prefersReducedMotion, x, y]);

  if (isTouch || prefersReducedMotion || !isVisible) return null;

  const label = labels[state];
  const labelled = Boolean(label);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-100 hidden will-change-transform md:block"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        animate={{ width: sizes[state], height: sizes[state] }}
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
        className={
          labelled
            ? "flex items-center justify-center rounded-full bg-foreground text-background"
            : "rounded-full bg-white mix-blend-difference"
        }
      >
        <AnimatePresence>
          {label ? (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="px-3 text-center font-mono text-[10px] font-semibold uppercase leading-tight tracking-[0.15em]"
            >
              {label}
            </motion.span>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
