import AnimatedGradientText from '@/components/magicui/animated-gradient-text'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import Link from 'next/link'

export default function Home({
  params: { locale },
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('page.home')

  return (
    <main className=' relative flex flex-1 flex-col items-center justify-center '>
      <div className=' max-w-2xl px-4'>
        <h1 className='text-center text-3xl font-black tracking-[7.2px] sm:text-5xl dark:text-white'>
          LUCAS LAURENTINO
        </h1>
        <h2 className='items-top flex justify-center space-x-2 text-sm font-semibold sm:items-center sm:text-xl'>
          <span className='tracking-[3px] text-black/50 dark:text-white/50'>
            {t('hero.sub')}
          </span>
        </h2>
        <p className='mt-12 max-w-xl text-balance text-center font-medium tracking-[-0.8px] sm:text-base dark:text-white'>
          {t('hero.text')}
        </p>
        <Link href={t('articles.href')}>
          <AnimatedGradientText className='mt-5 space-x-2 from-blue-500'>
            ✨<span> {t('articles.text')} </span>
            <ArrowRightIcon />
          </AnimatedGradientText>
        </Link>
      </div>
    </main>
  )
}
