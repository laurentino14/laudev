'use client'
import { createSharedPathnamesNavigation } from 'next-intl/navigation'

export const locales = ['en', 'pt']
export const localePrefix = 'as-needed' // Default
const { Link, usePathname, useRouter, redirect } =
  createSharedPathnamesNavigation({ locales, localePrefix })

export { Link as TLink, usePathname, useRouter, redirect }
