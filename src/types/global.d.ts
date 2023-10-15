type NavItem = {
  title: string
  href: string
}

type Link = {
  name: string
  href: string
  Icon?: IconType
}

type SiteConfig = {
  name: string
  description: string
  url: string
  links: Link[]
}

type Project = {
  name: string
  description: string
  stacks: string[]
  githubUrl: string
  previewUrl: string
  imageUrl: string
}
