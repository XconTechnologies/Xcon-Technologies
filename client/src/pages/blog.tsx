import { useState } from "react";
import { Link } from "wouter";
import { Search, Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { trackEvent } from "@/lib/analytics";

const blogPosts = [
  {
    id: 1,
    title: "Become a Partner with XCon Technologies",
    slug: "become-partner-xcon-technologies",
    excerpt: "In today's fast-moving digital world, collaboration is more than just a business strategy. It's a growth engine. Discover how you can join our expanding partner network and grow your business with XCon Technologies.",
    author: "XCon Technologies Team",
    date: "2025-01-21",
    readTime: "8 min read",
    category: "Partnership",
    tags: ["Partnership", "Business Growth", "Collaboration", "Digital Solutions"],
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "The Future of Web Development: Trends for 2025",
    slug: "future-web-development-trends-2025",
    excerpt: "Explore the cutting-edge technologies and methodologies that will shape web development in 2025. From AI integration to advanced frameworks, discover what's coming next.",
    author: "XCon Technologies Team",
    date: "2025-01-20",
    readTime: "6 min read",
    category: "Technology",
    tags: ["Web Development", "Technology Trends", "AI", "Future Tech"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Cloud Solutions: Scaling Your Business Efficiently",
    slug: "cloud-solutions-scaling-business",
    excerpt: "Learn how cloud computing can transform your business operations, reduce costs, and improve scalability. Discover the best practices for cloud migration and management.",
    author: "XCon Technologies Team",
    date: "2025-01-19",
    readTime: "7 min read",
    category: "Cloud Computing",
    tags: ["Cloud", "Business Scaling", "Infrastructure", "Cost Optimization"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Mobile App Development: Native vs Cross-Platform",
    slug: "mobile-app-development-native-vs-cross-platform",
    excerpt: "Deciding between native and cross-platform development? We break down the pros and cons of each approach to help you make the right choice for your project.",
    author: "XCon Technologies Team",
    date: "2025-01-18",
    readTime: "5 min read",
    category: "Mobile Development",
    tags: ["Mobile Apps", "Native Development", "Cross-Platform", "React Native"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "AI and Machine Learning in Modern Software",
    slug: "ai-machine-learning-modern-software",
    excerpt: "Artificial Intelligence is revolutionizing software development. Learn how AI and ML can enhance your applications and improve user experiences.",
    author: "XCon Technologies Team",
    date: "2025-01-17",
    readTime: "9 min read",
    category: "Artificial Intelligence",
    tags: ["AI", "Machine Learning", "Software Development", "Innovation"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Cybersecurity Best Practices for Businesses",
    slug: "cybersecurity-best-practices-businesses",
    excerpt: "Protect your business from cyber threats with these essential security practices. From data encryption to employee training, secure your digital assets.",
    author: "XCon Technologies Team",
    date: "2025-01-16",
    readTime: "6 min read",
    category: "Security",
    tags: ["Cybersecurity", "Data Protection", "Business Security", "Risk Management"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const categories = ["All", "Partnership", "Technology", "Cloud Computing", "Mobile Development", "Artificial Intelligence", "Security"];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSearch = () => {
    trackEvent('search', 'blog', searchTerm);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    trackEvent('filter', 'blog_category', category);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Matching Reference */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 pt-32 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-0 max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive collection of technology insights and partnership resources
            </p>
          </div>
        </div>
      </section>

      {/* Search Filter Section - Centered */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          {/* Centered Search Section */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Search Articles</h2>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search for articles, topics, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="w-full pl-12 pr-32 py-4 text-lg border-2 border-gray-200 focus:border-primary rounded-full shadow-lg"
                />
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Button 
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full font-medium"
                >
                  Search
                </Button>
              </div>
            </div>

            {/* Category Filters - Centered */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => handleCategoryFilter(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`px-6 py-2 rounded-full font-medium ${
                    selectedCategory === category 
                      ? "bg-primary text-white" 
                      : "bg-white text-gray-700 hover:bg-primary/10 hover:text-primary border-gray-200 hover:border-primary"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Articles Section */}
      <section className="py-8 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">

          {/* Clean Card-Based Blog Layout */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Articles Found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or browse different categories.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="bg-primary text-white hover:bg-primary/90"
              >
                Browse All Articles
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <article key={post.id} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  {/* Card Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-white px-3 py-1 text-sm font-medium">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6">
                    {/* Meta Information */}
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 leading-tight line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>

                    {/* Read More Button */}
                    <Link href={`/blog/${post.slug}`}>
                      <Button 
                        className="w-full bg-primary text-white hover:bg-primary/90 rounded-lg py-2 font-medium group/btn"
                        onClick={() => trackEvent('blog_post_click', 'engagement', post.title)}
                      >
                        Read Article
                        <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}