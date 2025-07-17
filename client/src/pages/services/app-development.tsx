import React, { useState } from 'react';
import { 
  Smartphone, 
  Code, 
  Database, 
  Shield, 
  Zap, 
  Globe, 
  Monitor, 
  Settings, 
  Cloud, 
  Search,
  Eye,
  TrendingUp,
  Users,
  ChevronDown,
  ChevronUp,
  Palette,
  Server,
  Play
} from 'lucide-react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import QuoteModal from "@/components/quote-modal";

// FAQ Data
const faqData = [
  {
    question: "What platforms do you develop apps for?",
    answer: "We develop apps for both iOS and Android platforms, as well as cross-platform solutions using React Native and Flutter. We also create web applications and progressive web apps (PWAs) for maximum reach."
  },
  {
    question: "How long does it take to develop a mobile app?",
    answer: "App development timeline varies based on complexity. Simple apps take 2-4 months, while complex apps with advanced features can take 6-12 months. We provide detailed timelines after analyzing your requirements."
  },
  {
    question: "Do you provide app store submission services?",
    answer: "Yes, we handle the complete app store submission process for both Apple App Store and Google Play Store, including app optimization, compliance checks, and approval assistance."
  },
  {
    question: "What's included in your app development services?",
    answer: "Our services include UI/UX design, native and cross-platform development, API integration, testing, deployment, and ongoing maintenance. We also provide app store optimization and marketing support."
  },
  {
    question: "Can you integrate third-party services into the app?",
    answer: "Absolutely! We integrate various third-party services including payment gateways, social media APIs, analytics tools, cloud services, and any custom APIs your business requires."
  },
  {
    question: "Do you provide ongoing app maintenance?",
    answer: "Yes, we offer comprehensive post-launch support including bug fixes, performance optimization, feature updates, OS compatibility updates, and security patches to keep your app running smoothly."
  }
];

const AppDevelopment = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-20 pb-16">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Custom <span className="text-primary">App Development</span> Services
              </h1>
              <p className="text-lg mb-8">
                Get the Best Custom App Development Services! At XCon, our custom mobile app development tools empower businesses to connect with users on any device and provide a smooth, engaging experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
                >
                  GET A QUOTE
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                    <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2 text-lg">Mobile Apps</h3>
                    <p className="text-sm text-gray-300">Native & Cross-platform</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                    <Monitor className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2 text-lg">Multi-Platform Apps</h3>
                    <p className="text-sm text-gray-300">Unified experience</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                    <Code className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2 text-lg">API Integration</h3>
                    <p className="text-sm text-gray-300">Seamless connectivity</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                    <Settings className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2 text-lg">Post-Launch Support</h3>
                    <p className="text-sm text-gray-300">Ongoing maintenance</p>
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
              What <span className="text-primary">Custom App Development Services</span> We Offer?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cross-Platform App Development Company for Maximum Reach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Mobile UI/UX Design</h3>
              <p className="text-gray-600">
                Our android app development software design engaging and responsive mobile interfaces that improves user experience. From wireframing to final design, our team creates the best interfaces using advanced tools.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Native App Development</h3>
              <p className="text-gray-600">
                Build high-performance native apps for iOS and Android with platform-specific features and optimal user experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cross-Platform Development</h3>
              <p className="text-gray-600">
                Create apps that work seamlessly across multiple platforms using React Native, Flutter, and other modern frameworks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">API Integration</h3>
              <p className="text-gray-600">
                Integrate third-party services, payment gateways, social media APIs, and custom backend solutions for enhanced functionality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">App Security</h3>
              <p className="text-gray-600">
                Implement robust security measures including data encryption, secure authentication, and compliance with industry standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">App Store Optimization</h3>
              <p className="text-gray-600">
                Optimize your app for app store visibility, handle submissions, and provide ongoing ASO services for better discoverability.
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
              Why Choose <span className="text-primary">XCon</span> for App Development Solutions?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Efficiency Boost</h3>
              <p className="text-gray-600">
                XCon being one of the best app building companies provides comprehensive app development services for your business. Our custom android app development company focuses on scalability and performance.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure Apps</h3>
              <p className="text-gray-600">
                Implement advanced security protocols, data encryption, and secure authentication systems to protect user data and ensure compliance.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Scalable Architecture</h3>
              <p className="text-gray-600">
                Build flexible, scalable app architecture that can grow with your business and handle increasing user loads efficiently.
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
              Custom App Development <span className="text-primary">Our Process</span>
            </h2>
            <p className="text-lg text-gray-600">
              Our mobile application design company utilizes modern methodology that provides the best outcome. Here's the process we follow for custom app development for small businesses:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Discovery & Planning</h3>
              <p className="text-gray-600">
                In this initial phase, we properly understand your business, target audience, and objectives to create a comprehensive app development strategy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Research & Analysis</h3>
              <p className="text-gray-600">
                We conduct thorough market research and competitor analysis to ensure your app stands out and meets market demands.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Design & Prototyping</h3>
              <p className="text-gray-600">
                Create wireframes, mockups, and interactive prototypes to visualize the app interface and user experience before development.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">App Development</h3>
              <p className="text-gray-600">
                Build your mobile app using modern technologies and development practices with regular updates and milestone reviews.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
              <p className="text-gray-600">
                Comprehensive testing across devices, platforms, and scenarios to ensure your app is bug-free and performs optimally.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Launch Strategy</h3>
              <p className="text-gray-600">
                Deploy your app to app stores with proper launch strategy, monitoring, and ongoing support for successful market entry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Achievements Section */}
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
              <h3 className="text-xl font-semibold mb-2">30+</h3>
              <p className="text-gray-600">Mobile Experts</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">150+</h3>
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
              Get Custom <span className="text-primary">App Development Expertise</span> at XCon!
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We don't proclaim to be the best custom app development company, but we take pride in our expertise. Our professional, full-service in-house team follows a modern development process to deliver efficient, secure, and scalable products that businesses trust and appreciate.
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
              <p className="text-gray-600">Deep understanding of mobile app markets and user behavior</p>
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

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our custom app development services
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

export default AppDevelopment;