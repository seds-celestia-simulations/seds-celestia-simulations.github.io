import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(process.cwd(), 'content', 'articles')
const projectsDirectory = path.join(process.cwd(), 'content', 'projects')

export interface ArticleMeta {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  author: string
}

export interface ArticleData {
  meta: ArticleMeta
  content: string
}

export interface ProjectMeta {
  slug: string
  title: string
  description: string
  category: string
  color: string
  date: string
  status: string
  year: string
  team: string[]
  publications: string[]
}

export interface ProjectData {
  meta: ProjectMeta
  content: string
}

function parseFrontmatter<T>(filePath: string): { data: T; content: string } {
  const source = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(source)
  return { data: data as T, content }
}

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(articlesDirectory)) return []
  const files = fs.readdirSync(articlesDirectory).filter(f => f.endsWith('.mdx'))
  const articles = files.map((file) => {
    const slug = file.replace(/\.mdx$/, '')
    const { data } = parseFrontmatter<any>(path.join(articlesDirectory, file))
    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      date: data.date || '',
      readTime: data.readTime || '',
      category: data.category || '',
      author: data.author || '',
    }
  })
  const parseDate = (d: string) => {
    const parsed = new Date(d)
    return isNaN(parsed.getTime()) ? new Date(0) : parsed
  }
  articles.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime())
  return articles
}

export function getArticleBySlug(slug: string): ArticleData | null {
  const filePath = path.join(articlesDirectory, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const { data, content } = parseFrontmatter<any>(filePath)
  return {
    meta: {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      date: data.date || '',
      readTime: data.readTime || '',
      category: data.category || '',
      author: data.author || '',
    },
    content,
  }
}

export function getAllProjects(): ProjectMeta[] {
  if (!fs.existsSync(projectsDirectory)) return []
  const files = fs.readdirSync(projectsDirectory).filter(f => f.endsWith('.mdx'))
  const projects = files.map((file) => {
    const slug = file.replace(/\.mdx$/, '')
    const { data } = parseFrontmatter<any>(path.join(projectsDirectory, file))
    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      category: data.category || '',
      color: data.color || '',
      date: data.date || '',
      status: data.status || '',
      year: data.year || '',
      team: data.team || [],
      publications: data.publications || [],
    }
  })
  projects.sort((a, b) => parseInt(b.year || '0') - parseInt(a.year || '0'))
  return projects
}

export function getProjectBySlug(slug: string): ProjectData | null {
  const filePath = path.join(projectsDirectory, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const { data, content } = parseFrontmatter<any>(filePath)
  return {
    meta: {
      slug,
      title: data.title || '',
      description: data.description || '',
      category: data.category || '',
      color: data.color || '',
      date: data.date || '',
      status: data.status || '',
      year: data.year || '',
      team: data.team || [],
      publications: data.publications || [],
    },
    content,
  }
}
