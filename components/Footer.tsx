import { NextLink } from '@/components/NextLink'

export function Footer() {
  return (
    <footer className='flex h-10 w-full items-center justify-center space-x-10 text-sm '>
      <NextLink
        href='mailto:laurentino@laudev.com.br'
        target='_blank'
      >
        email
      </NextLink>
      <NextLink
        href='https://github.com/laurentino14'
        target='_blank'
      >
        github
      </NextLink>
      <NextLink
        href='https://linkedin.com/in/laurentinodev'
        target='_blank'
      >
        linkedin
      </NextLink>
      <NextLink
        href='https://instagram.com/laurentinobx'
        target='_blank'
      >
        instagram
      </NextLink>
    </footer>
  )
}
