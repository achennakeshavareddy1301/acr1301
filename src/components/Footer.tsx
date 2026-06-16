import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" }
  ];

  const footerLinks = [
    {
      title: "EXPLORE",
      links: [
        { label: "Home", href: "#" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ]
    },
    {
      title: "CONNECT",
      links: [
        { label: "GitHub", href: "https://github.com" },
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "LeetCode", href: "https://leetcode.com" },
        { label: "Email", href: "mailto:hello@example.com" },
      ]
    },
    {
      title: "STACK",
      links: [
        { label: "React", href: "#" },
        { label: "TypeScript", href: "#" },
        { label: "Python", href: "#" },
        { label: "TensorFlow", href: "#" },
      ]
    }
  ];

  return (
    <motion.footer
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative pt-24 pb-10 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(60 100% 96%) 0%, hsl(60 100% 96%) 45%, hsl(25 90% 88%) 85%, hsl(20 85% 82%) 100%)"
      }}
    >
      {/* Arch-shaped red glow at bottom center */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[140%] aspect-[2/1] rounded-t-full"
        style={{
          background: "radial-gradient(ellipse 80% 100% at 50% 100%, hsl(220 80% 55% / 0.30) 0%, hsl(210 85% 60% / 0.15) 45%, transparent 80%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Top row: Brand + Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <p className="text-2xl font-black tracking-tight text-foreground uppercase">
              ACR
            </p>
            <p className="mt-2 text-sm text-foreground/60 max-w-xs leading-relaxed">
              Building systems that learn. Software Engineer graduating 2026.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border-[2px] border-foreground/15 text-foreground/70 hover:border-foreground hover:text-foreground transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-black tracking-widest text-foreground/40 uppercase mb-4">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-foreground/40 tracking-wide">
            No templates. No fluff. Just systems.
          </p>
          <p className="text-xs text-foreground/40 tracking-wide">
            Built by ACR &middot; 2026
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
