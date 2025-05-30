export const SITE_CONFIG: SiteConfig = {
  name: 'Danni Ramdhani',
  description:
    'An enthusiastic web developer with a passion for creating intuitive web experiences',
  url: 'https://danni.my.id',
  links: [
    {
      name: 'Email',
      href: 'mailto:danniramdhani@proton.me',
      icon: 'mdi:email'
    },
    {
      name: 'Github',
      href: 'https://github.com/dannrs',
      icon: 'mdi:github'
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/danniramdhani',
      icon: 'mdi:linkedin'
    },
    {
      name: 'Twitter/X',
      href: 'https://twitter.com/dannrs__',
      icon: 'mdi:twitter'
    }
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
  }
]

export const PROJECTS: Project[] = [
  {
    name: 'Oprec FOJB',
    description:
      'A full-stack web application for the FOJB open recruitment program.',
    stacks: [
      'Next.js',
      'React',
      'Typescript',
      'Tailwind CSS',
      'Drizzle ORM',
      'PostgreSQL',
      'Docker'
    ],
    githubUrl: 'https://github.com/dannrs/oprec',
    previewUrl: 'https://oprec.forumosisjabar.id',
    imageUrl: '/images/projects/portfolio-astro-project-mockup.png'
  },
  {
    name: 'Vulse',
    description:
      'A full stack web application for sharing favorite Spotify music.',
    stacks: [
      'Next.js',
      'React',
      'Typescript',
      'Tailwind CSS',
      'Drizzle ORM',
      'PostgreSQL',
      'tRPC'
    ],
    githubUrl: 'https://github.com/dannrs/vulse',
    previewUrl: 'https://vulse.vercel.app/dannrs',
    imageUrl: '/images/projects/portfolio-astro-project-mockup.png'
  },
  {
    name: 'Portfolio',
    description:
      'My personal portfolio site built with Astro, React, TypeScript and Tailwind CSS.',
    stacks: ['Astro', 'React', 'Typescript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/dannrs/portfolio',
    previewUrl: 'https://danni.my.id',
    imageUrl: '/images/projects/portfolio-astro-project-mockup.png'
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
    imageUrl: '/images/projects/portfolio-next-project-mockup.png'
  }
]
