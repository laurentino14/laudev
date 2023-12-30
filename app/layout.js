import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

/** @type {import('next').Metadata} */
export const metadata = {
  title: {
    template: '%s | Lucas Laurentino',
    default: 'Lucas Laurentino - Software Engineer',
  },
  description:
    'Working behind the scenes of technology, my mission is to turn ideas into reality, lines of code into functional applications, and challenges into achievements.',
  metadataBase: 'https://laudev.com.br',
  alternates: {
    canonical: 'https://laudev.com.br/',
    languages: {
      'en-US': 'https://laudev.com.br/en',
      'pt-BR': 'https://laudev.com.br/',
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
  authors: ['Lucas Laurentino'],
  icons: [
    {
      src: 'https://cdn.laudev.com.br/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: 'https://cdn.laudev.com.br/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
