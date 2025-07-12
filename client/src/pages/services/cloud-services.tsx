import Header from "@/components/header";
import Footer from "@/components/footer";

export default function CloudServices() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Cloud Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scalable cloud solutions to modernize your infrastructure and accelerate business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Cloud Application Development</h3>
              <p className="text-gray-600">
                Build and deploy applications directly on cloud platforms for maximum scalability and reliability.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Cloud Migration</h3>
              <p className="text-gray-600">
                Seamlessly migrate your existing applications and data to cloud environments with minimal downtime.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Cloud Support & Maintenance</h3>
              <p className="text-gray-600">
                24/7 monitoring and support services to ensure your cloud infrastructure runs smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}