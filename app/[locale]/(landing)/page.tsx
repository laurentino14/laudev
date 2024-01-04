import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { NextLink } from '@/components/NextLink'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function Home({
  params: { locale },
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('page.home')

  return (
    <main className=' flex   flex-1 flex-col items-center justify-center '>
      <div className='max-w-2xl px-4'>
        <h1 className='text-center text-3xl font-black tracking-[7.2px] sm:text-5xl dark:text-white'>
          LUCAS LAURENTINO
        </h1>
        <h2 className='items-top flex justify-center space-x-2 text-sm font-semibold sm:items-center sm:text-xl'>
          <span className='tracking-[3px] text-black/50 dark:text-white/50'>
            {t('hero.sub')}
          </span>
          <NextLink
            href='https://elevatt.tech'
            target='_blank'
            className='bg-background transition-colors'
          >
            <Image
              src='https://cdn.laudev.com.br/logo-h.png'
              width={152}
              height={20}
              className='-mt-1 mix-blend-difference'
              priority
              quality={100}
              alt='Logomarca Elevatt'
            />
          </NextLink>
        </h2>
        <p className='mt-12 max-w-xl text-balance text-center font-medium tracking-[-0.8px] sm:text-base dark:text-white'>
          {t('hero.text')}
        </p>
      </div>
    </main>
  )
}
