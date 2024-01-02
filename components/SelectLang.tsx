'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useTranslations } from 'next-intl'
import { NextUseRouter } from '@/components/NextUseRouter'
import { NextUsePathname } from '@/components/NextUsePathname'
import Cookies from 'js-cookie'

export function SelectLang() {
  const languages = ['en', 'pt'] as const
  let router = NextUseRouter()
  let path = NextUsePathname()
  let t = useTranslations('configs')
  return (
    <Select
      onValueChange={e => {
        router.replace(path, { locale: e })
        Cookies.set('NEXT_LOCALE', e)
      }}
    >
      <SelectTrigger className='w-[8.5rem] border-none shadow-none'>
        <SelectValue
          placeholder={
            <Lang
              locale={t('locale')}
              name={t(`languages.${t('locale')}.name`)}
            />
          }
        />
      </SelectTrigger>
      <SelectContent>
        {languages.map((it: string, i: number) => {
          return (
            <SelectItem
              key={i}
              value={t(`languages.${it}.code`)}
            >
              <Lang
                locale={t(`languages.${it}.code`)}
                name={t(`languages.${it}.name`)}
              />
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}

export function Lang({ locale, name }: { locale: string; name: string }) {
  let icon = locale === 'en' ? '🇺🇸' : '🇧🇷'
  return (
    <span className='space-x-2'>
      <span>{icon}</span>
      <span>{name}</span>
    </span>
  )
}
