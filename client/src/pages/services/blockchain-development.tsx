import Header from "@/components/header";
import Footer from "@/components/footer";

export default function BlockchainDevelopment() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Blockchain Development
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build secure, decentralized applications and smart contracts on leading blockchain platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Metaverse Development</h3>
              <p className="text-gray-600">
                Create immersive virtual worlds and experiences for the next generation of digital interaction.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">NFT Development</h3>
              <p className="text-gray-600">
                Develop and deploy non-fungible tokens with custom marketplaces and trading functionalities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}