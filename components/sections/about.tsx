import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/animations/reveal";
import { Bot, Database, Layers, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    title: "Full-stack by default",
    description:
      "I move across the stack without friction — Laravel and Node.js on the backend, React and Next.js on the frontend, connected by REST APIs I design myself.",
  },
  {
    icon: Database,
    title: "Backend-first thinking",
    description:
      "My strongest work sits in the backend: relational data models, authentication, role-based access control, and APIs built to hold up under real usage.",
  },
  {
    icon: ShieldCheck,
    title: "Built to ship",
    description:
      "I care about applications that actually run in production — validated input, sane error states, and architecture that doesn't collapse when requirements change.",
  },
  {
    icon: Bot,
    title: "AI-assisted, not AI-dependent",
    description:
      "I use tools like Copilot and the OpenAI API to move faster day to day, but the architecture, the tradeoffs, and the debugging are still mine to own.",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.04]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="A backend-first software engineer building production systems"
          description="I'm Wasiullah Sahito, a Software Engineer focused on backend and full-stack development. I design and build secure APIs, relational data models, role-based access systems, and real-time application workflows that power SaaS products in production."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.1}>
              <div className="h-full rounded-lg border border-border bg-surface/60 p-6 transition-colors hover:border-border-strong">
                <pillar.icon className="text-accent" size={22} />
                <h3 className="mt-4 text-lg font-medium text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 max-w-3xl">
          <p className="text-base leading-relaxed text-muted-foreground">
            My approach to a new feature starts with the data: what needs to
            be stored, who is allowed to touch it, and how it moves through
            an API before it ever reaches a screen. That discipline comes
            from building SaaS-style systems like fleet management and
            booking platforms — production applications now supporting 500+
            users, where optimization and caching work has cut response
            times by up to 30%.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
