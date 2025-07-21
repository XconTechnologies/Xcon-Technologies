import { useState } from "react";
import { Link } from "wouter";
import { Calendar, User, ArrowRight, Search, Tag } from "lucide-react";
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
  }
];

const categories = ["All", "Partnership"];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
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
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            XCon Technologies <span className="text-primary">Blog</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Insights, tutorials, and industry expertise from our team of technology professionals
          </p>
          
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Search articles, topics, or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full pl-12 py-4 text-lg bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-white/70 rounded-full"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
            </div>
            <Button 
              onClick={handleSearch}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium"
            >
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === category 
                    ? "bg-primary text-white" 
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <p className="text-center text-gray-600">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">No articles found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search terms or category filter</p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="bg-primary text-white px-6 py-2 rounded-full"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-primary/10 text-primary">{post.category}</Badge>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <User className="h-4 w-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </div>
                      </div>
                      
                      <Link href={`/blog/${post.slug}`}>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="text-primary hover:text-primary/80 hover:bg-primary/10 p-2"
                        >
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
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