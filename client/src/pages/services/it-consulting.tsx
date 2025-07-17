import React, { useState } from 'react';
import { 
  Users, 
  Code, 
  Target, 
  Shield, 
  Zap, 
  Globe, 
  Lightbulb, 
  Settings, 
  Search,
  Eye,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Monitor,
  CheckCircle,
  BarChart3,
  ArrowRight
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import QuoteModal from "@/components/quote-modal";

// FAQ Data
const faqData = [
  {
    question: "What is IT consulting?",
    answer: "IT consulting involves providing expert advice and guidance on technology strategy, implementation, and optimization to help businesses leverage technology effectively for growth and competitive advantage."
  },
  {
    question: "What areas do you cover in IT consulting?",
    answer: "We cover digital transformation, technology strategy, system integration, cybersecurity, cloud migration, infrastructure optimization, and IT governance to support your business objectives."
  },
  {
    question: "How long does an IT consulting engagement take?",
    answer: "Consulting engagements vary based on scope. Strategy assessments take 2-4 weeks, while comprehensive transformation projects can span 3-12 months with ongoing support."
  },
  {
    question: "Do you provide ongoing IT support?",
    answer: "Yes, we offer continuous IT support including system monitoring, maintenance, strategic guidance, and technology roadmap updates to ensure your IT infrastructure remains optimized."
  },
  {
    question: "Can you help with digital transformation?",
    answer: "Absolutely! We specialize in digital transformation strategies, helping businesses modernize their operations, adopt new technologies, and improve efficiency through technology innovation."
  },
  {
    question: "Do you work with small businesses?",
    answer: "Yes, we work with businesses of all sizes, from startups to enterprises, providing scalable IT consulting solutions tailored to your specific needs and budget."
  }
];

const ITConsulting = () => {
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
                Professional <span className="text-primary">IT Consulting</span> Services
              </h1>
              <p className="text-lg mb-8">
                Transform Your Business with Expert IT Strategy! Our IT consulting services help businesses leverage technology effectively, optimize operations, and achieve digital transformation goals with strategic guidance and technical expertise.
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
                    <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2 text-lg">Strategy</h3>
                    <p className="text-sm text-gray-300">Technology roadmap</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                    <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2 text-lg">Digital Transformation</h3>
                    <p className="text-sm text-gray-300">Modern solutions</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2 text-lg">Security</h3>
                    <p className="text-sm text-gray-300">Protected systems</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                    <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2 text-lg">Growth</h3>
                    <p className="text-sm text-gray-300">Business optimization</p>
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
              What <span className="text-primary">IT Consulting Services</span> We Offer?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategic Technology Solutions for Business Success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Technology Strategy</h3>
              <p className="text-gray-600">
                Develop comprehensive technology strategies aligned with your business goals and market requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Digital Transformation</h3>
              <p className="text-gray-600">
                Guide your organization through digital transformation with modern technologies and optimized processes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">System Integration</h3>
              <p className="text-gray-600">
                Integrate disparate systems and applications to create unified, efficient technology ecosystems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cybersecurity Consulting</h3>
              <p className="text-gray-600">
                Assess and strengthen your security posture with comprehensive cybersecurity strategies and solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">IT Governance</h3>
              <p className="text-gray-600">
                Establish IT governance frameworks to ensure technology investments align with business objectives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Infrastructure Optimization</h3>
              <p className="text-gray-600">
                Optimize your IT infrastructure for performance, scalability, and cost-effectiveness.
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
              Why Choose <span className="text-primary">XCon</span> for IT Consulting?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
              <p className="text-gray-600">
                XCon's experienced consultants bring deep technical expertise and industry knowledge to every project.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Business-Focused</h3>
              <p className="text-gray-600">
                We align technology solutions with your business objectives to drive measurable results and growth.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
              <p className="text-gray-600">
                Track record of successful IT transformations and strategic implementations across various industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">IT Consulting</span> Process
            </h2>
            <p className="text-lg text-gray-600">
              A systematic approach to technology strategy and implementation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mb-4 font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Discovery & Assessment</h3>
              <p className="text-gray-600">
                Comprehensive analysis of your current technology infrastructure, business processes, and strategic objectives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mb-4 font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Strategy Development</h3>
              <p className="text-gray-600">
                Create customized technology roadmaps and strategic plans aligned with your business goals and market requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mb-4 font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Solution Design</h3>
              <p className="text-gray-600">
                Design comprehensive technology solutions that address your specific challenges and opportunities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mb-4 font-bold text-lg">
                4
              </div>
              <h3 className="text-xl font-semibold mb-4">Implementation Planning</h3>
              <p className="text-gray-600">
                Develop detailed implementation plans with timelines, resource allocation, and risk management strategies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mb-4 font-bold text-lg">
                5
              </div>
              <h3 className="text-xl font-semibold mb-4">Execution & Support</h3>
              <p className="text-gray-600">
                Guide implementation processes and provide ongoing support to ensure successful technology adoption.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mb-4 font-bold text-lg">
                6
              </div>
              <h3 className="text-xl font-semibold mb-4">Optimization & Growth</h3>
              <p className="text-gray-600">
                Continuous monitoring, optimization, and strategic adjustments to maximize technology value and business impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack We Use Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Tech Stack</span> We Use
            </h2>
            <p className="text-lg text-gray-600">
              Leveraging cutting-edge technologies for optimal IT solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "Microsoft Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
              { name: "Amazon AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
              { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
              { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
              { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
              { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
              { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
              { name: "Ansible", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
              { name: "VMware", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vmware/vmware-original.svg" },
              { name: "Splunk", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/splunk/splunk-original.svg" },
              { name: "Grafana", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
              { name: "Prometheus", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" }
            ].map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow text-center">
                <img src={tech.logo} alt={tech.name} className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-sm font-medium text-gray-800">{tech.name}</h3>
              </div>
            ))}
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
            <p className="text-lg text-gray-600">
              Proven track record of successful IT consulting projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">150+</h3>
              <p className="text-gray-600">Successful Consulting Projects</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">98%</h3>
              <p className="text-gray-600">Client Satisfaction Rate</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">12+</h3>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4.9/5</h3>
              <p className="text-gray-600">Clutch Rating</p>
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
            Join our satisfied clients and let's create something amazing together. Professional IT consulting services tailored to your business needs.
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
              Get answers to common questions about our IT consulting services
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

export default ITConsulting;