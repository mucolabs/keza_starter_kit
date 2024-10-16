import { InertiaLinkProps, Link } from '@inertiajs/react'
import { cn } from '~/utils/css'

type LogoProps = InertiaLinkProps & {}

export function Logo({ href = '/', className, ...restProps }: LogoProps) {
  return (
    <h1 className={cn('font-pacifico text-3xl font-bold', className)}>
      <Link href={href} {...restProps}>
        keza<span className="text-brand-500">.</span>
      </Link>
    </h1>
  )
}
