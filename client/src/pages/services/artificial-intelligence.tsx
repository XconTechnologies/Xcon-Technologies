import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ArtificialIntelligence() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Artificial Intelligence
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of AI to automate processes, gain insights, and drive innovation in your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Generative AI</h3>
              <p className="text-gray-600">
                Advanced AI solutions that create content, generate insights, and automate creative processes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Natural Language Processing</h3>
              <p className="text-gray-600">
                AI-powered text analysis, chatbots, and language understanding for enhanced user interactions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">AI Agent Development</h3>
              <p className="text-gray-600">
                Intelligent agents that can perform complex tasks, make decisions, and learn from data.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}