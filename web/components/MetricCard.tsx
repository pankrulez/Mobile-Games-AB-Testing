"use client";

import { motion } from "framer-motion";

interface MetricProps {
  title: string;
  effect: number;
  ci: number[];
  prob: number;
}

export default function MetricCard({
  title,
  effect,
  ci,
  prob
}: MetricProps) {
  const positive = effect > 0;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="relative rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200"
    >
      {/* Accent strip */}
      <div
        className={`absolute inset-x-0 top-0 h-1 rounded-t-3xl ${
          positive ? "bg-emerald-500" : "bg-rose-500"
        }`}
      />

      <h3 className="mt-3 text-sm font-semibold text-slate-900">
        {title}
      </h3>

      <div className="mt-6 flex items-end gap-3">
        <span className="text-5xl font-semibold tracking-tight text-slate-900">
          +{effect.toFixed(3)}
        </span>
        <span className="mb-2 text-sm text-slate-600">
          lift
        </span>
      </div>

      <div className="mt-3 text-sm text-slate-700">
        95% CI: [{ci[0].toFixed(3)}, {ci[1].toFixed(3)}]
      </div>

      <div className="mt-6 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm">
        <span className="text-slate-700">
          P(Treatment &gt; Control)
        </span>
        <span className="font-semibold text-slate-900">
          {(prob * 100).toFixed(1)}%
        </span>
      </div>
    </motion.div>
  );
}