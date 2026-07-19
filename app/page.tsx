import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Footer />
    </div>
  )
}
