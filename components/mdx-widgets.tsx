type Kpi = {
  label: string
  value: string
  hint?: string
}

export function KpiGrid({ items }: { items: Kpi[] | string }) {
  const parsed: Kpi[] = typeof items === 'string' ? JSON.parse(items) : items

  return (
    <div className="my-10 grid grid-cols-2 lg:grid-cols-4 border border-border">
      {parsed.map((item) => (
        <div
          key={item.label}
          className="border-b border-r border-border p-5 last:border-r-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-3)] mb-3">
            {item.label}
          </p>
          <p className="font-display font-bold text-2xl sm:text-3xl text-accent leading-none mb-2">
            {item.value}
          </p>
          {item.hint ? (
            <p className="font-mono text-[11px] text-[var(--text-2)] leading-snug">{item.hint}</p>
          ) : null}
        </div>
      ))}
    </div>
  )
}

export function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <aside className="my-8 border-l-2 border-accent bg-[rgba(61,184,245,0.04)] px-5 py-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent mb-2">{title}</p>
      <div className="text-sm text-[var(--text-2)] leading-relaxed space-y-2">{children}</div>
    </aside>
  )
}

type RoadmapItem = {
  phase: string
  status: 'done' | 'active' | 'next' | 'later'
  title: string
  items: string[]
}

const statusStyle: Record<RoadmapItem['status'], string> = {
  done: 'text-accent border-accent',
  active: 'text-accent border-accent bg-[rgba(61,184,245,0.08)]',
  next: 'text-[var(--text-2)] border-border',
  later: 'text-[var(--text-3)] border-border',
}

const statusLabel: Record<RoadmapItem['status'], string> = {
  done: 'Done',
  active: 'Active',
  next: 'Next',
  later: 'Later',
}

export function Roadmap({ items }: { items: RoadmapItem[] | string }) {
  const parsed: RoadmapItem[] = typeof items === 'string' ? JSON.parse(items) : items

  return (
    <div className="my-10 border border-border">
      <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
        {parsed.map((col) => (
          <div key={col.phase} className="p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--text-3)]">
                {col.phase}
              </span>
              <span
                className={`font-mono text-[10px] uppercase tracking-[0.12em] border px-2 py-0.5 ${statusStyle[col.status]}`}
              >
                {statusLabel[col.status]}
              </span>
            </div>
            <h4 className="font-display font-semibold text-foreground text-base mb-3 leading-snug">
              {col.title}
            </h4>
            <div className="space-y-2">
              {col.items.map((line) => (
                <div
                  key={line}
                  className="font-mono text-[12px] text-[var(--text-2)] leading-snug flex gap-2"
                >
                  <span className="text-accent shrink-0">▸</span>
                  <span>{line}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
