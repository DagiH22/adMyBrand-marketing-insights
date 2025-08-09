
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
      <div className="w-[85%] hidden  max-xl:w-[77%] max-lg:w-[70%] bg-[#F4F0FF] absolute right-0 max-md:hidden">
        <Navbar />   
      </div>

      <div className="flex flex-1 overflow-hidden flex-col md:flex-row  ">
        {/* Sidebar */}
        <aside className="sticky top-0  max-md:static md:h-screen overflow-y-auto bg-[#F4F0FF] w-[15%] max-lg:w-[30%] max-xl:w-[23%] max-md:w-[100%] shadow-lg z-30">
          <Sidebar />
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4 bg-[#F4F0FF] overflow-y-auto md:mt-[0px] max-md:p-2 max-fold:bg-red-500">
          {/* KPI + Line Chart */}
          <div className="grid lg:grid-cols-4 max-lg:grid-cols-1  max-2xl:grid-cols-5 gap-4 mb-4 w-full ">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-md:grid-cols-2 max-2xl:col-span-2 max-md:w-fit max-md:gap-4 max-md:mt-2">
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
          <div className="bg-white p-4 pb-2 rounded-xl shadow max-md:relative max-md:h-[360px] max-md:p-2 max-md:pt-10">
            <DataTable data={tableData} page={4} />
          </div>
        </main>
      </div>
    </div>
  );
}
