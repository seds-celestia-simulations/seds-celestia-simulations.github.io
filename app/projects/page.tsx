import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { getAllProjects } from '@/lib/content-utils'

export default function ProjectsPage() {
  const projects = getAllProjects()
  const padIndex = (i: number) => String(i + 1).padStart(3, '0')

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
              <span className="section-index">02 // Research Initiatives</span>
              <h1
                className="font-display font-bold text-foreground leading-none tracking-tight mt-4"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
              >
                PROJECTS
              </h1>
              <p className="font-mono text-sm text-[var(--text-2)] mt-6 max-w-2xl leading-relaxed">
                Simulation frameworks, visualization tools, and physics pipelines
                built by the division.
              </p>
            </div>
            <div className="hidden sm:flex flex-col items-end gap-1 pb-1">
              <span className="coord-label">TOTAL: {String(projects.length).padStart(3, '0')}</span>
              <span className="coord-label">
                STATUS: {projects.filter((p) => p.status.toUpperCase() === 'ACTIVE').length} ACTIVE
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="blueprint-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[3rem_1fr_auto] sm:grid-cols-[3rem_1fr_10rem_6rem_6rem] border-b border-border py-2">
            <span className="coord-label">IDX</span>
            <span className="coord-label">TITLE / DESCRIPTION</span>
            <span className="coord-label hidden sm:block">DOMAIN</span>
            <span className="coord-label hidden sm:block">YEAR</span>
            <span className="coord-label hidden sm:block">STATUS</span>
          </div>

          {projects.map((project, idx) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group grid grid-cols-[3rem_1fr_auto] sm:grid-cols-[3rem_1fr_10rem_6rem_6rem] items-start py-6 border-b border-border hover:bg-[rgba(61,184,245,0.04)] hover:border-accent transition-colors duration-75"
            >
              <span className="font-mono text-[10px] text-[var(--text-3)] mt-1 group-hover:text-accent transition-colors duration-75">
                {padIndex(idx)}
              </span>
              <div className="pr-6">
                <h2 className="font-display font-semibold text-base sm:text-lg text-foreground group-hover:text-accent transition-colors duration-75 leading-tight mb-2">
                  {project.title}
                </h2>
                <p className="font-mono text-xs text-[var(--text-2)] leading-relaxed">
                  {project.description}
                </p>
              </div>
              <span className="hidden sm:block font-mono text-[10px] uppercase tracking-widest text-[var(--text-3)] mt-1 group-hover:text-accent transition-colors duration-75">
                {project.category}
              </span>
              <span className="hidden sm:block font-mono text-[10px] text-[var(--text-3)] mt-1">
                {project.year}
              </span>
              <div className="hidden sm:flex items-start mt-1">
                <span
                  className={`font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 border ${
                    project.status.toUpperCase() === 'ACTIVE'
                      ? 'border-accent text-accent'
                      : 'border-[var(--text-3)] text-[var(--text-3)]'
                  }`}
                >
                  {project.status.toUpperCase()}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
