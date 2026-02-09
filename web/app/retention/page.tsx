"use client";

import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { day: "D1", lift: 6.3 },
  { day: "D2", lift: 8.1 },
  { day: "D3", lift: 12.5 },
  { day: "D4", lift: 14.2 },
  { day: "D5", lift: 15.6 },
  { day: "D6", lift: 19.3 },
  { day: "D7", lift: 25.8 }
];

export default function RetentionPage() {
  return (
    <section>
      <h1 className="text-4xl font-extrabold mb-8">
        RETENTION_DYNAMICS
      </h1>

      <div className="card p-6">
        <h2 className="mb-4 text-lg font-semibold">
          DAILY_RELATIVE_LIFT
        </h2>

        <div className="h-72">
          <ResponsiveContainer>
            <BarChart data={data}>
              <XAxis dataKey="day" stroke="#9aa4c7" />
              <Tooltip
                contentStyle={{
                  background: "#0c1222",
                  border: "1px solid rgba(255,255,255,0.1)"
                }}
              />
              <Bar
                dataKey="lift"
                fill="#10b981"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}