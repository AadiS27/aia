"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, AlertTriangle, Lightbulb, ArrowRight } from "lucide-react"

interface MetricData {
  value: number
  change: number
  trend: "up" | "down"
  target: number
  previousPeriod: number
}

interface CampaignData {
  id: number
  name: string
  status: string
  budget: number
  spent: number
  conversions: number
  ctr: number
  roas: number
  impressions: number
  clicks: number
  startDate: string
  endDate: string
}

interface DashboardData {
  metrics: {
    revenue: MetricData
    users: MetricData
    conversions: MetricData
    growth: MetricData
    impressions: MetricData
    ctr: MetricData
  }
  campaigns: CampaignData[]
}

interface QuickInsightsProps {
  data: DashboardData
}

export function QuickInsights({ data }: QuickInsightsProps) {
  // Generate insights based on actual data
  const generateInsights = () => {
    const insights = []
    
    // Check conversion rate trend
    if (data.metrics.conversions.trend === "down") {
      insights.push({
        type: "warning",
        title: "Conversion Rate Declining",
        description: `Conversion rate dropped by ${Math.abs(data.metrics.conversions.change)}% this period`,
        impact: "High",
        action: "Review landing pages and user flow",
      })
    }
    
    // Check if close to revenue target
    const revenueProgress = (data.metrics.revenue.value / data.metrics.revenue.target) * 100
    if (revenueProgress > 90) {
      insights.push({
        type: "opportunity",
        title: "Revenue Target Within Reach",
        description: `Only ${(100 - revenueProgress).toFixed(1)}% away from revenue target`,
        impact: "Medium",
        action: "Increase ad spend on top performers",
      })
    }
    
    // Check top performing campaign
    const topCampaign = data.campaigns.reduce((prev, current) => 
      (prev.roas > current.roas) ? prev : current
    )
    insights.push({
      type: "success",
      title: "Top Performer Identified",
      description: `${topCampaign.name} has ${topCampaign.roas}x ROAS`,
      impact: "Medium",
      action: "Scale similar campaigns",
    })
    
    return insights
  }

  const insights = generateInsights()

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
