import { useState, useEffect } from "react";
import { useParams, Link } from "wouter";
import { ArrowLeft, Calendar, Clock, Eye, MessageCircle, User, MapPin, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { trackEvent } from "@/lib/analytics";

// Dummy blog data for the profile
const authorBlogs = [
  {
    id: 1,
    slug: "xcon-partnership-program",
    title: "Become a Partner with XCon Technologies",
    excerpt: "Join our partnership program and grow your business with cutting-edge technology solutions. Learn about the benefits and opportunities available.",
    image: "/api/placeholder/400/250",
    category: "Partnership",
    date: "2025-01-15",
    readTime: "8 min read",
    views: 1250,
    comments: 18,
    tags: ["Partnership", "Business Growth", "Technology"]
  },
  {
    id: 2,
    slug: "digital-transformation-guide",
    title: "Complete Guide to Digital Transformation",
    excerpt: "Discover how digital transformation can revolutionize your business operations and drive growth in the modern marketplace.",
    image: "/api/placeholder/400/250",
    category: "Technology",
    date: "2025-01-10",
    readTime: "12 min read",
    views: 2100,
    comments: 32,
    tags: ["Digital Transformation", "Business", "Innovation"]
  },
  {
    id: 3,
    slug: "cloud-migration-strategies",
    title: "Cloud Migration Strategies for Modern Businesses",
    excerpt: "Learn the best practices for migrating your business to the cloud and maximizing the benefits of cloud computing.",
    image: "/api/placeholder/400/250",
    category: "Cloud",
    date: "2025-01-05",
    readTime: "10 min read",
    views: 1800,
    comments: 24,
    tags: ["Cloud Computing", "Migration", "Technology"]
  },
  {
    id: 4,
    slug: "ai-development-trends",
    title: "AI Development Trends Shaping 2025",
    excerpt: "Explore the latest artificial intelligence trends and how they're transforming software development and business operations.",
    image: "/api/placeholder/400/250",
    category: "AI & Technology",
    date: "2024-12-28",
    readTime: "15 min read",
    views: 3200,
    comments: 45,
    tags: ["Artificial Intelligence", "Development", "Trends"]
  },
  {
    id: 5,
    slug: "cybersecurity-best-practices",
    title: "Cybersecurity Best Practices for Small Businesses",
    excerpt: "Protect your business from cyber threats with these essential cybersecurity practices and tools.",
    image: "/api/placeholder/400/250",
    category: "Security",
    date: "2024-12-20",
    readTime: "9 min read",
    views: 1650,
    comments: 28,
    tags: ["Cybersecurity", "Business", "Protection"]
  },
  {
    id: 6,
    slug: "mobile-app-development-guide",
    title: "Mobile App Development: From Concept to Launch",
    excerpt: "A comprehensive guide to mobile app development, covering everything from initial planning to successful app store deployment.",
    image: "/api/placeholder/400/250",
    category: "Mobile Development",
    date: "2024-12-15",
    readTime: "14 min read",
    views: 2800,
    comments: 38,
    tags: ["Mobile Development", "App Development", "Technology"]
  }
];

const authorInfo = {
  name: "XCon Technologies Team",
  bio: "Our team of technology experts specializes in delivering cutting-edge digital solutions and insights that drive business growth and innovation. With years of experience in software development, cloud computing, and digital transformation, we share knowledge to help businesses succeed in the digital age.",
  avatar: "/api/placeholder/120/120",
  location: "Ohio City, USA",
  email: "askforquote@xcontechnologies.com",
  website: "https://xcontechnologies.com",
  joinDate: "2023-01-15",
  totalBlogs: authorBlogs.length,
  totalViews: authorBlogs.reduce((sum, blog) => sum + blog.views, 0),
  totalComments: authorBlogs.reduce((sum, blog) => sum + blog.comments, 0),
  expertise: ["Software Development", "Cloud Computing", "Digital Transformation", "AI & Machine Learning", "Cybersecurity", "Mobile Development"]
};

export default function Profile() {
  const params = useParams();
  const username = params?.username;
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  useEffect(() => {
    trackEvent('profile_page_view', 'user_profile', username || 'unknown');
  }, [username]);

  const categories = ["All", ...Array.from(new Set(authorBlogs.map(blog => blog.category)))];
  
  const filteredBlogs = selectedCategory === "All" 
    ? authorBlogs 
    : authorBlogs.filter(blog => blog.category === selectedCategory);

  const handleBlogClick = (slug: string, title: string) => {
    trackEvent('profile_blog_click', 'user_profile', slug);
    window.open(`/blog/${slug}`, '_blank');
  };

  if (!username) {
    return <div>Profile not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Profile Header */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white pt-20">
        <div className="max-w-[1200px] mx-auto px-2 lg:px-4 py-16">
          <Link href="/blog">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <Avatar className="w-32 h-32 border-4 border-white/20 shadow-xl">
              <AvatarImage src={authorInfo.avatar} alt={authorInfo.name} />
              <AvatarFallback className="bg-white text-primary text-3xl font-bold">
                XTT
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{authorInfo.name}</h1>
              <p className="text-xl text-white/90 mb-6 leading-relaxed max-w-3xl">
                {authorInfo.bio}
              </p>
              
              <div className="flex flex-wrap gap-6 text-sm text-white/80 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {authorInfo.location}
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {authorInfo.email}
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  {authorInfo.website}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Joined {new Date(authorInfo.joinDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long' 
                  })}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {authorInfo.expertise.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b">
        <div className="max-w-[1200px] mx-auto px-2 lg:px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{authorInfo.totalBlogs}</div>
              <div className="text-gray-600">Articles Published</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{authorInfo.totalViews.toLocaleString()}</div>
              <div className="text-gray-600">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{authorInfo.totalComments}</div>
              <div className="text-gray-600">Comments Received</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{authorInfo.expertise.length}</div>
              <div className="text-gray-600">Areas of Expertise</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Articles Section */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-2 lg:px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 lg:mb-0">Published Articles</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
                onClick={() => handleBlogClick(blog.slug, blog.title)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white">
                      {blog.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(blog.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {blog.readTime}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {blog.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        {blog.comments}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {blog.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}