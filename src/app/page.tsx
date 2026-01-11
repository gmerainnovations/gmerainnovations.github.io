import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Certifications from '@/components/Certifications'
import Testimonials from '@/components/Testimonials'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Certifications />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
