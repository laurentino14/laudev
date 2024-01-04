'use client'
import { NextUIProvider } from '@nextui-org/system'
import { ReactNode } from 'react'

export function NextUI({ children }: { children: ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>
}
