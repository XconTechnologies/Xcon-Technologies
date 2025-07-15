import { useState } from "react";
import { Phone, Mail, MessageCircle, MessageSquare, Upload, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData, file);
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Need a Consultation on Your Development Project?
                </h2>
                <p className="text-gray-600">
                  Drop us a line! We are here to answer your questions 24/7.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form Fields - First: Name, Company, Email, Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Work email"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone number"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                {/* File Upload */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-gray-600">
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
                    className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Contact Options */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className={`${method.color}`}>
                    {method.icon}
                  </div>
                  <span className="text-gray-700 font-medium">
                    {method.text}
                  </span>
                </div>
              ))}
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