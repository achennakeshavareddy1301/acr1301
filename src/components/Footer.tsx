import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" }
  ];

  return (
    <footer
      className="relative bg-foreground text-background py-12 px-6 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(hsl(var(--background) / 0.06) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        backgroundPosition: "0 0",
      }}
    >
      {/* Fading edges to focus dots behind content */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 30%, hsl(var(--foreground)) 80%)",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-5xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left: Name */}
          <div>
            <p className="font-black text-lg">
              Built by <span className="text-primary">ACR</span>
            </p>
          </div>

          {/* Center: Text shaped from dots */}
          <div className="flex justify-center items-center">
            <svg
              viewBox="0 0 400 60"
              className="w-full max-w-xs h-12"
              role="img"
              aria-label="SDE • AI Engineer"
            >
              <defs>
                <pattern
                  id="footer-dots"
                  x="0"
                  y="0"
                  width="5"
                  height="5"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="1.2" cy="1.2" r="0.7" fill="hsl(var(--background) / 0.85)" />
                </pattern>
                <mask id="footer-text-mask">
                  <rect width="100%" height="100%" fill="black" />
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="central"
                    textAnchor="middle"
                    fontFamily="Inter, system-ui, sans-serif"
                    fontWeight="900"
                    fontSize="42"
                    letterSpacing="1"
                    fill="white"
                  >
                    SDE • AI ENGINEER
                  </text>
                </mask>
              </defs>
              <rect
                width="100%"
                height="100%"
                fill="url(#footer-dots)"
                mask="url(#footer-text-mask)"
              />
            </svg>
          </div>

          {/* Right: Social Links */}
          <div className="flex justify-end gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-[2px] border-background hover:bg-background hover:text-foreground transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-[2px] border-background/20 mt-10 pt-6">
          <p className="text-center text-xs text-background/50 tracking-wide">
            No templates. No fluff. Just systems.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
