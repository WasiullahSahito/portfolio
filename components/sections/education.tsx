import { education } from "@/data/education";
import { Reveal } from "@/components/animations/reveal";

export function Education() {
  return (
    <section id="education" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <p className="eyebrow">09 — Education</p>
        <ul className="mt-8 border-t border-border">
          {education.map((entry) => (
            <Reveal as="li" key={entry.degree}>
              <div className="grid gap-2 border-b border-border py-7 sm:grid-cols-[1.4fr_1fr_auto] sm:items-baseline sm:gap-10">
                <h3 className="text-xl font-medium uppercase tracking-tight text-foreground sm:text-2xl">
                  {entry.degree}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {entry.institution}, {entry.location}
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {entry.status}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
