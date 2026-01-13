import { ArrowDown, Code, ExternalLink } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* LeetCode Badge */}
        <div className="inline-flex items-center gap-2 badge-brutal bg-accent text-accent-foreground mb-8">
          <Code className="w-4 h-4" />
          <span>LeetCode Rating: 1831</span>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4">
          <span className="text-foreground">Ayyaluri</span>
          <br />
          <span className="text-primary">Chennakeshava</span>
          <br />
          <span className="text-foreground">Reddy</span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl font-bold text-foreground mt-6 mb-4">
          Software Engineer{" "}
          <span className="text-muted-foreground">|</span>{" "}
          <span className="text-primary">Full-Stack</span>{" "}
          <span className="text-muted-foreground">+</span>{" "}
          <span className="text-accent">AI Systems</span>
        </p>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground font-medium mt-6 mb-12 max-w-2xl mx-auto">
          Building{" "}
          <span className="text-accent font-bold">AI-powered products</span>{" "}
          that actually ship.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToProjects}
            className="btn-brutal bg-primary text-primary-foreground px-8 py-4 text-lg flex items-center gap-2"
          >
            <span>View Projects</span>
            <ArrowDown className="w-5 h-5" />
          </button>

          <button
            onClick={scrollToContact}
            className="btn-brutal bg-background text-foreground px-8 py-4 text-lg flex items-center gap-2"
          >
            <span>Contact Me</span>
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>

        {/* Decorative elements */}
        <div className="mt-16 flex justify-center gap-4">
          <div className="w-4 h-4 bg-primary border-2 border-foreground" />
          <div className="w-4 h-4 bg-accent border-2 border-foreground" />
          <div className="w-4 h-4 bg-foreground border-2 border-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
