import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code, 
  Smartphone, 
  Globe, 
  Cloud, 
  Brain, 
  Gamepad2, 
  TrendingUp, 
  Users,
  Blocks,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import QuoteModal from "@/components/quote-modal";

const services = [
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description: "Build native and cross-platform mobile applications",
    icon: <Smartphone className="w-8 h-8" />,
    category: "core",
    features: [
      "Native iOS Development",
      "Native Android Development", 
      "Cross-platform Development",
      "UI/UX Design",
      "App Store Optimization",
      "Maintenance & Support"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"],
    projects: "50+ Mobile Apps",
    timeline: "3-6 months"
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Create responsive and scalable web applications",
    icon: <Globe className="w-8 h-8" />,
    category: "core",
    features: [
      "Frontend Development",
      "Backend Development",
      "Full-stack Solutions",
      "E-commerce Platforms",
      "CMS Development",
      "API Integration"
    ],
    technologies: ["React", "Node.js", "Next.js", "Python", "PHP"],
    projects: "100+ Websites",
    timeline: "2-4 months"
  },
  {
    id: "custom-software-development",
    title: "Custom Software Development",
    description: "Enterprise-grade software solutions tailored to your needs",
    icon: <Code className="w-8 h-8" />,
    category: "core",
    features: [
      "Enterprise Software",
      "SaaS Applications",
      "CRM Solutions",
      "ERP Systems",
      "Database Design",
      "System Integration"
    ],
    technologies: ["Java", "C#", ".NET", "Python", "PostgreSQL"],
    projects: "30+ Enterprise Apps",
    timeline: "4-8 months"
  },
  {
    id: "cloud-services",
    title: "Cloud Services",
    description: "Scalable cloud solutions and infrastructure management",
    icon: <Cloud className="w-8 h-8" />,
    category: "specialized",
    features: [
      "Cloud Migration",
      "Infrastructure Setup",
      "DevOps Services",
      "Auto-scaling Solutions",
      "Security & Compliance",
      "24/7 Monitoring"
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
    projects: "40+ Cloud Deployments",
    timeline: "1-3 months"
  },
  {
    id: "artificial-intelligence",
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by AI and machine learning",
    icon: <Brain className="w-8 h-8" />,
    category: "specialized",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "Chatbots & Virtual Assistants",
      "AI Integration"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "scikit-learn"],
    projects: "20+ AI Solutions",
    timeline: "3-6 months"
  },
  {
    id: "blockchain-development",
    title: "Blockchain Development",
    description: "Secure and transparent blockchain solutions",
    icon: <Blocks className="w-8 h-8" />,
    category: "specialized",
    features: [
      "Smart Contracts",
      "DeFi Applications",
      "NFT Marketplaces",
      "Cryptocurrency Wallets",
      "Blockchain Integration",
      "Security Audits"
    ],
    technologies: ["Solidity", "Web3.js", "Ethereum", "Polygon", "Hardhat"],
    projects: "15+ Blockchain Apps",
    timeline: "4-7 months"
  },
  {
    id: "game-development",
    title: "Game Development",
    description: "Engaging games for mobile, web, and desktop platforms",
    icon: <Gamepad2 className="w-8 h-8" />,
    category: "additional",
    features: [
      "Mobile Games",
      "Web Games",
      "AR/VR Experiences",
      "Multiplayer Games",
      "Game Design",
      "Game Testing"
    ],
    technologies: ["Unity", "Unreal Engine", "C#", "JavaScript", "WebGL"],
    projects: "25+ Games",
    timeline: "3-8 months"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies and campaigns",
    icon: <TrendingUp className="w-8 h-8" />,
    category: "additional",
    features: [
      "SEO Optimization",
      "Social Media Marketing",
      "Pay-per-Click Advertising",
      "Content Marketing",
      "Email Marketing",
      "Analytics & Reporting"
    ],
    technologies: ["Google Ads", "Facebook Ads", "Google Analytics", "SEMrush"],
    projects: "60+ Marketing Campaigns",
    timeline: "1-3 months"
  },
  {
    id: "staff-augmentation",
    title: "Staff Augmentation",
    description: "Skilled developers and technical experts for your team",
    icon: <Users className="w-8 h-8" />,
    category: "additional",
    features: [
      "Dedicated Developers",
      "Technical Consultancy",
      "Project Management",
      "Quality Assurance",
      "Code Review",
      "Knowledge Transfer"
    ],
    technologies: ["Various based on requirements"],
    projects: "100+ Developer Placements",
    timeline: "Flexible"
  }
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const filteredServices = selectedCategory === "all" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-20 pt-32">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions to transform your business and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                className="border-white text-black bg-white hover:bg-gray-100 hover:text-black"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Filter */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-8">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
              <TabsTrigger value="all">All Services</TabsTrigger>
              <TabsTrigger value="core">Core Services</TabsTrigger>
              <TabsTrigger value="specialized">Specialized</TabsTrigger>
              <TabsTrigger value="additional">Additional</TabsTrigger>
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <Card key={service.id} className="h-full hover:shadow-lg transition-shadow flex flex-col">
                    <CardHeader className="flex-shrink-0">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-lg bg-gray-100 text-primary">
                          {service.icon}
                        </div>
                        <Badge className="bg-primary/10 text-primary">
                          {service.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {service.features.slice(0, 4).map((feature, index) => (
                              <li key={index} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-medium text-gray-700">Projects</p>
                            <p className="text-gray-600">{service.projects}</p>
                          </div>
                          <div>
                            <p className="font-medium text-gray-700">Timeline</p>
                            <p className="text-gray-600">{service.timeline}</p>
                          </div>
                        </div>

                        <div>
                          <p className="font-medium text-gray-700 mb-2">Technologies:</p>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.slice(0, 3).map((tech, index) => (
                              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t mt-auto">
                        <Button 
                          className="w-full bg-primary hover:bg-primary/90 text-white"
                          onClick={() => setIsQuoteModalOpen(true)}
                        >
                          Get Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-primary">XCon Technologies</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional results through our proven process and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">50+ skilled developers and technical experts</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Rigorous testing and quality control processes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock technical support and maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get in touch with our experts to discuss your requirements
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
              className="border-white text-white hover:bg-white hover:text-primary"
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