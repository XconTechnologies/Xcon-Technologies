import nodeLogo from "@assets/image_1752480019266.png";
import openaiLogo from "@assets/image_1752480026099.png";
import vueLogo from "@assets/image_1752480028607.png";
import gitLogo from "@assets/image_1752480031073.png";
import flutterLogo from "@assets/image_1752480033784.png";
import awsLogo from "@assets/image_1752480036762.png";
import azureLogo from "@assets/image_1752480039668.png";
import dotnetLogo from "@assets/image_1752480044886.png";
import reactLogo from "@assets/image_1752480048249.png";
import atlassianLogo from "@assets/image_1752480055553.png";
import graphqlLogo from "@assets/image_1752480075430.png";
import mongodbLogo from "@assets/image_1752480082277.png";

export default function ClientLogos() {
  const logos = [
    { name: "Node.js", logo: nodeLogo },
    { name: "OpenAI", logo: openaiLogo },
    { name: "Vue.js", logo: vueLogo },
    { name: "Git", logo: gitLogo },
    { name: "Flutter", logo: flutterLogo },
    { name: "AWS", logo: awsLogo },
    { name: "Azure", logo: azureLogo },
    { name: ".NET", logo: dotnetLogo },
    { name: "React", logo: reactLogo },
    { name: "Atlassian", logo: atlassianLogo },
    { name: "GraphQL", logo: graphqlLogo },
    { name: "MongoDB", logo: mongodbLogo },
  ];

  // Duplicate the logos array to create seamless scrolling
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Innovate with the <span className="text-primary">Right Software</span> Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to deliver exceptional software solutions
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
                  style={{ width: '120px', height: '80px', objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}