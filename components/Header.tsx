'use client'
import { useMessages } from 'next-intl'
import { NextLink } from '@/components/NextLink'
import { cn } from '@/lib/utils'
import { NextUsePathname } from '@/components/NextUsePathname'
import { motion } from 'framer-motion'
import { SelectLang } from '@/components/SelectLang'
import { GitHub } from '@/components/icons/GitHub'
import { SwitchTheme } from '@/components/SwitchTheme'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Gear } from '@/components/icons/Gear'
import { Squash as Hamburger } from 'hamburger-react'
import { useEffect, useState } from 'react'

export function Header() {
  let messages: any = useMessages()
  let menu = messages.header.menu
  let drawer = messages.header.drawer
  const [windowVW, setWindowVW] = useState<number>(0)
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowVW(window.innerWidth)
    })

    return () => {
      window.removeEventListener('resize', () => {
        setWindowVW(window.innerWidth)
      })
    }
  }, [])
  useEffect(() => {
    windowVW > 1024 && setOpen(false)
  }, [windowVW])
  let [open, setOpen] = useState<boolean>(false)
  let path = NextUsePathname()
  return (
    <header
      className={cn(
        'z-10 box-border flex w-full flex-col overflow-hidden bg-background px-4 transition-colors sm:px-10 md:px-20',
        {
          'fixed -mt-1 h-screen ': open,
          'sticky h-16': !open,
        },
      )}
    >
      <div className='mt-2 flex h-16 w-full items-center justify-between '>
        <NextLink
          href='https://elevatt.tech'
          target='_blank'
          className='bg-background transition-colors'
        >
          <Image
            src='https://cdn.laudev.com.br/logo-h.png'
            width={152}
            height={20}
            className='mix-blend-difference'
            priority
            quality={100}
            alt='Logomarca Elevatt'
          />
        </NextLink>
        <nav className='hidden lg:flex'>
          {menu.map((item: { href: string; text: string }, i: number) => {
            const isActive = path === item.href
            return (
              <NextLink
                className={cn('relative ', {
                  'font-medium': isActive,
                })}
                key={i}
                href={item.href}
              >
                <div className='relative px-2'>
                  <span
                    className={cn(
                      'text-neutral-400 mix-blend-exclusion dark:text-foreground',
                      {
                        'hover:text-white dark:hover:text-white/80': !isActive,
                      },
                    )}
                  >
                    {item.text}
                  </span>
                  {isActive && (
                    <motion.div
                      transition={{
                        duration: 0.5,
                        type: 'spring',
                        bounce: 0.5,
                      }}
                      layoutId='header-active'
                      className='absolute bottom-0 left-0 z-[-1] h-full w-full rounded-full bg-black dark:bg-white '
                    />
                  )}
                </div>
              </NextLink>
            )
          })}
        </nav>
        <div className='hidden items-center space-x-4 lg:flex'>
          <SelectLang />
          <NextLink
            href='https://github.com/laurentino14'
            target='_blank'
          >
            <Button
              variant='ghost'
              className='h-[2.188rem] w-[2.188rem] rounded-full px-0 py-0'
            >
              <GitHub
                className='text-foreground transition'
                width={20}
                height={20}
              />
            </Button>
          </NextLink>
          <SwitchTheme />
        </div>
        <div className='flex w-[9.5rem] items-center justify-end gap-10 lg:hidden'>
          <div>
            <Drawer>
              <DrawerTrigger asChild>
                <Button
                  className='h-[2.188rem] w-[2.188rem] rounded-full px-0 py-0'
                  variant='ghost'
                >
                  <Gear
                    width={20}
                    height={20}
                  />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle className='mt-4 text-center'>
                    {drawer.title}
                  </DrawerTitle>
                </DrawerHeader>
                <div className='flex items-center justify-center space-x-10 py-10'>
                  <div className='flex flex-col items-center justify-center space-y-2'>
                    <h3 className=' text-sm font-medium text-foreground'>
                      {drawer.languages}
                    </h3>
                    <SelectLang />
                  </div>
                  <div className='space-y-2 text-center'>
                    <h3 className=' text-sm font-medium text-foreground'>
                      {drawer.mode}
                    </h3>
                    <SwitchTheme />
                  </div>
                </div>
                <DrawerFooter>
                  <DrawerClose>
                    <Button className='w-full'>{drawer.close}</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
          <Hamburger
            size={25}
            duration={0.2}
            onToggle={setOpen}
            toggled={open}
          />
        </div>
      </div>

      <nav
        className={cn('flex  flex-1 flex-col gap-4 text-foreground', {
          hidden: !open,
        })}
      >
        {menu.map((item: { href: string; text: string }, i: number) => {
          const isActive = path === item.href
          return (
            <NextLink
              onClick={e => setOpen(false)}
              className={cn('relative mt-5 ', {
                'font-medium': isActive,
              })}
              key={'menu-' + i}
              href={item.href}
            >
              <div className='relative px-4 py-4 text-end'>
                <span
                  className={cn(
                    '  text-neutral-400 mix-blend-exclusion dark:text-foreground',
                    {
                      'hover:text-white dark:hover:text-white/80': !isActive,
                    },
                  )}
                >
                  {item.text}
                </span>
                {isActive && (
                  <motion.div className='absolute bottom-0 left-0 z-[-1] h-full w-full rounded-lg bg-black dark:bg-white ' />
                )}
              </div>
            </NextLink>
          )
        })}
      </nav>
    </header>
  )
}
