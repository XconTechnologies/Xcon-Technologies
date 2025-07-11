import { Car, Heart, Smartphone, ShoppingCart, DollarSign } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Expertise() {
  const domains = [
    {
      icon: <Car className="h-6 w-6" />,
      title: "Automotive",
      description: "Implement easy IoT solution for real-time vehicle tracking, predictive maintenance, enhanced safety features, and data analytics to optimize fleet management.",
      featured: false,
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Healthcare",
      description: "Leverage secure telemedicine platforms, integrated EMR/EHR systems, real-time patient monitoring, and AI-driven diagnostics to improve healthcare outcomes.",
      featured: true,
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "On-Demand",
      description: "Utilize cloud platforms for scalable operations, real-time GPS tracking, AI-driven demand forecasting, and instant delivery management to enhance customer satisfaction.",
      featured: false,
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Ecommerce",
      description: "Implement scalable best ecommerce platforms with AI-driven product recommendations, secure payment gateways, and real-time inventory management for seamless shopping experiences.",
      featured: false,
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Fintech",
      description: "Leverage cloud-based platforms for secure transactions, real-time data analytics, AI-driven financial insights, and fraud detection to optimize customer experiences.",
      featured: true,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">Expertise Across Domains</h2>
        </div>
        
        <Carousel className="w-full" opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-4">
            {domains.map((domain, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className={`h-full rounded-3xl p-8 transition-all duration-300 ${
                  domain.featured 
                    ? "bg-primary text-white" 
                    : "bg-white hover:shadow-lg"
                }`}>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                    domain.featured
                      ? "bg-white/20 text-white"
                      : "bg-primary text-white"
                  }`}>
                    {domain.icon}
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${
                    domain.featured ? "text-white" : "text-gray-800"
                  }`}>
                    {domain.title}
                  </h3>
                  <p className={`leading-relaxed ${
                    domain.featured ? "text-white/90" : "text-gray-600"
                  }`}>
                    {domain.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}