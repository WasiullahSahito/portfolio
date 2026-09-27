import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillChip } from "@/components/ui/skill-chip";
import { Reveal } from "@/components/animations/reveal";

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 cinematic-glow opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Trusted Technology Ecosystem"
          title="A practical technology ecosystem"
          description="Tools I reach for to take a product from a data model to a deployed application."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {skillCategories.map((category, i) => (
            <Reveal key={category.id} delay={(i % 2) * 0.08}>
              <div className="h-full rounded-lg border border-border bg-surface/60 p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-medium text-foreground">
                    {category.title}
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    {String(category.skills.length).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {category.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <li key={skill.name}>
                      <SkillChip name={skill.name} icon={skill.icon} />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
