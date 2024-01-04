import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { GetArticles } from '@/utils/getArticles'
import { compareDesc } from 'date-fns'
import { LatestArticlesSection } from '@/components/LatestArticlesSection'
import { SearchArticle } from '@/components/SearchArticle'

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

export default function Articles({ params }: { params: { locale: string } }) {
  const allArticles = GetArticles(params.locale)
  const latest = allArticles
    .sort((a, b) => compareDesc(a.date.real, b.date.real))
    .slice(0, 2)
  const rest = allArticles.slice(2)
  return (
    <main className='container mt-20'>
      <div className='flex w-full justify-end'>
        <SearchArticle articles={allArticles} />
      </div>
      <LatestArticlesSection latest={latest} />
    </main>
  )
}
