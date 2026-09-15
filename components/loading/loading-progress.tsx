const STEPS = ["LOADING 3D ENVIRONMENT", "LOADING CHARACTER", "LOADING INTERFACE"];

export function LoadingProgress({ progress }: { progress: number }) {
  const stepIndex = Math.min(STEPS.length - 1, Math.floor((progress / 100) * STEPS.length));

  return (
    <div className="flex w-64 flex-col gap-3 sm:w-80">
      <div className="h-px w-full overflow-hidden bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-glow-purple to-glow-pink transition-[width] duration-150 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
        <span>{STEPS[stepIndex]}</span>
        <span>{String(Math.floor(progress)).padStart(3, "0")}%</span>
      </div>
    </div>
  );
}
