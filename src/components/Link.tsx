import ArrowUpRight from "virtual:icons/lucide/arrow-up-right"
import { cn } from "@/lib/utils"

interface LinkProps {
  href: string
  children: React.ReactNode
  "aria-label": string
  className?: string
}

export default function Link({
  className,
  href,
  children,
  "aria-label": ariaLabel
}: LinkProps) {
  const isExternal = href.startsWith("http")

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : "_self"}
      className={cn(
        "duration-200 m-0 inline-flex bg-linear-to-b from-accent to-accent bg-bottom bg-no-repeat no-underline transition-[background-size,color] hover:bg-size-[100%_100%] dark:text-[#f1f0ed]",
        isExternal ? "bg-size-[100%_2px]" : "bg-size-[100%_0px]",
        className
      )}
      aria-label={ariaLabel}
    >
      {isExternal ? (
        <>
          {children}
          <ArrowUpRight className="inline size-5 self-center" />
        </>
      ) : (
        <>
          <span className="text-accent">[[</span>
          {children}
          <span className="text-accent">]]</span>
        </>
      )}
    </a>
  )
}
