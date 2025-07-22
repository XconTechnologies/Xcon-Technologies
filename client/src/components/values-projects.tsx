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
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Tailored <span className="text-primary">Solutions</span> for Every Business
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              From rapid prototyping for startups to enterprise-scale solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessTypes.map((business, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{business.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {business.title === "For Startups" && "Accelerate your startup journey with rapid solutions"}
                    {business.title === "For SMBs" && "Scale your business with custom development solutions"}
                    {business.title === "For Enterprises" && "Transform operations with comprehensive solutions"}
                  </p>
                </div>
                
                <div className="space-y-2">
                  {business.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-primary/10 text-primary rounded-lg px-3 py-2 text-center">
                      <span className="text-sm font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}