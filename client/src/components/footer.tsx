import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import XConLogo from "@assets/Xcon Logo_1752305014933.png";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={XConLogo} alt="XCon" className="h-12 w-auto" />
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              At XCon Technologies, we're more than just a software company in the US. We are your partners in innovation. Let's build the future together with cutting-edge IT solutions according to your business requirements. Contact us today to transform your software development ideas into reality!
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-800">+15133024718</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-800">askforquote@xcontechnologies.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-gray-800">Ohio City, USA</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 text-white p-2 rounded-full hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 text-white p-2 rounded-full hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 text-white p-2 rounded-full hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Middle Column - Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800">Services</h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-primary transition-colors">Software Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mobile App Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Data Engineering</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">SaaS & PaaS Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">MVP Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">DevOps Development & Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">QA (Quality Assurance) Testing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">IT Consultation</a></li>
            </ul>
          </div>

          {/* Right Column - Company Links */}
          <div className="space-y-6">
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms Of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
            </ul>
            
            {/* Newsletter Section */}
            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Subscribe To Our Newsletter
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>



        {/* Certification Badges */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">Our <span className="text-primary">Certifications</span></h3>
          </div>
          <div className="flex justify-center items-center gap-6">
            <a href="https://www.security.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-300">
              <div className="w-24 h-24 flex items-center justify-center">
                <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-lg">
                  <defs>
                    <linearGradient id="securityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#6D28D9" />
                    </linearGradient>
                    <filter id="shadow">
                      <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
                    </filter>
                  </defs>
                  <polygon points="60,8 105,28 105,92 60,112 15,92 15,28" fill="url(#securityGradient)" filter="url(#shadow)"/>
                  <circle cx="60" cy="28" r="2" fill="#F59E0B"/>
                  <text x="60" y="38" fill="white" fontSize="8" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">AWS</text>
                  <text x="60" y="46" fill="white" fontSize="6" textAnchor="middle" fontFamily="Arial, sans-serif">certified</text>
                  <line x1="25" y1="50" x2="95" y2="50" stroke="white" strokeWidth="1"/>
                  <text x="60" y="68" fill="white" fontSize="12" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">Security</text>
                  <line x1="25" y1="75" x2="95" y2="75" stroke="white" strokeWidth="1"/>
                  <text x="60" y="90" fill="white" fontSize="8" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">SPECIALTY</text>
                </svg>
              </div>
            </a>
            <a href="https://www.cloud-practitioner.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-300">
              <div className="w-24 h-24 flex items-center justify-center">
                <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-lg">
                  <defs>
                    <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6B7280" />
                      <stop offset="100%" stopColor="#374151" />
                    </linearGradient>
                  </defs>
                  <polygon points="60,8 105,28 105,92 60,112 15,92 15,28" fill="url(#cloudGradient)" filter="url(#shadow)"/>
                  <circle cx="60" cy="28" r="2" fill="#F59E0B"/>
                  <text x="60" y="38" fill="white" fontSize="8" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">AWS</text>
                  <text x="60" y="46" fill="white" fontSize="6" textAnchor="middle" fontFamily="Arial, sans-serif">certified</text>
                  <line x1="25" y1="50" x2="95" y2="50" stroke="white" strokeWidth="1"/>
                  <text x="60" y="62" fill="white" fontSize="10" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">Cloud</text>
                  <text x="60" y="74" fill="white" fontSize="10" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">Practitioner</text>
                  <line x1="25" y1="80" x2="95" y2="80" stroke="white" strokeWidth="1"/>
                  <text x="60" y="94" fill="white" fontSize="8" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">FOUNDATIONAL</text>
                </svg>
              </div>
            </a>
            <a href="https://devops.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-300">
              <div className="w-24 h-24 flex items-center justify-center">
                <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-lg">
                  <defs>
                    <linearGradient id="devopsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06B6D4" />
                      <stop offset="100%" stopColor="#0891B2" />
                    </linearGradient>
                  </defs>
                  <polygon points="60,8 105,28 105,92 60,112 15,92 15,28" fill="url(#devopsGradient)" filter="url(#shadow)"/>
                  <circle cx="60" cy="28" r="2" fill="#F59E0B"/>
                  <text x="60" y="38" fill="white" fontSize="8" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">AWS</text>
                  <text x="60" y="46" fill="white" fontSize="6" textAnchor="middle" fontFamily="Arial, sans-serif">certified</text>
                  <line x1="25" y1="50" x2="95" y2="50" stroke="white" strokeWidth="1"/>
                  <text x="60" y="62" fill="white" fontSize="11" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">DevOps</text>
                  <text x="60" y="74" fill="white" fontSize="11" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">Engineer</text>
                  <line x1="25" y1="80" x2="95" y2="80" stroke="white" strokeWidth="1"/>
                  <text x="60" y="94" fill="white" fontSize="8" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">PROFESSIONAL</text>
                </svg>
              </div>
            </a>
            <a href="https://www.developer.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-300">
              <div className="w-24 h-24 flex items-center justify-center">
                <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-lg">
                  <defs>
                    <linearGradient id="developerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#1D4ED8" />
                    </linearGradient>
                  </defs>
                  <polygon points="60,8 105,28 105,92 60,112 15,92 15,28" fill="url(#developerGradient)" filter="url(#shadow)"/>
                  <circle cx="60" cy="28" r="2" fill="#F59E0B"/>
                  <text x="60" y="38" fill="white" fontSize="8" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">AWS</text>
                  <text x="60" y="46" fill="white" fontSize="6" textAnchor="middle" fontFamily="Arial, sans-serif">certified</text>
                  <line x1="25" y1="50" x2="95" y2="50" stroke="white" strokeWidth="1"/>
                  <text x="60" y="68" fill="white" fontSize="12" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">Developer</text>
                  <line x1="25" y1="75" x2="95" y2="75" stroke="white" strokeWidth="1"/>
                  <text x="60" y="90" fill="white" fontSize="8" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">ASSOCIATE</text>
                </svg>
              </div>
            </a>
            <a href="https://www.solution-architect.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-300">
              <div className="w-24 h-24 flex items-center justify-center">
                <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-lg">
                  <defs>
                    <linearGradient id="architectGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#047857" />
                    </linearGradient>
                  </defs>
                  <polygon points="60,8 105,28 105,92 60,112 15,92 15,28" fill="url(#architectGradient)" filter="url(#shadow)"/>
                  <circle cx="60" cy="28" r="2" fill="#F59E0B"/>
                  <text x="60" y="38" fill="white" fontSize="8" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">AWS</text>
                  <text x="60" y="46" fill="white" fontSize="6" textAnchor="middle" fontFamily="Arial, sans-serif">certified</text>
                  <line x1="25" y1="50" x2="95" y2="50" stroke="white" strokeWidth="1"/>
                  <text x="60" y="62" fill="white" fontSize="10" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">Solutions</text>
                  <text x="60" y="74" fill="white" fontSize="10" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">Architect</text>
                  <line x1="25" y1="80" x2="95" y2="80" stroke="white" strokeWidth="1"/>
                  <text x="60" y="94" fill="white" fontSize="8" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">PROFESSIONAL</text>
                </svg>
              </div>
            </a>
            <a href="https://www.sysops.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-300">
              <div className="w-24 h-24 flex items-center justify-center">
                <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-lg">
                  <defs>
                    <linearGradient id="sysopsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="100%" stopColor="#1E40AF" />
                    </linearGradient>
                  </defs>
                  <polygon points="60,8 105,28 105,92 60,112 15,92 15,28" fill="url(#sysopsGradient)" filter="url(#shadow)"/>
                  <circle cx="60" cy="28" r="2" fill="#F59E0B"/>
                  <text x="60" y="38" fill="white" fontSize="8" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">AWS</text>
                  <text x="60" y="46" fill="white" fontSize="6" textAnchor="middle" fontFamily="Arial, sans-serif">certified</text>
                  <line x1="25" y1="50" x2="95" y2="50" stroke="white" strokeWidth="1"/>
                  <text x="60" y="62" fill="white" fontSize="10" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">SysOps</text>
                  <text x="60" y="74" fill="white" fontSize="10" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">Administrator</text>
                  <line x1="25" y1="80" x2="95" y2="80" stroke="white" strokeWidth="1"/>
                  <text x="60" y="94" fill="white" fontSize="8" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">ASSOCIATE</text>
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-6">
          <p className="text-gray-500">
            © 2025 XCON Technologies. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
