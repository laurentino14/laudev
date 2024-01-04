import * as fs from 'fs'
import path from 'node:path'
import matter from 'gray-matter'
import { formatDistance } from 'date-fns'
import { enUS, ptBR } from 'date-fns/locale'
import { ArticleItemList } from '@/utils/getArticles'

export type Article = ArticleItemList & {
  content: string
}

export function GetArticle(slug: string, locale: string): Article {
  let file = fs.readFileSync(
    path.join(process.cwd(), 'content', 'articles', slug, `${locale}.mdx`),
    'utf-8',
  )

  let {
    content,
    data: { title, description, day, year, month, banner, authors },
  } = matter(file)

  return {
    title,
    slug,
    description,
    banner,
    authors,
    content,
    date: {
      distance: formatDistance(new Date(year, month, day), new Date(), {
        locale: locale === 'pt' ? ptBR : enUS,
        addSuffix: true,
      }),
      long: new Date(year, month, day).toLocaleDateString(locale, {
        dateStyle: 'long',
      }),
      real: new Date(year, month, day),
    },
  }
}
