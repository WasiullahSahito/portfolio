export type Capability = {
  title: string;
  description: string;
};

// The areas of work named in the professional summary.
export const capabilities: Capability[] = [
  {
    title: "Laravel / PHP backends",
    description: "Backend features on Laravel 12 and 13, with Passport authentication and RBAC.",
  },
  {
    title: "REST APIs",
    description: "Validated, well-defined APIs across Laravel, Node.js, and Express.js.",
  },
  {
    title: "React applications",
    description: "React 19 front ends that consume the APIs, including a full single-page application.",
  },
  {
    title: "Database architecture",
    description: "PostgreSQL, MySQL, and MongoDB, with query optimization measured in results.",
  },
  {
    title: "Real-time systems",
    description: "WebSockets with Laravel Reverb, plus push notifications through FCM.",
  },
  {
    title: "Payment integrations",
    description: "Stripe with PaymentIntents and signed webhooks, and SumUp.",
  },
  {
    title: "AI / LLM integrations",
    description: "LLM APIs, invoice OCR, and retrieval-augmented generation.",
  },
  {
    title: "Production deployment",
    description: "Linux VPS with OpenLiteSpeed and PostgreSQL, and managed platforms.",
  },
];
