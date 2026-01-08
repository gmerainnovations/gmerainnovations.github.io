const Portfolio = () => {
  const projects = [
    {
      category: 'Cloud Solutions',
      title: 'Enterprise Cloud Migration',
      technologies: ['AWS', 'Docker', 'Kubernetes'],
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
    },
    {
      category: 'Custom Development',
      title: 'Healthcare Management System',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      image: 'bg-gradient-to-br from-green-400 to-green-600',
    },
    {
      category: 'Cybersecurity',
      title: 'Financial Security Platform',
      technologies: ['Zero Trust', 'Multi-factor Auth', 'Encryption'],
      image: 'bg-gradient-to-br from-purple-400 to-purple-600',
    },
    {
      category: 'Mobile Development',
      title: 'E-commerce Mobile App',
      technologies: ['React Native', 'Firebase', 'Stripe'],
      image: 'bg-gradient-to-br from-pink-400 to-pink-600',
    },
    {
      category: 'Data Analytics',
      title: 'Data Analytics Dashboard',
      technologies: ['Python', 'TensorFlow', 'Power BI'],
      image: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
    },
    {
      category: 'IoT & Integration',
      title: 'IoT Smart Building Solution',
      technologies: ['IoT Hub', 'Azure', 'Machine Learning'],
      image: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-0 w-64 h-64 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-10 right-0 w-64 h-64 bg-gradient-to-r from-pink-200 to-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our Portfolio
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our successful projects and see how we&apos;ve helped businesses achieve their technology goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover-lift group relative"
              style={{
                animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className={`h-48 ${project.image} flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="text-white text-4xl font-bold opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 relative z-10">
                  {project.title.charAt(0)}
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">{project.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

