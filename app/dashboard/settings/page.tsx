// app/dashboard/settings/page.tsx
import * as React from "react";

import Navbar from '@/components/Navbar';
import Sidebar from "@/components/Sidebar";

export default function SettingsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at top */}
      <div className="w-[85%] absolute right-0">
        <Navbar />
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="sticky top-0 h-screen overflow-y-auto bg-[#F4F0FF] w-[250px] shadow-lg z-30">
          <Sidebar />
        </aside>

        {/* Main Settings Content */}
        <main className="flex-1 p-4 overflow-y-auto mt-[70px]">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Settings</h2>

            {/* Example Setting Section */}
            <div className="space-y-6">
              {/* Profile Section */}
              <div>
                <h3 className="text-lg font-medium mb-2">Profile</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-300 rounded p-2"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 rounded p-2"
                  />
                </div>
              </div>

              {/* Preferences Section */}
              <div>
                <h3 className="text-lg font-medium mb-2">Preferences</h3>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Enable Notifications
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Dark Mode
                  </label>
                </div>
              </div>

              {/* Save Button */}
              <div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
