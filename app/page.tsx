import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import ProjectsSection from '@/components/projects-section'
import ArticlesSection from '@/components/articles-section'
import MembersSection from '@/components/members-section'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ProjectsSection />
      <ArticlesSection />
      <MembersSection />
      <Footer />
    </div>
  )
}
