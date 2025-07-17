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
                          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-sm">CS</span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800">Core Services</h3>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <a href="/services/mobile-app-development" target="_blank" className="block text-blue-600 hover:text-primary transition-colors font-medium">
                              ➤ Mobile App Development
                            </a>
                            <p className="text-sm text-gray-500 mt-1">iOS, Android & Cross-platform apps</p>
                          </div>
                          <div>
                            <a href="/services/web-development" target="_blank" className="block text-blue-600 hover:text-primary transition-colors font-medium">
                              ➤ Web Development
                            </a>
                            <p className="text-sm text-gray-500 mt-1">Frontend, Backend & Full-stack solutions</p>
                          </div>
                          <div>
                            <a href="/services/custom-software-development" target="_blank" className="block text-blue-600 hover:text-primary transition-colors font-medium">
                              ➤ Custom Software Development
                            </a>
                            <p className="text-sm text-gray-500 mt-1">Enterprise & SaaS solutions</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Column 2 - Specialized Support */}
                      <div>
                        <div className="flex items-center mb-6">
                          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-sm">SS</span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800">Specialized Support</h3>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <a href="/services/cloud-services" target="_blank" className="block text-green-600 hover:text-primary transition-colors font-medium">
                              ➤ Cloud Services
                            </a>
                            <p className="text-sm text-gray-500 mt-1">AWS, Azure & Google Cloud solutions</p>
                          </div>
                          <div>
                            <a href="/services/artificial-intelligence" target="_blank" className="block text-green-600 hover:text-primary transition-colors font-medium">
                              ➤ AI & Machine Learning
                            </a>
                            <p className="text-sm text-gray-500 mt-1">ML models & AI-powered solutions</p>
                          </div>
                          <div>
                            <a href="/services/blockchain-development" target="_blank" className="block text-green-600 hover:text-primary transition-colors font-medium">
                              ➤ Blockchain Development
                            </a>
                            <p className="text-sm text-gray-500 mt-1">Smart contracts & DeFi solutions</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Column 3 - End-to-End Support */}
                      <div>
                        <div className="bg-gradient-to-br from-primary to-primary/80 p-6 rounded-lg text-white h-fit">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h3 className="text-lg font-bold">End-to-End Support</h3>
                          </div>
                          <p className="text-white/90 mb-4">
                            From consultation to deployment, we provide comprehensive technology solutions
                          </p>
                          <div className="mb-6">
                            <button 
                              onClick={() => setIsQuoteModalOpen(true)}
                              className="bg-white text-primary px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                            >
                              Get Started →
                            </button>
                          </div>
                        </div>
                        
                        {/* Contact Info */}
                        <div className="mt-4">
                          <h4 className="font-semibold text-gray-800 mb-2">💬 Need Help?</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center text-gray-600">
                              <span className="w-4 h-4 mr-2">📞</span>
                              <a href="tel:+15133024718" className="hover:text-primary transition-colors">+1 (513) 302-4718</a>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <span className="w-4 h-4 mr-2">✉️</span>
                              <a href="mailto:askforquote@xcontechnologies.com" className="hover:text-primary transition-colors">askforquote@xcontechnologies.com</a>
                            </div>
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