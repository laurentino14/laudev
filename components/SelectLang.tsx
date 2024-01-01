'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useMessages } from 'next-intl'
import { NextUseRouter } from '@/components/NextUseRouter'
import { NextUsePathname } from '@/components/NextUsePathname'
import Cookies from 'js-cookie'

export function SelectLang() {
  let messages: any = useMessages()
  let languages = messages.languages
  let router = NextUseRouter()
  let path = NextUsePathname()
  let locale = messages.locale

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
              locale={locale}
              languages={languages}
            />
          }
        />
      </SelectTrigger>
      <SelectContent>
        {languages.map((item: { code: string; name: string }, i: number) => {
          return (
            <SelectItem
              key={i}
              value={item.code}
            >
              <Lang
                locale={item.code}
                languages={languages}
              />
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}

export function Lang({
  locale,
  languages,
}: {
  locale: string
  languages: any
}) {
  let name = languages.find(
    (item: { code: string }) => item.code === locale,
  ).name
  let icon = locale === 'en' ? '🇺🇸' : '🇧🇷'
  return (
    <span className='space-x-2'>
      <span>{icon}</span>
      <span>{name}</span>
    </span>
  )
}
