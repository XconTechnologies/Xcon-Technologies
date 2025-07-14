import { Users, User, UserPlus, ShoppingCart, DollarSign, Heart, GraduationCap, MessageSquare, Building, Music, Landmark, Home, Briefcase, Truck, Monitor, Heart as HeartIcon, Car, Plane, ArrowUpDown, ArrowDown } from "lucide-react";
import video1 from "@assets/1_1752476678531.mp4";
import video2 from "@assets/2_1752476678532.mp4";
import video3 from "@assets/3_1752476678532.mp4";

export default function EngagementModels() {
  const engagementModels = [
    {
      title: "Project-Based Development",
      centerText: "OUR\nPM",
      topText: "YOU",
      description: "Assign dedicated product managers & developers for your adaptive software development project.",
      featured: false,
      video: video1
    },
    {
      title: "Team-Based Development", 
      centerText: "YOUR\nPM",
      topText: "",
      description: "Deploy a cooperative and professional team to deliver custom end-to-end software solutions",
      featured: false,
      video: video2
    },
    {
      title: "Staff Augmentation",
      centerText: "YOUR\nPM",
      topText: "",
      description: "Integrate the best and expert app developers into your team for improved project success.",
      featured: false,
      video: video3
    }
  ];

  const industries = [
    { name: "eCommerce", icon: <ShoppingCart className="h-8 w-8" /> },
    { name: "Fintech", icon: <DollarSign className="h-8 w-8" /> },
    { name: "Healthcare", icon: <Heart className="h-8 w-8" /> },
    { name: "Education", icon: <GraduationCap className="h-8 w-8" /> },
    { name: "Social Networking", icon: <MessageSquare className="h-8 w-8" /> },
    { name: "Hospitality", icon: <Building className="h-8 w-8" /> },
    { name: "Entertainment", icon: <Music className="h-8 w-8" /> },
    { name: "Government", icon: <Landmark className="h-8 w-8" /> },
    { name: "Real Estate", icon: <Home className="h-8 w-8" /> },
    { name: "Business", icon: <Briefcase className="h-8 w-8" /> },
    { name: "Logistics", icon: <Truck className="h-8 w-8" /> },
    { name: "Tech & IT", icon: <Monitor className="h-8 w-8" /> },
    { name: "Non-Profit", icon: <HeartIcon className="h-8 w-8" /> },
    { name: "Automotive", icon: <Car className="h-8 w-8" /> },
    { name: "Travel & Tourism", icon: <Plane className="h-8 w-8" /> }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        {/* Engagement Models */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Our <span className="text-primary">Engagement</span> Models
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:bg-primary transition-all duration-300 group">
                {/* Diagram */}
                <div className="relative mb-8 h-48 flex items-center justify-center">
                  {/* Center circle */}
                  <div className="w-20 h-20 bg-white border-2 border-primary rounded-full flex items-center justify-center z-10 group-hover:bg-primary group-hover:border-white transition-all duration-300">
                    <span className="text-gray-800 font-bold text-xs text-center leading-tight whitespace-pre-line group-hover:text-white">
                      {model.centerText}
                    </span>
                  </div>
                  
                  {/* Surrounding circles */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-56 h-56">
                      {[...Array(6)].map((_, i) => {
                        const angle = (i * 60) * Math.PI / 180;
                        const x = Math.cos(angle) * 90;
                        const y = Math.sin(angle) * 90;
                        return (
                          <div
                            key={i}
                            className="absolute w-12 h-12 bg-white border-2 border-primary rounded-full flex items-center justify-center animate-pulse group-hover:bg-primary group-hover:border-white transition-all duration-300"
                            style={{
                              left: `calc(50% + ${x}px - 24px)`,
                              top: `calc(50% + ${y}px - 24px)`,
                              animationDelay: `${i * 0.2}s`,
                            }}
                          >
                            <User className="h-4 w-4 text-primary group-hover:text-white" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Connecting lines */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-56 h-56">
                      {[...Array(6)].map((_, i) => {
                        const angle = (i * 60) * Math.PI / 180;
                        const x1 = Math.cos(angle) * 40;
                        const y1 = Math.sin(angle) * 40;
                        const x2 = Math.cos(angle) * 90;
                        const y2 = Math.sin(angle) * 90;
                        return (
                          <div
                            key={i}
                            className="absolute border-t-2 border-dashed border-primary/30 animate-pulse group-hover:border-white/30 transition-all duration-300"
                            style={{
                              left: `calc(50% + ${x1}px)`,
                              top: `calc(50% + ${y1}px)`,
                              width: `${Math.sqrt((x2-x1)**2 + (y2-y1)**2)}px`,
                              transformOrigin: '0 0',
                              transform: `rotate(${Math.atan2(y2-y1, x2-x1)}rad)`,
                              animationDelay: `${i * 0.1}s`,
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-white transition-all duration-300">
                    {model.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm group-hover:text-white transition-all duration-300">
                    {model.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              <span className="text-primary">Industries</span> we deal
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group min-h-[140px]"
              >
                <div className="text-primary group-hover:text-white transition-colors mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors text-center">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}