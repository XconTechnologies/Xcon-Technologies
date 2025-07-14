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
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Our Engagement Models
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                {/* Top circle for first model only */}
                {index === 0 && (
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white border-2 border-primary rounded-full mb-4">
                      <span className="text-gray-800 font-bold text-sm">{model.topText}</span>
                    </div>
                    
                    {/* Animated arrow */}
                    <div className="flex justify-center mb-4 text-primary">
                      <div className="animate-bounce">
                        <ArrowDown className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                )}
                
                {/* For other models, add user icon and arrow */}
                {index !== 0 && (
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white border-2 border-primary rounded-full mb-4">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    
                    <div className="flex justify-center mb-4 text-primary">
                      <div className="animate-bounce">
                        <ArrowDown className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Video Animation */}
                <div className="relative mb-8 h-48 flex items-center justify-center">
                  <video
                    key={index}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain rounded-lg"
                  >
                    <source src={model.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {model.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
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
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Industries we deal
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