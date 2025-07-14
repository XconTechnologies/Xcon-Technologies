import { Star, Settings, Globe, Database, Zap, MessageCircle, ArrowRight } from "lucide-react";
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

export default function WhyChoose() {
  const technologies = [
    { name: "Node.js", logo: nodeLogo },
    { name: "OpenAI", logo: openaiLogo },
    { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
    { name: "MongoDB", logo: mongodbLogo },
    { name: "GraphQL", logo: graphqlLogo },
    { name: "Atlassian", logo: atlassianLogo },
    { name: "Flutter", logo: flutterLogo },
    { name: "AWS", logo: awsLogo },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: ".NET", logo: dotnetLogo },
    { name: "React", logo: reactLogo },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  ];

  const features = [
    {
      icon: <Star className="h-8 w-8" />,
      title: "Resource Flexibility",
      description: "Our software dev company offers scalable resource solutions tailored to your project needs. Whether scaling up or down, our flexible approach ensures optimized efficiency and cost control, helping your business stay agile in a fast-changing environment.",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Managed Services",
      description: "Being the top software development company in USA, XCon Technologies' Managed Services, focus on your core business while we handle the IT. Our proactive approach ensures smooth operations, minimizing downtime and reducing costs.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web-Based Access",
      description: "Access your business tools anytime, anywhere with XCon web-based solutions. Our secure applications enable seamless connectivity, real-time collaboration, and decision-making from any device, enhancing productivity with intuitive, user-friendly interfaces.",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Anomaly Detection",
      description: "Anomaly detection uses advanced algorithms to identify irregular patterns in data, enabling businesses to spot potential issues early. This proactive approach enhances operational efficiency and minimizes risks, ensuring your systems run smoothly.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Predictive Analytics",
      description: "Predictive analytics leverages historical data and advanced algorithms to forecast latest software trends. By uncovering valuable insights, it empowers software development agencies and other businesses to make informed decisions, optimize strategies, and drive growth in a competitive landscape.",
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Seamless Communication",
      description: "Experience effortless communication with our advanced speech recognition solutions. Transform voice commands into actions, enhancing user interaction and accessibility across platforms and guaranteeing a smoother and more productive experience.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        {/* Technology Stack */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              <span className="text-primary">Innovate</span> with the Right Software Team
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              We're committed to helping you stay ahead of the competition with state-of-the-art digital solutions, tailored to your unique needs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 min-h-[120px]"
              >
                <img 
                  src={tech.logo} 
                  alt={tech.name}
                  className="w-12 h-12 mb-2 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <span className="text-sm font-medium text-gray-700 text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Why Choose <span className="text-primary">XCon Technologies</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group"
              >
                <div className="mb-6">
                  <div className="text-gray-800 group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-white/90 transition-colors">
                  {feature.description}
                </p>
                <button className="text-gray-800 group-hover:text-white transition-colors">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}