import { useState, useEffect } from "react";
import { Link, useParams } from "wouter";
import { Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin, ArrowLeft, Eye, Tag, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { trackEvent } from "@/lib/analytics";

// Sample blog post data - in a real app, this would come from an API or CMS
const blogPostsData: { [key: string]: any } = {
  "future-web-development-trends-2025": {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2025",
    slug: "future-web-development-trends-2025",
    content: `
      <p>The web development landscape is evolving at an unprecedented pace. As we move into 2025, several transformative trends are reshaping how we build, deploy, and interact with web applications. Let's explore the key developments that will define the future of web development.</p>

      <h2>1. AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is revolutionizing the development process. From code generation to automated testing, AI tools are becoming indispensable for modern developers. GitHub Copilot, ChatGPT, and similar tools are not just helping with code completion but are actively participating in the problem-solving process.</p>
      
      <ul>
        <li><strong>Automated Code Generation:</strong> AI can now generate entire components, functions, and even complete features based on natural language descriptions.</li>
        <li><strong>Intelligent Debugging:</strong> AI-powered debugging tools can identify and suggest fixes for complex issues.</li>
        <li><strong>Performance Optimization:</strong> Machine learning algorithms analyze application performance and suggest optimizations.</li>
      </ul>

      <h2>2. Progressive Web Apps (PWAs) 2.0</h2>
      <p>PWAs are entering their second generation with enhanced capabilities that blur the line between web and native applications. Modern PWAs offer near-native performance while maintaining the accessibility and discoverability of web applications.</p>

      <h2>3. WebAssembly (WASM) Mainstream Adoption</h2>
      <p>WebAssembly is moving from experimental to mainstream, enabling high-performance applications in the browser. Languages like Rust, C++, and Go can now run at near-native speeds in web browsers, opening new possibilities for complex applications.</p>

      <h2>4. Edge Computing and Serverless Architecture</h2>
      <p>The shift towards edge computing is reducing latency and improving user experience. Serverless functions deployed at the edge provide faster response times and better scalability.</p>

      <h2>5. Enhanced Security Measures</h2>
      <p>With increasing cyber threats, security is becoming paramount. Zero-trust architecture, enhanced authentication methods, and automated security testing are becoming standard practices.</p>

      <h2>Conclusion</h2>
      <p>The future of web development is bright and full of opportunities. By staying informed about these trends and continuously learning new technologies, developers can build better, faster, and more secure web applications. At XCon Technologies, we're committed to leveraging these cutting-edge technologies to deliver exceptional solutions for our clients.</p>
    `,
    author: "XCon Technologies Team",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["React", "AI", "Web3", "Performance"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    views: 1247,
    likes: 89
  },
  "cloud-engineering-best-practices": {
    id: 2,
    title: "Cloud Engineering Best Practices for Scalable Applications",
    slug: "cloud-engineering-best-practices",
    content: `
      <p>Cloud engineering has become the backbone of modern application development. Building scalable, reliable, and cost-effective cloud solutions requires following established best practices and understanding the nuances of cloud architecture.</p>

      <h2>Infrastructure as Code (IaC)</h2>
      <p>Infrastructure as Code is fundamental to modern cloud engineering. Tools like Terraform, CloudFormation, and Pulumi enable developers to manage infrastructure through code, ensuring consistency, repeatability, and version control.</p>

      <h2>Microservices Architecture</h2>
      <p>Breaking down monolithic applications into microservices offers numerous advantages:</p>
      <ul>
        <li>Independent scaling of components</li>
        <li>Technology diversity across services</li>
        <li>Improved fault tolerance</li>
        <li>Faster development cycles</li>
      </ul>

      <h2>Container Orchestration</h2>
      <p>Kubernetes has become the de facto standard for container orchestration. Understanding pods, services, ingress, and deployment strategies is crucial for cloud engineers.</p>

      <h2>Observability and Monitoring</h2>
      <p>Comprehensive monitoring, logging, and tracing are essential for maintaining cloud applications. The three pillars of observability - metrics, logs, and traces - provide complete visibility into system behavior.</p>

      <h2>Security Best Practices</h2>
      <p>Cloud security requires a multi-layered approach including identity and access management, network security, encryption, and compliance monitoring.</p>
    `,
    author: "Sarah Johnson",
    date: "2025-01-10",
    readTime: "12 min read",
    category: "Cloud Engineering",
    tags: ["AWS", "Azure", "DevOps", "Scaling"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    views: 892,
    likes: 67
  },
  "mvp-development-guide": {
    id: 3,
    title: "MVP Development: From Idea to Launch in Record Time",
    slug: "mvp-development-guide",
    content: `
      <p>Developing a Minimum Viable Product (MVP) is a strategic approach that allows startups and businesses to validate their ideas quickly and cost-effectively. This guide outlines our proven methodology for MVP development.</p>

      <h2>Understanding MVP Principles</h2>
      <p>An MVP is not about cutting corners or delivering incomplete features. It's about identifying the core value proposition and delivering it with minimal resources while maximum learning potential.</p>

      <h2>Phase 1: Idea Validation</h2>
      <p>Before writing a single line of code, validate your idea through:</p>
      <ul>
        <li>Market research and competitive analysis</li>
        <li>User interviews and surveys</li>
        <li>Landing page tests</li>
        <li>Prototype testing</li>
      </ul>

      <h2>Phase 2: Feature Prioritization</h2>
      <p>Use frameworks like MoSCoW (Must have, Should have, Could have, Won't have) to prioritize features based on user value and development effort.</p>

      <h2>Phase 3: Agile Development</h2>
      <p>Implement the MVP using agile methodologies with short sprints, continuous integration, and frequent user feedback loops.</p>

      <h2>Phase 4: Launch and Iterate</h2>
      <p>Launch early, measure user behavior, gather feedback, and iterate based on real user data rather than assumptions.</p>

      <h2>Common MVP Mistakes to Avoid</h2>
      <ul>
        <li>Over-engineering the initial version</li>
        <li>Ignoring user feedback</li>
        <li>Perfectionism over iteration</li>
        <li>Not measuring the right metrics</li>
      </ul>
    `,
    author: "Mike Chen",
    date: "2025-01-05",
    readTime: "10 min read",
    category: "MVP Development",
    tags: ["Startup", "Agile", "Product Strategy"],
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    views: 1156,
    likes: 94
  }
};

const relatedPosts = [
  {
    id: 4,
    title: "Data Engineering Solutions for Modern Businesses",
    slug: "data-engineering-modern-businesses",
    category: "Data Engineering",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 5,
    title: "DevOps Automation: Streamlining Your Development Pipeline",
    slug: "devops-automation-pipeline",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 6,
    title: "Quality Assurance in Agile Development: Testing Strategies",
    slug: "qa-testing-agile-strategies",
    category: "QA Testing",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

export default function BlogSingle() {
  const params = useParams();
  const slug = params?.slug;
  const [blogPost, setBlogPost] = useState<any>(null);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (slug && blogPostsData[slug]) {
      setBlogPost(blogPostsData[slug]);
      // Track page view
      trackEvent('page_view', 'blog_post', slug);
    }
  }, [slug]);

  const handleShare = (platform: string) => {
    trackEvent('share', 'blog_post', platform);
    
    const url = window.location.href;
    const title = blogPost?.title || "";
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    trackEvent('like', 'blog_post', slug || '', isLiked ? -1 : 1);
  };

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh] pt-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog">
              <Button className="bg-primary text-white px-6 py-3 rounded-full">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-8">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6 text-primary hover:text-primary/80">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
          
          <div className="mb-6">
            <Badge className="bg-primary/10 text-primary mb-4">{blogPost.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {blogPost.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(blogPost.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{blogPost.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>{blogPost.views.toLocaleString()} views</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {blogPost.tags.map((tag: string) => (
                <span key={tag} className="inline-flex items-center gap-1 text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mb-8">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Social Sharing Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Share this article</h3>
                  <div className="flex flex-row lg:flex-col gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleShare('facebook')}
                      className="flex items-center gap-2 w-full justify-start"
                    >
                      <Facebook className="h-4 w-4 text-blue-600" />
                      Facebook
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleShare('twitter')}
                      className="flex items-center gap-2 w-full justify-start"
                    >
                      <Twitter className="h-4 w-4 text-blue-400" />
                      Twitter
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleShare('linkedin')}
                      className="flex items-center gap-2 w-full justify-start"
                    >
                      <Linkedin className="h-4 w-4 text-blue-700" />
                      LinkedIn
                    </Button>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <Button
                    size="sm"
                    variant={isLiked ? "default" : "outline"}
                    onClick={handleLike}
                    className={`flex items-center gap-2 w-full justify-start ${
                      isLiked ? "bg-red-500 hover:bg-red-600 text-white" : ""
                    }`}
                  >
                    <ThumbsUp className={`h-4 w-4 ${isLiked ? "text-white" : "text-red-500"}`} />
                    {isLiked ? "Liked" : "Like"} ({blogPost.likes + (isLiked ? 1 : 0)})
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Article Content */}
            <div className="lg:col-span-3">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
                style={{
                  lineHeight: '1.8',
                  fontSize: '1.125rem'
                }}
              />
              
              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {blogPost.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{blogPost.author}</h4>
                    <p className="text-gray-600">
                      Technology expert at XCon Technologies, passionate about sharing knowledge and helping businesses grow through innovative solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <Badge className="bg-primary/10 text-primary mb-3">{post.category}</Badge>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 group-hover:text-primary transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <Button size="sm" variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/10 p-0">
                      Read More <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                    </Button>
                  </Link>
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

// CSS styles for the prose content
const styles = `
  .prose h2 {
    font-size: 1.875rem;
    font-weight: 700;
    color: #111827;
    margin-top: 2rem;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  
  .prose h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #111827;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }
  
  .prose p {
    margin-bottom: 1.25rem;
    color: #374151;
  }
  
  .prose ul {
    margin-bottom: 1.25rem;
    padding-left: 1.5rem;
  }
  
  .prose li {
    margin-bottom: 0.5rem;
    color: #374151;
  }
  
  .prose strong {
    color: #111827;
    font-weight: 600;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}