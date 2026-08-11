import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { currentProjects, selectedProjects, type Project } from "@/data/profile";

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  }),
};

const statusStyle: Record<Project["status"], string> = {
  BUILDING: "bg-primary text-primary-foreground",
  LIVE: "bg-foreground text-background",
  SHIPPED: "bg-background text-foreground",
};

const ProjectArtifact = ({ project, i, featured }: { project: Project; i: number; featured?: boolean }) => {
  const reduce = useReducedMotion();

  return (
    <motion.article
      className="group border-[3px] border-foreground bg-card"
      variants={rowVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={i}
      style={reduce ? { opacity: 1, transform: "none" } : undefined}
    >
      {/* Top meta strip */}
      <div className="flex items-stretch border-b-[3px] border-foreground">
        <div className="px-4 py-2 border-r-[3px] border-foreground font-mono text-xs font-black tracking-widest">
          {project.index}
        </div>
        <div className="flex-1 px-4 py-2 flex items-center justify-between gap-3 min-w-0">
          <span className="text-[10px] sm:text-[11px] font-black tracking-[0.2em] uppercase text-foreground/50 truncate">
            {project.category}
          </span>
          <span
            className={`hidden sm:inline-block shrink-0 border-[2px] border-foreground px-2 py-0.5 text-[10px] font-black tracking-widest ${statusStyle[project.status]}`}
          >
            {project.status}
          </span>
        </div>
      </div>

      <div className={`grid ${featured ? "lg:grid-cols-[1.1fr_1fr]" : "md:grid-cols-[1fr_auto]"}`}>
        <div className="p-5 sm:p-7">
          <h3
            className={`uppercase tracking-tighter leading-[0.95] ${featured ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"} font-black break-words`}
          >
            {project.name}
          </h3>
          <p className="mt-3 text-base sm:text-lg font-medium max-w-prose">{project.summary}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="border-[2px] border-foreground px-2 py-0.5 text-[10px] sm:text-xs font-black tracking-wide uppercase bg-background"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className={`p-5 sm:p-7 border-t-[3px] ${featured ? "lg:border-t-0 lg:border-l-[3px]" : "md:border-t-0 md:border-l-[3px] md:w-[300px]"} border-foreground bg-secondary/60 flex flex-col justify-between gap-6`}>
          <div>
            <p className="text-[10px] font-black tracking-[0.2em] uppercase text-foreground/50 mb-2">
              Core Engineering
            </p>
            <p className="text-sm leading-relaxed text-foreground/80">{project.achievement}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal bg-background px-3 py-2 text-xs tracking-widest uppercase inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {l.label}
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={3} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const GroupHeader = ({ label, note }: { label: string; note: string }) => (
  <div className="flex items-end justify-between gap-4 border-b-[3px] border-foreground pb-3 mb-6">
    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">{label}</h3>
    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-foreground/50 text-right">
      {note}
    </span>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 bg-muted overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-blueprint pointer-events-none opacity-60" />
      <div className="relative max-w-5xl mx-auto">
        <div className="mb-14">
          <h2 className="heading-brutal text-3xl md:text-5xl mb-4">WORK INDEX</h2>
          <div className="w-24 h-[4px] bg-primary" />
        </div>

        <div className="mb-16">
          <GroupHeader label="Current / Active" note="AI systems in progress" />
          <div className="space-y-8">
            {currentProjects.map((p, i) => (
              <ProjectArtifact key={p.index} project={p} i={i} featured />
            ))}
          </div>
        </div>

        <div>
          <GroupHeader label="Selected Work" note="Shipped products" />
          <div className="space-y-6">
            {selectedProjects.map((p, i) => (
              <ProjectArtifact key={p.index} project={p} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
