'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Articles', href: '#articles' },
  { label: 'Members', href: '#members' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border" style={{ borderBottomWidth: '1px' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div
              className="w-7 h-7 flex items-center justify-center border border-accent"
              style={{ borderWidth: '1px' }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="6" height="6" fill="var(--accent)" />
                <rect x="8" y="0" width="6" height="6" fill="var(--accent)" opacity="0.4" />
                <rect x="0" y="8" width="6" height="6" fill="var(--accent)" opacity="0.4" />
                <rect x="8" y="8" width="6" height="6" fill="var(--accent)" opacity="0.15" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.15em] text-foreground group-hover:text-accent transition-colors duration-75">
                SEDS Celestia
              </span>
              <span className="text-[9px] font-mono text-[var(--text-3)] tracking-widest uppercase">
                Simulations
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative flex items-center gap-2 px-6 h-14 text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--text-2)] hover:text-accent hover:bg-[rgba(61,184,245,0.04)] transition-colors duration-75 border-l border-border"
              >
                <span className="text-[var(--text-3)] mr-1">0{i + 1}</span>
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:contact@seds-celestia.org"
              className="ml-4 px-5 h-8 flex items-center text-[10px] font-mono uppercase tracking-[0.18em] bg-accent text-background hover:bg-[var(--accent-bright)] transition-colors duration-75 font-semibold"
            >
              Join Us
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 font-mono text-[10px] uppercase tracking-widest text-accent border border-border hover:border-accent transition-colors duration-75"
            aria-label="Toggle menu"
          >
            {isOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 px-4 py-4 text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--text-2)] hover:text-accent hover:bg-[rgba(61,184,245,0.04)] border-b border-border transition-colors duration-75"
            >
              <span className="text-[var(--text-3)]">0{i + 1}</span>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
