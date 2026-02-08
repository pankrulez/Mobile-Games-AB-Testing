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
    indigo: "text-indigo-600 bg-indigo-50",
    emerald: "text-emerald-600 bg-emerald-50",
    rose: "text-rose-600 bg-rose-50"
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200"
    >
      <div
        className={`inline-flex rounded-lg px-2 py-1 text-xs font-medium ${accentMap[accent]}`}
      >
        {label}
      </div>

      <div className="mt-4 text-3xl font-semibold tracking-tight">
        {value}
      </div>

      {sub && (
        <div className="mt-1 text-xs text-slate-500">
          {sub}
        </div>
      )}
    </motion.div>
  );
}