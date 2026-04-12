import { ExternalLink } from "lucide-react";
import { motion, type Variants, type Easing } from "framer-motion";

interface Project {
  index: string;
  title: string;
  subtitle: string;
  description: string[];
  tech: string[];
  github: string;
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
    tech: ["React", "Vite", "Firebase", "Google APIs", "AI Planning Logic"],
    github: "https://github.com/achennakeshavareddy1301"
  },
  {
    index: "02",
    title: "Blaze",
    subtitle: "Full-Stack Code Agent",
    description: [
      "A full-stack code agent platform focused on generating frontend code automatically.",
      "Designed to accelerate UI development and reduce repetitive engineering work."
    ],
    tech: ["Frontend Code Generation", "AI Agents", "Full-Stack Architecture"],
    github: "https://github.com/achennakeshavareddy1301"
  },
  {
    index: "03",
    title: "SpendIQ",
    subtitle: "UPI Statement Analyzer",
    description: [
      "AI-powered financial insight tool for Indian users.",
      "Upload Paytm, PhonePe, or Google Pay PDF statements and get instant spending analysis and insights."
    ],
    tech: ["PDF Parsing", "AI Analytics", "FinTech Logic", "Indian UPI Systems"],
    github: "https://github.com/achennakeshavareddy1301"
  },
  {
    index: "04",
    title: "AI Dermatology Assistant",
    subtitle: "Medical AI System",
    description: [
      "Analyzes a skin image along with brief symptoms to generate a structured and safe medication report, including dosage, precautions, and follow-up guidance."
    ],
    tech: ["Image Analysis", "Medical Safety Logic", "Structured AI Output"],
    github: "https://github.com/achennakeshavareddy1301"
  }
];

const easeOut: Easing = [0.25, 0.1, 0.25, 1];

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -60,
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: easeOut
    }
  })
};

const numberVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15 + 0.2,
      duration: 0.4,
      ease: easeOut
    }
  })
};

const techVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3
    }
  })
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div 
      className="card-brutal p-6 md:p-8 group"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
      whileHover={{ x: 4, y: 4 }}
      transition={{ duration: 0.15 }}
    >
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {/* Project Number */}
        <motion.div 
          className="text-6xl md:text-8xl font-black text-muted-foreground/20 leading-none select-none"
          variants={numberVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={index}
        >
          {project.index}
        </motion.div>

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
            <motion.a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutal p-3 opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
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
          <motion.div 
            className="flex flex-wrap gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {project.tech.map((tech, i) => (
              <motion.span 
                key={tech} 
                className="badge-brutal bg-background text-xs tracking-wide"
                variants={techVariants}
                custom={i}
                whileHover={{ y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: easeOut }
  }
};

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: { 
    scaleX: 1,
    transition: { duration: 0.6, delay: 0.3, ease: easeOut }
  }
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-muted">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="heading-brutal text-3xl md:text-5xl mb-4"
            variants={headerVariants}
          >
            SELECTED PROJECTS
          </motion.h2>
          <motion.div 
            className="w-24 h-[4px] bg-primary origin-left"
            variants={lineVariants}
          />
        </motion.div>

        {/* Projects Stack */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
