export function WebglFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="cinematic-glow absolute inset-0" />
      <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div
        aria-hidden
        className="relative h-72 w-56 rounded-[40%_40%_38%_38%/48%_48%_32%_32%] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent shadow-[0_0_120px_-20px_rgba(168,85,247,0.55)] sm:h-96 sm:w-72"
      >
        <div className="absolute left-1/2 top-[38%] h-2 w-16 -translate-x-1/2 rounded-full bg-glow-purple/70 blur-[1px]" />
      </div>
    </div>
  );
}
