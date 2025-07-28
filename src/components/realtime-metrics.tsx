"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Users, Eye, MousePointer } from "lucide-react"

export function RealtimeMetrics() {
  const [metrics, setMetrics] = useState({
    activeUsers: 1247,
    pageViews: 3456,
    conversions: 23,
    clickRate: 3.2,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10) - 5,
        pageViews: prev.pageViews + Math.floor(Math.random() * 20),
        conversions: prev.conversions + Math.floor(Math.random() * 3),
        clickRate: +(prev.clickRate + (Math.random() * 0.2 - 0.1)).toFixed(1),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium">Real-time Activity</span>
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
              Live
            </Badge>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3 text-muted-foreground" />
              <span className="font-medium">{metrics.activeUsers}</span>
              <span className="text-muted-foreground">active</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-3 w-3 text-muted-foreground" />
              <span className="font-medium">{metrics.pageViews}</span>
              <span className="text-muted-foreground">views</span>
            </div>
            <div className="flex items-center gap-1">
              <MousePointer className="h-3 w-3 text-muted-foreground" />
              <span className="font-medium">{metrics.conversions}</span>
              <span className="text-muted-foreground">conversions</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
