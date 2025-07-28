"use client"

const heatmapData = [
  [0, 0, 10],
  [0, 1, 19],
  [0, 2, 8],
  [0, 3, 24],
  [0, 4, 67],
  [1, 0, 92],
  [1, 1, 58],
  [1, 2, 78],
  [1, 3, 117],
  [1, 4, 48],
  [2, 0, 35],
  [2, 1, 15],
  [2, 2, 123],
  [2, 3, 64],
  [2, 4, 52],
  [3, 0, 72],
  [3, 1, 132],
  [3, 2, 114],
  [3, 3, 19],
  [3, 4, 16],
  [4, 0, 38],
  [4, 1, 5],
  [4, 2, 8],
  [4, 3, 117],
  [4, 4, 115],
]

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
const hours = ["9AM", "12PM", "3PM", "6PM", "9PM"]

export function HeatmapChart() {
  const maxValue = Math.max(...heatmapData.map((d) => d[2]))

  return (
    <div className="w-full h-[250px] p-4">
      <div className="grid grid-cols-6 gap-1 h-full">
        <div></div>
        {hours.map((hour, i) => (
          <div key={i} className="text-xs text-center text-muted-foreground flex items-end pb-1">
            {hour}
          </div>
        ))}
        {days.map((day, dayIndex) => (
          <>
            <div key={day} className="text-xs text-muted-foreground flex items-center justify-end pr-2">
              {day}
            </div>
            {hours.map((_, hourIndex) => {
              const dataPoint = heatmapData.find((d) => d[0] === dayIndex && d[1] === hourIndex)
              const value = dataPoint ? dataPoint[2] : 0
              const intensity = value / maxValue
              return (
                <div
                  key={`${dayIndex}-${hourIndex}`}
                  className="rounded-sm border flex items-center justify-center text-xs font-medium transition-all hover:scale-110"
                  style={{
                    backgroundColor: `hsl(var(--primary) / ${intensity * 0.8 + 0.1})`,
                    color: intensity > 0.5 ? "white" : "hsl(var(--foreground))",
                  }}
                  title={`${day} ${hours[hourIndex]}: ${value} clicks`}
                >
                  {value}
                </div>
              )
            })}
          </>
        ))}
      </div>
    </div>
  )
}
