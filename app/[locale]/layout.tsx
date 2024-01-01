import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Providers } from '@/components/Providers'
import { Metadata } from 'next'
import { HeaderProvider } from '@/components/HeaderProvider'
import { cookies } from 'next/headers'
import { cn } from '@/lib/utils'
import { Footer } from '@/components/Footer'
import * as React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const theme = cookies().get('theme')

  return (
    <html
      lang={params.locale}
      className={theme ? theme.value : ''}
    >
      <body className={cn(inter.className, 'transition-colors')}>
        <div className=' flex min-h-screen flex-col  bg-contain bg-top bg-no-repeat'>
          <Providers>
            <HeaderProvider locale={params.locale} />
            {children}
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: {
    template: '%s | Lucas Laurentino',
    default: 'Lucas Laurentino - Software Engineer',
  },
  generator: 'Next.js',
  applicationName: 'Lucas Laurentino - Software Engineer',
  keywords: [
    'GoLang',
    'Go',
    'Technology',
    'Clean Architecture',
    'Next.js',
    'React',
    'JavaScript',
    'TypeScript',
    'Software Engineer',
    'Software Developer',
    'Software Architect',
    'Software Development',
    'Software Architecture',
    'Software Design',
    'Software Engineering',
    'DevOps',
    'DevOps Engineer',
    'DevOps Engineering',
    'DevOps Architecture',
    'DevOps Design',
    'Cloud',
    'Cloud Engineer',
    'Cloud Engineering',
    'Cloud Architecture',
    'Cloud Design',
    'Cloud Computing',
    'Cloud Development',
    'AWS',
    'Amazon Web Services',
    'Azure',
    'Microsoft Azure',
    'GCP',
    'Google Cloud Platform',
    'Google Cloud',
  ],
  publisher: 'Lucas Laurentino',
  description:
    'Working behind the scenes of technology, my mission is to turn ideas into reality, lines of code into functional applications, and challenges into achievements.',
  metadataBase: new URL('https://laudev.com.br'),
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      pt: '/pt',
    },
  },
  openGraph: {
    title: 'Lucas Laurentino - Software Engineer',
    description:
      'Working behind the scenes of technology, my mission is to turn ideas into reality, lines of code into functional applications, and challenges into achievements.',
    url: 'https://laudev.com.br',
    type: 'website',
    emails: ['contato@laudev.com.br'],
    siteName: 'Lucas Laurentino - Software Engineer',
    alternateLocale: ['en', 'pt'],
    countryName: 'Brazil',
    phoneNumbers: ['+55 (21) 9 8672-5250'],

    images: [
      {
        url: 'https://cdn.laudev.com.br/og.png',
        width: 800,
        height: 600,
        type: 'image/png',
      },
      {
        url: 'https://cdn.laudev.com.br/og-alt.png',
        width: 1800,
        height: 1600,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucas Laurentino - Software Engineer',
    description:
      'Working behind the scenes of technology, my mission is to turn ideas into reality, lines of code into functional applications, and challenges into achievements.',
    site: '@laurentinodev',
    siteId: '1522723457745752066',
    creator: '@laurentinodev',
    creatorId: '1522723457745752066',
    images: [
      {
        url: 'https://cdn.laudev.com.br/og.png',
        width: 800,
        height: 600,
        type: 'image/png',
      },
      {
        url: 'https://cdn.laudev.com.br/og-alt.png',
        width: 1800,
        height: 1600,
        type: 'image/png',
      },
    ],
  },
  category: 'technology',
  classification: 'Software Engineer',
  formatDetection: {
    telephone: true,
    url: true,
    email: true,
  },
  robots: 'index, follow',
  appLinks: {
    web: { url: 'https://laudev.com.br' },
  },
  creator: 'Lucas Laurentino',
  authors: [{ name: 'Lucas Laurentino', url: 'https://laudev.com.br' }],
  icons: [
    {
      url: 'https://cdn.laudev.com.br/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      url: 'https://cdn.laudev.com.br/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
}
