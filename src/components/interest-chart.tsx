"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const data = [
  { category: "Technology", affinity: 85, users: 45623 },
  { category: "Shopping", affinity: 78, users: 38901 },
  { category: "Travel", affinity: 72, users: 31456 },
  { category: "Food", affinity: 68, users: 28234 },
  { category: "Sports", affinity: 65, users: 25678 },
  { category: "Entertainment", affinity: 62, users: 23456 },
]

export function InterestChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data} layout="horizontal">
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis type="number" className="text-xs fill-muted-foreground" axisLine={false} tickLine={false} />
        <YAxis
          type="category"
          dataKey="category"
          className="text-xs fill-muted-foreground"
          axisLine={false}
          tickLine={false}
          width={80}
        />
        <Tooltip
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="font-medium mb-1">{label}</div>
                  <div className="grid gap-1">
                    <div className="flex justify-between gap-4">
                      <span className="text-sm text-muted-foreground">Affinity:</span>
                      <span className="font-medium">{payload[0].value}%</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-sm text-muted-foreground">Users:</span>
                      <span className="font-medium">{payload[0].payload.users.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Bar dataKey="affinity" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
