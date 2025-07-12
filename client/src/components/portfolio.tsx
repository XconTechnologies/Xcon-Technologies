export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Modern online store with advanced features and seamless user experience",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["React", "Node.js"],
    },
    {
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking solution with advanced features",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["React Native", "Firebase"],
    },
    {
      title: "Healthcare Management",
      description: "Comprehensive healthcare management system for medical professionals",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["Vue.js", "Laravel"],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-text max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses achieve their digital goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card group">
              <div className="h-64 bg-cover bg-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-dark mb-2">{project.title}</h3>
                <p className="text-gray-text mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="text-primary font-semibold hover:text-primary-dark transition-colors">
                    View Project →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
