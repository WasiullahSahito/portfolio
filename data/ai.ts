export type AiPipelineStage = {
  label: string;
  description: string;
};

export const aiPipeline: AiPipelineStage[] = [
  { label: "User Input", description: "A question or document enters the system." },
  { label: "AI Model", description: "Routed to the right LLM provider behind a shared interface." },
  { label: "RAG Pipeline", description: "Retrieval grounds the model in real, structured data." },
  { label: "Knowledge Base", description: "Structured source data — timetables, invoices, records." },
  { label: "Response", description: "A grounded answer, returned in real time." },
];

export type AiProvider = {
  name: string;
  role: string;
};

export const aiProviders: AiProvider[] = [
  { name: "OpenAI", role: "GPT models for invoice OCR extraction" },
  { name: "Anthropic Claude", role: "Structured reasoning over extracted data" },
  { name: "Google Gemini", role: "RAG-grounded query answering (SZABOT)" },
  { name: "Ollama", role: "Local model fallback for offline processing" },
  { name: "Z.ai", role: "Additional provider behind the same interface" },
];

export const aiHighlights = [
  {
    project: "OnlyMetric",
    detail:
      "Provider-agnostic layer (OpenAI, Claude, Gemini, Ollama, Z.ai) behind Gemini-powered invoice OCR and a master insight engine that batch-generates ingredient/recipe insights — every AI output lands in a human review screen before it's trusted.",
  },
  {
    project: "SZABOT",
    detail:
      "Built a RAG pipeline on Google Gemini that parses Excel/PDF timetables into structured data and answers student queries in real time, with intent detection routing across 3 categories.",
  },
];
