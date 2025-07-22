import { Link, Lightbulb, Users, Shield, CheckCircle } from "lucide-react";
import { useState } from "react";
import QuoteModal from './quote-modal';

export default function ValuesProjects() {
  const [selectedBusiness, setSelectedBusiness] = useState("For Startups");
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const values = [
    {
      icon: <Link className="h-6 w-6" />,
      title: "Innovation",
      description: "We're committed to exploring new technologies, and finding"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Excellence",
      description: "We set high standards for our work & we are dedicated team"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      description: "We believe in the power of collaboration, working closely"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Integrity",
      description: "We uphold the highest ethical honesty in all our interactions"
    }
  ];

  const businessTypes = [
    {
      title: "Startups",
      subtitle: "Launch & Scale Fast",
      description: "Turn innovative ideas into market-ready products with our agile development approach and startup-focused solutions.",
      icon: "🚀",
      gradient: "primary",
      services: [
        "MVP Development",
        "Product Validation",
        "Technical Consulting",
        "Rapid Prototyping"
      ]
    },
    {
      title: "Growing Businesses",
      subtitle: "Scale & Optimize",
      description: "Enhance your existing operations with custom solutions designed to streamline processes and drive growth.",
      icon: "📈",
      gradient: "primary",
      services: [
        "Custom Software Solutions",
        "Process Automation",
        "Digital Transformation",
        "System Integration"
      ]
    },
    {
      title: "Enterprise",
      subtitle: "Transform & Lead",
      description: "Comprehensive enterprise solutions that modernize infrastructure and position you as an industry leader.",
      icon: "🏢",
      gradient: "primary",
      services: [
        "Enterprise Architecture",
        "Cloud Migration",
        "DevOps Implementation",
        "Legacy Modernization"
      ]
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        {/* Solutions for Every Business Stage */}
        <div className="relative overflow-hidden">
          {/* Background Design */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
          
          <div className="relative z-10 py-16">
            {/* Header Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <span>✨</span>
                Solutions for Every Stage
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Grow with the Right
                <span className="text-primary block md:inline"> Technology Partner</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Whether you're launching your first product or scaling to enterprise level, 
                we deliver solutions that evolve with your business journey.
              </p>
            </div>
            
            {/* Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
              {businessTypes.map((business, index) => (
                <div key={index} className="group relative">
                  {/* Card Container */}
                  <div className="bg-white rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-gray-200 relative overflow-hidden">
                    
                    {/* Background Color on Hover */}
                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-2xl shadow-xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <span className="text-3xl">{business.icon}</span>
                      </div>
                      
                      {/* Title & Subtitle */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{business.title}</h3>
                        <p className="text-lg font-semibold text-primary mb-3">
                          {business.subtitle}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          {business.description}
                        </p>
                      </div>
                      
                      {/* Services List */}
                      <div className="space-y-3">
                        {business.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-center group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${serviceIndex * 50}ms` }}>
                            <div className="w-3 h-3 rounded-full bg-primary mr-4 flex-shrink-0"></div>
                            <span className="text-gray-700 font-medium">{service}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Call to Action */}
                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <button 
                          onClick={() => setIsQuoteModalOpen(true)}
                          className="w-full py-3 px-6 rounded-xl bg-primary text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                        >
                          Get Started
                        </button>
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-6 right-6 w-12 h-12 bg-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-6 left-6 w-8 h-8 bg-gray-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </section>
  );
}