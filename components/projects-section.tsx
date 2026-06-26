import Link from 'next/link'
import { getAllProjects } from '@/lib/content-utils'

export default function ProjectsSection() {
  const projects = getAllProjects()

  const padIndex = (i: number) => String(i + 1).padStart(3, '0')

  return (
    <section id="projects" className="border-b border-border blueprint-grid">

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between border-b border-border py-10 animate-enter-up">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="section-index">02 // Research Initiatives</span>
            </div>
            <h2 className="font-display font-bold text-foreground leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              PROJECTS
            </h2>
          </div>
          <div className="hidden sm:flex flex-col items-end gap-1 pb-1">
            <span className="coord-label">TOTAL: {String(projects.length).padStart(3, '0')}</span>
            <span className="coord-label">STATUS: {projects.filter(p => p.status.toUpperCase() === 'ACTIVE').length} ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Column labels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[3rem_1fr_auto] sm:grid-cols-[3rem_1fr_10rem_6rem_6rem] border-b border-border py-2">
          <span className="coord-label">IDX</span>
          <span className="coord-label">TITLE / DESCRIPTION</span>
          <span className="coord-label hidden sm:block">DOMAIN</span>
          <span className="coord-label hidden sm:block">YEAR</span>
          <span className="coord-label hidden sm:block">STATUS</span>
        </div>
      </div>

      {/* Project rows */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {projects.map((project, idx) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group grid grid-cols-[3rem_1fr_auto] sm:grid-cols-[3rem_1fr_10rem_6rem_6rem] items-start py-6 border-b border-border hover:bg-[rgba(61,184,245,0.04)] hover:border-accent transition-colors duration-75 animate-enter-up"
            style={{ animationDelay: `${0.05 * idx}s` }}
          >
            {/* Index */}
            <span className="font-mono text-[10px] text-[var(--text-3)] mt-1 group-hover:text-accent transition-colors duration-75">
              {padIndex(idx)}
            </span>

            {/* Title + desc */}
            <div className="pr-6">
              <h3 className="font-display font-semibold text-base sm:text-lg text-foreground group-hover:text-accent transition-colors duration-75 leading-tight mb-2">
                {project.title}
              </h3>
              <p className="font-mono text-xs text-[var(--text-2)] leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Domain */}
            <span className="hidden sm:block font-mono text-[10px] uppercase tracking-widest text-[var(--text-3)] mt-1 group-hover:text-accent transition-colors duration-75">
              {project.category}
            </span>

            {/* Year */}
            <span className="hidden sm:block font-mono text-[10px] text-[var(--text-3)] mt-1">
              {project.year}
            </span>

            {/* Status */}
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
  )
}
