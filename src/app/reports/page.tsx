"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DashboardLayout } from "@/components/dashboard-layout"
import { ReportCard } from "@/components/report-card"
import { Download, FileText, BarChart3, TrendingUp, Filter, Share, Clock, CheckCircle } from "lucide-react"

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState("performance")
  const [dateRange, setDateRange] = useState("last30days")

  const reports = [
    {
      id: "performance",
      title: "Performance Report",
      description: "Comprehensive campaign performance metrics",
      type: "Campaign Analysis",
      lastGenerated: "2024-01-15",
      status: "Ready",
      metrics: {
        campaigns: 12,
        totalSpent: 125000,
        conversions: 1234,
        roas: 4.2,
      },
    },
    {
      id: "audience",
      title: "Audience Insights Report",
      description: "Detailed audience demographics and behavior",
      type: "Audience Analysis",
      lastGenerated: "2024-01-14",
      status: "Ready",
      metrics: {
        totalUsers: 45623,
        newUsers: 12456,
        returningUsers: 33167,
        avgSessionDuration: "3m 42s",
      },
    },
    {
      id: "roi",
      title: "ROI Analysis Report",
      description: "Return on investment across all channels",
      type: "Financial Analysis",
      lastGenerated: "2024-01-13",
      status: "Ready",
      metrics: {
        totalRevenue: 847250,
        totalCost: 201500,
        netProfit: 645750,
        roiPercentage: 320.5,
      },
    },
    {
      id: "competitive",
      title: "Competitive Analysis",
      description: "Market position and competitor insights",
      type: "Market Research",
      lastGenerated: "2024-01-12",
      status: "Generating",
      metrics: {
        marketShare: 12.5,
        competitorCount: 8,
        rankingPosition: 3,
        shareOfVoice: 18.7,
      },
    },
    {
      id: "attribution",
      title: "Attribution Report",
      description: "Multi-touch attribution analysis",
      type: "Attribution Analysis",
      lastGenerated: "2024-01-11",
      status: "Ready",
      metrics: {
        touchpoints: 156789,
        attributedConversions: 2345,
        assistedConversions: 1876,
        attributionValue: 456789,
      },
    },
    {
      id: "creative",
      title: "Creative Performance",
      description: "Ad creative effectiveness analysis",
      type: "Creative Analysis",
      lastGenerated: "2024-01-10",
      status: "Ready",
      metrics: {
        totalCreatives: 45,
        topPerforming: 8,
        avgCtr: 3.2,
        bestPerformingCtr: 8.7,
      },
    },
  ]

  const scheduledReports = [
    {
      name: "Weekly Performance Summary",
      frequency: "Weekly",
      nextRun: "2024-01-22",
      recipients: 3,
    },
    {
      name: "Monthly ROI Analysis",
      frequency: "Monthly",
      nextRun: "2024-02-01",
      recipients: 5,
    },
    {
      name: "Daily Campaign Alerts",
      frequency: "Daily",
      nextRun: "2024-01-16",
      recipients: 2,
    },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Reports & Analytics
            </h1>
            <p className="text-lg text-muted-foreground">
              Generate comprehensive reports and schedule automated insights
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Select value={selectedReport} onValueChange={setSelectedReport}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select report type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="performance">Performance</SelectItem>
                <SelectItem value="audience">Audience</SelectItem>
                <SelectItem value="competitive">Competitive</SelectItem>
                <SelectItem value="attribution">Attribution</SelectItem>
              </SelectContent>
            </Select>
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select date range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last7days">Last 7 days</SelectItem>
                <SelectItem value="last30days">Last 30 days</SelectItem>
                <SelectItem value="last90days">Last 90 days</SelectItem>
                <SelectItem value="lastyear">Last year</SelectItem>
                <SelectItem value="custom">Custom range</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button className="hover:scale-105 transition-transform">
              <Download className="h-4 w-4 mr-2" />
              Export All
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{reports.length}</div>
              <p className="text-xs text-muted-foreground">
                {reports.filter((r) => r.status === "Ready").length} ready to download
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Scheduled Reports</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{scheduledReports.length}</div>
              <p className="text-xs text-muted-foreground">Automated delivery</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Data Points</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.4M</div>
              <p className="text-xs text-muted-foreground">Analyzed this month</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Report Views</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-muted-foreground">
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                >
                  +18%
                </Badge>
                vs last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Available Reports */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Available Reports
            </CardTitle>
            <CardDescription>Generate and download comprehensive analytics reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {reports.map((report) => (
                <ReportCard key={report.id} report={report} />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Scheduled Reports */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Scheduled Reports
            </CardTitle>
            <CardDescription>Automated report generation and delivery</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scheduledReports.map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-muted/50">
                  <div className="space-y-1">
                    <div className="font-medium">{report.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {report.frequency} • Next run: {report.nextRun} • {report.recipients} recipients
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Active
                    </Badge>
                    <Button variant="outline" size="sm">
                      <Share className="h-4 w-4 mr-2" />
                      Configure
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
