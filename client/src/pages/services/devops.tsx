import React, { useState } from 'react';
import { 
  GitBranch, 
  Code, 
  Server, 
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
  Monitor,
  Cog,
  RefreshCw
} from 'lucide-react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import QuoteModal from "@/components/quote-modal";

// FAQ Data
const faqData = [
  {
    question: "What is DevOps?",
    answer: "DevOps is a cultural and technical approach that combines software development (Dev) and IT operations (Ops) to improve collaboration, automate processes, and deliver software faster and more reliably."
  },
  {
    question: "How long does DevOps implementation take?",
    answer: "DevOps implementation timelines vary based on current infrastructure and goals. Initial setup takes 2-4 weeks, while full transformation can take 3-6 months with ongoing optimization."
  },
  {
    question: "What tools do you use for DevOps?",
    answer: "We use industry-standard tools including Docker, Kubernetes, Jenkins, GitLab CI/CD, AWS/Azure DevOps services, Terraform, Ansible, and monitoring tools like Prometheus and Grafana."
  },
  {
    question: "Can you help with existing infrastructure?",
    answer: "Yes, we can assess and optimize your existing infrastructure, implement CI/CD pipelines, containerization, and migrate to modern DevOps practices with minimal disruption."
  },
  {
    question: "Do you provide 24/7 monitoring and support?",
    answer: "Absolutely! We provide continuous monitoring, alerting, and support to ensure your applications and infrastructure run smoothly with minimal downtime."
  },
  {
    question: "How do you ensure security in DevOps?",
    answer: "We implement DevSecOps practices, integrating security into every stage of the development pipeline, including automated security testing, vulnerability scanning, and compliance monitoring."
  }
];

const DevOps = () => {
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
                Professional <span className="text-primary">DevOps</span> Services
              </h1>
              <p className="text-lg mb-8">
                Streamline Your Development Pipeline! Our DevOps services help businesses automate workflows, improve collaboration, and deliver software faster with continuous integration, deployment, and monitoring solutions.
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
                    <GitBranch className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2 text-lg">CI/CD Pipelines</h3>
                    <p className="text-sm text-gray-300">Automated deployment</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                    <Server className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2 text-lg">Infrastructure</h3>
                    <p className="text-sm text-gray-300">Scalable systems</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                    <Monitor className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2 text-lg">Monitoring</h3>
                    <p className="text-sm text-gray-300">Real-time insights</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                    <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2 text-lg">Automation</h3>
                    <p className="text-sm text-gray-300">Streamlined processes</p>
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
              What <span className="text-primary">DevOps Services</span> We Offer?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive DevOps Solutions for Modern Development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <GitBranch className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">CI/CD Implementation</h3>
              <p className="text-gray-600">
                Set up continuous integration and deployment pipelines to automate code testing, building, and deployment processes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Infrastructure as Code</h3>
              <p className="text-gray-600">
                Implement infrastructure as code using tools like Terraform and Ansible for consistent, repeatable deployments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Container Orchestration</h3>
              <p className="text-gray-600">
                Deploy and manage containerized applications using Docker and Kubernetes for scalable, portable solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Monitoring & Logging</h3>
              <p className="text-gray-600">
                Implement comprehensive monitoring, logging, and alerting systems for proactive issue detection and resolution.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Security Integration</h3>
              <p className="text-gray-600">
                Integrate security practices into DevOps workflows with automated security testing and compliance monitoring.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Cog className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Process Automation</h3>
              <p className="text-gray-600">
                Automate repetitive tasks and workflows to improve efficiency and reduce manual errors in your development process.
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
              Why Choose <span className="text-primary">XCon</span> for DevOps Solutions?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Accelerated Delivery</h3>
              <p className="text-gray-600">
                XCon helps you deliver software faster with automated CI/CD pipelines and streamlined development workflows.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Enhanced Security</h3>
              <p className="text-gray-600">
                Implement DevSecOps practices with automated security testing and compliance monitoring throughout the pipeline.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Improved Reliability</h3>
              <p className="text-gray-600">
                Reduce downtime and improve system reliability through automated testing, monitoring, and rapid issue resolution.
              </p>
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
              Get answers to common questions about our DevOps services
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

export default DevOps;