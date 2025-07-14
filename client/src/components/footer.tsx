import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import XConLogo from "@assets/Xcon Logo cropped_1752479137104.png";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="max-w-[1440px] mx-auto px-4 py-16">
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
                <span className="text-gray-800">+1 (504) 369-9609</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-800">askforquote@xcontechnologies.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-gray-800">1235 East Blvd, Suite E PMB 5100, Charlotte, North Carolina, 28203, United States</span>
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
          </div>
        </div>



        {/* Newsletter Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Subscribe To Our Newsletter
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-500">
            © 2025 XCON Technologies. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
