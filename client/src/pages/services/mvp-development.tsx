import React, { useState } from 'react';
import { 
  Zap, 
  Code, 
  Target, 
  Shield, 
  Users, 
  Globe, 
  Smartphone, 
  Settings, 
  Search,
  Eye,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Rocket,
  BarChart3,
  Clock,
  ArrowRight
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import QuoteModal from "@/components/quote-modal";

// FAQ Data
const faqData = [
  {
    question: "What is MVP development?",
    answer: "MVP (Minimum Viable Product) development is the process of creating a basic version of your product with essential features to test market demand, gather user feedback, and validate your business idea before full-scale development."
  },
  {
    question: "How long does MVP development take?",
    answer: "MVP development typically takes 6-12 weeks, depending on complexity and features. We focus on rapid development to get your product to market quickly while maintaining quality."
  },
  {
    question: "What's included in MVP development?",
    answer: "Our MVP development includes market research, feature prioritization, UI/UX design, core functionality development, basic testing, deployment, and initial user feedback collection."
  },
  {
    question: "Can you help scale the MVP after launch?",
    answer: "Absolutely! We provide ongoing support to scale your MVP based on user feedback and market response, adding new features and improving existing ones."
  },
  {
    question: "How do you decide which features to include?",
    answer: "We conduct thorough market research and user analysis to identify core features that solve your target users' primary problems, focusing on essential functionality that validates your business model."
  },
  {
    question: "Do you provide post-launch analytics?",
    answer: "Yes, we implement analytics tools to track user behavior, engagement metrics, and performance indicators to help you make data-driven decisions for future development."
  }
];

const MVPDevelopment = () => {
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
                Professional <span className="text-primary">MVP Development</span> Services
              </h1>
              <p className="text-lg mb-8">
                Launch Your Ideas Faster! Our MVP development services help entrepreneurs and businesses quickly validate their ideas, test market demand, and build scalable minimum viable products that users love.
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
                    <Rocket className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2 text-lg">Rapid Launch</h3>
                    <p className="text-sm text-gray-300">Quick to market</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                    <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2 text-lg">Market Validation</h3>
                    <p className="text-sm text-gray-300">Proven concept</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2 text-lg">User Feedback</h3>
                    <p className="text-sm text-gray-300">Real insights</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                    <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2 text-lg">Cost-Effective</h3>
                    <p className="text-sm text-gray-300">Budget-friendly</p>
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
              What <span className="text-primary">MVP Development Services</span> We Offer?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive MVP Solutions for Startup Success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Market Research</h3>
              <p className="text-gray-600">
                Conduct thorough market research to validate your idea and identify target audience needs and preferences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Feature Prioritization</h3>
              <p className="text-gray-600">
                Identify and prioritize core features that solve users' primary problems and validate your business model.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
              <p className="text-gray-600">
                Create intuitive and engaging user interfaces that provide excellent user experience and drive engagement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Rapid Development</h3>
              <p className="text-gray-600">
                Build your MVP quickly using agile methodologies and modern development practices for faster time-to-market.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Analytics Integration</h3>
              <p className="text-gray-600">
                Implement analytics tools to track user behavior, engagement metrics, and performance indicators.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Scaling Strategy</h3>
              <p className="text-gray-600">
                Develop a roadmap for scaling your MVP based on user feedback and market response.
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
              Why Choose <span className="text-primary">XCon</span> for MVP Development?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Speed to Market</h3>
              <p className="text-gray-600">
                XCon focuses on rapid development and deployment to get your MVP to market quickly and test your idea with real users.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Market Validation</h3>
              <p className="text-gray-600">
                We help validate your business idea through thorough market research and user testing before full-scale development.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cost-Effective</h3>
              <p className="text-gray-600">
                Build and test your idea with minimal investment, reducing risk and maximizing your budget efficiency.
              </p>
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
            Join our satisfied clients and let's create something amazing together. Professional MVP development services tailored to your business needs.
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
              Get answers to common questions about our MVP development services
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

export default MVPDevelopment;