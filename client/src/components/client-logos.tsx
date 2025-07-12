export default function ClientLogos() {
  const logos = [
    { name: "PCA", logo: "https://logo.clearbit.com/pca.com" },
    { name: "Artific", logo: "https://via.placeholder.com/120x60/f8f9fa/6c757d?text=ARTIFIC" },
    { name: "StudyPass", logo: "https://via.placeholder.com/120x60/f8f9fa/6c757d?text=STUDYPASS" },
    { name: "Dunya", logo: "https://via.placeholder.com/120x60/f8f9fa/6c757d?text=DUNYA" },
    { name: "Coinbase", logo: "https://logo.clearbit.com/coinbase.com" },
    { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
    { name: "Alpha", logo: "https://via.placeholder.com/120x60/f8f9fa/6c757d?text=ALPHA" },
    { name: "Recycling", logo: "https://via.placeholder.com/120x60/f8f9fa/6c757d?text=RECYCLING" },
    { name: "Lawless", logo: "https://via.placeholder.com/120x60/f8f9fa/6c757d?text=LAWLESS" },
    { name: "Partners", logo: "https://via.placeholder.com/120x60/f8f9fa/6c757d?text=PARTNERS" },
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
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                style={{ minWidth: '120px', height: '60px' }}
              >
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/120x60/f8f9fa/6c757d?text=${logo.name}`;
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