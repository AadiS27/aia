"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const data = [
  { date: "Jan 1", users: 1200, newUsers: 120 },
  { date: "Jan 8", users: 1350, newUsers: 150 },
  { date: "Jan 15", users: 1480, newUsers: 130 },
  { date: "Jan 22", users: 1620, newUsers: 140 },
  { date: "Jan 29", users: 1750, newUsers: 130 },
  { date: "Feb 5", users: 1890, newUsers: 140 },
  { date: "Feb 12", users: 2020, newUsers: 130 },
  { date: "Feb 19", users: 2180, newUsers: 160 },
  { date: "Feb 26", users: 2350, newUsers: 170 },
  { date: "Mar 5", users: 2480, newUsers: 130 },
  { date: "Mar 12", users: 2650, newUsers: 170 },
  { date: "Mar 19", users: 2820, newUsers: 170 },
]

export function UserGrowthChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis dataKey="date" className="text-xs fill-muted-foreground" axisLine={false} tickLine={false} />
        <YAxis className="text-xs fill-muted-foreground" axisLine={false} tickLine={false} />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">Total Users</span>
                      <span className="font-bold text-muted-foreground">{payload[0].value?.toLocaleString()}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">New Users</span>
                      <span className="font-bold text-muted-foreground">{payload[1].value?.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Line
          type="monotone"
          dataKey="users"
          stroke="#3b82f6"
          strokeWidth={3}
          dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6, stroke: "#3b82f6", strokeWidth: 2 }}
        />
        <Line
          type="monotone"
          dataKey="newUsers"
          stroke="#10b981"
          strokeWidth={2}
          dot={{ fill: "#10b981", strokeWidth: 2, r: 3 }}
          activeDot={{ r: 5, stroke: "#10b981", strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
