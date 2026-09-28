import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/animations/reveal";

const facts = [
  { label: "Based in", text: siteConfig.location },
  { label: "Since 2022", text: "Freelance web developer." },
  {
    label: "Live work",
    text: "Built REST APIs and backend features for two live taxi platforms for Irish clients, deployed to production on a Linux VPS with PostgreSQL.",
  },
  {
    label: "AI",
    text: "Experienced in building AI-powered features with LLM APIs, OCR, and retrieval-augmented generation (RAG).",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <p className="eyebrow">10 — About</p>

        <div className="mt-10 grid gap-16 lg:grid-cols-[1.25fr_1fr] lg:gap-24">
          <h2 className="display text-[clamp(2.25rem,7.4vw,6.5rem)] text-foreground">
            Software
            <br />
            engineer.
            <br />
            <span className="text-foreground/35">Full stack developer.</span>
          </h2>

          <div>
            <Reveal>
              <p className="text-xl leading-snug tracking-tight text-foreground sm:text-2xl">
                Software Engineer and Full Stack Developer specializing in Laravel and PHP backend
                development, with experience across Node.js, Express.js, React.js, AI/LLM
                integrations, and production deployment.
              </p>
            </Reveal>

            <dl className="mt-12 border-t border-border">
              {facts.map((fact, i) => (
                <Reveal key={fact.label} delay={i * 0.05}>
                  <div className="grid gap-2 border-b border-border py-5 sm:grid-cols-[6.5rem_1fr] sm:gap-6">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent sm:pt-0.5">
                      {fact.label}
                    </dt>
                    <dd className="text-sm leading-relaxed text-muted-foreground">{fact.text}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
