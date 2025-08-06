// app/components/Sidebar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import {
  LayoutDashboard,
  BarChart3,
  Settings
} from 'lucide-react'

const navItems = [
  { name: 'Overview', href: '/dashboard/overview', icon: LayoutDashboard },
  { name: 'Report', href: '/dashboard/report', icon: BarChart3 },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="h-186 w-60  shadow p-6 flex flex-col">
      <h1 className="text-xl font-bold mb-10 text-black ">
        <a href="https://us.admybrand.com/" target='_blank'>
          <Image src="https://us.admybrand.com/assets/svg/web_logo.svg" alt="admybrand Logo" width={134} height={54}/>
          </a>
        
      </h1>

      <nav className="space-y-3">
        {navItems.map(({ name, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'flex items-center gap-3 px-4 py-2 rounded-md text-gray-700  hover:bg-[#E2DAFF] transition',
              pathname === href &&
                'bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-medium'
            )}
          >
            <Icon size={18} />
            <span>{name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
