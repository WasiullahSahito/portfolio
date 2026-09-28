"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { FlowDiagram, FlowNode } from "@/data/architecture";
import { cn } from "@/lib/utils";

const columns: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
};

/** Interactive layered diagram: hover, focus, or tap a node to read what it does. */
export function ArchitectureExplorer({ diagrams }: { diagrams: FlowDiagram[] }) {
  const uid = useId();
  const [tabId, setTabId] = useState(diagrams[0].id);
  const [picked, setPicked] = useState<Record<string, string>>({});

  const diagram = diagrams.find((d) => d.id === tabId) ?? diagrams[0];
  const nodes = diagram.layers.flatMap((layer) => layer.nodes);
  const active: FlowNode = nodes.find((n) => n.id === picked[diagram.id]) ?? nodes[0];

  return (
    <div>
      {diagrams.length > 1 ? (
        <div role="tablist" aria-label="Diagrams" className="mb-10 flex flex-wrap gap-x-8 gap-y-3">
          {diagrams.map((d) => {
            const selected = d.id === diagram.id;
            return (
              <button
                key={d.id}
                type="button"
                role="tab"
                id={`${uid}-tab-${d.id}`}
                aria-selected={selected}
                aria-controls={`${uid}-panel`}
                onClick={() => setTabId(d.id)}
                className={cn(
                  "min-h-11 border-b pb-1 font-mono text-xs uppercase tracking-[0.25em] transition-colors",
                  selected
                    ? "border-accent text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {d.label}
              </button>
            );
          })}
        </div>
      ) : null}

      <div
        role="tabpanel"
        id={`${uid}-panel`}
        aria-labelledby={diagrams.length > 1 ? `${uid}-tab-${diagram.id}` : undefined}
        className="grid gap-12 lg:grid-cols-2 lg:gap-20"
      >
        <div className="mx-auto flex w-full max-w-md flex-col items-stretch lg:mx-0">
          {diagram.layers.map((layer, layerIndex) => (
            <div key={layer.id} className="flex flex-col items-stretch">
              <div className={cn("grid gap-3", columns[layer.nodes.length] ?? "grid-cols-2")}>
                {layer.nodes.map((node) => {
                  const isActive = node.id === active.id;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setPicked((p) => ({ ...p, [diagram.id]: node.id }))}
                      onMouseEnter={() => setPicked((p) => ({ ...p, [diagram.id]: node.id }))}
                      onFocus={() => setPicked((p) => ({ ...p, [diagram.id]: node.id }))}
                      className={cn(
                        "relative flex min-h-14 flex-col items-start justify-center gap-1 rounded-lg border px-4 py-3 text-left transition-colors duration-300 sm:px-5",
                        isActive
                          ? "border-accent/70 bg-accent/10"
                          : "border-border-strong bg-background-elevated/60 hover:border-foreground/30"
                      )}
                    >
                      <span
                        className={cn(
                          "font-mono text-[11px] uppercase tracking-[0.2em] sm:text-xs",
                          isActive ? "text-foreground" : "text-foreground/80"
                        )}
                      >
                        {node.label}
                      </span>
                      {node.tech ? (
                        <span className="font-mono text-[10px] tracking-widest text-muted">
                          {node.tech}
                        </span>
                      ) : null}
                    </button>
                  );
                })}
              </div>

              {layerIndex < diagram.layers.length - 1 ? (
                <div
                  aria-hidden="true"
                  className="relative mx-auto h-7 w-px overflow-hidden bg-border-strong"
                >
                  <span
                    className="absolute left-0 h-[45%] w-px bg-linear-to-b from-transparent via-accent to-transparent"
                    style={{
                      animation: `flow-line 2.4s cubic-bezier(0.45, 0, 0.2, 1) ${layerIndex * 0.25}s infinite`,
                    }}
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="lg:sticky lg:top-32 lg:self-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${diagram.id}-${active.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              aria-live="polite"
              className="rounded-xl border border-border-strong bg-background-elevated/70 p-7 sm:p-9"
            >
              {active.tech ? (
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  {active.tech}
                </p>
              ) : null}
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {active.title}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {active.description}
              </p>
              {active.evidence ? (
                <div className="mt-8 border-t border-border pt-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                    In real work
                  </p>
                  <p className="mt-2 font-mono text-xs leading-relaxed tracking-wide text-foreground/80">
                    {active.evidence}
                  </p>
                </div>
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
