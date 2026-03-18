import { useEffect, useRef } from 'react'

const services = [
  {
    id: 1,
    title: 'PERSONAL TRAINING',
    description: 'One-on-one sessions with certified trainers tailored to your specific goals and needs.',
    image: '/service_personal_training.jpg',
  },
  {
    id: 2,
    title: 'CARDIO ZONE',
    description: 'Premium cardio equipment including treadmills, ellipticals, and rowing machines.',
    image: '/service_cardio.jpg',
  },
  {
    id: 3,
    title: 'STRENGTH TRAINING',
    description: 'State-of-the-art free weights and resistance machines for maximum muscle development.',
    image: '/service_strength.jpg',
  },
  {
    id: 4,
    title: 'NUTRITION COACHING',
    description: 'Expert nutritional guidance and meal planning to fuel your fitness journey.',
    image: '/service_nutrition.jpg',
  },
]

const Services = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const els = sectionRef.current?.querySelectorAll('.section-reveal')
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
    <section id="services" ref={sectionRef} className="bg-[#141414] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 section-reveal">
          <div className="gold-accent-bar centered mb-4" />
          <h2 className="font-heading text-white text-5xl md:text-6xl mb-4">OUR SERVICES</h2>
          <p className="text-gray-400 text-base md:text-lg">
            Everything you need to achieve your fitness goals under one roof
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="section-reveal group relative rounded overflow-hidden cursor-pointer border border-dark-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-heading text-primary text-xl mb-2 tracking-wider">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
