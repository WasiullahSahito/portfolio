import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

function Frame({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-border-strong bg-background-elevated">
      <div className="cinematic-glow absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="bg-grid absolute inset-0 opacity-[0.07]" aria-hidden="true" />
      <div className="relative flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="ml-3 truncate font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          {label}
        </span>
      </div>
      <div className="relative flex flex-1 flex-col justify-center gap-8 p-4 sm:p-6 lg:gap-10 lg:p-8">
        {children}
      </div>
    </div>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">{title}</p>
      {children}
    </div>
  );
}

function Chain({ steps, highlight }: { steps: string[]; highlight?: string }) {
  return (
    <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-2">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-1.5">
          <span
            className={cn(
              "rounded-md border px-2.5 py-2 font-mono text-[9px] uppercase tracking-wider sm:text-[10px] lg:text-[11px]",
              step === highlight
                ? "border-accent/60 bg-accent/10 text-accent"
                : "border-border-strong bg-white/3 text-muted-foreground"
            )}
          >
            {step}
          </span>
          {i < steps.length - 1 ? (
            <span className="font-mono text-[10px] text-muted" aria-hidden="true">
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function Chips({ items, label }: { items: string[]; label?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {label ? (
        <span className="mr-1 font-mono text-[9px] uppercase tracking-widest text-muted">
          {label}
        </span>
      ) : null}
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-border-strong px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground sm:text-[10px]"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function OnlyMetricVisual() {
  return (
    <Frame label="onlymetric / operations">
      <Block title="Operations">
        <Chain
          steps={["Purchasing", "Recipe costing", "Inventory", "POS", "Kitchen display", "Staffing"]}
        />
      </Block>
      <Block title="AI invoice pipeline">
        <Chain steps={["AI invoice OCR", "GST validation", "LLM provider layer"]} highlight="LLM provider layer" />
      </Block>
      <Chips
        label="5 providers"
        items={["OpenAI", "Anthropic Claude", "Google Gemini", "Ollama", "Z.ai"]}
      />
    </Frame>
  );
}

function SzabotVisual() {
  return (
    <Frame label="szabot / pipeline">
      <Block title="Query pipeline">
        <Chain
          steps={[
            "Excel / PDF timetable",
            "Python pipeline",
            "Parsing",
            "Intent detection",
            "3 categories",
            "Gemini API + RAG",
            "Real-time answer",
          ]}
          highlight="Gemini API + RAG"
        />
      </Block>
      <Block title="Admin">
        <Chain steps={["Admin dashboard", "Timetable upload"]} />
      </Block>
    </Frame>
  );
}

export function ProjectVisual({ project, className }: { project: Project; className?: string }) {
  return (
    <div className={cn("flex lg:min-h-[24rem]", className)} aria-hidden="true">
      {project.visual === "szabot" ? <SzabotVisual /> : <OnlyMetricVisual />}
    </div>
  );
}
