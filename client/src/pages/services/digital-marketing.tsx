import Header from "@/components/header";
import Footer from "@/components/footer";

export default function DigitalMarketing() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Digital Marketing Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing strategies to boost your online presence and drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Social Media Marketing</h3>
              <p className="text-gray-600">
                Engage your audience across social platforms with strategic content and targeted campaigns.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Search Engine Marketing</h3>
              <p className="text-gray-600">
                Increase visibility and drive qualified traffic through paid search advertising campaigns.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Search Engine Optimization</h3>
              <p className="text-gray-600">
                Improve your website's organic search rankings and increase visibility to potential customers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}