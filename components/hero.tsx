'use client'

import LorenzAttractor from '@/components/lorenz-attractor'

const ticker = [
  'Penrose',
  'General Relativity',
  'Null Geodesics',
  'Schwarzschild Ray Tracing',
  'GPU Raymarching',
  'RK4 Integration',
  'Spacetime Visualization',
  'Scientific Validation',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden border-b border-border">
      <div className="absolute inset-0 z-0">
        <LorenzAttractor />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-between px-4 sm:px-6 lg:px-8 pt-16 pb-0 max-w-7xl mx-auto w-full">
        <div className="animate-enter-left" style={{ animationDelay: '0.05s' }}>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-[1px] bg-accent" />
            <span className="section-index">Student Engineering Division // Simulations</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h1 className="animate-enter-up" style={{ animationDelay: '0.1s' }}>
            <span
              className="block font-display font-semibold tracking-[-0.02em]"
              style={{ fontSize: 'clamp(1.35rem, 3.2vw, 2.35rem)' }}
            >
              <span className="text-[var(--text-3)]">SEDS</span>{' '}
              <span className="text-accent">CELESTIA</span>
            </span>
            <span
              className="block font-display font-bold leading-[0.88] tracking-tight text-foreground mt-2"
              style={{ fontSize: 'clamp(3.2rem, 12vw, 11rem)' }}
            >
              SIMULATIONS
            </span>
          </h1>

          <p
            className="font-mono text-[var(--text-2)] text-sm leading-relaxed max-w-xl mt-10 border-l-2 border-accent pl-5 animate-enter-up"
            style={{ animationDelay: '0.2s' }}
          >
            Student-built computational astrophysics — simulation frameworks,
            relativistic visualization, and scientific validation.
          </p>
        </div>
      </div>

      {/* Full-bleed marquee */}
      <div
        className="relative z-10 w-full border-t border-border pt-6 pb-6 overflow-hidden animate-enter-up"
        style={{ animationDelay: '0.3s' }}
      >
        <div className="marquee-track">
          {[...ticker, ...ticker].map((item, i) => (
            <span
              key={i}
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-3)] flex items-center gap-6"
            >
              {item}
              <span className="text-accent mx-6">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
