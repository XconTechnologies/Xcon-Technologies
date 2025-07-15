import { Button } from "@/components/ui/button";
import accommodationLogo from "@assets/IMG-20240308-WA0130-removebg-preview_1752473995303.png";
import lawlessLogo from "@assets/jghih-1536x743_1752473995304.png";
import knopeeLogo from "@assets/Knopee-Logo_1752473995304.webp";
import usProLogo from "@assets/Logo uslisitingpro_1752473995305.png";
import alfikrahLogo from "@assets/ALFIKRAH-UNITED-LOGO_1752474011378.png";
import floProLogo from "@assets/cropped-FloPro-Logo-Update-01-1-e1732599710397_1752474011380.png";
import dunyaLogo from "@assets/DC-Blue-Logo-1536x360_1752474011381.png";
import velocityLogo from "@assets/logo_1752474237684.webp";
import oliverLogo from "@assets/logo-1-removebg-preview_1752474237685.webp";
import quinnieLogo from "@assets/logo-6WL3PW-1536x530_1752474237685.webp";
import sutoTechLogo from "@assets/logo-new-white-1536x209_1752474237686.webp";
import mskLogo from "@assets/MSK-logo-5k-by-5k-1-1-1024x410_1752474237687.png";
import muslimHubLogo from "@assets/Muslim-Hub-revv-02-scaled-e1730651956666 (1)_1752474237687.jpg";
import netGiantLogo from "@assets/Net-Giant-1024x336_1752474237688.png";
import meetLogo from "@assets/New-2024-1536x565_1752474237689.png";
import piLogo from "@assets/pi-1-1518x2048_1752474237689.webp";
import renovexLogo from "@assets/Renovex-e1721133080773-1536x1031_1752474237690.webp";
import motorMetricsLogo from "@assets/Screenshot_2024-03-25_040011-removebg-preview_1752474237691.png";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const logos = [
    { name: "Dunya Consultants", logo: dunyaLogo },
    { name: "Accommodation Solutions", logo: accommodationLogo },
    { name: "Lawless", logo: lawlessLogo },
    { name: "Knopee", logo: knopeeLogo },
    { name: "US Pro Listing", logo: usProLogo },
    { name: "Alfikrah United", logo: alfikrahLogo },
    { name: "FloPro", logo: floProLogo },
    { name: "Velocity Tuning", logo: velocityLogo },
    { name: "Oliver", logo: oliverLogo },
    { name: "Quinnie Plastic Surgery", logo: quinnieLogo },
    { name: "Suto Tech", logo: sutoTechLogo },
    { name: "MSK Consultants", logo: mskLogo },
    { name: "Muslim Hub", logo: muslimHubLogo },
    { name: "Net Giant Technologies", logo: netGiantLogo },
    { name: "Meet", logo: meetLogo },
    { name: "Pi Systems", logo: piLogo },
    { name: "Renovex", logo: renovexLogo },
    { name: "Motor Metrics", logo: motorMetricsLogo },
  ];

  // Duplicate the logos array to create seamless scrolling
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="relative overflow-hidden pt-36 pb-20 min-h-screen">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              Grow Your Business with <span className="font-bold">XCon Technologies!</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Welcome to XCon Technologies, where innovation meets digital expertise. Dive into our cutting-edge IT solutions, from advanced website and application development to seamless network integration. Let this IT software development company, XCon be your trusted partner in navigating the fast-changing technology landscape. Discover how we can take your digital journey to the next level.
            </p>
            <div className="mb-12">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
              >
                Get Started Today
              </Button>
            </div>
            
            {/* Client Logos Scrolling */}
            <div className="text-white">
              <div className="relative overflow-hidden">
                <div className="flex animate-scroll-right-to-left">
                  {duplicatedLogos.map((logo, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center flex-shrink-0 mx-8"
                      style={{ minWidth: '120px', height: '60px' }}
                    >
                      <img
                        src={logo.logo}
                        alt={logo.name}
                        className="h-10 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-300"
                        style={{ maxWidth: '100px' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
