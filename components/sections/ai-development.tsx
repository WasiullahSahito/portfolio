import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { aiHighlights, aiPipeline, aiProviders } from "@/data/ai";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations/reveal";

export function AiDevelopment() {
  return (
    <section id="ai" className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 cinematic-glow opacity-50" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="AI Engineering"
          title="AI integrated into the architecture, not bolted on"
          description="Provider-agnostic model layers and retrieval pipelines, built into production systems — not a chatbot demo."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <ol className="flex flex-col gap-3">
              {aiPipeline.map((stage, i) => (
                <li
                  key={stage.label}
                  className="glass flex items-start gap-4 rounded-lg border border-border px-5 py-4"
                >
                  <span className="mt-0.5 font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{stage.label}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{stage.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <div className="flex flex-col gap-8">
            <Reveal delay={0.1}>
              <div className="rounded-lg border border-border bg-surface/60 p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  Model providers integrated
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {aiProviders.map((provider) => (
                    <Badge key={provider.name}>{provider.name}</Badge>
                  ))}
                </div>
                <ul className="mt-4 flex flex-col gap-2">
                  {aiProviders.map((provider) => (
                    <li key={provider.name} className="text-xs text-muted-foreground">
                      <span className="text-foreground/80">{provider.name}</span> — {provider.role}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.18} className="flex flex-col gap-4">
              {aiHighlights.map((highlight) => (
                <div
                  key={highlight.project}
                  className="rounded-lg border border-border bg-surface/60 p-6"
                >
                  <p className="font-mono text-xs uppercase tracking-widest text-accent">
                    {highlight.project}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {highlight.detail}
                  </p>
                  <Link
                    href={`/projects/${highlight.project === "OnlyMetric" ? "onlymetric" : "szabot"}`}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
                  >
                    View case study
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
