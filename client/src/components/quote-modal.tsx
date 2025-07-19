import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Upload, FileText } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import PhoneInput from './ui/phone-input';
import XConLogo from "@assets/Xcon Logo_1752834032465.png";
import { useToast } from '@/hooks/use-toast';
import { SERVICES } from '../../../shared/services';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    service: '',
    message: ''
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Handle body scroll lock when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    console.log('Service selected:', value);
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (10MB limit)
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select a file smaller than 10MB.",
          variant: "destructive",
        });
        return;
      }
      setSelectedFile(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    // Reset file input
    const fileInput = document.getElementById('quote-file') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.business || !formData.service || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields, including service selection.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create FormData for file upload
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('business', formData.business);
      submitData.append('service', formData.service);
      submitData.append('message', formData.message);
      
      if (selectedFile) {
        submitData.append('file', selectedFile);
      }

      const response = await fetch('/api/quote', {
        method: 'POST',
        body: submitData,
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Track successful quote submission
        trackEvent('form_submit', 'quote', formData.service, 1);
        
        toast({
          title: "Quote request sent successfully!",
          description: data.message || "We'll get back to you within 24 hours.",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          business: '',
          service: '',
          message: ''
        });
        setSelectedFile(null);
        const fileInput = document.getElementById('quote-file') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
        onClose();
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to send quote request. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send quote request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const modalContent = (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        zIndex: 999999,
        margin: 0,
        padding: '16px'
      }}
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative shadow-2xl border border-gray-100"
        style={{ 
          transform: 'scale(1)',
          transformOrigin: 'center center',
          animation: 'fadeIn 0.3s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 hover:bg-gray-100 rounded-full transition-colors z-10 group"
        >
          <X className="h-5 w-5 text-gray-400 group-hover:text-gray-600" />
        </button>

        {/* Header with Logo and Title */}
        <div className="text-center mb-8">
          <div className="mb-4">
            <img 
              src={XConLogo} 
              alt="XCon Technologies" 
              className="h-8 w-auto mx-auto"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h2>
          <p className="text-gray-600">Tell us about your project and we'll get back to you within 24 hours</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-semibold text-gray-800">Full Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 bg-gray-50/50 hover:bg-white"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold text-gray-800">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@company.com"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 bg-gray-50/50 hover:bg-white"
                required
              />
            </div>
          </div>

          {/* Phone and Business row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-semibold text-gray-800">Phone Number *</Label>
              <PhoneInput
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(value) => setFormData(prev => ({ ...prev, phone: value }))}
                placeholder="(555) 123-4567"
                className="bg-gray-50/50 hover:bg-white transition-all duration-200"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="business" className="text-sm font-semibold text-gray-800">Company Name *</Label>
              <Input
                id="business"
                name="business"
                type="text"
                placeholder="Your company name"
                value={formData.business}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 bg-gray-50/50 hover:bg-white"
                required
              />
            </div>
          </div>

          {/* Services dropdown */}
          <div className="space-y-2">
            <Label htmlFor="service" className="text-sm font-semibold text-gray-800">Service Required *</Label>
            <Select value={formData.service} onValueChange={handleServiceChange} required>
              <SelectTrigger className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 bg-gray-50/50 hover:bg-white">
                <SelectValue placeholder="Select a service you need" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border border-gray-200 shadow-lg max-h-[300px] overflow-y-auto" style={{ zIndex: 9999999 }}>
                {SERVICES.map((service) => (
                  <SelectItem key={service.value} value={service.value} className="cursor-pointer">
                    {service.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* File Upload */}
          <div className="space-y-2">
            <Label htmlFor="quote-file" className="text-sm font-semibold text-gray-800">Attach Files (Optional)</Label>
            <div className="space-y-3">
              <div className="flex items-center justify-center w-full">
                <label htmlFor="quote-file" className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-200 border-dashed rounded-xl cursor-pointer bg-gray-50/50 hover:bg-gray-50 hover:border-primary/50 transition-all duration-200">
                  <div className="flex flex-col items-center justify-center pt-2 pb-2">
                    <Upload className="w-6 h-6 mb-2 text-gray-400" />
                    <p className="text-sm text-gray-500">
                      <span className="font-semibold text-primary">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-400">PNG, JPG, PDF, DOC (max 10MB)</p>
                  </div>
                  <input 
                    id="quote-file" 
                    type="file" 
                    className="hidden" 
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg,.gif,.zip,.rar,.csv"
                  />
                </label>
              </div>
              
              {selectedFile && (
                <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-blue-800 font-medium">{selectedFile.name}</span>
                    <span className="text-xs text-blue-600">({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)</span>
                  </div>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-semibold text-gray-800">Project Details *</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your project requirements, timeline, and budget..."
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 bg-gray-50/50 hover:bg-white resize-none"
              required
            />
          </div>

          {/* Submit button */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? "Sending..." : "Send Message & Get Free Quote"}
            </Button>
            <p className="text-center text-xs text-gray-500 mt-3">
              We'll respond within 24 hours with a detailed proposal
            </p>
          </div>
        </form>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}