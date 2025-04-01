import Image from 'next/image'
import { ComponentProps } from 'react'

type NextImageProps = Omit<ComponentProps<typeof Image>, 'fetchPriority'>

export function NextImage(props: NextImageProps) {
  return <Image {...props} />
} 