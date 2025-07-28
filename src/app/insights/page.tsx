"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard-layout"
import { DateRangePicker } from "@/components/date-range-picker"
import { InsightCard } from "@/components/insight-card"
import { TrendChart } from "@/components/trend-chart"
import { PredictionChart } from "@/components/prediction-chart"
import { Brain, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Lightbulb, Target, Zap, Eye } from "lucide-react"

export default function InsightsPage() {
  const insights = [
    {
      id: 1,
      type: "opportunity",
      title: "Optimize Mobile Campaign Performance",
      description:
        "Mobile campaigns are underperforming by 23% compared to desktop. Consider adjusting bid strategies and creative formats.",
      impact: "High",
      confidence: 92,
      potentialLift: "+$12,500",
      category: "Performance",
      actionable: true,
      timeframe: "This week",
    },
    {
      id: 2,
      type: "alert",
      title: "Budget Pacing Alert",
      description:
        "Summer Sale campaign is spending 40% faster than planned. Current pace will exhaust budget 8 days early.",
      impact: "Critical",
      confidence: 98,
      potentialLoss: "-$8,200",
      category: "Budget",
      actionable: true,
      timeframe: "Immediate",
    },
    {
      id: 3,
      type: "trend",
      title: "Audience Shift Detected",
      description:
        "25-34 age group engagement increased 45% this month. Consider reallocating budget to capitalize on this trend.",
      impact: "Medium",
      confidence: 87,
      potentialLift: "+$6,800",
      category: "Audience",
      actionable: true,
      timeframe: "Next 2 weeks",
    },
    {
      id: 4,
      type: "prediction",
      title: "Q4 Performance Forecast",
      description:
        "Based on current trends, Q4 ROAS is projected to increase by 15% compared to Q3. Holiday campaigns show strong potential.",
      impact: "High",
      confidence: 84,
      potentialLift: "+$25,000",
      category: "Forecast",
      actionable: false,
      timeframe: "Q4 2024",
    },
    {
      id: 5,
      type: "optimization",
      title: "Creative Refresh Needed",
      description:
        "Top performing creatives are showing 18% decline in CTR over past 2 weeks. Creative fatigue detected.",
      impact: "Medium",
      confidence: 91,
      potentialLift: "+$4,200",
      category: "Creative",
      actionable: true,
      timeframe: "This week",
    },
    {
      id: 6,
      type: "success",
      title: "Retargeting Campaign Excellence",
      description:
        "Retargeting campaigns achieved 6.1x ROAS, 85% above industry benchmark. Strategy is highly effective.",
      impact: "Positive",
      confidence: 96,
      category: "Success",
      actionable: false,
      timeframe: "Ongoing",
    },
  ]

  const aiMetrics = {
    totalInsights: 24,
    actionableInsights: 18,
    potentialValue: 67500,
    confidenceScore: 89,
    trendsDetected: 12,
    alertsActive: 3,
  }

  const categories = [
    { name: "Performance", count: 8, trend: "up" },
    { name: "Budget", count: 4, trend: "down" },
    { name: "Audience", count: 6, trend: "up" },
    { name: "Creative", count: 3, trend: "stable" },
    { name: "Forecast", count: 2, trend: "up" },
    { name: "Success", count: 1, trend: "up" },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              AI-Powered Insights
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover opportunities, trends, and actionable recommendations powered by AI
            </p>
          </div>
          <div className="flex items-center gap-3">
            <DateRangePicker />
          </div>
        </div>

        {/* AI Metrics Overview */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Insights</CardTitle>
              <Brain className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{aiMetrics.totalInsights}</div>
              <p className="text-xs text-muted-foreground">Generated this month</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Actionable</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{aiMetrics.actionableInsights}</div>
              <p className="text-xs text-muted-foreground">Require attention</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Potential Value</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${(aiMetrics.potentialValue / 1000).toFixed(0)}K</div>
              <p className="text-xs text-muted-foreground">If all actions taken</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Confidence</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{aiMetrics.confidenceScore}%</div>
              <p className="text-xs text-muted-foreground">Average accuracy</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Trends</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{aiMetrics.trendsDetected}</div>
              <p className="text-xs text-muted-foreground">Patterns identified</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{aiMetrics.alertsActive}</div>
              <p className="text-xs text-muted-foreground">Need immediate action</p>
            </CardContent>
          </Card>
        </div>

        {/* Insight Categories */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              Insight Categories
            </CardTitle>
            <CardDescription>Breakdown of insights by category and trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-muted/50">
                  <div className="space-y-1">
                    <div className="font-medium">{category.name}</div>
                    <div className="text-sm text-muted-foreground">{category.count} insights</div>
                  </div>
                  <div className="flex items-center gap-2">
                    {category.trend === "up" && <TrendingUp className="h-4 w-4 text-green-500" />}
                    {category.trend === "down" && <TrendingDown className="h-4 w-4 text-red-500" />}
                    {category.trend === "stable" && <div className="h-4 w-4 rounded-full bg-yellow-500" />}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Priority Insights */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Priority Insights
            </CardTitle>
            <CardDescription>High-impact recommendations requiring immediate attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {insights
                .filter((insight) => insight.actionable && (insight.impact === "High" || insight.impact === "Critical"))
                .map((insight) => (
                  <InsightCard key={insight.id} insight={insight} priority />
                ))}
            </div>
          </CardContent>
        </Card>

        {/* All Insights */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              All Insights
            </CardTitle>
            <CardDescription>Complete list of AI-generated insights and recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {insights.map((insight) => (
                <InsightCard key={insight.id} insight={insight} />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Trend Analysis */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Performance Trends
              </CardTitle>
              <CardDescription>Key performance indicators over time</CardDescription>
            </CardHeader>
            <CardContent>
              <TrendChart />
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" />
                AI Predictions
              </CardTitle>
              <CardDescription>Forecasted performance based on current trends</CardDescription>
            </CardHeader>
            <CardContent>
              <PredictionChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
