'use client'

import Link from 'next/link'
import { Mail, Send, SquareCode } from 'lucide-react'

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Articles', href: '#articles' },
  { label: 'Members', href: '#members' },
]

const resourceLinks = [
  { label: 'Documentation', href: '#' },
  { label: 'Research Papers', href: '#' },
  { label: 'API Reference', href: '#' },
  { label: 'GitHub Org', href: '#' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border blueprint-grid">

      {/* Top strip */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <span className="coord-label">SYS:FOOTER // EOF</span>
          <span className="coord-label">BUILD:{currentYear} // SEDS-CELESTIA-SIMS</span>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 border-b border-border">

          {/* Brand */}
          <div className="md:col-span-2 py-12 pr-12 border-b md:border-b-0 md:border-r border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-7 h-7 flex items-center justify-center border border-accent">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="0" width="6" height="6" fill="var(--accent)" />
                  <rect x="8" y="0" width="6" height="6" fill="var(--accent)" opacity="0.4" />
                  <rect x="0" y="8" width="6" height="6" fill="var(--accent)" opacity="0.4" />
                  <rect x="8" y="8" width="6" height="6" fill="var(--accent)" opacity="0.15" />
                </svg>
              </div>
              <div>
                <div className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
                  SEDS Celestia
                </div>
                <div className="font-mono text-[9px] text-[var(--text-3)] tracking-widest uppercase">
                  Simulations Division
                </div>
              </div>
            </div>
            <p className="font-mono text-xs text-[var(--text-2)] leading-relaxed max-w-sm mb-8">
              University student engineering club advancing the frontiers of space exploration
              through computational simulations, astrophysics research, and collaborative innovation.
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                aria-label="GitHub"
                className="p-2 border border-border hover:border-accent text-[var(--text-3)] hover:text-accent transition-colors duration-75"
              >
                <SquareCode className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Telegram"
                className="p-2 border border-border hover:border-accent text-[var(--text-3)] hover:text-accent transition-colors duration-75"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@seds-celestia.org"
                aria-label="Email"
                className="p-2 border border-border hover:border-accent text-[var(--text-3)] hover:text-accent transition-colors duration-75"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="py-12 px-6 border-b md:border-b-0 md:border-r border-border">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent mb-6">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mono text-xs text-[var(--text-2)] hover:text-accent transition-colors duration-75 flex items-center gap-2"
                  >
                    <span className="text-[var(--text-3)]">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="py-12 px-6">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent mb-6">
              Resources
            </p>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mono text-xs text-[var(--text-2)] hover:text-accent transition-colors duration-75 flex items-center gap-2"
                  >
                    <span className="text-[var(--text-3)]">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-5">
          <p className="font-mono text-[10px] text-[var(--text-3)]">
            © {currentYear} SEDS Celestia Simulations. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Contact'].map((item) => (
              <Link
                key={item}
                href="#"
                className="font-mono text-[10px] text-[var(--text-3)] hover:text-accent transition-colors duration-75 uppercase tracking-widest"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
