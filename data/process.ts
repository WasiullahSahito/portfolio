export type ProcessStep = {
  title: string;
  description: string;
  evidence: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Understand",
    description:
      "Start with who uses the system and what each of them is allowed to do, before any schema or screen exists.",
    evidence: "RBAC across 3 user roles (FleetMove) · customer, driver, and admin workflows",
  },
  {
    title: "Design",
    description:
      "Define the API contracts, request validation, and error handling up front, alongside the database design.",
    evidence: "Defined API contracts, validation, and error handling (Axoon Solutions)",
  },
  {
    title: "Architect",
    description:
      "Split the backend into clear domains so features can grow without tangling: modules, resource groups, and a provider layer for external AI services.",
    evidence:
      "16-module Laravel 12 architecture (FleetMove) · 15 API resource groups and a 5-provider LLM layer (OnlyMetric)",
  },
  {
    title: "Build",
    description:
      "Secure endpoints with authentication and role-based access control, integrate payments and real-time channels, and back critical paths with tests.",
    evidence:
      "Laravel Passport + RBAC · Stripe and SumUp · Laravel Reverb WebSockets · PHPUnit (Daytrip)",
  },
  {
    title: "Optimize",
    description:
      "Find slow queries and redundant database calls, then fix them.",
    evidence:
      "~28% API response-time reduction (Axoon Solutions) · ~25% report generation-time reduction (OnlyMetric)",
  },
  {
    title: "Deploy",
    description:
      "Ship to production infrastructure, from a self-managed Linux VPS to a managed platform.",
    evidence: "Contabo VPS, Ubuntu, OpenLiteSpeed, PostgreSQL (Daytrip) · Laravel Cloud (OnlyMetric)",
  },
];
