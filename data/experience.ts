export type ExperienceEntry = {
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  summary: string;
  responsibilities: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Digitize LLC",
    role: "Laravel Developer (Intern → Contract)",
    start: "2026-02",
    end: "2026-06",
    location: "Remote, Pakistan",
    summary:
      "Built the backend for two live taxi platforms for Irish clients — FleetMove, a 16-module fleet and ride-hailing system, and Daytrip, a Laravel + React booking platform with payments — and was promoted from intern to contract developer after 3 months.",
    responsibilities: [
      "Built REST APIs for FleetMove's customer and driver apps on Laravel 12, with Laravel Passport authentication and RBAC across 3 user roles.",
      "Added real-time trip updates and in-app chat via Laravel Reverb (WebSockets) and Firebase Cloud Messaging push notifications.",
      "Built Daytrip, a Laravel 13 + React 19 taxi booking platform with server-side fare calculation, scheduled bookings, and an admin panel.",
      "Integrated Stripe (PaymentIntents, signed webhooks) and SumUp payments, wrote PHPUnit tests, and deployed Daytrip to a Contabo VPS (Ubuntu, OpenLiteSpeed, PostgreSQL).",
      "Promoted from Intern to Contract Developer after a 3-month internship.",
    ],
  },
  {
    company: "Axoon Solutions",
    role: "Backend Developer (Intern / Contract)",
    start: "2025-06",
    end: "2025-08",
    location: "Remote, Pakistan",
    summary:
      "Built and maintained REST APIs across Laravel, Node.js, and Express.js for client applications, and reduced API response times by roughly 28% through query optimization.",
    responsibilities: [
      "Built and maintained REST APIs with Laravel, Node.js, and Express.js, covering request validation, error handling, and API contracts.",
      "Reduced API response times by approximately 28% through query optimization and the removal of redundant database calls.",
      "Integrated client-side applications with backend APIs, defining request/response contracts across services.",
    ],
  },
  {
    company: "ODDCO Studios",
    role: "Freelance Web Developer",
    start: "2022-01",
    end: "2026-06",
    location: "Remote",
    summary:
      "Delivered and have maintained a responsive, SEO-optimised marketing website for a 2D animation studio since 2022 — my longest-running client relationship.",
    responsibilities: [
      "Delivered a responsive marketing website in HTML5, CSS3, JavaScript, and PHP for a 2D animation and character design studio.",
      "Implemented on-page SEO and front-end performance optimization to improve search visibility and load times.",
      "Maintained the site as an ongoing client relationship since 2022.",
    ],
  },
];

export type EducationEntry = {
  institution: string;
  degree: string;
  location: string;
  period: string;
};

export const education: EducationEntry[] = [
  {
    institution: "SZABIST University",
    degree: "Bachelor of Computer Science",
    location: "Karachi, Pakistan",
    period: "2022 — 2026",
  },
];
