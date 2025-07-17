import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, MessageSquare, Lightbulb, TrendingUp, Users } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import QuoteModal from "@/components/quote-modal";
import { useState } from "react";

export default function ItConsultation() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-violet-900 to-purple-900 text-white py-20 pt-32">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
                Additional Service
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-primary">IT Consultation</span> Services
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Strategic technology guidance to optimize your IT infrastructure, reduce costs, and accelerate digital transformation. Expert advice tailored to your business needs.
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
                  View Success Stories
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <Lightbulb className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Strategic Planning</h3>
                  <p className="text-sm text-gray-300">Technology roadmap</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Business Growth</h3>
                  <p className="text-sm text-gray-300">Digital transformation</p>
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
                Expert <span className="text-primary">IT Consultation</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our IT consultants provide strategic guidance to help you make informed technology decisions. 
                We analyze your current systems, identify opportunities for improvement, and create actionable roadmaps for success.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Technology Strategy</h3>
                    <p className="text-gray-600">Comprehensive technology assessments and strategic planning</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Digital Transformation</h3>
                    <p className="text-gray-600">Modernization roadmaps and transformation guidance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">System Architecture</h3>
                    <p className="text-gray-600">Scalable and secure architecture design recommendations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Cost Optimization</h3>
                    <p className="text-gray-600">Reduce IT costs while improving efficiency and performance</p>
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
                    <span className="text-gray-600">Consultations</span>
                    <span className="font-semibold">150+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Timeline</span>
                    <span className="font-semibold">Flexible</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cost Reduction</span>
                    <span className="font-semibold">35%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Client Satisfaction</span>
                    <span className="font-semibold">98%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Consultation Process</span>
            </h2>
            <p className="text-lg text-gray-600">
              A structured approach to understanding your needs and delivering actionable insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Discovery & Assessment",
                description: "Analyze current systems and business requirements"
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Strategic Planning",
                description: "Develop technology roadmap and recommendations"
              },
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Implementation Guidance",
                description: "Provide step-by-step implementation support"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Ongoing Support",
                description: "Continuous monitoring and optimization advice"
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
            Ready to Optimize Your IT Strategy?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss your technology challenges and create a roadmap for success
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
