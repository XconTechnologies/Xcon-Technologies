import dunyaLogo from "@assets/DC-Blue-Logo-1536x360_1752307590480.png";
import harvestLogo from "@assets/HE-Logo-1 (1)_1752307590481.jpg";
import usProLogo from "@assets/Untitled design (8)_1752307590482.png";
import mskLogo from "@assets/Untitled design (9)_1752307590482.png";
import renovexLogo from "@assets/Untitled design (10)_1752307590483.png";
import cloudChoiceLogo from "@assets/Untitled design (12)_1752307590484.png";
import lawlessLogo from "@assets/Untitled design (13)_1752307590485.png";
import quinnieLogo from "@assets/Untitled design (14)_1752307590486.png";
import sutoTechLogo from "@assets/Untitled design (15)_1752307590487.png";
import nationalBankLogo from "@assets/Untitled design (16)_1752307590488.png";
import easyIeltsLogo from "@assets/Untitled design (17)_1752307590488.png";
import priyyLogo from "@assets/Untitled design (18)_1752307590489.png";

export default function ClientLogos() {
  const logos = [
    { name: "Dunya Consultants", logo: dunyaLogo },
    { name: "Harvest Energy", logo: harvestLogo },
    { name: "US Pro Listing", logo: usProLogo },
    { name: "MSK Consultants", logo: mskLogo },
    { name: "Renovex", logo: renovexLogo },
    { name: "Cloud Choice Technologies", logo: cloudChoiceLogo },
    { name: "Lawless Interiors", logo: lawlessLogo },
    { name: "Quinnie Plastic Surgery", logo: quinnieLogo },
    { name: "Suto Tech", logo: sutoTechLogo },
    { name: "National Bank", logo: nationalBankLogo },
    { name: "Easy IELTS Center", logo: easyIeltsLogo },
    { name: "Priyy Interiors", logo: priyyLogo },
  ];

  // Duplicate the logos array to create seamless scrolling
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-32 bg-white overflow-hidden min-h-screen flex items-center">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Trusted by Leading Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                style={{ minWidth: '160px', height: '80px' }}
              >
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  style={{ maxWidth: '140px', maxHeight: '60px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}