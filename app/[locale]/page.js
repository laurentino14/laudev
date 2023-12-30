import { useTranslations } from 'next-intl'

export default function Home({ params }) {
  const t = useTranslations('Home')

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {t('title')}
    </main>
  )
}
