import { homeDiagrams } from "@/data/architecture";
import { ArchitectureExplorer } from "@/components/architecture/architecture-explorer";

export function ArchitectureLab() {
  return (
    <section id="architecture" className="relative py-28 sm:py-40">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.035]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">05 — Architecture</p>
            <h2 className="display mt-6 text-[clamp(2.5rem,8vw,6.5rem)] text-foreground">
              Architecture
              <br />
              lab
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            The stack from client to infrastructure, and two systems traced end to end: real-time
            trip updates and payments. Select a node for the detail.
          </p>
        </div>

        <div className="mt-16 lg:mt-24">
          <ArchitectureExplorer diagrams={homeDiagrams} />
        </div>
      </div>
    </section>
  );
}
