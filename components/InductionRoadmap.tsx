'use client'

interface Stage {
  label: string
  description?: string
}

interface Track {
  name: string
  stages: Stage[]
}

interface InductionRoadmapProps {
  intro: Stage | string
  tracks: Track[] | string
}

const P = 24
const NODE_H = 38
const STAGE_H = 50
const STAGE_GAP = 28
const LANE_GAP = 44
const TRACK_HEADER_H = 22
const HEADER_LANE_GAP = 8
const FONT = '12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
const FONT_S = '9px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
const FONT_T = '10px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'

function layout(i: Stage, tracks: Track[]) {
  const iw = Math.max(i.label.length * 8 + 40, 120)
  const sw = Math.max(...tracks.flatMap((t) => t.stages.map((s) => s.label.length * 8 + 40)), 140)
  const trackW = tracks.reduce((a, t) => a + t.stages.length * sw + (t.stages.length - 1) * STAGE_GAP, 0)
  const totalH =
    P + NODE_H + LANE_GAP + tracks.length * (TRACK_HEADER_H + HEADER_LANE_GAP + STAGE_H) + P
  const totalW = P + iw + LANE_GAP + trackW + P
  return { iw, sw, totalH, totalW }
}

function IntroBox({ x, y, w, h, stage }: { x: number; y: number; w: number; h: number; stage: Stage }) {
  const cx = x + w / 2
  const cy = y + h / 2
  return (
    <g role="group" aria-label={`Intro: ${stage.label}${stage.description ? ` — ${stage.description}` : ''}`}>
      <rect x={x} y={y} width={w} height={h} fill="var(--accent)" stroke="var(--accent)" strokeWidth={1} />
      <text x={cx} y={stage.description ? cy - 4 : cy} textAnchor="middle" dominantBaseline="central" fill="var(--accent-foreground)" style={{ fontFamily: FONT, fontWeight: 600, fontSize: 12 }}>
        {stage.label}
      </text>
      {stage.description ? (
        <text x={cx} y={cy + 11} textAnchor="middle" dominantBaseline="central" fill="var(--accent-foreground)" style={{ fontFamily: FONT_S, opacity: 0.8 }}>
          {stage.description}
        </text>
      ) : null}
    </g>
  )
}

function StageBox({ x, y, w, h, stage }: { x: number; y: number; w: number; h: number; stage: Stage }) {
  const cx = x + w / 2
  const cy = y + h / 2
  return (
    <g role="group" aria-label={`Stage: ${stage.label}${stage.description ? ` — ${stage.description}` : ''}`}>
      <rect x={x} y={y} width={w} height={h} fill="var(--card)" stroke="var(--border)" strokeWidth={1} />
      <text x={cx} y={stage.description ? cy - 4 : cy} textAnchor="middle" dominantBaseline="central" fill="var(--foreground)" style={{ fontFamily: FONT, fontSize: 12 }}>
        {stage.label}
      </text>
      {stage.description ? (
        <text x={cx} y={cy + 11} textAnchor="middle" dominantBaseline="central" fill="var(--text-2)" style={{ fontFamily: FONT_S }}>
          {stage.description}
        </text>
      ) : null}
    </g>
  )
}

function ArrowLine({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--border)" strokeWidth={1} />
}

function renderTracks(
  startX: number,
  introCy: number,
  tracks: Track[],
  iw: number,
  sw: number,
) {
  let y = introCy - ((tracks.length - 1) * (TRACK_HEADER_H + HEADER_LANE_GAP + STAGE_H)) / 2
  const els: React.ReactNode[] = []

  tracks.forEach((track) => {
    const laneTop = y
    const laneCy = laneTop + TRACK_HEADER_H + HEADER_LANE_GAP + STAGE_H / 2

    els.push(
      <text key={`h-${track.name}`} x={startX + iw + LANE_GAP} y={laneTop} dominantBaseline="hanging" fill="var(--accent)" style={{ fontFamily: FONT_T, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>
        {track.name}
      </text>,
    )

    const introRight = P + iw
    els.push(<ArrowLine key={`f-${track.name}`} x1={introRight} y1={introCy} x2={introRight + LANE_GAP} y2={laneCy} />)
    els.push(<ArrowLine key={`fh-${track.name}`} x1={introRight + LANE_GAP} y1={introCy} x2={introRight + LANE_GAP} y2={laneCy} />)

    const stageY = laneTop + TRACK_HEADER_H + HEADER_LANE_GAP
    track.stages.forEach((stage, si) => {
      const sx = startX + iw + LANE_GAP + si * (sw + STAGE_GAP)
      els.push(<StageBox key={`${track.name}-${si}`} x={sx} y={stageY} w={sw} h={STAGE_H} stage={stage} />)
      if (si > 0) {
        const prevRight = startX + iw + LANE_GAP + (si - 1) * (sw + STAGE_GAP) + sw
        els.push(<ArrowLine key={`a-${track.name}-${si}`} x1={prevRight} y1={laneCy} x2={sx} y2={laneCy} />)
      }
    })

    y += TRACK_HEADER_H + HEADER_LANE_GAP + STAGE_H + LANE_GAP
  })

  return els
}

function parse<T>(v: T | string): T {
  return typeof v === 'string' ? JSON.parse(v) : v
}

export function InductionRoadmap({ intro, tracks }: InductionRoadmapProps) {
  if (!intro || !tracks) return null
  const i = parse<Stage>(intro)
  const t = parse<Track[]>(tracks)
  if (!i || !t?.length) return null

  const { iw, sw, totalH, totalW } = layout(i, t)
  const introX = P
  const introY = P
  const introCy = P + NODE_H / 2

  return (
    <div className="my-8 border border-border bg-card overflow-x-auto">
      <div className="min-w-[640px]">
        <svg
          viewBox={`0 0 ${totalW} ${totalH}`}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={`Induction roadmap: ${i.label} intro branching into ${t.map((tr) => tr.name).join(', ')}`}
          className="w-full h-auto"
          style={{ display: 'block' }}
        >
          <title>{`Induction roadmap — ${i.label} branches into ${t.map((tr) => tr.name).join(' and ')}`}</title>
          <IntroBox x={introX} y={introY} w={iw} h={NODE_H} stage={i} />
          {renderTracks(P, introCy, t, iw, sw)}
        </svg>
      </div>
    </div>
  )
}
