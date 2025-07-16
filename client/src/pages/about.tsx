import Header from "@/components/header";
import Footer from "@/components/footer";
import { Users, Target, Award, Zap, Globe, Code, Shield, Lightbulb, Eye, Heart, CheckCircle, TrendingUp, Clock, Star } from "lucide-react";

export default function About() {
  const stats = [
    { number: "500+", label: "Projects Completed", description: "Successfully delivered projects across various industries" },
    { number: "50+", label: "Happy Clients", description: "Trusted by leading companies worldwide" },
    { number: "4.7%", label: "Client Satisfaction", description: "Consistently high client satisfaction ratings" },
    { number: "67", label: "Team Members", description: "Skilled professionals dedicated to excellence" }
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Integrity",
      description: "We maintain the highest standards of integrity in all our actions and decisions, ensuring transparency and trust in every client relationship."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Transparency",
      description: "Open communication and honest feedback are at the core of our operations, fostering trust and long-term partnerships."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Client-Centric Approach",
      description: "Every decision we make is centered around delivering exceptional value and exceeding our clients' expectations."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to drive continuous improvement and innovation."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Commitment",
      description: "Unwavering dedication to project success and client satisfaction drives everything we do at XCon Technologies."
    }
  ];

  const factsAndFigures = [
    {
      icon: <Code className="h-12 w-12 text-primary" />,
      number: "5",
      label: "Years of Excellence",
      description: "Delivering quality solutions since 2019"
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      number: "100+",
      label: "Expert Team",
      description: "Skilled professionals across technologies"
    },
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      number: "1000+",
      label: "Global Reach",
      description: "Serving clients worldwide"
    },
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      number: "24/7",
      label: "Support",
      description: "Round-the-clock assistance"
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-primary" />,
      number: "99%",
      label: "Success Rate",
      description: "Project delivery excellence"
    },
    {
      icon: <Star className="h-12 w-12 text-primary" />,
      number: "4.9",
      label: "Client Rating",
      description: "Average satisfaction score"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
        </div>
        
        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-primary rounded-full animate-ping"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            About Us
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Delivering Advanced Software with the Best IT Company in USA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#mission" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Our Mission
            </a>
            <a href="#values" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Our Values
            </a>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              XCon Technologies is a leading IT company in the USA that specializes in delivering innovative software solutions. 
              We are committed to providing cutting-edge technology services that empower businesses to achieve their digital transformation goals. 
              Our team of skilled professionals works tirelessly to deliver exceptional results and exceed client expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                alt="Our Mission" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our <span className="text-primary">Mission</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At XCon Technologies, our mission is to empower businesses through innovative software solutions. 
                We specialize in creating exceptional digital experiences that drive growth and success for our clients.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We are dedicated to helping businesses achieve their digital transformation goals through cutting-edge technology, 
                expert guidance, and unwavering commitment to excellence.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By delivering tailored solutions that meet unique business needs, we help organizations optimize their operations, 
                enhance customer experiences, and achieve sustainable growth in today's competitive digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our <span className="text-primary">Vision</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We are committed to shaping the future of technology by delivering innovative solutions that transform businesses and drive success.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Global Digital Innovation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Sustainable Technology Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Empowering Business Growth</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Leading Edge Technology</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop" 
                alt="Our Vision" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Driving Innovation, Delivering <span className="text-white">Excellence</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg md:text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-sm opacity-90">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our <span className="text-primary">Story</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2019, XCon Technologies emerged from a simple vision: to bridge the gap between 
                innovative technology and practical business solutions. Our journey began with a small team 
                of passionate developers and has evolved into a comprehensive digital transformation partner.
              </p>
              <p className="text-gray-600 mb-6">
                We've successfully delivered over 200 projects across various industries, helping startups 
                scale and enterprises modernize their technology infrastructure. Our commitment to excellence 
                and client success has made us a trusted partner in the digital landscape.
              </p>
              <p className="text-gray-600">
                Today, we continue to push boundaries, embrace new technologies, and deliver solutions that 
                not only meet current needs but anticipate future challenges.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                alt="Our team working together" 
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide our work and shape our relationships with clients and partners.
            </p>
          </div>
          
          <div className="bg-black text-white p-8 rounded-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-primary">VALUES</span>
              </h3>
              <p className="text-gray-300">
                Core values are fundamental to the working spirit of XCon Technologies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facts and Figures Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              <span className="text-primary">FACTS AND FIGURES</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {factsAndFigures.map((fact, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {fact.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{fact.number}</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">{fact.label}</div>
                <div className="text-sm text-gray-600">{fact.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Transform Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your vision into reality?
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Let's create something amazing together. Our team is ready to bring your ideas to life with innovative solutions and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}