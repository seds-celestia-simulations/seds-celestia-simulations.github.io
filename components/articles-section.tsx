import Link from 'next/link'
import { getAllArticles } from '@/lib/content-utils'

export default function ArticlesSection() {
  const articles = getAllArticles()

  const padIndex = (i: number) => String(i + 1).padStart(3, '0')

  return (
    <section id="articles" className="border-b border-border blueprint-grid">

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between border-b border-border py-10 animate-enter-up">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="section-index">03 // Field Notes &amp; Research</span>
            </div>
            <h2
              className="font-display font-bold text-foreground leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              ARTICLES
            </h2>
          </div>
          <div className="hidden sm:flex flex-col items-end gap-1 pb-1">
            <span className="coord-label">TOTAL: {String(articles.length).padStart(3, '0')}</span>
            <span className="coord-label">LATEST: {articles[0]?.date || '—'}</span>
          </div>
        </div>
      </div>

      {/* Column labels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[3rem_1fr_auto] sm:grid-cols-[3rem_1fr_8rem_6rem_5rem] border-b border-border py-2">
          <span className="coord-label">IDX</span>
          <span className="coord-label">TITLE / EXCERPT</span>
          <span className="coord-label hidden sm:block">CATEGORY</span>
          <span className="coord-label hidden sm:block">DATE</span>
          <span className="coord-label hidden sm:block">READ</span>
        </div>
      </div>

      {/* Article rows */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {articles.map((article, idx) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="group grid grid-cols-[3rem_1fr_auto] sm:grid-cols-[3rem_1fr_8rem_6rem_5rem] items-start py-6 border-b border-border hover:bg-[rgba(61,184,245,0.04)] hover:border-accent transition-colors duration-75 animate-enter-up"
            style={{ animationDelay: `${0.05 * idx}s` }}
          >
            {/* Index */}
            <span className="font-mono text-[10px] text-[var(--text-3)] mt-1 group-hover:text-accent transition-colors duration-75">
              {padIndex(idx)}
            </span>

            {/* Title + excerpt */}
            <div className="pr-6">
              <h3 className="font-display font-semibold text-base sm:text-lg text-foreground group-hover:text-accent transition-colors duration-75 leading-tight mb-2">
                {article.title}
              </h3>
              <p className="font-mono text-xs text-[var(--text-2)] leading-relaxed line-clamp-2">
                {article.excerpt}
              </p>
            </div>

            {/* Category */}
            <span className="hidden sm:block font-mono text-[10px] uppercase tracking-widest text-[var(--text-3)] mt-1 group-hover:text-accent transition-colors duration-75">
              {article.category}
            </span>

            {/* Date */}
            <span className="hidden sm:block font-mono text-[10px] text-[var(--text-3)] mt-1 tabular-nums">
              {article.date}
            </span>

            {/* Read time */}
            <span className="hidden sm:block font-mono text-[10px] text-[var(--text-3)] mt-1">
              {article.readTime}
            </span>
          </Link>
        ))}
      </div>

      {/* View all */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-enter-up" style={{ animationDelay: '0.3s' }}>
        <Link
          href="/articles"
          className="inline-flex items-center gap-4 font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-2)] hover:text-accent border border-border hover:border-accent px-6 py-3 transition-colors duration-75"
        >
          <span>All Articles</span>
          <span className="text-accent">→</span>
        </Link>
      </div>
    </section>
  )
}
