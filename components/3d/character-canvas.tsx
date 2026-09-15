"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { CharacterScene } from "./character-scene";
import { useIsTouchDevice, useMediaQuery } from "@/lib/hooks";

export function CharacterCanvas() {
  const isTouch = useIsTouchDevice();
  const isNarrowViewport = useMediaQuery("(max-width: 1023px)");
  const scrollProgress = useRef(0);
  const quality = isTouch || isNarrowViewport ? "low" : "high";

  useEffect(() => {
    const heroEl = document.getElementById("home");
    if (!heroEl) return;

    const handleScroll = () => {
      const rect = heroEl.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / (rect.height || 1), 0), 1);
      scrollProgress.current = progress;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Canvas
      dpr={isTouch ? [1, 1.25] : [1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      shadows={quality === "high"}
      className="!touch-auto"
    >
      <Suspense fallback={null}>
        <CharacterScene quality={quality} scrollProgress={scrollProgress} />
      </Suspense>
    </Canvas>
  );
}
