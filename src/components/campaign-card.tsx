"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Play, Pause, Edit, Trash2, TrendingUp, Users, MousePointer, DollarSign } from "lucide-react"

interface CampaignCardProps {
  campaign: {
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
    objective: string
    platform: string
    targetAudience: string
  }
}

export function CampaignCard({ campaign }: CampaignCardProps) {
  const spentPercentage = (campaign.spent / campaign.budget) * 100
  const isActive = campaign.status === "Active"

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">{campaign.name}</CardTitle>
            <CardDescription>
              {campaign.objective} • {campaign.platform}
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={isActive ? "default" : "secondary"}>{campaign.status}</Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Campaign
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {isActive ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
                  {isActive ? "Pause" : "Resume"}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Campaign
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Budget Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Budget Usage</span>
            <span className="font-medium">
              ${campaign.spent.toLocaleString()} / ${campaign.budget.toLocaleString()}
            </span>
          </div>
          <Progress value={spentPercentage} className="h-2" />
          <div className="text-xs text-muted-foreground">{spentPercentage.toFixed(1)}% of budget used</div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MousePointer className="h-3 w-3" />
              Conversions
            </div>
            <div className="text-lg font-bold">{campaign.conversions}</div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3" />
              ROAS
            </div>
            <div className="text-lg font-bold">{campaign.roas}x</div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Users className="h-3 w-3" />
              CTR
            </div>
            <div className="text-lg font-bold">{campaign.ctr}%</div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <DollarSign className="h-3 w-3" />
              CPC
            </div>
            <div className="text-lg font-bold">${(campaign.spent / campaign.clicks).toFixed(2)}</div>
          </div>
        </div>

        {/* Campaign Details */}
        <div className="pt-2 border-t space-y-2 text-xs text-muted-foreground">
          <div>Target: {campaign.targetAudience}</div>
          <div>
            Period: {campaign.startDate} - {campaign.endDate}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
