"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Users, DollarSign, MousePointer, BarChart3, Download, RefreshCw, TrendingUp, Eye, Target } from "lucide-react"
import { cn } from "@/lib/utils"
import { DashboardLayout } from "@/components/dashboard-layout"
import { MetricsCard } from "@/components/metrics-card"
import { ThemeToggle } from "@/components/theme-toggle"
import { RevenueChart } from "@/components/revenue-chart"
import { UserGrowthChart } from "@/components/user-growth-chart"
import { ConversionChart } from "@/components/conversion-chart"
import { TrafficSourcesChart } from "@/components/traffic-sources-chart"
import { CampaignPerformanceChart } from "@/components/campaign-performance-chart"
import { DataTable } from "@/components/data-table"
import { DateRangePicker } from "@/components/date-range-picker"
import { LoadingSkeleton } from "@/components/loading-skeleton"
import { QuickInsights } from "@/components/quick-insights"
import { RealtimeMetrics } from "@/components/realtime-metrics"
import { AdvancedFilters } from "@/components/advanced-filters"
import { PerformanceInsights } from "@/components/performance-insights"
import { RealtimeNotifications } from "@/components/realtime-notifications"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

// Enhanced mock data
const generateMockData = () => ({
  metrics: {
    revenue: {
      value: 847250,
      change: 12.5,
      trend: "up" as const,
      target: 900000,
      previousPeriod: 753000,
    },
    users: {
      value: 24680,
      change: 8.2,
      trend: "up" as const,
      target: 25000,
      previousPeriod: 22800,
    },
    conversions: {
      value: 3.4,
      change: -2.1,
      trend: "down" as const,
      target: 4.0,
      previousPeriod: 3.47,
    },
    growth: {
      value: 15.8,
      change: 4.3,
      trend: "up" as const,
      target: 18.0,
      previousPeriod: 15.1,
    },
    impressions: {
      value: 2450000,
      change: 18.7,
      trend: "up" as const,
      target: 2500000,
      previousPeriod: 2065000,
    },
    ctr: {
      value: 2.8,
      change: 5.2,
      trend: "up" as const,
      target: 3.0,
      previousPeriod: 2.66,
    },
  },
  campaigns: [
    {
      id: 1,
      name: "Summer Sale 2024",
      status: "Active",
      budget: 25000,
      spent: 18750,
      conversions: 342,
      ctr: 3.2,
      roas: 4.8,
      impressions: 587500,
      clicks: 18800,
      startDate: "2024-06-01",
      endDate: "2024-08-31",
    },
    {
      id: 2,
      name: "Brand Awareness Q4",
      status: "Active",
      budget: 15000,
      spent: 12300,
      conversions: 189,
      ctr: 2.8,
      roas: 3.1,
      impressions: 439286,
      clicks: 12300,
      startDate: "2024-10-01",
      endDate: "2024-12-31",
    },
    {
      id: 3,
      name: "Holiday Campaign",
      status: "Paused",
      budget: 30000,
      spent: 28900,
      conversions: 456,
      ctr: 4.1,
      roas: 5.2,
      impressions: 704878,
      clicks: 28900,
      startDate: "2024-11-15",
      endDate: "2024-12-25",
    },
    {
      id: 4,
      name: "Product Launch",
      status: "Active",
      budget: 20000,
      spent: 8500,
      conversions: 123,
      ctr: 2.1,
      roas: 2.9,
      impressions: 404762,
      clicks: 8500,
      startDate: "2024-09-01",
      endDate: "2024-11-30",
    },
    {
      id: 5,
      name: "Retargeting Campaign",
      status: "Active",
      budget: 12000,
      spent: 11200,
      conversions: 234,
      ctr: 5.8,
      roas: 6.1,
      impressions: 193103,
      clicks: 11200,
      startDate: "2024-08-01",
      endDate: "2024-12-31",
    },
  ],
})

export default function Dashboard() {
  const [data, setData] = useState(generateMockData())
  const [isLoading, setIsLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [filters, setFilters] = useState({
    status: "all",
    campaign: "all",
    dateRange: "all",
    performance: "all"
  })

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setData((prev) => ({
        ...prev,
        metrics: {
          ...prev.metrics,
          revenue: {
            ...prev.metrics.revenue,
            value: prev.metrics.revenue.value + Math.floor(Math.random() * 1000),
          },
          users: {
            ...prev.metrics.users,
            value: prev.metrics.users.value + Math.floor(Math.random() * 10),
          },
          impressions: {
            ...prev.metrics.impressions,
            value: prev.metrics.impressions.value + Math.floor(Math.random() * 5000),
          },
        },
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleRefresh = async () => {
    setIsRefreshing(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setData(generateMockData())
    setIsRefreshing(false)
  }

  const handleExport = (format: "csv" | "pdf") => {
    if (format === "csv") {
      // Create CSV content
      const csvContent = [
        ["Campaign Name", "Status", "Budget", "Spent", "Conversions", "CTR", "ROAS"],
        ...data.campaigns.map(campaign => [
          campaign.name,
          campaign.status,
          campaign.budget,
          campaign.spent,
          campaign.conversions,
          campaign.ctr,
          campaign.roas
        ])
      ].map(row => row.join(",")).join("\n")
      
      // Create and download file
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
      const link = document.createElement("a")
      const url = URL.createObjectURL(blob)
      link.setAttribute("href", url)
      link.setAttribute("download", `analytics-report-${new Date().toISOString().split('T')[0]}.csv`)
      link.style.visibility = "hidden"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else if (format === "pdf") {
      // Generate PDF content
      const htmlContent = `
        <html>
          <head>
            <title>ADmyBRAND Analytics Report</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 20px; }
              .header { text-align: center; margin-bottom: 30px; }
              .metrics { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px; }
              .metric-card { border: 1px solid #ddd; padding: 15px; border-radius: 8px; }
              .metric-value { font-size: 24px; font-weight: bold; color: #3b82f6; }
              table { width: 100%; border-collapse: collapse; margin-top: 20px; }
              th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
              th { background-color: #f3f4f6; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>ADmyBRAND Analytics Report</h1>
              <p>Generated on ${new Date().toLocaleDateString()}</p>
            </div>
            <div class="metrics">
              <div class="metric-card">
                <h3>Total Revenue</h3>
                <div class="metric-value">$${data.metrics.revenue.toLocaleString()}</div>
              </div>
              <div class="metric-card">
                <h3>Total Users</h3>
                <div class="metric-value">${data.metrics.users.toLocaleString()}</div>
              </div>
              <div class="metric-card">
                <h3>Conversions</h3>
                <div class="metric-value">${data.metrics.conversions.toLocaleString()}</div>
              </div>
              <div class="metric-card">
                <h3>Growth Rate</h3>
                <div class="metric-value">${data.metrics.growth}%</div>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Campaign Name</th>
                  <th>Status</th>
                  <th>Budget</th>
                  <th>Spent</th>
                  <th>Conversions</th>
                  <th>CTR</th>
                  <th>ROAS</th>
                </tr>
              </thead>
              <tbody>
                ${data.campaigns.map(campaign => `
                  <tr>
                    <td>${campaign.name}</td>
                    <td>${campaign.status}</td>
                    <td>${campaign.budget}</td>
                    <td>${campaign.spent}</td>
                    <td>${campaign.conversions}</td>
                    <td>${campaign.ctr}</td>
                    <td>${campaign.roas}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </body>
        </html>
      `
      
      // Create PDF using browser's print functionality
      const printWindow = window.open('', '_blank')
      if (printWindow) {
        printWindow.document.write(htmlContent)
        printWindow.document.close()
        printWindow.onload = () => {
          printWindow.print()
          setTimeout(() => printWindow.close(), 1000)
        }
      }
    }
  }

  const handleFiltersChange = (newFilters: typeof filters) => {
    setFilters(newFilters)
    // In a real app, you'd filter the data based on these filters
    console.log("Filters applied:", newFilters)
  }

  // Use filters in the component to avoid the "only used as a type" error
  useEffect(() => {
    // This effect would typically filter data based on current filters
    console.log("Current filters:", filters)
    // Filtering logic would go here in a real application
  }, [filters])

  if (isLoading) {
    return (
      <DashboardLayout>
        <LoadingSkeleton />
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <RealtimeNotifications />
      <div className="space-y-8 animate-fade-in">
        {/* Breadcrumb Navigation */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">ADmyBRAND</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Analytics Overview</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Enhanced Header */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight gradient-text">
                ADmyBRAND Insights
              </h1>
              <p className="text-lg text-muted-foreground">
                AI-powered analytics dashboard for digital marketing agencies
              </p>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <DateRangePicker />
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleExport("csv")}
                className="hover:scale-105 transition-transform"
              >
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleExport("pdf")}
                className="hover:scale-105 transition-transform"
              >
                <Download className="h-4 w-4 mr-2" />
                Export PDF
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="hover:scale-105 transition-transform bg-transparent"
              >
                <RefreshCw className={cn("h-4 w-4 mr-2", isRefreshing && "animate-spin")} />
                Refresh
              </Button>
            </div>
          </div>

          {/* Real-time Metrics Banner */}
          <RealtimeMetrics />
        </div>

        {/* Enhanced Metrics Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <MetricsCard
            title="Total Revenue"
            value={`$${data.metrics.revenue.value.toLocaleString()}`}
            change={data.metrics.revenue.change}
            trend={data.metrics.revenue.trend}
            icon={DollarSign}
            description="vs last month"
            target={data.metrics.revenue.target}
            className="xl:col-span-2"
          />
          <MetricsCard
            title="Active Users"
            value={data.metrics.users.value.toLocaleString()}
            change={data.metrics.users.change}
            trend={data.metrics.users.trend}
            icon={Users}
            description="vs last month"
            target={data.metrics.users.target}
          />
          <MetricsCard
            title="Conversion Rate"
            value={`${data.metrics.conversions.value}%`}
            change={data.metrics.conversions.change}
            trend={data.metrics.conversions.trend}
            icon={MousePointer}
            description="vs last month"
            target={data.metrics.conversions.target}
          />
          <MetricsCard
            title="Growth Rate"
            value={`${data.metrics.growth.value}%`}
            change={data.metrics.growth.change}
            trend={data.metrics.growth.trend}
            icon={BarChart3}
            description="vs last month"
            target={data.metrics.growth.target}
          />
          <MetricsCard
            title="Impressions"
            value={`${(data.metrics.impressions.value / 1000000).toFixed(1)}M`}
            change={data.metrics.impressions.change}
            trend={data.metrics.impressions.trend}
            icon={Eye}
            description="vs last month"
            target={data.metrics.impressions.target}
          />
        </div>

        {/* Quick Insights */}
        <QuickInsights data={data} />

        {/* Advanced Filters */}
        <AdvancedFilters onFiltersChange={handleFiltersChange} />

        {/* Performance Insights */}
        <PerformanceInsights />

        {/* New Conversion Funnel Section */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2">
              <MousePointer className="h-5 w-5 text-primary" />
              Advanced Conversion Funnel
            </CardTitle>
            <CardDescription>Interactive conversion funnel with detailed stage analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <ConversionChart />
          </CardContent>
        </Card>

        {/* Enhanced Charts Section */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
            <TabsTrigger value="overview" className="text-sm">
              Overview
            </TabsTrigger>
            <TabsTrigger value="revenue" className="text-sm">
              Revenue
            </TabsTrigger>
            <TabsTrigger value="users" className="text-sm">
              Users
            </TabsTrigger>
            <TabsTrigger value="campaigns" className="text-sm">
              Campaigns
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4 card-hover">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Revenue Overview
                  </CardTitle>
                  <CardDescription>Monthly revenue trends and projections</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <RevenueChart />
                </CardContent>
              </Card>
              <Card className="col-span-3 card-hover">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Traffic Sources
                  </CardTitle>
                  <CardDescription>Distribution of traffic by source</CardDescription>
                </CardHeader>
                <CardContent>
                  <TrafficSourcesChart />
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-7 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    User Growth
                  </CardTitle>
                  <CardDescription>Daily active users over time</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <UserGrowthChart />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="revenue" className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Revenue Analytics
                </CardTitle>
                <CardDescription>Detailed revenue breakdown and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <RevenueChart />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  User Analytics
                </CardTitle>
                <CardDescription>User growth and engagement metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <UserGrowthChart />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="campaigns" className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Campaign Performance
                </CardTitle>
                <CardDescription>Performance metrics across all campaigns</CardDescription>
              </CardHeader>
              <CardContent>
                <CampaignPerformanceChart />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Enhanced Data Table */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Campaign Performance
            </CardTitle>
            <CardDescription>Detailed view of all marketing campaigns with advanced filtering</CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable data={data.campaigns} />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
