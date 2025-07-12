import Header from "@/components/header";
import Footer from "@/components/footer";

export default function MobileAppDevelopment() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Mobile App Development
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with cutting-edge mobile applications that engage users and drive growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">iOS App Development</h3>
              <p className="text-gray-600">
                Native iOS applications built with Swift and SwiftUI for optimal performance and user experience.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Android App Development</h3>
              <p className="text-gray-600">
                High-performance Android apps using Kotlin and Java for seamless functionality across devices.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Cross Platform App Development</h3>
              <p className="text-gray-600">
                Efficient cross-platform solutions using React Native and Flutter for cost-effective development.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}