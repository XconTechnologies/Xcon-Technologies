import { useState } from "react";
import { Brain, Lock, Cloud, Database, Wifi, Zap } from "lucide-react";

export default function TechnologyTabs() {
  const [activeTab, setActiveTab] = useState("Big Data");

  const technologies = [
    {
      id: "ai",
      name: "Artificial Intelligence",
      icon: <Brain className="h-8 w-8" />,
      description: "Transform your business with intelligent solutions that automate processes, enhance decision-making, and drive innovation.",
      services: [
        "Machine Learning Development",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics"
      ]
    },
    {
      id: "blockchain",
      name: "Blockchain",
      icon: <Lock className="h-8 w-8" />,
      description: "Build secure, transparent, and decentralized applications that revolutionize how you handle transactions and data.",
      services: [
        "Smart Contract Development",
        "Cryptocurrency Solutions",
        "DeFi Applications",
        "NFT Marketplace Development"
      ]
    },
    {
      id: "cloud",
      name: "Cloud",
      icon: <Cloud className="h-8 w-8" />,
      description: "Scale your infrastructure efficiently with cloud solutions that offer flexibility, security, and cost-effectiveness.",
      services: [
        "Cloud Migration Services",
        "AWS/Azure Implementation",
        "DevOps & CI/CD",
        "Microservices Architecture"
      ]
    },
    {
      id: "bigdata",
      name: "Big Data",
      icon: <Database className="h-8 w-8" />,
      description: "Tame your big data using high-performing solutions that empower data aggregation, processing, storage, and analysis.",
      services: [
        "Data Warehousing",
        "ETL Pipeline Development",
        "Real-time Analytics",
        "Business Intelligence"
      ]
    },
    {
      id: "iot",
      name: "Internet of Things",
      icon: <Wifi className="h-8 w-8" />,
      description: "Connect devices and systems to create smart solutions that optimize operations and enhance user experiences.",
      services: [
        "IoT Device Integration",
        "Sensor Data Processing",
        "Smart Home Solutions",
        "Industrial IoT Systems"
      ]
    },
    {
      id: "mixed-reality",
      name: "Mixed Reality",
      icon: <Zap className="h-8 w-8" />,
      description: "Create immersive experiences that blend digital and physical worlds for training, entertainment, and business applications.",
      services: [
        "AR/VR Development",
        "3D Visualization",
        "Virtual Training Platforms",
        "Immersive User Interfaces"
      ]
    }
  ];

  const activeCategory = technologies.find(tech => tech.name === activeTab) || technologies[3];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-primary">Emerging</span> Technologies We Use
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
            Seeking to get ahead of the competition, leverage new business models, or generate high revenue? XCon's team will gladly assist you in designing and engineering future-ready software powered by cutting-edge technologies.
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          {technologies.map((tech) => (
            <button
              key={tech.id}
              onClick={() => setActiveTab(tech.name)}
              className={`flex flex-col items-center p-4 sm:p-6 rounded-2xl transition-all duration-300 ${
                activeTab === tech.name
                  ? "bg-primary text-white shadow-lg"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100"
              }`}
            >
              <div className={`mb-2 sm:mb-3 ${activeTab === tech.name ? "text-white" : "text-primary"} flex-shrink-0`}>
                {tech.icon}
              </div>
              <span className="text-xs sm:text-sm font-medium text-center leading-tight">
                {tech.name}
              </span>
            </button>
          ))}
        </div>

        {/* Active Technology Content */}
        <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              {activeCategory.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {activeCategory.services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium text-sm sm:text-base">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}