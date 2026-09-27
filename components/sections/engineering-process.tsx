import { processSteps } from "@/data/process";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/animations/reveal";

export function EngineeringProcess() {
  return (
    <section id="process" className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 cinematic-glow opacity-30" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Engineering Process"
          title="How the work actually gets built"
          description="Not a values slide — five habits that show up in every project below, in the order they happen."
        />

        <ol className="mt-16 grid gap-6 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <Reveal key={step.title} as="li" delay={i * 0.08} className="relative">
              <div className="flex h-full flex-col rounded-lg border border-border bg-surface/60 p-6">
                <div className="flex items-center justify-between">
                  <step.icon className="text-accent" size={20} />
                  <span className="font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-medium text-foreground">{step.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
                <p className="mt-4 border-t border-border pt-3 font-mono text-[10px] leading-relaxed text-accent/80">
                  {step.evidence}
                </p>
              </div>
              {i < processSteps.length - 1 ? (
                <span
                  className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-border-strong lg:block"
                  aria-hidden
                />
              ) : null}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
