import { ArrowRight } from "lucide-react";

export default function Solutions() {
  const solutions = [
    { title: "ERP", link: "#" },
    { title: "Operations management", link: "#" },
    { title: "Financial management", link: "#" },
    { title: "Supply chain management", link: "#" },
    { title: "Asset management", link: "#" },
    { title: "Fleet management", link: "#" },
    { title: "HR software", link: "#" },
    { title: "eLearning software", link: "#" },
    { title: "eCommerce", link: "#" },
    { title: "CRM", link: "#" },
    { title: "Marketing and advertising", link: "#" },
    { title: "Content management", link: "#" },
    { title: "Project management", link: "#" },
    { title: "Databases", link: "#" },
    { title: "Data analytics", link: "#" },
    { title: "Web portals", link: "#" },
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <div className="bg-primary/10 rounded-lg p-4 inline-block mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Examples of Solutions We Deliver</h2>
          </div>
          <p className="text-gray-600 max-w-4xl leading-relaxed">
            During our 35 years in <a href="#" className="text-primary underline hover:text-primary-dark transition-colors">software engineering</a>, we have dealt with 60+ kinds of solutions — from tailored client-facing apps to large-scale automation systems for specific niches like pharma R&D and oil drilling. However complex your endeavor is, chances are, we have built similar software in the past and will gladly share our insights to lead your software development initiative to success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <button className="text-gray-400 group-hover:text-primary transition-colors">
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}