import { useState, useEffect } from "react";
import { useParams, Link } from "wouter";
import { ArrowLeft, Calendar, Clock, User, Share2, Heart, BookOpen, Eye, MessageCircle, Twitter, Facebook, Linkedin, Copy, Check, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { trackEvent } from "@/lib/analytics";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import PhoneInput from "@/components/ui/phone-input";

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
  const [isPartnershipModalOpen, setIsPartnershipModalOpen] = useState(false);
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([]);
  const [partnershipForm, setPartnershipForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    partnershipType: '',
    experience: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
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

  const toggleFaq = (index: number) => {
    setExpandedFaqs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handlePartnershipSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/partnership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(partnershipForm),
      });

      if (response.ok) {
        toast({
          title: "Partnership Application Submitted!",
          description: "We'll review your application and get back to you within 24 hours.",
        });
        setIsPartnershipModalOpen(false);
        setPartnershipForm({
          name: '',
          email: '',
          phone: '',
          company: '',
          partnershipType: '',
          experience: '',
          message: ''
        });
        trackEvent('partnership_form_submit', 'blog_partnership', 'success');
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit partnership application. Please try again.",
        variant: "destructive",
      });
      trackEvent('partnership_form_submit', 'blog_partnership', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // FAQs data - Original content
  const faqs = [
    {
      question: "What is your software development process?",
      answer: "We follow an agile methodology with iterative development cycles, regular client feedback, and continuous testing to ensure high-quality deliverables."
    },
    {
      question: "How do you ensure code quality?",
      answer: "Our quality assurance includes code reviews, automated testing, manual testing, performance optimization, and adherence to industry best practices."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We work with modern technologies including React, Node.js, Python, cloud platforms, mobile development frameworks, and emerging technologies like AI and blockchain."
    },
    {
      question: "How do you handle project timelines?",
      answer: "We provide realistic timelines based on project scope, maintain regular communication, and use project management tools to track progress and milestones."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes, we offer comprehensive post-launch support including maintenance, updates, bug fixes, and feature enhancements to ensure your application continues to perform optimally."
    },
    {
      question: "What makes XCon Technologies different?",
      answer: "Our commitment to quality, experienced team, client-focused approach, use of cutting-edge technologies, and proven track record of successful project deliveries set us apart."
    }
  ];

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
        <div className="max-w-[1200px] mx-auto px-2 lg:px-4">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
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

                {/* FAQs Section */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-1">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 last:border-b-0">
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full px-0 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="font-medium text-gray-900 text-base pr-4">{faq.question}</h3>
                          {expandedFaqs.includes(index) ? (
                            <ChevronDown className="h-4 w-4 text-gray-400 flex-shrink-0" />
                          ) : (
                            <ChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        {expandedFaqs.includes(index) && (
                          <div className="pb-4 -mt-2">
                            <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

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
                  <div className="flex items-start gap-6">
                    <Avatar className="w-16 h-16 border-2 border-primary/20 flex-shrink-0">
                      <AvatarImage src="/api/placeholder/64/64" />
                      <AvatarFallback className="bg-primary text-white text-lg font-bold">
                        XTT
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">XCon Technologies Team</h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Our team of technology experts specializes in delivering cutting-edge digital solutions 
                        and insights that drive business growth and innovation.
                      </p>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="rounded-full hover:bg-primary hover:text-white"
                          onClick={() => {
                            window.open('/profile/xcon-technologies-team', '_blank');
                            trackEvent('author_profile_view', 'blog_engagement', 'author_bio');
                          }}
                        >
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
              <div className="sticky top-32 space-y-6">
                {/* Partnership CTA - Moved to Top */}
                <div className="bg-primary rounded-xl p-5 text-white">
                  <h3 className="text-base font-bold mb-3">Ready to Start Your Partnership Journey?</h3>
                  <p className="text-white/90 mb-5 text-sm leading-relaxed">
                    Join hundreds of successful partners who are growing their business with XCon Technologies.
                  </p>
                  <div className="space-y-2">
                    <Button
                      className="w-full bg-white text-primary hover:bg-gray-100 font-medium text-sm py-2"
                      onClick={() => {
                        setIsPartnershipModalOpen(true);
                        trackEvent('partnership_apply', 'blog_cta', 'sidebar');
                      }}
                    >
                      Apply for Partnership
                    </Button>
                  </div>
                </div>

                {/* Social Share & Engagement - Moved After Partnership CTA */}
                <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-3">Share & Engage</h3>
                  
                  {/* Like Button */}
                  <Button
                    onClick={handleLike}
                    variant="outline"
                    className={`w-full mb-3 text-sm py-2 ${isLiked ? 'bg-red-50 border-red-200 text-red-600' : ''}`}
                  >
                    <Heart className={`h-4 w-4 mr-2 ${isLiked ? 'fill-red-600' : ''}`} />
                    {isLiked ? 'Liked' : 'Like'} ({likes})
                  </Button>

                  {/* Share Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      onClick={() => handleShare('twitter')}
                      variant="outline"
                      size="sm"
                      className="flex items-center justify-center gap-1 text-xs py-1.5"
                    >
                      <Twitter className="h-3 w-3" />
                      Twitter
                    </Button>
                    <Button
                      onClick={() => handleShare('facebook')}
                      variant="outline"
                      size="sm"
                      className="flex items-center justify-center gap-1 text-xs py-1.5"
                    >
                      <Facebook className="h-3 w-3" />
                      Facebook
                    </Button>
                    <Button
                      onClick={() => handleShare('linkedin')}
                      variant="outline"
                      size="sm"
                      className="flex items-center justify-center gap-1 text-xs py-1.5"
                    >
                      <Linkedin className="h-3 w-3" />
                      LinkedIn
                    </Button>
                    <Button
                      onClick={() => handleShare('copy')}
                      variant="outline"
                      size="sm"
                      className="flex items-center justify-center gap-1 text-xs py-1.5"
                    >
                      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
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

      {/* Related Articles Section - Full Width */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Related Articles</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover more insights and expert knowledge from XCon Technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                id: 1,
                slug: "digital-transformation-guide",
                title: "Complete Guide to Digital Transformation",
                excerpt: "Discover how digital transformation can revolutionize your business operations and drive growth in the modern marketplace.",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "Technology",
                date: "2025-01-10",
                readTime: "12 min read",
                author: "XCon Technologies Team"
              },
              {
                id: 2,
                slug: "cloud-migration-strategies",
                title: "Cloud Migration Strategies for Modern Businesses",
                excerpt: "Learn the best practices for migrating your business to the cloud and maximizing the benefits of cloud computing.",
                image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "Cloud",
                date: "2025-01-05",
                readTime: "10 min read",
                author: "XCon Technologies Team"
              },
              {
                id: 3,
                slug: "ai-development-trends",
                title: "AI Development Trends Shaping 2025",
                excerpt: "Explore the latest artificial intelligence trends and how they're transforming software development and business operations.",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "AI & Technology",
                date: "2024-12-28",
                readTime: "15 min read",
                author: "XCon Technologies Team"
              },
              {
                id: 4,
                slug: "cybersecurity-best-practices",
                title: "Cybersecurity Best Practices for Small Businesses",
                excerpt: "Protect your business from cyber threats with these essential cybersecurity practices and tools for modern enterprises.",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "Security",
                date: "2024-12-20",
                readTime: "9 min read",
                author: "XCon Technologies Team"
              }
            ].map((relatedPost) => (
              <article
                key={relatedPost.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group border border-gray-100"
                onClick={() => {
                  window.open(`/blog/${relatedPost.slug}`, '_blank');
                  trackEvent('related_blog_click', 'blog_engagement', relatedPost.slug);
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-primary text-white text-xs font-medium">
                      {relatedPost.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300"></div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                    {relatedPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3 leading-relaxed">
                    {relatedPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(relatedPost.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {relatedPost.readTime}
                      </span>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-primary hover:bg-primary/10 h-6 px-2 text-xs font-medium"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(`/blog/${relatedPost.slug}`, '_blank');
                        trackEvent('related_blog_read_more', 'blog_engagement', relatedPost.slug);
                      }}
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section - Moved to Last Position */}
      <section className="py-12 bg-primary">
        <div className="max-w-6xl mx-auto px-2 lg:px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Get More Insights</h2>
          <p className="text-base text-white/90 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest technology trends and partnership opportunities.
          </p>
          <div className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2.5 rounded-lg border-0 text-gray-900 text-sm focus:ring-2 focus:ring-white/20 focus:outline-none"
              />
              <Button className="bg-white text-primary hover:bg-gray-100 px-6 py-2.5 rounded-lg font-medium text-sm transition-all">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Partnership Form Modal */}
      <Dialog open={isPartnershipModalOpen} onOpenChange={setIsPartnershipModalOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">Partnership Application</DialogTitle>
          </DialogHeader>
          <form onSubmit={handlePartnershipSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  required
                  value={partnershipForm.name}
                  onChange={(e) => setPartnershipForm(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  value={partnershipForm.company}
                  onChange={(e) => setPartnershipForm(prev => ({ ...prev, company: e.target.value }))}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                required
                value={partnershipForm.email}
                onChange={(e) => setPartnershipForm(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <PhoneInput
                value={partnershipForm.phone}
                onChange={(value) => setPartnershipForm(prev => ({ ...prev, phone: value }))}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="partnershipType">Partnership Type *</Label>
              <Select
                value={partnershipForm.partnershipType}
                onValueChange={(value) => setPartnershipForm(prev => ({ ...prev, partnershipType: value }))}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select partnership type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="referral">Referral Partner</SelectItem>
                  <SelectItem value="affiliate">Affiliate Marketer</SelectItem>
                  <SelectItem value="strategic">Strategic Business Partner</SelectItem>
                  <SelectItem value="white-label">White-Label Reseller</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="experience">Relevant Experience</Label>
              <Textarea
                id="experience"
                placeholder="Tell us about your background and experience..."
                value={partnershipForm.experience}
                onChange={(e) => setPartnershipForm(prev => ({ ...prev, experience: e.target.value }))}
                rows={3}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Why do you want to partner with us?</Label>
              <Textarea
                id="message"
                placeholder="Share your goals and how you envision our partnership..."
                value={partnershipForm.message}
                onChange={(e) => setPartnershipForm(prev => ({ ...prev, message: e.target.value }))}
                rows={4}
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-primary text-white hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Partnership Application"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
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