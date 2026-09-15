"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { ContactShadows, Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { Lighting } from "./lighting";
import { Character } from "./character";

export function CharacterScene({
  quality,
  scrollProgress,
}: {
  quality: "high" | "low";
  scrollProgress: React.MutableRefObject<number>;
}) {
  const pointer = useRef({ x: 0, y: 0 });
  const cameraGroup = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    pointer.current.x = THREE.MathUtils.damp(pointer.current.x, state.pointer.x, 4, delta);
    pointer.current.y = THREE.MathUtils.damp(pointer.current.y, state.pointer.y, 4, delta);

    if (cameraGroup.current) {
      const targetX = state.pointer.x * 0.25;
      const targetY = state.pointer.y * 0.15 - scrollProgress.current * 0.4;
      cameraGroup.current.position.x = THREE.MathUtils.damp(
        cameraGroup.current.position.x,
        targetX,
        4,
        delta
      );
      cameraGroup.current.position.y = THREE.MathUtils.damp(
        cameraGroup.current.position.y,
        targetY,
        4,
        delta
      );
    }
  });

  return (
    <>
      <group ref={cameraGroup}>
        <PerspectiveCamera makeDefault position={[0, 0.25, 6.4]} fov={30} />
      </group>

      <Lighting quality={quality} />

      <Character pointer={pointer} scrollProgress={scrollProgress} quality={quality} />

      {quality === "high" ? (
        <>
          <Float speed={0.8} floatIntensity={1} rotationIntensity={0.5}>
            <mesh position={[3.2, 1.9, -3.6]}>
              <torusGeometry args={[0.16, 0.035, 16, 48]} />
              <meshBasicMaterial color="#a855f7" toneMapped={false} transparent opacity={0.3} />
            </mesh>
          </Float>
          <Float speed={0.6} floatIntensity={0.8} rotationIntensity={0.4}>
            <mesh position={[3.6, -1.4, -3.4]}>
              <icosahedronGeometry args={[0.12, 0]} />
              <meshBasicMaterial color="#ec4899" toneMapped={false} transparent opacity={0.25} />
            </mesh>
          </Float>
          <ContactShadows
            position={[0, -1.55, 0]}
            opacity={0.5}
            scale={7}
            blur={2.4}
            far={2}
            color="#000000"
          />
        </>
      ) : null}
    </>
  );
}
