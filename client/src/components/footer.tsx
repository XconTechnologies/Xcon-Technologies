import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import XConLogo from "@/assets/xcon-logo.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={XConLogo} alt="XCon Technologies" className="h-8 w-auto mb-4" />
            <p className="text-gray-400 mb-4">
              Leading digital transformation company delivering innovative web, mobile, and software solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <nav className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-primary transition-colors">Web Development</a>
              <a href="#" className="block text-gray-400 hover:text-primary transition-colors">Mobile Apps</a>
              <a href="#" className="block text-gray-400 hover:text-primary transition-colors">Custom Software</a>
              <a href="#" className="block text-gray-400 hover:text-primary transition-colors">UI/UX Design</a>
              <a href="#" className="block text-gray-400 hover:text-primary transition-colors">E-commerce</a>
            </nav>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <nav className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-primary transition-colors">About Us</a>
              <a href="#" className="block text-gray-400 hover:text-primary transition-colors">Our Team</a>
              <a href="#" className="block text-gray-400 hover:text-primary transition-colors">Careers</a>
              <a href="#" className="block text-gray-400 hover:text-primary transition-colors">Blog</a>
              <a href="#" className="block text-gray-400 hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>123 Business Street, Suite 100</p>
              <p>New York, NY 10001</p>
              <p>+1 (555) 123-4567</p>
              <p>contact@xcontechnologies.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 XCon Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
