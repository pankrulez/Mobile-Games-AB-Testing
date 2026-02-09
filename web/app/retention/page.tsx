"use client";

import RetentionLiftChart from "@/components/RetentionLiftChart";
import RetentionTrajectoryChart from "@/components/RetentionTrajectoryChart";

const liftData = [
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
      <h1 className="text-4xl font-extrabold mb-2">
        RETENTION_DYNAMICS
      </h1>
      <p className="text-[var(--text-secondary)] mb-10">
        Cohort behavior analysis / first 7 days
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart */}
        <div className="card p-6 lg:col-span-2">
          <h2 className="text-sm font-semibold mb-4">
            DAILY_RELATIVE_PERFORMANCE_LIFT
          </h2>
          <RetentionLiftChart data={liftData} />
        </div>

        {/* Retention trajectory */}
        <div className="card p-6 mt-10">
          <h2 className="text-sm font-semibold mb-4">
            RETENTION_TRAJECTORY
          </h2>

          <RetentionTrajectoryChart />

          <p className="mt-3 text-xs text-[var(--text-secondary)]">
            Treatment shows sustained retention advantage across the first 7 days,
            with divergence increasing after Day 3.
          </p>
        </div>

        {/* Callouts */}
        <div className="space-y-6">
          <div className="card p-6 border border-[var(--accent-green)]/40">
            <p className="text-xs text-[var(--accent-green)] mb-1">
              TOP PERFORMANCE
            </p>
            <div className="text-3xl font-bold">
              Day 7
            </div>
            <p className="text-sm text-[var(--text-secondary)]">
              +25.8% lift
            </p>
          </div>

          <div className="card p-6 border border-[var(--accent-blue)]/40">
            <p className="text-xs text-[var(--accent-blue)] mb-1">
              INITIAL HOOK
            </p>
            <div className="text-3xl font-bold">
              Day 1
            </div>
            <p className="text-sm text-[var(--text-secondary)]">
              +6.3% lift
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}