"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function DiffBarChart({
  control,
  treatment
}: {
  control: number;
  treatment: number;
}) {
  const data = [
    { group: "Control", value: control },
    { group: "Treatment", value: treatment }
  ];

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="group" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#6366f1" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}