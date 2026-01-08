'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    if (pathname !== '/') {
      window.location.href = `/#${id}`
      return
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const isHomePage = pathname === '/'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-gmera-blue transition-all duration-300 ${isScrolled ? 'shadow-lg backdrop-blur-sm bg-opacity-95' : ''}`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-white text-xl font-bold hover:scale-105 transition-transform duration-300">
          GMEra Innovations
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          {isHomePage ? (
            <>
              <button
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-blue-200 transition-colors relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-blue-200 transition-colors relative group"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-white hover:text-blue-200 transition-colors relative group"
              >
                Portfolio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('certifications')}
                className="text-white hover:text-blue-200 transition-colors relative group"
              >
                Certifications
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-blue-200 transition-colors relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 group-hover:w-full transition-all duration-300"></span>
              </button>
            </>
          ) : (
            <>
              <Link href="/#about" className="text-white hover:text-blue-200 transition-colors relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/#services" className="text-white hover:text-blue-200 transition-colors relative group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/#portfolio" className="text-white hover:text-blue-200 transition-colors relative group">
                Portfolio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/#certifications" className="text-white hover:text-blue-200 transition-colors relative group">
                Certifications
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/#contact" className="text-white hover:text-blue-200 transition-colors relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </>
          )}
          <Link
            href="/blog"
            className={`text-white hover:text-blue-200 transition-colors relative group ${pathname === '/blog' ? 'text-blue-200' : ''}`}
          >
            Blog
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  )
}

export default Header

