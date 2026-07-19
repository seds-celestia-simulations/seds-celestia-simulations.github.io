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

      <section className="border-b border-border blueprint-grid py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent hover:text-[var(--accent-bright)] transition-colors font-mono text-xs uppercase tracking-wider mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="section-index">03 // Field Notes &amp; Research</span>
              <h1
                className="font-display font-bold text-foreground leading-none tracking-tight mt-4"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
              >
                BLOG
              </h1>
              <p className="font-mono text-sm text-[var(--text-2)] mt-6 max-w-2xl leading-relaxed">
                Deep dives into celestial research, technical methods, and space exploration.
              </p>
            </div>
            <div className="hidden sm:flex flex-col items-end gap-1 pb-1">
              <span className="coord-label">TOTAL: {String(articles.length).padStart(3, '0')}</span>
              <span className="coord-label">LATEST: {articles[0]?.date || '—'}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="blueprint-grid py-4 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="divide-y divide-border border-y border-border">
            {articles.map((article, idx) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group grid grid-cols-[3rem_1fr] sm:grid-cols-[3rem_1fr_auto] items-start gap-4 py-8 hover:bg-[rgba(61,184,245,0.04)] transition-colors duration-75"
              >
                <span className="font-mono text-[10px] text-[var(--text-3)] mt-1 group-hover:text-accent">
                  {String(idx + 1).padStart(3, '0')}
                </span>
                <div className="pr-4">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs uppercase tracking-widest font-mono font-semibold text-accent">
                      {article.category}
                    </span>
                    <span className="text-xs text-[var(--text-3)] font-mono">{article.date}</span>
                  </div>
                  <h2 className="font-display font-semibold text-xl sm:text-2xl text-foreground group-hover:text-accent transition-colors leading-tight mb-2">
                    {article.title}
                  </h2>
                  <p className="font-mono text-xs sm:text-sm text-[var(--text-2)] leading-relaxed max-w-3xl">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[var(--text-3)] font-mono pt-3">
                    <Calendar className="w-3 h-3" />
                    {article.readTime}
                  </div>
                </div>
                <ArrowRight className="hidden sm:block w-5 h-5 text-accent mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
