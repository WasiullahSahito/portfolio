import { capabilities } from "@/data/capabilities";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/animations/reveal";

export function EngineeringCapabilities() {
  return (
    <section id="capabilities" className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.04]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Engineering Capabilities"
          title="What I actually own end to end"
          description="Not a checklist of buzzwords — each of these maps to a system I've shipped and can point to."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, i) => (
            <Reveal key={capability.title} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-lg border border-border bg-surface/60 p-6 transition-colors hover:border-border-strong">
                <capability.icon className="text-accent" size={22} />
                <h3 className="mt-4 text-lg font-medium text-foreground">
                  {capability.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {capability.description}
                </p>
                <p className="mt-4 border-t border-border pt-3 font-mono text-[11px] leading-relaxed text-accent/80">
                  {capability.evidence}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
