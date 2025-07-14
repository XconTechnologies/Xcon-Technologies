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
              <a href="https://www.facebook.com/xcontechnologies/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white p-2 rounded-full hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/xcon-technologies/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white p-2 rounded-full hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/xcontech/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white p-2 rounded-full hover:bg-primary transition-colors">
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
          <div className="flex justify-center items-center gap-6 flex-wrap">
            <a href="https://www.security.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="w-24 h-24 flex items-center justify-center">
                <img 
                  src="/attached_assets/image_1752486683692.png" 
                  alt="AWS Security Specialty Certification" 
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <a href="https://www.cloud-practitioner.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="w-24 h-24 flex items-center justify-center">
                <img 
                  src="/attached_assets/image_1752486680154.png" 
                  alt="AWS Cloud Practitioner Foundational Certification" 
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <a href="https://devops.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="w-24 h-24 flex items-center justify-center">
                <img 
                  src="/attached_assets/image_1752486676167.png" 
                  alt="AWS DevOps Engineer Professional Certification" 
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <a href="https://www.developer.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="w-24 h-24 flex items-center justify-center">
                <img 
                  src="/attached_assets/image_1752486671099.png" 
                  alt="AWS Developer Associate Certification" 
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <a href="https://www.solution-architect.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="w-24 h-24 flex items-center justify-center">
                <img 
                  src="/attached_assets/image_1752486691404.png" 
                  alt="AWS Solutions Architect Professional Certification" 
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <a href="https://www.sysops.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="w-24 h-24 flex items-center justify-center">
                <img 
                  src="/attached_assets/image_1752486687667.png" 
                  alt="AWS SysOps Administrator Associate Certification" 
                  className="w-full h-full object-contain"
                />
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
