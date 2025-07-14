import { Button } from "@/components/ui/button";
import harvestLogo from "@assets/HE-Logo-1 (1)_1752473995302.jpg";
import knopeeLogo from "@assets/Knopee-Logo_1752473995304.webp";
import mskLogo from "@assets/MSK-logo-5k-by-5k-1-1-1024x410_1752474237687.png";
import netGiantLogo from "@assets/Net-Giant-1024x336_1752474237688.png";
import floProLogo from "@assets/cropped-FloPro-Logo-Update-01-1-e1732599710397_1752474011380.png";

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
          <div className="text-white max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Grow Your Business with XCON Technologies!
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Welcome to XCON Technologies, where innovation meets digital expertise. Dive into our cutting-edge IT solutions, from advanced website and application development to seamless network integration. Let this IT software development company, XCON be your trusted partner in navigating the fast-changing technology landscape. Discover how we can take your digital journey to the next level.
            </p>
            <div className="mb-12">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
              >
                Get Started Today
              </Button>
            </div>
            
            {/* Featured clients section */}
            <div className="text-white">
              <p className="text-sm text-gray-400 mb-6">Trusted by Leading Companies</p>
              <div className="flex items-center justify-center space-x-12 opacity-80">
                <img 
                  src={harvestLogo} 
                  alt="Harvest Energy" 
                  className="h-8 object-contain filter brightness-0 invert"
                />
                <img 
                  src={knopeeLogo} 
                  alt="Knopee" 
                  className="h-8 object-contain filter brightness-0 invert"
                />
                <img 
                  src={mskLogo} 
                  alt="MSK Consultants" 
                  className="h-8 object-contain filter brightness-0 invert"
                />
                <img 
                  src={netGiantLogo} 
                  alt="Net Giant Technologies" 
                  className="h-8 object-contain filter brightness-0 invert"
                />
                <img 
                  src={floProLogo} 
                  alt="FloPro" 
                  className="h-8 object-contain filter brightness-0 invert"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
