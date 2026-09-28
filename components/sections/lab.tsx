import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { labArtifacts } from "@/data/lab";
import { DragScroll } from "@/components/animations/drag-scroll";

export function Lab() {
  return (
    <section id="lab" className="relative overflow-hidden py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">08 — AI / Lab</p>
            <h2 className="display mt-6 text-[clamp(2.5rem,8vw,6.5rem)] text-foreground">Lab</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            The documented AI work: invoice OCR, a multi-provider LLM layer, and retrieval-augmented
            generation, plus the tooling around it.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl pl-6 sm:mt-20 sm:pl-10">
        <DragScroll label="Lab artifacts" className="pr-6 sm:pr-10">
          {labArtifacts.map((artifact) => (
            <article
              key={artifact.id}
              className="group relative flex min-h-96 w-[78vw] max-w-sm shrink-0 snap-start flex-col justify-between gap-8 rounded-xl border border-border-strong bg-background-elevated/70 p-7 transition-colors duration-300 hover:border-accent/60 focus-within:border-accent/60"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                    {artifact.tag}
                  </span>
                  {artifact.project ? (
                    <Link
                      href={`/work/${artifact.project}`}
                      aria-label={`${artifact.title} — from the ${artifact.projectLabel} case study`}
                      className="text-muted-foreground transition-colors hover:text-accent after:absolute after:inset-0 after:content-['']"
                    >
                      <ArrowUpRight size={18} />
                    </Link>
                  ) : null}
                </div>
                <h3 className="mt-8 text-2xl font-semibold leading-tight tracking-tight text-foreground">
                  {artifact.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {artifact.summary}
                </p>
              </div>

              <div>
                <ol className="flex flex-col gap-1.5 border-t border-border pt-5 opacity-60 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                  {artifact.stages.map((stage, i) => (
                    <li
                      key={stage}
                      className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>
                      {stage}
                    </li>
                  ))}
                </ol>
                {artifact.projectLabel ? (
                  <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    From {artifact.projectLabel}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </DragScroll>
      </div>
    </section>
  );
}
