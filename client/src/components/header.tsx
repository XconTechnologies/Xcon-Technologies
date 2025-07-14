import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import XConLogo from "@assets/Light-Logo.5ba91110-2048x403_1752305014932.png";
import QuoteModal from "./quote-modal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isIndustriesMegaMenuOpen, setIsIndustriesMegaMenuOpen] = useState(false);
  const [isTechnologiesMegaMenuOpen, setIsTechnologiesMegaMenuOpen] = useState(false);

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
            <div className="text-white font-bold text-2xl">
              <span className="text-primary">X</span>CON
            </div>
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
                              CRM Solution
                            </a>
                          </li>
                          <li>
                            <a href="/services/custom-software-development" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              CMS Solution
                            </a>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Artificial Intelligence</h3>
                        <ul className="space-y-2">
                          <li>
                            <a href="/services/artificial-intelligence" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Generative AI
                            </a>
                          </li>
                          <li>
                            <a href="/services/artificial-intelligence" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Natural Language Processing
                            </a>
                          </li>
                          <li>
                            <a href="/services/artificial-intelligence" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              AI Agent Development
                            </a>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Blockchain Development</h3>
                        <ul className="space-y-2">
                          <li>
                            <a href="/services/blockchain-development" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Metaverse Development
                            </a>
                          </li>
                          <li>
                            <a href="/services/blockchain-development" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              NFT Development
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    {/* Column 3 */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Web Development</h3>
                        <ul className="space-y-2">
                          <li>
                            <a href="/services/web-development" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Ecommerce Website Development
                            </a>
                          </li>
                          <li>
                            <a href="/services/web-development" target="_blank" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Web Portals
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
            
            {/* Industries Mega Menu */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsIndustriesMegaMenuOpen(true)}
                onMouseLeave={() => setIsIndustriesMegaMenuOpen(false)}
                className="text-white hover:text-primary transition-colors font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full flex items-center space-x-1"
              >
                <span>Industries</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {/* Industries Mega Menu Dropdown */}
              {isIndustriesMegaMenuOpen && (
                <div 
                  className="absolute top-full left-[-300px] mt-2 w-[800px] bg-white rounded-lg shadow-2xl z-50 p-8"
                  onMouseEnter={() => setIsIndustriesMegaMenuOpen(true)}
                  onMouseLeave={() => setIsIndustriesMegaMenuOpen(false)}
                >
                  <div className="grid grid-cols-3 gap-8">
                    {/* Column 1 */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Healthcare</h3>
                        <ul className="space-y-2">
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Telemedicine Apps
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Electronic Health Records
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Medical Device Integration
                            </a>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Finance</h3>
                        <ul className="space-y-2">
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              FinTech Solutions
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Banking Apps
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Investment Platforms
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    {/* Column 2 */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Education</h3>
                        <ul className="space-y-2">
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              E-Learning Platforms
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Learning Management Systems
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Educational Apps
                            </a>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">E-commerce</h3>
                        <ul className="space-y-2">
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Online Marketplaces
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Shopping Cart Solutions
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Payment Gateways
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    {/* Column 3 */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Real Estate</h3>
                        <ul className="space-y-2">
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Property Management
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Real Estate CRM
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Virtual Tours
                            </a>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Logistics</h3>
                        <ul className="space-y-2">
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Supply Chain Management
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Fleet Management
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Warehouse Solutions
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Technologies Mega Menu */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsTechnologiesMegaMenuOpen(true)}
                onMouseLeave={() => setIsTechnologiesMegaMenuOpen(false)}
                className="text-white hover:text-primary transition-colors font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full flex items-center space-x-1"
              >
                <span>Technologies</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {/* Technologies Mega Menu Dropdown */}
              {isTechnologiesMegaMenuOpen && (
                <div 
                  className="absolute top-full left-[-400px] mt-2 w-[800px] bg-white rounded-lg shadow-2xl z-50 p-8"
                  onMouseEnter={() => setIsTechnologiesMegaMenuOpen(true)}
                  onMouseLeave={() => setIsTechnologiesMegaMenuOpen(false)}
                >
                  <div className="grid grid-cols-3 gap-8">
                    {/* Column 1 - Languages */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Languages</h3>
                        <ul className="space-y-2">
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              .Net
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              HTML5
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Java
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Node.js
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              PHP
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Python
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    {/* Column 2 - Frameworks */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Frameworks</h3>
                        <ul className="space-y-2">
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              React
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Angular
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Vue.js
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Laravel
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Django
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Spring Boot
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    {/* Column 3 - Platforms */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Platforms</h3>
                        <ul className="space-y-2">
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Azure
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              GCP
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Oracle
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              SAP
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              AWS
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                              Kubernetes
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
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-primary transition-colors font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Insights
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
                onClick={() => scrollToSection("industries")}
                className="text-white hover:text-primary transition-colors font-medium text-left"
              >
                Industries
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-white hover:text-primary transition-colors font-medium text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-primary transition-colors font-medium text-left"
              >
                Insights
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-primary transition-colors font-medium text-left"
              >
                Technologies
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
