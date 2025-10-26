export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © 2025 <span className="text-brand-green font-semibold">G-Aura Web Studio</span>. All Rights Reserved.
            </p>
          </div>
          
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#about" className="hover:text-brand-green transition-colors">About</a>
            <a href="#services" className="hover:text-brand-green transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-brand-green transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-brand-green transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

