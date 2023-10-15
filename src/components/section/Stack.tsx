import { Globe2 } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import Link from '@/components/Link'
import { STACK } from '@/constants'

export function Stack() {
  return (
    <div>
      <h2 className='font-heading text-xl'>
        <div className='flex items-center gap-1'>
          <Globe2 className='h-5 w-5' />
          <span>Stack</span>
        </div>
      </h2>
      <p className='pb-2 text-sm text-foreground-3'>
        My preferred tech stack for web development
      </p>
      <div className='flex flex-wrap gap-8 pt-4'>
        {STACK.map(({ name, href, Icon }) => (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link href={href} aria-label={`Open ${name} website`}>
                  <Icon className='h-6 w-6' />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  )
}
