'use client'
import { Button } from '@/components/ui/button'
import Cookies from 'js-cookie'
import { Sun } from '@/components/icons/Sun'

export function SwitchTheme() {
  return (
    <Button
      onClick={e => {
        e.preventDefault()
        let html = document.querySelector('html')
        html!.classList.toggle('dark')
        let check = html!.classList.contains('dark') ? 'dark' : 'light'
        if (check === 'dark') {
          Cookies.set('theme', 'dark')
        } else {
          Cookies.remove('theme')
        }
      }}
      variant='ghost'
      className='h-[35px] w-[35px] rounded-full px-0 py-0'
    >
      <Sun
        className='text-foreground transition'
        width={20}
        height={20}
      />
    </Button>
  )
}
