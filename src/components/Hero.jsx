const Hero = () => {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="min-h-screen bg-white dark:bg-[#0a0a0a] flex items-center pt-20 md:pt-24 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-12 md:py-20">
          {/* Left: Text Content */}
          <div className="slide-left visible-on-load">
            {/* Gold accent bar */}
            <div className="gold-accent-bar mb-6" />

            <h1 className="font-heading text-gray-900 dark:text-white text-6xl sm:text-7xl md:text-8xl leading-none mb-6">
              FORGE YOUR
              <br />
              <span className="text-gray-900 dark:text-white">STRENGTH</span>
            </h1>

            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-md">
              Transform your body and mind at Fitness Sports Center. Join our elite community
              and unleash your full potential with state-of-the-art equipment and world-class
              training.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('#contact')}
                className="bg-primary hover:bg-primary-dark text-black rounded-md font-bold text-sm px-8 py-3.5 tracking-widest uppercase transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              >
                Get Started
              </button>
              <button
                onClick={() => scrollTo('#about')}
                className="border border-primary/60 hover:border-primary rounded-md text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary text-sm font-semibold px-8 py-3.5 tracking-widest uppercase transition-all duration-200 hover:scale-105"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="slide-right visible-on-load flex justify-center md:justify-end">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-primary/10 rounded blur-3xl scale-110" />
              <img
                src="/hero.jpg"
                alt="Elite fitness training at Fitness Sports Center"
                className="relative z-10 w-full max-w-sm md:max-w-md lg:max-w-lg rounded object-cover border border-gray-200 dark:border-dark-border shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
