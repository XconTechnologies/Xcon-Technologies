import React, { useState } from 'react';
import { 
  Code, 
  Database, 
  Shield, 
  Zap, 
  Globe, 
  Monitor, 
  Settings, 
  Smartphone, 
  Cloud, 
  Search,
  Eye,
  TrendingUp,
  Users,
  ChevronDown,
  ChevronUp,
  Palette,
  Server,
  ShoppingCart,
  ArrowRight
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import QuoteModal from "@/components/quote-modal";

// FAQ Data
const faqData = [
  {
    question: "What is custom software development?",
    answer: "Custom software development is the process of creating software applications specifically designed for your business needs. Unlike off-the-shelf solutions, custom software is built from the ground up to match your exact requirements, workflow, and objectives."
  },
  {
    question: "How long does it take to develop custom software?",
    answer: "The timeline depends on the complexity and scope of your project. Simple applications may take 2-3 months, while complex enterprise solutions can take 6-12 months or more. We provide detailed timelines during the planning phase."
  },
  {
    question: "What technologies do you use for software development?",
    answer: "We use modern technologies including React, Node.js, Python, Java, .NET, databases like PostgreSQL and MongoDB, cloud platforms like AWS and Azure, and follow industry best practices for security and scalability."
  },
  {
    question: "Do you provide ongoing support after development?",
    answer: "Yes, we provide comprehensive post-launch support including bug fixes, updates, maintenance, and feature enhancements. We offer different support packages based on your needs."
  },
  {
    question: "How do you ensure software quality?",
    answer: "We follow rigorous testing procedures including unit testing, integration testing, and user acceptance testing. Our quality assurance team conducts thorough testing at every stage of development."
  },
  {
    question: "Can you integrate with existing systems?",
    answer: "Absolutely! We specialize in system integration and can connect your custom software with existing databases, APIs, third-party services, and legacy systems to ensure seamless operation."
  }
];

const SoftwareDevelopment = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 pt-32 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Custom <span className="text-primary">Software Development</span> Services
              </h1>
              <p className="text-lg mb-8">
                Get the Best Customer Software Development Services! Selecting the right custom software development services company for your business project is key to success. Our custom software developer delivers the best custom software design that support a smooth, multi-channel presence and help you connect with customers wherever they are.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg rounded-lg"
                >
                  Get A Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white bg-transparent hover:bg-white hover:text-black px-8 py-3 text-lg rounded-lg"
                >
                  View Our Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                    <Code className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2 text-lg">Custom Solutions</h3>
                    <p className="text-sm text-gray-300">Tailored software</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                    <Database className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2 text-lg">Database Design</h3>
                    <p className="text-sm text-gray-300">Optimized structure</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2 text-lg">Security & Compliance</h3>
                    <p className="text-sm text-gray-300">Protected systems</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                    <Settings className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2 text-lg">System Integration</h3>
                    <p className="text-sm text-gray-300">Seamless connectivity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What <span className="text-primary">Custom Software Development Services</span> We Offer?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Custom Software Solution for Multi-Platform Success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Mobile UI/UX Design</h3>
              <p className="text-gray-600">
                Our software engineering professionals creates stunning, user-friendly, and responsive mobile interfaces that improve user experience across all devices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Custom Web Applications</h3>
              <p className="text-gray-600">
                Build dynamic, scalable web applications tailored to your business processes with modern frameworks and technologies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Database Design & Management</h3>
              <p className="text-gray-600">
                Design and implement efficient database structures with optimal performance and data integrity for your applications.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Security & Compliance</h3>
              <p className="text-gray-600">
                Implement robust security measures and ensure compliance with industry standards to protect your software and data.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">System Integrations</h3>
              <p className="text-gray-600">
                Seamlessly connect your custom software with existing systems, APIs, and third-party services for unified operations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cloud Solutions</h3>
              <p className="text-gray-600">
                Develop cloud-native applications with scalability, reliability, and cost-effectiveness using modern cloud platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose XCon Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-primary">XCon</span> for Custom Software Product Development?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Customized Solutions</h3>
              <p className="text-gray-600">
                XCon provides end-to-end software development services and customized solutions that boost efficiency. From enterprise applications to specialized integrations, our custom software development services USA deliver dependable, scalable, and secure products.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Advanced Security</h3>
              <p className="text-gray-600">
                Implement industry-leading security practices, encryption, and compliance standards to protect your software and sensitive data from threats.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Scalable Architecture</h3>
              <p className="text-gray-600">
                Build flexible, modular architecture that grows with your business needs and adapts to changing requirements seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Custom Software Development <span className="text-primary">Our Process</span>
            </h2>
            <p className="text-lg text-gray-600">
              We implement an agile software development methodology developing collaboration and delivering timely. Here's the process we use for custom software development for small businesses:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Discovery & Planning</h3>
              <p className="text-gray-600">
                In this initial phase, we properly understand your business, target audience, and objectives to create a comprehensive development plan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Research & Analysis</h3>
              <p className="text-gray-600">
                We conduct thorough market research and competitor analysis to ensure your software solution stands out in the market.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Design & Prototyping</h3>
              <p className="text-gray-600">
                Create wireframes, mockups, and prototypes to visualize the software interface and user experience before development.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Development</h3>
              <p className="text-gray-600">
                Build your custom software using modern technologies and development practices with regular updates and feedback cycles.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
              <p className="text-gray-600">
                Comprehensive testing including unit tests, integration tests, and user acceptance testing to ensure bug-free software.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Launch Strategy</h3>
              <p className="text-gray-600">
                Deploy your software with proper launch strategy, monitoring, and ongoing support to ensure successful implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack We Use Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Tech Stack</span> We Use
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our software development solutions use the latest technologies for development according to your business. With a dedicated team of expert developers, we deliver innovative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12 mx-auto mb-4" />
              <p className="text-sm font-medium">JavaScript</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-12 h-12 mx-auto mb-4" />
              <p className="text-sm font-medium">Python</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-12 h-12 mx-auto mb-4" />
              <p className="text-sm font-medium">Java</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" className="w-12 h-12 mx-auto mb-4" />
              <p className="text-sm font-medium">C#</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-12 h-12 mx-auto mb-4" />
              <p className="text-sm font-medium">Node.js</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12 mx-auto mb-4" />
              <p className="text-sm font-medium">React</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" className="w-12 h-12 mx-auto mb-4" />
              <p className="text-sm font-medium">Angular</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" className="w-12 h-12 mx-auto mb-4" />
              <p className="text-sm font-medium">Vue.js</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring" className="w-12 h-12 mx-auto mb-4" />
              <p className="text-sm font-medium">Spring</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" alt=".NET" className="w-12 h-12 mx-auto mb-4" />
              <p className="text-sm font-medium">.NET</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-12 h-12 mx-auto mb-4" />
              <p className="text-sm font-medium">MySQL</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-12 h-12 mx-auto mb-4" />
              <p className="text-sm font-medium">PostgreSQL</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-12 h-12 mx-auto mb-4" />
              <p className="text-sm font-medium">MongoDB</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" className="w-12 h-12 mx-auto mb-4" />
              <p className="text-sm font-medium">Redis</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-12 h-12 mx-auto mb-4" />
              <p className="text-sm font-medium">Docker</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" className="w-12 h-12 mx-auto mb-4" />
              <p className="text-sm font-medium">AWS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Achievements Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Achievements
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">60+</div>
              <p className="text-lg">Software Experts</p>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <p className="text-lg">Successful Projects</p>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2 flex items-center justify-center">4.8 <span className="text-yellow-400 ml-2">★</span></div>
              <p className="text-lg">GoodFirms Rating</p>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2 flex items-center justify-center">4.9 <span className="text-yellow-400 ml-2">★</span></div>
              <p className="text-lg">Clutch Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Achievements</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">60+</h3>
              <p className="text-gray-600">Software Experts</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">200+</h3>
              <p className="text-gray-600">Successful Projects</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4.9/5</h3>
              <p className="text-gray-600">GoodFirms Rating</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4.8/5</h3>
              <p className="text-gray-600">Clutch Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Custom <span className="text-primary">Software Development Expertise</span> at XCon!
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We don't proclaim to be the best custom software development company, but we take pride in our expertise. Our professional, full-service in-house team follows a modern development process to deliver efficient, secure, and scalable products that businesses trust and appreciate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Tech Expertise</h3>
              <p className="text-gray-600">Enhance full-stack development with innovative low-code and cloud technologies</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
              <p className="text-gray-600">Deep understanding of various industries and business processes</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Faster Launch Times</h3>
              <p className="text-gray-600">Efficient development process with agile methodology</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Efficient Workflow</h3>
              <p className="text-gray-600">Streamlined development process with continuous integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Transform Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Join our satisfied clients and let's create something amazing together. Professional software development services tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg rounded-lg"
            >
              Get A Quote →
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white hover:text-primary px-8 py-3 text-lg rounded-lg"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our custom software development services
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full bg-white rounded-xl p-6 text-left hover:shadow-lg transition-shadow border border-gray-200"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                    {openFAQ === index ? (
                      <ChevronUp className="w-6 h-6 text-primary" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  {openFAQ === index && (
                    <div className="mt-4 text-gray-600">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  );
};

export default SoftwareDevelopment;