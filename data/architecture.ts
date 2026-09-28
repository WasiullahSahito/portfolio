export type FlowNode = {
  id: string;
  label: string;
  /** Short line shown under the label. */
  tech?: string;
  title: string;
  description: string;
  /** Where this appears in real work. */
  evidence?: string;
};

export type FlowLayer = {
  id: string;
  nodes: FlowNode[];
};

export type FlowDiagram = {
  id: string;
  label: string;
  layers: FlowLayer[];
};

const layer = (node: FlowNode): FlowLayer => ({ id: node.id, nodes: [node] });

export const systemDiagram: FlowDiagram = {
  id: "system",
  label: "System",
  layers: [
    layer({
      id: "client",
      label: "Client",
      tech: "React / Next.js",
      title: "Client",
      description: "React and Next.js front ends that consume the REST APIs.",
      evidence: "React 19 SPA (Daytrip) · React 19 (OnlyMetric)",
    }),
    layer({
      id: "rest",
      label: "REST APIs",
      tech: "Validation · Contracts",
      title: "REST APIs",
      description:
        "REST APIs with request validation, error handling, and defined API contracts.",
      evidence: "Axoon Solutions · FleetMove customer and driver apps",
    }),
    {
      id: "runtime",
      nodes: [
        {
          id: "laravel",
          label: "Laravel",
          tech: "PHP · Passport · RBAC",
          title: "Laravel",
          description:
            "Laravel and PHP backends, secured with Laravel Passport authentication and role-based access control.",
          evidence: "FleetMove (Laravel 12) · Daytrip (Laravel 13) · OnlyMetric (Laravel 12)",
        },
        {
          id: "node",
          label: "Node / Express",
          tech: "Node.js · Express.js",
          title: "Node.js and Express.js",
          description: "REST APIs for client applications built with Node.js and Express.js.",
          evidence: "Axoon Solutions",
        },
      ],
    },
    layer({
      id: "orm",
      label: "Eloquent ORM",
      tech: "Data access",
      title: "Eloquent ORM",
      description: "Eloquent ORM for data access on the Laravel side.",
      evidence: "Query optimization: approximately 28% API response-time reduction (Axoon Solutions)",
    }),
    {
      id: "data",
      nodes: [
        {
          id: "postgresql",
          label: "PostgreSQL",
          title: "PostgreSQL",
          description: "Relational database behind Daytrip and OnlyMetric.",
          evidence: "Daytrip · OnlyMetric",
        },
        {
          id: "mysql",
          label: "MySQL",
          title: "MySQL",
          description: "Relational database work, alongside database design and query optimization.",
        },
        {
          id: "mongodb",
          label: "MongoDB",
          title: "MongoDB",
          description: "Document database work.",
        },
      ],
    },
    {
      id: "services",
      nodes: [
        {
          id: "realtime",
          label: "Real-time",
          tech: "Reverb · WebSockets",
          title: "WebSockets with Laravel Reverb",
          description: "Real-time trip updates and chat over WebSockets using Laravel Reverb.",
          evidence: "FleetMove",
        },
        {
          id: "fcm",
          label: "FCM",
          tech: "Push",
          title: "Firebase Cloud Messaging",
          description: "Push notifications through Firebase Cloud Messaging (FCM).",
          evidence: "FleetMove",
        },
        {
          id: "payments",
          label: "Payments",
          tech: "Stripe · SumUp",
          title: "Stripe and SumUp",
          description:
            "Stripe (PaymentIntents, signed webhooks) and SumUp payment processing.",
          evidence: "Daytrip",
        },
      ],
    },
    layer({
      id: "infra",
      label: "Infrastructure",
      tech: "Ubuntu · OpenLiteSpeed · Contabo",
      title: "Ubuntu VPS",
      description:
        "Production deployment on a Contabo VPS running Ubuntu Linux, OpenLiteSpeed, and PostgreSQL.",
      evidence: "Daytrip",
    }),
  ],
};

export const realtimeDiagram: FlowDiagram = {
  id: "realtime",
  label: "Real-time",
  layers: [
    layer({
      id: "driver",
      label: "Driver",
      tech: "Driver app",
      title: "Driver",
      description: "The driver app on the FleetMove platform.",
      evidence: "FleetMove",
    }),
    layer({
      id: "event",
      label: "Real-time event",
      tech: "Trip update · Chat",
      title: "Real-time event",
      description: "Trip updates and chat are delivered as real-time events.",
      evidence: "FleetMove",
    }),
    layer({
      id: "reverb",
      label: "Laravel / Reverb",
      tech: "WebSockets",
      title: "Laravel Reverb",
      description: "Laravel Reverb serves the WebSocket connections behind real-time trip updates and chat.",
      evidence: "FleetMove (16-module Laravel 12 architecture)",
    }),
    layer({
      id: "customer",
      label: "Customer application",
      tech: "Customer app",
      title: "Customer application",
      description: "The FleetMove customer app receives trip updates and chat in real time.",
      evidence: "FleetMove",
    }),
    layer({
      id: "push",
      label: "Push notification",
      tech: "FCM",
      title: "Push notification",
      description: "Push notifications delivered through Firebase Cloud Messaging (FCM).",
      evidence: "FleetMove",
    }),
  ],
};

export const paymentsDiagram: FlowDiagram = {
  id: "payments",
  label: "Payments",
  layers: [
    layer({
      id: "customer",
      label: "Customer",
      title: "Customer",
      description: "A customer booking a trip on Daytrip.",
      evidence: "Daytrip",
    }),
    layer({
      id: "booking",
      label: "Booking",
      tech: "Scheduled bookings",
      title: "Booking",
      description: "Bookings, including scheduled bookings, created through the React 19 SPA and Laravel 13 REST API.",
      evidence: "Daytrip",
    }),
    layer({
      id: "fare",
      label: "Server-side fare",
      title: "Server-side fare calculation",
      description: "The fare is calculated server-side.",
      evidence: "Daytrip",
    }),
    layer({
      id: "payment",
      label: "Payment",
      title: "Payment",
      description: "Payment is processed through Stripe or SumUp.",
      evidence: "Daytrip",
    }),
    {
      id: "providers",
      nodes: [
        {
          id: "stripe",
          label: "Stripe",
          tech: "PaymentIntents",
          title: "Stripe",
          description: "Stripe integration using PaymentIntents and signed webhooks.",
          evidence: "Daytrip",
        },
        {
          id: "sumup",
          label: "SumUp",
          title: "SumUp",
          description: "SumUp payment processing integration.",
          evidence: "Daytrip",
        },
      ],
    },
    layer({
      id: "webhook",
      label: "Webhook",
      tech: "Signed webhooks",
      title: "Webhook",
      description: "Stripe signed webhooks report payment events back to the API.",
      evidence: "Daytrip",
    }),
    layer({
      id: "status",
      label: "Booking status",
      title: "Booking status",
      description: "The booking's status is updated from the payment result.",
      evidence: "Daytrip",
    }),
  ],
};

export const homeDiagrams: FlowDiagram[] = [systemDiagram, realtimeDiagram, paymentsDiagram];
