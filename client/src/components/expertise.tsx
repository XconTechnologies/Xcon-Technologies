import { Car, Heart, Smartphone, ShoppingCart, DollarSign } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Expertise() {
  const domains = [
    {
      icon: <Car className="h-6 w-6" />,
      title: "Automotive",
      description: "Implement easy IoT solution for real-time vehicle tracking, predictive maintenance, enhanced safety features, and data analytics to optimize fleet management.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Healthcare",
      description: "Leverage secure telemedicine platforms, integrated EMR/EHR systems, real-time patient monitoring, and AI-driven diagnostics to improve healthcare outcomes.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "On-Demand",
      description: "Utilize cloud platforms for scalable operations, real-time GPS tracking, AI-driven demand forecasting, and instant delivery management to enhance customer satisfaction.",
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Ecommerce",
      description: "Implement scalable best ecommerce platforms with AI-driven product recommendations, secure payment gateways, and real-time inventory management for seamless shopping experiences.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Fintech",
      description: "Leverage cloud-based platforms for secure transactions, real-time data analytics, AI-driven financial insights, and fraud detection to optimize customer experiences.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our <span className="text-primary">Expertise</span></h2>
        </div>
        
        <Carousel className="w-full" opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-4">
            {domains.map((domain, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="h-full rounded-3xl p-8 transition-all duration-300 bg-white hover:bg-primary hover:text-white group hover:shadow-lg">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-primary text-white group-hover:bg-white/20 group-hover:text-white">
                    {domain.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-white">
                    {domain.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600 group-hover:text-white/90">
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