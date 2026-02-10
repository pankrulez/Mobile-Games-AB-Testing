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
        RETENTION_ANALYSIS
      </h1>
      <p className="text-[var(--text-secondary)] mb-10">
        This tab explores how retention evolves over time and how uncertainty
        around lift is quantified using resampling-based and Bayesian methods.
      </p>

      {/* Why this analysis */}
      <div className="card p-6 max-w-3xl mb-8">
        <h2 className="heading-md mb-2">
          Why retention is analyzed this way
        </h2>
        <p className="body">
          Retention is binary at the user level and often exhibits skewed
          distributions. To avoid strong parametric assumptions, bootstrap
          and Bayesian approaches are used to capture uncertainty more
          realistically.
        </p>
      </div>

      {/* Lift chart */}
      <div className="card p-6 mb-10">
        <h2 className="heading-md mb-4">
          Daily retention lift
        </h2>
        <RetentionLiftChart data={liftData} />
        <p className="body mt-4 max-w-3xl">
          Positive lift is observed across all days, with confidence intervals
          remaining above zero for most of the observation window.
        </p>
      </div>

      {/* Trajectory chart */}
      <div className="card p-6 mb-10">
        <h2 className="heading-md mb-4">
          Retention trajectory
        </h2>
        <RetentionTrajectoryChart />
        <p className="body mt-4 max-w-3xl">
          Divergence between control and treatment increases after Day 3,
          suggesting the effect is driven by sustained engagement rather than
          short-term novelty.
        </p>
      </div>

      {/* Limitations */}
      <div className="card p-6 max-w-3xl">
        <h2 className="heading-md mb-2">
          Scope and limitations
        </h2>
        <p className="body">
          This analysis focuses exclusively on retention outcomes. Monetization
          and long-term churn effects are intentionally excluded to avoid
          drawing conclusions beyond the available data.
        </p>
      </div>
    </section>
  );
}