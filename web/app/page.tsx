"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Header from "../components/Header";
import MetricCard from "../components/MetricCard";
import KpiCard from "../components/KpiCard";
import MethodsModal from "../components/MethodsModal";
import DiffBarChart from "../components/DiffBarChart";

import results from "../data/results.json";

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
        transition={{ duration: 0.3 }}
        className="mx-auto max-w-7xl px-6 py-14"
      >
        {/* Light content canvas */}
        <div className="rounded-3xl bg-slate-50 p-10 shadow-xl ring-1 ring-slate-200">
          {/* Overview */}
          <section className="mb-10 max-w-3xl">
            <h2 className="text-2xl font-semibold text-slate-900">
              Experiment Overview
            </h2>
            <p className="mt-3 text-sm text-slate-700">
              This dashboard presents results from a randomized A/B test
              evaluating the impact of moving a progression gate from level 30 to
              level 40 in a mobile game.
            </p>
          </section>

          {/* Controls */}
          <section className="mb-10 flex items-end justify-between">
            <div>
              <label className="block text-xs font-medium text-slate-600">
                Retention Metric
              </label>
              <select
                className="mt-2 rounded-lg border bg-white px-4 py-2 text-sm shadow-sm"
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

          {/* KPIs */}
          <section className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <KpiCard
              title="Control Retention"
              value={`${(metric.control_rate * 100).toFixed(1)}%`}
            />
            <KpiCard
              title="Treatment Retention"
              value={`${(metric.treatment_rate * 100).toFixed(1)}%`}
            />
            <KpiCard
              title="Absolute Lift"
              value={`+${(metric.effect_size * 100).toFixed(2)}%`}
              delta="Treatment − Control"
            />
            <KpiCard
              title="Bayesian Confidence"
              value={`${(metric.bayesian_prob * 100).toFixed(1)}%`}
              delta="P(Treatment > Control)"
            />
          </section>

          {/* Metric card */}
          <section className="mb-14 max-w-xl">
            <MetricCard
              title={metric.metric}
              effect={metric.effect_size}
              ci={metric.ci}
              prob={metric.bayesian_prob}
            />
          </section>

          {/* Charts */}
          <section className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                Retention Comparison
              </h3>
              <DiffBarChart
                control={metric.control_rate}
                treatment={metric.treatment_rate}
              />
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                Outcome Distribution
              </h3>
              <Image
                src={`/plots/${metricKey}_distribution.png`}
                alt="Distribution plot"
                width={600}
                height={400}
                className="mx-auto"
              />
            </div>
          </section>
        </div>
      </motion.main>

      <MethodsModal
        isOpen={showMethods}
        onClose={() => setShowMethods(false)}
      />
    </>
  );
}