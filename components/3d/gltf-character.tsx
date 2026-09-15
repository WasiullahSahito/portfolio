"use client";

import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations, Float } from "@react-three/drei";
import * as THREE from "three";

type PointerRef = React.MutableRefObject<{ x: number; y: number }>;

/**
 * Drives a real .glb dropped at public/models/developer-character.glb.
 * Plays a clip named "Idle" (or the first available clip) and applies a
 * generic full-body cursor/scroll turn, since we can't assume the rig
 * exposes named head/eye bones ahead of time.
 */
export function GltfCharacter({
  url,
  pointer,
  scrollProgress,
}: {
  url: string;
  pointer: PointerRef;
  scrollProgress: React.MutableRefObject<number>;
}) {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const first = Object.keys(actions)[0];
    const idle = actions.Idle ?? (first ? actions[first] : undefined);
    idle?.reset().fadeIn(0.4).play();
    return () => {
      idle?.fadeOut(0.4);
    };
  }, [actions]);

  useFrame((_, delta) => {
    if (!group.current) return;
    const targetY = pointer.current.x * 0.3 + scrollProgress.current * 0.35;
    const targetX = -pointer.current.y * 0.12;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetY, 5, delta);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetX, 5, delta);
  });

  return (
    <Float speed={1} rotationIntensity={0.08} floatIntensity={0.35} floatingRange={[-0.05, 0.05]}>
      <primitive ref={group} object={scene} position={[0, -1.4, 0]} />
    </Float>
  );
}
