const stats = [
  { value: "2", label: "Live production platforms" },
  { value: "3mo", label: "Intern → Contract promotion" },
  { value: "28%", label: "Faster API response times" },
  { value: "25%", label: "Faster report generation" },
];

export function ProofStrip() {
  return (
    <dl className="glass pointer-events-auto grid grid-cols-2 gap-x-6 gap-y-5 rounded-2xl border border-border px-6 py-5 sm:grid-cols-4 sm:gap-x-8">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <dt className="font-mono text-2xl font-semibold text-accent sm:text-3xl">{stat.value}</dt>
          <dd className="mt-1 text-xs leading-snug text-muted-foreground">{stat.label}</dd>
        </div>
      ))}
    </dl>
  );
}
