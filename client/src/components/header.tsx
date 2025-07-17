import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import QuoteModal from "@/components/quote-modal";
import XConLogo from "@assets/Light-Logo.5ba91110-2048x403_1752305014932.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

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
    <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24 mt-2">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <img src={XConLogo} alt="XCon" className="h-10 w-auto cursor-pointer" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/">
              <button className="text-white hover:text-primary transition-colors font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
                Home
              </button>
            </Link>
            
            {/* Services Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <Link href="/services">
                <span className="text-white hover:text-primary transition-colors font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full flex items-center space-x-1 cursor-pointer">
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4" />
                </span>
              </Link>
              
              {/* Mega Menu Dropdown */}
              {isMegaMenuOpen && (
                <div 
                  className="fixed top-[104px] left-0 w-full bg-white shadow-2xl z-50 border-t border-gray-200"
                >
                  <div className="max-w-[1440px] mx-auto px-8 py-8">
                    <div className="grid grid-cols-3 gap-12">
                      {/* Column 1 - Core Services */}
                      <div>
                        <div className="flex items-center mb-6">
                          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-sm">CS</span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800">Core Services</h3>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <a href="/services/web-development" target="_blank" className="block text-primary hover:text-primary/80 transition-colors font-medium">
                              ▶ Web Development
                            </a>
                            <p className="text-sm text-gray-500 mt-1">Frontend, Backend & Full-stack solutions</p>
                          </div>
                          <div>
                            <a href="/services/software-development" target="_blank" className="block text-primary hover:text-primary/80 transition-colors font-medium">
                              ▶ Software Development
                            </a>
                            <p className="text-sm text-gray-500 mt-1">Custom enterprise solutions</p>
                          </div>
                          <div>
                            <a href="/services/app-development" target="_blank" className="block text-primary hover:text-primary/80 transition-colors font-medium">
                              ▶ App Development
                            </a>
                            <p className="text-sm text-gray-500 mt-1">Mobile & web applications</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Column 2 - Specialized Support */}
                      <div>
                        <div className="flex items-center mb-6">
                          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-sm">SS</span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800">Specialized Support</h3>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <a href="/services/data-engineering" target="_blank" className="block text-primary hover:text-primary/80 transition-colors font-medium">
                              ▶ Data Engineering
                            </a>
                            <p className="text-sm text-gray-500 mt-1">Data pipelines & analytics solutions</p>
                          </div>
                          <div>
                            <a href="/services/cloud-engineering" target="_blank" className="block text-primary hover:text-primary/80 transition-colors font-medium">
                              ▶ Cloud Engineering
                            </a>
                            <p className="text-sm text-gray-500 mt-1">Cloud infrastructure & deployment</p>
                          </div>
                          <div>
                            <a href="/services/mvp-development" target="_blank" className="block text-primary hover:text-primary/80 transition-colors font-medium">
                              ▶ MVP Development
                            </a>
                            <p className="text-sm text-gray-500 mt-1">Minimum viable product solutions</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Column 3 - Additional Services */}
                      <div>
                        <div className="flex items-center mb-6">
                          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-sm">AS</span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800">Additional Services</h3>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <a href="/services/devops" target="_blank" className="block text-primary hover:text-primary/80 transition-colors font-medium">
                              ▶ DevOps
                            </a>
                            <p className="text-sm text-gray-500 mt-1">CI/CD & infrastructure automation</p>
                          </div>
                          <div>
                            <a href="/services/qa-testing" target="_blank" className="block text-primary hover:text-primary/80 transition-colors font-medium">
                              ▶ QA (Quality Assurance) Testing
                            </a>
                            <p className="text-sm text-gray-500 mt-1">Comprehensive testing solutions</p>
                          </div>
                          <div>
                            <a href="/services/it-consultation" target="_blank" className="block text-primary hover:text-primary/80 transition-colors font-medium">
                              ▶ IT Consultation
                            </a>
                            <p className="text-sm text-gray-500 mt-1">Strategic technology guidance</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/portfolio">
              <button className="text-white hover:text-primary transition-colors font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
                Portfolio
              </button>
            </Link>
            <Link href="/career">
              <button className="text-white hover:text-primary transition-colors font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
                Career
              </button>
            </Link>
            <Link href="/about">
              <button className="text-white hover:text-primary transition-colors font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
                About
              </button>
            </Link>
            <Link href="/contact">
              <button className="text-white hover:text-primary transition-colors font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
                Contact
              </button>
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-medium transition-colors uppercase text-sm"
            >
              GET A QUOTE
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-600 bg-black/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              <Link href="/">
                <button className="text-white hover:text-primary transition-colors font-medium text-left py-2">
                  Home
                </button>
              </Link>
              <button
                onClick={() => scrollToSection("services")}
                className="text-white hover:text-primary transition-colors font-medium text-left py-2"
              >
                Services
              </button>
              <Link href="/portfolio">
                <button className="text-white hover:text-primary transition-colors font-medium text-left py-2">
                  Portfolio
                </button>
              </Link>
              <Link href="/career">
                <button className="text-white hover:text-primary transition-colors font-medium text-left py-2">
                  Career
                </button>
              </Link>
              <Link href="/about">
                <button className="text-white hover:text-primary transition-colors font-medium text-left py-2">
                  About
                </button>
              </Link>
              <Link href="/contact">
                <button className="text-white hover:text-primary transition-colors font-medium text-left py-2">
                  Contact
                </button>
              </Link>
              <Button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-medium transition-colors mt-4 uppercase text-sm w-full"
              >
                GET A QUOTE
              </Button>
            </nav>
          </div>
        )}
      </div>
      
      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </header>
  );
}