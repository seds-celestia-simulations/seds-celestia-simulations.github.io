import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { getProjectBySlug, getAllProjects } from '@/lib/content-utils'
import { projectComponents } from '@/lib/mdx-components'

export function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }))
}

interface ProjectDetailsProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage(props: ProjectDetailsProps) {
  const params = await props.params
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <p className="text-text-2 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" className="text-accent hover:text-accent-light transition-colors inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const { meta, content } = project

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="border-b border-border py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors font-mono text-xs uppercase tracking-wider mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div className="space-y-6">
            <div className="space-y-2">
              <span
                className="inline-block text-xs uppercase tracking-widest font-mono font-semibold px-3 py-1 rounded border"
                style={{ color: meta.color, borderColor: meta.color }}
              >
                {meta.category}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-foreground font-display leading-tight">
              {meta.title}
            </h1>

            <p className="text-lg text-text-2 font-mono max-w-2xl">
              {meta.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted font-mono mb-2">Status</p>
                <p className="text-lg font-mono text-accent font-semibold">{meta.status}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted font-mono mb-2">Timeline</p>
                <p className="text-lg font-mono text-foreground font-semibold">{meta.date}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mdx-content">
            <MDXRemote
              source={content}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
              components={projectComponents}
            />
          </div>

          {/* Team and Publications */}
          <div className="grid md:grid-cols-2 gap-12 mt-16 pt-12 border-t border-border">
            <div>
              <h3 className="text-lg font-bold text-foreground font-display mb-4">Core Team</h3>
              <ul className="space-y-2">
                {meta.team.map((member: string, i: number) => (
                  <li key={i} className="text-text-2 text-sm">{member}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground font-display mb-4">Publications</h3>
              <ul className="space-y-2">
                {meta.publications.map((pub: string, i: number) => (
                  <li key={i} className="text-text-2 text-sm">{pub}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
