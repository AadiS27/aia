"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Lightbulb, Target, ArrowRight } from "lucide-react"

interface InsightCardProps {
  insight: {
    id: number
    type: string
    title: string
    description: string
    impact: string
    confidence: number
    potentialLift?: string
    potentialLoss?: string
    category: string
    actionable: boolean
    timeframe: string
  }
  priority?: boolean
}

export function InsightCard({ insight, priority }: InsightCardProps) {
  const getIcon = () => {
    switch (insight.type) {
      case "opportunity":
        return <TrendingUp className="h-4 w-4 text-green-500" />
      case "alert":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      case "trend":
        return <TrendingDown className="h-4 w-4 text-blue-500" />
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "prediction":
        return <Target className="h-4 w-4 text-purple-500" />
      default:
        return <Lightbulb className="h-4 w-4 text-yellow-500" />
    }
  }

  const getImpactColor = (): "default" | "secondary" | "destructive" | "outline" => {
    switch (insight.impact) {
      case "High":
        return "destructive"
      case "Medium":
        return "secondary"
      case "Positive":
        return "default"
      default:
        return "outline"
    }
  }

  return (
    <Card className={`hover:shadow-lg transition-all duration-300 ${priority ? "border-primary/50 bg-primary/5" : ""}`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3 flex-1">
            <div className="mt-1">{getIcon()}</div>
            <div className="space-y-2 flex-1">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="font-medium">{insight.title}</div>
                  <div className="text-sm text-muted-foreground">{insight.description}</div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Badge variant={getImpactColor()}>{insight.impact} Impact</Badge>
                  <Badge variant="outline">{insight.category}</Badge>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm">
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground">Confidence</div>
                    <div className="flex items-center gap-2">
                      <Progress value={insight.confidence} className="h-1 w-16" />
                      <span className="text-xs font-medium">{insight.confidence}%</span>
                    </div>
                  </div>
                  {(insight.potentialLift || insight.potentialLoss) && (
                    <div className="space-y-1">
                      <div className="text-xs text-muted-foreground">Potential Impact</div>
                      <div
                        className={`text-sm font-medium ${insight.potentialLift ? "text-green-600" : "text-red-600"}`}
                      >
                        {insight.potentialLift || insight.potentialLoss}
                      </div>
                    </div>
                  )}
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground">Timeframe</div>
                    <div className="text-sm font-medium">{insight.timeframe}</div>
                  </div>
                </div>

                {insight.actionable && (
                  <Button variant="outline" size="sm" className="hover:scale-105 transition-transform bg-transparent">
                    Take Action
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
