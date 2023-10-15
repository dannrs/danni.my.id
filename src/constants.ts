import type { IconType } from "react-icons"
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiLinkedin, SiTwitter, SiGithub, SiProtonmail } from "react-icons/si"

type Stack = {
  name: string,
  href: string,
  Icon: IconType
}

export const SITE_CONFIG: SiteConfig = {
  name: 'Danni Ramdhani',
  description:
    'An enthusiastic web developer with a passion for creating intuitive web experiences',
  url: 'https://danni.my.id',
  links: [
    {
      name: 'Email',
      href: 'mailto:danniramdhani@proton.me',
      Icon: SiProtonmail
    },
    {
      name: 'Github',
      href: 'https://github.com/dannrs',
      Icon: SiGithub
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/danniramdhani',
      Icon: SiLinkedin
    },
    {
      name: 'Twitter/X',
      href: 'https://twitter.com/dannrs__',
      Icon: SiTwitter
    },
  ]
}

export const NAV_LINKS: NavItem[] = [
  {
    title: 'Blog',
    href: '/blog'
  },
  {
    title: 'About',
    href: '/about'
  },
  {
    title: 'Projects',
    href: '/projects'
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'Portfolio',
    description:
      'My personal portfolio site built with Astro, React, TypeScript and Tailwind CSS.',
    stacks: ['Astro', 'React', 'Typescript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/dannrs/portfolio',
    previewUrl: 'https://danni.my.id',
    imageUrl: '/images/projects/portfolio-project-mockup.png'
  },
  {
    name: 'Spotify Search',
    description:
      'A search application that implements the Jaro-Winkler distance algorithm to quickly search data from Spotify.',
    stacks: ['Typescript', 'Next.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/dannrs/spotify-search',
    previewUrl: 'https://spotify-search-seven.vercel.app/',
    imageUrl: '/images/projects/spotify-search-project-mockup.png'
  },
  {
    name: 'Passphrase Generator',
    description:
      'A passphrase generator app that implements the Diceware method to generate strong and memorable passwords.',
    stacks: ['Typescript', 'Next.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/dannrs/passphrase-generator',
    previewUrl: 'https://passphrase-generator-five.vercel.app/',
    imageUrl: '/images/projects/passphrase-generator-project-mockup.png'
  },
  {
    name: 'Portfolio Next',
    description:
      'My old personal portfolio site built with Next.js 13, TypeScript, Tailwind CSS and various other libraries.',
    stacks: ['Typescript', 'Next.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/dannrs/portfolio-next',
    previewUrl: 'https://next.danni.my.id',
    imageUrl: '/images/projects/portfolio-project-mockup.png'
  },
]

export const STACK: Stack[] = [
  {
    name: 'Next.js',
    href: 'https://nextjs.org/',
    Icon: SiNextdotjs
  },
  {
    name: 'Typescript',
    href: 'https://www.typescriptlang.org/',
    Icon: SiTypescript
  },
  {
    name: 'Tailwind CSS',
    href: 'https://tailwindcss.com/',
    Icon: SiTailwindcss
  },
]