"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, AlertTriangle, Lightbulb, ArrowRight } from "lucide-react"

interface QuickInsightsProps {
  data: any
}

export function QuickInsights({ data }: QuickInsightsProps) {
  const insights = [
    {
      type: "opportunity",
      title: "Mobile Performance Gap",
      description: "Mobile campaigns are underperforming by 23% vs desktop",
      impact: "High",
      action: "Optimize mobile creatives",
    },
    {
      type: "alert",
      title: "Budget Pacing Alert",
      description: "Summer Sale campaign spending 40% faster than planned",
      impact: "Critical",
      action: "Adjust daily budget",
    },
    {
      type: "trend",
      title: "Audience Shift",
      description: "25-34 age group engagement up 45% this month",
      impact: "Medium",
      action: "Reallocate budget",
    },
  ]

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-primary" />
          Quick Insights
        </CardTitle>
        <CardDescription>AI-powered recommendations based on your data</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="flex items-start justify-between p-4 rounded-lg border bg-muted/50 hover:bg-muted/70 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  {insight.type === "opportunity" && <TrendingUp className="h-4 w-4 text-green-500" />}
                  {insight.type === "alert" && <AlertTriangle className="h-4 w-4 text-red-500" />}
                  {insight.type === "trend" && <TrendingDown className="h-4 w-4 text-blue-500" />}
                </div>
                <div className="space-y-1">
                  <div className="font-medium">{insight.title}</div>
                  <div className="text-sm text-muted-foreground">{insight.description}</div>
                  <Badge
                    variant={
                      insight.impact === "Critical"
                        ? "destructive"
                        : insight.impact === "High"
                          ? "default"
                          : "secondary"
                    }
                  >
                    {insight.impact} Impact
                  </Badge>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="hover:scale-105 transition-transform">
                {insight.action}
                <ArrowRight className="h-3 w-3 ml-1" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
