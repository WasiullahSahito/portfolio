import {
  paymentsDiagram,
  realtimeDiagram,
  type FlowDiagram,
  type FlowLayer,
  type FlowNode,
} from "./architecture";

export type Screenshot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  name: string;
  /** Shown in parentheses after the name where a project has a second name. */
  alias?: string;
  category: string;
  /** Extra classification, e.g. "Final Year Project". */
  type?: string;
  year: string;
  technologies: string[];
  overview: string;
  /** What was built, as stated in the source data. */
  built: string[];
  /** Three short engineering details for the homepage. */
  highlights: string[];
  features: string[];
  challenges: string[];
  performance?: { value: string; label: string };
  diagrams: FlowDiagram[];
  /** Only links that have actually been provided. */
  links: { github?: string; live?: string };
  /** Real product screenshots. The first one is used as the project's main visual. */
  screenshots?: Screenshot[];
  /** Shown under the gallery, e.g. what has been blurred. */
  screenshotNote?: string;
  /** Fallback schematic used when there are no screenshots. */
  visual: "onlymetric" | "szabot" | "fleetmove" | "daytrip" | "oddco";
};

const step = (id: string, label: string, description: string, tech?: string): FlowLayer => ({
  id,
  nodes: [{ id, label, tech, title: label, description }],
});

const parallel = (id: string, nodes: FlowNode[]): FlowLayer => ({ id, nodes });

export const projects: Project[] = [
  {
    slug: "onlymetric",
    name: "OnlyMetric",
    alias: "Happy Hour",
    category: "Restaurant Operations SaaS",
    year: "2025",
    technologies: ["Laravel 12", "React 19", "PostgreSQL", "PHPUnit", "Laravel Cloud"],
    overview:
      "OnlyMetric (Happy Hour) is a restaurant operations SaaS platform covering purchasing, recipe costing, inventory, point of sale (POS), kitchen display, and staffing across 20+ screens and 15 API resource groups.",
    built: [
      "Built a restaurant operations SaaS platform covering purchasing, recipe costing, inventory, point of sale (POS), kitchen display, and staffing across 20+ screens and 15 API resource groups.",
      "Implemented AI-powered invoice OCR with GST-aware validation.",
      "Built an LLM provider layer supporting 5 providers: OpenAI, Anthropic Claude, Google Gemini, Ollama, and Z.ai.",
      "Reduced report generation time by approximately 25% by restructuring database queries.",
    ],
    highlights: [
      "20+ screens across 15 API resource groups",
      "AI invoice OCR with GST-aware validation",
      "LLM provider layer supporting 5 providers",
    ],
    features: [
      "Purchasing, recipe costing, inventory, POS, kitchen display, and staffing in one platform",
      "20+ screens and 15 API resource groups",
      "AI-powered invoice OCR with GST-aware validation",
      "LLM provider layer supporting OpenAI, Anthropic Claude, Google Gemini, Ollama, and Z.ai",
      "Approximately 25% faster report generation through restructured database queries",
    ],
    challenges: [
      "Covering six operational areas — purchasing, recipe costing, inventory, POS, kitchen display, and staffing — in a single platform.",
      "Validating invoice data with GST-aware rules as part of AI-powered OCR.",
      "Supporting five LLM providers through one provider layer.",
      "Reducing report generation time, which meant restructuring database queries.",
    ],
    performance: {
      value: "~25%",
      label: "Approximately 25% reduction in report generation time",
    },
    diagrams: [
      {
        id: "operations",
        label: "Operations",
        layers: [
          step("purchasing", "Purchasing", "Purchasing is one of the six operational areas the platform covers."),
          step("costing", "Recipe costing", "Recipe costing is one of the six operational areas the platform covers."),
          step("inventory", "Inventory", "Inventory is one of the six operational areas the platform covers."),
          step("pos", "POS", "Point of sale is one of the six operational areas the platform covers."),
          step("kitchen", "Kitchen display", "Kitchen display is one of the six operational areas the platform covers."),
          step("staffing", "Staffing", "Staffing is one of the six operational areas the platform covers."),
        ],
      },
      {
        id: "ai",
        label: "AI invoice pipeline",
        layers: [
          step("ocr", "AI invoice OCR", "AI-powered OCR for invoices."),
          step("gst", "GST validation", "GST-aware validation applied to invoice data."),
          step(
            "provider-layer",
            "LLM provider layer",
            "A provider layer that supports 5 LLM providers behind one integration point."
          ),
          parallel(
            "providers",
            ["OpenAI", "Anthropic Claude", "Google Gemini", "Ollama", "Z.ai"].map((name) => ({
              id: name.toLowerCase().replace(/[^a-z]/g, ""),
              label: name,
              title: name,
              description: `${name} is one of the 5 providers supported by the LLM provider layer.`,
            }))
          ),
        ],
      },
    ],
    links: {},
    screenshots: [
      {
        src: "/projects/onlymetric/dashboard.webp",
        alt: "OnlyMetric dashboard with cost of goods, potential savings, price alert, invoice, recipe and supplier summary cards.",
        caption: "Dashboard",
        width: 1902,
        height: 911,
      },
      {
        src: "/projects/onlymetric/invoices.webp",
        alt: "OnlyMetric invoice management screen listing supplier invoices with their processing status.",
        caption: "Invoice management",
        width: 1902,
        height: 911,
      },
      {
        src: "/projects/onlymetric/pos.webp",
        alt: "OnlyMetric point of sale terminal with an order panel, dine-in and takeaway options, and payment controls.",
        caption: "POS terminal",
        width: 1902,
        height: 911,
      },
      {
        src: "/projects/onlymetric/suppliers.webp",
        alt: "OnlyMetric supplier management screen with supplier totals and a supplier table.",
        caption: "Supplier management",
        width: 1902,
        height: 911,
      },
    ],
    screenshotNote: "Supplier contact details are blurred.",
    visual: "onlymetric",
  },
  {
    slug: "daytrip",
    name: "Daytrip",
    category: "Taxi Booking Platform",
    type: "Built at Digitize LLC",
    year: "2026",
    technologies: ["Laravel 13", "React 19", "PostgreSQL", "Stripe", "SumUp", "PHPUnit"],
    overview:
      "Daytrip (daytrip.ie) is a taxi booking platform with a Laravel 13 REST API and a React 19 single-page application (SPA), featuring server-side fare calculation, scheduled bookings, and an admin panel.",
    built: [
      "Built Daytrip (daytrip.ie), a taxi booking platform with a Laravel 13 REST API and a React 19 single-page application (SPA), featuring server-side fare calculation, scheduled bookings, and an admin panel.",
      "Integrated Stripe (PaymentIntents, signed webhooks) and SumUp payment processing, and wrote PHPUnit tests.",
      "Deployed Daytrip to production on a Contabo VPS running Ubuntu Linux, OpenLiteSpeed, and PostgreSQL.",
    ],
    highlights: [
      "Server-side fare calculation and scheduled bookings",
      "Stripe and SumUp payment processing",
      "Deployed on a Contabo VPS with Ubuntu, OpenLiteSpeed, and PostgreSQL",
    ],
    features: [
      "Laravel 13 REST API with a React 19 single-page application",
      "Server-side fare calculation",
      "Scheduled bookings",
      "Admin panel",
      "Stripe payments with PaymentIntents and signed webhooks",
      "SumUp payment processing",
      "PHPUnit tests",
    ],
    challenges: [
      "Calculating fares server-side.",
      "Supporting two payment providers, Stripe and SumUp.",
      "Taking the platform to production on a self-managed Linux VPS.",
    ],
    diagrams: [
      {
        id: "stack",
        label: "Stack",
        layers: [
          step("spa", "React 19 SPA", "A React 19 single-page application.", "React 19"),
          step(
            "api",
            "Laravel 13 REST API",
            "A Laravel 13 REST API with server-side fare calculation, scheduled bookings, and an admin panel.",
            "Laravel 13"
          ),
          step("pg", "PostgreSQL", "PostgreSQL in production."),
          step(
            "vps",
            "Contabo VPS",
            "Production deployment on a Contabo VPS running Ubuntu Linux, OpenLiteSpeed, and PostgreSQL.",
            "Ubuntu · OpenLiteSpeed"
          ),
        ],
      },
      paymentsDiagram,
    ],
    links: { live: "https://daytrip.ie" },
    screenshots: [
      {
        src: "/projects/daytrip/landing.webp",
        alt: "Daytrip landing page with a booking panel for pickup location and destination and a Book a ride button.",
        caption: "Landing page",
        width: 1902,
        height: 911,
      },
      {
        src: "/projects/daytrip/booking.webp",
        alt: "Daytrip booking screen with pickup and destination fields, pickup date and time, passenger details, number of passengers, waiting time, and a map preview.",
        caption: "Booking screen",
        width: 1902,
        height: 911,
      },
      {
        src: "/projects/daytrip/login.webp",
        alt: "Daytrip login screen with email and password fields.",
        caption: "Login",
        width: 1902,
        height: 911,
      },
    ],
    visual: "daytrip",
  },
  {
    slug: "fleetmove",
    name: "FleetMove",
    category: "Ride-Hailing & Fleet Platform",
    type: "Built at Digitize LLC",
    year: "2026",
    technologies: [
      "Laravel 12",
      "Laravel Passport",
      "RBAC",
      "Laravel Reverb",
      "WebSockets",
      "Firebase Cloud Messaging",
    ],
    overview:
      "FleetMove (fleet-move.com) is a live ride-hailing and fleet platform for Fivestar Galway Taxis, built on a 16-module Laravel 12 architecture.",
    built: [
      "Developed backend features for FleetMove (fleet-move.com), a live ride-hailing and fleet platform for Fivestar Galway Taxis, built on a 16-module Laravel 12 architecture.",
      "Built REST APIs for the FleetMove customer and driver apps, securing endpoints with Laravel Passport authentication and role-based access control (RBAC) across 3 user roles.",
      "Implemented real-time trip updates and chat using WebSockets (Laravel Reverb), and push notifications via Firebase Cloud Messaging (FCM).",
    ],
    highlights: [
      "16-module Laravel 12 architecture",
      "Laravel Passport authentication and RBAC across 3 user roles",
      "Real-time trip updates and chat with Laravel Reverb and FCM",
    ],
    features: [
      "REST APIs for the customer and driver apps",
      "Laravel Passport authentication",
      "Role-based access control across 3 user roles",
      "Real-time trip updates and chat over WebSockets (Laravel Reverb)",
      "Push notifications through Firebase Cloud Messaging (FCM)",
    ],
    challenges: [
      "Securing customer and driver endpoints across 3 user roles.",
      "Delivering real-time trip updates and chat.",
      "Working within a 16-module Laravel 12 architecture.",
    ],
    diagrams: [
      {
        id: "api",
        label: "API",
        layers: [
          step("apps", "Customer & driver apps", "The FleetMove customer and driver apps."),
          step("rest", "REST APIs", "REST APIs built for the customer and driver apps."),
          step("passport", "Laravel Passport", "Endpoints are secured with Laravel Passport authentication."),
          step("rbac", "RBAC", "Role-based access control across 3 user roles.", "3 user roles"),
          step(
            "modules",
            "16-module architecture",
            "The backend is built on a 16-module Laravel 12 architecture.",
            "Laravel 12"
          ),
        ],
      },
      realtimeDiagram,
    ],
    links: { live: "https://fleet-move.com" },
    screenshots: [
      {
        src: "/projects/fleetmove/dashboard.webp",
        alt: "FleetMove admin dashboard showing active customers, active drivers, earnings, parcel and ride totals, and zone-wise trip statistics.",
        caption: "Admin dashboard",
        width: 1902,
        height: 911,
      },
      {
        src: "/projects/fleetmove/booking.webp",
        alt: "FleetMove manual booking form beside a live fleet view with a driver list and a map.",
        caption: "Manual booking with live fleet view",
        width: 1902,
        height: 911,
      },
      {
        src: "/projects/fleetmove/login.webp",
        alt: "FleetMove admin sign-in screen with email and password fields.",
        caption: "Admin sign-in",
        width: 1902,
        height: 911,
      },
    ],
    screenshotNote: "Personal details, including names, phone numbers, and email addresses, are blurred.",
    visual: "fleetmove",
  },
  {
    slug: "szabot",
    name: "SZABOT",
    category: "AI Academic Assistant",
    type: "Final Year Project",
    year: "2025",
    technologies: ["React.js (Vite)", "Node.js", "Express.js", "MongoDB", "Python", "Gemini API"],
    overview:
      "SZABOT is a retrieval-augmented generation (RAG) assistant, built as a Final Year Project with Node.js, Express.js, and the Google Gemini 2.5 Flash API, that answers student questions about classes, exams, and events.",
    built: [
      "Built a retrieval-augmented generation (RAG) assistant with Node.js, Express.js, and the Google Gemini 2.5 Flash API that answers student questions about classes, exams, and events.",
      "Developed a Python parsing pipeline (Pandas, pdfplumber) that converts Excel and PDF timetables into structured MongoDB records via child_process.",
      "Implemented intent detection to route queries across 3 categories (classes, exams, events) and retrieve batch-specific records.",
      "Built a React admin dashboard with JWT and bcrypt authentication for timetable uploads and chat log review.",
    ],
    highlights: [
      "RAG assistant with Node.js, Express.js, and Gemini 2.5 Flash",
      "Python pipeline (Pandas, pdfplumber) into MongoDB via child_process",
      "Intent detection across 3 categories: classes, exams, events",
    ],
    features: [
      "Real-time answers to student questions about classes, exams, and events",
      "Python parsing pipeline (Pandas, pdfplumber) converting Excel and PDF timetables into structured MongoDB records via child_process",
      "Intent detection routing queries across 3 categories and retrieving batch-specific records",
      "React admin dashboard with JWT and bcrypt authentication for timetable uploads and chat log review",
    ],
    challenges: [
      "Converting Excel and PDF timetables into structured MongoDB records through a Python pipeline bridged to Node.js via child_process.",
      "Routing student queries across 3 categories — classes, exams, events — with intent detection and retrieving batch-specific records.",
      "Securing the admin dashboard's timetable uploads and chat log review with JWT and bcrypt authentication.",
    ],
    diagrams: [
      {
        id: "pipeline",
        label: "Query pipeline",
        layers: [
          step("source", "Excel / PDF timetable", "The source timetables the Python pipeline parses."),
          step(
            "python",
            "Python pipeline (Pandas, pdfplumber)",
            "A Python parsing pipeline using Pandas and pdfplumber that converts Excel and PDF timetables into structured records."
          ),
          step(
            "bridge",
            "child_process bridge",
            "Node.js child_process bridges the Python parsing pipeline to the Express backend."
          ),
          step("mongodb", "MongoDB", "Parsed timetable data is stored as structured MongoDB records."),
          step(
            "intent",
            "Intent detection",
            "Intent detection routes each query across 3 categories: classes, exams, and events."
          ),
          step(
            "categories",
            "Classes / exams / events",
            "Queries are routed across 3 categories and matched to batch-specific records."
          ),
          step(
            "gemini",
            "Gemini 2.5 Flash + RAG",
            "A retrieval-augmented generation assistant built with Node.js, Express.js, and the Google Gemini 2.5 Flash API."
          ),
          step("answer", "Real-time answer", "Student questions about classes, exams, and events are answered in real time."),
        ],
      },
      {
        id: "admin",
        label: "Admin",
        layers: [
          step("dashboard", "React admin dashboard", "A React admin dashboard for timetable uploads and chat log review."),
          step("auth", "JWT + bcrypt auth", "JWT and bcrypt authentication secure the admin dashboard."),
          step("upload", "Timetable upload", "Administrators upload Excel and PDF timetables through the dashboard."),
        ],
      },
    ],
    links: { github: "https://github.com/WasiullahSahito" },
    screenshots: [
      {
        src: "/projects/szabot/chat.webp",
        alt: "SZABOT chat interface where a student asks when the DSA Exhibition is and the assistant replies with the date, time, venue, and organizer.",
        caption: "Student chat",
        width: 934,
        height: 427,
      },
      {
        src: "/projects/szabot/uploads.webp",
        alt: "SZABOT admin uploads page with an Upload Timetable (PDF/Excel) control and a list of uploaded files.",
        caption: "Admin timetable upload",
        width: 969,
        height: 442,
      },
      {
        src: "/projects/szabot/dashboard.webp",
        alt: "SZABOT admin dashboard showing counts of users, files uploaded, and chat sessions.",
        caption: "Admin dashboard",
        width: 969,
        height: 439,
      },
    ],
    visual: "szabot",
  },
  {
    slug: "oddco-studios",
    name: "ODDCO Studios",
    category: "Marketing Website",
    type: "Freelance client project",
    year: "2022–2026",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
    overview:
      "A responsive, SEO-optimized marketing website for ODDCO Studios, a 2D animation studio, delivered and maintained as a freelance web developer.",
    built: [
      "Delivered and maintained a responsive, SEO-optimized marketing website for a 2D animation studio using HTML5, CSS3, JavaScript, and PHP.",
    ],
    highlights: [
      "Responsive, SEO-optimized marketing website",
      "Built with HTML5, CSS3, JavaScript, and PHP",
      "Delivered and maintained for a 2D animation studio",
    ],
    features: [
      "Responsive layout",
      "SEO-optimized",
      "HTML5, CSS3, JavaScript, and PHP",
      "Maintained after delivery",
    ],
    challenges: [
      "Delivering a responsive site for a 2D animation studio.",
      "Optimizing the site for search engines.",
      "Maintaining the site after delivery.",
    ],
    diagrams: [],
    links: { live: "https://oddcostudios.com" },
    screenshots: [
      {
        src: "/projects/oddco-studios/home.webp",
        alt: "ODDCO Studios home page with a full-screen hero, the headline Creative Excellence, and an Explore Our Work button.",
        caption: "Home page",
        width: 1902,
        height: 911,
      },
      {
        src: "/projects/oddco-studios/portfolio.webp",
        alt: "ODDCO Studios 2D animation portfolio page with a grid of project cards.",
        caption: "2D animation portfolio",
        width: 1902,
        height: 911,
      },
      {
        src: "/projects/oddco-studios/about.webp",
        alt: "ODDCO Studios about section with a character illustration and service tags for 2D animation, character design, and comic art.",
        caption: "About section",
        width: 1902,
        height: 911,
      },
    ],
    visual: "oddco",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
