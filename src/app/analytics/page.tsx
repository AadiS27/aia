"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DashboardLayout } from "@/components/dashboard-layout"
import { DateRangePicker } from "@/components/date-range-picker"
import { AdvancedChart } from "@/components/advanced-chart"
import { HeatmapChart } from "@/components/heatmap-chart"
import { FunnelChart } from "@/components/funnel-chart"
import { CohortChart } from "@/components/cohort-chart"
import { TrendingUp, Users, MousePointer, Eye, Clock, Target, BarChart3, PieChart, Activity, Zap } from "lucide-react"

export default function AnalyticsPage() {
  const [selectedMetric, setSelectedMetric] = useState("revenue")

  const handleMetricChange = (metric: string) => {
    setSelectedMetric(metric)
    // This would typically filter or update the analytics data
    console.log("Selected metric:", metric)
  }

  const analyticsData = {
    overview: {
      totalSessions: 156789,
      bounceRate: 32.4,
      avgSessionDuration: "3m 42s",
      pagesPerSession: 4.2,
      newVsReturning: { new: 68, returning: 32 },
      topPages: [
        { page: "/", views: 45678, bounce: 28.5 },
        { page: "/products", views: 23456, bounce: 35.2 },
        { page: "/about", views: 12345, bounce: 42.1 },
        { page: "/contact", views: 8901, bounce: 38.7 },
      ],
    },
    performance: {
      pageLoadTime: 2.3,
      serverResponseTime: 180,
      firstContentfulPaint: 1.2,
      largestContentfulPaint: 2.8,
      cumulativeLayoutShift: 0.05,
    },
    audience: {
      demographics: {
        age: [
          { range: "18-24", percentage: 15 },
          { range: "25-34", percentage: 35 },
          { range: "35-44", percentage: 28 },
          { range: "45-54", percentage: 15 },
          { range: "55+", percentage: 7 },
        ],
        gender: { male: 52, female: 46, other: 2 },
        locations: [
          { country: "United States", percentage: 45 },
          { country: "United Kingdom", percentage: 18 },
          { country: "Canada", percentage: 12 },
          { country: "Australia", percentage: 8 },
          { country: "Germany", percentage: 7 },
          { country: "Others", percentage: 10 },
        ],
      },
    },
  }

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Advanced Analytics
            </h1>
            <p className="text-lg text-muted-foreground">
              Deep dive into your data with advanced analytics and insights
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Select value={selectedMetric} onValueChange={handleMetricChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select metric" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="revenue">Revenue</SelectItem>
                <SelectItem value="users">Users</SelectItem>
                <SelectItem value="sessions">Sessions</SelectItem>
                <SelectItem value="conversions">Conversions</SelectItem>
              </SelectContent>
            </Select>
            <DateRangePicker />
            <Button variant="outline" size="sm" className="hover:scale-105 transition-transform bg-transparent">
              <Activity className="h-4 w-4 mr-2" />
              Real-time
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.overview.totalSessions.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                >
                  +12.5%
                </Badge>
                vs last month
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
              <MousePointer className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.overview.bounceRate}%</div>
              <p className="text-xs text-muted-foreground">
                <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100">
                  +2.1%
                </Badge>
                vs last month
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Session Duration</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.overview.avgSessionDuration}</div>
              <p className="text-xs text-muted-foreground">
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                >
                  +8.3%
                </Badge>
                vs last month
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pages per Session</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.overview.pagesPerSession}</div>
              <p className="text-xs text-muted-foreground">
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                >
                  +5.7%
                </Badge>
                vs last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Advanced Charts */}
        <Tabs defaultValue="behavior" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-[500px]">
            <TabsTrigger value="behavior">Behavior</TabsTrigger>
            <TabsTrigger value="audience">Audience</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="funnel">Funnel</TabsTrigger>
            <TabsTrigger value="cohort">Cohort</TabsTrigger>
          </TabsList>

          <TabsContent value="behavior" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    User Behavior Heatmap
                  </CardTitle>
                  <CardDescription>Click patterns and user interactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <HeatmapChart />
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Top Pages Performance
                  </CardTitle>
                  <CardDescription>Most visited pages and bounce rates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analyticsData.overview.topPages.map((page, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <div className="flex-1">
                          <div className="font-medium">{page.page}</div>
                          <div className="text-sm text-muted-foreground">{page.views.toLocaleString()} views</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">{page.bounce}%</div>
                          <div className="text-xs text-muted-foreground">bounce rate</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="audience" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Age Demographics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {analyticsData.audience.demographics.age.map((age, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{age.range}</span>
                          <span>{age.percentage}%</span>
                        </div>
                        <Progress value={age.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5 text-primary" />
                    Gender Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Male</span>
                        <span>{analyticsData.audience.demographics.gender.male}%</span>
                      </div>
                      <Progress value={analyticsData.audience.demographics.gender.male} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Female</span>
                        <span>{analyticsData.audience.demographics.gender.female}%</span>
                      </div>
                      <Progress value={analyticsData.audience.demographics.gender.female} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Other</span>
                        <span>{analyticsData.audience.demographics.gender.other}%</span>
                      </div>
                      <Progress value={analyticsData.audience.demographics.gender.other} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Top Locations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {analyticsData.audience.demographics.locations.map((location, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{location.country}</span>
                          <span>{location.percentage}%</span>
                        </div>
                        <Progress value={location.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Core Web Vitals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>First Contentful Paint</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Good
                        </Badge>
                      </div>
                      <div className="text-2xl font-bold">{analyticsData.performance.firstContentfulPaint}s</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Largest Contentful Paint</span>
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                          Needs Improvement
                        </Badge>
                      </div>
                      <div className="text-2xl font-bold">{analyticsData.performance.largestContentfulPaint}s</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Cumulative Layout Shift</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Good
                        </Badge>
                      </div>
                      <div className="text-2xl font-bold">{analyticsData.performance.cumulativeLayoutShift}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-2 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-primary" />
                    Performance Trends
                  </CardTitle>
                  <CardDescription>Page load times and server response metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <AdvancedChart />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="funnel" className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Conversion Funnel Analysis
                </CardTitle>
                <CardDescription>Track user journey from awareness to conversion</CardDescription>
              </CardHeader>
              <CardContent>
                <FunnelChart />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cohort" className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Cohort Analysis
                </CardTitle>
                <CardDescription>User retention patterns over time</CardDescription>
              </CardHeader>
              <CardContent>
                <CohortChart />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
