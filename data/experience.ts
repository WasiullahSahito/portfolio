export type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  /** One line for the homepage timeline. */
  summary: string;
  /** Full responsibilities for the experience page. */
  responsibilities: string[];
  /** Displayed as an approximation, not an independently verified benchmark. */
  note?: string;
  links?: { label: string; href: string }[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "digitize",
    company: "Digitize LLC",
    role: "Laravel Developer (Intern)",
    start: "2026-02",
    end: "2026-06",
    location: "Remote, Pakistan",
    summary:
      "Backend features for FleetMove and Daytrip, two live taxi platforms for Irish clients.",
    responsibilities: [
      "Developed backend features for FleetMove (fleet-move.com), a live ride-hailing and fleet platform for Fivestar Galway Taxis, built on a 16-module Laravel 12 architecture.",
      "Built REST APIs for the FleetMove customer and driver apps, securing endpoints with Laravel Passport authentication and role-based access control (RBAC) across 3 user roles.",
      "Implemented real-time trip updates and chat using WebSockets (Laravel Reverb), and push notifications via Firebase Cloud Messaging (FCM).",
      "Built Daytrip (daytrip.ie), a taxi booking platform with a Laravel 13 REST API and a React 19 single-page application (SPA), featuring server-side fare calculation, scheduled bookings, and an admin panel.",
      "Integrated Stripe (PaymentIntents, signed webhooks) and SumUp payment processing, and wrote PHPUnit tests.",
      "Deployed Daytrip to production on a Contabo VPS running Ubuntu Linux, OpenLiteSpeed, and PostgreSQL.",
    ],
    links: [
      { label: "fleet-move.com", href: "https://fleet-move.com" },
      { label: "daytrip.ie", href: "https://daytrip.ie" },
    ],
  },
  {
    id: "axoon",
    company: "Axoon Solutions",
    role: "Backend Developer (Intern)",
    start: "2025-06",
    end: "2025-08",
    location: "Remote, Pakistan",
    summary:
      "REST APIs with Laravel, Node.js, and Express.js, and an approximately 28% API response-time reduction.",
    responsibilities: [
      "Built and maintained REST APIs for client applications using Laravel, Node.js, and Express.js, with request validation, error handling, and defined API contracts.",
      "Reduced API response times by approximately 28% by optimizing database queries and eliminating redundant database calls.",
    ],
    note: "The 28% figure is approximate and not an independently verified benchmark.",
  },
  {
    id: "freelance",
    company: "Self-Employed",
    role: "Freelance Web Developer",
    start: "2022",
    end: "2026",
    location: "Remote",
    summary:
      "A responsive, SEO-optimized marketing website for ODDCO Studios, a 2D animation studio.",
    responsibilities: [
      "Delivered and maintained a responsive, SEO-optimized marketing website for a 2D animation studio using HTML5, CSS3, JavaScript, and PHP.",
    ],
    links: [{ label: "oddcostudios.com", href: "https://oddcostudios.com" }],
  },
];

export function formatPeriod(start: string, end: string) {
  const format = (value: string) =>
    value.length === 4
      ? value
      : new Date(`${value}-01`).toLocaleDateString("en-US", { month: "short", year: "numeric" });
  return `${format(start)} — ${format(end)}`;
}
