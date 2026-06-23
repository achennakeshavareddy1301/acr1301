import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  ];

  const exploreLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const connectLinks = [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "LeetCode", href: "https://leetcode.com" },
    { label: "Email", href: "mailto:hello@example.com" },
  ];

  const stackTags = ["REACT", "TYPESCRIPT", "PYTHON", "TENSORFLOW"];

  return (
    <motion.footer
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-background px-4 md:px-6 pt-12 pb-8"
    >
      <div className="max-w-6xl mx-auto border-[3px] border-foreground bg-card flex flex-col md:flex-row">
        {/* Left Sidebar: Brand */}
        <div className="md:w-1/3 p-8 border-b-[3px] md:border-b-0 md:border-r-[3px] border-foreground flex flex-col justify-between gap-12">
          <div>
            <h2
              className="text-7xl md:text-8xl tracking-tighter leading-none text-foreground mb-4 uppercase"
              style={{ fontFamily: "'Archivo Black', 'Inter', sans-serif" }}
            >
              ACR
            </h2>
            <p className="text-sm md:text-base font-bold uppercase leading-tight max-w-[220px] tracking-tight">
              Software Engineer. Building systems that learn. Graduating 2026.
            </p>
          </div>
          <div className="flex gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-12 h-12 border-[3px] border-foreground bg-primary text-primary-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <link.icon className="w-5 h-5" strokeWidth={2.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Section: Columns + Bottom Bar */}
        <div className="flex-1 flex flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-3 flex-1">
            {/* Explore */}
            <div className="p-8 border-b-[3px] sm:border-b-0 sm:border-r-[3px] border-foreground">
              <h3 className="text-xs font-black uppercase tracking-widest text-foreground/40 mb-6">
                Explore
              </h3>
              <ul className="space-y-3">
                {exploreLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-black text-lg md:text-xl text-foreground hover:text-primary hover:underline underline-offset-4 decoration-[3px] uppercase tracking-tight"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="p-8 border-b-[3px] sm:border-b-0 sm:border-r-[3px] border-foreground">
              <h3 className="text-xs font-black uppercase tracking-widest text-foreground/40 mb-6">
                Connect
              </h3>
              <ul className="space-y-3">
                {connectLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-black text-lg md:text-xl text-foreground hover:text-primary hover:underline underline-offset-4 decoration-[3px] uppercase tracking-tight"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack */}
            <div className="p-8">
              <h3 className="text-xs font-black uppercase tracking-widest text-foreground/40 mb-6">
                Stack
              </h3>
              <ul className="flex flex-col items-start gap-2">
                {stackTags.map((tag) => (
                  <li
                    key={tag}
                    className="font-bold text-xs bg-foreground text-background px-2 py-1 tracking-widest"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="p-6 md:p-8 border-t-[3px] border-foreground flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="font-black uppercase text-xs md:text-sm tracking-tighter">
              No templates. No fluff. Just systems.
            </p>
            <span className="font-black text-xs md:text-sm bg-primary text-primary-foreground px-3 py-1.5 border-[3px] border-foreground uppercase tracking-wider">
              Built by ACR &middot; 2026
            </span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
