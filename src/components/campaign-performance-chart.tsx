"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const data = [
  { campaign: "Summer Sale", impressions: 125000, clicks: 4200, conversions: 342, spend: 18750 },
  { campaign: "Brand Awareness", impressions: 98000, clicks: 2940, conversions: 189, spend: 12300 },
  { campaign: "Holiday", impressions: 156000, clicks: 6240, conversions: 456, spend: 28900 },
  { campaign: "Product Launch", impressions: 67000, clicks: 1407, conversions: 123, spend: 8500 },
  { campaign: "Retargeting", impressions: 45000, clicks: 2610, conversions: 234, spend: 11200 },
]

export function CampaignPerformanceChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis
          dataKey="campaign"
          className="text-xs fill-muted-foreground"
          axisLine={false}
          tickLine={false}
          angle={-45}
          textAnchor="end"
          height={80}
        />
        <YAxis className="text-xs fill-muted-foreground" axisLine={false} tickLine={false} />
        <Tooltip
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              const data = payload[0].payload
              const ctr = ((data.clicks / data.impressions) * 100).toFixed(2)
              const conversionRate = ((data.conversions / data.clicks) * 100).toFixed(2)
              const cpc = (data.spend / data.clicks).toFixed(2)

              return (
                <div className="rounded-lg border bg-background p-3 shadow-sm min-w-[200px]">
                  <div className="font-medium mb-2">{label}</div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Impressions:</span>
                      <div className="font-medium">{data.impressions.toLocaleString()}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Clicks:</span>
                      <div className="font-medium">{data.clicks.toLocaleString()}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">CTR:</span>
                      <div className="font-medium">{ctr}%</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Conversions:</span>
                      <div className="font-medium">{data.conversions}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Conv. Rate:</span>
                      <div className="font-medium">{conversionRate}%</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">CPC:</span>
                      <div className="font-medium">${cpc}</div>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Bar dataKey="conversions" fill="#3b82f6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
