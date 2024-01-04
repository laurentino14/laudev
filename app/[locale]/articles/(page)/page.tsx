import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { GetArticles } from '@/utils/getArticles'
import { compareDesc } from 'date-fns'
import { LatestArticlesSection } from '@/components/sections/LatestArticlesSection'
import { SearchArticle } from '@/components/SearchArticle'
import { Suspense } from 'react'
import { LatestArticlesSectionSuspense } from '@/components/sections/LatestArticlesSectionSuspense'

export default function Articles({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const allArticles = GetArticles(locale)
  const latest = allArticles
    .sort((a, b) => compareDesc(a.date.real, b.date.real))
    .slice(0, 2)
  const rest = allArticles.slice(2)
  return (
    <main className='container mt-20'>
      <div className='flex w-full justify-end'>
        <SearchArticle articles={allArticles} />
      </div>
      <Suspense fallback={<LatestArticlesSectionSuspense />}>
        <LatestArticlesSection latest={latest} />
      </Suspense>
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
