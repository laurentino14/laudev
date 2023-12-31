import { redirect } from '@/lib/intl'
import { RedirectType } from 'next/navigation'

export function NextRedirect(pathname: string, type?: RedirectType): void {
  return redirect(pathname, type)
}
