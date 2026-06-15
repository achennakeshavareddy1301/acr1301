import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" }
  ];

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -9999, y: -9999, active: false });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const SPACING = 24;
    const BASE_RADIUS = 1;
    const MAX_RADIUS = 2.6;
    const INFLUENCE = 110;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const { x: mx, y: my, active } = mouseRef.current;
      for (let y = SPACING / 2; y < height; y += SPACING) {
        for (let x = SPACING / 2; x < width; x += SPACING) {
          let radius = BASE_RADIUS;
          let alpha = 0.08;
          if (active) {
            const dx = x - mx;
            const dy = y - my;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < INFLUENCE) {
              const t = 1 - dist / INFLUENCE;
              radius = BASE_RADIUS + (MAX_RADIUS - BASE_RADIUS) * t;
              alpha = 0.08 + 0.85 * t;
            }
          }
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(40, 20%, 96%, ${alpha})`;
          ctx.fill();
        }
      }
      rafRef.current = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };
    const onLeave = () => {
      mouseRef.current.active = false;
    };

    resize();
    rafRef.current = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseleave", onLeave);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <motion.footer
      ref={containerRef}
      initial={{ y: 80, opacity: 0, scale: 0.98 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="footer-stage relative bg-foreground text-background pt-24 pb-12 px-6 overflow-hidden"
    >
      {/* Top center semi-circle arch */}
      <div
        aria-hidden="true"
        className="footer-arch pointer-events-none absolute left-1/2 -translate-x-1/2 -top-[1px] z-10"
      >
        <svg width="220" height="110" viewBox="0 0 220 110" className="block">
          <defs>
            <linearGradient id="arch-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(224 100% 42%)" />
            </linearGradient>
          </defs>
          {/* Filled arch */}
          <path
            d="M0,0 L0,2 A110,110 0 0 0 220,2 L220,0 Z"
            fill="url(#arch-grad)"
          />
          {/* Outline stroke */}
          <path
            d="M0,2 A110,110 0 0 0 220,2"
            fill="none"
            stroke="hsl(var(--background))"
            strokeWidth="3"
          />
          {/* Inner decorative arc */}
          <path
            d="M30,2 A80,80 0 0 0 190,2"
            fill="none"
            stroke="hsl(var(--background) / 0.35)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          {/* Center dot */}
          <circle cx="110" cy="2" r="6" fill="hsl(var(--background))" />
          <circle cx="110" cy="2" r="2.5" fill="hsl(var(--primary))" />
        </svg>
      </div>

      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 w-full h-full"
        aria-hidden="true"
      />
      {/* Fading edges to focus dots behind content */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 40%, hsl(var(--foreground)) 90%)",
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
              className="w-full max-w-xs h-12 footer-glow"
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
                  <circle cx="1.2" cy="1.2" r="0.9" fill="hsl(var(--background))" />
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
    </motion.footer>
  );
};

export default Footer;
