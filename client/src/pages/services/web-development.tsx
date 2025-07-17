import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Globe, Code, Smartphone, Monitor, Database, Shield, Zap, Users, Star, TrendingUp, Search, Palette, Server, Settings, Eye } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import QuoteModal from "@/components/quote-modal";
import { useState } from "react";
import xconLogo from '@assets/Xcon Logo cropped_1752479137104.png';
import bathroomImage from '@assets/image_1752740036498.png';
import door2doorImage from '@assets/image_1752740044305.png';
import constructionImage from '@assets/image_1752740028753.png';
import carpetsImage from '@assets/image_1752740010452.png';
import ecommerceImage from '@assets/image_1752740052597.png';
import businessImage from '@assets/image_1752740078132.png';

export default function WebDevelopment() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-20 pt-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
                Core Service
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-primary">Custom Web Development</span> Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                Built for User-Focused, Scalable Web Solutions!
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Looking for website designers for small business? We design websites to maximize user interaction and engagement. Our web design development services provide scalable, high-performance digital platforms with streamlined UI/UX.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
                >
                  Get A Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white bg-transparent hover:bg-white hover:text-black px-8 py-3 text-lg"
                >
                  View Our Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                  <Monitor className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-lg">Responsive Design</h3>
                  <p className="text-sm text-gray-300">Mobile-first approach</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                  <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-lg">Fast Performance</h3>
                  <p className="text-sm text-gray-300">Optimized loading</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-lg">Secure Solutions</h3>
                  <p className="text-sm text-gray-300">Data protection</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                  <Search className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-lg">SEO Optimized</h3>
                  <p className="text-sm text-gray-300">Search visibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What <span className="text-primary">Custom Web Development</span> Services We Offer?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Custom Website Development for Maximum Reach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">UI/UX Web Design</h3>
              <p className="text-gray-600">
                Our team creates visually engaging, user-focused designs that enhance engagement and brand alignment. Using tools like Figma and Adobe Creative Cloud, our developers deliver interfaces that are pixel-perfect and accessible across all devices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
              <p className="text-gray-600">
                Our developers create fast, SEO-optimized interfaces with modern technologies to ensure seamless experience across all devices. Our flexible approach improves performance and scalability for higher conversion rates.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
              <p className="text-gray-600">
                With expertise in server-side frameworks like Node.js and Python, our custom website development company develops scalable backend systems that power reliable web applications with seamless API functionality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Full Stack Development</h3>
              <p className="text-gray-600">
                Our full-stack developers offer end-to-end solutions that connect all web application components. We build dynamic, scalable applications designed to provide cohesive user experience and support long-term growth.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">No/Low Code Development</h3>
              <p className="text-gray-600">
                Rapid development solutions using modern no-code and low-code platforms to accelerate your project timeline while maintaining quality and functionality for your business needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cloud Development</h3>
              <p className="text-gray-600">
                Modern cloud-based solutions that provide scalability, security, and performance optimization. Our cloud development services ensure your web applications can handle growth and traffic spikes effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Web Development Solutions</span> to Expand Your Business
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Websites</h3>
              <p className="text-gray-600">Professional business websites with modern design and functionality</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Monitor className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">E-Commerce</h3>
              <p className="text-gray-600">Complete online stores with payment integration and inventory management</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Web Applications</h3>
              <p className="text-gray-600">Custom web applications tailored to your business processes</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Database className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">CMS</h3>
              <p className="text-gray-600">Content management systems for easy website updates and maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose XCon Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-primary">XCon</span> for Custom Website Development?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Security Measures</h3>
              <p className="text-gray-600">
                Implement secure data handling, encryption, and ongoing monitoring to safeguard both websites and users from potential threats.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Enhanced Performance</h3>
              <p className="text-gray-600">
                Optimized code, fast loading times, and efficient database queries ensure your website performs at its best under all conditions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Flexible Architecture</h3>
              <p className="text-gray-600">
                Scalable and modular architecture that grows with your business needs and adapts to changing requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Web Development</span> Our Process
            </h2>
            <p className="text-lg text-gray-600">
              Our custom web development solutions leverage cutting-edge technologies to deliver innovative and effective software for high-end websites.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: <Search className="w-8 h-8" />, title: "Discovery & Planning", step: "01" },
              { icon: <Eye className="w-8 h-8" />, title: "Research & Analysis", step: "02" },
              { icon: <Palette className="w-8 h-8" />, title: "Design & Prototyping", step: "03" },
              { icon: <Code className="w-8 h-8" />, title: "Development", step: "04" },
              { icon: <Shield className="w-8 h-8" />, title: "Quality Assurance", step: "05" },
              { icon: <Globe className="w-8 h-8" />, title: "Launch Strategy", step: "06" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <div className="text-white">{phase.icon}</div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-primary">
                    {phase.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Tech Stack</span> We Use
            </h2>
            <p className="text-lg text-gray-600">
              Our Web development solutions use the latest technologies for development according to your business. With a dedicated team of expert developers, we deliver innovative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">HTML5</span>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">CSS3</span>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">JavaScript</span>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">React</span>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">Node.js</span>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">Python</span>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">PHP</span>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" alt="WordPress" className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">WordPress</span>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">Angular</span>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">Vue.js</span>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" alt="Laravel" className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">Laravel</span>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">Django</span>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">MongoDB</span>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">MySQL</span>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">PostgreSQL</span>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">AWS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">60+</div>
              <div className="text-xl">Web Experts</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">200+</div>
              <div className="text-xl">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 flex items-center justify-center">
                4.8 <Star className="w-8 h-8 text-yellow-400 ml-2" />
              </div>
              <div className="text-xl">GoodFirms Rating</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 flex items-center justify-center">
                4.9 <Star className="w-8 h-8 text-yellow-400 ml-2" />
              </div>
              <div className="text-xl">Clutch Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Grow Your Brand with Exceptional <span className="text-primary">Web Development</span>
            </h2>
            <p className="text-lg text-gray-600">
              Accelerate growth and expansion with improved visibility and user engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enhanced Brand Visibility</h3>
              <p className="text-gray-600">Increase your online presence and reach more customers</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Growth Solutions</h3>
              <p className="text-gray-600">Scale your website as your business grows</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Access</h3>
              <p className="text-gray-600">Reach customers worldwide with responsive design</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Valuable User Insights</h3>
              <p className="text-gray-600">Analytics and data to understand your audience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Custom <span className="text-primary">Web Development Expertise</span> at XCon!
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We don't proclaim to be the best custom website development company, but we take pride in our expertise. Our professional, full-service in-house team follows a modern web development process to deliver efficient, secure, and scalable products that businesses trust and appreciate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Tech Expertise</h3>
              <p className="text-gray-600">Latest technologies and frameworks</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
              <p className="text-gray-600">Deep understanding of various industries</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Faster Launch Times</h3>
              <p className="text-gray-600">Efficient development process</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Efficient Workflow</h3>
              <p className="text-gray-600">Streamlined development process</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete <span className="text-primary">Web Development</span> - From Launch to Redesigns
            </h2>
            <p className="text-lg text-gray-600">
              Showcasing our expertise in delivering comprehensive web solutions
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left space-x-8 hover:pause-animation">
              {/* Project Cards */}
              <div className="flex-shrink-0 bg-white rounded-xl shadow-lg p-8 w-[600px] hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="flex-1">
                    <div className="mb-4">
                      <img src={xconLogo} alt="XCon Technologies" className="h-6 w-auto" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Beautiful Bathrooms In Dublin</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Your ultimate source for innovative and high-quality bathroom solutions, expertly tailored to meet your needs
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-64">
                    <div className="bg-black rounded-lg p-2">
                      <img 
                        src={bathroomImage} 
                        alt="Beautiful Bathrooms In Dublin" 
                        className="w-full h-44 object-contain rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 bg-white rounded-xl shadow-lg p-8 w-[600px] hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="flex-1">
                    <div className="mb-4">
                      <img src={xconLogo} alt="XCon Technologies" className="h-6 w-auto" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Door 2 Door House Removal Services</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Delivering affordability without compromise - explore our array of services at budget-friendly rates.
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-64">
                    <div className="bg-black rounded-lg p-2">
                      <img 
                        src={door2doorImage} 
                        alt="Door 2 Door House Removal Services" 
                        className="w-full h-44 object-contain rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 bg-white rounded-xl shadow-lg p-8 w-[600px] hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="flex-1">
                    <div className="mb-4">
                      <img src={xconLogo} alt="XCon Technologies" className="h-6 w-auto" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">We construct your dream projects</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We specialize in all aspects of construction from home extensions, home renovations & new home builds.
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-64">
                    <div className="bg-black rounded-lg p-2">
                      <img 
                        src={constructionImage} 
                        alt="We construct your dream projects" 
                        className="w-full h-44 object-contain rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 bg-white rounded-xl shadow-lg p-8 w-[600px] hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="flex-1">
                    <div className="mb-4">
                      <img src={xconLogo} alt="XCon Technologies" className="h-6 w-auto" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Carpets & Flooring Specialists</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Work with a professional Interior Designer anywhere in Ireland from the comfort of your own home.
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-64">
                    <div className="bg-black rounded-lg p-2">
                      <img 
                        src={carpetsImage} 
                        alt="Carpets & Flooring Specialists" 
                        className="w-full h-44 object-contain rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 bg-white rounded-xl shadow-lg p-8 w-[600px] hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="flex-1">
                    <div className="mb-4">
                      <img src={xconLogo} alt="XCon Technologies" className="h-6 w-auto" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">E-Commerce Platform</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Modern e-commerce solution with advanced features, secure payment processing, and seamless user experience.
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-64">
                    <div className="bg-black rounded-lg p-2">
                      <img 
                        src={ecommerceImage} 
                        alt="E-Commerce Platform" 
                        className="w-full h-44 object-contain rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 bg-white rounded-xl shadow-lg p-8 w-[600px] hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="flex-1">
                    <div className="mb-4">
                      <img src={xconLogo} alt="XCon Technologies" className="h-6 w-auto" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Business Management System</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Comprehensive business management platform with CRM, inventory management, and analytics dashboard.
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-64">
                    <div className="bg-black rounded-lg p-2">
                      <img 
                        src={businessImage} 
                        alt="Business Management System" 
                        className="w-full h-44 object-contain rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Duplicate cards for seamless loop */}
              <div className="flex-shrink-0 bg-white rounded-xl shadow-lg p-8 w-[600px] hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="flex-1">
                    <div className="mb-4">
                      <img src={xconLogo} alt="XCon Technologies" className="h-6 w-auto" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Beautiful Bathrooms In Dublin</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Your ultimate source for innovative and high-quality bathroom solutions, expertly tailored to meet your needs
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-64">
                    <div className="bg-black rounded-lg p-2">
                      <img 
                        src={bathroomImage} 
                        alt="Beautiful Bathrooms In Dublin" 
                        className="w-full h-44 object-contain rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 bg-white rounded-xl shadow-lg p-8 w-[600px] hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="flex-1">
                    <div className="mb-4">
                      <img src={xconLogo} alt="XCon Technologies" className="h-6 w-auto" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Door 2 Door House Removal Services</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Delivering affordability without compromise - explore our array of services at budget-friendly rates.
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-64">
                    <div className="bg-black rounded-lg p-2">
                      <img 
                        src={door2doorImage} 
                        alt="Door 2 Door House Removal Services" 
                        className="w-full h-44 object-contain rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join our satisfied clients and let's create something amazing together. Professional web development services tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg"
            >
              Get A Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white hover:text-primary px-8 py-3 text-lg"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}