import { useState, useEffect, useRef } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Plans', href: '#plans' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/50' : 'bg-[#0a0a0a]/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('#home')}>
            <img
              src="/logo.png"
              alt="Fitness Sports Center Logo"
              className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border border-primary/40"
            />
            <div className="leading-tight">
              <p className="font-heading text-white text-lg md:text-xl tracking-widest">FITNESS SPORTS CENTER</p>
              <p className="text-primary text-[10px] tracking-[0.3em] font-semibold">EST. 2023</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-300 hover:text-primary text-sm font-medium tracking-wider transition-colors duration-200 uppercase"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="bg-primary hover:bg-primary-dark text-black font-bold text-sm px-6 py-2 tracking-widest uppercase transition-all duration-200 hover:scale-105"
            >
              JOIN NOW
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-dark-border">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-300 hover:text-primary text-sm font-medium tracking-wider text-left uppercase transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="bg-primary hover:bg-primary-dark text-black font-bold text-sm px-6 py-2.5 tracking-widest uppercase w-full mt-2 transition-all"
            >
              JOIN NOW
            </button>
          </div>
        </div>
      </div>

      {/* Gold bottom border */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
    </nav>
  )
}

export default Navbar
