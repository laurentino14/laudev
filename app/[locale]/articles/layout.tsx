import { ReactNode } from 'react'

export default function RootLayout(props: {
  children: ReactNode
  modal: ReactNode
}) {
  return (
    <>
      {props.children}
      {props.modal}
    </>
  )
}
