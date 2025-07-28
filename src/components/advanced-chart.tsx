"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

const data = [
  { date: "Jan 1", loadTime: 2.1, responseTime: 150, fcp: 1.1 },
  { date: "Jan 8", loadTime: 2.3, responseTime: 180, fcp: 1.2 },
  { date: "Jan 15", loadTime: 2.0, responseTime: 140, fcp: 1.0 },
  { date: "Jan 22", loadTime: 2.4, responseTime: 200, fcp: 1.3 },
  { date: "Jan 29", loadTime: 2.2, responseTime: 170, fcp: 1.1 },
  { date: "Feb 5", loadTime: 2.1, responseTime: 160, fcp: 1.0 },
  { date: "Feb 12", loadTime: 2.5, responseTime: 220, fcp: 1.4 },
  { date: "Feb 19", loadTime: 2.3, responseTime: 190, fcp: 1.2 },
]

export function AdvancedChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis dataKey="date" className="text-xs fill-muted-foreground" axisLine={false} tickLine={false} />
        <YAxis className="text-xs fill-muted-foreground" axisLine={false} tickLine={false} />
        <Tooltip
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="font-medium mb-2">{label}</div>
                  <div className="grid gap-1">
                    {payload.map((entry, index) => (
                      <div key={index} className="flex justify-between gap-4">
                        <span className="text-sm text-muted-foreground">{entry.name}:</span>
                        <span className="font-medium">
                          {entry.value}
                          {entry.dataKey === "responseTime" ? "ms" : "s"}
                        </span>
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
          dataKey="loadTime"
          stroke="hsl(var(--chart-1))"
          strokeWidth={2}
          name="Page Load Time"
          dot={{ fill: "hsl(var(--chart-1))", strokeWidth: 2, r: 3 }}
        />
        <Line
          type="monotone"
          dataKey="responseTime"
          stroke="hsl(var(--chart-2))"
          strokeWidth={2}
          name="Server Response"
          dot={{ fill: "hsl(var(--chart-2))", strokeWidth: 2, r: 3 }}
        />
        <Line
          type="monotone"
          dataKey="fcp"
          stroke="hsl(var(--chart-3))"
          strokeWidth={2}
          name="First Contentful Paint"
          dot={{ fill: "hsl(var(--chart-3))", strokeWidth: 2, r: 3 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
