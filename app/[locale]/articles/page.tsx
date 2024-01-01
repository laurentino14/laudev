import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Articles' })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function Articles() {
  return <>123</>
}
