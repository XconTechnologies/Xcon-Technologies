import React, { useState } from 'react';
import { 
  Database, 
  Code, 
  BarChart3, 
  Shield, 
  Zap, 
  Globe, 
  Cloud, 
  Settings, 
  Search,
  Eye,
  TrendingUp,
  Users,
  ChevronDown,
  ChevronUp,
  Server,
  Activity,
  FileText
} from 'lucide-react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import QuoteModal from "@/components/quote-modal";

// FAQ Data
const faqData = [
  {
    question: "What is data engineering?",
    answer: "Data engineering involves designing, building, and maintaining the systems and infrastructure that collect, store, process, and analyze data. It focuses on making data accessible and useful for business decisions and analytics."
  },
  {
    question: "How long does a data engineering project take?",
    answer: "Project timelines vary based on complexity. Simple data pipelines take 2-4 weeks, while comprehensive data platforms can take 3-6 months. We provide detailed timelines during the planning phase."
  },
  {
    question: "What technologies do you use for data engineering?",
    answer: "We use modern technologies including Python, Apache Spark, Kafka, AWS/Azure data services, Snowflake, PostgreSQL, MongoDB, and various ETL/ELT tools depending on your specific requirements."
  },
  {
    question: "Do you provide data migration services?",
    answer: "Yes, we offer complete data migration services from legacy systems to modern platforms, ensuring data integrity, minimal downtime, and smooth transitions."
  },
  {
    question: "Can you help with real-time data processing?",
    answer: "Absolutely! We specialize in real-time data processing using technologies like Apache Kafka, Apache Spark Streaming, and cloud-native streaming services for immediate data insights."
  },
  {
    question: "Do you provide ongoing data platform maintenance?",
    answer: "Yes, we offer comprehensive post-deployment support including monitoring, performance optimization, troubleshooting, and system updates to keep your data infrastructure running smoothly."
  }
];

const DataEngineering = () => {
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
                Professional <span className="text-primary">Data Engineering</span> Services
              </h1>
              <p className="text-lg mb-8">
                Transform Your Data into Business Value! Our data engineering services help businesses build robust data pipelines, implement scalable data architectures, and create data-driven solutions that fuel business growth and informed decision-making.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  GET A QUOTE
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                  View Our Portfolio
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                    <Database className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2 text-lg">Data Pipelines</h3>
                    <p className="text-sm text-gray-300">Automated processing</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                    <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2 text-lg">Analytics Platform</h3>
                    <p className="text-sm text-gray-300">Real-time insights</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                    <Cloud className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2 text-lg">Cloud Integration</h3>
                    <p className="text-sm text-gray-300">Scalable solutions</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2 text-lg">Data Security</h3>
                    <p className="text-sm text-gray-300">Protected systems</p>
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
              What <span className="text-primary">Data Engineering Services</span> We Offer?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive Data Solutions for Modern Businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Data Pipeline Development</h3>
              <p className="text-gray-600">
                Build robust ETL/ELT pipelines that extract, transform, and load data from multiple sources into your data warehouse or lake for analysis.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Data Architecture Design</h3>
              <p className="text-gray-600">
                Design scalable data architectures that support your business growth and ensure efficient data flow across your organization.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Real-time Data Processing</h3>
              <p className="text-gray-600">
                Implement real-time data processing systems for immediate insights and faster decision-making capabilities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cloud Data Solutions</h3>
              <p className="text-gray-600">
                Migrate and optimize your data infrastructure on cloud platforms like AWS, Azure, or Google Cloud for scalability and cost-efficiency.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Analytics & BI Solutions</h3>
              <p className="text-gray-600">
                Create comprehensive analytics and business intelligence solutions to turn your data into actionable insights.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Data Quality Management</h3>
              <p className="text-gray-600">
                Implement data quality frameworks and monitoring systems to ensure data accuracy, consistency, and reliability.
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
              Why Choose <span className="text-primary">XCon</span> for Data Engineering Solutions?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Database className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Scalable Solutions</h3>
              <p className="text-gray-600">
                XCon delivers scalable data engineering solutions that grow with your business needs, handling increasing data volumes and complexity efficiently.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Data Security</h3>
              <p className="text-gray-600">
                Implement robust security measures, encryption, and compliance frameworks to protect your sensitive data assets.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Performance Optimization</h3>
              <p className="text-gray-600">
                Optimize data processing performance with advanced techniques and technologies for faster insights and better user experience.
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
              Data Engineering <span className="text-primary">Our Process</span>
            </h2>
            <p className="text-lg text-gray-600">
              We follow a systematic approach to deliver robust data engineering solutions that meet your business objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Data Assessment</h3>
              <p className="text-gray-600">
                Analyze your current data landscape, identify sources, and understand your data requirements and business objectives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Architecture Design</h3>
              <p className="text-gray-600">
                Design scalable data architecture that supports your current needs and future growth requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Pipeline Development</h3>
              <p className="text-gray-600">
                Build robust data pipelines using modern technologies and best practices for reliable data processing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Testing & Quality</h3>
              <p className="text-gray-600">
                Implement comprehensive testing and quality assurance processes to ensure data accuracy and system reliability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Deployment</h3>
              <p className="text-gray-600">
                Deploy your data infrastructure with proper monitoring, alerting, and security measures in place.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Monitoring & Support</h3>
              <p className="text-gray-600">
                Provide ongoing monitoring, maintenance, and support to ensure optimal performance and data quality.
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
              <h3 className="text-xl font-semibold mb-2">25+</h3>
              <p className="text-gray-600">Data Engineers</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100+</h3>
              <p className="text-gray-600">Data Projects</p>
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

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our data engineering services
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

export default DataEngineering;