'use client';
import * as React from "react";
import {
  LineChart, Line,
  BarChart, Bar,
  PieChart, Pie, Cell,
  XAxis, YAxis,
  Tooltip, Legend,
  ResponsiveContainer,
  Sector
} from 'recharts';
import type { ReactElement } from 'react';

interface ChartProps {
  title: string;
  type: 'line' | 'bar' | 'pie';
  data: any[];
  dataKey: string;
  labelKey: string;
  className?: string;
  activeIndex?: number | null;
}

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

export default function Chart({ title, type, data, dataKey, labelKey, className }: ChartProps) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const {
      cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload
    } = props;

    return (
      <g>
        {/* <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload[labelKey]}
        </text> */}
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 10}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  };

  let chart: ReactElement;

  if (type === 'line') {
    chart = (
      <LineChart data={data}>
        <XAxis dataKey={labelKey} />
        <YAxis />
        <Tooltip
  content={({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white text-sm text-gray-700 shadow-md border border-gray-200 rounded px-3 py-1.5">
          <p>{`${payload[0].name ?? payload[0].payload[labelKey]}: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  }}
/>

        <Line type="monotone" dataKey={dataKey} stroke="#06B6D4 " width={2}/>
      </LineChart>
    );
  } else if (type === 'bar') {
    chart = (
      <BarChart data={data}>
        <XAxis dataKey={labelKey} />
        <YAxis />
        <Tooltip
  content={({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white text-sm text-gray-700 shadow-md border border-gray-200 rounded px-3 py-1.5">
          <p>{`${payload[0].name ?? payload[0].payload[labelKey]}: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  }}
/>

        <Bar dataKey={dataKey} fill="#82ca9d" />
      </BarChart>
    );
  } else if (type === 'pie') {
    chart = (
      <div className="flex items-center justify-center">
        <PieChart width={300} height={200}>
          <Pie
            data={data}
            dataKey={dataKey}
            nameKey={labelKey}
            cx="40%"
            cy="50%"
            outerRadius={60}
            activeIndex={activeIndex ?? -1}
            activeShape={renderActiveShape}
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
  content={({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white text-sm text-gray-700 shadow-md border border-gray-200 rounded px-3 py-1.5">
          <p>{`${payload[0].name ?? payload[0].payload[labelKey]}: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  }}
/>

          <Legend
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </PieChart>
      </div>
    );
  } else {
    chart = <></>; // fallback
  }

  return (
    <div className={`p-4 bg-[#FAF9FF] shadow rounded-xl transition-transform duration-300 ease-in-out hover:scale-[1.01] hover:shadow-lg ${className || ''}`}>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="w-full h-[135px]">
        <ResponsiveContainer width="100%" height="100%">
          {chart}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
