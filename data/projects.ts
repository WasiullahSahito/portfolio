import type { FlowDiagram, FlowLayer, FlowNode } from "./architecture";

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
  /** Selects the visual composition in components/work/project-visual. */
  visual: "onlymetric" | "szabot";
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
    visual: "onlymetric",
  },
  {
    slug: "szabot",
    name: "SZABOT",
    category: "AI Academic Assistant",
    type: "Final Year Project",
    year: "2025",
    technologies: ["Python", "RAG", "Google Gemini API", "JavaScript"],
    overview:
      "SZABOT is a retrieval-augmented generation (RAG) assistant, built as a Final Year Project on the Google Gemini API, that answers student timetable queries in real time.",
    built: [
      "Built a retrieval-augmented generation (RAG) assistant on the Google Gemini API that answers student timetable queries in real time.",
      "Developed a Python pipeline that parses Excel and PDF timetables and routes queries across 3 categories using intent detection.",
      "Built an admin dashboard for timetable uploads.",
    ],
    highlights: [
      "RAG assistant on the Google Gemini API",
      "Python pipeline parsing Excel and PDF timetables",
      "Intent detection across 3 categories",
    ],
    features: [
      "Real-time answers to student timetable queries",
      "Python pipeline that parses Excel and PDF timetables",
      "Intent detection that routes queries across 3 categories",
      "Admin dashboard for timetable uploads",
    ],
    challenges: [
      "Parsing timetables supplied as Excel and PDF files.",
      "Routing student queries across 3 categories with intent detection.",
      "Answering timetable queries in real time.",
    ],
    diagrams: [
      {
        id: "pipeline",
        label: "Query pipeline",
        layers: [
          step("source", "Excel / PDF timetable", "The source timetables the pipeline parses."),
          step("python", "Python pipeline", "A Python pipeline that parses Excel and PDF timetables."),
          step("parsing", "Parsing / processing", "Timetable files are parsed and processed for retrieval."),
          step("intent", "Intent detection", "Intent detection routes each query across 3 categories."),
          step("categories", "3 categories", "Queries are routed across 3 categories."),
          step(
            "gemini",
            "Gemini API + RAG",
            "A retrieval-augmented generation assistant built on the Google Gemini API."
          ),
          step("answer", "Real-time answer", "Student timetable queries are answered in real time."),
        ],
      },
      {
        id: "admin",
        label: "Admin",
        layers: [
          step("dashboard", "Admin dashboard", "An admin dashboard for managing timetables."),
          step("upload", "Timetable upload", "Administrators upload timetables through the dashboard."),
        ],
      },
    ],
    links: { github: "https://github.com/WasiullahSahito" },
    visual: "szabot",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
