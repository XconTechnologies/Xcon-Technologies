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
          
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="space-y-12">
              {businessTypes.map((business, index) => (
                <div 
                  key={index} 
                  className="group"
                >
                  {/* Business Type Card */}
                  <div className="bg-primary/5 rounded-2xl p-8 border-l-4 border-primary">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 lg:mb-0">
                        {business.title}
                      </h3>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <span className="text-3xl font-bold text-primary">50+</span>
                          <span className="text-gray-600 ml-2">Projects Completed</span>
                        </div>
                        <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors whitespace-nowrap">
                          View Portfolio
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  
                  {/* Divider (except for last item) */}
                  {index < businessTypes.length - 1 && (
                    <div className="flex justify-center my-8">
                      <div className="w-24 h-0.5 bg-gray-200"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}