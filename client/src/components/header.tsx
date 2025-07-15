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
            <img src={XConLogo} alt="XCon" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-primary transition-colors font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </button>
            
            {/* Services Mega Menu */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
                className="text-white hover:text-primary transition-colors font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full flex items-center space-x-1"
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {/* Mega Menu Dropdown */}
              {isMegaMenuOpen && (
                <div 
                  className="absolute top-full left-[-200px] mt-2 w-[1000px] bg-white rounded-lg shadow-2xl z-50 p-8"
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                  onMouseLeave={() => setIsMegaMenuOpen(false)}
                >
                  <div className="grid grid-cols-3 gap-8">
                    {/* Column 1 */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Mobile App Development</h3>
                        <ul className="space-y-2">
                          <li>
                            <a href="/services/mobile-app-development" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              iOS App Development
                            </a>
                          </li>
                          <li>
                            <a href="/services/mobile-app-development" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Android App Development
                            </a>
                          </li>
                          <li>
                            <a href="/services/mobile-app-development" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Cross Platform App Development
                            </a>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Game Development</h3>
                        <ul className="space-y-2">
                          <li>
                            <a href="/services/game-development" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              2D Game Development
                            </a>
                          </li>
                          <li>
                            <a href="/services/game-development" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              3D Game Development
                            </a>
                          </li>
                          <li>
                            <a href="/services/game-development" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Web3 Game Development
                            </a>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Staff Augmentation</h3>
                        <ul className="space-y-2">
                          <li>
                            <a href="/services/staff-augmentation" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Hire Android App Developer
                            </a>
                          </li>
                          <li>
                            <a href="/services/staff-augmentation" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Hire iOS App Developer
                            </a>
                          </li>
                          <li>
                            <a href="/services/staff-augmentation" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Hire Node.js Developer
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    {/* Column 2 */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Custom Software Development</h3>
                        <ul className="space-y-2">
                          <li>
                            <a href="/services/custom-software-development" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              ERP Solution
                            </a>
                          </li>
                          <li>
                            <a href="/services/custom-software-development" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              CRM Software
                            </a>
                          </li>
                          <li>
                            <a href="/services/custom-software-development" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Enterprise Software
                            </a>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Web Development</h3>
                        <ul className="space-y-2">
                          <li>
                            <a href="/services/web-development" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Frontend Development
                            </a>
                          </li>
                          <li>
                            <a href="/services/web-development" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Backend Development
                            </a>
                          </li>
                          <li>
                            <a href="/services/web-development" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Full Stack Development
                            </a>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Artificial Intelligence</h3>
                        <ul className="space-y-2">
                          <li>
                            <a href="/services/artificial-intelligence" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Machine Learning
                            </a>
                          </li>
                          <li>
                            <a href="/services/artificial-intelligence" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Natural Language Processing
                            </a>
                          </li>
                          <li>
                            <a href="/services/artificial-intelligence" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Computer Vision
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    {/* Column 3 */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Blockchain Development</h3>
                        <ul className="space-y-2">
                          <li>
                            <a href="/services/blockchain-development" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Smart Contract Development
                            </a>
                          </li>
                          <li>
                            <a href="/services/blockchain-development" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              DeFi Solutions
                            </a>
                          </li>
                          <li>
                            <a href="/services/blockchain-development" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              NFT Development
                            </a>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Cloud Services</h3>
                        <ul className="space-y-2">
                          <li>
                            <a href="/services/cloud-services" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Cloud Application Development
                            </a>
                          </li>
                          <li>
                            <a href="/services/cloud-services" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Cloud Migration
                            </a>
                          </li>
                          <li>
                            <a href="/services/cloud-services" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Cloud Support & Maintenance
                            </a>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Digital Marketing Services</h3>
                        <ul className="space-y-2">
                          <li>
                            <a href="/services/digital-marketing" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Social Media Marketing
                            </a>
                          </li>
                          <li>
                            <a href="/services/digital-marketing" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Search Engine Marketing
                            </a>
                          </li>
                          <li>
                            <a href="/services/digital-marketing" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Search Engine Optimization
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-white hover:text-primary transition-colors font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Portfolio
            </button>
            <Link href="/career">
              <button className="text-white hover:text-primary transition-colors font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
                Career
              </button>
            </Link>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-primary transition-colors font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-primary transition-colors font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </button>
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
          <div className="lg:hidden border-t border-gray-600 bg-black/90 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white hover:text-primary transition-colors font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-white hover:text-primary transition-colors font-medium text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-white hover:text-primary transition-colors font-medium text-left"
              >
                Portfolio
              </button>
              <Link href="/career">
                <button className="text-white hover:text-primary transition-colors font-medium text-left">
                  Career
                </button>
              </Link>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-primary transition-colors font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-primary transition-colors font-medium text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-medium transition-colors mt-4 uppercase text-sm"
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