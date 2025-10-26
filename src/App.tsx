import { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-dark/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="text-2xl font-bold text-brand-green"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-brand-green to-green-400 bg-clip-text text-transparent">
              G-Aura Web Studio ⚡
            </span>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-brand-green transition-colors">About</a>
            <a href="#services" className="hover:text-brand-green transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-brand-green transition-colors">Portfolio</a>
            <a href="#testimonials" className="hover:text-brand-green transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-brand-green transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-brand-green"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#about" className="block hover:text-brand-green transition-colors" onClick={() => setIsOpen(false)}>About</a>
            <a href="#services" className="block hover:text-brand-green transition-colors" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#portfolio" className="block hover:text-brand-green transition-colors" onClick={() => setIsOpen(false)}>Portfolio</a>
            <a href="#testimonials" className="block hover:text-brand-green transition-colors" onClick={() => setIsOpen(false)}>Testimonials</a>
            <a href="#contact" className="block hover:text-brand-green transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default App

