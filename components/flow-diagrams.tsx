function Node({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <div
      className={`border px-3 py-2.5 text-center font-mono text-[12px] sm:text-[13px] leading-snug text-foreground ${
        accent
          ? 'border-accent bg-[rgba(61,184,245,0.1)]'
          : 'border-border bg-[rgba(61,184,245,0.04)]'
      }`}
    >
      {children}
    </div>
  )
}

function Arrow({ label, vertical = false }: { label?: string; vertical?: boolean }) {
  if (vertical) {
    return (
      <div className="flex flex-col items-center py-1 text-accent font-mono text-[10px] uppercase tracking-wider">
        <span aria-hidden>↓</span>
        {label ? <span className="text-[var(--text-3)] mt-0.5 normal-case tracking-normal">{label}</span> : null}
      </div>
    )
  }
  return (
    <div className="flex items-center justify-center px-1 text-accent font-mono text-[10px] shrink-0">
      <span aria-hidden>→</span>
      {label ? <span className="ml-1 text-[var(--text-3)] hidden sm:inline">{label}</span> : null}
    </div>
  )
}

/** Horizontal / wrapping step strip — never clips text */
export function FlowStrip({
  steps,
  direction = 'row',
}: {
  steps: string[] | string
  direction?: 'row' | 'col'
}) {
  const parsed: string[] = typeof steps === 'string' ? JSON.parse(steps) : steps
  const vertical = direction === 'col'

  return (
    <div className="my-8 border border-border bg-card p-4 sm:p-5 overflow-x-auto">
      <div
        className={
          vertical
            ? 'flex flex-col items-stretch max-w-md mx-auto'
            : 'flex flex-wrap items-center justify-center gap-y-2'
        }
      >
        {parsed.map((step, i) => (
          <div key={`${step}-${i}`} className={vertical ? 'contents' : 'contents'}>
            {i > 0 ? <Arrow vertical={vertical} /> : null}
            <div className={vertical ? 'w-full' : 'min-w-[7.5rem] max-w-[11rem] flex-1'}>
              <Node>{step}</Node>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

type Panel = {
  title: string
  steps: string[]
}

/** Two side-by-side pipeline panels with optional bridge note */
export function DualFlow({
  left,
  right,
  bridge,
}: {
  left: Panel | string
  right: Panel | string
  bridge?: string
}) {
  const L: Panel = typeof left === 'string' ? JSON.parse(left) : left
  const R: Panel = typeof right === 'string' ? JSON.parse(right) : right

  return (
    <div className="my-8 border border-border bg-card overflow-hidden">
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
        {[L, R].map((panel) => (
          <div key={panel.title} className="p-4 sm:p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent mb-4">
              {panel.title}
            </p>
            <div className="flex flex-col">
              {panel.steps.map((step, i) => (
                <div key={`${panel.title}-${step}`}>
                  {i > 0 ? <Arrow vertical /> : null}
                  <Node>{step}</Node>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {bridge ? (
        <div className="border-t border-border px-4 py-3 font-mono text-[11px] text-[var(--text-2)] text-center">
          <span className="text-accent">⇢</span> {bridge}
        </div>
      ) : null}
    </div>
  )
}

type Branch = { label: string; target: string }

/** Linear flow ending in labeled branches */
export function BranchFlow({
  steps,
  branches,
}: {
  steps: string[] | string
  branches: Branch[] | string
}) {
  const S: string[] = typeof steps === 'string' ? JSON.parse(steps) : steps
  const B: Branch[] = typeof branches === 'string' ? JSON.parse(branches) : branches

  return (
    <div className="my-8 border border-border bg-card p-4 sm:p-5">
      <div className="flex flex-col max-w-lg mx-auto">
        {S.map((step, i) => (
          <div key={`${step}-${i}`}>
            {i > 0 ? <Arrow vertical /> : null}
            <Node>{step}</Node>
          </div>
        ))}
        <Arrow vertical label="exit" />
        <div className="grid gap-2 sm:grid-cols-3">
          {B.map((b) => (
            <div key={b.target} className="flex flex-col gap-1">
              <span className="font-mono text-[10px] text-accent text-center uppercase tracking-wider">
                {b.label}
              </span>
              <Node accent>{b.target}</Node>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

type SeqStep = { from: string; to: string; msg: string; note?: string }

/** Simple sequence / message list — no Mermaid */
export function SeqFlow({
  actors,
  steps,
}: {
  actors: string[] | string
  steps: SeqStep[] | string
}) {
  const A: string[] = typeof actors === 'string' ? JSON.parse(actors) : actors
  const S: SeqStep[] = typeof steps === 'string' ? JSON.parse(steps) : steps

  return (
    <div className="my-8 border border-border bg-card overflow-hidden">
      <div className="grid border-b border-border" style={{ gridTemplateColumns: `repeat(${A.length}, minmax(0, 1fr))` }}>
        {A.map((actor) => (
          <div
            key={actor}
            className="px-2 py-3 text-center font-mono text-[11px] sm:text-[12px] text-accent border-r border-border last:border-r-0"
          >
            {actor}
          </div>
        ))}
      </div>
      <div className="divide-y divide-border">
        {S.map((step, i) => (
          <div key={`${step.msg}-${i}`} className="px-4 py-3 font-mono text-[12px] text-[var(--text-2)]">
            <span className="text-foreground">{step.from}</span>
            <span className="text-accent mx-2">→</span>
            <span className="text-foreground">{step.to}</span>
            <span className="text-[var(--text-3)] mx-2">·</span>
            <span>{step.msg}</span>
            {step.note ? (
              <span className="block mt-1 text-[10px] uppercase tracking-wider text-accent">{step.note}</span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}
