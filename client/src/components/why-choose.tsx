import { Star, Settings, Globe, Database, Zap, MessageCircle, ArrowRight } from "lucide-react";

// Technology logos array
const technologies = [
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "OpenAI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openai/openai-original.svg" },
  { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
  { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Meta", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg" },
  { name: "DotNet", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Vue", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg" },
  { name: "Microsoft Teams", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
  { name: "PowerApps", logo: "https://img.icons8.com/color/96/microsoft-power-apps.png" },
  { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Notion", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg" },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" }
];

export default function WhyChoose() {


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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Emerging <span className="text-primary">Technologies</span> We Use
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              We're committed to helping you stay ahead of the competition with state-of-the-art digital solutions, tailored to your unique needs.
            </p>
          </div>
          
          {/* Technology Logos Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right gap-8 items-center">
              {/* First set of logos */}
              {technologies.map((tech, index) => (
                <div key={index} className="flex-shrink-0 flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 min-w-[120px] h-16">
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {technologies.map((tech, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 min-w-[120px] h-16">
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
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