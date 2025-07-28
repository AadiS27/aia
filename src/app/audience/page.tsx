"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { DashboardLayout } from "@/components/dashboard-layout"
import { DateRangePicker } from "@/components/date-range-picker"
import { AudienceChart } from "@/components/audience-chart"
import { GeographyChart } from "@/components/geography-chart"
import { DeviceChart } from "@/components/device-chart"
import { InterestChart } from "@/components/interest-chart"
import { Users, Globe, Smartphone, Heart, Clock, TrendingUp, Target, Eye } from "lucide-react"

export default function AudiencePage() {
  const audienceData = {
    overview: {
      totalUsers: 156789,
      newUsers: 45623,
      returningUsers: 111166,
      avgSessionDuration: "3m 42s",
      bounceRate: 32.4,
    },
    demographics: {
      age: [
        { range: "18-24", users: 23518, percentage: 15 },
        { range: "25-34", users: 54876, percentage: 35 },
        { range: "35-44", users: 43901, percentage: 28 },
        { range: "45-54", users: 23518, percentage: 15 },
        { range: "55+", users: 10976, percentage: 7 },
      ],
      gender: {
        male: { count: 81530, percentage: 52 },
        female: { count: 72123, percentage: 46 },
        other: { count: 3136, percentage: 2 },
      },
    },
    geography: [
      { country: "United States", users: 70555, percentage: 45, growth: 12.5 },
      { country: "United Kingdom", users: 28222, percentage: 18, growth: 8.3 },
      { country: "Canada", users: 18814, percentage: 12, growth: 15.2 },
      { country: "Australia", users: 12543, percentage: 8, growth: 6.7 },
      { country: "Germany", users: 10975, percentage: 7, growth: 9.1 },
      { country: "Others", users: 15680, percentage: 10, growth: 11.8 },
    ],
    devices: [
      { type: "Mobile", users: 94073, percentage: 60, sessions: 234567 },
      { type: "Desktop", users: 47036, percentage: 30, sessions: 156789 },
      { type: "Tablet", users: 15679, percentage: 10, sessions: 78394 },
    ],
    interests: [
      { category: "Technology", affinity: 85, users: 45623 },
      { category: "Shopping", affinity: 78, users: 38901 },
      { category: "Travel", affinity: 72, users: 31456 },
      { category: "Food & Dining", affinity: 68, users: 28234 },
      { category: "Sports", affinity: 65, users: 25678 },
      { category: "Entertainment", affinity: 62, users: 23456 },
    ],
    behavior: {
      newVsReturning: { new: 29, returning: 71 },
      sessionDuration: [
        { duration: "0-30s", percentage: 25 },
        { duration: "30s-1m", percentage: 20 },
        { duration: "1-3m", percentage: 30 },
        { duration: "3-10m", percentage: 20 },
        { duration: "10m+", percentage: 5 },
      ],
      pageViews: [
        { pages: "1", percentage: 35 },
        { pages: "2-3", percentage: 30 },
        { pages: "4-6", percentage: 20 },
        { pages: "7-10", percentage: 10 },
        { pages: "10+", percentage: 5 },
      ],
    },
  }

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Audience Insights
            </h1>
            <p className="text-lg text-muted-foreground">
              Understand your audience demographics, behavior, and preferences
            </p>
          </div>
          <div className="flex items-center gap-3">
            <DateRangePicker />
          </div>
        </div>

        {/* Overview Metrics */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{audienceData.overview.totalUsers.toLocaleString()}</div>
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
              <CardTitle className="text-sm font-medium">New Users</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{audienceData.overview.newUsers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                {((audienceData.overview.newUsers / audienceData.overview.totalUsers) * 100).toFixed(1)}% of total
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Returning Users</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{audienceData.overview.returningUsers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                {((audienceData.overview.returningUsers / audienceData.overview.totalUsers) * 100).toFixed(1)}% of total
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Session</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{audienceData.overview.avgSessionDuration}</div>
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
              <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{audienceData.overview.bounceRate}%</div>
              <p className="text-xs text-muted-foreground">
                <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100">
                  +2.1%
                </Badge>
                vs last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Analytics */}
        <Tabs defaultValue="demographics" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-[500px]">
            <TabsTrigger value="demographics">Demographics</TabsTrigger>
            <TabsTrigger value="geography">Geography</TabsTrigger>
            <TabsTrigger value="devices">Devices</TabsTrigger>
            <TabsTrigger value="interests">Interests</TabsTrigger>
            <TabsTrigger value="behavior">Behavior</TabsTrigger>
          </TabsList>

          <TabsContent value="demographics" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Age Distribution
                  </CardTitle>
                  <CardDescription>User breakdown by age groups</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {audienceData.demographics.age.map((age, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{age.range} years</span>
                          <span className="font-medium">
                            {age.users.toLocaleString()} ({age.percentage}%)
                          </span>
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
                    <Target className="h-5 w-5 text-primary" />
                    Gender Distribution
                  </CardTitle>
                  <CardDescription>User breakdown by gender</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Male</span>
                        <span className="font-medium">
                          {audienceData.demographics.gender.male.count.toLocaleString()} (
                          {audienceData.demographics.gender.male.percentage}%)
                        </span>
                      </div>
                      <Progress value={audienceData.demographics.gender.male.percentage} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Female</span>
                        <span className="font-medium">
                          {audienceData.demographics.gender.female.count.toLocaleString()} (
                          {audienceData.demographics.gender.female.percentage}%)
                        </span>
                      </div>
                      <Progress value={audienceData.demographics.gender.female.percentage} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Other</span>
                        <span className="font-medium">
                          {audienceData.demographics.gender.other.count.toLocaleString()} (
                          {audienceData.demographics.gender.other.percentage}%)
                        </span>
                      </div>
                      <Progress value={audienceData.demographics.gender.other.percentage} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Audience Trends
                  </CardTitle>
                  <CardDescription>Growth patterns over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <AudienceChart />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="geography" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    Top Countries
                  </CardTitle>
                  <CardDescription>User distribution by country</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {audienceData.geography.map((country, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <div className="flex-1">
                          <div className="font-medium">{country.country}</div>
                          <div className="text-sm text-muted-foreground">{country.users.toLocaleString()} users</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">{country.percentage}%</div>
                          <Badge
                            variant="secondary"
                            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                          >
                            +{country.growth}%
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    Geographic Distribution
                  </CardTitle>
                  <CardDescription>Visual representation of user locations</CardDescription>
                </CardHeader>
                <CardContent>
                  <GeographyChart />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="devices" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-primary" />
                    Device Breakdown
                  </CardTitle>
                  <CardDescription>User sessions by device type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {audienceData.devices.map((device, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{device.type}</span>
                          <span className="font-medium">
                            {device.users.toLocaleString()} users ({device.percentage}%)
                          </span>
                        </div>
                        <Progress value={device.percentage} className="h-2" />
                        <div className="text-xs text-muted-foreground">{device.sessions.toLocaleString()} sessions</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-primary" />
                    Device Usage Trends
                  </CardTitle>
                  <CardDescription>Device preferences over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <DeviceChart />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="interests" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Interest Categories
                  </CardTitle>
                  <CardDescription>User interests and affinities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {audienceData.interests.map((interest, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{interest.category}</span>
                          <span className="font-medium">{interest.users.toLocaleString()} users</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Progress value={interest.affinity} className="h-2 flex-1" />
                          <span className="text-xs text-muted-foreground w-12">{interest.affinity}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Interest Analysis
                  </CardTitle>
                  <CardDescription>Visual breakdown of user interests</CardDescription>
                </CardHeader>
                <CardContent>
                  <InterestChart />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="behavior" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    New vs Returning
                  </CardTitle>
                  <CardDescription>User type distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>New Users</span>
                        <span className="font-medium">{audienceData.behavior.newVsReturning.new}%</span>
                      </div>
                      <Progress value={audienceData.behavior.newVsReturning.new} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Returning Users</span>
                        <span className="font-medium">{audienceData.behavior.newVsReturning.returning}%</span>
                      </div>
                      <Progress value={audienceData.behavior.newVsReturning.returning} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Session Duration
                  </CardTitle>
                  <CardDescription>Time spent on site</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {audienceData.behavior.sessionDuration.map((duration, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{duration.duration}</span>
                          <span className="font-medium">{duration.percentage}%</span>
                        </div>
                        <Progress value={duration.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-primary" />
                    Page Views
                  </CardTitle>
                  <CardDescription>Pages per session</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {audienceData.behavior.pageViews.map((pageView, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{pageView.pages} pages</span>
                          <span className="font-medium">{pageView.percentage}%</span>
                        </div>
                        <Progress value={pageView.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
