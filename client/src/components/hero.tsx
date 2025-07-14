import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-20 min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://videos.pexels.com/video-files/3129957/3129957-uhd_3840_2160_25fps.mp4"
            type="video/mp4"
          />
          {/* Fallback background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80')"
            }}
          />
        </video>
      </div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 relative z-10 h-full">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          {/* Centered content */}
          <div className="text-white max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                Digital Transformation Company
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Full-Stack Tech Enablement <br />
              For Future-Ready Businesses
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              From adaptation to expansion, we are your partners throughout the digital growth cycle.
            </p>
            <div className="mb-12">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
              >
                Schedule a Call
              </Button>
            </div>
            
            {/* Featured in section */}
            <div className="text-white">
              <p className="text-sm text-gray-400 mb-4">Featured in</p>
              <div className="flex items-center justify-center space-x-8 opacity-60">
                <div className="text-white font-bold text-lg">Inc.</div>
                <div className="text-white font-bold text-lg">Forbes</div>
                <div className="text-white font-bold text-lg">YEC</div>
                <div className="text-white font-bold text-lg">Entrepreneur</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
