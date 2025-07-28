"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DashboardLayout } from "@/components/dashboard-layout"
import { DataTable } from "@/components/data-table"
import { CampaignCard } from "@/components/campaign-card"
import { Plus, Target, DollarSign, MousePointer, TrendingUp } from "lucide-react"

export default function CampaignsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [campaigns, setCampaigns] = useState([
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
      objective: "Sales",
      platform: "Google Ads",
      targetAudience: "25-45 years, Shopping enthusiasts",
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
      objective: "Brand Awareness",
      platform: "Facebook Ads",
      targetAudience: "18-35 years, Tech-savvy",
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
      objective: "Sales",
      platform: "Multi-platform",
      targetAudience: "All demographics",
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
      objective: "Traffic",
      platform: "LinkedIn Ads",
      targetAudience: "Professionals, B2B",
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
      objective: "Conversions",
      platform: "Google Ads",
      targetAudience: "Website visitors",
    },
  ])

  const totalStats = {
    totalBudget: campaigns.reduce((sum, c) => sum + c.budget, 0),
    totalSpent: campaigns.reduce((sum, c) => sum + c.spent, 0),
    totalConversions: campaigns.reduce((sum, c) => sum + c.conversions, 0),
    avgROAS: campaigns.reduce((sum, c) => sum + c.roas, 0) / campaigns.length,
  }

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Campaign Management
            </h1>
            <p className="text-lg text-muted-foreground">Create, manage, and optimize your marketing campaigns</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={() => setViewMode(viewMode === "grid" ? "table" : "grid")}>
              {viewMode === "grid" ? "Table View" : "Grid View"}
            </Button>
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button className="hover:scale-105 transition-transform">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Campaign
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Create New Campaign</DialogTitle>
                  <DialogDescription>
                    Set up a new marketing campaign with your target audience and budget.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Campaign Name</Label>
                      <Input id="name" placeholder="Enter campaign name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="objective">Objective</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select objective" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sales">Sales</SelectItem>
                          <SelectItem value="leads">Lead Generation</SelectItem>
                          <SelectItem value="traffic">Website Traffic</SelectItem>
                          <SelectItem value="awareness">Brand Awareness</SelectItem>
                          <SelectItem value="engagement">Engagement</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget ($)</Label>
                      <Input id="budget" type="number" placeholder="10000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="platform">Platform</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select platform" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="google">Google Ads</SelectItem>
                          <SelectItem value="facebook">Facebook Ads</SelectItem>
                          <SelectItem value="linkedin">LinkedIn Ads</SelectItem>
                          <SelectItem value="twitter">Twitter Ads</SelectItem>
                          <SelectItem value="multi">Multi-platform</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="start-date">Start Date</Label>
                      <Input id="start-date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="end-date">End Date</Label>
                      <Input id="end-date" type="date" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="audience">Target Audience</Label>
                    <Textarea id="audience" placeholder="Describe your target audience..." />
                  </div>
                </div>
                <div className="flex justify-end gap-3">
                  <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => {
                    // Create new campaign (simplified demo)
                    const newCampaign = {
                      id: Date.now(),
                      name: (document.getElementById('name') as HTMLInputElement)?.value || "New Campaign",
                      status: "Active" as const,
                      budget: parseInt((document.getElementById('budget') as HTMLInputElement)?.value || "5000"),
                      spent: 0,
                      conversions: 0,
                      ctr: 0.0,
                      roas: 0.0,
                      impressions: 0,
                      clicks: 0,
                      startDate: (document.getElementById('start-date') as HTMLInputElement)?.value || new Date().toISOString().split('T')[0],
                      endDate: (document.getElementById('end-date') as HTMLInputElement)?.value || new Date().toISOString().split('T')[0],
                      objective: "Sales",
                      platform: "Google Ads",
                      targetAudience: (document.getElementById('audience') as HTMLTextAreaElement)?.value || "General audience"
                    }
                    setCampaigns([newCampaign, ...campaigns])
                    setIsCreateDialogOpen(false)
                  }}>Create Campaign</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalStats.totalBudget.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Across all campaigns</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalStats.totalSpent.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                {((totalStats.totalSpent / totalStats.totalBudget) * 100).toFixed(1)}% of budget used
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Conversions</CardTitle>
              <MousePointer className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalStats.totalConversions.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Across all campaigns</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average ROAS</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalStats.avgROAS.toFixed(1)}x</div>
              <p className="text-xs text-muted-foreground">Return on ad spend</p>
            </CardContent>
          </Card>
        </div>

        {/* Campaigns Display */}
        {viewMode === "grid" ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {campaigns.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        ) : (
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                All Campaigns
              </CardTitle>
              <CardDescription>Manage and monitor all your marketing campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable data={campaigns} />
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  )
}
