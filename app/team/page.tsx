import Link from 'next/link'
import { ArrowLeft, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { getAllMembers, MemberMeta } from '@/lib/content-utils'

function MemberCard({ member }: { member: MemberMeta }) {
  const socials = [
    {
      key: 'email',
      href: member.email ? `mailto:${member.email}` : null,
      label: `Email ${member.name}`,
      Icon: Mail,
    },
    {
      key: 'linkedin',
      href: member.linkedin && member.linkedin !== '#' ? member.linkedin : null,
      label: `LinkedIn: ${member.name}`,
      Icon: FaLinkedin,
    },
    {
      key: 'github',
      href: member.github && member.github !== '#' ? member.github : null,
      label: `GitHub: ${member.name}`,
      Icon: FaGithub,
    },
  ]

  return (
    <article className="group relative flex flex-col border-b border-r border-border p-6 sm:p-7 hover:bg-[rgba(61,184,245,0.04)] transition-colors duration-75">
      <div className="flex items-start justify-between mb-6">
        <span className="coord-label group-hover:text-accent transition-colors duration-75">
          {member.index}
        </span>
        <div
          className="w-1.5 h-1.5 bg-[var(--text-3)] group-hover:bg-accent transition-colors duration-75"
          aria-hidden
        />
      </div>

      <div className="mb-6 w-16 h-16 border border-border group-hover:border-accent flex items-center justify-center transition-colors duration-75 bg-[rgba(61,184,245,0.03)]">
        <span className="font-display font-bold text-lg text-[var(--text-2)] group-hover:text-accent transition-colors duration-75">
          {member.initials}
        </span>
      </div>

      <div className="mb-6 flex-1">
        <h2 className="font-display font-semibold text-lg text-foreground group-hover:text-accent transition-colors duration-75 leading-snug mb-2">
          {member.name}
        </h2>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-3)] leading-relaxed">
          {member.role}
        </p>
      </div>

      <div className="flex items-center gap-2 pt-5 border-t border-border">
        {socials.map(({ key, href, label, Icon }) =>
          href ? (
            <a
              key={key}
              href={href}
              aria-label={label}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="p-2 border border-border text-[var(--text-3)] hover:border-accent hover:text-accent transition-colors duration-75"
            >
              <Icon className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span
              key={key}
              className="p-2 border border-border text-[var(--text-3)]/30"
              aria-hidden
            >
              <Icon className="w-3.5 h-3.5" />
            </span>
          ),
        )}
      </div>
    </article>
  )
}

export default function TeamPage() {
  const members = getAllMembers()

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
              <span className="section-index">04 // Team Roster</span>
              <h1
                className="font-display font-bold text-foreground leading-none tracking-tight mt-4"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
              >
                TEAM
              </h1>
              <p className="font-mono text-sm text-[var(--text-2)] mt-6 max-w-2xl leading-relaxed">
                Students building and validating computational astrophysics tools.
              </p>
            </div>
            <div className="hidden sm:flex flex-col items-end gap-1 pb-1">
              <span className="coord-label">
                ROSTER: {String(members.length).padStart(3, '0')}
              </span>
              <span className="coord-label">DIVISION: CORE</span>
            </div>
          </div>
        </div>
      </section>

      <section className="blueprint-grid border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Flush grid — shared borders, no orphan gaps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-l border-t border-border">
            {members.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
