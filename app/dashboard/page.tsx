// app/dashboard/page.tsx

import * as React from "react";
// app/dashboard/page.tsx

import { metrics } from '@/data/mockMetrics'
import { revenueOverTime, conversionsByChannel, trafficSources } from '@/data/mockCharts'
import { tableData } from '@/data/mockTable'

// Import your UI components
import MetricCard from '@/components/MetricCard'
import Chart from '@/components/Chart'
import DataTable from '@/components/DataTable'
import Navbar from '@/components/Navbar'
import Sidebar from "@/components/Sidebar";



export default function DashboardPage() {

    console.log("revenueOverTime", revenueOverTime);
    console.log("conversionsByChannel", conversionsByChannel);
    console.log("trafficSources", trafficSources);
    return (
      <div className="p-0 space-y-6">
        <Navbar /> {/* Added Navbar with consistent style */}
        <main className="flex ">
        <Sidebar /> {/* Added Sidebar with consistent style */}
        <div className="flex flex-col">
            <div className="flex ">
                    {/* Top KPI cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-1 w-80">
                        {metrics.map((metrics: { title: string; value: number | string; change: number; icon: string }) => (
                          <MetricCard
                            className="min-h-[100px]"
                            key={metrics.title}
                            title={metrics.title}
                            value={metrics.value}
                            change={metrics.change}
                            icon={metrics.icon}
                          />
                        ))}
                    </div>  

                    {/* Charts Section */}
                    {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4"> */}
                      {/* Full-width line chart */}
                      <div className="col-span-full">
                        <Chart
                          title="Revenue Over Time"
                          type="line"
                          data={revenueOverTime}
                          dataKey="revenue"
                          labelKey="month" // if you allow height prop
                        />
                      </div>
            </div>

            <div className="flex">
                      {/* Bar chart */}
                      <Chart
                        title="Conversions by Channel"
                        type="bar"
                        data={conversionsByChannel}
                        dataKey="conversions"
                        labelKey="channel"/>

                      {/* Pie chart */}
                      <Chart
                        title="Traffic Sources"
                        type="pie"
                        data={trafficSources}
                        dataKey="value"
                        labelKey="source"/>
            </div>

            {/* Data Table */}
            <div className="mt-6 bg-card p-4 rounded-xl shadow">
              <h2 className="text-lg font-semibold mb-2">Recent Signups</h2>
              <DataTable data={tableData} />
            </div>

        </div>
      </main>

      // </div>
    )
  }
  
