"use client"

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const data = [
  { month: "Jan", revenue: 65000, target: 70000 },
  { month: "Feb", revenue: 72000, target: 75000 },
  { month: "Mar", revenue: 68000, target: 72000 },
  { month: "Apr", revenue: 85000, target: 80000 },
  { month: "May", revenue: 92000, target: 85000 },
  { month: "Jun", revenue: 88000, target: 90000 },
  { month: "Jul", revenue: 95000, target: 92000 },
  { month: "Aug", revenue: 102000, target: 98000 },
  { month: "Sep", revenue: 98000, target: 100000 },
  { month: "Oct", revenue: 110000, target: 105000 },
  { month: "Nov", revenue: 115000, target: 110000 },
  { month: "Dec", revenue: 125000, target: 120000 },
]

export function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#64748b" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#64748b" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis dataKey="month" className="text-xs fill-muted-foreground" axisLine={false} tickLine={false} />
        <YAxis
          className="text-xs fill-muted-foreground"
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => `$${value / 1000}k`}
        />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">Revenue</span>
                      <span className="font-bold text-muted-foreground">${payload[0].value?.toLocaleString()}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">Target</span>
                      <span className="font-bold text-muted-foreground">${payload[1].value?.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#3b82f6"
          fillOpacity={1}
          fill="url(#colorRevenue)"
          strokeWidth={2}
        />
        <Area
          type="monotone"
          dataKey="target"
          stroke="#64748b"
          fillOpacity={1}
          fill="url(#colorTarget)"
          strokeWidth={2}
          strokeDasharray="5 5"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
