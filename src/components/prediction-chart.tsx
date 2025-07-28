"use client"

import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts"

const data = [
  { month: "Jan", actual: 847250, predicted: null },
  { month: "Feb", actual: 923400, predicted: null },
  { month: "Mar", actual: 1045600, predicted: null },
  { month: "Apr", actual: 1156700, predicted: null },
  { month: "May", actual: 1234500, predicted: null },
  { month: "Jun", actual: 1345600, predicted: null },
  { month: "Jul", actual: null, predicted: 1456700 },
  { month: "Aug", actual: null, predicted: 1567800 },
  { month: "Sep", actual: null, predicted: 1678900 },
  { month: "Oct", actual: null, predicted: 1789000 },
  { month: "Nov", actual: null, predicted: 1890100 },
  { month: "Dec", actual: null, predicted: 2001200 },
]

export function PredictionChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis dataKey="month" className="text-xs fill-muted-foreground" axisLine={false} tickLine={false} />
        <YAxis
          className="text-xs fill-muted-foreground"
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
        />
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
                        <span className="font-medium">${entry.value?.toLocaleString()}</span>
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
        <ReferenceLine x="Jun" stroke="hsl(var(--muted-foreground))" strokeDasharray="2 2" />
        <Line
          type="monotone"
          dataKey="actual"
          stroke="hsl(var(--chart-1))"
          strokeWidth={3}
          name="Actual Revenue"
          dot={{ fill: "hsl(var(--chart-1))", strokeWidth: 2, r: 4 }}
          connectNulls={false}
        />
        <Line
          type="monotone"
          dataKey="predicted"
          stroke="hsl(var(--chart-2))"
          strokeWidth={3}
          strokeDasharray="5 5"
          name="Predicted Revenue"
          dot={{ fill: "hsl(var(--chart-2))", strokeWidth: 2, r: 4 }}
          connectNulls={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
