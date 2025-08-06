'use client'

import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/Button" // Or any button component you have
import { Sun, Moon } from 'lucide-react'

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-light-background text-light-TextPrimary dark:bg-dark-background dark:text-dark-TextPrimary shadow">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <Button variant="ghost" onClick={toggleTheme}>
        {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
      </Button>
    </nav>
  )
}
