import { Button } from "@/components/ui/button";

export default function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-6">About XCon Technologies</h2>
            <p className="text-lg text-gray-text mb-6">
              We are a leading digital transformation company specializing in web development, mobile applications, and custom software solutions. With over 10 years of experience, we've helped businesses of all sizes achieve their digital goals.
            </p>
            <p className="text-lg text-gray-text mb-8">
              Our team of expert developers, designers, and project managers work together to deliver innovative solutions that drive growth and success for our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get in Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("portfolio")}
                className="border-2 border-primary hover:bg-primary hover:text-white text-primary px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Our Work
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Team collaboration"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-gray-text">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
