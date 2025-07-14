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


        {/* 200+ Projects Delivered */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              <span className="text-primary">200+</span> Projects Delivered
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessTypes.map((business, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-white transition-colors">
                    {business.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {business.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary group-hover:text-white transition-colors mr-3 flex-shrink-0" />
                      <span className="text-gray-700 group-hover:text-white transition-colors">
                        {service}
                      </span>
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