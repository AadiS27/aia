"use client"

const cohortData = [
  { cohort: "Jan 2024", week0: 100, week1: 85, week2: 72, week3: 65, week4: 58 },
  { cohort: "Feb 2024", week0: 100, week1: 88, week2: 75, week3: 68, week4: 62 },
  { cohort: "Mar 2024", week0: 100, week1: 82, week2: 70, week3: 63, week4: 55 },
  { cohort: "Apr 2024", week0: 100, week1: 90, week2: 78, week3: 71, week4: 65 },
  { cohort: "May 2024", week0: 100, week1: 87, week2: 74, week3: 67, week4: 60 },
]

const weeks = ["Week 0", "Week 1", "Week 2", "Week 3", "Week 4"]

export function CohortChart() {
  return (
    <div className="w-full h-[300px] p-4">
      <div className="grid grid-cols-6 gap-1 h-full">
        <div></div>
        {weeks.map((week, i) => (
          <div key={i} className="text-xs text-center text-muted-foreground flex items-end pb-1">
            {week}
          </div>
        ))}
        {cohortData.map((cohort, cohortIndex) => (
          <>
            <div key={cohort.cohort} className="text-xs text-muted-foreground flex items-center justify-end pr-2">
              {cohort.cohort}
            </div>
            {weeks.map((week, weekIndex) => {
              const weekKey = `week${weekIndex}` as keyof typeof cohort
              const value = cohort[weekKey] as number
              const intensity = value / 100
              return (
                <div
                  key={`${cohortIndex}-${weekIndex}`}
                  className="rounded-sm border flex items-center justify-center text-xs font-medium transition-all hover:scale-110"
                  style={{
                    backgroundColor: `hsl(var(--primary) / ${intensity * 0.8 + 0.1})`,
                    color: intensity > 0.5 ? "white" : "hsl(var(--foreground))",
                  }}
                  title={`${cohort.cohort} ${week}: ${value}% retention`}
                >
                  {value}%
                </div>
              )
            })}
          </>
        ))}
      </div>
    </div>
  )
}
