"use client"

import React from "react"
import { FaMoon, FaSun, FaUserCircle } from "react-icons/fa"

export default function Navbar() {
  const [theme, setTheme] = React.useState<"light" | "dark">("light")

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light")
    // You'd also toggle a CSS class on <html> or <body> for dark mode styles
  }

  return (
    <div className="w-full px-6 py-4 flex items-center justify-between border-b bg-white dark:bg-gray-900 sticky top-0 z-30">
      <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Dashboard</h1>

      <div className="flex items-center gap-4">
        <button
          aria-label="Toggle Theme"
          onClick={toggleTheme}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>

        <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300">
          <FaUserCircle size={20} />
        </div>
      </div>
    </div>
  )
}
