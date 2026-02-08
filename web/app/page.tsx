"use client";

import { useState } from "react";
import Header from "@/components/Header";
import MetricCard from "@/components/MetricCard";
import results from "@/data/results.json";
import MethodsModal from "@/components/MethodsModal";

export default function Home() {
  const [metricKey, setMetricKey] = useState<"retention_1" | "retention_7">(
    "retention_1"
  );

  const metric = results[metricKey];
  const [showMethods, setShowMethods] = useState(false);

  return (
    <>
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-12">
        {/* Intro */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-900">
            Experiment Summary
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-600">
            This dashboard presents precomputed results from a randomized A/B test
            evaluating the impact of moving a progression gate from level 30 to
            level 40 in a mobile game.
          </p>
        </section>

        {/* Metric Selector */}
        <section className="mb-6">
          <label className="block text-sm font-medium text-slate-700">
            Retention Metric
          </label>
          <select
            className="mt-2 rounded-md border px-3 py-2 text-sm"
            value={metricKey}
            onChange={(e) =>
              setMetricKey(e.target.value as "retention_1" | "retention_7")
            }
          >
            <option value="retention_1">Day-1 Retention</option>
            <option value="retention_7">Day-7 Retention</option>
          </select>
        </section>

        <button
          onClick={() => setShowMethods(true)}
          className="mt-2 text-sm text-slate-600 underline hover:text-slate-900"
        >
          View statistical methods
        </button>


        {/* Metric Card */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <MetricCard
            title={metric.metric}
            effect={metric.effect_size}
            ci={metric.ci}
            prob={metric.bayesian_prob}
          />
        </section>

        {/* Distribution Plot */}
        <section className="mt-8">
          <h3 className="mb-2 text-sm font-medium text-slate-700">
            Outcome Distribution
          </h3>

          <div className="rounded-lg border bg-white p-4">
            <img
              src={`/plots/${metricKey}_distribution.png`}
              alt={`${metric.metric} distribution`}
              className="mx-auto max-w-full"
            />
          </div>

          <p className="mt-2 text-xs text-slate-500">
            Distributions shown are based on observed outcomes in control and treatment
            groups. Visual inspection helps validate non-normality and motivates the
            use of resampling-based inference methods.
          </p>
        </section>

        {/* Explanation Callout */}
        <section className="mt-10 rounded-lg border bg-slate-50 p-4 text-sm text-slate-600">
          <strong>Note:</strong> Results shown here are precomputed.
          Computationally intensive analyses (bootstrap confidence intervals,
          permutation testing, Bayesian inference, and power analysis) are
          executed offline and documented in the GitHub repository. This mirrors
          how experimentation results are typically surfaced in production
          systems.
        </section>

        {/* Footer */}
        <section className="mt-6 text-xs text-slate-500">
          This dashboard focuses on clarity and decision support rather than
          real-time computation.
        </section>

        <MethodsModal
          isOpen={showMethods}
          onClose={() => setShowMethods(false)}
        />

      </main>
    </>
  );
}