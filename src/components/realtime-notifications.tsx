"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, TrendingUp, Users, DollarSign } from "lucide-react"

interface Notification {
  id: string
  type: "revenue" | "users" | "alert"
  title: string
  message: string
  timestamp: Date
  isRead: boolean
}

export function RealtimeNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Simulate real-time notifications
    const interval = setInterval(() => {
      const notificationTypes = [
        {
          type: "revenue" as const,
          title: "Revenue Milestone",
          message: "You've reached 95% of your monthly revenue goal!",
          icon: DollarSign
        },
        {
          type: "users" as const,
          title: "User Growth",
          message: "250 new users joined in the last hour",
          icon: Users
        },
        {
          type: "alert" as const,
          title: "Campaign Alert",
          message: "Summer Sale campaign performance increased by 15%",
          icon: TrendingUp
        }
      ]

      const randomNotification = notificationTypes[Math.floor(Math.random() * notificationTypes.length)]
      
      const newNotification: Notification = {
        id: Math.random().toString(36).substr(2, 9),
        type: randomNotification.type,
        title: randomNotification.title,
        message: randomNotification.message,
        timestamp: new Date(),
        isRead: false
      }

      setNotifications(prev => [newNotification, ...prev.slice(0, 4)]) // Keep only latest 5
      setIsVisible(true)

      // Auto-hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false)
      }, 5000)
    }, 15000) // New notification every 15 seconds

    return () => clearInterval(interval)
  }, [])

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "revenue":
        return <DollarSign className="h-4 w-4" />
      case "users":
        return <Users className="h-4 w-4" />
      default:
        return <TrendingUp className="h-4 w-4" />
    }
  }

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "revenue":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "users":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      default:
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
    }
  }

  if (!isVisible || notifications.length === 0) return null

  const latestNotification = notifications[0]

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in-right">
      <Card className="w-80 shadow-lg border-2 animate-pulse-glow">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <div className={`p-2 rounded-lg ${getNotificationColor(latestNotification.type)}`}>
              {getNotificationIcon(latestNotification.type)}
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold">{latestNotification.title}</h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsVisible(false)}
                  className="h-6 w-6 p-0"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">{latestNotification.message}</p>
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  Live
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {latestNotification.timestamp.toLocaleTimeString()}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
