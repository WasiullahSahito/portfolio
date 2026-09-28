import { capabilities } from "@/data/capabilities";
import { ScrollWords } from "@/components/animations/scroll-words";
import { Reveal } from "@/components/animations/reveal";

export function Intro() {
  return (
    <section id="intro" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <p className="eyebrow">02 — Introduction</p>

        <ScrollWords
          text="I build software from the system level up."
          className="mt-10 max-w-5xl text-[clamp(2.25rem,6.4vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-foreground"
        />

        <Reveal className="mt-8">
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Backend first, full stack throughout — from REST APIs and databases to React
            interfaces and production deployment.
          </p>
        </Reveal>

        <ul className="mt-20 grid border-t border-border sm:grid-cols-2 sm:gap-x-16">
          {capabilities.map((capability, i) => (
            <Reveal as="li" key={capability.title} delay={0.02}>
              <div className="group grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-border py-6">
                <span className="pt-1 font-mono text-xs text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-medium tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-xl">
                    {capability.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {capability.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
