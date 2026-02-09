"use client";

import ReactECharts from "echarts-for-react";
import darkSystemTheme from "../lib/echartsTheme";
import { retentionTrajectory } from "../data/retentionTrajectory";
import { confidence } from "../data/confidence";

export default function RetentionTrajectoryChart() {
  const strongConfidence = confidence.posteriorProbability > 0.95;

  const option = {
    grid: {
      left: 20,
      right: 20,
      bottom: 20,
      top: 20,
      containLabel: true
    },
    tooltip: {
      trigger: "axis",
      formatter: (params: any) => {
        const c = params[0];
        const t = params[1];
        return `
          <div style="padding:8px">
            <div style="font-size:12px;color:#9aa4c7;margin-bottom:4px">
              ${c.axisValue}
            </div>
            <div style="font-size:13px;color:#7c83ff">
              Control: ${c.data}%
            </div>
            <div style="font-size:13px;color:#10b981">
              Treatment: ${t.data}%
            </div>
          </div>
        `;
      }
    },
    xAxis: {
      type: "category",
      data: retentionTrajectory.days,
      boundaryGap: false,
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
    series: [
      {
        name: "Control",
        type: "line",
        data: retentionTrajectory.control,
        smooth: true,
        symbol: "circle",
        symbolSize: 6,
        lineStyle: {
          width: 3,
          type: "dashed",
          color: "#7c83ff"
        },
        itemStyle: {
          color: "#7c83ff"
        }
      },
      {
        name: "Treatment",
        type: "line",
        data: retentionTrajectory.treatment,
        smooth: true,
        symbol: "circle",
        symbolSize: 6,
        lineStyle: {
          width: strongConfidence ? 4 : 3,
          type: "solid",
          color: "#10b981",
          shadowBlur: strongConfidence ? 12 : 0,
          shadowColor: "rgba(16,185,129,0.4)"
        },
        itemStyle: {
          color: "#10b981"
        }
      }
    ],
    animationDuration: 1000,
    animationEasing: "cubicOut"
  };

  return (
    <div
      role="img"
      aria-label="Line chart comparing retention trajectories of control and treatment variants over seven days"
    >
      <ReactECharts
        option={option}
        theme={darkSystemTheme}
        style={{ height: 320 }}
      />
    </div>
  );
}