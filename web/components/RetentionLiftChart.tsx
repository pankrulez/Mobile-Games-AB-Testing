"use client";

import ReactECharts from "echarts-for-react";
import darkSystemTheme from "@/lib/echartsTheme";
import { confidence } from "@/data/confidence";

interface LiftData {
  day: string;
  lift: number;
}

export default function RetentionLiftChart({ data }: { data: LiftData[] }) {
  const strongConfidence = confidence.posteriorProbability > 0.95;

  const option = {
    grid: {
      left: 10,
      right: 10,
      bottom: 20,
      top: 20,
      containLabel: true
    },
    xAxis: {
      type: "category",
      data: data.map(d => d.day),
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: "#9aa4c7"
      }
    },
    yAxis: {
      type: "value",
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.05)"
        }
      },
      axisLabel: {
        formatter: "{value}%",
        color: "#6b7280"
      }
    },
    tooltip: {
      trigger: "item",
      formatter: (params: any) => {
        return `
          <div style="padding:6px">
            <div style="font-size:12px;color:#9aa4c7">${params.name}</div>
            <div style="font-size:16px;font-weight:600;color:#fff">
              +${params.value}%
            </div>
          </div>
        `;
      }
    },
    series: [
      {
        type: "bar",
        data: data.map(d => d.lift),
        barWidth: 32,
        itemStyle: {
          borderRadius: [6, 6, 0, 0],
          color: strongConfidence ? "#10b981" : "#f59e0b",
          shadowBlur: 12,
          shadowColor: strongConfidence
            ? "rgba(16,185,129,0.4)"
            : "rgba(245,158,11,0.4)"
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 20
          }
        },
        animationDuration: 900,
        animationEasing: "cubicOut"
      }
    ]
  };

  return (
    <div
      role="img"
      aria-label="Bar chart showing daily relative retention lift from Day 1 to Day 7"
    >
      <ReactECharts
        option={option}
        style={{ height: 300 }}
        theme={darkSystemTheme}
      />
    </div>
  );
}