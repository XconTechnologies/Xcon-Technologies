import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const [activeTab, setActiveTab] = useState("software-consulting");

  const tabs = [
    {
      id: "software-consulting",
      title: "Software consulting",
      content: {
        title: "Software consulting",
        description: "We provide pragmatic advice and practical assistance on every aspect of your solution, from architecture design to legal compliance. We also help compose an optimal project plan and a risk mitigation strategy so that you can confidently move to development.",
        services: [
          { title: "Digital BPM consulting", link: "#" },
          { title: "Agile consulting", link: "#" },
          { title: "Project management consulting", link: "#" },
          { title: "Software QA consulting", link: "#" },
          { title: "SaaS consulting", link: "#" },
          { title: "Microservices consulting", link: "#" },
          { title: "SOA consulting", link: "#" },
          { title: "DevOps consulting", link: "#" },
        ]
      }
    },
    {
      id: "software-engineering",
      title: "Software engineering",
      content: {
        title: "Software engineering",
        description: "We engineer software with long-term business value – tailored to your business processes and adjustable to future needs. Our teams run rigorous QA procedures and help smoothly integrate the new solution into your IT ecosystem.",
        services: [
          { title: "Web development", link: "#" },
          { title: "Application integration", link: "#" },
          { title: "Mobile development", link: "#" },
          { title: "Software testing", link: "#" },
          { title: "Back-end development", link: "#" },
          { title: "Custom API development", link: "#" },
        ]
      }
    },
    {
      id: "software-product-development",
      title: "Software product development",
      content: {
        title: "Software product development",
        description: "We turn your high-level idea into a ready-to-use commercial product, covering every aspect of software design and development and ensuring the high quality and ROI of a brand-new solution you bring to the market.",
        services: [
          { title: "Feasibility study", link: "#" },
          { title: "SaaS development", link: "#" },
          { title: "Software development for startups", link: "#" },
          { title: "SaaS enhancement", link: "#" },
        ]
      }
    },
    {
      id: "mvp-development",
      title: "MVP development",
      content: {
        title: "MVP development",
        description: "We help you release a basic software version with only core features in 1-4 months to gather early user feedback and start generating revenue quicker. After the MVP is launched, our teams steadily grow it to a fully featured solution according to user feedback, releasing new features every 2-4 weeks.",
        services: []
      }
    },
    {
      id: "large-scale-software-engineering",
      title: "Large-scale software engineering",
      content: {
        title: "Large-scale software engineering",
        description: "We bring our effective architectural practices, advanced technology expertise, and experience in managing large-scale, long-term projects to create specialized enterprise-level software that will seamlessly automate your most complex and data-intensive processes.",
        services: []
      }
    },
    {
      id: "software-support-maintenance",
      title: "Software support and maintenance",
      content: {
        title: "Software support and maintenance",
        description: "We provide comprehensive support and maintenance services to ensure your software continues to perform optimally, stays secure, and evolves with your business needs through regular updates and improvements.",
        services: []
      }
    },
    {
      id: "legacy-software-modernization",
      title: "Legacy software modernization",
      content: {
        title: "Legacy software modernization",
        description: "We help modernize your legacy systems by upgrading outdated technologies, improving performance, enhancing security, and ensuring compatibility with modern platforms while preserving your valuable business logic and data.",
        services: []
      }
    },
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <div className="bg-primary/10 rounded-lg p-4 inline-block mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Explore Our Offering</h2>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[500px]">
            {/* Left sidebar with tabs */}
            <div className="bg-primary/5 p-0">
              <div className="space-y-0">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-6 py-4 text-sm font-medium transition-all duration-200 border-b border-primary/10 ${
                      activeTab === tab.id
                        ? "bg-primary text-white"
                        : "text-gray-700 hover:bg-primary/10"
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Right content area */}
            <div className="lg:col-span-2 p-8">
              <div className="h-full flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {activeTabData?.content.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {activeTabData?.content.description}
                </p>
                
                {activeTabData?.content.services && activeTabData.content.services.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {activeTabData.content.services.map((service, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <a 
                          href={service.link}
                          className="text-gray-700 hover:text-primary transition-colors text-sm underline"
                        >
                          {service.title}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="mt-auto">
                  <button className="flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group">
                    <span className="mr-2">Check details</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
