import { Button } from "@/components/ui/button";
import dunyaLogo from "@assets/DC-Blue-Logo-1536x360_1752475378358.png";
import cloudChoiceLogo from "@assets/imgpsh_fullsize_anim_1752475378360.png";
import renovexLogo from "@assets/Renovex-e1721133080773-1536x1031_1752476165118.webp";

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
              <p className="text-sm text-gray-400 mb-6">Our Valued Partners</p>
              <div className="flex items-center justify-center space-x-12 opacity-90">
                <img 
                  src={dunyaLogo} 
                  alt="Dunya Consultants" 
                  className="h-6 object-contain filter brightness-0 invert"
                />
                <img 
                  src={cloudChoiceLogo} 
                  alt="Cloud Choice Technologies" 
                  className="h-6 object-contain filter brightness-0 invert"
                />
                <img 
                  src={renovexLogo} 
                  alt="Renovex" 
                  className="h-6 object-contain filter brightness-0 invert"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
