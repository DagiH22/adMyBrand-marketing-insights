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
  }[]
}

const ITEMS_PER_PAGE = 10

type SortKey = keyof TableProps["data"][0]
type SortDirection = "asc" | "desc"

export default function DataTable({ data }: TableProps) {
  const [currentPage, setCurrentPage] = React.useState(1)
  const [sortKey, setSortKey] = React.useState<SortKey>("name")
  const [sortDirection, setSortDirection] = React.useState<SortDirection>("asc")

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE)

  const handleSort = (key: SortKey) => {
    if (key === sortKey) {
      // Toggle direction if same column is clicked again
      setSortDirection(prev => (prev === "asc" ? "desc" : "asc"))
    } else {
      // New sort column
      setSortKey(key)
      setSortDirection("asc")
    }
    setCurrentPage(1) // Reset to page 1 on new sort
  }

  const sortedData = [...data].sort((a, b) => {
    const aVal = a[sortKey]
    const bVal = b[sortKey]

    // Handle numeric sort if revenue
    const isNumeric = sortKey === "revenue"
    const valA = isNumeric ? parseFloat(aVal.replace(/[^0-9.-]+/g, "")) : aVal
    const valB = isNumeric ? parseFloat(bVal.replace(/[^0-9.-]+/g, "")) : bVal

    if (valA < valB) return sortDirection === "asc" ? -1 : 1
    if (valA > valB) return sortDirection === "asc" ? 1 : -1
    return 0
  })

  const paginatedData = sortedData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  // const renderSortArrow = (key: SortKey) => {
  //   if (sortKey !== key) return null
  //   return sortDirection === "asc" ? "^" : "˅"
  // }

  return (
    <div className="overflow-x-auto bg-card p-4 rounded-xl shadow">
      <table className="min-w-full text-sm text-left">
      <thead>
  <tr>
    {["name", "email", "revenue", "status", "signupDate"].map((key) => (
      <th
        key={key}
        className="px-4 py-2 cursor-pointer select-none text-left"
        onClick={() => handleSort(key as SortKey)}
      >
        <div className="flex items-center gap-3 capitalize">
          {key}
          {sortKey === key && (
            <span className="text-xs">
              {sortDirection === "asc" ? "^" : "˅"}
            </span>
          )}
        </div>
      </th>
    ))}
  </tr>
</thead>



        <tbody>
          {paginatedData.map((row) => (
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
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm text-muted-foreground">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}
