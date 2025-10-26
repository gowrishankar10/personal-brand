import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    {
      icon: '⚛️',
      title: 'Web Development',
      subtitle: 'Angular',
      description: 'Custom Angular applications built for scalability and performance.'
    },
    {
      icon: '🏢',
      title: 'Business Websites',
      description: 'Professional websites that represent your brand and convert visitors.'
    },
    {
      icon: '🚀',
      title: 'Landing Page Design',
      description: 'High-converting landing pages that drive leads and sales.'
    },
    {
      icon: '📊',
      title: 'Admin Dashboards',
      description: 'Powerful admin interfaces with data visualization and analytics.'
    },
    {
      icon: '⚡',
      title: 'UI Optimization',
      description: 'Speed optimization and UX improvements for better engagement.'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Mobile-first design that works perfectly on all devices.'
    }
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-brand-green">Services</span>
          </h2>
          <div className="w-20 h-1 bg-brand-green mx-auto"></div>
          <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
            Comprehensive web solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-brand-green/50 transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/0 to-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-brand-green group-hover:text-green-400 transition-colors">
                  {service.title}
                </h3>
                {service.subtitle && (
                  <p className="text-sm text-gray-400 mb-2">{service.subtitle}</p>
                )}
                <p className="text-gray-300">{service.description}</p>
                
                {/* Arrow indicator */}
                <div className="mt-4 text-brand-green opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  →
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-gray-300 mb-6">
            Let's bring your vision online.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-brand-green text-brand-dark font-semibold rounded-lg hover:scale-105 transition-all duration-300 btn-glow"
          >
            Start Your Project
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

