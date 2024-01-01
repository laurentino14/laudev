import { NextIntlClientProvider, useMessages } from 'next-intl'
import { Header } from '@/components/Header'

export function HeaderProvider({ locale }: { locale: string }) {
  const headerMessages: any = useMessages()
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={{
        header: {
          menu: headerMessages.Header.menu,
          drawer: headerMessages.Header.drawer,
        },
        languages: headerMessages.Languages,
        locale,
      }}
    >
      <Header />
    </NextIntlClientProvider>
  )
}
