import type { MDXComponents } from 'mdx/types'

export const articleComponents: MDXComponents = {
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
  p: ({ children, ...props }) => (
    <p className="text-base leading-relaxed" {...props}>
      {children}
    </p>
  ),
  strong: ({ children, ...props }) => (
    <strong className="text-foreground font-semibold" {...props}>
      {children}
    </strong>
  ),
  img: ({ src, alt, ...props }) => (
    <img
      src={src}
      alt={alt || ''}
      className="my-8 border border-border w-full"
      {...props}
    />
  ),
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
  pre: ({ children, ...props }) => (
    <pre
      className="bg-card border border-border p-4 overflow-x-auto text-sm font-mono leading-relaxed my-6"
      {...props}
    >
      {children}
    </pre>
  ),
}

export const projectComponents: MDXComponents = {
  ...articleComponents,
  p: ({ children, ...props }) => (
    <p className="text-text-2 leading-relaxed text-base" {...props}>
      {children}
    </p>
  ),
}
