'use client'

import { useState } from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      quote: 'GMEra Innovations transformed our entire IT infrastructure. Their expertise in cloud migration saved us 40% in operational costs while improving performance dramatically.',
      name: 'Sarah Johnson',
      title: 'CTO, Global Retail Corp',
      company: 'Fortune 500 Company',
    },
    {
      quote: 'Working with GMEra has been exceptional. Their team\'s technical expertise and commitment to our success made all the difference in our digital transformation journey.',
      name: 'Michael Chen',
      title: 'VP of Technology, Finance Corp',
      company: 'Enterprise Client',
    },
    {
      quote: 'The custom software solution GMEra built for us exceeded all expectations. Their attention to detail and innovative approach solved complex business challenges.',
      name: 'Emily Rodriguez',
      title: 'Director of Operations, HealthTech Inc',
      company: 'Healthcare Industry Leader',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            key={currentIndex}
            className="bg-white p-8 md:p-12 rounded-lg shadow-xl relative hover-lift transition-all duration-300"
            style={{
              animation: 'fade-in-up 0.5s ease-out',
            }}
          >
            {/* Decorative quote background */}
            <div className="absolute top-4 left-4 text-8xl text-blue-100 font-bold opacity-50">&quot;</div>
            
            <div className="relative z-10">
              <div className="text-6xl text-blue-600 font-bold mb-4 opacity-30">&quot;</div>
              <p className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
                {testimonials[currentIndex].quote}
              </p>
              <div className="mb-2">
                <p className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-gray-600">{testimonials[currentIndex].title}</p>
                <a href="#" className="text-blue-600 underline hover:text-blue-800 transition-colors inline-flex items-center group">
                  {testimonials[currentIndex].company}
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110 w-10 h-10 rounded-full hover:bg-blue-50 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex 
                      ? 'bg-blue-600 w-8 h-3' 
                      : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110 w-10 h-10 rounded-full hover:bg-blue-50 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

