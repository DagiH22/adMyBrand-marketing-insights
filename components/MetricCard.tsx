import * as React from "react";
interface MetricCardProps {
  title: string;
  value: number | string;
  change: number;
  icon: string;
  className?: string;
}

export default function MetricCard({ title, value, change, icon }: MetricCardProps) {
  return (
    <div
      className={`
        p-3 rounded-xl shadow bg-[#FAF9FF]
        flex flex-col justify-between gap-1
        h-[88px] md:h-[90px]
        /* make cards narrower between 768px and 1023px */
        md:w-[140px] md:max-w-[140px] md:min-w-0
        /* larger screens revert to natural width */
        lg:w-[150px]
        max-2xl:w-[280px]
        max-xl:
        /* keep your phone rules untouched */
        max-md:w-[150px] max-xs:w-[110px]
        transition-transform duration-300 ease-in-out
        hover:scale-[1.03] hover:shadow-lg
      `}
    >
      <div className="flex items-start justify-between w-full">
        <div className="text-[#1E1E2F] truncate md:text-sm lg:text-base">
          {title}
        </div>
        {/* optional small icon spot (won't overflow) */}
        <div className="ml-2 text-sm opacity-70">{icon}</div>
      </div>

      <div className="flex items-end justify-between w-full">
        <div className="text-2xl md:text-xl lg:text-xl 2xl:text-2xl text-[#1E1E2F] font-bold truncate">
          {value}
        </div>

        <div className={`text-sm md:text-xs lg:text-sm  ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change >= 0 ? '+' : ''}
          {change}%
        </div>
      </div>
    </div>
  );
}
