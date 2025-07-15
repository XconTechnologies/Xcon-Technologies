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
          
          <div className="space-y-6">
            {businessTypes.map((business, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-primary">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {business.title}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {business.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center bg-gray-50 rounded-lg p-4">
                          <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm font-medium">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-3xl font-bold text-primary">50+</span>
                        <span className="text-gray-600 ml-2">Projects Completed</span>
                      </div>
                      <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
                        View Portfolio
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Visual Element */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/10 to-primary/30 rounded-full flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">
                        {index === 0 ? '🚀' : index === 1 ? '🏢' : '🏭'}
                      </span>
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