"use client";

import { Suspense } from "react";
import { useAssetExists } from "@/lib/hooks";
import { WebglErrorBoundary } from "./webgl-error-boundary";
import { DeveloperCharacter } from "./developer-character";
import { GltfCharacter } from "./gltf-character";

const MODEL_URL = "/models/developer-character.glb";

type PointerRef = React.MutableRefObject<{ x: number; y: number }>;

export function Character(props: {
  pointer: PointerRef;
  scrollProgress: React.MutableRefObject<number>;
  quality: "high" | "low";
}) {
  const modelExists = useAssetExists(MODEL_URL);

  if (modelExists) {
    const fallback = <DeveloperCharacter {...props} />;
    return (
      <WebglErrorBoundary fallback={fallback}>
        <Suspense fallback={fallback}>
          <GltfCharacter
            url={MODEL_URL}
            pointer={props.pointer}
            scrollProgress={props.scrollProgress}
          />
        </Suspense>
      </WebglErrorBoundary>
    );
  }

  return <DeveloperCharacter {...props} />;
}
