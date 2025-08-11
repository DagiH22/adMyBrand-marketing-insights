// app/dashboard/overview/page.tsx
'use client'
import * as React from "react";
import { useState } from "react";
import { metrics } from '@/data/mockMetrics'
import { revenueOverTime, conversionsByChannel, trafficSources } from '@/data/mockCharts'
import { tableData } from '@/data/mockTable'
import MetricCard from '@/components/MetricCard'
import Chart from '@/components/Chart'
import DataTable from '@/components/DataTable'
import Sidebar from "@/components/Sidebar";

export default function DashboardPage() {
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <div className="flex max-md:flex-col max-md:relative h-screen overflow-hidden bg-[#F4F0FF]">
      {/* Sticky Sidebar */}
      <aside className="sticky max-md:static top-0 h-full overflow-y-auto bg-[#F4F0FF] max-md:w-[100%] shadow-lg z-30">
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <main className="flex-1 p-4 pt-8 max-md:p-2 overflow-y-auto space-y-6">
          {/* KPI + Line Chart */}
          <div className="grid lg:grid-cols-4 max-lg:grid-cols-1 max-2xl:grid-cols-5 gap-4 w-full">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 h-[100%] gap-y-6 sm:grid-cols-2 gap-2 max-md:grid-cols-2 max-2xl:col-span-2 max-md:w-fit max-md:gap-4 max-md:mt-2">
              {metrics.map((metrics) => (
                <MetricCard
                  className="h-fit max-md:h-[100px]"
                  key={metrics.title}
                  title={metrics.title}
                  value={metrics.value}
                  change={metrics.change}
                  icon={metrics.icon}
                />
              ))}
            </div>

            {/* Line Chart */}
            <div className="max-lg:w-full max-2xl:w-full max-2xl:col-span-3 col-span-3 h-fit max-md:p-0">
              <Chart
                title="Revenue Over Time"
                type="line"
                data={revenueOverTime}
                dataKey="revenue"
                labelKey="month"
                className="h-[205px]"
              />
            </div>
          </div>

          {/* Bar + Pie */}
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

          {/* Data Table */}
          <div className="bg-white p-3 pb-2 rounded-xl shadow max-md:relative max-md:h-[360px] max-md:p-2 max-md:pt-10">
            <DataTable data={tableData} page={5} currentPage={currentPage} onPageChange={setCurrentPage} />
          </div>
        </main>
      </div>
    </div>
  );
}
