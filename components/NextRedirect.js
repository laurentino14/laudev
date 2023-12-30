import { redirect } from '@/lib/intl'

/**
 *@param {string} pathname
 * @param {import('next/navigation').RedirectType | undefined} type
 * @returns {never}
 * @constructor
 */
export function NextRedirect(pathname, type) {
  return redirect(pathname, type)
}
