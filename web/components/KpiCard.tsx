"use client";

import { motion } from "framer-motion";

interface KpiCardProps {
  label: string;
  value: string;
  sub?: string;
  accent?: "indigo" | "emerald" | "rose";
}

export default function KpiCard({
  label,
  value,
  sub,
  accent = "indigo"
}: KpiCardProps) {
  const accentMap = {
    indigo: "bg-indigo-100 text-indigo-700",
    emerald: "bg-emerald-100 text-emerald-700",
    rose: "bg-rose-100 text-rose-700"
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200"
    >
      <div
        className={`inline-flex rounded-lg px-2 py-1 text-xs font-semibold ${accentMap[accent]}`}
      >
        {label}
      </div>

      <div className="mt-4 text-3xl font-semibold text-slate-900">
        {value}
      </div>

      {sub && (
        <div className="mt-1 text-xs text-slate-600">
          {sub}
        </div>
      )}
    </motion.div>
  );
}