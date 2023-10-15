import { cn } from "@/lib/utils"

interface LinkProps {
  href: string
  children: React.ReactNode
  'aria-label': string
  className?: string
}

export default function Link({ className, href, children, "aria-label": ariaLabel }: LinkProps) {
  const isExternal = href.startsWith('http')

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : '_self'}
      className={cn('underline decoration-muted decoration-2 underline-offset-[3px] duration-200 hover:decoration-muted-3 group-hover:decoration-muted-3 text-foreground', className)}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}
