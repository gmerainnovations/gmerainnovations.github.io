import Header from '@/components/Header'
import BlogList from '@/components/BlogList'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <BlogList />
      <Contact />
      <Footer />
    </main>
  )
}
