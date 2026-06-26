import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

interface ProjectDetailsProps {
  params: Promise<{
    slug: string
  }>
}

const projects: Record<string, any> = {
  'orbital-dynamics': {
    title: 'Orbital Dynamics Framework',
    category: 'Physics',
    color: '#c8612a',
    date: 'Ongoing',
    status: 'Active',
    description: 'Advanced N-body simulation engine for precise orbital mechanics calculations',
    content: `
      Our Orbital Dynamics Framework represents a breakthrough in computational astrophysics. This sophisticated system enables researchers to simulate the complex interactions of multiple celestial bodies with unprecedented accuracy.

      ## Key Features

      - **N-Body Simulation**: Advanced algorithms capable of modeling systems with thousands of gravitational interactions
      - **Real-Time Calculations**: GPU-accelerated computations for rapid simulation results
      - **High Precision**: Double-precision floating-point arithmetic ensuring accuracy to orbital mechanics standards
      - **Validation Tools**: Built-in verification systems comparing results against known orbital parameters

      ## Applications

      This framework has been instrumental in analyzing satellite constellations, predicting lunar impacts, and modeling exoplanet systems. Our collaborative partners at leading space agencies utilize this technology for mission planning and risk assessment.

      ## Technical Specifications

      - Supports up to 100,000 bodies per simulation
      - Time-step adaptive integration methods
      - Relativistic corrections for high-precision applications
      - Multi-GPU distributed computing support
    `,
    team: ['Dr. Sarah Chen', 'Prof. James Morrison'],
    publications: ['Orbital Mechanics Quarterly, 2024', 'Space Science Review, 2024'],
  },
  'atmospheric-modeling': {
    title: 'Atmospheric Modeling Suite',
    category: 'Fluid Dynamics',
    color: '#2a7bb8',
    date: 'Ongoing',
    status: 'Active',
    description: 'Real-time atmospheric simulation for exoplanet research and analysis',
    content: `
      The Atmospheric Modeling Suite provides comprehensive tools for simulating planetary atmospheres under various conditions. This project combines fluid dynamics, thermodynamics, and radiative transfer modeling into a unified framework.

      ## Core Capabilities

      - **3D Atmospheric Dynamics**: Full Navier-Stokes solver for atmospheric flow
      - **Chemical Reactions**: Integrated models for atmospheric chemistry
      - **Radiative Transfer**: Accurate modeling of solar and thermal radiation effects
      - **Climate Prediction**: Long-term atmospheric evolution simulations

      ## Research Impact

      Used in evaluating the habitability of exoplanets discovered by space telescopes, this suite has contributed to the identification of candidate planets for future exploration missions.

      ## Performance Metrics

      - Simulates planetary atmospheres at 1km resolution
      - Real-time visualization of weather patterns and dynamics
      - Supports historical atmospheric data validation
    `,
    team: ['Dr. Elena Kowalski', 'Marcus Rodriguez'],
    publications: ['Exoplanet Science Review, 2024', 'Climate Dynamics Quarterly, 2023'],
  },
  'ml-predictor': {
    title: 'Machine Learning Predictor',
    category: 'ML',
    color: '#7c5cbf',
    date: 'Ongoing',
    status: 'Active',
    description: 'Neural networks for celestial event prediction and anomaly detection',
    content: `
      Our Machine Learning Predictor leverages deep learning architectures to identify patterns in astronomical data and predict celestial phenomena with high accuracy.

      ## Capabilities

      - **Event Prediction**: Forecasting solar flares, stellar outbursts, and gravitational wave signals
      - **Anomaly Detection**: Identifying unusual objects and phenomena in large datasets
      - **Pattern Recognition**: Discovering new classes of celestial objects
      - **Data Classification**: Automated categorization of astronomical sources

      ## Deep Learning Models

      - Convolutional Neural Networks for image analysis
      - Recurrent Networks for time-series prediction
      - Attention mechanisms for complex pattern detection
      - Ensemble methods for improved accuracy

      ## Achievements

      Successfully predicted 94% of stellar activity events with a 2-week advance notice, enabling better preparation for space-based observations and ground-based follow-up studies.
    `,
    team: ['Dr. Aisha Patel', 'Alex Thompson'],
    publications: ['Machine Learning in Astronomy, 2024', 'AI Review Quarterly, 2024'],
  },
  'gpu-acceleration': {
    title: 'GPU Acceleration Hub',
    category: 'Computing',
    color: '#2aa89b',
    date: 'Ongoing',
    status: 'Active',
    description: 'Distributed computing platform for large-scale simulations',
    content: `
      The GPU Acceleration Hub coordinates a network of high-performance computing resources to tackle the most demanding astrophysical simulations.

      ## Infrastructure

      - **GPU Clusters**: Over 500 high-end GPUs for parallel processing
      - **Network Architecture**: Low-latency interconnects for efficient data transfer
      - **Storage Systems**: Petabyte-scale data storage for simulation results
      - **Job Scheduling**: Intelligent workload distribution and management

      ## Performance Gains

      Simulations that previously required weeks can now be completed in hours, dramatically accelerating research cycles and enabling new scientific discoveries.

      ## Accessibility

      Open-access platform allowing researchers worldwide to submit simulation jobs and access computational resources through a user-friendly web interface.
    `,
    team: ['Marcus Rodriguez', 'Prof. James Morrison'],
    publications: ['High-Performance Computing Quarterly, 2024'],
  },
  'lensing-analyzer': {
    title: 'Gravitational Lensing Analyzer',
    category: 'Physics',
    color: '#c8612a',
    date: 'Ongoing',
    status: 'Active',
    description: 'Computational tools for dark matter detection through gravitational effects',
    content: `
      Gravitational lensing is one of the most powerful tools for detecting and mapping dark matter. Our Analyzer provides sophisticated computational methods for analyzing lensing phenomena.

      ## Analysis Tools

      - **Lens Modeling**: Reconstructing mass distributions from observed lensing effects
      - **Strong Lensing**: Analyzing multiple image systems and Einstein rings
      - **Weak Lensing**: Statistical analysis of subtle light bending effects
      - **Time-Delay Cosmography**: Using variable sources for distance measurements

      ## Dark Matter Insights

      This tool has enabled us to map dark matter distributions in galaxy clusters and infer properties of the dark matter components in the universe.

      ## Applications

      Supporting multiple major astronomical surveys, including ground-based and space-based telescope programs focused on understanding dark matter and cosmic expansion.
    `,
    team: ['Dr. Sarah Chen', 'Prof. James Morrison'],
    publications: ['Dark Matter Research, 2024', 'Cosmology Today, 2024'],
  },
  'economic-simulator': {
    title: 'Economic Impact Simulator',
    category: 'Economics',
    color: '#b89a2a',
    date: 'Ongoing',
    status: 'Active',
    description: 'Models space industry economics and resource allocation optimization',
    content: `
      Understanding the economic implications of space exploration requires sophisticated modeling. Our Economic Impact Simulator provides comprehensive tools for this analysis.

      ## Modeling Capabilities

      - **Industry Dynamics**: Simulating competitive space industry evolution
      - **Resource Allocation**: Optimizing research funding across multiple initiatives
      - **Cost-Benefit Analysis**: Evaluating economic returns from space projects
      - **Market Projections**: Forecasting growth in space-related industries

      ## Policy Applications

      Government agencies and private companies use this tool to make informed decisions about space exploration investments and strategic planning.

      ## Scenario Analysis

      Built-in scenarios explore various futures: increased space tourism, resource extraction industries, and scientific mission prioritization.
    `,
    team: ['Dr. Sarah Chen'],
    publications: ['Space Economics Review, 2024'],
  },
}

export default async function ProjectPage(props: ProjectDetailsProps) {
  const params = await props.params
  const project = projects[params.slug]

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <p className="text-text-2 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" className="text-accent hover:text-accent-light transition-colors inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="border-b border-border py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors font-mono text-xs uppercase tracking-wider mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div className="space-y-6">
            <div className="space-y-2">
              <span
                className="inline-block text-xs uppercase tracking-widest font-mono font-semibold px-3 py-1 rounded border"
                style={{ color: project.color, borderColor: project.color }}
              >
                {project.category}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-foreground font-display leading-tight">
              {project.title}
            </h1>

            <p className="text-lg text-text-2 font-mono max-w-2xl">
              {project.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted font-mono mb-2">Status</p>
                <p className="text-lg font-mono text-accent font-semibold">{project.status}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted font-mono mb-2">Timeline</p>
                <p className="text-lg font-mono text-foreground font-semibold">{project.date}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none space-y-8">
            {project.content.split('\n\n').map((paragraph: string, i: number) => (
              <div key={i}>
                {paragraph.startsWith('##') ? (
                  <h2 className="text-2xl font-bold text-foreground font-display mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                ) : paragraph.startsWith('-') ? (
                  <ul className="space-y-2 text-text-2">
                    {paragraph.split('\n').filter(l => l.startsWith('-')).map((item, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>{item.replace('- ', '')}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-text-2 leading-relaxed text-base">{paragraph}</p>
                )}
              </div>
            ))}
          </div>

          {/* Team and Publications */}
          <div className="grid md:grid-cols-2 gap-12 mt-16 pt-12 border-t border-border">
            <div>
              <h3 className="text-lg font-bold text-foreground font-display mb-4">Core Team</h3>
              <ul className="space-y-2">
                {project.team.map((member: string, i: number) => (
                  <li key={i} className="text-text-2 text-sm">{member}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground font-display mb-4">Publications</h3>
              <ul className="space-y-2">
                {project.publications.map((pub: string, i: number) => (
                  <li key={i} className="text-text-2 text-sm">{pub}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
