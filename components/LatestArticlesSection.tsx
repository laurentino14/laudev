'use client'
import { LatestArticle } from '@/components/LatestArticle'
import type { CarouselApi } from '@/components/ui/carousel'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { ArticleItemList } from '@/utils/getArticles'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'

export function LatestArticlesSection({
  latest,
}: {
  latest: ArticleItemList[]
}) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [bullet, setBullet] = useState([])

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  let t = useTranslations('page.articles')
  return (
    <>
      <h1 className='mb-5 mt-10 text-lg font-medium'>{t('latest-articles')}</h1>
      <section className='hidden flex-col gap-5 lg:flex lg:flex-row'>
        {latest.map((article, i) => {
          return (
            <LatestArticle
              key={i}
              {...article}
            />
          )
        })}
      </section>
      <Carousel
        setApi={setApi}
        className='flex flex-col gap-3 lg:hidden lg:flex-row'
      >
        <CarouselContent>
          {latest.map((article, i) => {
            return (
              <CarouselItem key={i}>
                <LatestArticle
                  key={i}
                  {...article}
                />
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <div className='flex w-full justify-center gap-2'>
          {/*{current} / {count}*/}
          {api?.scrollSnapList().map((_, index) => {
            let isActive = index === current - 1
            return (
              <div
                key={index}
                className={cn('h-2 w-2 rounded-full ', {
                  'bg-foreground': isActive,
                  'bg-foreground/50': !isActive,
                })}
              />
            )
          })}
        </div>
      </Carousel>
    </>
  )
}
