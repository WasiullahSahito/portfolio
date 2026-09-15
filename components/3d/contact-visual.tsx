"use client";

import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useInView, usePrefersReducedMotion, useWebglSupport } from "@/lib/hooks";
import { WebglErrorBoundary } from "./webgl-error-boundary";

const ContactScene = dynamic(() => import("./contact-scene").then((mod) => mod.ContactScene), {
  ssr: false,
});

export function ContactVisual() {
  const { ref, inView } = useInView<HTMLDivElement>("250px");
  const webglSupported = useWebglSupport();
  const prefersReducedMotion = usePrefersReducedMotion();

  const shouldRender = inView && webglSupported === true && !prefersReducedMotion;

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0" aria-hidden>
      {shouldRender ? (
        <WebglErrorBoundary fallback={null}>
          <Canvas
            dpr={[1, 1.4]}
            gl={{ antialias: true, alpha: true }}
            camera={{ position: [0, 0, 5], fov: 35 }}
          >
            <Suspense fallback={null}>
              <ContactScene />
            </Suspense>
          </Canvas>
        </WebglErrorBoundary>
      ) : null}
    </div>
  );
}
