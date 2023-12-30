import { useRouter } from '@/lib/intl'

/**
 *
 * @returns {{push(href: string, options?: ((import('next/dist/shared/lib/app-router-context.shared-runtime').NavigateOptions & IntlNavigateOptions<AllLocales>) | undefined)): void, replace(href: string, options?: ((import('next/dist/shared/lib/app-router-context.shared-runtime').NavigateOptions & IntlNavigateOptions<AllLocales>) | undefined)): void, prefetch(href: string, options?: ((import('next/dist/shared/lib/app-router-context.shared-runtime').PrefetchOptions & IntlNavigateOptions<AllLocales>) | undefined)): void, back(): void, forward(): void, refresh(): void}}
 * @constructor
 */
export function NextUseRouter() {
  return useRouter()
}
