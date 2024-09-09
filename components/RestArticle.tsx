import { NextLink } from '@/components/NextLink'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ArticleItemList } from '@/utils/getArticles'
import { useTranslations } from 'next-intl'
import { BorderBeam } from './magicui/border-beam'

export function RestArticle({
  date,
  description,
  title,
  slug,
  banner,
  authors,
}: ArticleItemList) {
  let t = useTranslations('page.articles')
  return (
    <NextLink href={`read/${slug}`}>
      <Card className='group flex w-full flex-col overflow-hidden border-none shadow-none  @container hover:bg-foreground/[1%] hover:outline hover:outline-1 hover:outline-foreground/10 '>
        <CardHeader>
          <CardTitle className='text-foreground/90 group-hover:text-black dark:text-foreground group-hover:dark:text-white'>
            {title}
          </CardTitle>
          <CardDescription>
            {t('published-at')}
            {date.distance}
          </CardDescription>
        </CardHeader>
        <CardContent className='-mt-5'>
          <p className='line-clamp-3 text-xs text-muted-foreground @2xl:line-clamp-6'>
            {description}
          </p>
        </CardContent>
        <BorderBeam
          size={200}
          duration={9}
          className='opacity-0 transition-opacity duration-300 group-hover:opacity-100'
        />
      </Card>
    </NextLink>
  )
}
