export const LINKS = {
  github: "https://github.com/achennakeshavareddy1301",
  linkedin: "https://www.linkedin.com/in/ayyaluri-chenna-keshava-reddy-b9416a252/",
  leetcode: "https://leetcode.com/u/TXdwf8cuEe/",
  resume: "https://flowcv.com/resume/r1lb90vqpwe3",
} as const;

export interface Project {
  index: string;
  name: string;
  category: string;
  status: "BUILDING" | "SHIPPED" | "LIVE";
  summary: string;
  achievement: string;
  tech: string[];
  links: { label: string; href: string }[];
}

export const currentProjects: Project[] = [
  {
    index: "01",
    name: "PlantIQ",
    category: "AI-POWERED INDUSTRIAL KNOWLEDGE PLATFORM",
    status: "BUILDING",
    summary:
      "Ingests heterogeneous industrial documents — PDFs, images, spreadsheets — and answers natural-language queries with cited sources.",
    achievement:
      "RAG + knowledge graph pipeline with layout-aware ingestion and vision-LLM diagram descriptions; resolves cross-document references, entity aliases and revision conflicts.",
    tech: ["LangChain", "ChromaDB", "SQLite", "Gemini", "Python"],
    links: [{ label: "GitHub", href: "https://github.com/achennakeshavareddy1301/plantiq" }],
  },
  {
    index: "02",
    name: "Convene",
    category: "AI EVENT AGENT",
    status: "BUILDING",
    summary:
      "An agent-driven system for discovering, planning and coordinating event experiences.",
    achievement:
      "In active development — agent workflow and coordination layer being designed.",
    tech: ["AI Agents", "Full-Stack"],
    links: [{ label: "GitHub", href: "https://github.com/achennakeshavareddy1301" }],
  },
];

export const selectedProjects: Project[] = [
  {
    index: "03",
    name: "SpendIQ",
    category: "AI-POWERED UPI STATEMENT ANALYZER",
    status: "LIVE",
    summary:
      "Turns Paytm, PhonePe and Google Pay statements into structured spending insight for Indian users.",
    achievement:
      "Gemini 2.0 Flash with function calling for transaction analysis, real-time streaming responses and Indian merchant text parsing.",
    tech: ["React", "TypeScript", "Firebase"],
    links: [
      { label: "Live App", href: "https://spendiq-mvp-frontend.vercel.app/" },
      { label: "GitHub", href: "https://github.com/achennakeshavareddy1301" },
    ],
  },
  {
    index: "04",
    name: "Blaze",
    category: "AI FRONT-END APPLICATION BUILDER",
    status: "SHIPPED",
    summary:
      "Generates front-end applications from prompts inside isolated, multi-project workspaces.",
    achievement:
      "LLM code-generation workflows on asynchronous Inngest jobs with a full-stack type-safe architecture and containerized runtimes.",
    tech: ["Next.js", "Inngest", "Docker", "OpenAI", "Prisma"],
    links: [{ label: "GitHub", href: "https://github.com/achennakeshavareddy1301/blaze" }],
  },
  {
    index: "05",
    name: "AiGo",
    category: "AI TRAVEL PLANNER",
    status: "SHIPPED",
    summary:
      "Generates personalized itineraries from budget, preferences and group size.",
    achievement:
      "Itinerary planning logic over Google APIs with per-day activity scheduling and trip management.",
    tech: ["React", "Vite", "Firebase", "Google APIs"],
    links: [{ label: "GitHub", href: "https://github.com/achennakeshavareddy1301" }],
  },
];
