"use client";

import { Float, Sparkles } from "@react-three/drei";

export function ContactScene() {
  return (
    <>
      <ambientLight intensity={0.1} color="#2a2440" />
      <pointLight position={[-2, 1, 1]} intensity={2.2} color="#a855f7" distance={8} decay={2} />
      <pointLight position={[2, -1, 1]} intensity={1.6} color="#ec4899" distance={8} decay={2} />

      <Float speed={0.9} floatIntensity={0.8} rotationIntensity={0.5}>
        <mesh position={[-4.4, 2.2, -3.5]}>
          <torusGeometry args={[0.22, 0.05, 16, 48]} />
          <meshBasicMaterial color="#8b5cf6" toneMapped={false} transparent opacity={0.3} />
        </mesh>
      </Float>
      <Float speed={0.7} floatIntensity={0.7} rotationIntensity={0.4}>
        <mesh position={[3.4, -1.2, -4]}>
          <icosahedronGeometry args={[0.16, 0]} />
          <meshBasicMaterial color="#ec4899" toneMapped={false} transparent opacity={0.25} />
        </mesh>
      </Float>
      <Float speed={1.1} floatIntensity={0.6} rotationIntensity={0.4}>
        <mesh position={[2.6, 1.8, -3.8]}>
          <octahedronGeometry args={[0.13, 0]} />
          <meshBasicMaterial color="#5eead4" toneMapped={false} transparent opacity={0.25} />
        </mesh>
      </Float>

      <Sparkles count={30} scale={[8, 5, 4]} size={1} speed={0.2} opacity={0.18} color="#a855f7" />
    </>
  );
}
