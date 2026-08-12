const About = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-dot-grid mask-fade pointer-events-none opacity-80" />
      <div className="relative container-page">
        <div className="grid md:grid-cols-[minmax(180px,240px)_1fr] gap-6 md:gap-12 lg:gap-16">
          {/* Left: Oversized Heading */}
          <div>
            <div className="card-brutal p-6 md:p-8 inline-block">
              <h2 className="heading-brutal text-3xl md:text-5xl">
                ABOUT
                <br />
                ME
              </h2>
            </div>
          </div>

          {/* Right: Content Card */}
          <div>
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
              <div className="space-y-6 text-lg leading-relaxed max-w-[68ch]">
                <p>
                  <span className="font-bold text-primary">Software Engineer</span> specializing in full-stack web platforms, secure backend systems, and database architecture.
                </p>
                <p>
                  Experienced in building <span className="font-bold">APIs</span>, configuring <span className="font-bold">containerized runtime environments</span>, and orchestrating <span className="font-bold">asynchronous workflows</span> to deliver scalable web applications.
                </p>
                <p className="font-bold text-xl">
                  Full-stack platforms, backend systems, and AI systems—built end to end.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t-[3px] border-foreground">
                <div>
                  <p className="text-3xl md:text-4xl font-black text-primary">4</p>
                  <p className="text-sm font-medium text-muted-foreground mt-1">PROJECTS SHIPPED</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-black">FULL<span className="text-primary">·</span>STACK</p>
                  <p className="text-sm font-medium text-muted-foreground mt-1">WEB + BACKEND + AI</p>
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
