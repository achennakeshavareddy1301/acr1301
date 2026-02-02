import { ExternalLink } from "lucide-react";

interface Project {
  index: string;
  title: string;
  subtitle: string;
  description: string[];
  tech: string[];
}

const projects: Project[] = [
  {
    index: "01",
    title: "AiGo",
    subtitle: "AI Travel Planner",
    description: [
      "AI-powered travel planner that generates personalized itineraries based on budget, preferences, and group size.",
      "Discover destinations, plan daily activities, and manage trips seamlessly."
    ],
    tech: ["React", "Vite", "Firebase", "Google APIs", "AI Planning Logic"]
  },
  {
    index: "02",
    title: "Blaze",
    subtitle: "Full-Stack Code Agent",
    description: [
      "A full-stack code agent platform focused on generating frontend code automatically.",
      "Designed to accelerate UI development and reduce repetitive engineering work."
    ],
    tech: ["Frontend Code Generation", "AI Agents", "Full-Stack Architecture"]
  },
  {
    index: "03",
    title: "SpendIQ",
    subtitle: "UPI Statement Analyzer",
    description: [
      "AI-powered financial insight tool for Indian users.",
      "Upload Paytm, PhonePe, or Google Pay PDF statements and get instant spending analysis and insights."
    ],
    tech: ["PDF Parsing", "AI Analytics", "FinTech Logic", "Indian UPI Systems"]
  },
  {
    index: "04",
    title: "AI Dermatology Assistant",
    subtitle: "Medical AI System",
    description: [
      "Analyzes a skin image along with brief symptoms to generate a structured and safe medication report, including dosage, precautions, and follow-up guidance."
    ],
    tech: ["Image Analysis", "Medical Safety Logic", "Structured AI Output"]
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="card-brutal p-6 md:p-8 group">
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {/* Project Number */}
        <div className="text-6xl md:text-8xl font-black text-muted-foreground/20 leading-none select-none">
          {project.index}
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-black">
                {project.title}
              </h3>
              <p className="text-primary font-bold mt-1">
                {project.subtitle}
              </p>
            </div>
            <button className="btn-brutal p-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>

          {/* Description */}
          <div className="space-y-2 mb-6">
            {project.description.map((line, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {line}
              </p>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span 
                key={tech} 
                className="badge-brutal bg-background text-xs tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-muted">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="heading-brutal text-3xl md:text-5xl mb-4">
            SELECTED PROJECTS
          </h2>
          <div className="w-24 h-[4px] bg-primary" />
        </div>

        {/* Projects Stack */}
        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
