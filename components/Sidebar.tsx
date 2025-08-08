// app/components/Sidebar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from "react";
import {
  LayoutDashboard,
  BarChart3,
  Settings,
  Menu,
  X
} from 'lucide-react'

const navItems = [
  { name: 'Overview', href: '/dashboard/overview', icon: LayoutDashboard },
  { name: 'Report', href: '/dashboard/report', icon: BarChart3 },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <aside className="h-full w-60 shadow p-6 flex flex-col bg-[#F4F0FF] max-md:w-full max-md:p-3 max-md:static">
      {/* Logo & Hamburger */}
      <div className="flex items-center justify-between max-md:w-full">
        <a href="https://us.admybrand.com/" target='_blank'>
          <Image 
            src="https://us.admybrand.com/assets/svg/web_logo.svg" 
            alt="admybrand Logo" 
            width={134} 
            height={54} 
            className='max-md:w-28'
          />
        </a>
        {/* Hamburger menu button only on mobile */}
        <button 
          className="p-2 md:hidden" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation */}
      <nav
        className={cn(
          "mt-8 space-y-3 md:space-y-3",
          "md:block", // always show on desktop
          isOpen ? "block max-md:mt-4" : "hidden md:block", // toggle on mobile
          "max-md:flex max-md:flex-col max-md:gap-2 max-md:bg-white max-md:rounded-lg max-md:shadow-lg max-md:p-3 max-md:text-sm max-md:w-fit max-md:absolute max-md:top-11 max-md:right-2 max-md:m-0 max-md:z-50 max-md:bg-[ rgba(255, 255, 255)] max-md:text-black"
        )}
      >
        {navItems.map(({ name, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'flex items-center gap-3 px-4 py-2 rounded-md text-gray-700 hover:bg-[#E2DAFF] transition max-md:text-black',
              pathname === href &&
                'bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-medium',
              'max-md:text-sm'
            )}
            onClick={() => setIsOpen(false)} // close menu on click
          >
            <Icon size={18} />
            <span>{name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
