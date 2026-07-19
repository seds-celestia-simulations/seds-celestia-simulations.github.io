'use client'

import { useEffect, useRef } from 'react'

/**
 * Title-slide Lorenz background — same technique as
 * https://arcsh.github.io/simulations-physics/ (S1 bgc):
 * persistent trail fade + growing orbit + slow yaw.
 */
const SIG = 10
const RHO = 28
const BET = 8 / 3
const DT = 0.004
const MAX = 10000
const STEPS = 4

type Pt = { x: number; y: number; z: number }

export default function LorenzAttractor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const cv = canvasRef.current
    if (!cv) return
    const ctx = cv.getContext('2d', { alpha: false })
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let x = 0.1
    let y = 0
    let z = 0
    const pts: Pt[] = []
    let angle = 0
    let raf = 0
    let running = false

    const rsz = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = cv.clientWidth
      const h = cv.clientHeight
      cv.width = Math.floor(w * dpr)
      cv.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      // seed opaque bg so first fade frames look right
      ctx.fillStyle = '#05080f'
      ctx.fillRect(0, 0, w, h)
    }

    rsz()
    window.addEventListener('resize', rsz)

    // Warm-up onto the attractor before painting
    for (let i = 0; i < 1500; i++) {
      const dx = SIG * (y - x)
      const dy = x * (RHO - z) - y
      const dz = x * y - BET * z
      x += dx * DT
      y += dy * DT
      z += dz * DT
    }

    const frame = () => {
      if (!running) return
      const W = cv.clientWidth
      const H = cv.clientHeight

      // Persistent trails — the whole look
      ctx.fillStyle = 'rgba(5, 8, 15, 0.1)'
      ctx.fillRect(0, 0, W, H)

      if (!reduced) {
        for (let i = 0; i < STEPS; i++) {
          const dx = SIG * (y - x)
          const dy = x * (RHO - z) - y
          const dz = x * y - BET * z
          x += dx * DT
          y += dy * DT
          z += dz * DT
          pts.push({ x, y, z })
          if (pts.length > MAX) pts.shift()
        }
        angle += 0.0006
      }

      const sc = Math.min(W, H) / 62
      const ca = Math.cos(angle)
      const sa = Math.sin(angle)

      // Anchored on the right — slow spin in place, doesn't drift across the page
      const proj = (px: number, py: number, pz: number) => ({
        sx: W * 0.74 + (px * ca - py * sa) * sc,
        sy: H * 0.5 + (pz - 27) * sc * -0.82 + (px * sa + py * ca) * sc * 0.22,
      })

      ctx.lineCap = 'round'
      for (let i = 1; i < pts.length; i++) {
        const t = i / pts.length
        const a = proj(pts[i - 1].x, pts[i - 1].y, pts[i - 1].z)
        const b = proj(pts[i].x, pts[i].y, pts[i].z)
        ctx.beginPath()
        ctx.moveTo(a.sx, a.sy)
        ctx.lineTo(b.sx, b.sy)
        // ice cyan ribbon matching site accent
        ctx.strokeStyle = `hsla(${185 + t * 35}, 82%, 68%, ${t * 0.45})`
        ctx.lineWidth = 0.95
        ctx.stroke()
      }

      raf = requestAnimationFrame(frame)
    }

    // Seed a visible trail so it doesn't start empty
    for (let i = 0; i < (reduced ? MAX : 2000); i++) {
      const dx = SIG * (y - x)
      const dy = x * (RHO - z) - y
      const dz = x * y - BET * z
      x += dx * DT
      y += dy * DT
      z += dz * DT
      pts.push({ x, y, z })
      if (pts.length > MAX) pts.shift()
    }

    const start = () => {
      if (running) return
      running = true
      frame()
    }

    const stop = () => {
      running = false
      cancelAnimationFrame(raf)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start()
        else stop()
      },
      { threshold: 0.05 },
    )
    observer.observe(cv)

    if (reduced) {
      // one static paint
      running = true
      frame()
      stop()
    } else {
      start()
    }

    return () => {
      stop()
      window.removeEventListener('resize', rsz)
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden
    />
  )
}
