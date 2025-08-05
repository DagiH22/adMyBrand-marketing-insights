import * as React from "react";
interface MetricCardProps {
    title: string
    value: number | string
    change: number
    icon: string
  }
  
  export default function MetricCard({ title, value, change, icon }: MetricCardProps) {
    return (
      <div className="p-4 rounded-xl shadow bg-card">
        <div className="text-sm text-muted-foreground">{title}</div>
        <div className="text-2xl font-bold">{value}</div>
        <div className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change >= 0 ? '+' : ''}
          {change}%
        </div>
      </div>
    )
  }
  