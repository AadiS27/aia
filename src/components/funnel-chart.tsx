"use client"

const funnelData = [
  { stage: "Awareness", users: 100000, percentage: 100, color: "hsl(var(--chart-1))" },
  { stage: "Interest", users: 75000, percentage: 75, color: "hsl(var(--chart-2))" },
  { stage: "Consideration", users: 45000, percentage: 45, color: "hsl(var(--chart-3))" },
  { stage: "Intent", users: 25000, percentage: 25, color: "hsl(var(--chart-4))" },
  { stage: "Purchase", users: 12000, percentage: 12, color: "hsl(var(--chart-5))" },
]

export function FunnelChart() {
  return (
    <div className="w-full h-[400px] flex flex-col items-center justify-center space-y-2">
      {funnelData.map((stage, index) => (
        <div key={stage.stage} className="w-full flex flex-col items-center">
          <div
            className="flex items-center justify-between px-6 py-4 rounded-lg text-white font-medium transition-all hover:scale-105"
            style={{
              backgroundColor: stage.color,
              width: `${Math.max(stage.percentage, 20)}%`,
              minWidth: "200px",
            }}
          >
            <span>{stage.stage}</span>
            <span>{stage.users.toLocaleString()}</span>
          </div>
          {index < funnelData.length - 1 && (
            <div className="text-xs text-muted-foreground py-1">
              {((funnelData[index + 1].users / stage.users) * 100).toFixed(1)}% conversion
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
