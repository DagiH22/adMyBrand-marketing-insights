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

const ITEMS_PER_PAGE = 10

export default function DataTable({ data }: TableProps) {
  const [currentPage, setCurrentPage] = React.useState(1)

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1)
  }

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1)
  }

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
          {currentData.map((row) => (
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

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-900 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm text-muted-foreground">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-900 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}
