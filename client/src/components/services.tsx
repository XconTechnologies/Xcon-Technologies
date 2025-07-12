import { useState } from "react";
import { Code, Database, Cloud, Smartphone, Repeat } from "lucide-react";

export default function Services() {
  const [activeTab, setActiveTab] = useState("cloud-engineering");

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
        ]
      }
    },
    {
      id: "database-management",
      title: "Database Management",
      icon: <Database className="h-6 w-6" />,
      content: {
        title: "Database Management",
        bulletPoints: [
          "Database design and optimization for maximum performance.",
          "Data migration and integration services.",
          "Database security and backup solutions.",
          "Performance monitoring and tuning.",
          "Cloud database implementation and management."
        ]
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
        ]
      }
    },
    {
      id: "mobile-development",
      title: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      content: {
        title: "Mobile Development",
        bulletPoints: [
          "Native iOS and Android app development.",
          "Cross-platform mobile solutions.",
          "Progressive web applications (PWAs).",
          "Mobile app testing and optimization.",
          "App store deployment and maintenance."
        ]
      }
    },
    {
      id: "software-consulting",
      title: "Software Consulting",
      icon: <Repeat className="h-6 w-6" />,
      content: {
        title: "Software Consulting",
        bulletPoints: [
          "Strategic software planning and architecture design.",
          "Technology stack selection and optimization.",
          "Risk assessment and mitigation strategies.",
          "Compliance and security advisory services.",
          "Performance optimization and scalability planning."
        ]
      }
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What <span className="text-primary">Services</span> We Offer
          </h2>
          <p className="text-gray-600 text-lg">
            The complete work hub for professional services
          </p>
        </div>
        
        {/* Horizontal tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center w-16 h-16 rounded-full border-2 transition-all duration-300 ${
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <div className="bg-primary text-white px-6 py-2 rounded-full inline-block mb-6">
              <h3 className="text-lg font-semibold">
                {activeTabData?.content.title}
              </h3>
            </div>
            
            <div className="space-y-4">
              {activeTabData?.content.bulletPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="lg:pl-8">
            <div className="bg-gray-900 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">
                  <span className="text-primary">Optimizing Cloud Infrastructure</span> for Smarter Business Decisions.
                </h3>
                <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold mt-6 hover:bg-primary/90 transition-colors">
                  Get a Quote
                </button>
                <div className="mt-4 text-sm text-gray-400">
                  <p>askforqoute@xcontechnologies.com</p>
                  <p>www.xcontechnologies.com</p>
                </div>
              </div>
              
              {/* Decorative elements - Cloud/Server icons */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                <Cloud className="h-8 w-8 text-primary" />
              </div>
              <div className="absolute bottom-4 right-8 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <Database className="h-6 w-6 text-white/70" />
              </div>
              <div className="absolute bottom-8 right-4 w-8 h-8 bg-primary/30 rounded-full"></div>
              <div className="absolute top-1/2 right-2 w-6 h-6 bg-green-400/20 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
