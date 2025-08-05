'use client'
import * as React from "react";

interface TableProps {
  data: {
    id: string
    name: string
    email: string
    revenue: string
    status: string
    signupDate: string
  }[]
}

export default function DataTable({ data }: TableProps) {
  return (
    <div className="overflow-x-auto bg-card p-4 rounded-xl shadow">
      <table className="min-w-full text-sm text-left">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Revenue</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Signup Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-t">
              <td className="px-4 py-2">{row.name}</td>
              <td className="px-4 py-2">{row.email}</td>
              <td className="px-4 py-2">{row.revenue}</td>
              <td className="px-4 py-2">{row.status}</td>
              <td className="px-4 py-2">{row.signupDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
