'use client'

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
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden blueprint-grid scanlines border-b border-border">

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
            <span className="block text-[var(--text-3)]">SIMULATIONS</span>
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
          className="my-12 border-t border-border pt-6 pb-2 overflow-hidden animate-enter-up"
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

    </section>
  )
}
