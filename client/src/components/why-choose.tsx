import { Star, Settings, Globe, Database, Zap, MessageCircle, ArrowRight } from "lucide-react";

export default function WhyChoose() {

  const technologies = [
    { name: "backbone.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/backbonejs/backbonejs-original.svg" },
    { name: "Celery", icon: "https://docs.celeryq.dev/en/stable/_static/celery_512.png" },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "Flex", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
    { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "jQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
    { name: "node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "require.js", icon: "https://requirejs.org/i/logo.png" },
    { name: "SASS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
    { name: "Solr", icon: "https://lucene.apache.org/solr/assets/identity/Solr_Logo_on_white.png" },
    { name: "Zend Framework", icon: "https://framework.zend.com/img/logos/zf-logo-mark.svg" },
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
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        {/* Advanced Technology Solutions */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Advanced <span className="text-primary">Technology</span> Solutions
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              We're committed to helping you stay ahead of the competition with state-of-the-art digital solutions, tailored to your unique needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.slice(0, 16).map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 flex flex-col items-center text-center"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-12 h-12 mb-3 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="text-sm font-medium text-gray-700">
                  {tech.name}
                </span>
              </div>
            ))}
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