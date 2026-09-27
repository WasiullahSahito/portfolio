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
  /** Four-stage system flow rendered in the case-study pipeline visual. */
  pipeline: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "fleetmove",
    name: "FleetMove",
    monogram: "FM",
    tagline: "Live ride-hailing & fleet platform for Fivestar Galway Taxis",
    type: "Laravel 12, Modular Architecture, Passport, Reverb",
    featured: true,
    technologies: [
      "Laravel 12",
      "Laravel Modules",
      "Laravel Passport",
      "RBAC",
      "Laravel Reverb",
      "WebSockets",
      "Firebase Cloud Messaging",
      "REST API",
    ],
    features: [
      "16-module domain-driven architecture (trips, fares, vehicles, zones, parcels, promotions, chat, reviews, AI)",
      "Customer, driver & admin REST APIs with dual Passport/Sanctum token auth",
      "Role-based access control across customer, driver, and admin roles",
      "Real-time trip dispatch, live status, and in-app chat over Laravel Reverb",
      "Firebase Cloud Messaging push notifications to mobile clients",
      "Parcel delivery, wallets, loyalty points, and zone-based service rules",
      "Multi-gateway payments (Stripe, Razorpay, Mercado Pago, iyzico, Xendit) behind one interface",
      "Live production deployment for Fivestar Galway Taxis",
    ],
    overview:
      "FleetMove is a live, modular ride-hailing and fleet operations platform for Fivestar Galway Taxis — covering customer bookings, driver dispatch, parcel delivery, wallets and loyalty, and admin operations across a 16-module Laravel 12 architecture.",
    problem:
      "A commercial taxi and fleet operator needed a single platform where customers, drivers, and admins could coordinate in real time — with strict role separation, zone-aware fare and service rules, and room to grow into parcel delivery and promotions without the codebase collapsing into one another.",
    solution:
      "I built the backend REST APIs for FleetMove's customer and driver apps on Laravel 12 using nwidart/laravel-modules, splitting the domain into 16 independent modules (trip management, fares, vehicles, zones, parcels, promotions, transactions, chat, reviews, and more) that share a common auth and authorization layer. Authentication runs on Laravel Passport (with Sanctum for lighter-weight tokens), and real-time trip updates and in-app chat run over WebSockets via Laravel Reverb, with Firebase Cloud Messaging handling push notifications. Payments are abstracted behind a gateway module so the platform isn't locked to a single processor.",
    architecture: [
      "16 independently-versioned Laravel modules (AdminModule, TripManagement, FareManagement, VehicleManagement, ZoneManagement, ParcelManagement, PromotionManagement, TransactionManagement, Gateways, ChattingManagement, ReviewModule, BusinessManagement, BlogManagement, AiModule, and more) sharing a common domain layer",
      "Dual-token authentication: Laravel Passport for the main API surface, Sanctum for lighter first-party clients, with RBAC enforced per module",
      "Laravel Reverb WebSocket server (plus Pusher/Echo support) powering live trip status, dispatch, and in-app chat",
      "Firebase Admin SDK and FCM for push notifications; AWS SDK for object storage",
      "Zone-based service configuration and spatial queries for coverage rules and fare zones",
      "Gateway module abstracting Stripe, Razorpay, Mercado Pago, iyzico, and Xendit behind one payment interface",
      "An AI module built on an OpenAI-compatible client for AI-assisted admin features",
    ],
    challenges: [
      "Keeping trip and dispatch state consistent in real time across customer and driver clients without over-fetching or racing updates",
      "Structuring a 16-module codebase so domains (trips, parcels, promotions, chat) stay independently maintainable while sharing one auth and authorization layer",
      "Abstracting 5 different payment gateways behind a single interface without leaking provider-specific quirks into calling code",
    ],
    results:
      "FleetMove is live in production for Fivestar Galway Taxis, running real-time booking, dispatch, parcel delivery, and driver coordination across customer, driver, and admin roles.",
    pipeline: ["Mobile Apps", "Laravel API", "Database", "Cloud Infrastructure"],
    github: "https://github.com/WasiullahSahito",
    live: "https://fleet-move.com",
  },
  {
    slug: "daytrip",
    name: "Daytrip",
    monogram: "DT",
    tagline: "Taxi booking platform with server-side fare calculation",
    type: "Laravel 13, React 19, PostgreSQL, Stripe, SumUp",
    featured: true,
    technologies: [
      "Laravel 13",
      "React 19",
      "PostgreSQL",
      "Laravel Sanctum",
      "Stripe",
      "SumUp",
      "Google Maps API",
      "PHPUnit",
    ],
    features: [
      "Server-side fare calculation, admin-editable in real time",
      "Passenger-seat validation — refuses bookings too big for the vehicle and suggests one that fits",
      "Scheduled bookings, return journeys, and idempotent booking creation",
      "Saved favourite addresses and reusable quick-booking templates",
      "Unified Stripe + SumUp card list with a single default, one default across both",
      "Admin dashboard: bookings, drivers, vehicle types, and live fare-rate editing",
      "Production VPS deployment on Contabo",
    ],
    overview:
      "Daytrip is a customer-facing taxi booking platform pairing a Laravel 13 REST API with a separate React 19 SPA, handling accurate fare pricing, scheduled bookings, and two independent card-payment providers end to end.",
    problem:
      "Customers needed a booking experience with trustworthy, tamper-proof pricing and the ability to schedule trips ahead of time, backed by an admin panel the operator could actually run the business from — real payment processing across two card providers, not a mock checkout.",
    solution:
      "I built a Laravel 13 JSON API decoupled from a React 19 SPA, authenticated with Laravel Sanctum bearer tokens. Fare is calculated entirely server-side from a formula (base fare + price per km + per-passenger charge + waiting time) that admins can retune live from a settings table — the client-side estimate is a preview only, never the source of truth. Booking creation checks the party size against the chosen vehicle's seats and rejects it with a specific suggestion if it doesn't fit. I integrated both Stripe (PaymentIntents, SetupIntents, signed webhooks) and SumUp (server-side charges against saved cards), unifying both providers into one saved-card list with a single default. I wrote PHPUnit tests across the booking and payment paths and deployed the platform to a Contabo VPS running Ubuntu, OpenLiteSpeed, and PostgreSQL.",
    architecture: [
      "Laravel 13 JSON API decoupled from a React 19 single-page application, authenticated with Laravel Sanctum bearer tokens",
      "Server-authoritative fare formula (base fare + per-km + per-passenger + waiting charge, haversine distance with a road-distance multiplier), admin-editable via a settings table that overrides config defaults without a deploy",
      "Passenger-seat validation service that rejects an oversized booking and names the smallest vehicle that fits",
      "Dual payment-provider abstraction unifying Stripe (PaymentIntents, signed webhooks) and SumUp (server-charged saved cards) into one card list with a single default",
      "Idempotency-key handling on booking creation, plus saved favourite addresses and quick-booking templates",
      "A consistent `{ success, message, data | errors }` API envelope with a centralized exception renderer that never leaks stack traces or SQL",
      "PostgreSQL data layer on a self-managed Contabo VPS (Ubuntu, OpenLiteSpeed), with a systemd queue worker and cron-driven scheduler",
    ],
    challenges: [
      "Keeping the client-side fare preview in sync with the server-authoritative formula without duplicating business logic that matters",
      "Reconciling one canonical booking status across two independent payment confirmation paths — an asynchronous Stripe webhook versus a synchronous SumUp charge",
      "Verifying SumUp saved-card setups by re-checking with SumUp's API rather than trusting the result the browser reports",
      "Owning the full deployment lifecycle — provisioning, configuring, and hardening a production VPS rather than shipping to a managed platform",
    ],
    results:
      "Daytrip is live in production at daytrip.ie, handling real customer bookings, scheduled trips, and payments through both Stripe and SumUp across passenger, business, and admin workflows.",
    pipeline: ["Customer Booking", "Booking Engine", "Payment Gateway", "Admin Dashboard"],
    github: "https://github.com/WasiullahSahito",
    live: "https://daytrip.ie",
  },
  {
    slug: "onlymetric",
    name: "OnlyMetric",
    monogram: "OM",
    tagline: "Restaurant operations SaaS with AI-powered invoice OCR",
    type: "Laravel 12, React 19, PostgreSQL, Laravel Cloud",
    featured: true,
    technologies: [
      "Laravel 12",
      "React 19",
      "PostgreSQL",
      "AI OCR",
      "Multi-LLM Provider Layer",
      "PHPUnit",
    ],
    features: [
      "20+ screens across purchasing, inventory, POS, and kitchen display",
      "15 API resource groups",
      "AI-powered invoice OCR (Google Gemini) with GST-aware validation",
      "Provider-agnostic layer supporting 5 LLM providers",
      "AI-generated ingredient & recipe insights with a human review/edit UI",
      "Master insight engine for batch-generating AI insights",
      "KPIs linked directly to the AI insights that back them",
      "Live production deployment on Laravel Cloud",
    ],
    overview:
      "OnlyMetric (Happy Hour) is a restaurant operations platform covering purchasing, recipe costing, inventory, POS, kitchen display, and staffing across 20+ screens and 15 API resource groups, with AI woven into invoice processing and ingredient insight generation.",
    problem:
      "Restaurant operators needed one system for purchasing, inventory, point of sale, kitchen display, and staffing instead of disconnected spreadsheets and tools — plus a faster way to get supplier invoices into the system and turn raw ingredient data into pricing insight, without manual data entry or blindly trusting an AI's output.",
    solution:
      "I built the platform on Laravel 12 with a React 19 frontend across 15 API resource groups, and implemented AI-powered invoice OCR (built on Google Gemini via prompt templates versioned in the codebase) with GST-aware validation that extracts structured data from supplier invoices. The same AI layer generates ingredient and recipe cost insights through a master insight engine that can batch-generate across the catalog, with results tied to KPIs for reporting. Every AI output lands in a frontend review screen so staff can correct it before it's trusted — the model augments the workflow, it doesn't run unsupervised. Behind it sits a provider-agnostic abstraction supporting 5 LLM backends (OpenAI, Claude, Gemini, Ollama, and Z.ai) so the extraction pipeline isn't locked to one vendor. I also restructured reporting queries, cutting report generation time by roughly 25%.",
    architecture: [
      "Laravel 12 backend organized into 15 distinct API resource groups spanning purchasing, inventory, POS, kitchen display, and staffing",
      "React 19 frontend across 20+ screens, including dedicated AI-insight and invoice-review pages for human-in-the-loop correction",
      "Provider-agnostic LLM abstraction layer supporting OpenAI, Claude, Gemini, Ollama, and Z.ai behind a single interface, with Google Gemini as the active provider for OCR and insight generation",
      "Prompt templates versioned as files in the codebase, feeding invoice extraction and ingredient/recipe insight generation separately",
      "AI-powered invoice OCR pipeline with GST-aware validation, persisting structured extraction data against each invoice",
      "A master insight engine endpoint that batch-generates AI insights across ingredients and recipes, linked to KPI records for reporting",
      "PostgreSQL data layer, with restructured queries for real-time COGS and operational reporting",
      "Managed production deployment on Laravel Cloud",
    ],
    challenges: [
      "Designing a provider-agnostic interface so LLM backends are swappable without touching calling code",
      "Validating and sanitizing AI-extracted invoice and insight data before it's ever persisted, and building a review UI so staff correct it rather than trust it blindly",
      "Building GST-aware validation into an OCR pipeline that has to handle inconsistent real-world invoice formats",
      "Restructuring queries across a 15-resource-group schema to bring report generation time down without breaking existing reports",
    ],
    results:
      "OnlyMetric reduced report generation time by approximately 25% through query restructuring, and now runs AI-powered invoice processing and ingredient insight generation across a 20+ screen operations platform in production.",
    pipeline: ["Restaurant Operations", "AI OCR", "Inventory", "Reports"],
    github: "https://github.com/WasiullahSahito",
    live: "https://happy-hour-main-u4wqug.laravel.cloud",
  },
  {
    slug: "szabot",
    name: "SZABOT",
    monogram: "SZ",
    tagline: "RAG-based academic assistant for real-time timetable queries",
    type: "Python, RAG, Google Gemini API, JavaScript",
    featured: true,
    technologies: ["Python", "RAG", "Google Gemini API", "JavaScript"],
    features: [
      "Excel/PDF timetable parsing pipeline",
      "RAG-based retrieval over structured schedule data",
      "Intent detection across 3 query categories",
      "Real-time student query answering",
      "Admin dashboard for schedule uploads",
    ],
    overview:
      "SZABOT is a retrieval-augmented academic assistant, built as a Final Year Project, that parses timetable documents and answers student questions in real time using Google Gemini.",
    problem:
      "Students needed fast, accurate answers to timetable questions — classes, exams, events — without manually digging through Excel and PDF schedule documents, and administrators needed a way to keep that data current.",
    solution:
      "I wrote a Python pipeline that parses Excel and PDF timetables into structured data, then combined it with a RAG architecture on top of the Google Gemini API to answer queries in real time. An intent-detection layer routes each question across 3 categories before retrieval, and an admin dashboard handles schedule uploads and monitoring.",
    architecture: [
      "Python ingestion layer parsing Excel and PDF timetable documents into structured, queryable data",
      "RAG architecture combining retrieval over that structured data with Gemini-powered reasoning",
      "Intent-detection routing layer directing queries across 3 categories (classes, exams, events)",
      "JavaScript-based admin dashboard for schedule uploads and query monitoring",
    ],
    challenges: [
      "Normalizing inconsistent timetable formats into structured data reliable enough to retrieve from",
      "Routing ambiguous student questions to the correct intent category before retrieval",
      "Keeping response latency low enough for real-time use despite the parsing → retrieval → generation chain",
    ],
    results:
      "SZABOT delivers real-time academic query answering from parsed timetable data, with an admin workflow for keeping schedules current.",
    pipeline: ["Student Query", "RAG System", "Gemini AI", "Response"],
    github: "https://github.com/WasiullahSahito",
  },
  {
    slug: "oddco-studios",
    name: "ODDCO Studios",
    monogram: "OD",
    tagline: "Responsive marketing website for a 2D animation studio",
    type: "HTML5, CSS3, JavaScript, PHP, SEO",
    featured: false,
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "SEO"],
    features: [
      "Responsive portfolio presentation",
      "Animation and comics showcase",
      "On-page SEO optimization",
      "Live client deployment since 2022",
    ],
    overview:
      "A responsive, SEO-optimised marketing website for ODDCO Studios, a 2D animation studio, delivered and maintained as an ongoing freelance client relationship since 2022.",
    problem:
      "The studio needed a polished, fast-loading online presence to showcase animation and comics work while improving visibility in search results.",
    solution:
      "I designed and delivered a responsive front-end in HTML5, CSS3, JavaScript, and PHP, with on-page SEO and performance optimization, and have maintained the site as an ongoing client relationship since 2022.",
    architecture: [
      "Responsive marketing site tailored to creative portfolio presentation",
      "Performance-focused front-end with on-page SEO best practices",
      "PHP-backed deployment on the live client domain",
    ],
    challenges: [
      "Balancing creative, image-heavy storytelling with lightweight front-end performance",
      "Improving search visibility without compromising the studio's visual identity",
    ],
    results:
      "The site has been live and maintained on the client's domain since 2022, with improved search visibility and page performance.",
    pipeline: ["Content", "Static Site", "SEO", "Live Domain"],
    live: "https://oddcostudios.com",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((project) => project.featured);
