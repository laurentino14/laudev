import path from 'node:path'
import matter from 'gray-matter'
import { enUS, ptBR } from 'date-fns/locale'
import { formatDistance } from 'date-fns'
import * as fs from 'fs'

export type ArticleItemList = {
  title: string
  slug: string
  description: string
  banner: string
  authors: string[]
  date: {
    distance: string
    long: string
    real: Date
  }
}

export function GetArticles(locale: string): ArticleItemList[] {
  let files = fs.readdirSync(path.join(process.cwd(), 'content', 'articles'))

  return files.map(f => {
    let articleFile = fs.readFileSync(
      path.join(process.cwd(), 'content', 'articles', f, `${locale}.mdx`),
      'utf-8',
    )

    let {
      content,
      data: { title, description, day, year, month, banner, authors },
    } = matter(articleFile)

    return {
      title,
      slug: f,
      description,
      banner,
      authors,
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
  })
}
