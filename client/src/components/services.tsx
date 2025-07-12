import { useState } from "react";
import { Code, Repeat, Monitor, Smartphone, Edit } from "lucide-react";

export default function Services() {
  const [activeTab, setActiveTab] = useState("web-development");

  const tabs = [
    {
      id: "web-development",
      title: "Web Application Development",
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
        image: "/api/placeholder/400/300"
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
        ],
        image: "/api/placeholder/400/300"
      }
    },
    {
      id: "digital-solutions",
      title: "Digital Solutions",
      icon: <Monitor className="h-6 w-6" />,
      content: {
        title: "Digital Solutions",
        bulletPoints: [
          "End-to-end digital transformation services.",
          "Cloud migration and integration solutions.",
          "Data analytics and business intelligence.",
          "Process automation and optimization.",
          "Digital marketing and e-commerce platforms."
        ],
        image: "/api/placeholder/400/300"
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
        ],
        image: "/api/placeholder/400/300"
      }
    },
    {
      id: "uiux-design",
      title: "UI/UX Design",
      icon: <Edit className="h-6 w-6" />,
      content: {
        title: "UI/UX Design",
        bulletPoints: [
          "User-centered design and research.",
          "Responsive web and mobile interfaces.",
          "Interactive prototypes and wireframes.",
          "Usability testing and optimization.",
          "Brand identity and visual design systems."
        ],
        image: "/api/placeholder/400/300"
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
                  Unlock Growth with Scalable, <span className="text-primary">SEO-Friendly Website</span> Solutions
                </h3>
                <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold mt-6 hover:bg-primary/90 transition-colors">
                  Get a Quote
                </button>
                <div className="mt-4 text-sm text-gray-400">
                  <p>askforqoute@xcontechnologies.com</p>
                  <p>www.xcontechnologies.com</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-primary/20 rounded-full"></div>
              <div className="absolute bottom-4 right-8 w-12 h-12 bg-white/10 rounded-lg"></div>
              <div className="absolute bottom-8 right-4 w-8 h-8 bg-primary/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
