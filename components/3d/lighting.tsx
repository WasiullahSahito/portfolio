export function Lighting({ quality }: { quality: "high" | "low" }) {
  return (
    <>
      <ambientLight intensity={0.22} color="#332c52" />
      <directionalLight
        position={[1.4, 2.4, 3]}
        intensity={1.6}
        color="#f5eefc"
        castShadow={quality === "high"}
        shadow-mapSize={[1024, 1024]}
      />
      {/* purple rim light — separates the character silhouette from the dark background */}
      <pointLight position={[-2.2, 1.3, -1.8]} intensity={11} color="#a855f7" distance={9} decay={2} />
      {/* pink accent light — secondary rim from the opposite side */}
      <pointLight position={[2.4, -0.2, -1.8]} intensity={3.2} color="#ec4899" distance={8} decay={2} />
      {/* faint cool fill so the shadow side never goes fully black */}
      <pointLight position={[0, -1, 2.4]} intensity={1.6} color="#5865e0" distance={6} decay={2} />
    </>
  );
}
