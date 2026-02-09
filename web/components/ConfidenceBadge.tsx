"use client";

import { confidence } from "@/data/confidence";

export default function ConfidenceBadge() {
  const pct = (confidence.posteriorProbability * 100).toFixed(1);

  return (
    <div className="fixed top-6 right-8 z-50 flex items-center gap-3">
      <div className="text-right">
        <p className="text-xs text-[var(--text-secondary)] tracking-wider">
          CONFIDENCE SCORE
        </p>
        <p className="text-lg font-semibold text-[var(--accent-green)]">
          {pct}%
        </p>
      </div>

      <div className="h-10 w-10 rounded-full bg-[var(--accent-green)]/20 border border-[var(--accent-green)]/40" />
    </div>
  );
}