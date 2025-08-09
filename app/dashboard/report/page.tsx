'use client'

import * as React from 'react'
import { useState, useMemo } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Chart from '@/components/Chart'
import DataTable from '@/components/DataTable'
import { revenueOverTime, conversionsByChannel, trafficSources } from '@/data/mockCharts'
import { tableData as originalData } from '@/data/mockTable'

import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

export default function ReportsPage() {
  const [filter, setFilter] = useState('')
  const filteredData = useMemo(() => {
    if (!filter) return originalData
    return originalData.filter(row =>
      Object.values(row).some(val =>
        String(val).toLowerCase().includes(filter.toLowerCase())
      )
    )
  }, [filter])

  // Export to CSV
  const exportToCSV = () => {
    const headers = Object.keys(originalData[0]) as (keyof typeof originalData[0])[];
    const csvRows = [
      headers.join(','), // header row
      ...filteredData.map(row =>
        headers.map(field => JSON.stringify(row[field] ?? '')).join(',')
      ),
    ];
    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement('a');
    a.href = url;
    a.download = 'report.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  // Export to PDF
  const exportToPDF = () => {
    const doc = new jsPDF()
    doc.text('Report Data', 14, 20)

    const headers = [Object.keys(originalData[0])]
    const data = filteredData.map(row => Object.values(row))

    autoTable(doc, {
      head: headers,
      body: data,
      startY: 30,
    })

    doc.save('report.pdf')
  }

  return (
    <div className="flex max-md:flex-col max-md:relative h-screen overflow-hidden bg-[#F4F0FF]">
      {/* Sticky Sidebar */}
      <aside className="sticky max-md:static top-0 h-100% overflow-y-auto bg-[#F4F0FF] max-md:w-[100%] shadow-lg z-30">
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Scrollable Page Content */}
        <main className="flex-1 p-4 pt-8 max-md:p-2 overflow-y-auto space-y-6 max-md:space-y-4">
          {/* Charts */}
          <div className="w-full col-span-3 h-fit">
              <Chart
                title="Revenue Over Time"
                type="line"
                data={revenueOverTime}
                dataKey="revenue"
                labelKey="month"
                className="h-[205px]"
              />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Chart
              title="Conversions by Channel"
              type="bar"
              data={conversionsByChannel}
              dataKey="conversions"
              labelKey="channel"
            />
            <Chart
              title="Traffic Sources"
              type="pie"
              data={trafficSources}
              dataKey="value"
              labelKey="source"
            />
          </div>

          {/* Filter + Export */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ">
          <input
            type="text"
            value={filter}
            onChange={e => setFilter(e.target.value)}
            placeholder="Filter data..."
            className="px-4 py-2 max-md:p-2 max-md:w-[75%] max-md:px-3 max-md:py-1.5  rounded border border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#06B6D4] w-[25%]"
          />


            <div className="flex gap-2">
              <button
                onClick={exportToCSV}
                className="px-4 py-2 max-md:px-2 max-md:py-1 max-md:text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Export CSV
              </button>
              <button
                onClick={exportToPDF}
                className="px-4 py-2 max-md:px-2 max-md:py-1 max-md:text-sm bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Export PDF
              </button>
            </div>
          </div>

          {/* Data Table */}
          <div className="bg-white  p-4 rounded-xl max-md:relative max-md:p-2 max-md:pt-10 shadow">
            <DataTable data={filteredData} page={10} />
          </div>
        </main>
      </div>
    </div>
  )
}
