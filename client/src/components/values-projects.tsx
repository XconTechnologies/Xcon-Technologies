import { Link, Lightbulb, Users, Shield, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ValuesProjects() {
  const [selectedBusiness, setSelectedBusiness] = useState("For Startups");
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
      title: "For Startups",
      services: [
        "Rapid Prototyping",
        "MVP Development",
        "POC Development"
      ]
    },
    {
      title: "For SMBs",
      services: [
        "Custom Software Development",
        "Digital Marketing Solutions",
        "App Maintenance and Fixes"
      ]
    },
    {
      title: "For Enterprises",
      services: [
        "Enterprise Software Solutions",
        "Cloud Implementation Services",
        "DevOps Services"
      ]
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        {/* Tailored Solutions for Every Business */}
        <div className="relative">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-50 rounded-3xl"></div>
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Tailored <span className="text-primary">Solutions</span> for Every Business
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                From rapid prototyping for startups to enterprise-scale solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {businessTypes.map((business, index) => (
                <div key={index} className="group relative">
                  {/* Card Background with Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Card Content */}
                  <div className="relative z-10 p-8 rounded-2xl border border-gray-200/50 group-hover:border-primary/20 transition-all duration-500">
                    {/* Icon/Badge */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">
                        {business.title === "For Startups" && "🚀"}
                        {business.title === "For SMBs" && "🏢"}
                        {business.title === "For Enterprises" && "🏛️"}
                      </span>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{business.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {business.title === "For Startups" && "Accelerate your startup journey with rapid prototyping and proof-of-concept solutions"}
                        {business.title === "For SMBs" && "Scale your business with custom development and digital marketing solutions"}
                        {business.title === "For Enterprises" && "Transform operations with comprehensive software and cloud solutions"}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      {business.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="relative">
                          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl px-4 py-3 group-hover:from-primary/15 group-hover:to-primary/10 transition-all duration-300">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                              <span className="text-gray-700 font-medium text-sm">{service}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Hover Effect Decoration */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}