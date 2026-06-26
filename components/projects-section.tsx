'use client'

import Link from 'next/link'

const projects = [
  {
    id: 1,
    index: '001',
    title: 'Orbital Dynamics Framework',
    description: 'Advanced N-body simulation engine for precise orbital mechanics calculations with real-time constraint solving.',
    category: 'Physics',
    status: 'ACTIVE',
    year: '2024',
    slug: 'orbital-dynamics',
  },
  {
    id: 2,
    index: '002',
    title: 'Atmospheric Modeling Suite',
    description: 'Real-time atmospheric simulation for exoplanet research using spectral decomposition and radiative transfer.',
    category: 'Fluid Dynamics',
    status: 'ACTIVE',
    year: '2024',
    slug: 'atmospheric-modeling',
  },
  {
    id: 3,
    index: '003',
    title: 'Machine Learning Predictor',
    description: 'Neural networks for celestial event prediction and anomaly detection in large observational datasets.',
    category: 'ML / AI',
    status: 'ACTIVE',
    year: '2023',
    slug: 'ml-predictor',
  },
  {
    id: 4,
    index: '004',
    title: 'GPU Acceleration Hub',
    description: 'Distributed computing platform enabling large-scale parallel simulations across heterogeneous hardware.',
    category: 'Computing',
    status: 'ACTIVE',
    year: '2023',
    slug: 'gpu-acceleration',
  },
  {
    id: 5,
    index: '005',
    title: 'Gravitational Lensing Analyzer',
    description: 'Computational tools for dark matter detection and mapping through precise gravitational lensing effects.',
    category: 'Physics',
    status: 'IN REVIEW',
    year: '2024',
    slug: 'lensing-analyzer',
  },
  {
    id: 6,
    index: '006',
    title: 'Economic Impact Simulator',
    description: 'Models space industry economics, resource allocation optimization, and mission cost projection frameworks.',
    category: 'Economics',
    status: 'ACTIVE',
    year: '2022',
    slug: 'economic-simulator',
  },
]

export default function ProjectsSection() {
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
            <span className="coord-label">STATUS: {projects.filter(p => p.status === 'ACTIVE').length} ACTIVE</span>
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
            key={project.id}
            href={`/projects/${project.slug}`}
            className="group grid grid-cols-[3rem_1fr_auto] sm:grid-cols-[3rem_1fr_10rem_6rem_6rem] items-start py-6 border-b border-border hover:bg-[rgba(61,184,245,0.04)] hover:border-accent transition-colors duration-75 animate-enter-up"
            style={{ animationDelay: `${0.05 * idx}s` }}
          >
            {/* Index */}
            <span className="font-mono text-[10px] text-[var(--text-3)] mt-1 group-hover:text-accent transition-colors duration-75">
              {project.index}
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
                  project.status === 'ACTIVE'
                    ? 'border-accent text-accent'
                    : 'border-[var(--text-3)] text-[var(--text-3)]'
                }`}
              >
                {project.status}
              </span>
            </div>
          </Link>
        ))}
      </div>

    </section>
  )
}
