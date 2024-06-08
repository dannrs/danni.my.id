import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'

interface LinkProps {
  href: string
  children: React.ReactNode
  'aria-label': string
  className?: string
}

export default function Link({
  className,
  href,
  children,
  'aria-label': ariaLabel
}: LinkProps) {
  const isExternal = href.startsWith('http')

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : '_self'}
      className={cn(
        'duration-800 m-0 inline-flex bg-gradient-to-b from-accent to-accent bg-[0_100%] bg-no-repeat no-underline transition-[background-size,color] hover:bg-[length:100%_100%] dark:text-[#f1f0ed]',
        isExternal ? 'bg-[length:100%_2px]' : 'bg-[length:100%_0px]',
        className
      )}
      aria-label={ariaLabel}
    >
      {isExternal ? (
        <>
          {children}
          <ArrowUpRight className='inline h-5 w-5 self-center' />
        </>
      ) : (
        <>
          <span className='text-accent'>[[</span>
          {children}
          <span className='text-accent'>]]</span>
        </>
      )}
    </a>
  )
}
