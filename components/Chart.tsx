'use client';
import * as React from "react";
import {
  LineChart, Line,
  BarChart, Bar,
  PieChart, Pie, Cell,
  XAxis, YAxis,
  Tooltip, Legend,
  ResponsiveContainer
} from 'recharts'
import type { ReactElement } from 'react'

interface ChartProps {
  title: string
  type: 'line' | 'bar' | 'pie'
  data: any[]
  dataKey: string
  labelKey: string
}

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042']

export default function Chart({ title, type, data, dataKey, labelKey }: ChartProps) {
  let chart: ReactElement;

  if (type === 'line') {
    chart = (
      <LineChart data={data}>
        <XAxis dataKey={labelKey} />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
      </LineChart>
    )
  } else if (type === 'bar') {
    chart = (
      <BarChart data={data}>
        <XAxis dataKey={labelKey} />
        <YAxis />
        <Tooltip />
        <Bar dataKey={dataKey} fill="#82ca9d" />
      </BarChart>
    )
  } else if (type === 'pie') {
    chart = (
      <PieChart>
        <Pie
          data={data}
          dataKey={dataKey}
          nameKey={labelKey}
          cx="50%"
          cy="50%"
          outerRadius={80}
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    )
  } else {
    // fallback (optional)
    chart = <></>  // or throw new Error("Invalid chart type")
  }

  return (
    <div className="p-4 bg-card shadow rounded-xl">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="w-full h-[150px]">
        <ResponsiveContainer width="100%" height="100%">
          {chart}
        </ResponsiveContainer>
      </div>
    </div>
  )
}
