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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left content */}
          <div className="text-white">
            <div className="mb-6">
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                Digital Transformation Company
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Full-Stack Tech Enablement <br />
              For Future-Ready Businesses
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
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
              <div className="flex items-center space-x-8 opacity-60">
                <div className="text-white font-bold text-lg">Inc.</div>
                <div className="text-white font-bold text-lg">Forbes</div>
                <div className="text-white font-bold text-lg">YEC</div>
                <div className="text-white font-bold text-lg">Entrepreneur</div>
              </div>
            </div>
          </div>
          
          {/* Right side - Contact Form */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="" className="text-gray-800">Select Service</option>
                    <option value="web-development" className="text-gray-800">Web Development</option>
                    <option value="mobile-app" className="text-gray-800">Mobile App Development</option>
                    <option value="custom-software" className="text-gray-800">Custom Software Development</option>
                    <option value="ai-services" className="text-gray-800">AI Services</option>
                    <option value="cloud-services" className="text-gray-800">Cloud Services</option>
                    <option value="digital-marketing" className="text-gray-800">Digital Marketing</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
