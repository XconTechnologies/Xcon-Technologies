import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 gradient-overlay"></div>
      
      {/* Background image with opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Design and Scale Custom, <span className="text-primary">High-Performing</span> Digital Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge web development, mobile apps, and custom software solutions that drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
            >
              Start Your Project
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("portfolio")}
              className="border-2 border-white hover:bg-white hover:text-navy-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
