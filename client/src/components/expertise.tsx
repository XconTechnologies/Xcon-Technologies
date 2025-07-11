import { Car, Heart, Zap, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function Expertise() {
  const domains = [
    {
      icon: <Car className="h-8 w-8" />,
      title: "Automotive",
      description: "Implement IoT telematics and AI-driven predictive maintenance to optimize fleet management. Gain real-time data for efficient route planning while reducing reduced downtime, improve safety and efficiency with advanced analytics.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Healthcare",
      description: "Utilize HIPAA-compliant telemedicine platforms and integrated EHR/EMR systems for streamlined patient care. Leverage AI-powered diagnostics for better outcomes and predictive analytics to enhance operational efficiency.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "On-Demand",
      description: "Adopt scalable cloud architectures with fast, real-time tracking and AI-driven demand forecasting. Ensure rapid deployment with microservices architecture. optimize user experiences. Scale effortlessly with fluctuating demands.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">Expertise Across Domains</h2>
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
            {domains.map((domain, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  {domain.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{domain.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{domain.description}</p>
                <button className="flex items-center text-gray-800 font-semibold hover:text-orange-500 transition-colors group">
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}