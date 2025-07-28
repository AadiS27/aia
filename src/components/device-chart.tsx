"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

const data = [
  { month: "Jan", mobile: 58, desktop: 32, tablet: 10 },
  { month: "Feb", mobile: 59, desktop: 31, tablet: 10 },
  { month: "Mar", mobile: 61, desktop: 29, tablet: 10 },
  { month: "Apr", mobile: 62, desktop: 28, tablet: 10 },
  { month: "May", mobile: 60, desktop: 30, tablet: 10 },
  { month: "Jun", mobile: 63, desktop: 27, tablet: 10 },
]

export function DeviceChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis dataKey="month" className="text-xs fill-muted-foreground" axisLine={false} tickLine={false} />
        <YAxis className="text-xs fill-muted-foreground" axisLine={false} tickLine={false} />
        <Tooltip
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="font-medium mb-1">{label}</div>
                  <div className="grid gap-1">
                    {payload.map((entry, index) => (
                      <div key={index} className="flex justify-between gap-4">
                        <span className="text-sm text-muted-foreground">{entry.name}:</span>
                        <span className="font-medium">{entry.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="mobile"
          stroke="hsl(var(--chart-1))"
          strokeWidth={2}
          name="Mobile"
          dot={{ fill: "hsl(var(--chart-1))", strokeWidth: 2, r: 3 }}
        />
        <Line
          type="monotone"
          dataKey="desktop"
          stroke="hsl(var(--chart-2))"
          strokeWidth={2}
          name="Desktop"
          dot={{ fill: "hsl(var(--chart-2))", strokeWidth: 2, r: 3 }}
        />
        <Line
          type="monotone"
          dataKey="tablet"
          stroke="hsl(var(--chart-3))"
          strokeWidth={2}
          name="Tablet"
          dot={{ fill: "hsl(var(--chart-3))", strokeWidth: 2, r: 3 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
