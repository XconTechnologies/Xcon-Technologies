import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Smartphone, Apple, Play, Star } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import QuoteModal from "@/components/quote-modal";
import { useState } from "react";

export default function AppDevelopment() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20 pt-32">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
                Core Service
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Mobile <span className="text-primary">App Development</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Create stunning mobile applications that engage users and drive business growth. Native iOS, Android, and cross-platform solutions.
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
                  View App Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Apple className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-sm">iOS Apps</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Play className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-sm">Android Apps</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Smartphone className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-sm">Cross-Platform</h3>
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
                Professional <span className="text-primary">Mobile Apps</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We create mobile applications that provide exceptional user experiences across all platforms. 
                From concept to app store deployment, we handle the entire development lifecycle.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Native iOS Development</h3>
                    <p className="text-gray-600">Swift and Objective-C apps optimized for Apple ecosystem</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Native Android Development</h3>
                    <p className="text-gray-600">Kotlin and Java apps for Google Play Store</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Cross-Platform Apps</h3>
                    <p className="text-gray-600">React Native and Flutter for multiple platforms</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">UI/UX Design</h3>
                    <p className="text-gray-600">Intuitive interfaces following platform guidelines</p>
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
                    <span className="text-gray-600">Apps Launched</span>
                    <span className="font-semibold">75+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average Timeline</span>
                    <span className="font-semibold">3-6 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">App Store Rating</span>
                    <span className="font-semibold flex items-center">4.8 <Star className="w-4 h-4 text-yellow-400 ml-1" /></span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Downloads</span>
                    <span className="font-semibold">2M+</span>
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
              Mobile <span className="text-primary">Technologies</span>
            </h2>
            <p className="text-lg text-gray-600">
              We use the latest mobile development technologies and frameworks
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic",
              "Firebase", "AWS Amplify", "GraphQL", "Redux", "SQLite", "Realm"
            ].map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              App <span className="text-primary">Development Process</span>
            </h2>
            <p className="text-lg text-gray-600">
              From idea to app store success - our proven mobile development methodology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Ideation & Strategy",
                description: "Market research and app concept validation"
              },
              {
                step: "02",
                title: "UI/UX Design",
                description: "Wireframes, prototypes, and visual design"
              },
              {
                step: "03",
                title: "Development",
                description: "Native or cross-platform app development"
              },
              {
                step: "04",
                title: "Testing & QA",
                description: "Device testing and quality assurance"
              },
              {
                step: "05",
                title: "Launch & Support",
                description: "App store submission and ongoing support"
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
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
            Ready to Launch Your Mobile App?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Turn your app idea into reality with our expert mobile development team
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