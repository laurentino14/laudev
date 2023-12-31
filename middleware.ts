import createIntlMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'

export default function middleware(request: NextRequest) {
  const defaultLocale = request.headers.get('x-your-custom-locale') || 'en'
  // Other implementations here

  const handleI18nRouting = createIntlMiddleware({
    locales: ['en', 'pt'],
    defaultLocale: defaultLocale,
    localePrefix: 'as-needed',
  })
  const response = handleI18nRouting(request)
  response.headers.set('x-your-custom-locale', defaultLocale)
  return response
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
