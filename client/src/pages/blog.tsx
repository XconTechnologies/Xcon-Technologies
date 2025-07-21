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
              Blog <span className="text-primary">Archive</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-0 max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive collection of technology insights and partnership resources
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          {/* Search Section */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Search Articles</h3>
            <div className="flex gap-4 max-w-2xl">
              <div className="flex-1 relative">
                <Input
                  type="text"
                  placeholder="Search for articles, topics, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="w-full pl-12 py-3 text-lg border-2 border-gray-200 focus:border-primary rounded-lg"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <Button 
                onClick={handleSearch}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Categories Section */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Categories</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => handleCategoryFilter(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`px-4 py-2 rounded-full font-medium ${
                    selectedCategory === category 
                      ? "bg-primary text-white" 
                      : "bg-white text-gray-700 hover:bg-primary/10 hover:text-primary border-gray-200 hover:border-primary"
                  }`}
                >
                  {category}
                  {category === "All" && <span className="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{blogPosts.length}</span>}
                </Button>
              ))}
            </div>
          </div>

          {/* Sort Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Sort By</h3>
            <select className="border border-gray-200 rounded-lg px-4 py-2 bg-white">
              <option>Latest First</option>
              <option>Oldest First</option>
              <option>Most Popular</option>
              <option>Title (A-Z)</option>
            </select>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredPosts.length} Article{filteredPosts.length !== 1 ? 's' : ''}
              {searchTerm && <span> for "<span className="text-primary">{searchTerm}</span>"</span>}
            </h2>
          </div>

          {/* Articles Grid */}
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
            <div className="grid grid-cols-1 gap-8">
              {filteredPosts.map((post, index) => (
                <article key={post.id} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="lg:grid lg:grid-cols-2 lg:gap-0">
                    {/* Image Section */}
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        <Badge className="bg-primary text-white px-3 py-1 text-sm font-semibold">
                          Featured
                        </Badge>
                        <Badge className="bg-white text-gray-900 px-3 py-1 text-sm font-semibold">
                          Trending
                        </Badge>
                        <Badge className="bg-blue-500 text-white px-3 py-1 text-sm font-semibold">
                          {post.category}
                        </Badge>
                      </div>
                      
                      {/* View Count */}
                      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                        16,850
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-8 flex flex-col justify-center">
                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-gray-600 text-lg leading-relaxed mb-6 line-clamp-3" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                        {post.excerpt}
                      </p>

                      {/* Meta Information */}
                      <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
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

                      {/* CTA and Tags */}
                      <div className="flex items-center justify-between">
                        <Link href={`/blog/${post.slug}`}>
                          <Button 
                            className="bg-primary text-white hover:bg-primary/90 rounded-full px-6 py-2 font-medium group/btn"
                            onClick={() => trackEvent('blog_post_click', 'engagement', post.title)}
                          >
                            Read More
                            <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </Link>
                        
                        <div className="flex gap-2 flex-wrap">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                            >
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > 2 && (
                            <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                              +{post.tags.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
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