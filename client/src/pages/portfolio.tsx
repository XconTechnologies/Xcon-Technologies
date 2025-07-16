import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, Calendar, Users, Code, Globe, ArrowRight, Filter, Search, Clock } from "lucide-react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Projects", count: 24 },
    { id: "web", name: "Web Development", count: 12 },
    { id: "mobile", name: "Mobile Apps", count: 8 },
    { id: "ecommerce", name: "E-commerce", count: 6 },
    { id: "saas", name: "SaaS Solutions", count: 5 },
    { id: "healthcare", name: "Healthcare", count: 4 },
    { id: "fintech", name: "FinTech", count: 3 }
  ];

  const projects = [
    {
      id: 1,
      title: "TechCorp Dashboard",
      description: "A comprehensive business intelligence dashboard for enterprise data visualization and analytics.",
      category: "web",
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      completionDate: "2024-12-15",
      client: "TechCorp Industries",
      industry: "Technology",
      teamSize: 5,
      duration: "4 months",
      highlights: [
        "Reduced data processing time by 60%",
        "Improved user engagement by 40%",
        "Integrated 15+ data sources"
      ]
    },
    {
      id: 2,
      title: "HealthCare Mobile App",
      description: "Patient management and telemedicine platform with real-time video consultation capabilities.",
      category: "mobile",
      technologies: ["React Native", "Firebase", "WebRTC", "AWS"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      completionDate: "2024-11-20",
      client: "MedTech Solutions",
      industry: "Healthcare",
      teamSize: 6,
      duration: "6 months",
      highlights: [
        "Served 10,000+ patients",
        "99.9% uptime achieved",
        "HIPAA compliant architecture"
      ]
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with advanced inventory management and payment processing.",
      category: "ecommerce",
      technologies: ["Next.js", "Express", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      completionDate: "2024-10-10",
      client: "RetailMax Inc",
      industry: "Retail",
      teamSize: 8,
      duration: "5 months",
      highlights: [
        "Processed $2M+ in transactions",
        "Mobile-first responsive design",
        "Multi-currency support"
      ]
    },
    {
      id: 4,
      title: "FinTech Banking App",
      description: "Secure digital banking platform with advanced fraud detection and real-time transactions.",
      category: "fintech",
      technologies: ["Vue.js", "Django", "PostgreSQL", "Docker"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      completionDate: "2024-09-05",
      client: "SecureBank Ltd",
      industry: "Finance",
      teamSize: 10,
      duration: "8 months",
      highlights: [
        "Bank-grade security implementation",
        "Real-time transaction processing",
        "Multi-factor authentication"
      ]
    },
    {
      id: 5,
      title: "SaaS Analytics Tool",
      description: "Advanced analytics platform for businesses to track performance metrics and generate insights.",
      category: "saas",
      technologies: ["Angular", "Python", "MySQL", "Redis"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      completionDate: "2024-08-22",
      client: "DataInsights Co",
      industry: "Analytics",
      teamSize: 4,
      duration: "3 months",
      highlights: [
        "Processing 1M+ data points daily",
        "Custom reporting dashboard",
        "API integration with 50+ services"
      ]
    },
    {
      id: 6,
      title: "Real Estate Platform",
      description: "Property management and listing platform with virtual tours and mortgage calculator.",
      category: "web",
      technologies: ["React", "Laravel", "MySQL", "AWS S3"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      completionDate: "2024-07-15",
      client: "PropertyHub LLC",
      industry: "Real Estate",
      teamSize: 6,
      duration: "4 months",
      highlights: [
        "10,000+ property listings",
        "Virtual tour integration",
        "Advanced search filters"
      ]
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === "all" || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { number: "200+", label: "Projects Completed", description: "Successfully delivered across industries" },
    { number: "50+", label: "Happy Clients", description: "Trusted by businesses worldwide" },
    { number: "99%", label: "Success Rate", description: "Projects delivered on time and budget" },
    { number: "24/7", label: "Support", description: "Continuous maintenance and updates" }
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
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Explore our successful projects and innovative solutions that have transformed businesses across industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              View Projects
            </a>
            <a href="#stats" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Our Statistics
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Statistics */}
      <section id="stats" className="py-16 bg-primary">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Track Record of <span className="text-white">Success</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Numbers that speak for our commitment to excellence and client satisfaction
            </p>
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

      {/* Project Filters and Search */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the innovative solutions we've created for businesses across various industries
            </p>
          </div>

          {/* Search and Filter Controls */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search projects by name, description, or technology..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? "bg-primary text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-primary/90 text-white p-2 rounded-full transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {categories.find(cat => cat.id === project.category)?.name || project.category}
                    </Badge>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(project.completionDate).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-primary" />
                      <span>Team: {project.teamSize}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Highlights:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {project.highlights.slice(0, 2).map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
              <p className="text-gray-400 mt-2">Try adjusting your search terms or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your business goals with our proven expertise and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </Button>
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                View More Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}