import * as React from "react";
interface MetricCardProps {
    title: string
    value: number | string
    change: number
    icon: string
    className?: string 
  }
  
  export default function MetricCard({ title, value, change, icon }: MetricCardProps) {
    console.log('Rendering MetricCard:', { title, value, change, icon });
    return (
      <div className="p-4 rounded-xl shadow bg-[#FAF9FF] min-h-fit h-[100px] min-w-[150px] w-fit
  transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg">
  
  <div className="text-[#1E1E2F] ">{title}</div>
  <div className="text-2xl text-[#1E1E2F] font-bold">{value}</div>
  <div className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
    {change >= 0 ? '+' : ''}
    {change}%
  </div>
</div>


    )
  }
  