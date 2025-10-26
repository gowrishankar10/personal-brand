import { motion } from 'framer-motion'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern Angular e-commerce site with payment integration and admin dashboard.',
      category: 'Angular + TypeScript',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      id: 2,
      title: 'Business Dashboard',
      description: 'Analytics dashboard with real-time data visualization and reporting.',
      category: 'Angular + RxJS',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      id: 3,
      title: 'Creative Portfolio',
      description: 'Stunning portfolio website with smooth animations and modern design.',
      category: 'Angular + Tailwind',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      id: 4,
      title: 'SaaS Admin Panel',
      description: 'Feature-rich admin panel with user management and analytics.',
      category: 'Angular + Firebase',
      color: 'from-orange-500/20 to-red-500/20'
    }
  ]

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-brand-green">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-brand-green mx-auto"></div>
          <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
            Showcasing some of my recent work and projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-brand-green/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Animated gradient background */}
              <motion.div 
                className={`h-64 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="text-6xl relative z-10">💼</div>
                
                {/* Overlay pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,135,0.1),transparent)]"></div>
              </motion.div>
              
              {/* Project Info */}
              <div className="p-6 space-y-3 relative z-10">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-brand-green mb-1 group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400">{project.category}</p>
                  </div>
                  <div className="text-brand-green opacity-0 group-hover:opacity-100 transition-opacity">
                    ↗
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
                
                <div className="pt-4 flex gap-4 items-center">
                  <a 
                    href="#" 
                    className="text-brand-green hover:text-green-400 font-semibold transition-colors flex items-center gap-2"
                  >
                    View Demo
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 border-2 border-brand-green text-brand-green font-semibold rounded-lg hover:bg-brand-green hover:text-brand-dark transition-all duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}

