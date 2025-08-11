'use client'
import * as React from "react"

interface TableProps {
  data: {
    id: string
    name: string
    email: string
    revenue: string
    status: string
    signupDate: string
  }[],
  page?: number
}

type SortKey = keyof TableProps["data"][0]
type SortDirection = "asc" | "desc"

export default function DataTable({ data , page }: TableProps) {
  const ITEMS_PER_PAGE = page ?? 4
  const [currentPage, setCurrentPage] = React.useState(1)
  const [sortKey, setSortKey] = React.useState<SortKey>("name")
  const [sortDirection, setSortDirection] = React.useState<SortDirection>("asc")

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE)

  const handleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortDirection(prev => (prev === "asc" ? "desc" : "asc"))
    } else {
      setSortKey(key)
      setSortDirection("asc")
    }
    setCurrentPage(1)
  }

  const sortedData = [...data].sort((a, b) => {
    const aVal = a[sortKey]
    const bVal = b[sortKey]

    const isNumeric = sortKey === "revenue"
    const valA = isNumeric ? parseFloat(aVal.replace(/[^0-9.-]+/g, "")) : aVal.toString().toLowerCase()
    const valB = isNumeric ? parseFloat(bVal.replace(/[^0-9.-]+/g, "")) : bVal.toString().toLowerCase()

    if (valA < valB) return sortDirection === "asc" ? -1 : 1
    if (valA > valB) return sortDirection === "asc" ? 1 : -1
    return 0
  })

  const paginatedData = sortedData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  return (
    <div className="bg-white rounded-xl shadow-md p-4 max-w-full overflow-x-auto">
      <div className="flex md:flex-row items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-3 max-md: md:mb-0">
          Recent Signups
        </h2>

        <div className="flex items-center max-md:absolute top-4 right-2 gap-3 text-gray-700">
          <button
            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-not-allowed transition"
          >
            Previous
          </button>

          <span className="font-medium">
            {currentPage} / {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-not-allowed transition"
          >
            Next
          </button>
        </div>
      </div>

      <table className="w-full min-w-[600px] table-auto border-collapse text-sm md:text-base">
        <thead className="bg-indigo-50">
          <tr>
            {["name", "email", "revenue", "status", "signupDate"].map((key) => (
              <th
                key={key}
                onClick={() => handleSort(key as SortKey)}
                className="cursor-pointer select-none px-4  text-left text-indigo-900 font-semibold tracking-wide hover:text-indigo-700"
              >
                <div className="flex items-center gap-2">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  {sortKey === key && (
                    <span className="text-indigo-600 text-sm select-none">
                      {sortDirection === "asc" ? "▲" : "▼"}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map(row => (
            <tr
              key={row.id}
              className="border-b last:border-none hover:bg-indigo-100 transition-colors"
            >
              <td className="px-4 py-2 text-gray-800">{row.name}</td>
              <td className="px-4 py-2 text-gray-600">{row.email}</td>
              <td className="px-4 py-2 text-indigo-700 font-medium">{row.revenue}</td>
              <td className="px-4 py-2">
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                  row.status.toLowerCase() === "active"
                    ? "bg-green-100 text-green-800"
                    : row.status.toLowerCase() === "pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
                }`}>
                  {row.status}
                </span>
              </td>
              <td className="px-4 py-2 text-gray-500">{row.signupDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
