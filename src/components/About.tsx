const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
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
                  <p className="text-3xl md:text-4xl font-black">2025</p>
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
