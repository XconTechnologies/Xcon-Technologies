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
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        {/* Engagement Models */}
        <div className="mb-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our <span className="text-primary">Work</span> Models
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                {/* Video Animation */}
                <div className="relative mb-8 h-64 flex items-center justify-center">
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
                
                <div className="text-center p-4 rounded-lg hover:bg-primary transition-all duration-300 group/text">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover/text:text-white transition-all duration-300">
                    {model.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm group-hover/text:text-white transition-all duration-300">
                    {model.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}