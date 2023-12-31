'use client'
import { Link, LinkProps } from '@nextui-org/react'
import { TLink } from '@/lib/intl'

export function NextLink(props: LinkProps) {
  props.as = TLink
  return <Link {...props}>{props.children}</Link>
}
