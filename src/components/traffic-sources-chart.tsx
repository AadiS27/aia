"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"

const data = [
  { name: "Organic Search", value: 45, color: "#3b82f6" },
  { name: "Social Media", value: 25, color: "#10b981" },
  { name: "Direct", value: 15, color: "#f59e0b" },
  { name: "Email", value: 10, color: "#ef4444" },
  { name: "Referral", value: 5, color: "#8b5cf6" },
]

export function TrafficSourcesChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: payload[0].payload.color }} />
                    <span className="text-sm font-medium">{payload[0].payload.name}</span>
                  </div>
                  <div className="text-lg font-bold">{payload[0].value}%</div>
                </div>
              )
            }
            return null
          }}
        />
        <Legend
          verticalAlign="bottom"
          height={36}
          formatter={(value) => <span className="text-sm text-muted-foreground">{value}</span>}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}
