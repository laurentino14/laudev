import { Spinner } from '@nextui-org/spinner'

export default function Loading() {
  return (
    <div className='flex w-full flex-1 items-center justify-center'>
      <Spinner
        classNames={{
          wrapper: 'h-72 w-72',
          circle1: 'border-b-foreground border-b-5',
          circle2: 'border-b-foreground/70 border-b-5',
        }}
        color='danger'
        size='lg'
      />
    </div>
  )
}
