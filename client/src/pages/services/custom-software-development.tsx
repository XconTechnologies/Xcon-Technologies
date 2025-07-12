import Header from "@/components/header";
import Footer from "@/components/footer";

export default function CustomSoftwareDevelopment() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Custom Software Development
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored software solutions designed to meet your unique business requirements and challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">ERP Solution</h3>
              <p className="text-gray-600">
                Enterprise Resource Planning systems to streamline your business processes and operations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">CRM Solution</h3>
              <p className="text-gray-600">
                Customer Relationship Management systems to enhance customer interactions and sales processes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">CMS Solution</h3>
              <p className="text-gray-600">
                Content Management Systems for easy website and content administration without technical expertise.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <button 
              onClick={() => window.open('mailto:askforquote@xcontechnologies.com', '_blank')}
              className="bg-primary text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}