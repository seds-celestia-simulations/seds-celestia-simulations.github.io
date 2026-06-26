import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { getArticleBySlug, getAllArticles } from '@/lib/content-utils'
import { articleComponents } from '@/lib/mdx-components'

export function generateStaticParams() {
  return getAllArticles().map((article) => ({
    slug: article.slug,
  }))
}

interface ArticleDetailsProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ArticlePage(props: ArticleDetailsProps) {
  const params = await props.params
  const article = getArticleBySlug(params.slug)

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-text-2 mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" className="text-accent hover:text-accent-light transition-colors inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const { meta, content } = article

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="border-b border-border py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#articles"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors font-mono text-xs uppercase tracking-wider mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>

          <div className="space-y-6">
            <div className="space-y-2">
              <span className="inline-block text-xs uppercase tracking-widest font-mono font-semibold text-accent">
                {meta.category}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-foreground font-display leading-tight">
              {meta.title}
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-border text-sm text-text-2">
              <div className="flex items-center gap-2 font-mono">
                <Calendar className="w-4 h-4 text-accent" />
                {meta.date}
              </div>
              <div className="flex items-center gap-2 font-mono">
                <Clock className="w-4 h-4 text-accent" />
                {meta.readTime}
              </div>
              <div className="font-mono text-accent">By {meta.author}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mdx-content">
            <MDXRemote
              source={content}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
              components={articleComponents}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
