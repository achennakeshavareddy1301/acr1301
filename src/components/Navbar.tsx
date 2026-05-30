import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { num: "01", label: "ABOUT", href: "#about" },
    { num: "02", label: "PROJECTS", href: "#projects" },
    { num: "03", label: "CONTACT", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b-[3px] border-foreground">
      {/* Top utility strip */}
      <div className="hidden md:flex items-center justify-between px-6 h-6 border-b border-foreground/15 text-[10px] font-bold tracking-[0.25em] text-foreground/60">
        <span>HYDERABAD, IN</span>
        <span>AVAILABLE FOR FULL-TIME · 2026</span>
        <span>{time}</span>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo block */}
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-3"
          >
            <span className="w-8 h-8 border-[3px] border-foreground bg-primary group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-transform" />
            <span className="flex flex-col leading-none">
              <span className="font-black text-base tracking-tight">ACR<span className="text-primary">.</span></span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-foreground/60 mt-1">CHENNAKESHAVA</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center divide-x divide-foreground/20 border-x border-foreground/20">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="group relative px-5 py-2 flex items-center gap-2 font-bold text-sm tracking-wide hover:text-primary transition-colors"
                >
                  <span className="text-[10px] text-foreground/40 group-hover:text-primary transition-colors">{link.num}</span>
                  <span>{link.label}</span>
                  <span className="absolute left-5 right-5 bottom-1 h-[2px] bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
                </button>
              ))}
            </div>
            <a
              href="https://flowcv.com/resume/r1lb90vqpwe3"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 btn-brutal bg-primary text-primary-foreground px-4 py-2 text-sm inline-flex items-center gap-2"
            >
              HIRE ME
              <span className="w-1.5 h-1.5 bg-primary-foreground animate-pulse" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 border-[3px] border-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t-[3px] border-foreground">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="flex items-center gap-3 w-full text-left px-4 py-4 font-bold text-sm tracking-wide border-b-[2px] border-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                <span className="text-[10px] opacity-50">{link.num}</span>
                {link.label}
              </button>
            ))}
            <a
              href="https://flowcv.com/resume/r1lb90vqpwe3"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left px-4 py-4 font-bold text-sm tracking-wide bg-primary text-primary-foreground"
            >
              HIRE ME
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
