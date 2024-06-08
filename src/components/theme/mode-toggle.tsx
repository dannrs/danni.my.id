import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'

function setTheme(theme: string) {
  const currentTheme = localStorage.getItem('theme') ?? 'dark'
  document.documentElement.classList.remove(currentTheme)

  document.documentElement.classList.add(theme)
  localStorage.setItem('theme', theme)
}

export function ModeToggle() {
  const initialTheme = localStorage.getItem('theme') ?? 'dark'
  const [currentTheme, setCurrentTheme] = useState(initialTheme)

  // const theme = currentTheme === 'light' ? 'dark' : 'light'
  const theme = currentTheme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    setTheme(currentTheme)
    const handleAfterSwap = () => setTheme(currentTheme)
    document.addEventListener('astro:after-swap', handleAfterSwap)

    return () => {
      document.removeEventListener('astro:after-swap', handleAfterSwap)
    }
  }, [currentTheme])

  const toggleTheme = () => {
    setCurrentTheme(theme)
  }

  return (
    <Button variant='transparent' size='icon-md' onClick={toggleTheme}>
      {currentTheme === 'dark' ? (
        <Moon className='h-[1rem] w-[1rem]' />
      ) : (
        <Sun className='h-[1rem] w-[1rem]' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
