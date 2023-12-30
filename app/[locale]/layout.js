import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Providers } from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

/** @type {import('next').Metadata} */
export const metadata = {
  title: {
    template: '%s | Lucas Laurentino',
    default: 'Lucas Laurentino - Software Engineer',
  },
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  publisher: 'Sebastian Markbåge',
  description:
    'Working behind the scenes of technology, my mission is to turn ideas into reality, lines of code into functional applications, and challenges into achievements.',
  metadataBase: 'https://laudev.com.br',
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
  },

  siteName: 'Lucas Laurentino - Software Engineer',
  images: [
    {
      url: 'https://cdn.laudev.com.br/og.png', // Must be an absolute URL
      width: 800,
      height: 600,
    },
    {
      url: 'https://cdn.laudev.com.br/og-alt.png', // Must be an absolute URL
      width: 1800,
      height: 1600,
      alt: 'My custom alt',
    },
  ],
  twitter: {
    card: 'summary_large_image',
    title: 'Lucas Laurentino - Software Engineer',
    description:
      'Working behind the scenes of technology, my mission is to turn ideas into reality, lines of code into functional applications, and challenges into achievements.',
    siteId: '1522723457745752066',
    creator: '@laurentinodev',
    creatorId: '1522723457745752066',
    images: ['https://cdn.laudev.com.br/og.png'], // Must be an absolute URL
  },
  category: 'technology',
  creator: 'Lucas Laurentino',
  authors: [{ name: 'Lucas Laurentino', url: 'https://laudev.com.br' }],
  icons: {
    icon: 'https://cdn.laudev.com.br/icon-512x512.png',
  },
}
