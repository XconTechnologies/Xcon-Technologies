import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import XConLogo from "@/assets/xcon-logo.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 bg-white shadow-sm transition-transform duration-300 ${isScrolled ? "navbar-scroll" : ""}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src={XConLogo} alt="XCon Technologies" className="h-8 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-dark hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("industries")}
              className="text-gray-dark hover:text-primary transition-colors font-medium"
            >
              Industries
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-dark hover:text-primary transition-colors font-medium"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-dark hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-dark hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-dark hover:text-primary transition-colors font-medium text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("industries")}
                className="text-gray-dark hover:text-primary transition-colors font-medium text-left"
              >
                Industries
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-gray-dark hover:text-primary transition-colors font-medium text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-dark hover:text-primary transition-colors font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-dark hover:text-primary transition-colors font-medium text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors mt-4"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
