export default function ClientLogos() {
  const logos = [
    { name: "PCA", logo: "https://via.placeholder.com/120x40/e8e9ea/495057?text=PCA" },
    { name: "ARTIFIC", logo: "https://via.placeholder.com/120x40/e8e9ea/495057?text=ARTIFIC" },
    { name: "STUDYPASS", logo: "https://via.placeholder.com/120x40/e8e9ea/495057?text=STUDYPASS" },
    { name: "DUNYA", logo: "https://via.placeholder.com/120x40/e8e9ea/495057?text=DUNYA" },
    { name: "COINBASE", logo: "https://via.placeholder.com/120x40/e8e9ea/495057?text=COINBASE" },
    { name: "AMAZON", logo: "https://via.placeholder.com/120x40/e8e9ea/495057?text=AMAZON" },
    { name: "ALPHA", logo: "https://via.placeholder.com/120x40/e8e9ea/495057?text=ALPHA" },
    { name: "RECYCLING", logo: "https://via.placeholder.com/120x40/e8e9ea/495057?text=RECYCLING" },
    { name: "LAWLESS", logo: "https://via.placeholder.com/120x40/e8e9ea/495057?text=LAWLESS" },
    { name: "PARTNERS", logo: "https://via.placeholder.com/120x40/e8e9ea/495057?text=PARTNERS" },
  ];

  // Duplicate the logos array to create seamless scrolling
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've had the privilege of working with some of the world's most innovative companies
          </p>
        </div>
        
        <div className="relative">
          {/* Scrolling container */}
          <div className="flex animate-scroll-logos">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 flex items-center justify-center bg-gray-50 rounded-lg p-4"
                style={{ minWidth: '140px', height: '60px' }}
              >
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                  style={{ maxWidth: '120px', maxHeight: '40px' }}
                  onLoad={() => console.log(`Logo loaded: ${logo.name}`)}
                  onError={(e) => {
                    console.error(`Logo failed to load: ${logo.name}`);
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/120x40/e8e9ea/495057?text=${logo.name}`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}