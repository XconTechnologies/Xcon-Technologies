import { useState, useEffect } from "react";
import { Link, useParams } from "wouter";
import { Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin, ArrowLeft, Eye, Tag, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { trackEvent } from "@/lib/analytics";

// XCon Technologies blog post data
const blogPostsData: { [key: string]: any } = {
  "become-partner-xcon-technologies": {
    id: 1,
    title: "Become a Partner with XCon Technologies",
    slug: "become-partner-xcon-technologies",
    content: `
      <div class="prose-image">
        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Team collaboration and partnership" class="w-full h-64 object-cover rounded-lg mb-6" />
      </div>

      <h2>Introduction</h2>
      <p>In today's fast-moving digital world, collaboration is more than just a business strategy. It's a growth engine. At XCon Technologies, building strong, meaningful partnerships is the key to mutual success. Whether you're an individual freelancer or a full-scale digital agency, there's a place for you in our expanding partner network. Let's explore how you can become part of something impactful.</p>

      <h2>Who We Are</h2>
      <p>XCon Technologies is a growing tech company delivering modern solutions in web development, mobile apps, CRM integration, cloud services, and technical support. Our clients range from small startups to large-scale enterprises across multiple countries.</p>
      
      <p>We don't just build software or websites. We build trust and long-term digital relationships that help businesses grow faster and more efficiently. With a professional team and a strong commitment to quality, we've been able to help businesses transform their digital presence and achieve their goals.</p>

      <div class="prose-image">
        <img src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Digital solutions and technology services" class="w-full h-64 object-cover rounded-lg mb-6 mt-6" />
      </div>

      <h2>Why Partner with XCon Technologies</h2>
      <p>Becoming a partner means joining forces with a team that is transparent, experienced, and passionate about growth. Our partners enjoy reliable support, timely payments, and access to tools that help them succeed.</p>
      
      <p>Here are a few reasons why people are choosing to work with us:</p>
      <ul>
        <li>Proven expertise across a wide range of services</li>
        <li>A clear and honest commission structure</li>
        <li>Direct access to a dedicated partnership team</li>
        <li>Support with branding, presentations, and closing deals</li>
        <li>Opportunities to scale your business without technical overhead</li>
      </ul>

      <h2>Types of Partnerships We Offer</h2>

      <h3>Referral Partners</h3>
      <p>If you know someone in need of tech services, connect them with us. You'll earn a percentage for every successful project. This option is perfect for people with a strong network but no technical background.</p>

      <h3>Affiliate Marketers</h3>
      <p>Use your online presence to promote our services. You don't need to handle client communication. Just focus on sharing, and we'll handle the rest.</p>

      <h3>Strategic Business Partners</h3>
      <p>Work closely with our team on joint ventures. You'll bring the clients or ideas, and we'll provide the execution power. Ideal for agencies or consultants with big plans.</p>

      <h3>White-Label Resellers</h3>
      <p>Offer our services under your brand. You sell, we deliver. You maintain your client relationship while we do the work behind the scenes. This is an ideal option for those wanting to expand services without hiring a technical team.</p>

      <div class="prose-image">
        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Business partnership and collaboration meeting" class="w-full h-64 object-cover rounded-lg mb-6 mt-6" />
      </div>

      <h2>Who Can Join Our Program</h2>
      <p>We've designed our partnership models to be inclusive and flexible. You can join if you are:</p>
      <ul>
        <li>A digital marketing freelancer</li>
        <li>An agency looking to expand your service offerings</li>
        <li>A startup without a tech team</li>
        <li>A business consultant helping companies go digital</li>
        <li>A content creator looking to monetise your audience</li>
      </ul>
      
      <p>If you're passionate about technology and want to create value for others, we want to talk to you.</p>

      <h2>What You Get as a Partner</h2>
      <p>When you work with XCon Technologies, you're not just earning commissions. You're gaining a long-term digital business ally. Here's what you'll get:</p>
      <ul>
        <li>Competitive earnings on each project</li>
        <li>Fast onboarding with no upfront costs</li>
        <li>Access to our experienced technical team</li>
        <li>A custom partner dashboard to monitor your leads and earnings</li>
        <li>Early access to new services and promotions</li>
        <li>Priority handling for your referrals and projects</li>
      </ul>
      
      <p>We're here to support you at every step of the way, whether you're sending your first referral or managing multiple ongoing projects.</p>

      <h2>How to Get Started</h2>
      <p>Getting started is simple and takes only a few steps:</p>
      <ol>
        <li>Please fill out our partnership application form</li>
        <li>Schedule a short discovery call with our team</li>
        <li>Discuss your goals and partnership type</li>
        <li>Finalise your custom agreement</li>
        <li>Start referring clients or selling services</li>
      </ol>
      
      <p>From there, you'll have everything you need to succeed, including marketing support, case studies, and project tracking tools.</p>

      <div class="prose-image">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Success and growth in business partnership" class="w-full h-64 object-cover rounded-lg mb-6 mt-6" />
      </div>

      <h2>Success in Action</h2>
      <p>One of our partners started by referring just two clients. Within three months, they expanded into a full-time white-label reseller, handling over ten active projects with our backend support. That's the kind of growth you can experience when you team up with the right people.</p>

      <h2>Frequently Asked Questions</h2>
      
      <h3>Do I need technical skills to become a partner?</h3>
      <p>No, we offer partnership options that don't require any tech background.</p>
      
      <h3>Is there any cost to join?</h3>
      <p>No, joining our partner program is completely free.</p>
      
      <h3>When will I get paid?</h3>
      <p>We offer timely payments once the referred client completes their payment.</p>
      
      <h3>Can I work from outside Pakistan?</h3>
      <p>Yes, we accept partners from all countries.</p>
      
      <h3>What if I want to stop?</h3>
      <p>There's no contract binding you. You can pause or stop anytime.</p>

      <h2>Let's Build Something Together</h2>
      <p>The world is shifting fast, and businesses need smart digital partners more than ever. Whether you're looking for an extra income stream or aiming to grow your existing business, XCon Technologies is ready to support your vision.</p>
      
      <p>Fill out our application today and discover how we can succeed together.</p>
      
      <p><strong>Ready to partner with us? Let's talk.</strong></p>
    `,
    author: "XCon Technologies Team",
    date: "2025-01-21",
    readTime: "8 min read",
    category: "Partnership",
    tags: ["Partnership", "Business Growth", "Collaboration", "Digital Solutions"],
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    views: 432,
    likes: 28
  }
};

// Related posts will be shown when more blog posts are available
const relatedPosts: any[] = [];

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

      {/* Related Posts - Show only when there are related posts */}
      {relatedPosts.length > 0 && (
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
      )}

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
  
  .prose ul, .prose ol {
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
  
  .prose-image {
    margin: 2rem 0;
  }
  
  .prose-image img {
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}