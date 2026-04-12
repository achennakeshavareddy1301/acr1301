import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CONTACT", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-[3px] border-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#" 
            className="font-black text-xl tracking-tight"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ACR<span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 font-bold text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://flowcv.com/resume/r1lb90vqpwe3"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 btn-brutal bg-primary text-primary-foreground px-4 py-2 text-sm inline-block"
            >
              HIRE ME
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
                className="block w-full text-left px-4 py-4 font-bold text-sm tracking-wide border-b-[2px] border-foreground hover:bg-foreground hover:text-background transition-colors"
              >
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
