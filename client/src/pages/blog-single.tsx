import { useState, useEffect } from "react";
import { useParams, Link } from "wouter";
import { ArrowLeft, Calendar, Clock, User, Share2, Heart, BookOpen, Eye, MessageCircle, Twitter, Facebook, Linkedin, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [copied, setCopied] = useState(false);
  
  const post = slug ? blogPostsData[slug] : null;

  useEffect(() => {
    if (post) {
      setLikes(post.likes);
      // Track page view
      trackEvent('blog_page_view', 'engagement', post.title);
    }
  }, [post]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
    trackEvent('blog_like', 'engagement', post?.title);
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post?.title;
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        trackEvent('blog_share', 'engagement', `copy_${post?.title}`);
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
      trackEvent('blog_share', 'engagement', `${platform}_${post?.title}`);
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-32 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button className="bg-primary text-white hover:bg-primary/90">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Matching Homepage Style */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-[1440px] mx-auto px-8 lg:px-16">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-300 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-primary">{post.category}</span>
          </nav>

          {/* Article Header */}
          <div className="text-center text-white">
            <Badge className="bg-primary/20 text-primary mb-6 px-4 py-2 text-sm font-semibold">
              {post.category}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              In today's fast-moving digital world, collaboration is more than just a business strategy. It's a growth engine. Discover partnership opportunities with XCon Technologies.
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10 border-2 border-primary/50">
                  <AvatarImage src="/api/placeholder/48/48" />
                  <AvatarFallback className="bg-primary text-white font-semibold text-sm">
                    {post.author.split(' ').map((n: string) => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <div className="font-semibold text-white text-sm">{post.author}</div>
                  <div className="text-xs text-gray-400">Technology Expert</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm">
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
                <span className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  {post.views} views
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section - Matching Homepage Style */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            {/* Main Content */}
            <article className="lg:col-span-8">
              <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12 border border-gray-100">
                {/* Featured Image */}
                <div className="mb-8">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-md"
                  />
                </div>

                {/* Article Content */}
                <div 
                  className="prose prose-lg max-w-none text-gray-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  style={{ fontSize: '1.125rem', lineHeight: '1.8' }}
                />

                {/* Enhanced Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Topics covered in this article:</h4>
                  <div className="flex flex-wrap gap-3">
                    {post.tags.map((tag: string) => (
                      <Button
                        key={tag}
                        variant="outline"
                        size="sm"
                        className="rounded-full px-6 py-2 hover:bg-primary hover:text-white hover:border-primary transition-all"
                      >
                        #{tag}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Enhanced Author Bio */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-16 h-16 border-2 border-primary/20">
                      <AvatarImage src="/api/placeholder/64/64" />
                      <AvatarFallback className="bg-primary text-white text-lg font-bold">
                        {post.author.split(' ').map((n: string) => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{post.author}</h4>
                      <p className="text-gray-600 mb-4">
                        Our team of technology experts specializes in delivering cutting-edge digital solutions 
                        and insights that drive business growth and innovation.
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="rounded-full">
                          Follow
                        </Button>
                        <Button size="sm" variant="outline" className="rounded-full">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Enhanced Sidebar */}
            <aside className="lg:col-span-4 mt-12 lg:mt-0">
              <div className="sticky top-24 space-y-8">
                {/* Partnership CTA - Moved to Top */}
                <div className="bg-primary rounded-2xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-4">Ready to Start Your Partnership Journey?</h3>
                  <p className="text-primary-foreground/90 mb-6" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                    Join hundreds of successful partners who are growing their business with XCon Technologies.
                  </p>
                  <div className="space-y-3">
                    <Button
                      className="w-full bg-white text-primary hover:bg-gray-100 font-semibold"
                      onClick={() => trackEvent('partnership_apply', 'blog_cta', 'sidebar')}
                    >
                      Apply for Partnership
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-white text-white hover:bg-white hover:text-primary font-semibold"
                      onClick={() => trackEvent('partnership_schedule', 'blog_cta', 'sidebar')}
                    >
                      Schedule a Call
                    </Button>
                  </div>
                </div>

                {/* Social Share & Engagement - Moved After Partnership CTA */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Share & Engage</h3>
                  
                  {/* Like Button */}
                  <Button
                    onClick={handleLike}
                    variant="outline"
                    className={`w-full mb-4 ${isLiked ? 'bg-red-50 border-red-200 text-red-600' : ''}`}
                  >
                    <Heart className={`h-5 w-5 mr-2 ${isLiked ? 'fill-red-600' : ''}`} />
                    {isLiked ? 'Liked' : 'Like'} ({likes})
                  </Button>

                  {/* Share Buttons */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <Button
                      onClick={() => handleShare('twitter')}
                      variant="outline"
                      size="sm"
                      className="flex items-center justify-center gap-2"
                    >
                      <Twitter className="h-4 w-4" />
                      Twitter
                    </Button>
                    <Button
                      onClick={() => handleShare('facebook')}
                      variant="outline"
                      size="sm"
                      className="flex items-center justify-center gap-2"
                    >
                      <Facebook className="h-4 w-4" />
                      Facebook
                    </Button>
                    <Button
                      onClick={() => handleShare('linkedin')}
                      variant="outline"
                      size="sm"
                      className="flex items-center justify-center gap-2"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Button>
                    <Button
                      onClick={() => handleShare('copy')}
                      variant="outline"
                      size="sm"
                      className="flex items-center justify-center gap-2"
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      {copied ? 'Copied!' : 'Copy'}
                    </Button>
                  </div>
                </div>



                {/* Back to Blog */}
                <div className="text-center">
                  <Link href="/blog">
                    <Button variant="outline" className="rounded-full px-6">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to All Articles
                    </Button>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Moved to Last Position */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/90">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Get More Insights</h2>
          <p className="text-xl text-primary-foreground/90 mb-8" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
            Subscribe to our newsletter for the latest technology trends and partnership opportunities.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 rounded-xl border-0 text-gray-900 text-lg"
              />
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold text-lg">
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

// Enhanced CSS styles for the prose content
const styles = `
  .prose h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #111827;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    border-bottom: 3px solid #7CB342;
    padding-bottom: 0.5rem;
  }
  
  .prose h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #111827;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  
  .prose p {
    margin-bottom: 1.5rem;
    color: #374151;
    font-size: 1.125rem;
    line-height: 1.8;
  }
  
  .prose ul, .prose ol {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
  }
  
  .prose li {
    margin-bottom: 0.75rem;
    color: #374151;
    font-size: 1.125rem;
    line-height: 1.7;
  }
  
  .prose strong {
    color: #111827;
    font-weight: 600;
  }
  
  .prose-image {
    margin: 3rem 0;
  }
  
  .prose-image img {
    width: 100%;
    border-radius: 0.75rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    transition: transform 0.3s ease;
  }
  
  .prose-image img:hover {
    transform: scale(1.02);
  }
  
  .prose blockquote {
    border-left: 4px solid #7CB342;
    padding-left: 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: #6B7280;
    background: #F9FAFB;
    padding: 1.5rem;
    border-radius: 0.5rem;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}