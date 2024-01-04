'use client'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
} from '@/components/ui/dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { NextUseRouter } from '@/components/NextUseRouter'
import { Article } from '@/utils/getArticle'

export function ModalRead({ data }: { data: Article }) {
  let router = NextUseRouter()
  let [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    if (!isOpen) {
      router.back()
    }
  }, [isOpen, router])

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
      defaultOpen={true}
    >
      <DialogPortal>
        <DialogContent
          className='max-w-7xl'
          removeCloseIcon
        >
          <DialogHeader>
            <div className='relative flex w-full items-center justify-between'>
              <h1 className='text-2xl font-bold'>{data.title}</h1>
              <DialogClose
                className='rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'
                onClick={e => router.back()}
              >
                <>
                  <Cross2Icon className='h-4 w-4' />
                  <span className='sr-only'>Close</span>
                </>
              </DialogClose>
            </div>
            <DialogDescription className='text-pretty text-left'>
              {data.date.distance}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </DialogPortal>
      <DialogOverlay className='bg-foreground/50 backdrop-blur-[1px]' />
    </Dialog>
  )
}
