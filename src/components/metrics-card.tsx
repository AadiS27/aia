"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface MetricsCardProps {
  title: string
  value: string
  change: number
  trend: "up" | "down"
  icon: LucideIcon
  description?: string
  target?: number
  className?: string
}

export function MetricsCard({
  title,
  value,
  change,
  trend,
  icon: Icon,
  description,
  target,
  className,
}: MetricsCardProps) {
  const isPositive = trend === "up"
  const numericValue = Number.parseFloat(value.replace(/[^0-9.-]+/g, ""))
  const progressValue = target ? (numericValue / target) * 100 : 0

  return (
    <Card className={cn("transition-all duration-300 hover:shadow-lg hover:scale-105", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <Badge
              variant={isPositive ? "default" : "destructive"}
              className={cn(
                "flex items-center gap-1 px-1.5 py-0.5",
                isPositive ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" : "",
              )}
            >
              {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {Math.abs(change)}%
            </Badge>
            {description && <span>{description}</span>}
          </div>
        </div>
        {target && (
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Progress to target</span>
              <span>{Math.min(progressValue, 100).toFixed(0)}%</span>
            </div>
            <Progress value={Math.min(progressValue, 100)} className="h-1" />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
