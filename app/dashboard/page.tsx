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



export default function DashboardPage() {
    console.log("revenueOverTime", revenueOverTime);
    console.log("conversionsByChannel", conversionsByChannel);
    console.log("trafficSources", trafficSources);
    return (
      <div className="p-6 space-y-6">
        {/* Top KPI cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metrics:{ title: string; value: number | string; change: number; icon: string }) => (
            <MetricCard
              key={metrics.title}
              title={metrics.title}
              value={metrics.value}
              change={metrics.change}
              icon={metrics.icon}
            />
          ))}
        </div>
  
        {/* Charts Section */}
        <div className="h-fit w-full">
          <Chart title="Revenue Over Time" type="line" data={revenueOverTime} dataKey="revenue" labelKey="month" />
          <Chart title="Conversions by Channel" type="bar" data={conversionsByChannel} dataKey="conversions" labelKey="channel" />
          <Chart title="Traffic Sources" type="pie" data={trafficSources} dataKey="value" labelKey="source" />
        </div>
  
        {/* Data Table */}
        <div className="mt-6">
          <DataTable data={tableData} />
        </div>
      </div>
    )
  }
  
