"use client"

import React from "react"
import { Moon, Sun, User } from "lucide-react"

export default function Navbar() {
  const [theme, setTheme] = React.useState<"light" | "dark">("light")

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light")
    // You'd also toggle a CSS class on <html> or <body> for dark mode styles
  }

  return (
    <div className="w-full px-6 py-4 flex items-center justify-between border-b bg-white dark:bg-gray-900 sticky top-0 z-30 m-0">
      <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Dashboard</h1>

      <div className="flex items-center gap-4">
        <button
          aria-label="Toggle Theme"
          onClick={toggleTheme}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300">
          <User size={20} />
        </div>
      </div>
    </div>
  )
}
