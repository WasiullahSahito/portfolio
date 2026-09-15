export type Project = {
  slug: string;
  name: string;
  monogram: string;
  tagline: string;
  type: string;
  featured: boolean;
  technologies: string[];
  features: string[];
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  challenges: string[];
  results: string;
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "fleetmove",
    name: "FleetMove",
    monogram: "FM",
    tagline: "Fleet management & booking platform",
    type: "Laravel, MySQL, WebSockets, JWT, REST API",
    featured: true,
    technologies: ["Laravel", "MySQL", "WebSockets", "JWT", "REST API"],
    features: [
      "Real-time vehicle booking",
      "Trip management",
      "Live tracking",
      "Role-based access control",
      "Payment gateway integration",
      "Production deployment",
    ],
    overview:
      "FleetMove is a live fleet operations platform covering real-time vehicle booking, trip management, and live tracking for modern fleet workflows.",
    problem:
      "Fleet operations require real-time visibility into vehicle availability, trip progress, and role-based controls, while keeping a reliable booking flow and secure access across administrators, operators, and drivers.",
    solution:
      "I designed and built the product on Laravel with a relational MySQL schema, JWT authentication, policy-based authorization, and WebSocket-powered live notifications and tracking. The platform also includes a third-party payment gateway for operational transactions and is maintained in production.",
    architecture: [
      "Laravel backend with JWT authentication and separate administrator, operator, and driver access layers",
      "MySQL relational schema for vehicles, bookings, trips, users, and permissions",
      "WebSocket-based live tracking and notification flow for active trips and bookings",
      "Modular REST APIs for booking, fleet operations, and administration",
      "Integrated third-party payment processing for production usage",
    ],
    challenges: [
      "Modeling permissions cleanly across multiple user roles without weakening operational security",
      "Designing reliable real-time trip state updates over WebSockets",
      "Keeping booking rules and access control enforced server-side rather than trusting client behavior",
    ],
    results:
      "FleetMove is live in production and manages real-time booking, trip coordination, live tracking, and role-based fleet operations across working roles.",
    github: "https://github.com/WasiullahSahito",
    live: "https://fleet-move.com",
  },
  {
    slug: "onlymetric-dashboard",
    name: "OnlyMetric",
    monogram: "OM",
    tagline: "COGS intelligence SaaS dashboard",
    type: "Laravel, React.js, PostgreSQL, Laravel Cloud",
    featured: true,
    technologies: ["Laravel", "React.js", "PostgreSQL", "Laravel Cloud"],
    features: [
      "Supplier management",
      "Invoice management",
      "Staff management",
      "Real-time COGS reporting",
      "Multi-module analytics",
      "Production deployment",
    ],
    overview:
      "OnlyMetric is a multi-module analytics platform for hospitality cost tracking, unifying supplier, invoice, and staff data into real-time COGS reporting workflows.",
    problem:
      "Hospitality teams need to understand true cost-of-goods-sold across suppliers, invoices, and staffing without manual spreadsheet stitching, especially when they need fast, actionable reporting.",
    solution:
      "I built a Laravel backend and React.js frontend around a modular architecture where supplier, invoice, and staff data each have dedicated workflows but feed a unified analytics layer. The system is deployed and maintained on Laravel Cloud, enabling real-time COGS reporting.",
    architecture: [
      "Laravel backend organized into distinct supplier, invoice, and staff management modules",
      "React.js interface connected to Laravel APIs for dashboard and reporting views",
      "PostgreSQL data layer handling operational reporting and analytics queries",
      "Managed production deployment and maintenance on Laravel Cloud",
    ],
    challenges: [
      "Designing a multi-module structure that keeps each domain independent without fragmenting the reporting layer",
      "Restructuring queries to speed up report generation and reduce repetitive database overhead",
    ],
    results:
      "The application reduced report generation time by 25% and now delivers live COGS intelligence for supplier, invoice, and staff management workflows in production.",
    github: "https://github.com/WasiullahSahito",
    live: "https://happy-hour-main-u4wqug.laravel.cloud/admin/login",
  },
  {
    slug: "szabot",
    name: "SZABOT",
    monogram: "SZ",
    tagline: "AI academic assistant for timetable and academic queries",
    type: "Python, RAG Architecture, Google Gemini API, JavaScript",
    featured: true,
    technologies: ["Python", "RAG", "Google Gemini API", "JavaScript"],
    features: [
      "Excel/PDF timetable parsing",
      "RAG-based assistant",
      "Student query answering",
      "Intent detection",
      "Admin dashboard",
      "Schedule upload workflows",
    ],
    overview:
      "SZABOT is a retrieval-augmented academic assistant that parses timetable files and answers student questions in real time across classes, exams, and events.",
    problem:
      "Students and administrators often struggle to extract timely answers from scattered timetable data in Excel and PDF formats, especially when they need specific class, exam, or event information on demand.",
    solution:
      "I built a Python parsing pipeline to convert timetable files into structured data and combined it with Google Gemini-powered retrieval and intent detection logic. The assistant answers academic queries in real time while an admin dashboard supports schedule uploads and query monitoring.",
    architecture: [
      "Python ingestion layer for parsing Excel and PDF timetable documents into structured data",
      "RAG architecture combining retrieval with Gemini-powered reasoning for queries",
      "Intent detection routing questions across classes, exams, and events",
      "JavaScript-based admin dashboard for uploads and monitoring",
    ],
    challenges: [
      "Normalizing uneven timetable formats into reliable structured data for question answering",
      "Matching academic intents to the correct domain and return contextually correct answers",
    ],
    results:
      "The project delivers real-time academic assistance from structured timetable data, with an admin workflow to monitor queries and upload updates.",
    github: "https://github.com/WasiullahSahito",
  },
  {
    slug: "oddco-studios",
    name: "ODDCO Studios",
    monogram: "OD",
    tagline: "Responsive animation studio marketing website",
    type: "HTML5, CSS3, JavaScript, PHP, SEO",
    featured: false,
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "SEO"],
    features: [
      "Responsive portfolio website",
      "Animation and comics showcase",
      "SEO optimization",
      "Live client deployment",
      "Performance improvements",
    ],
    overview:
      "ODDCO Studios is a responsive marketing website for a 2D animation and character design studio, presenting portfolio work across animation, comics, and character concepts.",
    problem:
      "The studio needed a polished online presence that could showcase portfolio work clearly while improving visibility in search results and page performance on a live client domain.",
    solution:
      "I designed and delivered a responsive front-end experience in HTML5, CSS3, JavaScript, and PHP, with on-page SEO and front-end optimization to improve search visibility and page load times.",
    architecture: [
      "Responsive marketing website tailored to creative portfolio presentation",
      "Performance-focused front-end implementation with SEO best practices",
      "PHP-backed deployment on the live client domain",
    ],
    challenges: [
      "Balancing creative storytelling with lightweight front-end performance",
      "Improving search visibility without sacrificing design intent",
    ],
    results:
      "The site was deployed and maintained on a live client domain, with improved search visibility and better page load performance.",
    live: "https://oddcostudios.com",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
