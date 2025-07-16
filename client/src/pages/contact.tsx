import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        form.reset();
      } else {
        throw new Error("Failed to send message");
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

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      info: "+1 (513) 302-4718",
      description: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      info: "askforquote@xcontechnologies.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      info: "Ohio City, USA",
      description: "Remote-first company"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      info: "9:00 AM - 6:00 PM EST",
      description: "Monday to Friday"
    }
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "Custom Software Development",
    "Cloud Services",
    "AI & Machine Learning",
    "Digital Marketing",
    "UI/UX Design",
    "Data Engineering",
    "Staff Augmentation"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
        </div>
        
        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-primary rounded-full animate-ping"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to transform your business with cutting-edge technology? Let's discuss your project and explore how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact-form" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </a>
            <a href="#contact-info" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Contact Info
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact-info" className="py-16">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full text-primary mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h3>
                <p className="text-gray-800 font-medium mb-1">{info.info}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Let's Start a <span className="text-primary">Conversation</span>
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours to discuss your project requirements.
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Required</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Details</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project requirements..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-full font-medium transition-colors"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Right Column - Additional Info */}
            <div className="space-y-8">
              <div className="bg-primary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose XCon Technologies?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Quick Response</h4>
                      <p className="text-sm opacity-90">We respond to all inquiries within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Expert Consultation</h4>
                      <p className="text-sm opacity-90">Free initial consultation to understand your needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Tailored Solutions</h4>
                      <p className="text-sm opacity-90">Custom solutions designed for your specific requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">24/7 Support</h4>
                      <p className="text-sm opacity-90">Round-the-clock support for your peace of mind</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold text-gray-800">Start Your Project Today</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Ready to transform your business? Our team is standing by to discuss your project 
                  and provide you with a customized solution that meets your unique needs.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-gray-600">Free project consultation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-gray-600">Detailed project proposal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-gray-600">Transparent pricing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-gray-600">No hidden fees</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}