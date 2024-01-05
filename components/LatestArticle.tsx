import { ArticleItemList } from '@/utils/getArticles'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import { NextLink } from '@/components/NextLink'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { Badge } from '@/components/ui/badge'
import { ReaderIcon } from '@/components/icons/ReaderIcon'

export function LatestArticle({
  date,
  description,
  title,
  slug,
  banner,
  authors,
}: ArticleItemList) {
  let t = useTranslations('page.articles')
  return (
    <Card className='max-w-1/2 w-full overflow-hidden shadow-none @container'>
      <div className='flex flex-col @2xl:flex-row'>
        <NextLink
          href={`read/${slug}`}
          passHref
        >
          <div className='group relative h-48 overflow-hidden @sm:h-96   @2xl:h-full @2xl:min-w-96 '>
            <Image
              src={banner}
              alt={title}
              quality={100}
              sizes=' 100vw'
              priority
              className='transition-transform duration-150 sm:group-hover:scale-105'
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </NextLink>
        <div className='flex flex-col @2xl:justify-between'>
          <CardHeader>
            <CardTitle className='line-clamp-2 pb-px  '>{title}</CardTitle>
            <CardDescription className='flex flex-col'>
              <span>
                {t('published-at')}
                {date.distance}
              </span>
              <span className='flex flex-wrap gap-1'>
                {t('authors')}
                {authors.map((at, i) => (
                  <div key={i}>
                    <Badge className='w-fit px-1 py-0 text-xs hover:!bg-foreground dark:hover:!bg-white '>
                      {`@${at}`}
                    </Badge>
                    <span>
                      {i < authors.length - 2
                        ? `,`
                        : i === authors.length - 2
                          ? `   e`
                          : i === authors.length - 1 && `.`}
                    </span>
                  </div>
                ))}
              </span>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className='line-clamp-3 text-sm text-muted-foreground @2xl:line-clamp-6'>
              {description}
            </p>
          </CardContent>
          <CardFooter>
            <Button
              aria-label={t('read-more')}
              asChild
            >
              <NextLink
                href={`read/${slug}`}
                className='flex items-center space-x-1'
              >
                <ReaderIcon />
                <span>{t('read-more')}</span>
              </NextLink>
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}
