import { useState, useEffect } from "react";
import { Code, Database, Cloud, Smartphone, Edit, Target, BarChart3, Repeat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
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
  const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>({});

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
        cardTitle: "Unlock Growth with Scalable, SEO-Friendly Website Solutions",
        serviceUrl: "/services/web-development"
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
        cardTitle: "Smart Software for Smart Business Decisions",
        serviceUrl: "/services/software-development"
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
        cardTitle: "Optimizing Cloud Infrastructure for Smarter Business Decisions",
        serviceUrl: "/services/cloud-engineering"
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
        cardTitle: "Turning Your Business Needs into Smart, Functional Apps",
        serviceUrl: "/services/app-development"
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
        cardTitle: "Enhance User Satisfaction with our Flawless UI/UX Design",
        serviceUrl: "/services/web-development"
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
        cardTitle: "Turning Ideas into Scalable, Market-Ready MVPs",
        serviceUrl: "/services/mvp-development"
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
        cardTitle: "Drive More Traffic, Leads & Sales with Customized Digital Marketing Plan",
        serviceUrl: "/services/web-development"
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
        cardTitle: "Transforming Data into Business Intelligence",
        serviceUrl: "/services/data-engineering"
      }
    }
  ];

  // Preload images for better performance
  useEffect(() => {
    tabs.forEach(tab => {
      const img = new Image();
      img.src = tab.content.image;
      img.onload = () => setImageLoaded(prev => ({ ...prev, [tab.id]: true }));
    });
  }, [tabs]);

  // Auto-cycle through tabs every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(currentTab => {
        const currentIndex = tabs.findIndex(tab => tab.id === currentTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex].id;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [tabs]);

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What <span className="text-primary">Services</span> We Offer
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions designed to accelerate your business growth with cutting-edge technology
          </p>
        </div>
        
        {/* Professional Service Cards */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Service Navigation - Icons Only */}
          <div className="bg-gray-50 px-4 sm:px-8 py-4 sm:py-6 border-b border-gray-200">
            <div className="flex justify-center gap-2 sm:gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  title={tab.title}
                  className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-primary text-white shadow-lg scale-110"
                      : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm hover:scale-105"
                  }`}
                >
                  <span className="flex-shrink-0">{tab.icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="p-4 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Left side - Content */}
              <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full mb-4">
                    <span className="flex-shrink-0">{activeTabData?.icon}</span>
                    <span className="font-semibold text-sm sm:text-base">{activeTabData?.title}</span>
                  </div>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  {activeTabData?.content.bulletPoints.map((point, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 uppercase text-sm shadow-lg hover:shadow-xl w-full sm:w-auto"
                  >
                    GET A QUOTE
                  </Button>
                  <Link href={activeTabData?.content.serviceUrl || "#"}>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 uppercase text-sm w-full sm:w-auto"
                    >
                      VIEW SERVICE
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right side - Image */}
              <div className="relative order-1 lg:order-2">
                <div className="h-[300px] sm:h-[350px] md:h-[450px] rounded-2xl overflow-hidden bg-white shadow-lg relative">
                  {!imageLoaded[activeTab] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  <img 
                    key={activeTab}
                    src={activeTabData?.content.image} 
                    alt={activeTabData?.content.cardTitle}
                    className="w-full h-full object-cover transition-all duration-300"
                    loading="eager"
                    decoding="async"
                    onLoad={() => setImageLoaded(prev => ({ ...prev, [activeTab]: true }))}
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-20 sm:h-20 bg-primary/10 rounded-full"></div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-16 sm:h-16 bg-primary/5 rounded-full"></div>
              </div>
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
