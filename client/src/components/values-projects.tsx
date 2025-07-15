import { Link, Lightbulb, Users, Shield, CheckCircle } from "lucide-react";

export default function ValuesProjects() {
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


        {/* Our Client Success Stories */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our <span className="text-primary">Client Success</span> Stories
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We've helped businesses of all sizes achieve their digital transformation goals through innovative technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {businessTypes.map((business, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full"></div>
                
                <div className="relative z-10">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {business.title}
                    </h3>
                    <div className="w-12 h-1 bg-primary rounded-full"></div>
                  </div>
                  
                  <div className="space-y-4">
                    {business.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-medium text-primary">50+</span>
                      <span className="ml-2">Successful Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}