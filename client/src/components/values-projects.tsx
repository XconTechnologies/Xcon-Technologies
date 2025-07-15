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
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">


        {/* Tailored Solutions for Every Business */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Tailored <span className="text-primary">Solutions</span> for Every Business
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              From rapid prototyping for startups to enterprise-scale solutions, we deliver the right technology services to accelerate your business growth at every stage
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[400px]">
              {/* Left Sidebar - Business Types */}
              <div className="lg:col-span-4 bg-gray-50 p-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Business Types</h3>
                <div className="space-y-2">
                  {businessTypes.map((business, index) => (
                    <button
                      key={index}
                      onMouseEnter={() => setSelectedBusiness(business.title)}
                      className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-200 ${
                        selectedBusiness === business.title
                          ? "bg-primary text-white shadow-lg"
                          : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                      }`}
                    >
                      <span className="font-medium">{business.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Content - Details */}
              <div className="lg:col-span-8 p-8">
                {businessTypes.map((business, index) => (
                  <div
                    key={index}
                    className={`${
                      selectedBusiness === business.title ? "block" : "hidden"
                    }`}
                  >
                    <div className="h-full flex flex-col">
                      <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                          {business.title}
                        </h2>
                        <p className="text-gray-600">
                          {business.title === "For Startups" && "Accelerate your startup journey with rapid prototyping, MVP development, and proof-of-concept solutions designed to validate your ideas quickly and efficiently."}
                          {business.title === "For SMBs" && "Scale your small to medium business with custom software development, digital marketing solutions, and ongoing maintenance to keep your systems running smoothly."}
                          {business.title === "For Enterprises" && "Transform your enterprise operations with comprehensive software solutions, cloud implementation services, and DevOps practices for maximum efficiency and scalability."}
                        </p>
                      </div>

                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">Our Services</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                          {business.services.map((service, serviceIndex) => (
                            <div key={serviceIndex} className="bg-primary text-white rounded-xl p-4 flex items-center">
                              <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                              <span className="text-sm font-medium">
                                {service}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                        <div className="flex items-center">
                          <span className="text-4xl font-bold text-primary">50+</span>
                          <span className="text-gray-600 ml-2">Projects Completed</span>
                        </div>
                        <button className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
                          View Portfolio
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}