"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Header from "@/components/Header";
import AnimatedCard from "@/components/AnimatedCard";
import MetricCard from "@/components/MetricCard";
import MethodsModal from "@/components/MethodsModal";
import KpiCard from "@/components/KpiCard";
import DiffBarChart from "@/components/DiffBarChart";

import results from "@/data/results.json";

export default function Home() {
  const [metricKey, setMetricKey] = useState<"retention_1" | "retention_7">(
    "retention_1"
  );
  const [showMethods, setShowMethods] = useState(false);

  const metric = results[metricKey];

  return (
    <>
      <Header />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-7xl px-6 py-14"
      >
        {/* ───────────────── Intro ───────────────── */}
        <section className="mb-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            Experiment Overview
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            This dashboard presents results from a randomized A/B test evaluating
            the impact of moving a progression gate from level 30 to level 40 in a
            mobile game. Results are precomputed using robust statistical methods
            and surfaced here for decision-making.
          </p>
        </section>

        {/* ───────────── Controls ───────────── */}
        <section className="mb-10 flex items-end justify-between gap-6">
          <div>
            <label className="block text-xs font-medium text-slate-500">
              Retention Metric
            </label>
            <select
              className="mt-2 rounded-xl border bg-white px-4 py-2 text-sm shadow-sm"
              value={metricKey}
              onChange={(e) =>
                setMetricKey(
                  e.target.value as "retention_1" | "retention_7"
                )
              }
            >
              <option value="retention_1">Day-1 Retention</option>
              <option value="retention_7">Day-7 Retention</option>
            </select>
          </div>

          <button
            onClick={() => setShowMethods(true)}
            className="text-sm font-medium text-indigo-600 hover:underline"
          >
            View statistical methods
          </button>
        </section>

        {/* ───────────── KPI STRIP ───────────── */}
        <section className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <KpiCard
            label="Control Retention"
            value={`${(metric.control_rate * 100).toFixed(1)}%`}
            accent="indigo"
          />
          <KpiCard
            label="Treatment Retention"
            value={`${(metric.treatment_rate * 100).toFixed(1)}%`}
            accent="emerald"
          />
          <KpiCard
            label="Absolute Lift"
            value={`+${(metric.effect_size * 100).toFixed(2)}%`}
            sub="Treatment − Control"
            accent="emerald"
          />
          <KpiCard
            label="Bayesian Confidence"
            value={`${(metric.bayesian_prob * 100).toFixed(1)}%`}
            sub="P(Treatment > Control)"
            accent="indigo"
          />
        </section>

        {/* ───────────── PRIMARY METRIC CARD ───────────── */}
        <section className="mb-14 max-w-xl">
          <AnimatedCard>
            <MetricCard
              title={metric.metric}
              effect={metric.effect_size}
              ci={metric.ci}
              prob={metric.bayesian_prob}
            />
          </AnimatedCard>
        </section>

        {/* ───────────── CHARTS SECTION ───────────── */}
        <section className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Bar comparison */}
          <AnimatedCard>
            <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
              <h3 className="mb-2 text-sm font-medium text-slate-700">
                Retention Comparison
              </h3>
              <p className="mb-4 text-xs text-slate-500">
                Comparison of observed retention rates between control and
                treatment groups.
              </p>
              <DiffBarChart
                control={metric.control_rate}
                treatment={metric.treatment_rate}
              />
            </div>
          </AnimatedCard>

          {/* Distribution */}
          <AnimatedCard>
            <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
              <h3 className="mb-2 text-sm font-medium text-slate-700">
                Outcome Distribution
              </h3>
              <p className="mb-4 text-xs text-slate-500">
                Binary outcome distributions highlight non-normality and motivate
                resampling-based inference.
              </p>
              <Image
                src={`/plots/${metricKey}_distribution.png`}
                alt="Retention distribution"
                width={600}
                height={400}
                className="mx-auto"
              />
            </div>
          </AnimatedCard>
        </section>

        {/* ───────────── FOOTNOTE ───────────── */}
        <section className="mt-16 max-w-3xl text-xs text-slate-500">
          All statistical analyses (bootstrap confidence intervals, permutation
          tests, Bayesian inference, power analysis, and peeking simulations) are
          executed offline and documented in the GitHub repository. This dashboard
          mirrors production experimentation systems where dashboards serve as
          presentation layers rather than computation engines.
        </section>
      </motion.main>

      {/* Methods modal */}
      <MethodsModal
        isOpen={showMethods}
        onClose={() => setShowMethods(false)}
      />
    </>
  );
}