import { Link } from '@nextui-org/react'
import { TLink } from '@/lib/intl'

/**
 *
 * @param {import('@nextui-org/react').LinkProps} props
 * @returns {import('@nextui-org/link').Link} link
 * @constructor
 */
export function NextLink(props) {
  return (
    <Link
      as={TLink}
      {...props}
    >
      {props.children}
    </Link>
  )
}
