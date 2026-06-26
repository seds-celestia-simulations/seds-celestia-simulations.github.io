import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { getAllArticles } from '@/lib/content-utils'

export default function ArticlesPage() {
  const articles = getAllArticles()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="border-b border-border py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors font-mono text-xs uppercase tracking-wider mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-accent font-mono mb-4">
                Insights
              </p>
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground font-display leading-tight">
                All <span className="text-accent">Articles</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-text-2 max-w-2xl font-mono">
              Deep dives into celestial research, technical innovations, and space exploration discoveries
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group block border border-border rounded-lg bg-card p-8 hover:border-accent hover:bg-bg-3 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                  <div className="flex-1 space-y-3">
                    {/* Category */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs uppercase tracking-widest font-mono font-semibold text-accent">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted font-mono">
                        {article.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors font-display">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-base text-text-2 leading-relaxed">
                      {article.excerpt}
                    </p>

                    {/* Read Time */}
                    <div className="flex items-center gap-2 text-xs text-muted font-mono pt-2">
                      <Calendar className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0">
                    <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
