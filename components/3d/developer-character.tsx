"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

type PointerRef = React.MutableRefObject<{ x: number; y: number }>;

/**
 * Original stylized "digital identity" avatar built from primitives —
 * a faceless developer bust with a glowing visor instead of literal eyes.
 * Architecture mirrors what a GLTF-driven character would need (head/eye
 * pivot groups, idle + tracking animation in useFrame) so a real rigged
 * .glb dropped at public/models/developer-character.glb can drive the
 * same rig later without touching the scene around it.
 */
export function DeveloperCharacter({
  pointer,
  scrollProgress,
  quality,
}: {
  pointer: PointerRef;
  scrollProgress: React.MutableRefObject<number>;
  quality: "high" | "low";
}) {
  const bodyGroup = useRef<THREE.Group>(null);
  const headGroup = useRef<THREE.Group>(null);
  const visorGroup = useRef<THREE.Group>(null);
  const torso = useRef<THREE.Mesh>(null);
  const leftEye = useRef<THREE.Mesh>(null);
  const rightEye = useRef<THREE.Mesh>(null);

  const blink = useRef({ next: Infinity, phase: 0 });

  useEffect(() => {
    blink.current.next = 3 + Math.random() * 3;
  }, []);

  const materials = useMemo(
    () => ({
      skin: new THREE.MeshPhysicalMaterial({
        color: "#463d66",
        roughness: 0.4,
        metalness: 0.06,
        clearcoat: 0.35,
        clearcoatRoughness: 0.35,
      }),
      hair: new THREE.MeshStandardMaterial({ color: "#171223", roughness: 0.6 }),
      hoodie: new THREE.MeshStandardMaterial({
        color: "#241f3d",
        roughness: 0.7,
        metalness: 0.05,
      }),
      visor: new THREE.MeshStandardMaterial({
        color: "#0a0814",
        roughness: 0.4,
        metalness: 0.3,
      }),
      eye: new THREE.MeshBasicMaterial({ color: "#8ee9ff", toneMapped: false }),
    }),
    []
  );

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    if (bodyGroup.current) {
      const baseY = quality === "low" ? -0.85 : 0.15;
      const targetY = baseY - scrollProgress.current * 0.5;
      bodyGroup.current.position.y = THREE.MathUtils.damp(
        bodyGroup.current.position.y,
        targetY,
        4,
        delta
      );
      bodyGroup.current.rotation.y = THREE.MathUtils.damp(
        bodyGroup.current.rotation.y,
        scrollProgress.current * 0.35,
        4,
        delta
      );
    }

    if (headGroup.current) {
      const targetY = pointer.current.x * 0.32;
      const targetX = -pointer.current.y * 0.18 + Math.sin(t * 0.6) * 0.015;
      headGroup.current.rotation.y = THREE.MathUtils.damp(
        headGroup.current.rotation.y,
        targetY,
        5,
        delta
      );
      headGroup.current.rotation.x = THREE.MathUtils.damp(
        headGroup.current.rotation.x,
        targetX,
        5,
        delta
      );
    }

    if (visorGroup.current) {
      const targetX = pointer.current.x * 0.045;
      const targetY = -pointer.current.y * 0.03;
      visorGroup.current.position.x = THREE.MathUtils.damp(
        visorGroup.current.position.x,
        targetX,
        6,
        delta
      );
      visorGroup.current.position.y = THREE.MathUtils.damp(
        visorGroup.current.position.y,
        targetY,
        6,
        delta
      );
    }

    if (torso.current) {
      const breathe = 1 + Math.sin(t * 1.1) * 0.012;
      torso.current.scale.set(1, breathe, 1);
    }

    // Occasional blink: quickly flattens the eyes on the vertical axis.
    const b = blink.current;
    if (t > b.next) {
      b.phase += delta * 10;
      const close = Math.sin(Math.min(b.phase, Math.PI));
      const scaleY = Math.max(0.05, 1 - close);
      if (leftEye.current) leftEye.current.scale.y = scaleY;
      if (rightEye.current) rightEye.current.scale.y = scaleY;
      if (b.phase >= Math.PI) {
        b.phase = 0;
        b.next = t + 2.5 + Math.random() * 4;
      }
    }
  });

  return (
    <Float
      speed={1.1}
      rotationIntensity={quality === "high" ? 0.12 : 0.05}
      floatIntensity={0.4}
      floatingRange={[-0.05, 0.05]}
    >
      <group
        ref={bodyGroup}
        position={[0, quality === "low" ? -0.85 : 0.15, 0]}
        scale={quality === "low" ? 1.25 : 1.35}
      >
        {/* Hoodie / torso */}
        <mesh ref={torso} position={[0, -0.95, 0]} material={materials.hoodie} castShadow>
          <capsuleGeometry args={[0.62, 1.05, 8, 24]} />
        </mesh>
        <mesh position={[0, -0.32, 0]} material={materials.hoodie}>
          <torusGeometry args={[0.42, 0.09, 12, 32]} />
        </mesh>

        {/* Head + visor pivot */}
        <group ref={headGroup} position={[0, 0.32, 0]}>
          <mesh material={materials.skin} castShadow>
            <sphereGeometry args={[0.46, 48, 48]} />
          </mesh>

          {/* Hair / hood cap */}
          <mesh
            position={[0, 0.14, -0.02]}
            material={materials.hair}
            scale={[1.05, 0.62, 1.05]}
          >
            <sphereGeometry args={[0.47, 40, 40, 0, Math.PI * 2, 0, Math.PI * 0.62]} />
          </mesh>

          {/* Visor strip + glowing eyes */}
          <group ref={visorGroup} position={[0, -0.02, 0.4]}>
            <mesh material={materials.visor}>
              <boxGeometry args={[0.44, 0.09, 0.06]} />
            </mesh>
            <mesh ref={leftEye} position={[-0.14, 0, 0.02]} material={materials.eye}>
              <sphereGeometry args={[0.035, 16, 16]} />
            </mesh>
            <mesh ref={rightEye} position={[0.14, 0, 0.02]} material={materials.eye}>
              <sphereGeometry args={[0.035, 16, 16]} />
            </mesh>
          </group>
        </group>
      </group>
    </Float>
  );
}
