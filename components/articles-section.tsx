'use client'

import Link from 'next/link'

const articles = [
  {
    id: 1,
    index: '001',
    title: 'Advances in Real-Time Orbital Predictions',
    excerpt: 'Breakthrough algorithms enabling unprecedented accuracy in satellite trajectory calculations and orbital decay modeling.',
    date: '2024.03.15',
    readTime: '8 MIN',
    category: 'Research',
    slug: 'orbital-predictions',
  },
  {
    id: 2,
    index: '002',
    title: 'GPU Computing: Accelerating Astrophysical Simulations',
    excerpt: 'Distributed GPU clusters revolutionizing our capability to model complex celestial phenomena at previously impossible scale.',
    date: '2024.03.08',
    readTime: '12 MIN',
    category: 'Technology',
    slug: 'gpu-computing',
  },
  {
    id: 3,
    index: '003',
    title: 'The Role of Machine Learning in Space Science',
    excerpt: 'Deep learning models transforming how we analyze astronomical data and detect previously hidden patterns in observational data.',
    date: '2024.02.28',
    readTime: '10 MIN',
    category: 'Innovation',
    slug: 'ml-space-science',
  },
  {
    id: 4,
    index: '004',
    title: 'Exoplanet Habitability Assessment Framework',
    excerpt: 'Comprehensive methodology for evaluating potentially habitable worlds using integrated multi-domain simulation data.',
    date: '2024.02.20',
    readTime: '15 MIN',
    category: 'Research',
    slug: 'exoplanet-habitability',
  },
  {
    id: 5,
    index: '005',
    title: 'Collaborative Open-Source Astronomy Tools',
    excerpt: 'Building a community-driven ecosystem for accessible celestial simulation, peer review, and open data sharing.',
    date: '2024.02.10',
    readTime: '9 MIN',
    category: 'Community',
    slug: 'open-source-tools',
  },
  {
    id: 6,
    index: '006',
    title: 'Climate Dynamics: Simulating Planetary Atmospheres',
    excerpt: 'Computational approaches to modeling weather systems on distant worlds and their long-term atmospheric evolution.',
    date: '2024.01.30',
    readTime: '11 MIN',
    category: 'Research',
    slug: 'climate-dynamics',
  },
]

export default function ArticlesSection() {
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
            <span className="coord-label">LATEST: 2024.03.15</span>
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
            key={article.id}
            href={`/articles/${article.slug}`}
            className="group grid grid-cols-[3rem_1fr_auto] sm:grid-cols-[3rem_1fr_8rem_6rem_5rem] items-start py-6 border-b border-border hover:bg-[rgba(61,184,245,0.04)] hover:border-accent transition-colors duration-75 animate-enter-up"
            style={{ animationDelay: `${0.05 * idx}s` }}
          >
            {/* Index */}
            <span className="font-mono text-[10px] text-[var(--text-3)] mt-1 group-hover:text-accent transition-colors duration-75">
              {article.index}
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
