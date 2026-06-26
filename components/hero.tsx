'use client'

const stats = [
  { label: 'Established', value: '2018', coord: 'T:001' },
  { label: 'Active Projects', value: '12+', coord: 'T:002' },
  { label: 'Team Members', value: '40+', coord: 'T:003' },
  { label: 'Publications', value: '8', coord: 'T:004' },
]

const ticker = [
  'Orbital Dynamics',
  'Atmospheric Modeling',
  'Gravitational Lensing',
  'GPU Acceleration',
  'ML Predictors',
  'Exoplanet Research',
  'N-Body Simulation',
  'Fluid Dynamics',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden blueprint-grid scanlines">

      {/* Top coordinate bar */}
      <div className="border-b border-border px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        <span className="coord-label">SYS:SEDS-CELESTIA // SIMULATIONS DIVISION</span>
        <span className="coord-label">LAT:28.6139°N // LON:77.2090°E</span>
      </div>

      {/* Main hero content */}
      <div className="flex-1 flex flex-col justify-between px-4 sm:px-6 lg:px-8 pt-16 pb-0 max-w-7xl mx-auto w-full">

        {/* Overline */}
        <div className="animate-enter-left" style={{ animationDelay: '0.05s' }}>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-[1px] bg-accent" />
            <span className="section-index">Student Engineering Division // Simulations</span>
          </div>
        </div>

        {/* Giant headline */}
        <div className="flex-1 flex flex-col justify-center">
          <h1
            className="font-display font-bold leading-[0.88] tracking-tight text-foreground animate-enter-up"
            style={{
              fontSize: 'clamp(4rem, 12vw, 10rem)',
              animationDelay: '0.1s',
            }}
          >
            <span className="block">SEDS</span>
            <span className="block text-accent">CELESTIA</span>
            <span className="block text-[var(--text-3)]">SIMS.</span>
          </h1>

          <p
            className="font-mono text-[var(--text-2)] text-sm leading-relaxed max-w-xl mt-10 border-l-2 border-accent pl-5 animate-enter-up"
            style={{ animationDelay: '0.2s' }}
          >
            Pioneering computational astrophysics research through advanced
            simulation frameworks, distributed computing, and machine learning —
            built by engineers, for space exploration.
          </p>
        </div>

        {/* Ticker strip */}
        <div
          className="my-12 border-y border-border py-3 overflow-hidden animate-enter-up"
          style={{ animationDelay: '0.25s' }}
        >
          <div className="marquee-track">
            {[...ticker, ...ticker].map((item, i) => (
              <span key={i} className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-3)] flex items-center gap-6">
                {item}
                <span className="text-accent mx-6">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats row — full width, brutal index */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 animate-enter-up" style={{ animationDelay: '0.3s' }}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="px-6 py-8 border-r border-border last:border-r-0 data-row"
              style={{ borderRadius: 0 }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="coord-label">{stat.coord}</span>
                <span className="coord-label">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <p className="font-display font-bold text-3xl sm:text-4xl text-accent leading-none mb-2">
                {stat.value}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-2)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
