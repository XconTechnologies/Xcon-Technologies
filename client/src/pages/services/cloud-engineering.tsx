import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Cloud, Server, Shield, Zap } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import QuoteModal from "@/components/quote-modal";
import { useState } from "react";

export default function CloudEngineering() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-900 to-indigo-900 text-white py-20 pt-32">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
                Specialized Service
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-primary">Cloud Engineering</span> Excellence
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Architect, deploy, and optimize cloud infrastructure that scales with your business. Modern cloud solutions for maximum performance and cost efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  Get A Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-black bg-white hover:bg-gray-100"
                >
                  View Cloud Projects
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <Cloud className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Cloud Migration</h3>
                  <p className="text-sm text-gray-300">Seamless transition</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <Server className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Infrastructure</h3>
                  <p className="text-sm text-gray-300">Scalable architecture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">
                Modern <span className="text-primary">Cloud Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We design and implement cloud architectures that provide scalability, reliability, and security. 
                Our cloud engineering services help businesses leverage the full power of cloud computing.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Cloud Migration</h3>
                    <p className="text-gray-600">Seamless transition from on-premises to cloud</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Infrastructure as Code</h3>
                    <p className="text-gray-600">Automated infrastructure provisioning and management</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Auto-scaling Solutions</h3>
                    <p className="text-gray-600">Dynamic resource allocation based on demand</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Cost Optimization</h3>
                    <p className="text-gray-600">Reduce cloud costs while maintaining performance</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Service Highlights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cloud Deployments</span>
                    <span className="font-semibold">60+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average Timeline</span>
                    <span className="font-semibold">1-3 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cost Savings</span>
                    <span className="font-semibold">40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Uptime</span>
                    <span className="font-semibold">99.9%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cloud <span className="text-primary">Platforms</span>
            </h2>
            <p className="text-lg text-gray-600">
              We work with leading cloud platforms and modern DevOps tools
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform",
              "Jenkins", "GitLab CI", "Ansible", "CloudFormation", "Helm", "Prometheus"
            ].map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Cloud className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cloud <span className="text-primary">Engineering Process</span>
            </h2>
            <p className="text-lg text-gray-600">
              Systematic approach to cloud transformation and optimization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Assessment & Planning",
                description: "Evaluate current infrastructure and define cloud strategy"
              },
              {
                icon: <Server className="w-8 h-8" />,
                title: "Architecture Design",
                description: "Design scalable and secure cloud architecture"
              },
              {
                icon: <Cloud className="w-8 h-8" />,
                title: "Migration & Deployment",
                description: "Execute migration and deploy cloud infrastructure"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Optimization & Monitoring",
                description: "Optimize performance and monitor cloud resources"
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">{phase.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Transform your infrastructure with our expert cloud engineering services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-white text-primary hover:bg-gray-100"
            >
              Get A Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white hover:text-primary"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}