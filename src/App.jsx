import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Plans from './components/Plans'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // Global scroll-reveal using IntersectionObserver
  useEffect(() => {
    const revealEls = document.querySelectorAll('.section-reveal, .slide-left, .slide-right')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    revealEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Plans />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
