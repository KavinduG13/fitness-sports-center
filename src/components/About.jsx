import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 500, suffix: '+', label: 'Active Members' },
  { value: 20, suffix: '+', label: 'Pro Trainers' },
  { value: '24/7', suffix: '', label: 'Access Available' },
]

const CountUp = ({ target, suffix, isVisible }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible || typeof target !== 'number') return
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, target])

  if (typeof target !== 'number') return <span>{target}{suffix}</span>
  return <span>{count}{suffix}</span>
}

const About = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          const els = sectionRef.current?.querySelectorAll('.section-reveal, .slide-left, .slide-right')
          els?.forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 150)
          })
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="bg-white dark:bg-[#0a0a0a] py-20 md:py-28 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text */}
          <div className="slide-left">
            <div className="gold-accent-bar mb-4" />
            <h2 className="font-heading text-gray-900 dark:text-white text-5xl md:text-6xl mb-8">ABOUT US</h2>

            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-5">
              Established in{' '}
              <span className="text-primary font-semibold">2023</span>, Fitness Sports Center
              has quickly become the premier destination for serious athletes and fitness
              enthusiasts who demand excellence.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-5">
              Our mission is to provide an unparalleled training environment where ambition
              meets achievement. With cutting-edge equipment, expert trainers, and a community
              of driven individuals, we create the perfect ecosystem for transformation.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-10">
              We believe that true strength comes from dedication, discipline, and the right
              support system. At Fitness Sports Center, you're not just joining a gym—you're
              joining a movement.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-dark-border">
              {stats.map((stat, i) => (
                <div key={i} className="section-reveal text-center md:text-left">
                  <p className="font-heading text-primary text-4xl md:text-5xl">
                    <CountUp target={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="slide-right">
            <div className="relative">
              <div className="absolute -inset-1 bg-primary/20 rounded blur-xl" />
              <img
                src="/gym_interior.jpg"
                alt="Premium gym interior at Fitness Sports Center"
                className="relative z-10 w-full rounded object-cover border border-gray-200 dark:border-dark-border shadow-2xl aspect-[4/3]"
              />
              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-primary z-20" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-primary z-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
