import type { IconName } from "@/components/Icon.astro"

export type NavItem = {
  title: string
  href: string
}

export type Link = {
  name: string
  href: string
  icon: IconName | (string & {})
}

export type SiteConfig = {
  name: string
  description: string
  url: string
  links: Link[]
}

export type Project = {
  name: string
  description: string
  stacks: string[]
  githubUrl: string
  previewUrl: string
  imageUrl: string
}
