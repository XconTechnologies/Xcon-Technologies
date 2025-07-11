import { Smartphone, Code, Settings, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description: "We design and develop high-performance mobile applications with seamless user experiences, robust security, and scalable architectures, tailored to meet user and business expansion needs.",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Our web development services deliver responsive, high-speed websites with secure, scalable back-end solutions, optimized for both user engagement and operational efficiency.",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Software Development",
      description: "We create custom software solutions that enhance business processes, featuring advanced integrations, strong security measures, and scalable designs to support your growth.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">Core Services We Provide</h2>
        </div>
        
        <div className="relative">
          {/* Navigation arrows */}
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow z-10">
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow z-10">
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <button className="flex items-center text-gray-800 font-semibold hover:text-orange-500 transition-colors group">
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Consult Transformation Goals
          </Button>
        </div>
      </div>
    </section>
  );
}
