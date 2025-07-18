import { useState } from "react";
import { Phone, Mail, MessageCircle, MessageSquare, Upload, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import PhoneInput from "@/components/ui/phone-input";
import xconLogo from "@assets/Xcon Logo cropped_1752479137104.png";
import securityBadge from "@assets/aws-security_1752489212506.png";
import cloudPractitionerBadge from "@assets/aws-cloud-practitioner_1752489212501.png";
import devopsBadge from "@assets/aws-devOps_1752489212505.png";
import developerBadge from "@assets/aws-developer_1752489212504.png";
import solutionsArchitectBadge from "@assets/aws-solution-architect_1752489212507.png";
import sysopsBadge from "@assets/aws-sysOps_1752489212508.png";

export default function ConsultationContact() {
  const [formData, setFormData] = useState({
    message: "",
    fullName: "",
    company: "",
    email: "",
    phone: ""
  });

  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
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
      // Split fullName into firstName and lastName for API compatibility
      const nameParts = formData.fullName.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || 'Customer';
      
      const submitData = {
        firstName,
        lastName,
        email: formData.email,
        phone: formData.phone,
        message: `Company: ${formData.company}\n\n${formData.message}${file ? `\n\nFile attached: ${file.name}` : ''}`
      };
      
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          company: formData.company,
          workEmail: formData.email,
          phone: formData.phone,
          message: formData.message
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: data.message || "We'll get back to you within 24 hours.",
        });
        setFormData({
          message: "",
          fullName: "",
          company: "",
          email: "",
          phone: ""
        });
        setFile(null);
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Phone className="h-5 w-5" />,
      text: "Call us",
      color: "text-blue-600"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      text: "Email us",
      color: "text-blue-600"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      text: "WhatsApp",
      color: "text-green-600"
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      text: "Live chat",
      color: "text-blue-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 items-start">
          {/* Left Column - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 h-full flex flex-col">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                  Need a Consultation on Your Development Project?
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Drop us a line! We are here to answer your questions 24/7.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                {/* Form Fields - First: Name, Company, Email, Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Work email"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                    required
                  />
                  <PhoneInput
                    name="phone"
                    value={formData.phone}
                    onChange={(value) => setFormData(prev => ({ ...prev, phone: value }))}
                    placeholder="Phone number"
                    className="text-sm sm:text-base"
                    required
                  />
                </div>

                {/* File Upload */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center hover:border-primary transition-colors">
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-gray-600 text-sm sm:text-base">
                      Drag and drop or <span className="text-primary font-semibold">browse</span> to upload your file(s)
                    </p>
                  </label>
                  {file && (
                    <p className="mt-2 text-sm text-green-600">
                      File selected: {file.name}
                    </p>
                  )}
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="How can we help you?"
                    className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-sm sm:text-base"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-auto">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg transition-colors disabled:opacity-50 text-sm sm:text-base"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Process Information */}
          <div className="lg:col-span-1">
            <div className="bg-primary rounded-2xl shadow-lg p-6 sm:p-8 text-white h-full flex flex-col justify-center">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Quick response</h3>
                    <p className="text-white/90 text-sm sm:text-base">
                      We usually reply within 1 hour on business days to sign an NDA and arrange a discussion.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Personalized approach</h3>
                    <p className="text-white/90 text-sm sm:text-base">
                      You will engage directly with specialists who are experienced in your domain.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2">No pressure</h3>
                    <p className="text-white/90 text-sm sm:text-base">
                      We're here to explore your needs and provide guidance — whenever you're ready to move forward.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Proven expertise</h3>
                    <p className="text-white/90 text-sm sm:text-base">
                      With over 10 years of experience and 500+ successful projects, our team delivers cutting-edge solutions that drive business growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Certification Badges */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <a href="https://www.security.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 flex items-center justify-center">
                <img 
                  src={securityBadge} 
                  alt="AWS Security Specialty Certification" 
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <a href="https://www.cloud-practitioner.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 flex items-center justify-center">
                <img 
                  src={cloudPractitionerBadge} 
                  alt="AWS Cloud Practitioner Foundational Certification" 
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <a href="https://devops.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 flex items-center justify-center">
                <img 
                  src={devopsBadge} 
                  alt="AWS DevOps Engineer Professional Certification" 
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <a href="https://www.developer.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 flex items-center justify-center">
                <img 
                  src={developerBadge} 
                  alt="AWS Developer Associate Certification" 
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <a href="https://www.solution-architect.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 flex items-center justify-center">
                <img 
                  src={solutionsArchitectBadge} 
                  alt="AWS Solutions Architect Professional Certification" 
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <a href="https://www.sysops.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 flex items-center justify-center">
                <img 
                  src={sysopsBadge} 
                  alt="AWS SysOps Administrator Associate Certification" 
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}