import { Mail, SquareCode, Send } from 'lucide-react'
import { getAllMembers, MemberMeta } from '@/lib/content-utils'

// ponytail: single helper to render member card grid without code duplication
function MemberGrid({ list }: { list: MemberMeta[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {list.map((member, idx) => (
        <div
          key={member.id}
          className="group relative border-b border-r border-border p-6 hover:bg-[rgba(61,184,245,0.04)] transition-colors duration-75 animate-enter-up"
          style={{ animationDelay: `${0.04 * idx}s` }}
        >
          {/* Corner index */}
          <div className="flex items-start justify-between mb-5">
            <span className="coord-label group-hover:text-accent transition-colors duration-75">
              {member.index}
            </span>
            {/* Accent top-right corner marks */}
            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-75">
              <div className="w-2 h-2 border-t border-r border-accent" />
            </div>
          </div>

          {/* Avatar — geometric initials box */}
          <div className="mb-5 w-14 h-14 border border-border group-hover:border-accent flex items-center justify-center transition-colors duration-75">
            <span className="font-display font-bold text-sm text-[var(--text-2)] group-hover:text-accent transition-colors duration-75">
              {member.initials}
            </span>
          </div>

          {/* Name + role */}
          <div className="mb-5">
            <h3 className="font-display font-semibold text-base text-foreground group-hover:text-accent transition-colors duration-75 leading-tight mb-1">
              {member.name}
            </h3>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--text-3)]">
              {member.role}
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2 pt-4 border-t border-border">
            <a
              href={`mailto:${member.email}`}
              aria-label={`Email ${member.name}`}
              className="p-1.5 border border-border hover:border-accent text-[var(--text-3)] hover:text-accent transition-colors duration-75"
            >
              <Mail className="w-3 h-3" />
            </a>
            <a
              href={member.linkedin}
              aria-label={`LinkedIn: ${member.name}`}
              className="p-1.5 border border-border hover:border-accent text-[var(--text-3)] hover:text-accent transition-colors duration-75"
            >
              <Send className="w-3 h-3" />
            </a>
            <a
              href={member.github}
              aria-label={`GitHub: ${member.name}`}
              className="p-1.5 border border-border hover:border-accent text-[var(--text-3)] hover:text-accent transition-colors duration-75"
            >
              <SquareCode className="w-3 h-3" />
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function MembersSection() {
  const members = getAllMembers()

  return (
    <section id="members" className="border-b border-border blueprint-grid">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between border-b border-border py-10 animate-enter-up">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="section-index">04 // Team Roster</span>
            </div>
            <h2
              className="font-display font-bold text-foreground leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              MEMBERS
            </h2>
          </div>
          <div className="hidden sm:flex flex-col items-end gap-1 pb-1">
            <span className="coord-label">ROSTER: {String(members.length).padStart(3, '0')} LISTED</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MemberGrid list={members} />
      </div>
    </section>
  )
}
