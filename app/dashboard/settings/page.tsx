// app/dashboard/settings/page.tsx

'use client'

import { useState, useEffect } from 'react'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/Button'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default function SettingsPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [editing, setEditing] = useState(false)
  const [notifications, setNotifications] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedName = localStorage.getItem('user_name') || 'John Doe'
    const savedEmail = localStorage.getItem('user_email') || 'johndoe@email.com'
    const savedNotifications = localStorage.getItem('notifications') === 'true'
    const savedDarkMode = localStorage.getItem('dark_mode') === 'true'

    setName(savedName)
    setEmail(savedEmail)
    setNotifications(savedNotifications)
    setDarkMode(savedDarkMode)
  }, [])

  useEffect(() => {
    localStorage.setItem('notifications', String(notifications))
  }, [notifications])

  useEffect(() => {
    localStorage.setItem('dark_mode', String(darkMode))
  }, [darkMode])

  const handleSave = () => {
    localStorage.setItem('user_name', name)
    localStorage.setItem('user_email', email)
    setEditing(false)
  }

  return (
    <div className="flex max-md:flex-col max-md:relative h-screen bg-[#F4F0FF]">
      <aside className="sticky max-md:static top-0 h-screen max-md:h-fit max-md:w-[100%] overflow-y-auto bg-[#F4F0FF] shadow-lg z-30">
        <Sidebar />
      </aside>
      <div className="flex-1  bg-[#F4F0FF]">
        <div className="p-4 pt-8 max-md:p-2 space-y-6 max-md:space-y-4">
          <div className="flex justify-between items-start w-[40%] max-md:w-[100%]">
            <div>
              <h1 className="text-2xl font-bold mb-1">Settings</h1>
              <p className="text-sm text-muted-foreground">Manage your preferences</p>
            </div>
            {!editing && (
              <button onClick={() => setEditing(true)}  className='max-md:mr-3 text-black 
              inline-flex items-center justify-center rounded-md bg-px-3 px-3 py-1.5 text-sm font-medium cursor-pointer disabled:opacity-50 disabled:pointer-events-none'>
                Edit
              </button>
            )}
          </div>

          <div className="p-6 rounded-xl shadow space-y-6 w-[40%] max-md:w-[100%] bg-[#FAF9FF]">
            <div className="space-y-2">
              <label className="block font-semibold text-sm">Name</label>
              <input
                type="text"
                value={name}
                disabled={!editing}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none"
              />
            </div>

            <div className="space-y-2 ">
              <label className="block font-semibold text-sm">Email</label>
              <input
                type="email"
                value={email}
                disabled={!editing}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none"
              />
            </div>

            {editing && (
              <button onClick={handleSave} className="mt-4 inline-flex items-center justify-center rounded-md bg-px-3 px-3 py-1.5 text-sm font-medium  bg-blue-600
                 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer disabled:opacity-50 disabled:pointer-events-none" >
                Save
              </button>
            )}
          </div>

          <div className=" p-6 rounded-xl shadow space-y-6 w-[40%] max-md:w-[100%] bg-[#FAF9FF]">
            <h2 className="text-lg font-bold">Preferences</h2>

            <div className="flex items-center justify-between">
              <label>Enable Notifications</label>
              <Switch
                checked={notifications}
                onCheckedChange={setNotifications}
                className={notifications ? 'bg-blue-500' : 'bg-gray-300'}
                
              />
            </div>

            <div className="flex items-center justify-between">
              <label>Dark Mode</label>
              <Switch
                checked={darkMode}
                onCheckedChange={setDarkMode}
                className={darkMode ? 'bg-blue-500' : ''}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
