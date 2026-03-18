import { useEffect, useRef } from 'react'

const plans = [
  {
    name: 'BASIC',
    price: '35,000',
    period: 'year',
    popular: false,
    features: [
      'Access to gym floor',
      'Locker room access',
      'Group fitness classes',
      'Free fitness assessment',
      'Mobile app access',
    ],
  },
  {
    name: 'PRO',
    price: '45,000',
    period: 'year',
    popular: true,
    features: [
      'All Basic features',
      '2 personal training sessions/month',
      'Nutrition consultation',
      'Access to premium equipment',
      'Sauna & steam room',
      'Guest passes (2/month)',
    ],
  },
  {
    name: 'ELITE',
    price: '55,000',
    period: 'year',
    popular: false,
    features: [
      'All PRO features',
      'Unlimited personal training',
      'Priority class booking',
      '24/7 gym access',
      'Unlimited guest passes',
      'Exclusive member events',
    ],
  },
]

const CheckIcon = () => (
  <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
)

const Plans = () => {
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
    <section id="plans" ref={sectionRef} className="bg-[#0a0a0a] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 section-reveal">
          <div className="gold-accent-bar centered mb-4" />
          <h2 className="font-heading text-white text-5xl md:text-6xl mb-4">MEMBERSHIP PLANS</h2>
          <p className="text-gray-400 text-base md:text-lg">
            Choose the perfect plan to start your transformation journey
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`section-reveal relative rounded flex flex-col transition-all duration-300 hover:scale-[1.02] ${
                plan.popular
                  ? 'border-2 border-primary bg-[#1a1500] shadow-xl shadow-primary/20'
                  : 'border border-dark-border bg-[#141414] hover:border-primary/40'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-black text-xs font-bold px-4 py-1.5 tracking-widest uppercase">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                {/* Plan Name */}
                <h3 className={`font-heading text-2xl mb-4 tracking-wider ${plan.popular ? 'text-primary' : 'text-white'}`}>
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-primary font-heading text-4xl">RS. {plan.price}</span>
                  <span className="text-gray-500 text-sm ml-1">/ {plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-10 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 font-bold text-sm tracking-widest uppercase transition-all duration-200 hover:scale-105 ${
                    plan.popular
                      ? 'bg-primary hover:bg-primary-dark text-black'
                      : 'border border-primary/60 hover:border-primary text-white hover:text-primary'
                  }`}
                  onClick={() => {
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Plans
