import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { trackPageView } from "@/lib/analytics";

export default function TermsOfService() {
  useEffect(() => {
    trackPageView('/terms-of-service');
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 pt-32 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-0 max-w-4xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-8 lg:px-16">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-gray-600 mb-4"><strong>Last updated:</strong> January 21, 2025</p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using XCon Technologies' services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  XCon Technologies provides digital transformation services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Web development and software consulting</li>
                  <li>Cloud engineering and infrastructure services</li>
                  <li>Mobile application development</li>
                  <li>Data engineering and analytics solutions</li>
                  <li>DevOps and IT consultation services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use our services in compliance with all applicable laws</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not engage in any harmful or disruptive activities</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                  All content, features, and functionality of our services are owned by XCon Technologies and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Service Availability</h2>
                <p className="text-gray-700 leading-relaxed">
                  We strive to maintain high availability of our services. However, we do not guarantee uninterrupted access and may perform maintenance that temporarily affects service availability. We will provide reasonable notice when possible.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Payment Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For paid services:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Payment is due according to the agreed schedule</li>
                  <li>All fees are non-refundable unless otherwise specified</li>
                  <li>We reserve the right to suspend services for non-payment</li>
                  <li>Prices may change with 30 days notice</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  XCon Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Termination</h2>
                <p className="text-gray-700 leading-relaxed">
                  Either party may terminate the service agreement at any time with appropriate notice. Upon termination, your right to use the services will cease immediately, and we may delete your data according to our data retention policy.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These terms shall be governed by and construed in accordance with the laws of Ohio, United States, without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the services constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  For questions about these terms, please contact us:
                </p>
                <div className="mt-4 p-6 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 font-medium">XCon Technologies</p>
                  <p className="text-gray-600">Email: askforquote@xcontechnologies.com</p>
                  <p className="text-gray-600">Phone: +1 (513) 302-4718</p>
                  <p className="text-gray-600">Address: Ohio City, USA</p>
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