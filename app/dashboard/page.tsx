// app/dashboard/page.tsx
import * as React from "react";

import { metrics } from '@/data/mockMetrics'
import { revenueOverTime, conversionsByChannel, trafficSources } from '@/data/mockCharts'
import { tableData } from '@/data/mockTable'

import MetricCard from '@/components/MetricCard'
import Chart from '@/components/Chart'
import DataTable from '@/components/DataTable'
import Navbar from '@/components/Navbar'
import Sidebar from "@/components/Sidebar";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Top Navbar */}

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main content on the right */}
        <main className="flex-1 p-4 overflow-y-auto">
          {/* KPI + Line Chart Side-by-Side */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {metrics.map((metrics: { title: string; value: number | string; change: number; icon: string }) => (
                <MetricCard
                  className="h-fit"
                  key={metrics.title}
                  title={metrics.title}
                  value={metrics.value}
                  change={metrics.change}
                  icon={metrics.icon}
                />
              ))}
            </div>

            {/* Line Chart */}
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
          </div>

          {/* Bar + Pie Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
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
          <div className="bg-card p-4 p-b-0 rounded-xl shadow">
            <DataTable data={tableData} />
          </div>
        </main>
      </div>
    </div>
  );
}
