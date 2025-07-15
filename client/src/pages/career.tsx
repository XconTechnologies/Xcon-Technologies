import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MapPin, Clock, Users, Target, Star, Trophy, Heart, Zap, Upload, CheckCircle, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/header";
import Footer from "@/components/footer";

const jobListings = [
  {
    id: 1,
    title: "Business Developer",
    department: "Business Development",
    location: "Ohio City, USA",
    type: "Full-time",
    experience: "2-4 years",
    description: "Join our dynamic business development team to drive growth and establish strategic partnerships. You'll identify new business opportunities, build client relationships, and contribute to our company's expansion goals.",
    requirements: [
      "Bachelor's degree in Business, Marketing, or related field",
      "2-4 years of experience in business development or sales",
      "Strong communication and negotiation skills",
      "Experience with CRM systems and sales processes",
      "Ability to work independently and meet targets",
      "Knowledge of technology industry trends"
    ],
    responsibilities: [
      "Identify and pursue new business opportunities",
      "Build and maintain client relationships",
      "Develop strategic partnerships",
      "Prepare proposals and presentations",
      "Achieve sales targets and KPIs",
      "Collaborate with cross-functional teams"
    ]
  },
  {
    id: 2,
    title: "Upwork Bidder",
    department: "Business Development",
    location: "Ohio City, USA (Remote)",
    type: "Full-time",
    experience: "1-3 years",
    description: "We're seeking a skilled Upwork Bidder to help us secure new projects on freelancing platforms. You'll craft compelling proposals, manage client communications, and help grow our online presence.",
    requirements: [
      "1-3 years of experience in proposal writing or business development",
      "Strong English writing and communication skills",
      "Experience with Upwork or similar freelancing platforms",
      "Understanding of web development and software services",
      "Ability to work in different time zones",
      "Goal-oriented with strong attention to detail"
    ],
    responsibilities: [
      "Write compelling project proposals on Upwork",
      "Research and identify suitable project opportunities",
      "Manage initial client communications",
      "Maintain high proposal success rates",
      "Coordinate with technical teams for project scoping",
      "Track and report on bidding performance"
    ]
  },
  {
    id: 3,
    title: "Internships for Students & Fresh Graduates",
    department: "Multiple Departments",
    location: "Ohio City, USA (Hybrid)",
    type: "Internship",
    experience: "Entry Level",
    description: "Join our internship program designed for students and fresh graduates looking to improve their skills and gain real-world experience. We offer opportunities in web development, mobile development, UI/UX design, and digital marketing.",
    requirements: [
      "Currently pursuing or recently completed degree in relevant field",
      "Basic knowledge of programming languages or design tools",
      "Strong willingness to learn and adapt",
      "Good communication and teamwork skills",
      "Passion for technology and innovation",
      "Ability to commit to 3-6 month internship period"
    ],
    responsibilities: [
      "Work on real projects under senior developer guidance",
      "Participate in code reviews and learning sessions",
      "Contribute to team projects and initiatives",
      "Learn industry best practices and methodologies",
      "Assist in testing and quality assurance",
      "Document work and share learnings with team"
    ]
  }
];

export default function Career() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    currentCompany: "",
    expectedSalary: "",
    noticePeriod: "",
    coverLetter: "",
    linkedinProfile: "",
    portfolioUrl: ""
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedJob, setSelectedJob] = useState<typeof jobListings[0] | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const submitData = {
        firstName: formData.fullName.split(' ')[0] || '',
        lastName: formData.fullName.split(' ').slice(1).join(' ') || 'Applicant',
        email: formData.email,
        phone: formData.phone,
        message: `Career Application for ${formData.position}

Experience: ${formData.experience}
Current Company: ${formData.currentCompany}
Expected Salary: ${formData.expectedSalary}
Notice Period: ${formData.noticePeriod}
LinkedIn: ${formData.linkedinProfile}
Portfolio: ${formData.portfolioUrl}

Cover Letter:
${formData.coverLetter}

${file ? `Resume attached: ${file.name}` : 'No resume attached'}`
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
          title: "Application submitted successfully!",
          description: "We'll review your application and get back to you within 3-5 business days.",
        });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          position: "",
          experience: "",
          currentCompany: "",
          expectedSalary: "",
          noticePeriod: "",
          coverLetter: "",
          linkedinProfile: "",
          portfolioUrl: ""
        });
        setFile(null);
        setShowApplicationModal(false);
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
              Build Your Career with <span className="text-primary">XCon Technologies</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join our team of innovators and help shape the future of technology. We're looking for passionate individuals ready to make an impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full uppercase font-medium"
                onClick={() => document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Open Positions
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full uppercase font-medium"
                onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work at <span className="text-primary">XCon Technologies</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where innovation thrives and talent flourishes. Here's what makes us different.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation First</h3>
              <p className="text-gray-600">
                Work with cutting-edge technologies and contribute to groundbreaking projects that shape the future.
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Collaborative Team</h3>
              <p className="text-gray-600">
                Join a diverse team of experts who support each other and work together to achieve excellence.
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">
                Continuous learning and development programs to help you advance your career and skills.
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Work-Life Balance</h3>
              <p className="text-gray-600">
                Flexible working hours, remote options, and comprehensive benefits to support your well-being.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Employee <span className="text-primary">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive benefits and perks to ensure our team members thrive both professionally and personally.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Health Insurance</h3>
                <p className="text-gray-600">Comprehensive health, dental, and vision coverage for you and your family.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Flexible Schedule</h3>
                <p className="text-gray-600">Work-from-home options and flexible hours to maintain work-life balance.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Professional Development</h3>
                <p className="text-gray-600">Training programs, conferences, and certifications to advance your career.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Paid Time Off</h3>
                <p className="text-gray-600">Generous vacation days, sick leave, and personal time off.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Equipment & Tools</h3>
                <p className="text-gray-600">Latest technology equipment and software licenses for optimal productivity.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Team Events</h3>
                <p className="text-gray-600">Regular team building activities, company retreats, and social events.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="jobs" className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open <span className="text-primary">Positions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover exciting opportunities to join our team and make a meaningful impact in the technology industry.
            </p>
          </div>
          
          <div className="overflow-hidden">
            <div className="flex space-x-6 animate-scroll-rtl">
              {[...jobListings, ...jobListings].map((job, index) => (
                <Card key={`${job.id}-${index}`} className="flex-shrink-0 w-80 bg-gradient-to-br from-blue-50 to-indigo-100 border-l-4 border-primary hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <div className="flex items-center text-gray-600 text-sm">
                          <MapPin className="h-3 w-3 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Clock className="h-3 w-3 mr-1" />
                          {job.type}
                        </div>
                      </div>
                      <Badge variant="outline" className="mb-3">{job.department}</Badge>
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">{job.description}</p>
                    
                    <div className="space-y-2">
                      <Button 
                        variant="outline"
                        className="w-full text-primary border-primary hover:bg-primary hover:text-white"
                        onClick={() => {
                          setSelectedJob(job);
                          setShowDetailsModal(true);
                        }}
                      >
                        View Details
                      </Button>
                      <Button 
                        className="w-full bg-primary hover:bg-primary-dark text-white"
                        onClick={() => {
                          setSelectedJob(job);
                          setFormData(prev => ({ ...prev, position: job.title }));
                          setShowApplicationModal(true);
                        }}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application" className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Apply for a <span className="text-primary">Position</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to join our team? Fill out the application form below and we'll get back to you within 3-5 business days.
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
                        placeholder="john@example.com"
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
                      <Label htmlFor="position" className="text-gray-700 font-medium">Position Applied For *</Label>
                      <Select value={formData.position} onValueChange={(value) => handleSelectChange('position', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a position" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Business Developer">Business Developer</SelectItem>
                          <SelectItem value="Upwork Bidder">Upwork Bidder</SelectItem>
                          <SelectItem value="Internships for Students & Fresh Graduates">Internships for Students & Fresh Graduates</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="experience" className="text-gray-700 font-medium">Years of Experience</Label>
                      <Select value={formData.experience} onValueChange={(value) => handleSelectChange('experience', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1 years">0-1 years</SelectItem>
                          <SelectItem value="1-3 years">1-3 years</SelectItem>
                          <SelectItem value="3-5 years">3-5 years</SelectItem>
                          <SelectItem value="5+ years">5+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="currentCompany" className="text-gray-700 font-medium">Current Company</Label>
                      <Input
                        id="currentCompany"
                        name="currentCompany"
                        value={formData.currentCompany}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Your current employer"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="expectedSalary" className="text-gray-700 font-medium">Expected Salary</Label>
                      <Input
                        id="expectedSalary"
                        name="expectedSalary"
                        value={formData.expectedSalary}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="e.g., $60,000 - $80,000"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="noticePeriod" className="text-gray-700 font-medium">Notice Period</Label>
                      <Select value={formData.noticePeriod} onValueChange={(value) => handleSelectChange('noticePeriod', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select notice period" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Immediate">Immediate</SelectItem>
                          <SelectItem value="1 week">1 week</SelectItem>
                          <SelectItem value="2 weeks">2 weeks</SelectItem>
                          <SelectItem value="1 month">1 month</SelectItem>
                          <SelectItem value="2 months">2 months</SelectItem>
                          <SelectItem value="3 months">3 months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="linkedinProfile" className="text-gray-700 font-medium">LinkedIn Profile</Label>
                      <Input
                        id="linkedinProfile"
                        name="linkedinProfile"
                        value={formData.linkedinProfile}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="portfolioUrl" className="text-gray-700 font-medium">Portfolio URL</Label>
                      <Input
                        id="portfolioUrl"
                        name="portfolioUrl"
                        value={formData.portfolioUrl}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="https://yourportfolio.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="resume" className="text-gray-700 font-medium">Resume/CV *</Label>
                    <div className="mt-1 flex items-center space-x-4">
                      <Input
                        id="resume"
                        type="file"
                        onChange={handleFileUpload}
                        accept=".pdf,.doc,.docx"
                        className="flex-1"
                        required
                      />
                      <Upload className="h-5 w-5 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">PDF, DOC, or DOCX files only. Max size: 5MB</p>
                  </div>
                  
                  <div>
                    <Label htmlFor="coverLetter" className="text-gray-700 font-medium">Cover Letter *</Label>
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      className="mt-1"
                      rows={6}
                      placeholder="Tell us why you're interested in this position and what makes you a great fit for our team..."
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

      {/* Job Details Modal */}
      <Dialog open={showDetailsModal} onOpenChange={setShowDetailsModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedJob && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900">{selectedJob.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {selectedJob.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    {selectedJob.type}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Star className="h-4 w-4 mr-2" />
                    {selectedJob.experience}
                  </div>
                </div>
                <Badge variant="outline">{selectedJob.department}</Badge>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Job Description</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">{selectedJob.description}</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <CheckCircle className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Responsibilities</h4>
                    <ul className="space-y-2">
                      {selectedJob.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <Target className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex gap-4 pt-6">
                  <Button 
                    className="flex-1 bg-primary hover:bg-primary-dark text-white"
                    onClick={() => {
                      setShowDetailsModal(false);
                      setShowApplicationModal(true);
                    }}
                  >
                    Apply Now
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setShowDetailsModal(false)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Application Form Modal */}
      <Dialog open={showApplicationModal} onOpenChange={setShowApplicationModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Apply for {selectedJob?.title}
            </DialogTitle>
          </DialogHeader>
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
                  placeholder="john@example.com"
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
                <Label htmlFor="experience" className="text-gray-700 font-medium">Experience Level *</Label>
                <Select value={formData.experience} onValueChange={(value) => handleSelectChange('experience', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entry">Entry Level (0-1 years)</SelectItem>
                    <SelectItem value="junior">Junior (1-3 years)</SelectItem>
                    <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                    <SelectItem value="senior">Senior (5+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="currentCompany" className="text-gray-700 font-medium">Current Company</Label>
                <Input
                  id="currentCompany"
                  name="currentCompany"
                  value={formData.currentCompany}
                  onChange={handleInputChange}
                  className="mt-1"
                  placeholder="Company Name"
                />
              </div>
              
              <div>
                <Label htmlFor="portfolioUrl" className="text-gray-700 font-medium">Portfolio URL</Label>
                <Input
                  id="portfolioUrl"
                  name="portfolioUrl"
                  value={formData.portfolioUrl}
                  onChange={handleInputChange}
                  className="mt-1"
                  placeholder="https://yourportfolio.com"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="resume" className="text-gray-700 font-medium">Resume/CV *</Label>
              <div className="mt-1 flex items-center space-x-4">
                <Input
                  id="resume"
                  type="file"
                  onChange={handleFileUpload}
                  accept=".pdf,.doc,.docx"
                  className="flex-1"
                  required
                />
                <Upload className="h-5 w-5 text-gray-400" />
              </div>
              <p className="text-sm text-gray-500 mt-1">PDF, DOC, or DOCX files only. Max size: 5MB</p>
            </div>
            
            <div>
              <Label htmlFor="coverLetter" className="text-gray-700 font-medium">Cover Letter *</Label>
              <Textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                className="mt-1"
                rows={6}
                placeholder="Tell us why you're interested in this position and what makes you a great fit for our team..."
                required
              />
            </div>
            
            <div className="flex gap-4 pt-6">
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-primary hover:bg-primary-dark text-white"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
              <Button 
                type="button"
                variant="outline"
                onClick={() => setShowApplicationModal(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}