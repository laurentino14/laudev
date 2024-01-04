import { ModalRead } from '@/app/[locale]/articles/@modal/(..)read/[slug]/modal'
import { GetArticle } from '@/utils/getArticle'

export default function ReadPage({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string }
}) {
  let data = GetArticle(slug, locale)
  return <ModalRead data={data} />
}
