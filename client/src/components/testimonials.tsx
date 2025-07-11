import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, TechCorp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      comment: "XCon Technologies transformed our outdated website into a modern, high-performing platform. The results exceeded our expectations!"
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director, InnovateLab",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b0e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      comment: "The mobile app they developed for us increased our user engagement by 300%. Outstanding work and professional team!"
    },
    {
      name: "Michael Chen",
      role: "CTO, DataFlow Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      comment: "Their custom software solution streamlined our operations and saved us thousands in operational costs. Highly recommended!"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-text max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="flex items-center mb-4">
                <div className="flex text-orange-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-text mb-6">"{testimonial.comment}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-dark">{testimonial.name}</div>
                  <div className="text-sm text-gray-text">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
