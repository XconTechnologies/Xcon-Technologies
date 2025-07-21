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
      
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-primary overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-primary font-semibold text-sm">Latest Tech Insights</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            XCon Technologies
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
              Blog
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge insights, industry trends, and expert knowledge in technology, 
            partnerships, and digital innovation from our team of technology professionals.
          </p>
          
          {/* Stats Section */}
          <div className="flex justify-center items-center gap-8 text-white/80 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{blogPosts.length}+</div>
              <div className="text-sm">Articles</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5K+</div>
              <div className="text-sm">Monthly Readers</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{categories.length - 1}</div>
              <div className="text-sm">Categories</div>
            </div>
          </div>

          {/* Enhanced Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto">
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Search articles, topics, or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full pl-12 py-4 text-lg bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-white/70 rounded-xl focus:bg-white/20 transition-all"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
            </div>
            <Button 
              onClick={handleSearch}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Search Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Category Filter */}
      <section className="py-12 bg-gray-50/50 backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Browse by Category</h2>
                <p className="text-gray-600">Find articles that match your interests</p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    onClick={() => handleCategoryFilter(category)}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                      selectedCategory === category 
                        ? "bg-primary text-white shadow-lg shadow-primary/25" 
                        : "bg-white text-gray-700 hover:bg-primary/5 hover:text-primary hover:border-primary"
                    }`}
                  >
                    {category}
                    {category === "All" && <span className="ml-2 text-xs">({blogPosts.length})</span>}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Blog Posts Section */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
              </h2>
              <p className="text-gray-600 text-lg">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} available
                {searchTerm && <span> for "<span className="text-primary font-semibold">{searchTerm}</span>"</span>}
              </p>
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-24">
              <div className="bg-gray-100 rounded-full w-24 h-24 mx-auto mb-8 flex items-center justify-center">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Articles Found</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                We couldn't find any articles matching your search. Try different keywords or browse all categories.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="bg-primary text-white hover:bg-primary/90 px-8 py-3 rounded-full"
              >
                Browse All Articles
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-12">
              {filteredPosts.map((post, index) => (
                <article key={post.id} className="group">
                  <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 lg:grid lg:grid-cols-2 lg:gap-0">
                    {/* Image Section */}
                    <div className="relative overflow-hidden lg:order-2">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full min-h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="absolute top-6 left-6">
                        <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                          Featured Article
                        </span>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center lg:order-1">
                      {/* Meta Information */}
                      <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 text-sm font-semibold">
                          {post.category}
                        </Badge>
                        <span className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title and Excerpt */}
                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 group-hover:text-primary transition-colors duration-300 leading-tight">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      
                      <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
                        {post.excerpt}
                      </p>

                      {/* Tags and CTA */}
                      <div className="flex items-center justify-between">
                        <div className="flex gap-3 flex-wrap">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        <Link href={`/blog/${post.slug}`}>
                          <Button 
                            className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-3 font-semibold group/btn shadow-lg hover:shadow-xl transition-all duration-300"
                            onClick={() => trackEvent('blog_post_click', 'engagement', post.title)}
                          >
                            Read Full Article
                            <ArrowRight className="h-5 w-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Newsletter CTA */}
          <div className="mt-20 bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Stay Updated with XCon Technologies</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get the latest insights, tutorials, and industry updates delivered straight to your inbox. 
              Join thousands of technology professionals who trust our content.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white text-gray-900 border-0 rounded-full px-6 py-3 flex-1"
              />
              <Button className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 py-3 font-semibold shadow-lg">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}