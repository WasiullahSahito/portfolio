const rows: string[][] = [
  ["User"],
  ["React / Next.js"],
  ["REST API"],
  ["Laravel", "Node.js"],
  ["Database", "Services"],
  ["PostgreSQL"],
  ["VPS / Cloud"],
];

export function HeroSystem() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative hidden w-60 shrink-0 lg:block xl:w-72"
    >
      <div className="absolute inset-y-4 left-1/2 w-px -translate-x-1/2 overflow-hidden bg-border-strong">
        <span
          className="absolute left-0 h-[18%] w-px bg-linear-to-b from-transparent via-accent to-transparent"
          style={{ animation: "flow-line 4s cubic-bezier(0.45, 0, 0.2, 1) infinite" }}
        />
      </div>

      <ol className="relative flex flex-col gap-5">
        {rows.map((row, i) => (
          <li key={row.join("-")} className="flex justify-center gap-3">
            {row.map((label) => (
              <span
                key={label}
                className="rounded-md border border-border-strong bg-background px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/85"
                style={{ animation: `pulse-soft 4s ease-in-out ${i * 0.5}s infinite` }}
              >
                {label}
              </span>
            ))}
          </li>
        ))}
      </ol>
    </div>
  );
}
