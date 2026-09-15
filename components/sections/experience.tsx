import { GraduationCap } from "lucide-react";
import { education, experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/animations/reveal";
import { ScrollProgressLine } from "@/components/animations/scroll-progress-line";

function formatPeriod(start: string, end: string) {
  const format = (value: string) =>
    new Date(`${value}-01`).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  return `${format(start)} — ${format(end)}`;
}

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.04]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Career timeline"
          description="Where I've put full-stack development into practice."
        />

        <ol
          id="experience-timeline"
          className="relative mt-16 space-y-10 border-l border-border pl-8"
        >
          <ScrollProgressLine targetSelector="#experience-timeline" />
          {experience.map((entry, i) => (
            <Reveal key={entry.company} as="li" delay={i * 0.1}>
              <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-medium text-foreground">
                  {entry.role}
                </h3>
                <time className="font-mono text-xs text-muted-foreground">
                  {formatPeriod(entry.start, entry.end)}
                </time>
              </div>
              <p className="mt-1 text-sm font-medium text-accent">
                {entry.company}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {entry.summary}
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {entry.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>

        <div className="mt-16 border-t border-border pt-10">
          <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
            Education
          </h3>
          <div className="mt-6 flex flex-col gap-6">
            {education.map((entry) => (
              <Reveal key={entry.institution}>
                <div className="flex items-start gap-4">
                  <GraduationCap className="mt-1 shrink-0 text-accent" size={20} />
                  <div>
                    <p className="text-base font-medium text-foreground">
                      {entry.degree}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {entry.institution}, {entry.location} &middot; {entry.period}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
