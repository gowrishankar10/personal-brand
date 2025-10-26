import { motion } from 'framer-motion'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechStart Inc.',
      content: 'Gowrish delivered an exceptional Angular application for our startup. The performance and user experience exceeded our expectations. Highly recommended!',
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Founder, Digital Solutions',
      content: 'Working with Gowrish was a game-changer. He transformed our vision into a beautiful, fast, and scalable web application. Truly professional!',
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Johnson',
      role: 'Marketing Director, BrandCo',
      content: 'The landing page Gowrish created increased our conversion rate by 150%. His attention to detail and modern design approach is outstanding.',
      avatar: '👩‍💼'
    }
  ]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="text-brand-green">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-brand-green mx-auto"></div>
          <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-brand-green/50 transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/0 to-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4 transform group-hover:scale-110 transition-transform">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="mb-4 text-3xl text-brand-green opacity-50">
                  "
                </div>
                
                <p className="text-gray-300 leading-relaxed italic">{testimonial.content}</p>
                
                <div className="flex text-brand-green mt-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.span 
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

