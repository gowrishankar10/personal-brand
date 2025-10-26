import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-brand-green">Me</span>
          </h2>
          <div className="w-20 h-1 bg-brand-green mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Professional Design Element */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-brand-green/20 via-brand-dark to-brand-green/5 p-8 backdrop-blur overflow-hidden border border-brand-green/20">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 via-transparent to-brand-dark"></div>
              
              {/* Floating geometric shapes */}
              <motion.div 
                className="absolute top-10 right-10 w-32 h-32 border-2 border-brand-green/30 rounded-lg"
                animate={{ rotate: [0, 90, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-20 left-6 w-24 h-24 bg-brand-green/10 rounded-full"
                animate={{ scale: [1, 1.2, 1], y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Central icon or design */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-brand-green to-green-400 rounded-full flex items-center justify-center text-5xl animate-pulse">
                    <svg className="w-12 h-12 text-brand-dark" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <p className="text-brand-green font-bold text-xl">Code</p>
                  <p className="text-gray-400 text-sm">Quality First</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,135,0.1),transparent_70%)]"></div>
            </div>
            
            {/* Stats badges */}
            <div className="absolute -bottom-4 -right-4 bg-brand-green p-4 rounded-xl text-brand-dark font-bold shadow-lg">
              <div className="text-2xl">🚀</div>
            </div>
            <div className="absolute -top-4 -left-4 bg-gradient-to-br from-brand-green to-green-400 p-3 rounded-full text-brand-dark shadow-lg">
              <div className="text-lg">⚛️</div>
            </div>
          </motion.div>

          {/* Right side - Content with animations */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-4xl font-bold text-brand-green mb-6">
              Hey, I'm Gowrish 👋
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              I'm a front-end developer with <strong className="text-brand-green">3+ years of experience</strong> building modern web apps using <strong className="text-brand-green">Angular</strong> and <strong className="text-brand-green">Spring Boot</strong>.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              I help startups and businesses create <span className="text-brand-green">fast, responsive, and clean web solutions</span> that actually deliver results.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, I'm learning, lifting, or building something new to challenge myself. ⚡
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <motion.div 
                className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-brand-green/50 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl text-brand-green mb-2">3+</div>
                <div className="text-gray-300">Years Experience</div>
              </motion.div>
              <motion.div 
                className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-brand-green/50 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl text-brand-green mb-2">20+</div>
                <div className="text-gray-300">Projects Delivered</div>
              </motion.div>
            </div>

            <div className="pt-6">
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-brand-green text-brand-dark font-semibold rounded-lg hover:scale-105 transition-all duration-300 btn-glow"
              >
                Let's Work Together
                <motion.span 
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

