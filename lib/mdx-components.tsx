import type { MDXComponents } from 'mdx/types'
import { Children, isValidElement, type ReactNode } from 'react'
import { KpiGrid, Callout, Roadmap } from '@/components/mdx-widgets'
import { FlowStrip, DualFlow, BranchFlow, SeqFlow } from '@/components/flow-diagrams'
import { InductionRoadmap } from '@/components/InductionRoadmap'

function MdxImage({
  src,
  alt,
  ...props
}: {
  src?: string
  alt?: string
} & React.ImgHTMLAttributes<HTMLImageElement>) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const fullSrc =
    typeof src === 'string' && src.startsWith('/') && !src.startsWith(basePath)
      ? `${basePath}${src}`
      : src

  return (
    <figure className="my-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={fullSrc} alt={alt || ''} className="border border-border w-full" {...props} />
      {alt ? (
        <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--text-3)]">
          {alt}
        </figcaption>
      ) : null}
    </figure>
  )
}

function isMdxImage(node: ReactNode): boolean {
  return isValidElement(node) && node.type === MdxImage
}

function Paragraph({
  children,
  className = 'text-base leading-relaxed',
  ...props
}: {
  children?: ReactNode
  className?: string
}) {
  const kids = Children.toArray(children)
  const meaningful = kids.filter((c) => !(typeof c === 'string' && !c.trim()))

  if (meaningful.length === 1 && isMdxImage(meaningful[0])) {
    return <>{meaningful[0]}</>
  }

  if (meaningful.some(isMdxImage)) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    )
  }

  return (
    <p className={className} {...props}>
      {children}
    </p>
  )
}

function Pre({ children, ...props }: { children?: ReactNode }) {
  return (
    <pre
      className="bg-card border border-border p-4 overflow-x-auto text-sm font-mono leading-relaxed my-6"
      {...props}
    >
      {children}
    </pre>
  )
}

function Table({ children, ...props }: { children?: React.ReactNode }) {
  return (
    <div className="my-8 overflow-x-auto border border-border">
      <table className="w-full border-collapse font-mono text-sm" {...props}>
        {children}
      </table>
    </div>
  )
}

function TableHeaderCell({ children, ...props }: { children?: React.ReactNode }) {
  return (
    <th
      className="px-4 py-3 text-left text-[10px] uppercase tracking-[0.16em] text-accent font-semibold border-b border-border bg-[rgba(61,184,245,0.04)] whitespace-nowrap"
      {...props}
    >
      {children}
    </th>
  )
}

function TableCell({
  children,
  ...props
}: { children?: React.ReactNode } & React.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td className="px-4 py-3 border-b border-border last:border-b-0 text-[var(--text-2)]" {...props}>
      {children}
    </td>
  )
}

export const articleComponents: MDXComponents = {
  KpiGrid,
  Callout,
  Roadmap,
  FlowStrip,
  DualFlow,
  BranchFlow,
  SeqFlow,
  InductionRoadmap,
  table: Table,
  th: TableHeaderCell,
  td: TableCell,
  h2: ({ children, ...props }) => (
    <h2 className="text-2xl font-bold text-foreground font-display mt-8 mb-4" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="text-xl font-bold text-foreground font-display mt-6 mb-3" {...props}>
      {children}
    </h3>
  ),
  p: (props) => <Paragraph {...props} />,
  ul: ({ children, ...props }) => (
    <ul className="my-4 list-none space-y-2 text-[var(--text-2)]" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="my-4 list-none space-y-2 text-[var(--text-2)]" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="leading-relaxed" {...props}>
      {children}
    </li>
  ),
  strong: ({ children, ...props }) => (
    <strong className="text-foreground font-semibold" {...props}>
      {children}
    </strong>
  ),
  img: MdxImage,
  a: ({ children, href, ...props }) => (
    <a
      href={href}
      className="text-accent hover:text-[var(--accent-bright)] underline underline-offset-2 transition-colors"
      {...props}
    >
      {children}
    </a>
  ),
  code: ({ children, ...props }) => (
    <code
      className="bg-[rgba(61,184,245,0.08)] text-accent px-1.5 py-0.5 text-sm font-mono"
      {...props}
    >
      {children}
    </code>
  ),
  pre: Pre,
}

export const projectComponents: MDXComponents = {
  ...articleComponents,
  p: (props) => <Paragraph className="text-text-2 leading-relaxed text-base" {...props} />,
}
