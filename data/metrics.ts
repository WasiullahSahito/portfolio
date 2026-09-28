export type Metric = {
  /** Numeric value that animates in. */
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  /** Where the number comes from. */
  source: string;
};

// Only documented figures. Approximate values keep their "~" prefix.
export const metrics: Metric[] = [
  { value: 16, label: "Module Laravel 12 architecture", source: "FleetMove" },
  { value: 3, label: "User roles", source: "FleetMove RBAC" },
  { value: 20, suffix: "+", label: "Screens", source: "OnlyMetric" },
  { value: 15, label: "API resource groups", source: "OnlyMetric" },
  { value: 5, label: "LLM providers", source: "OnlyMetric" },
  { value: 3, label: "Query categories", source: "SZABOT" },
  {
    value: 28,
    prefix: "~",
    suffix: "%",
    label: "API response-time reduction",
    source: "Axoon Solutions",
  },
  {
    value: 25,
    prefix: "~",
    suffix: "%",
    label: "Report generation-time reduction",
    source: "OnlyMetric",
  },
];
