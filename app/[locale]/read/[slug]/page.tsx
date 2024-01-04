import { unstable_setRequestLocale } from 'next-intl/server'
import { GetArticle } from '@/utils/getArticle'
import { GetArticles } from '@/utils/getArticles'

export default function ReadPage({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string }
}) {
  unstable_setRequestLocale(locale)
  let data = GetArticle(slug, locale)
  return (
    <div>
      <h1>Read Page</h1>
      <p>Slug: {data.slug}</p>
    </div>
  )
}

export async function generateStaticParams() {
  let locales = ['en', 'pt']
  let paths: { params: { locale: string; slug: string } }[] = []

  locales.forEach(locale => {
    let articles = GetArticles(locale)
    articles.forEach(article => {
      paths.push({
        params: {
          locale,
          slug: article.slug,
        },
      })
    })
  })
  return paths
}
