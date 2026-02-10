import { confidence } from "@/data/confidence";

export default function BayesianValidationCard() {
  return (
    <div className="card p-6 border border-[var(--accent-green)]/30">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-[var(--accent-green)]">
          VALIDATED RESULTS
        </h3>
        <span className="text-xs text-[var(--accent-green)]">
          Bayesian Inference
        </span>
      </div>

      <p className="text-sm text-[var(--text-secondary)] mb-4">
        {confidence.interpretation}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-xs text-[var(--text-muted)]">
          Posterior Probability
        </span>
        <span className="text-lg font-semibold text-[var(--accent-green)]">
          {(confidence.posteriorProbability * 100).toFixed(1)}%
        </span>
      </div>
    </div>
  );
}