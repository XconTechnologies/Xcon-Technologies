import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Clock, 
  Users, 
  Award, 
  Code, 
  Search, 
  Palette, 
  Megaphone, 
  Brain,
  CheckCircle,
  Star,
  ArrowRight,
  User,
  Mail,
  Phone,
  GraduationCap,
  BookOpen,
  Lightbulb,
  Target,
  Zap
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/header";
import Footer from "@/components/footer";

const internshipTracks = [
  {
    id: 1,
    title: "Web Development",
    icon: Code,
    description: "Learn WordPress, React, PHP and build real websites for clients",
    skills: ["WordPress", "React", "PHP", "HTML/CSS", "JavaScript"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "SEO & Content Writing",
    icon: Search,
    description: "Master search engine optimization and create compelling content",
    skills: ["SEO Tools", "Content Strategy", "Keyword Research", "Analytics", "Writing"],
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    title: "Graphic Design & UI/UX",
    icon: Palette,
    description: "Create stunning visuals and user-friendly interfaces",
    skills: ["Figma", "Adobe Creative Suite", "UI/UX Design", "Prototyping", "Brand Design"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    title: "Digital Marketing & Ads",
    icon: Megaphone,
    description: "Run campaigns and learn digital marketing strategies",
    skills: ["Google Ads", "Facebook Ads", "Social Media", "Analytics", "Campaign Management"],
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "AI Tools Integration",
    icon: Brain,
    description: "Work with modern AI tools and automation",
    skills: ["ChatGPT", "Replit", "AI Integration", "Automation", "Machine Learning"],
    color: "from-indigo-500 to-purple-500"
  }
];

const benefits = [
  {
    icon: Globe,
    title: "100% Remote",
    description: "Work from anywhere in the USA with flexible timing"
  },
  {
    icon: Target,
    title: "Real Client Projects",
    description: "Work on actual projects, not dummy tasks"
  },
  {
    icon: Users,
    title: "Professional Mentorship",
    description: "Learn from industry experts and experienced professionals"
  },
  {
    icon: Award,
    title: "Certificate & Recommendation",
    description: "Receive experience certificate and letter of recommendation"
  },
  {
    icon: BookOpen,
    title: "Learn Industry Tools",
    description: "Master tools like WordPress, Figma, SEO, Google Ads, etc."
  },
  {
    icon: Lightbulb,
    title: "Build Strong Portfolio",
    description: "Create portfolio projects for jobs or freelancing"
  }
];

const testimonials = [
  {
    name: "Sarah K.",
    university: "California State University",
    track: "Web Development",
    quote: "Xcon Technologies gave me my first real project while I was still in college. I now feel job-ready!",
    rating: 5
  },
  {
    name: "Michael R.",
    university: "University of Texas",
    track: "Digital Marketing",
    quote: "The mentorship and real-world experience I gained here was invaluable. Highly recommend!",
    rating: 5
  },
  {
    name: "Emily L.",
    university: "Florida International University",
    track: "UI/UX Design",
    quote: "Working on actual client projects helped me build an amazing portfolio. Got my dream job!",
    rating: 5
  }
];

export default function Internship() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    university: "",
    major: "",
    graduationYear: "",
    internshipTrack: "",
    availability: "",
    experience: "",
    portfolio: "",
    motivation: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const submitData = {
        firstName: formData.fullName.split(' ')[0] || '',
        lastName: formData.fullName.split(' ').slice(1).join(' ') || 'Student',
        email: formData.email,
        phone: formData.phone,
        message: `Internship Application

Personal Details:
- Full Name: ${formData.fullName}
- University: ${formData.university}
- Major: ${formData.major}
- Graduation Year: ${formData.graduationYear}

Internship Preferences:
- Track: ${formData.internshipTrack}
- Availability: ${formData.availability}
- Experience Level: ${formData.experience}
- Portfolio: ${formData.portfolio}

Motivation:
${formData.motivation}`
      };
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        toast({
          title: "Internship application submitted successfully!",
          description: "We'll review your application and get back to you within 2-3 business days.",
        });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          university: "",
          major: "",
          graduationYear: "",
          internshipTrack: "",
          availability: "",
          experience: "",
          portfolio: "",
          motivation: ""
        });
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to submit application. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-20 pt-36">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              🌍 Remote Internships for <span className="text-primary">U.S. Students</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Learn, Build, Grow - Jumpstart your career with hands-on experience at XCon Technologies. 
              We offer project-based internships for college students and fresh graduates from across the USA – 
              100% remote, flexible, and real-world ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full uppercase font-medium"
                onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Apply Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-black bg-white hover:bg-primary hover:text-white px-8 py-4 rounded-full uppercase font-medium"
                onClick={() => document.getElementById('tracks')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Available Internships
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About the Program */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About the <span className="text-primary">Program</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              XCon Technologies is a globally recognized digital solutions company providing services in Web Development, 
              SEO, Graphic Design, Digital Marketing, and more. We believe in empowering fresh talent with industry exposure 
              and skill-building opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who Can <span className="text-primary">Apply?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Current Students</h3>
                  <p className="text-gray-600">Students currently pursuing a bachelor's degree (any field)</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Fresh Graduates</h3>
                  <p className="text-gray-600">Fresh graduates looking for practical experience</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Basic Tech Skills</h3>
                  <p className="text-gray-600">Must have basic knowledge of computers & internet</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Time Commitment</h3>
                  <p className="text-gray-600">Must be available for 10-15 hours per week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Internship Tracks */}
      <section id="tracks" className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Internship <span className="text-primary">Tracks</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred area of interest and start building your expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internshipTracks.map((track) => (
              <Card key={track.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${track.color} p-6 text-white`}>
                    <track.icon className="h-12 w-12 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{track.title}</h3>
                    <p className="text-white/90">{track.description}</p>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold mb-3">Skills You'll Learn:</h4>
                    <div className="flex flex-wrap gap-2">
                      {track.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It <span className="text-primary">Works</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: 1, title: "Apply Online", description: "Submit your application with preferred track", icon: User },
              { step: 2, title: "Interview", description: "Meet with our team to discuss your goals", icon: Users },
              { step: 3, title: "Choose Track", description: "Select your internship specialization", icon: Target },
              { step: 4, title: "Start Projects", description: "Begin working on real client projects", icon: Code },
              { step: 5, title: "Get Certified", description: "Receive feedback, certificate, and referrals", icon: Award }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              💬 Hear from <span className="text-primary">Past Interns</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.university}</p>
                  <Badge variant="outline" className="mt-2 text-xs">{testimonial.track}</Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application" className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Begin Your <span className="text-primary">Career Journey?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                🚀 Apply now and get started with industry-level learning!
              </p>
            </div>
            
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName" className="text-gray-700 font-medium">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="john@university.edu"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="university" className="text-gray-700 font-medium">University/College *</Label>
                      <Input
                        id="university"
                        name="university"
                        value={formData.university}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="University of California"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="major" className="text-gray-700 font-medium">Major/Field of Study *</Label>
                      <Input
                        id="major"
                        name="major"
                        value={formData.major}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Computer Science"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="graduationYear" className="text-gray-700 font-medium">Expected Graduation Year *</Label>
                      <Select value={formData.graduationYear} onValueChange={(value) => handleSelectChange('graduationYear', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2024">2024</SelectItem>
                          <SelectItem value="2025">2025</SelectItem>
                          <SelectItem value="2026">2026</SelectItem>
                          <SelectItem value="2027">2027</SelectItem>
                          <SelectItem value="2028">2028</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="internshipTrack" className="text-gray-700 font-medium">Preferred Internship Track *</Label>
                      <Select value={formData.internshipTrack} onValueChange={(value) => handleSelectChange('internshipTrack', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select track" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="seo-content">SEO & Content Writing</SelectItem>
                          <SelectItem value="graphic-design">Graphic Design & UI/UX</SelectItem>
                          <SelectItem value="digital-marketing">Digital Marketing & Ads</SelectItem>
                          <SelectItem value="ai-tools">AI Tools Integration</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="availability" className="text-gray-700 font-medium">Weekly Availability *</Label>
                      <Select value={formData.availability} onValueChange={(value) => handleSelectChange('availability', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select availability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10-15">10-15 hours per week</SelectItem>
                          <SelectItem value="15-20">15-20 hours per week</SelectItem>
                          <SelectItem value="20-25">20-25 hours per week</SelectItem>
                          <SelectItem value="25+">25+ hours per week</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="experience" className="text-gray-700 font-medium">Experience Level *</Label>
                      <Select value={formData.experience} onValueChange={(value) => handleSelectChange('experience', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner (No prior experience)</SelectItem>
                          <SelectItem value="basic">Basic (Some coursework/projects)</SelectItem>
                          <SelectItem value="intermediate">Intermediate (Some practical experience)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="portfolio" className="text-gray-700 font-medium">Portfolio/GitHub (Optional)</Label>
                      <Input
                        id="portfolio"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="https://github.com/yourusername"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="motivation" className="text-gray-700 font-medium">Why do you want to join this internship program? *</Label>
                    <Textarea
                      id="motivation"
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      className="mt-1"
                      rows={4}
                      placeholder="Tell us about your career goals, what you hope to learn, and why you're interested in this internship program..."
                      required
                    />
                  </div>
                  
                  <div className="text-center">
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full uppercase font-medium text-lg"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}