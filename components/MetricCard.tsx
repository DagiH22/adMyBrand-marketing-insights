import * as React from "react";
interface MetricCardProps {
    title: string
    value: number | string
    change: number
    icon: string
    className?: string 
  }
  
  export default function MetricCard({ title, value, change, icon }: MetricCardProps) {
    return (
      <div className="p-4 rounded-xl shadow bg-[#F9FAFB] dark:bg-[#FF0000] min-h-fit h-[100px] min-w-[150px] w-fit
  transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg">
  
  <div className="text-light-TextPrimary dark:text-light-TextPrimary">{title}</div>
  <div className="text-2xl font-bold">{value}</div>
  <div className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
    {change >= 0 ? '+' : ''}
    {change}%
  </div>
</div>

    )
  }
  