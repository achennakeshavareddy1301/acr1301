import { Github, Linkedin, Code2, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { LINKS } from "@/data/profile";

const Footer = () => {
  const socials = [
    { icon: Github, href: LINKS.github, label: "GitHub" },
    { icon: Linkedin, href: LINKS.linkedin, label: "LinkedIn" },
    { icon: Code2, href: LINKS.leetcode, label: "LeetCode" },
  ];

  const navLinks = [
    { label: "About", href: "#about", num: "01" },
    { label: "Projects", href: "#projects", num: "02" },
    { label: "Contact", href: "#contact", num: "03" },
    { label: "Resume", href: LINKS.resume, num: "04", external: true },
  ];

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <motion.footer
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-background px-4 sm:px-6 pt-16 pb-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* CTA Row */}
        <div className="border-[3px] border-foreground bg-background">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto]">
            <div className="p-6 sm:p-10 md:p-12 border-b-[3px] md:border-b-0 md:border-r-[3px] border-foreground">
              <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] text-foreground/50 mb-4">
                — LET'S BUILD
              </p>
              <h2
                className="text-4xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tighter uppercase"
                style={{ fontFamily: "'Archivo Black', 'Inter', sans-serif" }}
              >
                Have an idea?
                <br />
                <span className="text-primary">Ship it.</span>
              </h2>
            </div>
            <a
              href="#contact"
              className="group bg-primary text-primary-foreground flex md:flex-col items-center justify-between md:justify-center p-6 sm:p-8 md:w-48 gap-4"
            >
              <span className="font-black text-sm sm:text-base tracking-widest uppercase">
                Say Hello
              </span>
              <ArrowUpRight
                className="w-8 h-8 sm:w-10 sm:h-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                strokeWidth={2.5}
              />
            </a>
          </div>

          {/* Nav + Socials */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] border-t-[3px] border-foreground">
            <nav className="flex flex-wrap divide-x-[3px] divide-foreground border-b-[3px] md:border-b-0 md:border-r-[3px] border-foreground">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="flex-1 min-w-[120px] px-4 sm:px-6 py-5 flex items-center gap-3 hover:bg-primary hover:text-primary-foreground transition-colors group"
                >
                  <span className="text-[10px] font-mono opacity-40 group-hover:opacity-100">
                    {link.num}
                  </span>
                  <span className="font-black text-sm sm:text-base uppercase tracking-tight">
                    {link.label}
                  </span>
                </a>
              ))}
            </nav>
            <div className="flex divide-x-[3px] divide-foreground">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-16 sm:w-20 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                >
                  <s.icon className="w-5 h-5" strokeWidth={2.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Signature Bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-1">
          <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest text-foreground/60">
            <span className="w-2 h-2 bg-primary animate-pulse" />
            <span>© 2026 · Chennakeshava Reddy</span>
          </div>
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest hover:text-primary transition-colors"
          >
            Back to top
            <span className="inline-block rotate-[-90deg]">→</span>
          </button>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
