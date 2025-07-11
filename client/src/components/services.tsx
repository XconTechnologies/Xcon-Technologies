import { Code, Smartphone, Settings, Paintbrush, ShoppingCart, TrendingUp } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies for optimal performance and user experience.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Custom Software",
      description: "Tailored software solutions designed to meet your specific business requirements and goals.",
    },
    {
      icon: <Paintbrush className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive and engaging digital experiences for your audience.",
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "E-commerce Solutions",
      description: "Comprehensive online stores with secure payment processing and inventory management.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns that drive traffic, engagement, and conversions.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">Our Services</h2>
          <p className="text-xl text-gray-text max-w-2xl mx-auto">
            We deliver comprehensive digital solutions that help businesses thrive in the modern world
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-dark mb-4">{service.title}</h3>
              <p className="text-gray-text mb-4">{service.description}</p>
              <button className="text-primary font-semibold hover:text-primary-dark transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
