import { ReactNode } from 'react'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)
  return <>{children}</>
}

const locales = ['en', 'pt']

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}
