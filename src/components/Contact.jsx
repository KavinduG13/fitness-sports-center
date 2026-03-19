import { useEffect, useRef, useState } from 'react'

const Contact = () => {
  const sectionRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

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

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Full name is required'
    if (!form.email.trim()) {
      errs.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address'
    }
    if (!form.message.trim()) errs.message = 'Message is required'
    else if (form.message.trim().length < 10) errs.message = 'Message must be at least 10 characters'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
    }, 1500)
  }

  const inputClass = (field) =>
    `w-full bg-white dark:bg-[#1e1e1e] border ${errors[field] ? 'border-red-500' : 'border-gray-300 dark:border-dark-border focus:border-primary'
    } text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 px-4 py-3.5 rounded text-sm outline-none transition-colors duration-200`

  return (
    <section id="contact" ref={sectionRef} className="bg-gray-50 dark:bg-[#141414] py-20 md:py-28 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 section-reveal">
          <div className="gold-accent-bar centered mb-4" />
          <h2 className="font-heading text-gray-900 dark:text-white text-5xl md:text-6xl mb-4">GET IN TOUCH</h2>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
            Ready to start your fitness journey? Contact us today
          </p>
        </div>

        {/* Form */}
        <div className="max-w-lg mx-auto section-reveal">
          {submitted ? (
            <div className="text-center py-16 px-8 bg-white dark:bg-[#1e1e1e] border border-green-500/40 rounded shadow-sm dark:shadow-none">
              <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-500 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-heading text-gray-900 dark:text-white text-3xl mb-3">MESSAGE SENT!</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Thank you for reaching out. Our team will get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="border border-primary/60 rounded-md hover:border-primary text-primary text-sm font-semibold px-8 py-3 tracking-widest uppercase transition-all hover:scale-105"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Full Name */}
              <div>
                <label className="block text-gray-800 dark:text-white text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="contact-name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={inputClass('name')}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-800 dark:text-white text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={inputClass('email')}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-800 dark:text-white text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  id="contact-message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your fitness goals..."
                  rows={6}
                  className={inputClass('message') + ' resize-none'}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                id="contact-submit"
                className="w-full bg-primary hover:bg-primary-dark rounded-md disabled:opacity-70 text-black font-bold text-sm py-4 tracking-widest uppercase transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
