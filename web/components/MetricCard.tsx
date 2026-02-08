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
      layout
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="relative overflow-hidden rounded-3xl bg-white/70 p-6 shadow-xl ring-1 ring-white/50 backdrop-blur-xl"
    >
      {/* Glow */}
      <div
        className={`absolute -top-12 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full blur-3xl opacity-30 ${
          positive ? "bg-emerald-400" : "bg-rose-400"
        }`}
      />

      <h3 className="relative text-sm font-medium text-slate-500">
        {title}
      </h3>

      <div className="relative mt-6 flex items-end gap-3">
        <motion.span
          key={effect}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-semibold tracking-tight"
        >
          +{effect.toFixed(3)}
        </motion.span>
        <span className="mb-2 text-sm text-slate-500">
          lift
        </span>
      </div>

      <div className="relative mt-3 text-sm text-slate-600">
        95% CI: [{ci[0].toFixed(3)}, {ci[1].toFixed(3)}]
      </div>

      <div className="relative mt-6 flex items-center justify-between rounded-xl bg-white/60 px-4 py-3 text-sm backdrop-blur">
        <span className="text-slate-600">
          P(Treatment &gt; Control)
        </span>
        <span className="font-semibold text-slate-900">
          {(prob * 100).toFixed(1)}%
        </span>
      </div>
    </motion.div>
  );
}