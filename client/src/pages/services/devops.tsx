import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, GitBranch, Zap, Shield, Settings } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import QuoteModal from "@/components/quote-modal";
import { useState } from "react";

export default function DevOps() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-gray-900 text-white py-20 pt-32">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
                Additional Service
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-primary">DevOps</span> Excellence
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Streamline your development pipeline with automated CI/CD, infrastructure as code, and monitoring solutions. Accelerate delivery while maintaining quality.
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
                  View DevOps Case Studies
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <GitBranch className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">CI/CD Pipelines</h3>
                  <p className="text-sm text-gray-300">Automated deployment</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <Settings className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Infrastructure</h3>
                  <p className="text-sm text-gray-300">As code automation</p>
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
                Modern <span className="text-primary">DevOps Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We implement DevOps practices that bridge the gap between development and operations teams. 
                Our solutions automate workflows, improve collaboration, and accelerate time-to-market.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">CI/CD Pipelines</h3>
                    <p className="text-gray-600">Automated testing and deployment workflows</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Infrastructure Automation</h3>
                    <p className="text-gray-600">Infrastructure as code with version control</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Monitoring & Logging</h3>
                    <p className="text-gray-600">Real-time system monitoring and alerting</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Security Integration</h3>
                    <p className="text-gray-600">DevSecOps practices for secure deployments</p>
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
                    <span className="text-gray-600">Implementations</span>
                    <span className="font-semibold">80+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average Timeline</span>
                    <span className="font-semibold">2-4 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Deployment Speed</span>
                    <span className="font-semibold">10x faster</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Error Reduction</span>
                    <span className="font-semibold">75%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Accelerate Your Development?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's implement DevOps practices that transform your development workflow
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
