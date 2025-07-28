"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Target, AlertTriangle, CheckCircle } from "lucide-react"

export function PerformanceInsights() {
  const insights = [
    {
      title: "Revenue Goal Progress",
      description: "You're 94.1% towards your monthly goal",
      progress: 94.1,
      status: "good",
      icon: Target,
      value: "$847,250",
      target: "$900,000"
    },
    {
      title: "Best Performing Campaign",
      description: "Retargeting Campaign has highest ROAS",
      status: "excellent",
      icon: TrendingUp,
      value: "6.1x ROAS",
      change: "+18.5%"
    },
    {
      title: "Attention Needed",
      description: "Conversion rate below target by 0.6%",
      status: "warning",
      icon: AlertTriangle,
      value: "3.4%",
      target: "4.0%"
    },
    {
      title: "User Growth",
      description: "Exceeding monthly user acquisition goals",
      status: "excellent",
      icon: CheckCircle,
      value: "24,680",
      change: "+8.2%"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "text-green-600 dark:text-green-400"
      case "good":
        return "text-blue-600 dark:text-blue-400"
      case "warning":
        return "text-yellow-600 dark:text-yellow-400"
      default:
        return "text-gray-600 dark:text-gray-400"
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "excellent":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Excellent</Badge>
      case "good":
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Good</Badge>
      case "warning":
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Needs Attention</Badge>
      default:
        return <Badge variant="secondary">Normal</Badge>
    }
  }

  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Performance Insights
        </CardTitle>
        <CardDescription>
          AI-powered insights and recommendations for your campaigns
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {insights.map((insight, index) => {
            const Icon = insight.icon
            return (
              <div 
                key={index}
                className="flex items-start space-x-4 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors animate-slide-in-right"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`p-2 rounded-lg ${getStatusColor(insight.status)}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{insight.title}</h4>
                    {getStatusBadge(insight.status)}
                  </div>
                  <p className="text-sm text-muted-foreground">{insight.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{insight.value}</span>
                    {insight.change && (
                      <span className="text-green-600 dark:text-green-400">{insight.change}</span>
                    )}
                    {insight.target && (
                      <span className="text-muted-foreground">Target: {insight.target}</span>
                    )}
                  </div>
                  {insight.progress && (
                    <div className="space-y-1">
                      <Progress value={insight.progress} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>0%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
