import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { GetArticles } from '@/utils/getArticles'
import { compareDesc } from 'date-fns'
import { LatestArticlesSection } from '@/components/sections/LatestArticlesSection'
import { SearchArticle } from '@/components/SearchArticle'
import { RestArticle } from '@/components/RestArticle'

export default function Articles({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const allArticles = GetArticles(locale)
  const latest = allArticles
    .sort((a, b) => compareDesc(a.date.real, b.date.real))
    .slice(0, 2)
  const rest = [
    ...allArticles.slice(2),
    ...allArticles.slice(2),
    ...allArticles.slice(2),
    ...allArticles.slice(2),
    ...allArticles.slice(2),
    ...allArticles.slice(2),
    ...allArticles.slice(2),
    ...allArticles.slice(2),
    ...allArticles.slice(2),
    ...allArticles.slice(2),
    ...allArticles.slice(2),
    ...allArticles.slice(2),
    ...allArticles.slice(2),
    ...allArticles.slice(2),
    ...allArticles.slice(2),
    ...allArticles.slice(2),
    ...allArticles.slice(2),
    ...allArticles.slice(2),
    ...allArticles.slice(2),
    ...allArticles.slice(2),
  ]
  return (
    <main className='container my-20 flex-1'>
      <section className='flex w-full justify-end'>
        <SearchArticle articles={allArticles} />
      </section>
      <LatestArticlesSection latest={latest} />
      <section className='relative mt-20 grid w-full grid-cols-3 gap-10 '>
        {rest.map((article, i) => (
          <RestArticle
            key={i}
            {...article}
          />
        ))}
      </section>
    </main>
  )
}

export async function generateStaticParams() {
  let locales = ['en', 'pt']
  let paths: { params: { locale: string } }[] = []
  for (let locale of locales) {
    paths.push({ params: { locale } })
  }
  return paths
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'page.articles' })

  return {
    title: t('title'),
    description: t('description'),
  }
}
