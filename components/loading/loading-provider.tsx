"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useProgress } from "@react-three/drei";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { PortfolioLoader } from "./portfolio-loader";

const MIN_DURATION_MS = 1700;

const AppReadyContext = createContext(false);

export function useAppReady() {
  return useContext(AppReadyContext);
}

export function LoadingProvider({ children }: { children: ReactNode }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [showLoader, setShowLoader] = useState(true);
  const [appReady, setAppReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const startRef = useRef<number | null>(null);
  const { progress: realProgress, active } = useProgress();

  useEffect(() => {
    let frame: number;
    const tick = (time: number) => {
      if (prefersReducedMotion) {
        setProgress(100);
        setAppReady(true);
        return;
      }

      if (startRef.current === null) startRef.current = time;
      const elapsed = time - startRef.current;
      const timeProgress = Math.min(100, (elapsed / MIN_DURATION_MS) * 100);
      const effectiveReal = active ? realProgress : 100;
      const next = Math.min(timeProgress, effectiveReal);
      setProgress(next);

      if (next >= 100) {
        setAppReady(true);
        return;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [prefersReducedMotion, active, realProgress]);

  const handleExitComplete = useCallback(() => setShowLoader(false), []);

  return (
    <AppReadyContext.Provider value={appReady}>
      {showLoader && !prefersReducedMotion ? (
        <PortfolioLoader progress={progress} onExitComplete={handleExitComplete} />
      ) : null}
      {children}
    </AppReadyContext.Provider>
  );
}
