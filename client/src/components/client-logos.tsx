import harvestLogo from "@assets/HE-Logo-1 (1)_1752473995302.jpg";
import accommodationLogo from "@assets/IMG-20240308-WA0130-removebg-preview_1752473995303.png";
import cloudChoiceLogo from "@assets/imgpsh_fullsize_anim_1752473995303.png";
import lawlessLogo from "@assets/jghih-1536x743_1752473995304.png";
import knopeeLogo from "@assets/Knopee-Logo_1752473995304.webp";
import usProLogo from "@assets/Logo uslisitingpro_1752473995305.png";
import alfikrahLogo from "@assets/ALFIKRAH-UNITED-LOGO_1752474011378.png";
import floProLogo from "@assets/cropped-FloPro-Logo-Update-01-1-e1732599710397_1752474011380.png";
import dunyaLogo from "@assets/DC-Blue-Logo-1536x360_1752474011381.png";

export default function ClientLogos() {
  const logos = [
    { name: "Dunya Consultants", logo: dunyaLogo },
    { name: "Harvest Energy", logo: harvestLogo },
    { name: "Accommodation Solutions", logo: accommodationLogo },
    { name: "Cloud Choice Technologies", logo: cloudChoiceLogo },
    { name: "Lawless", logo: lawlessLogo },
    { name: "Knopee", logo: knopeeLogo },
    { name: "US Pro Listing", logo: usProLogo },
    { name: "Alfikrah United", logo: alfikrahLogo },
    { name: "FloPro", logo: floProLogo },
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
                className="flex-shrink-0 mx-6 flex items-center justify-center bg-white border-2 border-gray-100 rounded-lg p-4 transition-all duration-300 hover:border-[#7CB342] hover:shadow-lg"
                style={{ minWidth: '200px', height: '120px' }}
              >
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="transition-all duration-300"
                  style={{ width: '180px', height: '90px', objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}