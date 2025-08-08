
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
    <div className="flex flex-col min-h-screen bg-[#F4F0FF]">
      {/* Navbar only for desktop */}
      <div className="w-[85%] bg-[#F4F0FF] absolute right-0 max-md:hidden">
        <Navbar />   
      </div>

      <div className="flex flex-1 overflow-hidden flex-col md:flex-row ">
        {/* Sidebar */}
        <aside className="sticky top-0 max-md:static md:h-screen overflow-y-auto bg-[#F4F0FF] w-full md:w-[250px] shadow-lg z-30">
          <Sidebar />
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4 bg-[#F4F0FF] overflow-y-auto md:mt-[70px] md:mt-0 max-md:p-2 ">
          {/* KPI + Line Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-md:grid-cols-2 max-md:w-fit max-md:gap-4 max-md:mt-2 max-md:justify-center max-md:mx-auto">
              {metrics.map((metrics) => (
                <MetricCard
                  className="h-fit max-md:h-[100px] "
                  key={metrics.title}
                  title={metrics.title}
                  value={metrics.value}
                  change={metrics.change}
                  icon={metrics.icon}
                />
              ))}
            </div>

            {/* Line Chart */}
            <div className="w-full col-span-3 h-fit max-md:p-0">
              <Chart
                title="Revenue Over Time"
                type="line"
                data={revenueOverTime}
                dataKey="revenue"
                labelKey="month"
                className="h-[205px] max-md:m-0"
              />
            </div>
          </div>

          {/* Bar + Pie */}
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
          <div className="bg-white p-4 rounded-xl shadow max-md:relative max-md:h-[360px] max-md:p-2 max-md:pt-10">
            <DataTable data={tableData} page={4} />
          </div>
        </main>
      </div>
    </div>
  );
}
