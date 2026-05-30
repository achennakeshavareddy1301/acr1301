import { ArrowDown, Mail } from "lucide-react";

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
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-20 overflow-hidden">
      {/* Editorial blueprint background — single soft grid, faded out */}
      <div aria-hidden className="absolute inset-0 bg-blueprint pointer-events-none opacity-60 [mask-image:linear-gradient(to_bottom,black_0%,black_55%,transparent_100%)]" />

      {/* Editorial frame — thin rules + index marker (intentional, not random) */}
      <div aria-hidden className="absolute top-24 left-0 right-0 h-px bg-foreground/15 hidden md:block" />
      <div aria-hidden className="absolute bottom-12 left-0 right-0 h-px bg-foreground/15 hidden md:block" />
      <div aria-hidden className="absolute top-24 bottom-12 left-6 w-px bg-foreground/15 hidden md:block" />
      <div aria-hidden className="absolute top-24 bottom-12 right-6 w-px bg-foreground/15 hidden md:block" />

      {/* Corner index labels — like a print layout */}
      <div className="absolute top-28 right-10 hidden md:flex items-center gap-3 text-[10px] font-bold tracking-[0.25em] text-foreground/60">
        <span className="w-8 h-px bg-foreground/40" />
        <span>PORTFOLIO / 2026</span>
      </div>
      <div className="absolute bottom-16 right-10 hidden md:block text-[10px] font-bold tracking-[0.25em] text-foreground/60">
        INDEX — 001
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Status Badge */}
        <div className="flex items-center gap-4 mb-8">
          <div className="badge-brutal bg-background">
            <span className="text-xs tracking-widest">STATUS:</span>
            <span className="text-primary ml-2 text-xs">AVAILABLE</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="heading-brutal mb-6">
          <span className="block">AYYALURI</span>
          <span className="block text-primary">CHENNAKESHAVA</span>
          <span className="block">REDDY</span>
        </h1>

        {/* Title */}
        <div className="border-l-[4px] border-primary pl-6 mb-8">
          <p className="text-xl md:text-2xl font-bold">
            SOFTWARE ENGINEER
          </p>
          <p className="text-lg text-muted-foreground font-medium mt-1">
            Full-Stack Development • AI Systems
          </p>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl font-medium max-w-xl mb-12">
          Building <span className="text-primary font-bold">AI-powered products</span> that actually ship.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={scrollToProjects}
            className="btn-brutal bg-foreground text-background px-8 py-4 text-sm tracking-wide flex items-center justify-center gap-3"
          >
            VIEW PROJECTS
            <ArrowDown className="w-4 h-4" />
          </button>

          <button
            onClick={scrollToContact}
            className="btn-brutal bg-background text-foreground px-8 py-4 text-sm tracking-wide flex items-center justify-center gap-3"
          >
            CONTACT ME
            <Mail className="w-4 h-4" />
          </button>
        </div>

        {/* Decorative Grid */}
        <div className="mt-20 flex gap-2">
          <div className="w-8 h-8 bg-primary border-[3px] border-foreground" />
          <div className="w-8 h-8 bg-foreground border-[3px] border-foreground" />
          <div className="w-8 h-8 bg-background border-[3px] border-foreground" />
          <div className="w-8 h-8 bg-muted border-[3px] border-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
