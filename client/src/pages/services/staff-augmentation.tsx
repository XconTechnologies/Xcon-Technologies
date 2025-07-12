import Header from "@/components/header";
import Footer from "@/components/footer";

export default function StaffAugmentation() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Staff Augmentation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scale your development team with skilled professionals who integrate seamlessly with your existing workflow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Hire Android App Developer</h3>
              <p className="text-gray-600">
                Experienced Android developers skilled in Kotlin, Java, and modern Android development frameworks.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Hire iOS App Developer</h3>
              <p className="text-gray-600">
                Expert iOS developers proficient in Swift, SwiftUI, and native iOS application development.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Hire Node.js Developer</h3>
              <p className="text-gray-600">
                Full-stack Node.js developers with expertise in modern JavaScript frameworks and backend technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}