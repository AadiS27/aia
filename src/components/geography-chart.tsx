"use client"

const worldRegions = [
  { region: "North America", users: 88777, percentage: 45, growth: 12.5 },
  { region: "Europe", users: 47036, percentage: 24, growth: 8.3 },
  { region: "Asia Pacific", users: 39197, percentage: 20, growth: 15.2 },
  { region: "South America", users: 15679, percentage: 8, growth: 6.7 },
  { region: "Africa", users: 5890, percentage: 3, growth: 22.1 },
]

export function GeographyChart() {
  return (
    <div className="w-full h-[250px] space-y-4">
      {worldRegions.map((region, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium">{region.region}</span>
            <div className="flex items-center gap-2">
              <span>{region.users.toLocaleString()} users</span>
              <span className="text-xs text-green-600">+{region.growth}%</span>
            </div>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${region.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
