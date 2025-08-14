import eteamupLogo from '@/images/eteamup-logo.png'
import Image from 'next/image'

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <Image src={eteamupLogo} alt="Logo" width={109} height={40} {...props} />
  )
}
