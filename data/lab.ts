export type LabArtifact = {
  id: string;
  tag: string;
  title: string;
  summary: string;
  /** Short stage list revealed on hover/focus. */
  stages: string[];
  /** Case study this artifact belongs to, if any. */
  project?: string;
  projectLabel?: string;
};

// Documented AI work only.
export const labArtifacts: LabArtifact[] = [
  {
    id: "ocr",
    tag: "OCR",
    title: "AI invoice OCR",
    summary: "AI-powered invoice OCR with GST-aware validation, built for OnlyMetric.",
    stages: ["Invoice", "AI OCR", "GST-aware validation"],
    project: "onlymetric",
    projectLabel: "OnlyMetric",
  },
  {
    id: "llm-layer",
    tag: "LLM",
    title: "Multi-provider LLM architecture",
    summary: "An LLM provider layer supporting five providers behind one integration point.",
    stages: ["OpenAI", "Anthropic Claude", "Google Gemini", "Ollama", "Z.ai"],
    project: "onlymetric",
    projectLabel: "OnlyMetric",
  },
  {
    id: "rag",
    tag: "RAG",
    title: "Timetable question answering",
    summary:
      "A retrieval-augmented generation assistant on the Google Gemini API that answers student timetable queries in real time.",
    stages: ["Excel / PDF timetables", "Python pipeline", "Intent detection", "Gemini API + RAG"],
    project: "szabot",
    projectLabel: "SZABOT",
  },
  {
    id: "tooling",
    tag: "Tooling",
    title: "AI tooling",
    summary:
      "AI development tooling in the skill set, alongside the LLM APIs used in the projects above.",
    stages: ["Claude Code", "GitHub Copilot", "Prompt engineering"],
  },
];
