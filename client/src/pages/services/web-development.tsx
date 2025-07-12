import Header from "@/components/header";
import Footer from "@/components/footer";

export default function WebDevelopment() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Web Development
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build powerful, responsive websites that deliver exceptional user experiences and drive business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Ecommerce Website Development</h3>
              <p className="text-gray-600">
                Complete e-commerce solutions with shopping carts, payment integration, and inventory management.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Web Portals</h3>
              <p className="text-gray-600">
                Custom web portals for businesses, customers, and partners with secure access and user management.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}