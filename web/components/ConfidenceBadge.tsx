"use client";

import { confidence } from "@/data/confidence";

export default function ConfidenceBadge() {
  return (
    <div className="fixed top-6 right-6 text-right">
      <p className="text-xs text-[var(--text-muted)] tracking-wide">
        CONFIDENCE SCORE
      </p>
      <p className="text-lg font-bold text-[var(--accent-green)]">
        {(confidence.posteriorProbability * 100).toFixed(1)}%
      </p>
    </div>
  );
}