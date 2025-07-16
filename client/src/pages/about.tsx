import Header from "@/components/header";
import Footer from "@/components/footer";
import { Users, Target, Award, Zap, Globe, Code, Shield, Lightbulb } from "lucide-react";

export default function About() {
  const stats = [
    { number: "200+", label: "Projects Completed", icon: <Code className="h-6 w-6" /> },
    { number: "50+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { number: "5+", label: "Years Experience", icon: <Award className="h-6 w-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="h-6 w-6" /> }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Mission-Driven",
      description: "To empower businesses with cutting-edge technology solutions that drive growth and success in the digital age."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver innovative solutions that give our clients a competitive edge."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Reach",
      description: "Serving clients worldwide with remote-first approach and 24/7 support to ensure seamless collaboration."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Agile Delivery",
      description: "Fast, efficient project delivery using agile methodologies to ensure quality and timely completion."
    }
  ];

  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Tech visionary with 10+ years of experience leading digital transformation projects."
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332ab86?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack developer and architect specializing in scalable cloud solutions."
    },
    {
      name: "Mike Chen",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Expert in modern web technologies and mobile app development."
    },
    {
      name: "Emily Davis",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Agile project management expert ensuring seamless client collaboration."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About <span className="text-primary">XCon Technologies</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We are a leading digital transformation company specializing in cutting-edge technology solutions 
              that help businesses thrive in the modern digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Talented professionals dedicated to delivering exceptional results and driving innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose <span className="text-primary">XCon Technologies</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-primary text-4xl font-bold mb-4">01</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Expert Team</h3>
              <p className="text-gray-600">
                Our team consists of certified professionals with extensive experience in cutting-edge technologies.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-primary text-4xl font-bold mb-4">02</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Proven Process</h3>
              <p className="text-gray-600">
                We follow industry best practices and agile methodologies to ensure project success and timely delivery.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-primary text-4xl font-bold mb-4">03</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock support ensures your business operations run smoothly without interruption.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}