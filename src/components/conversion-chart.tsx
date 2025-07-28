"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ChevronDown, ChevronUp, Users, Eye, MousePointer, ShoppingCart, UserCheck } from "lucide-react"

const conversionData = [
  {
    stage: "Visitors",
    count: 50000,
    percentage: 100,
    color: "bg-blue-500",
    textColor: "text-blue-600",
    bgColor: "bg-blue-50",
    icon: Eye,
    description: "Total website visitors"
  },
  {
    stage: "Interested Users", 
    count: 35000,
    percentage: 70,
    color: "bg-green-500",
    textColor: "text-green-600", 
    bgColor: "bg-green-50",
    icon: Users,
    description: "Users who engaged with content"
  },
  {
    stage: "Added to Cart",
    count: 15000,
    percentage: 30,
    color: "bg-orange-500",
    textColor: "text-orange-600",
    bgColor: "bg-orange-50", 
    icon: ShoppingCart,
    description: "Products added to cart"
  },
  {
    stage: "Started Checkout",
    count: 8000,
    percentage: 16,
    color: "bg-purple-500",
    textColor: "text-purple-600",
    bgColor: "bg-purple-50",
    icon: MousePointer,
    description: "Initiated checkout process"
  },
  {
    stage: "Completed Purchase",
    count: 5000,
    percentage: 10,
    color: "bg-emerald-500", 
    textColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    icon: UserCheck,
    description: "Successfully completed orders"
  }
]

export function ConversionChart() {
  const [expandedStage, setExpandedStage] = useState<number | null>(null)

  const getDropOffRate = (current: number, next: number) => {
    if (next === undefined) return 0
    return ((current - next) / current * 100).toFixed(1)
  }

  const getConversionRate = (current: number, total: number) => {
    return ((current / total) * 100).toFixed(1)
  }

  return (
    <div className="space-y-4">
      {/* Header Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <Card className="p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">10.0%</div>
            <div className="text-sm text-muted-foreground">Overall Conversion</div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">50,000</div>
            <div className="text-sm text-muted-foreground">Total Visitors</div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">90.0%</div>
            <div className="text-sm text-muted-foreground">Total Drop-off</div>
          </div>
        </Card>
      </div>

      {/* Conversion Funnel */}
      <div className="space-y-3">
        {conversionData.map((stage, index) => {
          const nextStage = conversionData[index + 1]
          const dropOffRate = nextStage ? getDropOffRate(stage.count, nextStage.count) : 0
          const isExpanded = expandedStage === index
          const Icon = stage.icon

          return (
            <div key={stage.stage} className="space-y-2">
              {/* Stage Card */}
              <Card 
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${stage.bgColor} border-l-4 ${stage.color.replace('bg-', 'border-')}`}
                onClick={() => setExpandedStage(isExpanded ? null : index)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${stage.color}`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{stage.stage}</h3>
                        <p className="text-sm text-muted-foreground">{stage.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold">{stage.count.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">
                          {getConversionRate(stage.count, conversionData[0].count)}% of total
                        </div>
                      </div>
                      <Badge variant="secondary" className={`${stage.textColor} font-semibold`}>
                        {stage.percentage}%
                      </Badge>
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <Progress 
                      value={stage.percentage} 
                      className="h-3"
                      style={{
                        background: `linear-gradient(to right, ${stage.color.replace('bg-', '')} 0%, ${stage.color.replace('bg-', '')} ${stage.percentage}%, #e5e7eb ${stage.percentage}%, #e5e7eb 100%)`
                      }}
                    />
                  </div>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="font-medium">Conversion Rate</div>
                          <div className={stage.textColor}>
                            {getConversionRate(stage.count, conversionData[0].count)}%
                          </div>
                        </div>
                        <div>
                          <div className="font-medium">Drop-off to Next</div>
                          <div className="text-red-600">
                            {nextStage ? `${dropOffRate}%` : 'Final Stage'}
                          </div>
                        </div>
                        <div>
                          <div className="font-medium">Improvement Potential</div>
                          <div className="text-orange-600">
                            {nextStage ? `+${Math.round(parseFloat(dropOffRate.toString()) * 0.1)}%` : 'Optimize Retention'}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Drop-off Indicator */}
              {nextStage && (
                <div className="flex items-center justify-center py-2">
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 px-3 py-1 rounded-full text-sm">
                    <ChevronDown className="h-4 w-4" />
                    <span className="font-medium">{dropOffRate}% drop-off</span>
                    <span className="text-muted-foreground">
                      ({(stage.count - nextStage.count).toLocaleString()} users lost)
                    </span>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Summary Insights */}
      <Card className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
        <CardHeader>
          <CardTitle className="text-lg">Key Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="font-medium text-emerald-600">✓ Strongest Performance</div>
              <div>Visitor to Interest conversion: 70% (Industry avg: 45%)</div>
            </div>
            <div className="space-y-2">
              <div className="font-medium text-red-600">⚠ Biggest Opportunity</div>
              <div>Cart to Checkout: 53% conversion needs improvement</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
