import { Star } from "lucide-react";

export default function Brands() {
  const brands = [
    { name: "YEPPY", logo: "https://via.placeholder.com/120x60/FF69B4/FFFFFF?text=YEPPY" },
    { name: "TruthGPT", logo: "https://via.placeholder.com/120x60/1E40AF/FFFFFF?text=TruthGPT" },
    { name: "Schology", logo: "https://via.placeholder.com/120x60/059669/FFFFFF?text=Schology" },
    { name: "Kraken", logo: "https://via.placeholder.com/120x60/0F172A/FFFFFF?text=Kraken" },
    { name: "Wellness", logo: "https://via.placeholder.com/120x60/7C3AED/FFFFFF?text=Wellness" },
    { name: "Playa", logo: "https://via.placeholder.com/120x60/F59E0B/FFFFFF?text=Playa" },
    { name: "Save Win", logo: "https://via.placeholder.com/120x60/10B981/FFFFFF?text=Save+Win" },
    { name: "Pure Plank", logo: "https://via.placeholder.com/120x60/6366F1/FFFFFF?text=Pure+Plank" },
  ];

  const brands2 = [
    { name: "Scratch", logo: "https://via.placeholder.com/120x60/DC2626/FFFFFF?text=Scratch" },
    { name: "Milo Care", logo: "https://via.placeholder.com/120x60/0EA5E9/FFFFFF?text=Milo+Care" },
    { name: "Groovy", logo: "https://via.placeholder.com/120x60/F97316/FFFFFF?text=Groovy" },
    { name: "Mdrouz", logo: "https://via.placeholder.com/120x60/1F2937/FFFFFF?text=Mdrouz" },
    { name: "Al Mohannad", logo: "https://via.placeholder.com/120x60/059669/FFFFFF?text=Al+Mohannad" },
    { name: "Qureshi", logo: "https://via.placeholder.com/120x60/0EA5E9/FFFFFF?text=Qureshi" },
    { name: "Mobile Legends", logo: "https://via.placeholder.com/120x60/3B82F6/FFFFFF?text=Mobile+Legends" },
    { name: "TeamMates", logo: "https://via.placeholder.com/120x60/84CC16/FFFFFF?text=TeamMates" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Chosen by 500+ Brands Worldwide</h2>
          
          {/* Clutch Rating */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <div className="text-2xl font-bold text-gray-400">Clutch</div>
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <span className="text-lg font-semibold">4.9 Rating</span>
            </div>
          </div>
        </div>
        
        {/* First row of brands */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 mb-8">
          {brands.map((brand, index) => (
            <div key={index} className="relative group">
              <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors flex items-center justify-center h-24">
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md">
                <span className="text-xs font-medium text-gray-600">Case Study</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Second row of brands */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {brands2.map((brand, index) => (
            <div key={index} className="relative group">
              <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors flex items-center justify-center h-24">
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md">
                <span className="text-xs font-medium text-gray-600">Case Study</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}