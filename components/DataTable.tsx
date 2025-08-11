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
  page?: number,
  currentPage: number,             // controlled current page
  onPageChange: (page: number) => void  // notify parent on page change
}

type SortKey = keyof TableProps["data"][0]
type SortDirection = "asc" | "desc"

export default function DataTable({ data , page, currentPage, onPageChange }: TableProps) {
  const ITEMS_PER_PAGE = page ?? 4
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
    onPageChange(1) // Reset to page 1 on new sort
  }

  const sortedData = React.useMemo(() => {
    return [...data].sort((a, b) => {
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
  }, [data, sortKey, sortDirection])

  const paginatedData = sortedData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  return (
    <div className="overflow-x-auto bg-white pt-2 pb-0 mb-0 px-4 rounded-xl shadow max-md:h-[100%] ">
      <div className="flex items-center justify-between relative w-full max-md:static max-md:gap-5">
        {/* Heading - stick to left */}
        <h2 className="text-lg font-semibold w-fit max-md:text-xl">Recent Signups</h2>

        {/* Pagination */}
        <div className="flex-1 flex justify-between absolute left-1/2 max-lg:left-2/3 transform -translate-x-1/2 max-md:top-2 max-md:left-1/2 max-md:transform max-md:-translate-x-1/2 max-md:h-fit max-md:w-fit">
          <div className="flex items-center gap-4 max-md:text-xs">
            <button
              onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className="px-2 py-1 bg-gray-300 cursor-pointer rounded disabled:opacity-50 "
            >
              Previous
            </button>

            <span className="text-sm text-muted-foreground">
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-2 py-1 bg-gray-300 cursor-pointer rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* data table */}
      <table className="min-w-fit text-sm text-left py-1 my-4 bg-black-500 max-md:text-xs">
        <thead>
          <tr>
            {["name", "email", "revenue", "status", "signupDate"].map((key) => (
              <th
                key={key}
                className="px-4 py-2 cursor-pointer select-none text-left "
                onClick={() => handleSort(key as SortKey)}
              >
                <div className="flex items-center gap-3 capitalize">
                  {key}
                  {sortKey === key && (
                    <span className="text-sm">
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
            <tr key={row.id} className="border-t hover:bg-[#f0ebff] transition-colors">
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
