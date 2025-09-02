import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import XConLogo from "@assets/Xcon Logo_1752305014933.png";
import securityBadge from '@assets/aws-security_1752489212506.png';
import cloudPractitionerBadge from '@assets/aws-cloud-practitioner_1752489212501.png';
import devopsBadge from '@assets/aws-devOps_1752489212505.png';
import developerBadge from '@assets/aws-developer_1752489212504.png';
import solutionsArchitectBadge from '@assets/aws-solution-architect_1752489212507.png';
import sysopsBadge from '@assets/aws-sysOps_1752489212508.png';

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);
  
  return <span>{count}</span>;
}

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Left Column - Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={XConLogo} alt="XCon" className="h-12 w-auto" />
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              At XCon Technologies, we're more than just a software company in the US. We are your partners in innovation. Let's build the future together with cutting-edge IT solutions according to your business requirements. Contact us today to transform your software development ideas into reality!
            </p>
            
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
              <li><Link href="/services/software-development" className="hover:text-primary transition-colors">Software Development</Link></li>
              <li><Link href="/services/web-development" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="/services/mobile-app-development" className="hover:text-primary transition-colors">Mobile App Development</Link></li>
              <li><Link href="/services/cloud-services" className="hover:text-primary transition-colors">Cloud Services</Link></li>
              <li><Link href="/services/data-engineering" className="hover:text-primary transition-colors">Data Engineering</Link></li>
              <li><Link href="/services/artificial-intelligence" className="hover:text-primary transition-colors">AI & Machine Learning</Link></li>
              <li><Link href="/services/mvp-development" className="hover:text-primary transition-colors">MVP Development</Link></li>
              <li><Link href="/services/devops" className="hover:text-primary transition-colors">DevOps</Link></li>
              <li><Link href="/services/qa-testing" className="hover:text-primary transition-colors">QA Testing</Link></li>
              <li><Link href="/services/it-consultation" className="hover:text-primary transition-colors">IT Consultation</Link></li>
            </ul>
          </div>

          {/* Right Column - Company Links */}
          <div className="space-y-6">
            <ul className="space-y-3 text-gray-600">
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms Of Service</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
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

            {/* Contact Information */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-primary" />
                <span className="text-gray-800">+1 (513) 302-4718</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-8 w-8 text-primary" />
                <div className="flex flex-col">
                  <span className="text-gray-800">askforquote@xcontechnologies.com</span>
                  <span className="text-gray-600 text-sm">Business inquiries & quotes</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-8 w-8 text-primary" />
                <div className="flex flex-col">
                  <span className="text-gray-800">nouman.ali@xcontechnologies.com</span>
                  <span className="text-gray-600 text-sm">HR & job applications</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="text-gray-800">Ohio City, USA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-6">
          <p className="text-gray-500">
            © 2025 XCon Technologies. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
