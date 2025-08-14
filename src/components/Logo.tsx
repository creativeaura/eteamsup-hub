import eteamupLogo from '@/images/eteamup-logo.png'
import Image, { type ImageProps } from 'next/image'

export function Logo(
  props: Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'>,
) {
  return (
    <Image src={eteamupLogo} alt="Logo" width={109} height={40} {...props} />
  )
}
