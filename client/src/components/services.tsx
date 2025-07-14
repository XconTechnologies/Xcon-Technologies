import { useState } from "react";
import { Code, Database, Cloud, Smartphone, Edit, Target, BarChart3, Repeat } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuoteModal from "./quote-modal";
import softwareImg from "@assets/Xcon web - software_1752304457704.jpg";
import mvpImg from "@assets/Xcon web - MVP development_1752304457706.jpg";
import cloudImg from "@assets/Xcon web - cloud Computing_1752304457707.jpg";
import digitalMarketingImg from "@assets/Xcon web - Digital Marketing_1752304457708.jpg";
import dataEngineeringImg from "@assets/Xcon web - Data Engineering_1752304457709.jpg";
import seoImg from "@assets/Xcon web - Seo_1752304457710.jpg";
import appImg from "@assets/Xcon web - app_1752304457711.jpg";
import uiuxImg from "@assets/Xcon UI UX service 2_1752304457712.jpg";

export default function Services() {
  const [activeTab, setActiveTab] = useState("web-development");
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const tabs = [
    {
      id: "web-development",
      title: "Web Development",
      icon: <Code className="h-6 w-6" />,
      content: {
        title: "Web Application Development",
        bulletPoints: [
          "Tailoring existing web applications to meet your unique business needs.",
          "Updating and enhancing legacy systems to improve performance and functionality of web application development.",
          "Ensuring your software solutions are efficiently maintained and updated.",
          "Our website and application development provide solutions that focus on user experience and satisfaction.",
          "Seamlessly integrating new and the right software with existing systems for improved efficiency."
        ],
        image: seoImg,
        cardTitle: "Unlock Growth with Scalable, SEO-Friendly Website Solutions"
      }
    },
    {
      id: "software-consulting",
      title: "Software Consulting",
      icon: <Database className="h-6 w-6" />,
      content: {
        title: "Software Consulting",
        bulletPoints: [
          "Strategic software planning and architecture design.",
          "Technology stack selection and optimization.",
          "Risk assessment and mitigation strategies.",
          "Compliance and security advisory services.",
          "Performance optimization and scalability planning."
        ],
        image: softwareImg,
        cardTitle: "Smart Software for Smart Business Decisions"
      }
    },
    {
      id: "cloud-engineering",
      title: "Cloud Engineering",
      icon: <Cloud className="h-6 w-6" />,
      content: {
        title: "Cloud Engineering",
        bulletPoints: [
          "Build secure and scalable cloud solutions for business growth.",
          "Migrate your data and applications to the cloud with ease.",
          "Optimize performance with multi-cloud and hybrid cloud setups.",
          "Automate processes and improve efficiency with cloud computing.",
          "Protect your data with advanced cloud security measures.",
          "Get 24/7 support for seamless cloud operations and maintenance."
        ],
        image: cloudImg,
        cardTitle: "Optimizing Cloud Infrastructure for Smarter Business Decisions"
      }
    },
    {
      id: "mobile-development",
      title: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      content: {
        title: "App Development",
        bulletPoints: [
          "Designing mobile applications for better accessibility.",
          "Ensuring high performance and smooth user experience on mobile platforms.",
          "Providing cross-platform mobile application development services.",
          "Crafting responsive mobile application software for all screen sizes.",
          "Building apps with integrated push notifications and real-time updates.",
          "Maintaining mobile app development software for continued performance and reliability."
        ],
        image: appImg,
        cardTitle: "Turning Your Business Needs into Smart, Functional Apps"
      }
    },
    {
      id: "uiux-design",
      title: "UI/UX Design",
      icon: <Edit className="h-6 w-6" />,
      content: {
        title: "UI/UX Design",
        bulletPoints: [
          "Focus on users' needs for a seamless experience.",
          "Maintain visual and functional consistency for easy navigation.",
          "Ensure designs adapt across all devices and screen sizes.",
          "Make designs inclusive for all users, including those with disabilities.",
          "Prioritize content to guide users to key information effectively.",
          "Provide clear feedback to user actions through visual cues."
        ],
        image: uiuxImg,
        cardTitle: "Enhance User Satisfaction with our Flawless UI/UX Design"
      }
    },
    {
      id: "mvp-development",
      title: "MVP Development",
      icon: <Target className="h-6 w-6" />,
      content: {
        title: "MVP Development",
        bulletPoints: [
          "Turning ideas into scalable, market-ready MVPs.",
          "Rapid prototyping with core features implementation.",
          "User feedback integration for iterative improvement.",
          "Cost-effective development approach for startups.",
          "Quick market entry with minimal viable products.",
          "Scalable architecture for future growth."
        ],
        image: mvpImg,
        cardTitle: "Turning Ideas into Scalable, Market-Ready MVPs"
      }
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      icon: <BarChart3 className="h-6 w-6" />,
      content: {
        title: "Digital Marketing",
        bulletPoints: [
          "Drive more traffic, leads and sales with customized digital marketing.",
          "SEO optimization for better search engine rankings.",
          "Social media marketing and content strategy.",
          "Pay-per-click advertising campaigns.",
          "Email marketing automation and analytics.",
          "Conversion rate optimization for better results."
        ],
        image: digitalMarketingImg,
        cardTitle: "Drive More Traffic, Leads & Sales with Customized Digital Marketing Plan"
      }
    },
    {
      id: "data-engineering",
      title: "Data Engineering",
      icon: <Repeat className="h-6 w-6" />,
      content: {
        title: "Data Engineering",
        bulletPoints: [
          "Turn raw data into clear and useful information for better decisions.",
          "Automate how data is collected, cleaned, and organized for efficiency.",
          "Offer data engineering solutions that are according to businesses of all types and sizes.",
          "Use the latest tools to guarantee secure and reliable data management.",
          "Connect different data systems for a smooth and unified experience.",
          "Build flexible systems that grow with your business requirements."
        ],
        image: dataEngineeringImg,
        cardTitle: "Transforming Data into Business Intelligence"
      }
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What <span className="text-primary">Services</span> We Offer
          </h2>
          <p className="text-gray-600 text-lg">
            The complete work hub for professional services
          </p>
        </div>
        
        {/* Horizontal tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center w-14 h-14 rounded-full border-2 transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-gray-600 border-gray-300 hover:border-primary hover:text-primary"
              }`}
            >
              {tab.icon}
            </button>
          ))}
        </div>

        {/* Tab indicators */}
        <div className="flex justify-center gap-2 mb-12">
          {tabs.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                tabs[index].id === activeTab ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Content area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <div className="bg-primary text-white px-6 py-2 rounded-full inline-block">
              <h3 className="text-lg font-semibold">
                {activeTabData?.content.title}
              </h3>
            </div>
            
            <div className="space-y-4">
              {activeTabData?.content.bulletPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {point}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="pt-2">
              <Button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-medium transition-colors uppercase text-sm"
              >
                GET A QUOTE
              </Button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="lg:pl-8">
            <div className="rounded-2xl overflow-hidden h-[400px] w-full">
              <img 
                key={activeTab}
                src={activeTabData?.content.image} 
                alt={activeTabData?.content.cardTitle}
                className="w-full h-full object-contain bg-gray-50 transition-opacity duration-150"
              />
            </div>
          </div>
        </div>
      </div>
      
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </section>
  );
}
