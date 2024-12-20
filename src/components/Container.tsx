import { ReactElement } from 'react'
import { twMerge } from 'tailwind-merge'

export default function Container({
  children,
  className
}: {
  children: ReactElement | ReactElement[]
  className?: string
}) {
  return (
    <div
      className={twMerge(
        'container mx-auto custom_xxl:!max-w-[1400px] custom_xl:max-w-[1376px] w-full px-4 lg:px-0 lg:pt-0 pt-[88px]',
        className
      )}
    >
      {children}
    </div>
  )
}
