import { create } from 'zustand'

type HeaderStore = {
  locale: string
  setLocale: (locale: string) => void
  menu: MenuItem[]
  setMenu: (menu: MenuItem[]) => void
  languages: { name: string; code: string }[]
  drawer: any
  setDrawer: (drawer: any) => void
}
export const useHeaderStore = create<HeaderStore>(set => ({
  locale: '',
  setLocale: (locale: string) => set({ locale }),
  menu: [],
  setMenu: (menu: MenuItem[]) => set({ menu }),
  languages: [
    {
      name: 'English',
      code: 'en',
    },
    {
      name: 'Português',
      code: 'pt',
    },
  ],
  drawer: null,
  setDrawer: (drawer: any) => set({ drawer }),
}))

type MenuItem = {
  text: string
  href: string
}

type Drawer = {
  title: string
  languages: string
  mode: string
  close: string
}
