"use client";

import dynamic from "next/dynamic";
import { useWebglSupport, usePrefersReducedMotion } from "@/lib/hooks";
import { WebglFallback } from "./webgl-fallback";
import { WebglErrorBoundary } from "./webgl-error-boundary";

const CharacterCanvas = dynamic(
  () => import("./character-canvas").then((mod) => mod.CharacterCanvas),
  { ssr: false, loading: () => <WebglFallback /> }
);

export function CharacterVisual() {
  const webglSupported = useWebglSupport();
  const prefersReducedMotion = usePrefersReducedMotion();

  const shouldRender3D = webglSupported === true && !prefersReducedMotion;

  if (webglSupported === null) {
    return <div className="h-full w-full" aria-hidden />;
  }

  if (!shouldRender3D) {
    return <WebglFallback />;
  }

  return (
    <WebglErrorBoundary fallback={<WebglFallback />}>
      <CharacterCanvas />
    </WebglErrorBoundary>
  );
}
