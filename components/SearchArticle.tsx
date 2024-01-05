'use client'
import { ArticleItemList } from '@/utils/getArticles'
import { Input } from '@/components/ui/input'
import {
  Suspense,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Spinner } from '@nextui-org/spinner'
import { ScrollArea } from '@/components/ui/scroll-area'
import { NextUseRouter } from '@/components/NextUseRouter'
import { useTranslations } from 'next-intl'

function searchArticle(search: string, articles: ArticleItemList[]) {
  let articlesResponse: ArticleItemList[] = []
  articles
    .filter(
      article =>
        article.title.includes(search.toLowerCase()) ||
        article.description.includes(search.toLowerCase()) ||
        article.slug.includes(search.toLowerCase()),
    )
    .forEach(article => {
      articlesResponse.push(article)
    })

  articlesResponse.sort((a, b) => b.date.real.getTime() - a.date.real.getTime())

  return articlesResponse
}

export function SearchArticle({ articles }: { articles: ArticleItemList[] }) {
  let [value, setValue] = useState('')
  let search = useDeferredValue(value)
  let isStale = value !== search
  let [isOpen, setIsOpen] = useState(false)
  let [content, setContent] = useState<ArticleItemList[] | null>(null)
  let contentMemo = useMemo(() => content, [content])
  let ref = useRef<HTMLInputElement>(null)
  let router = NextUseRouter()
  useEffect(() => {
    if (search.length > 0) {
      setIsOpen(true)

      setContent(searchArticle(search, articles))
    } else {
      setIsOpen(false)
    }
  }, [search, articles])

  useEffect(() => {
    ref.current?.addEventListener('focusout', e => {
      if (e.relatedTarget?.dispatchEvent(new Event('click'))) {
        return
      }
      setIsOpen(false)
    })
  }, [])

  let t = useTranslations('page.articles')

  return (
    <>
      <div className='relative z-[6] w-full lg:max-w-80'>
        <Input
          ref={ref}
          aria-label={t('search')}
          alt={t('search')}
          onFocus={e => e.target.value.length > 0 && setIsOpen(true)}
          onChange={e => setValue(e.target.value)}
          value={value}
          className='mt-1 w-full text-foreground !placeholder-foreground/30 shadow-none focus-visible:outline-[1px] focus-visible:ring-1 focus-visible:ring-foreground/20'
          type='text'
          placeholder={t('search')}
        />

        <Card
          className={cn(
            'z-10 max-h-96 max-w-80 overflow-hidden rounded-lg border-foreground/20 shadow-lg',
            {
              hidden: !isOpen,
              'absolute left-0 top-12': isOpen,
            },
          )}
        >
          <ScrollArea
            className={cn({
              'h-96 max-h-96 w-full max-w-80 ': isOpen,
            })}
          >
            <div
              className={cn(
                'relative flex w-80 max-w-80 flex-col gap-4 px-0 py-5',
                {
                  'pointer-events-none h-full !w-full opacity-50 transition-opacity':
                    isStale,
                },
              )}
            >
              <Suspense fallback={<Spinner />}>
                {contentMemo && contentMemo?.length > 0 ? (
                  contentMemo?.map((article, i) => {
                    return (
                      <button
                        onClick={e => {
                          e.preventDefault()
                          setIsOpen(false)
                          router.push(`read/${article.slug}`)
                        }}
                        onTouchStart={e => {
                          e.preventDefault()
                          setIsOpen(false)
                          router.push(`read/${article.slug}`)
                        }}
                        key={i}
                        className='group flex w-full flex-col gap-2 text-left '
                      >
                        <Card className=' mx-2 space-y-2 rounded-md border-none p-2 shadow-none transition-colors duration-100 hover:outline hover:outline-1 hover:outline-foreground/10 group-hover:cursor-pointer group-hover:bg-foreground/[1%]'>
                          <CardTitle className=''>{article.title}</CardTitle>
                          <CardDescription className='line-clamp-3 text-xs'>
                            {article.description}
                          </CardDescription>
                        </Card>
                        {contentMemo && i < contentMemo?.length - 1 && (
                          <hr className='mt-2' />
                        )}
                      </button>
                    )
                  })
                ) : (
                  <div className='absolute inset-0 flex h-96 w-80 items-center justify-center'>
                    <h1 className='-ml-2'>No articles found</h1>
                  </div>
                )}
              </Suspense>
            </div>
          </ScrollArea>
        </Card>
      </div>
      <div
        onClick={() => {
          // setIsOpen(false)
        }}
        className={cn(
          'absolute inset-0 z-[5] h-full w-full flex-1 bg-background/80 backdrop-blur-[1px]',
          {
            hidden: !isOpen,
          },
        )}
      />
    </>
  )
}
