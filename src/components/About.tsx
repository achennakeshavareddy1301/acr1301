const About = () => {
  return (
    <section id="about" className="relative py-20 px-6 overflow-hidden">
      {/* Technical schematic background — matches Hero */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.09]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "8px 8px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
        }}
      />

      {/* Draft schematic circle — bottom left mirror of Hero */}
      <svg
        aria-hidden
        className="absolute -bottom-[10%] -left-[5%] w-[40%] text-primary opacity-[0.06] pointer-events-none"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.4" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.2" />
        <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.2" />
        <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.2" />
        <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.2" />
      </svg>

      {/* Reference annotation — top right */}
      <div
        aria-hidden
        className="absolute top-10 right-10 hidden md:block text-[10px] font-mono opacity-30 uppercase tracking-tighter leading-snug text-right"
      >
        REF: 04-B // SECTION 02
        <br />
        ABOUT — SYSTEM PROFILE
      </div>

      {/* Editorial frame rules */}
      <div aria-hidden className="absolute top-12 left-0 right-0 h-px bg-foreground/15 hidden md:block" />
      <div aria-hidden className="absolute bottom-12 left-0 right-0 h-px bg-foreground/15 hidden md:block" />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          {/* Left: Oversized Heading */}
          <div className="md:col-span-4">
            <div className="card-brutal p-6 md:p-8 inline-block">
              <h2 className="heading-brutal text-3xl md:text-5xl">
                ABOUT
                <br />
                ME
              </h2>
            </div>
          </div>

          {/* Right: Content Card - Slightly Offset */}
          <div className="md:col-span-8 md:mt-8">
            <div className="card-brutal p-6 md:p-10">
              {/* Status Labels */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="badge-brutal bg-primary text-primary-foreground">
                  <span className="text-xs tracking-widest">STATUS: BUILDING</span>
                </div>
                <div className="badge-brutal bg-background">
                  <span className="text-xs tracking-widest">FOCUS: AI + FULL STACK</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  I'm a final-year B.Tech student and software developer focused on building AI-powered, real-world products.
                </p>
                <p>
                  My work sits at the intersection of <span className="font-bold text-primary">AI systems</span>, <span className="font-bold">full-stack engineering</span>, and <span className="font-bold">product design</span>. I care about performance, clarity, and shipping things that actually get used.
                </p>
                <p className="font-bold text-xl">
                  I design, build, and iterate—fast.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t-[3px] border-foreground">
                <div>
                  <p className="text-3xl md:text-4xl font-black text-primary">4+</p>
                  <p className="text-sm font-medium text-muted-foreground mt-1">PROJECTS SHIPPED</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-black">AI</p>
                  <p className="text-sm font-medium text-muted-foreground mt-1">SYSTEMS BUILT</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-black">2026</p>
                  <p className="text-sm font-medium text-muted-foreground mt-1">GRADUATING</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
