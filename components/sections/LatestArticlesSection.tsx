'use client'
import { LatestArticle } from '@/components/LatestArticle'

import { ArticleItemList } from '@/utils/getArticles'
import { Spinner } from '@nextui-org/spinner'
import { useTranslations } from 'next-intl'
import { Suspense } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  DotsCarrousel,
} from '../ui/carousel'

export function LatestArticlesSection({
  latest,
}: {
  latest: ArticleItemList[]
}) {
  let t = useTranslations('page.articles')
  return (
    <>
      <h1 className='mb-5 mt-10 text-lg font-medium'>{t('latest-articles')}</h1>
      <section className='hidden flex-col gap-5 lg:flex lg:flex-row'>
        {latest.map((article, i) => {
          return (
            <Suspense
              key={i}
              fallback={
                <Spinner
                  classNames={{
                    wrapper: 'h-72 w-72',
                    circle1: 'border-b-foreground border-b-5',
                    circle2: 'border-b-foreground/70 border-b-5',
                  }}
                  color='danger'
                  size='lg'
                />
              }
            >
              <LatestArticle
                key={i}
                {...article}
              />
            </Suspense>
          )
        })}
      </section>
      <Carousel className='flex flex-col gap-3 lg:hidden lg:flex-row'>
        <CarouselContent>
          {latest.map((article, i) => {
            return (
              <Suspense
                key={i}
                fallback={
                  <Spinner
                    classNames={{
                      wrapper: 'h-72 w-72',
                      circle1: 'border-b-foreground border-b-5',
                      circle2: 'border-b-foreground/70 border-b-5',
                    }}
                    color='danger'
                    size='lg'
                  />
                }
              >
                <CarouselItem key={i}>
                  <LatestArticle
                    key={i}
                    {...article}
                  />
                </CarouselItem>
              </Suspense>
            )
          })}
        </CarouselContent>
        <div className='flex w-full justify-center gap-2'>
          {/*{current} / {count}*/}
          <DotsCarrousel />
        </div>
      </Carousel>
    </>
  )
}
