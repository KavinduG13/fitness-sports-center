import { useState, useEffect, useRef } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/10 dark:shadow-black/50' : 'bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-sm'
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
              <p className="font-heading text-gray-900 dark:text-white text-lg md:text-xl tracking-widest">FITNESS SPORTS CENTER</p>
              <p className="text-primary text-[10px] tracking-[0.3em] font-semibold">EST. 2023</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary text-sm font-medium tracking-wider transition-colors duration-200 uppercase"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="bg-primary hover:bg-primary-dark text-black rounded-md font-bold text-sm px-6 py-2 tracking-widest uppercase transition-all duration-200 hover:scale-105"
            >
              JOIN NOW
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-gray-300 hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-5 h-5 text-gray-600 hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 bg-white dark:bg-[#0a0a0a] ${menuOpen ? 'max-h-96 pb-6' : 'max-h-0'
            }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-gray-200 dark:border-dark-border">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium tracking-wider text-left uppercase transition-colors"
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
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary rounded-md font-bold text-sm px-6 py-2.5 tracking-widest uppercase transition-colors mt-2"
            >
              {theme === 'dark' ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  Light Mode
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                  Dark Mode
                </>
              )}
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
