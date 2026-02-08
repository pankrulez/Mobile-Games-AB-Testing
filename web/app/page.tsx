"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import MetricCard from "@/components/MetricCard";
import AnimatedCard from "@/components/AnimatedCard";
import MethodsModal from "@/components/MethodsModal";
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
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 }
          }
        }}
        className="mx-auto max-w-6xl px-6 py-14"
      >
        {/* Intro */}
        <AnimatedCard>
          <section className="mb-10">
            <h2 className="text-xl font-semibold tracking-tight">
              Experiment Summary
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-slate-600">
              A modern analytics view of a randomized A/B test evaluating the
              impact of moving a progression gate from level 30 to level 40.
            </p>
          </section>
        </AnimatedCard>

        {/* Controls */}
        <AnimatedCard delay={0.05}>
          <section className="mb-8 flex items-center gap-6">
            <div>
              <label className="block text-xs font-medium text-slate-500">
                Retention Metric
              </label>
              <select
                className="mt-2 rounded-xl border bg-white/70 px-4 py-2 text-sm backdrop-blur"
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
              className="mt-6 text-sm text-indigo-600 hover:underline"
            >
              View methods
            </button>
          </section>
        </AnimatedCard>

        {/* Metric */}
        <AnimatedCard delay={0.1}>
          <MetricCard
            title={metric.metric}
            effect={metric.effect_size}
            ci={metric.ci}
            prob={metric.bayesian_prob}
          />
        </AnimatedCard>

        {/* Plot */}
        <AnimatedCard delay={0.15}>
          <section className="mt-10">
            <h3 className="mb-2 text-sm font-medium text-slate-700">
              Outcome Distribution
            </h3>
            <div className="rounded-2xl bg-white/70 p-4 shadow-lg backdrop-blur">
              <Image
                src={`/plots/${metricKey}_distribution.png`}
                alt="Distribution plot"
                width={600}
                height={400}
                className="mx-auto"
              />
            </div>
          </section>
        </AnimatedCard>
      </motion.main>

      <MethodsModal
        isOpen={showMethods}
        onClose={() => setShowMethods(false)}
      />
    </>
  );
}