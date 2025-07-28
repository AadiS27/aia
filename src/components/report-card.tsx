"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Eye, Calendar, CheckCircle, Clock } from "lucide-react"

interface ReportCardProps {
  report: {
    id: string
    title: string
    description: string
    type: string
    lastGenerated: string
    status: string
    metrics: Record<string, number | string | undefined>
  }
}

export function ReportCard({ report }: ReportCardProps) {
  const isReady = report.status === "Ready"

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">{report.title}</CardTitle>
            <CardDescription>{report.description}</CardDescription>
          </div>
          <Badge variant={isReady ? "default" : "secondary"}>
            {isReady ? <CheckCircle className="h-3 w-3 mr-1" /> : <Clock className="h-3 w-3 mr-1" />}
            {report.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Type:</span>
          <Badge variant="outline">{report.type}</Badge>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Last Generated:</span>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {report.lastGenerated}
          </div>
        </div>

        <div className="pt-2 border-t">
          <div className="grid grid-cols-2 gap-2 text-xs">
            {Object.entries(report.metrics)
              .filter(([, value]) => value !== undefined)
              .map(([key, value]) => (
              <div key={key} className="space-y-1">
                <div className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</div>
                <div className="font-medium">{typeof value === "number" ? value.toLocaleString() : value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button variant="outline" size="sm" className="flex-1 bg-transparent" disabled={!isReady}>
            <Eye className="h-3 w-3 mr-1" />
            Preview
          </Button>
          <Button size="sm" className="flex-1" disabled={!isReady}>
            <Download className="h-3 w-3 mr-1" />
            Download
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
