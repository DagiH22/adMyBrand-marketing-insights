'use client'

// import { useTheme } from 'next-themes'
import { User } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  
  const pageTitle = (() => {
    if (pathname === '/dashboard/settings') return 'Settings'
    if (pathname === '/dashboard/report') return 'Reports'
    return 'Dashboard'
  })()
  // const { theme, setTheme } = useTheme()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow relative">
      <h1 className="text-xl font-bold">{pageTitle}</h1>


      <div className="relative" ref={dropdownRef}>
        {/* User Icon Button */}
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
          className="focus:outline-none"
        >
          <User className="w-6 h-6" />
        </button>

        {/* Dropdown */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-whiterounded-md shadow round-xl z-50">
            <ul className="py-1 text-sm text-black">
              <li>
                <Link
                  href="/settings"
                  className="block px-4 py-2 hover:bg-[#E2DAFF]"
                  onClick={() => setDropdownOpen(false)}
                >
                  Settings
                </Link>
              </li>
              <li>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-[#E2DAFF]"
                  onClick={() => {
                    setDropdownOpen(false)
                    // add your logout logic here
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
