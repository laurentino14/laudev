import * as React from 'react'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { NextUI } from '@/components/NextUI'

export function Providers({ children }: { children: React.ReactNode }) {
  const messages = useMessages()
  return (
    <NextUI>
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </NextUI>
  )
}
