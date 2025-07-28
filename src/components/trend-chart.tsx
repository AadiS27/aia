"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

const data = [
  { date: "Week 1", roas: 4.2, ctr: 3.1, conversions: 234 },
  { date: "Week 2", roas: 4.5, ctr: 3.3, conversions: 267 },
  { date: "Week 3", roas: 4.1, ctr: 2.9, conversions: 198 },
  { date: "Week 4", roas: 4.8, ctr: 3.6, conversions: 312 },
  { date: "Week 5", roas: 4.6, ctr: 3.4, conversions: 289 },
  { date: "Week 6", roas: 5.1, ctr: 3.8, conversions: 345 },
]

export function TrendChart() {
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
                        <span className="font-medium">{entry.value}</span>
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
          dataKey="roas"
          stroke="hsl(var(--chart-1))"
          strokeWidth={2}
          name="ROAS"
          dot={{ fill: "hsl(var(--chart-1))", strokeWidth: 2, r: 3 }}
        />
        <Line
          type="monotone"
          dataKey="ctr"
          stroke="hsl(var(--chart-2))"
          strokeWidth={2}
          name="CTR (%)"
          dot={{ fill: "hsl(var(--chart-2))", strokeWidth: 2, r: 3 }}
        />
        <Line
          type="monotone"
          dataKey="conversions"
          stroke="hsl(var(--chart-3))"
          strokeWidth={2}
          name="Conversions"
          dot={{ fill: "hsl(var(--chart-3))", strokeWidth: 2, r: 3 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
