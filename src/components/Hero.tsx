import { motion } from 'framer-motion'

export default function Hero() {

  // Floating particles animation
  const FloatingParticle = ({ delay, duration }: { delay: number, duration: number }) => {
    return (
      <motion.div
        className="absolute w-2 h-2 bg-brand-green rounded-full opacity-30"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration,
          repeat: Infinity,
          delay,
          ease: "easeInOut",
        }}
      />
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark to-green-900/20"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      {/* Animated floating orbs */}
      <motion.div 
        className="absolute top-20 left-10 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-brand-green/8 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Floating particles */}
      <FloatingParticle delay={0} duration={3} />
      <FloatingParticle delay={0.5} duration={4} />
      <FloatingParticle delay={1} duration={3.5} />
      <FloatingParticle delay={1.5} duration={4.5} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge with animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6 px-4 py-2 bg-brand-green/10 border border-brand-green/30 rounded-full text-brand-green text-sm font-medium backdrop-blur-sm"
        >
          Available for New Projects ✨
        </motion.div>
        
        {/* Main Headline with stagger animation */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Building fast, clean, and{' '}
          </motion.span>
          <motion.span 
            className="text-brand-green inline-block relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-brand-green via-green-400 to-brand-green bg-clip-text text-transparent animate-shimmer bg-300%">
              meaningful
            </span>
          </motion.span>
          <br className="hidden md:block" />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            digital experiences{' '}
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, delay: 1 }}
              className="inline-block"
            >
              ⚡
            </motion.span>
          </motion.span>
        </motion.h1>
        
        {/* Subtext with fade in */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          I'm <motion.span 
            className="text-brand-green font-semibold bg-gradient-to-r from-brand-green to-green-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Gowrish
          </motion.span> from <span className="text-brand-green">G-Aura Web Studio</span>. Angular developer crafting digital experiences that matter. ⚡
        </motion.p>
        
        {/* CTA Buttons with stagger */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a 
            href="#portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-brand-green text-brand-dark font-semibold rounded-lg transition-all duration-300 btn-glow relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              View Work
              <motion.span 
                className="inline-block ml-2"
                whileHover={{ x: 5 }}
              >
                →
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
          </motion.a>
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-brand-green text-brand-green font-semibold rounded-lg hover:bg-brand-green hover:text-brand-dark transition-all duration-300 backdrop-blur-sm"
          >
            Hire Me
          </motion.a>
        </motion.div>
        
        {/* Animated scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>

      {/* Additional glowing lines */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      />
    </section>
  )
}

