"use client"

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const data = [
  { month: "Jan", newUsers: 12456, returningUsers: 33167 },
  { month: "Feb", newUsers: 13892, returningUsers: 35421 },
  { month: "Mar", newUsers: 15234, returningUsers: 37890 },
  { month: "Apr", newUsers: 14567, returningUsers: 39234 },
  { month: "May", newUsers: 16789, returningUsers: 41567 },
  { month: "Jun", newUsers: 18234, returningUsers: 43890 },
]

export function AudienceChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorReturning" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
          </linearGradient>
        </defs>
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
                        <span className="font-medium">{entry.value?.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Area
          type="monotone"
          dataKey="newUsers"
          stackId="1"
          stroke="hsl(var(--chart-1))"
          fillOpacity={1}
          fill="url(#colorNew)"
          name="New Users"
        />
        <Area
          type="monotone"
          dataKey="returningUsers"
          stackId="1"
          stroke="hsl(var(--chart-2))"
          fillOpacity={1}
          fill="url(#colorReturning)"
          name="Returning Users"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
