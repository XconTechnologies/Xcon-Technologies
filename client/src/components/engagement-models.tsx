import { Users, User, UserPlus, ShoppingCart, DollarSign, Heart, GraduationCap, MessageSquare, Building, Music, Landmark, Home, Briefcase, Truck, Monitor, Heart as HeartIcon, Car, Plane, ArrowUpDown } from "lucide-react";

export default function EngagementModels() {
  const engagementModels = [
    {
      title: "Project-Based Development",
      centerText: "OUR\nTM",
      topText: "YOU",
      description: "Assign dedicated product managers & developers for your adaptive software development project.",
      featured: false
    },
    {
      title: "Team-Based Development", 
      centerText: "YOUR\nTM",
      topText: "",
      description: "Deploy a cooperative and professional team to deliver custom end-to-end software solutions",
      featured: true
    },
    {
      title: "Staff Augmentation",
      centerText: "YOUR\nTM",
      topText: "",
      description: "Integrate the best and expert app developers into your team for improved project success.",
      featured: false
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
      <div className="container mx-auto px-4 lg:px-8">
        {/* Engagement Models */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Our <span className="text-primary">Engagement</span> Models
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <div key={index} className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group ${
                model.featured ? 'bg-primary text-white' : 'bg-white'
              }`}>
                {/* Top circle */}
                <div className="text-center mb-8">
                  {model.topText && (
                    <div className={`inline-flex items-center justify-center w-16 h-16 border-2 rounded-full mb-4 ${
                      model.featured 
                        ? 'bg-white/20 border-white text-white' 
                        : 'bg-primary/10 border-primary text-primary'
                    }`}>
                      <span className="font-bold text-sm">{model.topText}</span>
                    </div>
                  )}
                  
                  {/* Animated double arrow */}
                  <div className={`flex justify-center mb-4 ${model.featured ? 'text-white' : 'text-primary'}`}>
                    <div className="animate-bounce">
                      <ArrowUpDown className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                
                {/* Diagram */}
                <div className="relative mb-8">
                  <div className="flex justify-center">
                    {/* Center circle */}
                    <div className={`w-20 h-20 border-2 rounded-full flex items-center justify-center ${
                      model.featured 
                        ? 'bg-white/20 border-white text-white' 
                        : 'bg-primary/10 border-primary text-primary'
                    }`}>
                      <span className="font-bold text-xs text-center leading-tight whitespace-pre-line">
                        {model.centerText}
                      </span>
                    </div>
                  </div>
                  
                  {/* Surrounding circles */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-40 h-40">
                      {[...Array(6)].map((_, i) => {
                        const angle = (i * 60) * Math.PI / 180;
                        const x = Math.cos(angle) * 60;
                        const y = Math.sin(angle) * 60;
                        return (
                          <div
                            key={i}
                            className={`absolute w-12 h-12 border-2 rounded-full flex items-center justify-center animate-pulse ${
                              model.featured 
                                ? 'bg-white/20 border-white text-white' 
                                : 'bg-primary/10 border-primary text-primary'
                            }`}
                            style={{
                              left: `calc(50% + ${x}px - 24px)`,
                              top: `calc(50% + ${y}px - 24px)`,
                              animationDelay: `${i * 0.2}s`,
                            }}
                          >
                            <User className="h-4 w-4" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Connecting lines */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-40 h-40">
                      {[...Array(6)].map((_, i) => {
                        const angle = (i * 60) * Math.PI / 180;
                        const x1 = Math.cos(angle) * 40;
                        const y1 = Math.sin(angle) * 40;
                        const x2 = Math.cos(angle) * 60;
                        const y2 = Math.sin(angle) * 60;
                        return (
                          <div
                            key={i}
                            className={`absolute border-t-2 border-dashed animate-pulse ${
                              model.featured 
                                ? 'border-white/30' 
                                : 'border-primary/30'
                            }`}
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
                  <h3 className={`text-xl font-bold mb-4 ${
                    model.featured ? 'text-white' : 'text-gray-800'
                  }`}>
                    {model.title}
                  </h3>
                  <p className={`leading-relaxed ${
                    model.featured ? 'text-white/90' : 'text-gray-600'
                  }`}>
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